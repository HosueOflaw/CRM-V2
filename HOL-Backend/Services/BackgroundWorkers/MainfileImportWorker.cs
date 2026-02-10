using EFCore.BulkExtensions;
using System.Data;
using ClosedXML.Excel;

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
        _uploadPath = Path.Combine(environment.ContentRootPath, "uploads", "excel_imports");
        
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

        try
        {
            var initialDbCount = await context.Mainfiles.CountAsync(stoppingToken);

            LogToFile($"DEBUG: Processing Job {job.Id}. Initial DB count: {initialDbCount}");
            
            using var stream = File.Open(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            var allRows = MiniExcelLibs.MiniExcel.Query(stream, useHeaderRow: true).ToList();
            
            job.TotalRows = allRows.Count;
            LogToFile($"DEBUG: Excel read complete. Found {allRows.Count} rows in file.");
            
            // --- CRITICAL SIGNATURE CHECK ---
            if (allRows.Count > 0) {
                var firstRow = allRows[0] as IDictionary<string, object>;
                var keys = firstRow.Keys.Select(k => k.Trim().ToLower()).ToList();
                if (!keys.Contains("الكود") || !keys.Contains("الاسم")) {
                    job.Status = "Failed";
                    job.ErrorMessage = "خطأ فادح: بنية الملف غير متوافقة مع البيانات الرئيسية. يرجى استخدام النموذج الصحيح.";
                    await context.SaveChangesAsync(stoppingToken);
                    return;
                }
            }
            
            // --- SINGLE PASS PROCESSING ---
            int jobProcessedCount = 0;
            int jobErrorCount = 0;
            int jobQueuedCount = 0;
            var rowBuffer = new List<Mainfile>();
            int jobBatchSize = 100;
            var errorRows = new List<IDictionary<string, object>>();

            foreach (IDictionary<string, object> row in allRows)
            {
                if (stoppingToken.IsCancellationRequested) break;
                jobProcessedCount++;

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

                    // Validation
                    var codeStr = GetStr("الكود");
                    var name = GetStr("الاسم");
                    string rowError = null;

                    if (string.IsNullOrEmpty(codeStr)) rowError = "الكود مطلوب.";
                    else if (!int.TryParse(codeStr, out _)) rowError = $"الكود '{codeStr}' يجب أن يكون رقماً صحيحاً.";
                    else if (string.IsNullOrEmpty(name)) rowError = "الاسم مطلوب.";

                    if (rowError != null)
                    {
                        jobErrorCount++;
                        var errorRow = new Dictionary<string, object>(row);
                        errorRow["خطأ التحقق (Error Message)"] = rowError;
                        errorRows.Add(errorRow);
                    }
                    else
                    {
                        var mainfile = new Mainfile
                        {
                            Code = GetInt("الكود"),
                            Name = GetStr("الاسم"),
                            Cid = GetStr("رقم الهوية"),
                            Address = GetStr("العنوان"),
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
                        rowBuffer.Add(mainfile);
                        jobQueuedCount++;
                    }

                    if (rowBuffer.Count >= jobBatchSize)
                    {
                        await SaveBatchAsync(rowBuffer, context, job, jobProcessedCount, jobErrorCount, stoppingToken);
                        rowBuffer.Clear();
                    }
                }
                catch (Exception rowEx)
                {
                    LogToFile($"DEBUG: Row {jobProcessedCount} error: {rowEx.Message}");
                    jobErrorCount++;
                    var errorRow = new Dictionary<string, object>(row);
                    errorRow["Error"] = rowEx.Message;
                    errorRows.Add(errorRow);
                }
            }

            if (rowBuffer.Count > 0)
            {
                await SaveBatchAsync(rowBuffer, context, job, jobProcessedCount, jobErrorCount, stoppingToken);
            }

            var finalDbCount = await context.Mainfiles.CountAsync(stoppingToken);
            var actualAdded = finalDbCount - initialDbCount;

            // Generate Error Log if needed
            if (errorRows.Any())
            {
                job.ErrorLogFile = GenerateErrorLog(errorRows);
                job.ErrorLogFileName = $"Errors_{job.FileName}";
            }

            job.Status = "Completed";
            job.Progress = 100;
            job.ProcessedRows = jobProcessedCount;
            job.ErrorCount = jobErrorCount;
            job.ErrorMessage = $"Summary: Total={job.TotalRows}, Added={actualAdded}, Errors={jobErrorCount}";
            job.CompletedAt = DateTime.UtcNow;
            await context.SaveChangesAsync(stoppingToken);
            
            LogToFile($"DEBUG: Job {job.Id} finished. {job.ErrorMessage}");
            
            await _hubContext.Clients.User(job.CreatedById.ToString()).SendAsync("broadcast", new 
            {
                type = "excel_import_complete",
                data = new { jobId = job.Id, fileName = job.FileName, jobType = "Mainfile", total = jobProcessedCount, added = actualAdded, errorCount = jobErrorCount }
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

    private async Task SaveBatchAsync(List<Mainfile> items, ApplicationDbContext context, ImportJob job, int processedCount, int errorCount, CancellationToken stoppingToken)
    {
        try 
        {
            LogToFile($"Saving batch of {items.Count} items to database...");
            await context.BulkInsertAsync(items, cancellationToken: stoppingToken);
            LogToFile("Batch saved successfully.");
            
            job.ProcessedRows = processedCount;
            job.ErrorCount = errorCount;
            job.Progress = (int)((double)processedCount / job.TotalRows * 100);
            await context.SaveChangesAsync(stoppingToken);

            await BroadcastProgress(job, processedCount, errorCount);
        }
        catch (Exception ex)
        {
            LogToFile($"ERROR in SaveBatchAsync: {ex.Message}");
            LogToFile("Attempting fallback with AddRange...");
            context.Mainfiles.AddRange(items);
            await context.SaveChangesAsync(stoppingToken);
            LogToFile("Fallback saved successfully.");
        }
    }

    private byte[] GenerateErrorLog(List<IDictionary<string, object>> errorRows)
    {
        try
        {
            using var workbook = new ClosedXML.Excel.XLWorkbook();
            var worksheet = workbook.Worksheets.Add("Errors");
            worksheet.RightToLeft = true;

            if (errorRows.Count == 0) return null;

            // Headers (use columns from first error row)
            var headers = errorRows[0].Keys.ToList();
            for (int i = 0; i < headers.Count; i++)
            {
                var cell = worksheet.Cell(1, i + 1);
                cell.Value = headers[i];
                cell.Style.Font.Bold = true;
                cell.Style.Fill.BackgroundColor = ClosedXML.Excel.XLColor.LightGray;
            }

            // Data
            for (int r = 0; r < errorRows.Count; r++)
            {
                var rowData = errorRows[r];
                for (int c = 0; c < headers.Count; c++)
                {
                    var val = rowData.ContainsKey(headers[c]) ? rowData[headers[c]]?.ToString() : "";
                    worksheet.Cell(r + 2, c + 1).Value = val;
                }
            }

            worksheet.Columns().AdjustToContents();
            using var stream = new MemoryStream();
            workbook.SaveAs(stream);
            return stream.ToArray();
        }
        catch (Exception ex)
        {
            LogToFile($"ERROR generating error log: {ex.Message}");
            return null;
        }
    }

    private async Task BroadcastProgress(ImportJob job, int processed, int errors)
    {
        await _hubContext.Clients.User(job.CreatedById.ToString()).SendAsync("broadcast", new 
        {
            type = "excel_import_progress",
            data = new 
            { 
                jobId = job.Id, 
                jobType = "Mainfile", 
                progress = job.Progress, 
                processed = processed, 
                total = job.TotalRows,
                errorCount = errors
            }
        });
    }
}
