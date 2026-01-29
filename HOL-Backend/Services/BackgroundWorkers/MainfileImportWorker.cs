using EFCore.BulkExtensions;

using System.Data;

namespace House_of_law_api.Services.BackgroundWorkers;

public class MainfileImportWorker : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;
    private readonly ILogger<MainfileImportWorker> _logger;
    private readonly IHubContext<NotificationsHub> _hubContext;
    private readonly string _uploadPath;

    public MainfileImportWorker(
        IServiceProvider serviceProvider, 
        ILogger<MainfileImportWorker> logger,
        IHubContext<NotificationsHub> hubContext,
        IWebHostEnvironment environment)
    {
        _serviceProvider = serviceProvider;
        _logger = logger;
        _hubContext = hubContext;
        _uploadPath = Path.Combine(environment.WebRootPath ?? environment.ContentRootPath, "uploads", "excel_imports");
        
        // Register encoding for ExcelDataReader
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                using (var scope = _serviceProvider.CreateScope())
                {
                    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                    
                    var pendingJob = await context.ImportJobs
                        .Where(j => j.Status == "Pending" && j.JobType == "Mainfile")
                        .OrderBy(j => j.CreatedAt)
                        .FirstOrDefaultAsync(stoppingToken);

                    if (pendingJob != null)
                    {
                        await ProcessJobAsync(pendingJob, context, stoppingToken);
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error checking for pending import jobs");
            }

            await Task.Delay(5000, stoppingToken); // Check every 5 seconds
        }
    }

    private void LogToFile(string message)
    {
        try
        {
            var logPath = Path.Combine(_uploadPath, "import_debug.log");
            File.AppendAllText(logPath, $"[{DateTime.Now}] {message}{Environment.NewLine}");
        }
        catch { /* Best effort */ }
    }

    private async Task ProcessJobAsync(ImportJob job, ApplicationDbContext context, CancellationToken stoppingToken)
    {
        _logger.LogInformation("Starting processing job {JobId} for file {FileName}", job.Id, job.FileName);
        
        job.Status = "Processing";
        await context.SaveChangesAsync(stoppingToken);

        var filePath = Path.Combine(_uploadPath, job.StoredFileName ?? job.FileName);
        
        if (!File.Exists(filePath))
        {
            job.Status = "Failed";
            job.ErrorMessage = "File not found on server.";
            await context.SaveChangesAsync(stoppingToken);
            return;
        }

        int processedCount = 0;
        int queuedCount = 0;

        try
        {
            var batchSize = 2500;
            var buffer = new List<Mainfile>();

            var initialDbCount = await context.Mainfiles.CountAsync(stoppingToken);
            LogToFile($"DEBUG: Processing Job {job.Id}. Initial DB count: {initialDbCount}");
            
            using var stream = File.Open(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            var allRows = MiniExcelLibs.MiniExcel.Query(stream, useHeaderRow: true).ToList();
            
            job.TotalRows = allRows.Count;
            LogToFile($"DEBUG: Excel read complete. Found {allRows.Count} rows in file.");
            await context.SaveChangesAsync(stoppingToken);

            foreach (IDictionary<string, object> row in allRows)
            {
                if (stoppingToken.IsCancellationRequested) break;

                processedCount++;
                try
                {
                    string GetStr(string key) {
                        var k = row.Keys.FirstOrDefault(x => x.Equals(key, StringComparison.OrdinalIgnoreCase));
                        return k != null ? row[k]?.ToString() : null;
                    }

                    int GetInt(string key) {
                        var s = GetStr(key);
                        return int.TryParse(s, out int val) ? val : 0;
                    }

                    bool? GetBool(string key) {
                        var s = GetStr(key);
                        if (string.IsNullOrEmpty(s)) return null;
                        s = s.Trim().ToLower();
                        return s == "true" || s == "1" || s == "نعم" || s == "yes";
                    }

                    var mainfile = new Mainfile
                    {
                        Code = GetInt("الكود"),
                        Name = GetStr("الاسم"),
                        Cid = GetStr("رقم الهوية"),
                        Address = GetStr("العنوان"), // Added to template
                        Nationality = GetStr("الجنسية"),
                        Archive = GetBool("مؤرشف"),
                        Note = GetStr("ملاحظة"),
                        Work = GetStr("العمل"),
                        Membership = GetStr("العضوية"),
                        CompanyEmail = GetStr("بريد الشركة"),
                        CompanyFax = GetStr("فاكس الشركة"),
                        CompanyRegister = GetStr("سجل الشركة"),
                        Partner1 = GetStr("شريك 1"),
                        Partner2 = GetStr("شريك 2"),
                        Partner3 = GetStr("شريك 3"),
                        RegisterType = GetStr("نوع السجل"),
                        AddedBy = job.CreatedById,
                        DateAdded = DateTime.UtcNow,
                        ImportJobId = job.Id
                    };

                    if (mainfile.Code > 0 || !string.IsNullOrEmpty(mainfile.Name))
                    {
                        buffer.Add(mainfile);
                        queuedCount++;
                    }

                    if (buffer.Count >= batchSize)
                    {
                        LogToFile($"DEBUG: Saving batch ending at Excel row {processedCount}. (Buffer: {buffer.Count}, Total Queued: {queuedCount})");
                        await SaveBatchAsync(buffer, context, job, processedCount, stoppingToken);
                        buffer.Clear();
                    }
                }
                catch (Exception rowEx)
                {
                    LogToFile($"DEBUG: Row {processedCount} mapping error: {rowEx.Message}");
                }
            }

            if (buffer.Count > 0)
            {
                LogToFile($"DEBUG: Saving final batch. size: {buffer.Count}");
                await SaveBatchAsync(buffer, context, job, processedCount, stoppingToken);
            }

            var finalDbCount = await context.Mainfiles.CountAsync(stoppingToken);
            var actualAdded = finalDbCount - initialDbCount;

            job.Status = "Completed";
            job.Progress = 100;
            job.ProcessedRows = processedCount;
            job.ErrorMessage = $"Summary: ExcelRows={job.TotalRows}, ValidRows={queuedCount}, DB_Added={actualAdded}, DB_Total={finalDbCount}";
            job.CompletedAt = DateTime.UtcNow;
            await context.SaveChangesAsync(stoppingToken);
            
            LogToFile($"DEBUG: Job {job.Id} finished. {job.ErrorMessage}");
            
            await _hubContext.Clients.User(job.CreatedById.ToString()).SendAsync("broadcast", new 
            {
                type = "excel_import_complete",
                data = new { jobId = job.Id, fileName = job.FileName, jobType = "Mainfile", total = processedCount, added = actualAdded }
            }, stoppingToken);
        }
        catch (Exception ex)
        {
            LogToFile($"CRITICAL ERROR in Job {job.Id}: {ex.Message}");
            if (ex.InnerException != null) LogToFile($"Inner Exception: {ex.InnerException.Message}");
            
            _logger.LogError(ex, "Critical error in ImportWorker for job {JobId}", job.Id);
            job.Status = "Failed";
            job.ErrorMessage = ex.Message;
            await context.SaveChangesAsync(stoppingToken);
        }
    }

    private async Task SaveBatchAsync(List<Mainfile> items, ApplicationDbContext context, ImportJob job, int processedCount, CancellationToken stoppingToken)
    {
        try 
        {
            LogToFile($"Saving batch of {items.Count} items to database...");
            
            // For large Mainfile imports, BulkInsert is needed. 
            // We ensure ImportJobId is included by forcing a full property check if needed, 
            // but standard BulkInsert should work if properties match.
            await context.BulkInsertAsync(items, cancellationToken: stoppingToken);
            
            LogToFile("Batch saved successfully.");
            
            job.ProcessedRows = processedCount;
            job.Progress = (int)((double)processedCount / job.TotalRows * 100);
            await context.SaveChangesAsync(stoppingToken);

            await _hubContext.Clients.User(job.CreatedById.ToString()).SendAsync("broadcast", new 
            {
                type = "excel_import_progress",
                data = new { jobId = job.Id, jobType = "Mainfile", progress = job.Progress, processed = processedCount, total = job.TotalRows }
            }, stoppingToken);
        }
        catch (Exception ex)
        {
            LogToFile($"ERROR in SaveBatchAsync: {ex.Message}");
            if (ex.InnerException != null) LogToFile($"Inner Exception: {ex.InnerException.Message}");
            
            // Fallback for Mainfile if BulkInsert fails
            LogToFile("Attempting fallback with AddRange...");
            context.Mainfiles.AddRange(items);
            await context.SaveChangesAsync(stoppingToken);
            LogToFile("Fallback saved successfully.");
            
            throw; 
        }
    }
}
