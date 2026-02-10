using EFCore.BulkExtensions;
using System.Data;
using ClosedXML.Excel;

namespace House_of_law_api.Services.BackgroundWorkers;

public class PaymentImportWorker : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;
    private readonly ILogger<PaymentImportWorker> _logger;
    private readonly IHubContext<NotificationsHub> _hubContext;
    private readonly string _uploadPath;

    public PaymentImportWorker(
        IServiceProvider serviceProvider, 
        ILogger<PaymentImportWorker> logger,
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
                        .Where(j => j.Status == "Pending" && j.JobType == "Payment")
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
                _logger.LogError(ex, "Error checking for pending payment import jobs");
            }

            await Task.Delay(5000, stoppingToken); // Check every 5 seconds
        }
    }

    private void LogToFile(string message)
    {
        try
        {
            var logPath = Path.Combine(_uploadPath, "import_payment_debug.log");
            File.AppendAllText(logPath, $"[{DateTime.Now}] {message}{Environment.NewLine}");
        }
        catch { /* Best effort */ }
    }

    private async Task ProcessJobAsync(ImportJob job, ApplicationDbContext context, CancellationToken stoppingToken)
    {
        _logger.LogInformation("Starting processing payment job {JobId} for file {FileName}", job.Id, job.FileName);
        
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
            var initialDbCount = await context.Payments.CountAsync(stoppingToken);

            LogToFile($"DEBUG: Processing Payment Job {job.Id}. Initial DB count: {initialDbCount}");
            
            using var stream = File.Open(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            var allRows = MiniExcelLibs.MiniExcel.Query(stream, useHeaderRow: true).ToList();
            
            job.TotalRows = allRows.Count;
            LogToFile($"DEBUG: Excel read complete. Found {allRows.Count} rows in file.");
            
            // --- CRITICAL SIGNATURE CHECK ---
            if (allRows.Count > 0) {
                var firstRow = allRows[0] as IDictionary<string, object>;
                var keys = firstRow.Keys.Select(k => k.Trim().ToLower()).ToList();
                if (!keys.Contains("اسم العميل") || !keys.Contains("المبلغ")) {
                    job.Status = "Failed";
                    job.ErrorMessage = "خطأ فادح: بنية الملف غير متوافقة. يجب أن يحتوي على الأعمدة: 'اسم العميل' و 'المبلغ'.";
                    await context.SaveChangesAsync(stoppingToken);
                    return;
                }
            }
            
            // --- SINGLE PASS PROCESSING ---
            int jobProcessedCount = 0;
            int jobErrorCount = 0;
            int jobQueuedCount = 0;
            var rowBuffer = new List<Payment>();
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

                    decimal? GetDecimal(string key) {
                        var s = GetStr(key);
                        return decimal.TryParse(s, out decimal val) ? val : null;
                    }
                    
                    DateTime? GetDate(string key) {
                        var s = GetStr(key);
                        return DateTime.TryParse(s, out DateTime val) ? val : null;
                    }

                    // Validation
                    var amountStr = GetStr("المبلغ");
                    var clientName = GetStr("اسم العميل");
                    var dateStr = GetStr("تاريخ الدفع");
                    var fileCodeStr = GetStr("كود الملف");
                    var deptCodeStr = GetStr("كود القسم");
                    var commissionStr = GetStr("العمولة");
                    string rowError = null;

                    if (string.IsNullOrEmpty(amountStr)) rowError = "المبلغ مطلوب.";
                    else if (!decimal.TryParse(amountStr, out _)) rowError = $"المبلغ '{amountStr}' غير صالح.";
                    else if (string.IsNullOrEmpty(clientName)) rowError = "اسم العميل مطلوب.";
                    else if (!string.IsNullOrEmpty(dateStr) && !DateTime.TryParse(dateStr, out _)) rowError = $"تاريخ الدفع '{dateStr}' غير صالح.";
                    else if (!string.IsNullOrEmpty(fileCodeStr) && !long.TryParse(fileCodeStr, out _)) rowError = $"كود الملف '{fileCodeStr}' غير صالح.";
                    else if (!string.IsNullOrEmpty(deptCodeStr) && !long.TryParse(deptCodeStr, out _)) rowError = $"كود القسم '{deptCodeStr}' غير صالح.";
                    else if (!string.IsNullOrEmpty(commissionStr) && !int.TryParse(commissionStr, out _)) rowError = $"العمولة '{commissionStr}' غير صالحة.";

                    if (rowError != null)
                    {
                        jobErrorCount++;
                        var errorRow = new Dictionary<string, object>(row);
                        errorRow["خطأ التحقق (Error Message)"] = rowError;
                        errorRows.Add(errorRow);
                    }
                    else
                    {
                        var payment = new Payment
                        {
                            AlEntry = clientName, 
                            Value = GetDecimal("المبلغ"),
                            FileStatusAfter = GetStr("العملة") ?? "EGP",
                            PaymentMethod = GetStr("طريقة الدفع"),
                            SalesAgent = GetStr("موظف المبيعات"),
                            SalesCompany = GetStr("شركة المبيعات"),
                            JouralEntry = GetStr("ملاحظات"),
                            FileCode = long.TryParse(fileCodeStr, out var fc) ? fc : null,
                            DeptCode = long.TryParse(deptCodeStr, out var dc) ? dc : null,
                            Commission = int.TryParse(commissionStr, out var cm) ? cm : null,
                            UserAdded = job.CreatedById,
                            DateAdded = GetDate("تاريخ الدفع") ?? DateTime.UtcNow,
                            ImportJobId = job.Id
                        };
                        rowBuffer.Add(payment);
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

            var finalDbCount = await context.Payments.CountAsync(stoppingToken);
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
            
            await _hubContext.Clients.User(job.CreatedById.ToString()).SendAsync("broadcast", new 
            {
                type = "excel_import_complete",
                data = new { jobId = job.Id, fileName = job.FileName, jobType = "Payment", total = jobProcessedCount, added = actualAdded, errorCount = jobErrorCount }
            }, stoppingToken);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Critical error in PaymentImportWorker for job {JobId}", job.Id);
            job.Status = "Failed";
            job.ErrorMessage = ex.Message;
            await context.SaveChangesAsync(stoppingToken);
        }
    }

    private async Task SaveBatchAsync(List<Payment> items, ApplicationDbContext context, ImportJob job, int processedCount, int errorCount, CancellationToken stoppingToken)
    {
        try 
        {
            await context.BulkInsertAsync(items, cancellationToken: stoppingToken);
        }
        catch (Exception ex)
        {
            LogToFile($"Fallback add range due to: {ex.Message}");
            context.Payments.AddRange(items);
            await context.SaveChangesAsync(stoppingToken);
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
                jobType = "Payment", 
                progress = job.Progress, 
                processed = processed, 
                total = job.TotalRows,
                errorCount = errors
            }
        });
    }
}
