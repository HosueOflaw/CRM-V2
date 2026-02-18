using EFCore.BulkExtensions;
using System.Data;
using ClosedXML.Excel;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SignalR;
using House_of_law_api.Data;
using House_of_law_api.Modules;
using House_of_law_api.Interfaces;
using House_of_law_api.Infrastructure.SignalR;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace House_of_law_api.Services.BackgroundWorkers;

public class FileClassificationImportWorker : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;
    private readonly ILogger<FileClassificationImportWorker> _logger;
    private readonly IHubContext<NotificationsHub> _hubContext;
    private readonly string _uploadPath;

    public FileClassificationImportWorker(
        IServiceProvider serviceProvider, 
        ILogger<FileClassificationImportWorker> logger,
        IHubContext<NotificationsHub> hubContext,
        IWebHostEnvironment environment)
    {
        _serviceProvider = serviceProvider;
        _logger = logger;
        _hubContext = hubContext;
        _uploadPath = Path.Combine(environment.ContentRootPath, "uploads", "excel_imports");
        
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        _logger.LogInformation("FileClassificationImportWorker starting...");
        Console.Out.WriteLine("FileClassificationImportWorker starting...");
        LogToFile("FileClassificationImportWorker starting...");

        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                using (var scope = _serviceProvider.CreateScope())
                {
                    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                    
                    var pendingJob = await context.ImportJobs
                        .Where(j => j.Status == "Pending" && j.JobType == "FileClassification")
                        .OrderBy(j => j.CreatedAt)
                        .FirstOrDefaultAsync(stoppingToken);

                    if (pendingJob != null)
                    {
                        await ProcessJobAsync(pendingJob, context, scope, stoppingToken);
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error checking for pending FileClassification import jobs");
            }

            await Task.Delay(5000, stoppingToken);
        }
    }

    private void LogToFile(string message)
    {
        try
        {
            var logPath = Path.Combine(_uploadPath, "classification_import_debug.log");
            File.AppendAllText(logPath, $"[{DateTime.Now}] {message}{Environment.NewLine}");
        }
        catch { }
    }

    private async Task ProcessJobAsync(ImportJob job, ApplicationDbContext context, IServiceScope scope, CancellationToken stoppingToken)
    {
        _logger.LogInformation("Starting FileClassification processing job {JobId} for file {FileName}", job.Id, job.FileName);
        
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
            var initialDbCount = await context.FileClassifications.CountAsync(stoppingToken);

            LogToFile($"DEBUG: Processing Job {job.Id}. Initial DB count: {initialDbCount}");
            
            using var stream = File.Open(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            var allRows = MiniExcelLibs.MiniExcel.Query(stream, useHeaderRow: true).ToList();
            
            job.TotalRows = allRows.Count;
            LogToFile($"DEBUG: Excel read complete. Found {allRows.Count} rows in file.");
            
            // --- CRITICAL SIGNATURE CHECK ---
            if (allRows.Count > 0) {
                var firstRow = allRows[0] as IDictionary<string, object>;
                var keys = firstRow.Keys.Select(k => k.Trim().ToLower()).ToList();
                if (!keys.Contains("كود الملف") || !keys.Contains("التصنيف")) {
                    job.Status = "Failed";
                    job.ErrorMessage = "خطأ فادح: بنية الملف غير متوافقة مع تصنيفات الملفات. يرجى استخدام النموذج الصحيح.";
                    await context.SaveChangesAsync(stoppingToken);
                    return;
                }
            }

            // --- SINGLE PASS PROCESSING ---
            int jobProcessedCount = 0;
            int jobErrorCount = 0;
            var rowBuffer = new List<FileClassification>();
            var errorRows = new List<IDictionary<string, object>>();
            var jobBatchSize = 1000;

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

                    long GetLong(string key) {
                        var s = GetStr(key);
                        return long.TryParse(s, out long val) ? val : 0;
                    }

                    // Validation
                    var fileCodeStr = GetStr("كود الملف");
                    var classificationStr = GetStr("التصنيف");
                    var deptCodeStr = GetStr("كود المديونية");
                    string rowError = null;

                    if (string.IsNullOrEmpty(fileCodeStr)) rowError = "كود الملف مطلوب.";
                    else if (!long.TryParse(fileCodeStr, out _)) rowError = $"كود الملف '{fileCodeStr}' غير صالح.";
                    else if (string.IsNullOrEmpty(classificationStr)) rowError = "التصنيف مطلوب.";

                    if (rowError != null)
                    {
                        jobErrorCount++;
                        var errorRow = new Dictionary<string, object>(row);
                        errorRow["خطأ التحقق (Error Message)"] = rowError;
                        errorRows.Add(errorRow);
                    }
                    else
                    {
                        var classification = new FileClassification
                        {
                            FileCode = GetLong("كود الملف"),
                            DeptCode = string.IsNullOrEmpty(deptCodeStr) ? null : GetLong("كود المديونية"),
                            Classification = GetStr("التصنيف"),
                            Department = GetStr("القسم"),
                            Code = GetStr("الكود"),
                            UserAdded = job.CreatedById,
                            DateAdded = DateTime.UtcNow,
                            ImportJobId = job.Id
                        };
                        rowBuffer.Add(classification);
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

            var finalDbCount = await context.FileClassifications.CountAsync(stoppingToken);
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

            // Audit Log - Resolve from scope
            var auditService = scope.ServiceProvider.GetRequiredService<IAuditService>();
            await auditService.LogActionAsync(
                null, 
                null, 
                "IMPORT_COMPLETED", 
                $"تم إكمال رفع ملف اكسيل (FileClassification): {job.FileName}. الإجمالي: {job.TotalRows}، أضيف: {actualAdded}، أخطاء: {jobErrorCount}", 
                null, 
                "ImportJob", 
                job.Id.ToString());
            
            await _hubContext.Clients.User(job.CreatedById.ToString()).SendAsync("broadcast", new 
            {
                type = "excel_import_complete",
                data = new { jobId = job.Id, fileName = job.FileName, jobType = "FileClassification", total = jobProcessedCount, added = actualAdded, errorCount = jobErrorCount }
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

    private async Task SaveBatchAsync(List<FileClassification> items, ApplicationDbContext context, ImportJob job, int processedCount, int errorCount, CancellationToken stoppingToken)
    {
        try 
        {
            LogToFile($"Saving batch of {items.Count} items to database using BulkInsert...");
            await context.BulkInsertAsync(items, cancellationToken: stoppingToken);
            LogToFile("Batch saved successfully.");
        }
        catch (Exception ex)
        {
            LogToFile($"ERROR in SaveBatchAsync (Bulk): {ex.Message}. Falling back to AddRange...");
            context.FileClassifications.AddRange(items);
            await context.SaveChangesAsync(stoppingToken);
            LogToFile("Fallback saved successfully.");
        }
        
        job.ProcessedRows = processedCount;
        job.ErrorCount = errorCount;
        job.Progress = (int)((double)processedCount / job.TotalRows * 100);
        await context.SaveChangesAsync(stoppingToken);

        await BroadcastProgress(job, processedCount, errorCount);
    }

    private byte[] GenerateErrorLog(List<IDictionary<string, object>> errorRows)
    {
        try
        {
            using var workbook = new ClosedXML.Excel.XLWorkbook();
            var worksheet = workbook.Worksheets.Add("Errors");
            worksheet.RightToLeft = true;

            if (errorRows.Count == 0) return null;

            // Headers
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
                jobType = "FileClassification", 
                progress = job.Progress, 
                processed = processed, 
                total = job.TotalRows,
                errorCount = errors
            }
        });
    }
}
