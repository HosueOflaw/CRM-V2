using EFCore.BulkExtensions;
using House_of_law_api.Data;
using House_of_law_api.Domain.Entities;
using House_of_law_api.Infrastructure.SignalR;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Text;

namespace House_of_law_api.Services.BackgroundWorkers;

public class FileDetailImportWorker : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;
    private readonly ILogger<FileDetailImportWorker> _logger;
    private readonly IHubContext<NotificationsHub> _hubContext;
    private readonly string _uploadPath;

    public FileDetailImportWorker(
        IServiceProvider serviceProvider, 
        ILogger<FileDetailImportWorker> logger,
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
                        .Where(j => j.Status == "Pending" && j.JobType == "FileDetail")
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
                _logger.LogError(ex, "Error checking for pending FileDetail import jobs");
            }

            await Task.Delay(5000, stoppingToken);
        }
    }

    private void LogToFile(string message)
    {
        try
        {
            var logPath = Path.Combine(_uploadPath, "filedetail_import_debug.log");
            File.AppendAllText(logPath, $"[{DateTime.Now}] {message}{Environment.NewLine}");
        }
        catch { }
    }

    private async Task ProcessJobAsync(ImportJob job, ApplicationDbContext context, CancellationToken stoppingToken)
    {
        _logger.LogInformation("Starting FileDetail processing job {JobId} for file {FileName}", job.Id, job.FileName);
        
        job.Status = "Processing";
        await context.SaveChangesAsync(stoppingToken);

        var filePath = Path.Combine(_uploadPath, job.FileName);
        
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
            var batchSize = 2000;
            var buffer = new List<FileDetail>();

            var initialDbCount = await context.FileDetails.CountAsync(stoppingToken);
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
                    string? GetStr(string key) {
                        var k = row.Keys.FirstOrDefault(x => x.Equals(key, StringComparison.OrdinalIgnoreCase));
                        return k != null ? row[k]?.ToString() : null;
                    }

                    int? GetInt(string key) {
                        var s = GetStr(key);
                        return int.TryParse(s, out int val) ? val : null;
                    }

                    long? GetLong(string key) {
                        var s = GetStr(key);
                        return long.TryParse(s, out long val) ? val : null;
                    }

                    decimal? GetDec(string key) {
                        var s = GetStr(key);
                        return decimal.TryParse(s, out decimal val) ? val : null;
                    }

                    DateTime? GetDate(string key) {
                        var s = GetStr(key);
                        return DateTime.TryParse(s, out DateTime val) ? val : null;
                    }

                    var detail = new FileDetail
                    {
                        FileCode = GetLong("FileCode"),
                        DeptCode = GetLong("DeptCode"),
                        Reason = GetStr("Reason"),
                        PatchNo = GetStr("PatchNo"),
                        Client = GetInt("Client"), // Now int?
                        ContractNo = GetStr("ContractNo"),
                        DeptAmount = GetDec("DeptAmount"),
                        LegalPlaintiff = GetStr("LegalPlaintiff"),
                        LawyerUser = GetInt("LawyerUser"),
                        CourtUser = GetInt("CourtUser"),
                        MdUser = GetInt("MdUser"),
                        LegalAdvisorUser = GetInt("LegalAdvisorUser"),
                        DateAdded = DateTime.UtcNow,
                        ImportJobId = job.Id
                    };

                    // Requirement check
                    if (detail.FileCode > 0)
                    {
                        buffer.Add(detail);
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

            var finalDbCount = await context.FileDetails.CountAsync(stoppingToken);
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
                data = new { jobId = job.Id, fileName = job.FileName, jobType = "FileDetail", total = processedCount, added = actualAdded }
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

    private async Task SaveBatchAsync(List<FileDetail> items, ApplicationDbContext context, ImportJob job, int processedCount, CancellationToken stoppingToken)
    {
        try 
        {
            LogToFile($"Saving batch of {items.Count} items to database...");
            
            // Using AddRange + SaveChanges for better reliability with Foreign Keys
            context.FileDetails.AddRange(items);
            await context.SaveChangesAsync(stoppingToken);
            
            LogToFile("Batch saved successfully.");
            
            job.ProcessedRows = processedCount;
            job.Progress = (int)((double)processedCount / job.TotalRows * 100);
            await context.SaveChangesAsync(stoppingToken);

            await _hubContext.Clients.User(job.CreatedById.ToString()).SendAsync("broadcast", new 
            {
                type = "excel_import_progress",
                data = new { jobId = job.Id, jobType = "FileDetail", progress = job.Progress, processed = processedCount, total = job.TotalRows }
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
