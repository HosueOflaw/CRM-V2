
using System.Data;

namespace House_of_law_api.Services.BackgroundWorkers;

public class AutoNumberImportWorker : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;
    private readonly ILogger<AutoNumberImportWorker> _logger;
    private readonly IHubContext<NotificationsHub> _hubContext;
    private readonly string _uploadPath;

    public AutoNumberImportWorker(
        IServiceProvider serviceProvider, 
        ILogger<AutoNumberImportWorker> logger,
        IHubContext<NotificationsHub> hubContext,
        IWebHostEnvironment environment)
    {
        _serviceProvider = serviceProvider;
        _logger = logger;
        _hubContext = hubContext;
        _uploadPath = Path.Combine(environment.WebRootPath ?? environment.ContentRootPath, "uploads", "excel_imports");
        
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
                        .Where(j => j.Status == "Pending" && j.JobType == "AutoNumber")
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
                _logger.LogError(ex, "Error checking for pending AutoNumber import jobs");
            }

            await Task.Delay(5000, stoppingToken);
        }
    }

    private void LogToFile(string message)
    {
        try
        {
            var logPath = Path.Combine(_uploadPath, "autonumber_import_debug.log");
            File.AppendAllText(logPath, $"[{DateTime.Now}] {message}{Environment.NewLine}");
        }
        catch { }
    }

    private async Task ProcessJobAsync(ImportJob job, ApplicationDbContext context, CancellationToken stoppingToken)
    {
        _logger.LogInformation("Starting AutoNumber processing job {JobId} for file {FileName}", job.Id, job.FileName);
        
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
            var buffer = new List<AutoNumber>();

            var initialDbCount = await context.AutoNumbers.CountAsync(stoppingToken);
            LogToFile($"DEBUG: Processing Job {job.Id}. Initial DB count: {initialDbCount}");
            
            using var stream = File.Open(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            var allRows = MiniExcelLibs.MiniExcel.Query(stream, useHeaderRow: true).ToList();
            
            job.TotalRows = allRows.Count;
            LogToFile($"DEBUG: Excel read complete. Found {allRows.Count} rows in file.");
            
            // --- CRITICAL SIGNATURE CHECK ---
            if (allRows.Count > 0) {
                var firstRow = allRows[0] as IDictionary<string, object>;
                var keys = firstRow.Keys.Select(k => k.Trim().ToLower()).ToList();
                if (!keys.Contains("كود الملف") || !keys.Contains("الرقم الآلي")) {
                    job.Status = "Failed";
                    job.ErrorMessage = "خطأ فادح: بنية الملف غير متوافقة مع الأرقام الآلية. يرجى استخدام النموذج الصحيح.";
                    await context.SaveChangesAsync(stoppingToken);
                    return;
                }
            }

            // --- VALIDATION PASS ---
            var validationErrors = new List<string>();
            int rowNum = 1; 
            foreach (IDictionary<string, object> row in allRows)
            {
                rowNum++;
                var fileCodeStr = row.Keys.FirstOrDefault(x => x.Equals("كود الملف", StringComparison.OrdinalIgnoreCase)) != null 
                    ? row[row.Keys.First(x => x.Equals("كود الملف", StringComparison.OrdinalIgnoreCase))]?.ToString() : null;
                var deptCodeStr = row.Keys.FirstOrDefault(x => x.Equals("كود المديونية", StringComparison.OrdinalIgnoreCase)) != null 
                    ? row[row.Keys.First(x => x.Equals("كود المديونية", StringComparison.OrdinalIgnoreCase))]?.ToString() : null;
                
                if (!string.IsNullOrEmpty(fileCodeStr) && !long.TryParse(fileCodeStr, out _))
                    validationErrors.Add($"السطر {rowNum}: كود الملف يجب أن يكون رقماً.");
                
                if (!string.IsNullOrEmpty(deptCodeStr) && !int.TryParse(deptCodeStr, out _))
                    validationErrors.Add($"السطر {rowNum}: كود المديونية يجب أن يكون رقماً.");

                if (validationErrors.Count > 10) break;
            }

            if (validationErrors.Any())
            {
                job.Status = "Failed";
                job.ErrorMessage = "فشل التحقق: " + string.Join(" | ", validationErrors);
                await context.SaveChangesAsync(stoppingToken);
                return;
            }
            // --- END VALIDATION PASS ---

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

                    long GetLong(string key) {
                        var s = GetStr(key);
                        return long.TryParse(s, out long val) ? val : 0;
                    }

                    var autoNum = new AutoNumber
                    {
                        FileCode = GetLong("كود الملف"),
                        DeptCode = GetInt("كود المديونية"),
                        ParentAutoId = GetInt("الرقم الآلي الأب"),
                        AutoNumberValue = GetStr("الرقم الآلي"),
                        Type = GetStr("النوع"),
                        CaseRef = GetStr("مرجع القضية"),
                        Note = GetStr("ملاحظة"),
                        Claimant = GetStr("المدعي"),
                        UserAdded = job.CreatedById,
                        DateAdded = DateTime.UtcNow,
                        ImportJobId = job.Id
                    };

                    if (autoNum.FileCode > 0 || !string.IsNullOrEmpty(autoNum.AutoNumberValue))
                    {
                        buffer.Add(autoNum);
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

            var finalDbCount = await context.AutoNumbers.CountAsync(stoppingToken);
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
                data = new { jobId = job.Id, fileName = job.FileName, jobType = "AutoNumber", total = processedCount, added = actualAdded }
            }, stoppingToken);
        }
        catch (Exception ex)
        {
            LogToFile($"CRITICAL ERROR in Job {job.Id}: {ex.Message}");
            if (ex.InnerException != null) LogToFile($"Inner Exception: {ex.InnerException.Message}");
            
            job.Status = "Failed";
            job.ErrorMessage = ex.Message;
            await context.SaveChangesAsync(stoppingToken);
        }
    }

    private async Task SaveBatchAsync(List<AutoNumber> items, ApplicationDbContext context, ImportJob job, int processedCount, CancellationToken stoppingToken)
    {
        try 
        {
            LogToFile($"Saving batch of {items.Count} items to database...");
            
            // Using AddRange + SaveChanges for better reliability with Foreign Keys in small-medium batches
            context.AutoNumbers.AddRange(items);
            await context.SaveChangesAsync(stoppingToken);
            
            LogToFile("Batch saved successfully.");
            
            job.ProcessedRows = processedCount;
            job.Progress = (int)((double)processedCount / job.TotalRows * 100);
            await context.SaveChangesAsync(stoppingToken);

            await _hubContext.Clients.User(job.CreatedById.ToString()).SendAsync("broadcast", new 
            {
                type = "excel_import_progress",
                data = new { jobId = job.Id, jobType = "AutoNumber", progress = job.Progress, processed = processedCount, total = job.TotalRows }
            }, stoppingToken);
        }
        catch (Exception ex)
        {
            LogToFile($"ERROR in SaveBatchAsync: {ex.Message}");
            if (ex.InnerException != null) LogToFile($"Inner Exception: {ex.InnerException.Message}");
            throw;
        }
    }
}
