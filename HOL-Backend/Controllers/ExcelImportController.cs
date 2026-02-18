

using Microsoft.Extensions.Caching.Memory;
using House_of_law_api.Services;

using MiniExcelLibs;
using ClosedXML.Excel;

namespace House_of_law_api.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class ExcelImportController : ControllerBase
{
  private readonly ApplicationDbContext _context;
  private readonly IWebHostEnvironment _env;
  private readonly string _uploadPath;
  private readonly IMemoryCache _cache;
  private readonly INotificationService _notificationService;

  public ExcelImportController(ApplicationDbContext context, IMemoryCache cache, INotificationService notificationService, IWebHostEnvironment env)
  {
    _context = context;
    _cache = cache;
    _notificationService = notificationService;
    _env = env;
    _uploadPath = Path.Combine(_env.ContentRootPath, "uploads", "excel_imports");

    if (!Directory.Exists(_uploadPath))
    {
      Directory.CreateDirectory(_uploadPath);
    }
  }

  private (List<string> required, List<string> forbidden) GetValidationRules(string jobType)
  {
      return jobType switch
      {
          "Mainfile" => (
              new List<string> { "الكود", "الاسم" },
              new List<string> { "الرقم الآلي", "رقم القيد", "المبلغ المختص" }
          ),
          "AutoNumber" => (
              new List<string> { "كود الملف", "الرقم الآلي" },
              new List<string> { "السبب", "رقم القيد", "المبلغ المختص", "الاسم" }
          ),
          "FileDetail" => (
              new List<string> { "كود الملف", "كود المديونية", "المبلغ المختص" },
              new List<string> { "الرقم الآلي", "الاسم" }
          ),
          "Payment" => (
              new List<string> { "اسم العميل", "المبلغ" }, // Required columns based on Worker
              new List<string> { "الرقم الآلي" } // Forbidden columns to avoid mixup (Removed FileCode)
          ),
          "FileClassification" => (
              new List<string> { "كود الملف", "التصنيف", "القسم" },
              new List<string> { "رقم القيد", "الرقم الآلي", "المبلغ" }
          ),
          "Note" => (
              new List<string> { "كود الملف", "الملاحظة" },
              new List<string> { "رقم القيد", "الرقم الآلي", "المبلغ المختص" }
          ),
          "AdditionalAmount" => (
              new List<string> { "كود الملف", "المبلغ" },
              new List<string> { "رقم القيد", "الرقم الآلي" }
          ),
          "Mail" => (
              new List<string> { "كود الملف", "الموضوع", "المحتوى" },
              new List<string> { "رقم القيد", "الرقم الآلي", "المبلغ" }
          ),
          "Attachment" => (
              new List<string> { "كود الملف", "كود المرفق" },
              new List<string> { "رقم القيد", "الرقم الآلي" }
          ),
          _ => (new List<string>(), new List<string>())
      };
  }

  private (bool isValid, string errorMessage) ValidateExcelHeaders(IFormFile file, string jobType)
  {
    try
    {
      using var stream = file.OpenReadStream();
      var firstRow = MiniExcel.Query(stream).FirstOrDefault() as IDictionary<string, object>;

      if (firstRow == null) return (false, "الملف فارغ");

      var columns = firstRow.Values
          .Select(v => v?.ToString()?.Trim())
          .Where(v => !string.IsNullOrEmpty(v))
          .ToList();

      var (required, forbidden) = GetValidationRules(jobType);

      var missing = required.Where(h => !columns.Any(c => c.Equals(h, StringComparison.OrdinalIgnoreCase))).ToList();
      if (missing.Any())
      {
        return (false, $"هذا الملف لا يبدو ملف {GetJobTypeAr(jobType)}. يفتقد للأعمدة الأساسية: {string.Join(", ", missing)}");
      }

      var foundForbidden = forbidden.Where(h => columns.Any(c => c.Equals(h, StringComparison.OrdinalIgnoreCase))).ToList();
      if (foundForbidden.Any())
      {
        return (false, $"خطأ: هذا الملف يحتوي على أعمدة لا تنتمي لعملية {GetJobTypeAr(jobType)} ({string.Join(", ", foundForbidden)}). يرجى التأكد من اختيار الصفحة الصحيحة لنوع الملف.");
      }

      return (true, null);
    }
    catch (Exception ex)
    {
      return (false, $"خطأ أثناء فحص بنية الملف: {ex.Message}");
    }
  }

  private string GetJobTypeAr(string type) => type switch {
      "Mainfile" => "بيانات رئيسية",
      "AutoNumber" => "أرقام آلية",
      "FileDetail" => "تفاصيل ملفات",
      "Payment" => "مدفوعات",
      "FileClassification" => "تصنيفات الملفات",
      "Note" => "ملاحظات الجداول",
      "AdditionalAmount" => "مبالغ إضافية",
      "Mail" => "البريد",
      "Attachment" => "المرفقات",
      _ => type
  };

  [HttpPost("upload-mainfiles")]
  public async Task<IActionResult> UploadMainfiles(IFormFile file, [FromForm] int? addedBy)
  {
    return await CreateJob(file, addedBy, "Mainfile");
  }

  [HttpPost("upload-autonumbers")]
  public async Task<IActionResult> UploadAutoNumbers(IFormFile file, [FromForm] int? addedBy)
  {
    return await CreateJob(file, addedBy, "AutoNumber");
  }

  [HttpPost("upload-filedetails")]
  public async Task<IActionResult> UploadFileDetails(IFormFile file, [FromForm] int? addedBy)
  {
    return await CreateJob(file, addedBy, "FileDetail");
  }

  [HttpPost("upload-payments")]
  public async Task<IActionResult> UploadPayments(IFormFile file, [FromForm] int? addedBy)
  {
    return await CreateJob(file, addedBy, "Payment");
  }

  [HttpPost("upload-fileclassifications")]
  public async Task<IActionResult> UploadFileClassifications(IFormFile file, [FromForm] int? addedBy)
  {
    return await CreateJob(file, addedBy, "FileClassification");
  }

  [HttpPost("upload-notes")]
  public async Task<IActionResult> UploadNotes(IFormFile file, [FromForm] int? addedBy)
  {
    return await CreateJob(file, addedBy, "Note");
  }

  [HttpPost("upload-additionalamounts")]
  public async Task<IActionResult> UploadAdditionalAmounts(IFormFile file, [FromForm] int? addedBy)
  {
    return await CreateJob(file, addedBy, "AdditionalAmount");
  }

  [HttpPost("upload-mails")]
  public async Task<IActionResult> UploadMails(IFormFile file, [FromForm] int? addedBy)
  {
    return await CreateJob(file, addedBy, "Mail");
  }

  private async Task<IActionResult> CreateJob(IFormFile file, int? addedBy, string jobType)
  {
    if (file == null || file.Length == 0)
      return BadRequest("Please upload a valid Excel file.");

    var extension = Path.GetExtension(file.FileName).ToLower();
    if (extension != ".xlsx" && extension != ".xls")
      return BadRequest("Only .xlsx and .xls files are supported.");

    var (isValid, headerError) = ValidateExcelHeaders(file, jobType);
    if (!isValid) return BadRequest(headerError);

    var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
    if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out var userId))
      return Unauthorized();

    var creatorOrAddedById = addedBy ?? userId;

    var fileName = $"{Guid.NewGuid()}{extension}";
    var filePath = Path.Combine(_uploadPath, fileName);

    using (var stream = new FileStream(filePath, FileMode.Create))
    {
      await file.CopyToAsync(stream);
    }

    var job = new ImportJob
    {
      FileName = file.FileName,
      StoredFileName = fileName,
      JobType = jobType,
      Status = "Pending",
      Progress = 0,
      CreatedAt = DateTime.UtcNow,
      CreatedById = creatorOrAddedById
    };

    _context.ImportJobs.Add(job);
    await _context.SaveChangesAsync();

    var currentUser = await _context.Users.FindAsync(userId);
    if (currentUser != null)
    {
        var deptGroupName = $"dept_{currentUser.Department}";
        await _notificationService.BroadcastToChannelAsync("admins", "excel_import_changed", new { jobId = job.Id, fileName = job.FileName, action = "created" });
        await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_import_changed", new { jobId = job.Id, fileName = job.FileName, action = "created" });
    }

    return Ok(new { jobId = job.Id, message = "File uploaded successfully. Processing started in background." });
  }

  [HttpGet("jobs")]
  public async Task<IActionResult> GetMyJobs([FromQuery] PaginationParams pagination, [FromQuery] string jobType, [FromQuery] string search)
  {
    var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
    if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out var userId))
      return Unauthorized();

    var currentUser = await _context.Users.FindAsync(userId);
    if (currentUser == null) return Unauthorized();

    var isAdmin = currentUser.Role?.ToLower() == "admin";
    var userDept = currentUser.Department;

    var query = _context.ImportJobs
        .Include(j => j.CreatedBy)
        .AsQueryable();

    if (!isAdmin)
    {
      query = query.Where(j => j.CreatedBy.Department == userDept || j.CreatedBy.Role.ToLower() == "admin" || j.CreatedBy.Role.ToLower() == "administrator");
    }

    if (!string.IsNullOrEmpty(jobType))
    {
      query = query.Where(j => j.JobType == jobType);
    }

    if (!string.IsNullOrEmpty(search))
    {
      query = query.Where(j => j.FileName.Contains(search));
    }

    var totalCount = await query.CountAsync();

    var jobs = await query
        .OrderByDescending(j => j.CreatedAt)
        .Skip(pagination.Skip)
        .Take(pagination.PageSize)
        .Select(j => new {
          j.Id,
          j.FileName,
          j.JobType,
          j.Status,
          j.Progress,
          j.TotalRows,
          j.ProcessedRows,
          j.ErrorCount,
          j.ErrorMessage,
          j.CreatedAt,
          j.CompletedAt,
          CreatedBy = j.CreatedBy != null ? j.CreatedBy.FullName : "System"
        })
        .ToListAsync();

    return Ok(new PagedResponse<object>
    {
      Data = jobs,
      TotalCount = totalCount,
      PageNumber = pagination.PageNumber,
      PageSize = pagination.PageSize
    });
  }

  [HttpGet("status/{jobId}")]
  public async Task<IActionResult> GetJobStatus(int jobId)
  {
    var job = await _context.ImportJobs.FindAsync(jobId);
    if (job == null) return NotFound();

    return Ok(new
    {
      job.Id,
      job.Status,
      job.Progress,
      job.ProcessedRows,
      job.TotalRows,
      job.ErrorMessage,
      job.CompletedAt
    });
  }

  [AllowAnonymous]
  [HttpGet("download-template")]
  public IActionResult DownloadTemplate()
  {
    try
    {
      var headers = new List<string>
      {
        "الكود", "الاسم", "رقم الهوية", "العنوان", "الجنسية", "ملاحظة", "العمل",
        "العضوية", "بريد الشركة", "فاكس الشركة", "سجل الشركة", "شريك 1", "شريك 2", "شريك 3", "نوع السجل", "مؤرشف"
      };

      var content = GenerateExcelTemplate(headers);
      return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Mainfiles_Template.xlsx");
    }
    catch (Exception ex)
    {
      return BadRequest(new { message = "Error generating template", detail = ex.Message });
    }
  }

  [AllowAnonymous]
  [HttpGet("download-autonumbers-template")]
  public IActionResult DownloadAutoNumbersTemplate()
  {
    try
    {
      var headers = new List<string>
      {
        "كود الملف", "كود المديونية", "الرقم الآلي", "النوع", "مرجع القضية", "ملاحظة", "المدعي", "الرقم الآلي الأب"
      };

      var content = GenerateExcelTemplate(headers);
      return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "AutoNumbers_Template.xlsx");
    }
    catch (Exception ex)
    {
      return BadRequest(new { message = "Error generating template", detail = ex.Message });
    }
  }

  [AllowAnonymous]
  [HttpGet("download-filedetails-template")]
  public IActionResult DownloadFileDetailsTemplate()
  {
    try
    {
      var headers = new List<string>
      {
        "كود الملف", "كود المديونية", "السبب", "رقم القيد", "العميل", "رقم العقد",
        "المبلغ المختص", "المدعي القانوني", "المحامي", "المحكمة", "MD", "المستشار القانوني", "تاريخ الانتهاء"
      };
      
      var content = GenerateExcelTemplate(headers);
      return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "FileDetails_Template.xlsx");
    }
    catch (Exception ex)
    {
      return BadRequest(new { message = "Error generating template", detail = ex.Message });
    }
  }

    [AllowAnonymous]
    [HttpGet("download-payments-template")]
    public IActionResult DownloadPaymentsTemplate()
    {
      try
      {
        var headers = new List<string>
        {
          "اسم العميل", "المبلغ", "العملة", "تاريخ الدفع", "طريقة الدفع", "موظف المبيعات", "شركة المبيعات", "ملاحظات", "كود الملف", "كود القسم", "العمولة"
        };
        
        var content = GenerateExcelTemplate(headers);
        return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Payments_Template.xlsx");
      }
      catch (Exception ex)
      {
        return BadRequest(new { message = "Error generating template", detail = ex.Message });
      }
    }

    [AllowAnonymous]
    [HttpGet("download-fileclassifications-template")]
    public IActionResult DownloadFileClassificationsTemplate()
    {
      try
      {
        var headers = new List<string>
        {
          "كود الملف", "كود المديونية", "التصنيف", "القسم", "الكود"
        };
        
        var content = GenerateExcelTemplate(headers);
        return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "FileClassifications_Template.xlsx");
      }
      catch (Exception ex)
      {
        return BadRequest(new { message = "Error generating template", detail = ex.Message });
      }
    }

  [AllowAnonymous]
  [HttpGet("download-notes-template")]
  public IActionResult DownloadNotesTemplate()
  {
    try
    {
      var headers = new List<string>
      {
        "كود الملف", "كود المديونية", "الملاحظة"
      };
      
      var content = GenerateExcelTemplate(headers);
      return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Notes_Template.xlsx");
    }
    catch (Exception ex)
    {
      return BadRequest(new { message = "Error generating template", detail = ex.Message });
    }
  }

  [AllowAnonymous]
  [HttpGet("download-additionalamounts-template")]
  public IActionResult DownloadAdditionalAmountsTemplate()
  {
    try
    {
      var headers = new List<string>
      {
        "كود الملف", "كود المديونية", "المبلغ", "النوع"
      };
      
      var content = GenerateExcelTemplate(headers);
      return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "AdditionalAmounts_Template.xlsx");
    }
    catch (Exception ex)
    {
      return BadRequest(new { message = "Error generating template", detail = ex.Message });
    }
  }

    [AllowAnonymous]
    [HttpGet("download-mails-template")]
    public IActionResult DownloadMailsTemplate()
    {
      try
      {
        var headers = new List<string>
        {
          "كود الملف", "كود المديونية", "الموضوع", "المحتوى"
        };
        
        var content = GenerateExcelTemplate(headers);
        return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Mails_Template.xlsx");
      }
      catch (Exception ex)
      {
        return BadRequest(new { message = "Error generating template", detail = ex.Message });
      }
    }

    private byte[] GenerateExcelTemplate(List<string> headers)
    {
        using var workbook = new XLWorkbook();
        var worksheet = workbook.Worksheets.Add("Template");
        worksheet.RightToLeft = true;

        for (int i = 0; i < headers.Count; i++)
        {
            worksheet.Cell(1, i + 1).Value = headers[i];
            worksheet.Cell(1, i + 1).Style.Font.Bold = true;
            worksheet.Cell(1, i + 1).Style.Fill.BackgroundColor = XLColor.LightGray;
        }

        worksheet.Columns().AdjustToContents();

        using var stream = new MemoryStream();
        workbook.SaveAs(stream);
        return stream.ToArray();
    }

    [HttpGet("download-original/{jobId}")]
    public async Task<IActionResult> DownloadOriginal(int jobId)
    {
        var job = await _context.ImportJobs.AsNoTracking().FirstOrDefaultAsync(j => j.Id == jobId);
        if (job == null) return NotFound("العملية غير موجودة");

        var filePath = Path.Combine(_uploadPath, job.StoredFileName ?? job.FileName);
        if (!System.IO.File.Exists(filePath)) return NotFound("الملف الأصلي غير موجود على الخادم");

        var userFileName = job.FileName;
        if (!userFileName.EndsWith(".xlsx", StringComparison.OrdinalIgnoreCase) && !userFileName.EndsWith(".xls", StringComparison.OrdinalIgnoreCase))
        {
            userFileName += Path.GetExtension(job.StoredFileName ?? ".xlsx");
        }

        var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.Read);
        return File(fileStream, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", userFileName);
    }

    [Authorize(Policy = "AdminOnly")]
    [HttpDelete("revert/{jobId}")]
    public async Task<IActionResult> RevertImport(int jobId)
    {
        var job = await _context.ImportJobs.FindAsync(jobId);
        if (job == null) return NotFound("Job not found");

        if (job.Status == "Processing") return BadRequest("Cannot revert a job that is currently processing.");

        var strategy = _context.Database.CreateExecutionStrategy();
        
        try
        {
            await strategy.ExecuteAsync(async () =>
            {
                using var transaction = await _context.Database.BeginTransactionAsync();
                try
                {
                    // Delete linked data
                    if (job.JobType == "Mainfile")
                    {
                        var records = _context.Mainfiles.Where(m => m.ImportJobId == jobId);
                        _context.Mainfiles.RemoveRange(records);
                    }
                    else if (job.JobType == "AutoNumber")
                    {
                        var records = _context.AutoNumbers.Where(a => a.ImportJobId == jobId);
                        _context.AutoNumbers.RemoveRange(records);
                    }
                    else if (job.JobType == "FileDetail")
                    {
                        var records = _context.FileDetails.Where(f => f.ImportJobId == jobId);
                        _context.FileDetails.RemoveRange(records);
                    }
                else if (job.JobType == "Attachment")
                {
                    var records = _context.Attachments.Where(a => a.ImportJobId == jobId);
                    _context.Attachments.RemoveRange(records);
                }
                    else if (job.JobType == "Payment")
                    {
                        var records = _context.Payments.Where(p => p.ImportJobId == jobId);
                        _context.Payments.RemoveRange(records);
                    }
                    else if (job.JobType == "FileClassification")
                    {
                        var records = _context.FileClassifications.Where(f => f.ImportJobId == jobId);
                        _context.FileClassifications.RemoveRange(records);
                    }
                    else if (job.JobType == "Note")
                    {
                        var records = _context.Notes.Where(n => n.ImportJobId == jobId);
                        _context.Notes.RemoveRange(records);
                    }
                    else if (job.JobType == "AdditionalAmount")
                    {
                        var records = _context.AdditionalAmounts.Where(a => a.ImportJobId == jobId);
                        _context.AdditionalAmounts.RemoveRange(records);
                    }
                    else if (job.JobType == "Mail")
                    {
                        var records = _context.Mails.Where(m => m.ImportJobId == jobId);
                        _context.Mails.RemoveRange(records);
                    }

                    // Remove the job record
                    _context.ImportJobs.Remove(job);
                    
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();

                    // Clear cache for this job
                    _cache.Remove($"job_data_{jobId}");

                    // Try to delete the physical file (outside transaction but inside strategy is okay, 
                    // though usually safer after commit)
                }
                catch
                {
                    await transaction.RollbackAsync();
                    throw;
                }
            });

            // Delete file after successful commit
            var fileNameToDelete = job.StoredFileName ?? job.FileName;
            var filePathToDelete = Path.Combine(_uploadPath, fileNameToDelete);
            if (System.IO.File.Exists(filePathToDelete))
            {
                try { System.IO.File.Delete(filePathToDelete); } catch { }
            }

            // Broadcast change
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim != null && int.TryParse(userIdClaim.Value, out var userId))
            {
                var currentUser = await _context.Users.FindAsync(userId);
                if (currentUser != null)
                {
                    var deptGroupName = $"dept_{currentUser.Department}";
                    await _notificationService.BroadcastToChannelAsync("admins", "excel_import_changed", new { jobId = jobId, action = "reverted" });
                    await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_import_changed", new { jobId = jobId, action = "reverted" });
                }
            }

            return Ok(new { message = $"Job {jobId} and its associated data have been reverted successfully." });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Error during revert", detail = ex.Message });
        }
    }

    [HttpGet("job-data/{jobId}")]
    public async Task<IActionResult> GetJobData(int jobId, [FromQuery] PaginationParams pagination, [FromQuery] string search)
    {
        var job = await _context.ImportJobs.FindAsync(jobId);
        if (job == null) return NotFound("العملية غير موجودة");

        if (job.Status == "Pending" || job.Status == "Processing") 
            return BadRequest(new { message = "العملية لا تزال قيد المعالجة، يرجى الانتظار حتى تكتمل." });

        if (job.Status == "Failed")
            return BadRequest(new { message = "هذه العملية فشلت: " + job.ErrorMessage });

        IQueryable<object> query;
        int totalCount = 0;

        if (job.JobType == "Mainfile")
        {
            var q = _context.Mainfiles.Where(m => m.ImportJobId == jobId);
            if (!string.IsNullOrEmpty(search))
            {
                q = q.Where(m => m.Name.Contains(search) || m.Code.ToString().Contains(search) || m.Cid.Contains(search));
            }
            totalCount = await q.CountAsync();
            query = q.OrderByDescending(m => m.Id).Skip(pagination.Skip).Take(pagination.PageSize);
        }
        else if (job.JobType == "AutoNumber")
        {
            var q = _context.AutoNumbers.Where(a => a.ImportJobId == jobId);
            if (!string.IsNullOrEmpty(search))
            {
                q = q.Where(a => a.FileCode.ToString().Contains(search) || a.AutoNumberValue.Contains(search) || a.CaseRef.Contains(search));
            }
            totalCount = await q.CountAsync();
            query = q.OrderByDescending(a => a.Id).Skip(pagination.Skip).Take(pagination.PageSize);
        }
        else if (job.JobType == "FileDetail")
        {
            var q = _context.FileDetails.Where(f => f.ImportJobId == jobId);
            if (!string.IsNullOrEmpty(search))
            {
                q = q.Where(f => f.FileCode.ToString().Contains(search) || f.Client.ToString().Contains(search) || f.ContractNo.Contains(search));
            }
            totalCount = await q.CountAsync();
            query = q.OrderByDescending(f => f.Id).Skip(pagination.Skip).Take(pagination.PageSize);
        }
        else if (job.JobType == "Payment")
        {
            var q = _context.Payments.Where(p => p.ImportJobId == jobId);
            if (!string.IsNullOrEmpty(search))
            {
                q = q.Where(p => p.JouralEntry.Contains(search) || p.AlEntry.Contains(search));
            }
            totalCount = await q.CountAsync();
            query = q.OrderByDescending(p => p.Id).Skip(pagination.Skip).Take(pagination.PageSize);
        }
        else if (job.JobType == "FileClassification")
        {
            var q = _context.FileClassifications.Where(f => f.ImportJobId == jobId);
            if (!string.IsNullOrEmpty(search))
            {
                q = q.Where(f => f.Classification.Contains(search) || f.Department.Contains(search) || f.Code.Contains(search));
            }
            totalCount = await q.CountAsync();
            query = q.OrderByDescending(f => f.Id).Skip(pagination.Skip).Take(pagination.PageSize);
        }
        else if (job.JobType == "Note")
        {
            var q = _context.Notes.Where(n => n.ImportJobId == jobId);
            if (!string.IsNullOrEmpty(search))
            {
                q = q.Where(n => n.FileCode.ToString().Contains(search) || n.NoteText.Contains(search));
            }
            totalCount = await q.CountAsync();
            query = q.OrderByDescending(n => n.Id).Skip(pagination.Skip).Take(pagination.PageSize);
        }
        else if (job.JobType == "AdditionalAmount")
        {
            var q = _context.AdditionalAmounts.Where(a => a.ImportJobId == jobId);
            if (!string.IsNullOrEmpty(search))
            {
                q = q.Where(a => a.FileCode.ToString().Contains(search) || a.AmountType.Contains(search));
            }
            totalCount = await q.CountAsync();
            query = q.OrderByDescending(a => a.Id).Skip(pagination.Skip).Take(pagination.PageSize);
        }
        else if (job.JobType == "Mail")
        {
            var q = _context.Mails.Where(m => m.ImportJobId == jobId);
            if (!string.IsNullOrEmpty(search))
            {
                q = q.Where(m => m.FileCode.ToString().Contains(search) || m.Subject.Contains(search) || m.Body.Contains(search));
            }
            totalCount = await q.CountAsync();
            query = q.OrderByDescending(m => m.Id).Skip(pagination.Skip).Take(pagination.PageSize);
        }
        else if (job.JobType == "Attachment")
        {
            var q = _context.Attachments.Where(a => a.ImportJobId == jobId);
            if (!string.IsNullOrEmpty(search))
            {
                q = q.Where(a => a.FileCode.ToString().Contains(search) || a.AttachCode.Contains(search) || a.Notes.Contains(search) || a.Value.Contains(search));
            }
            totalCount = await q.CountAsync();
            query = q.OrderByDescending(a => a.Id).Skip(pagination.Skip).Take(pagination.PageSize);
        }
        else
        {
            return BadRequest("Unknown job type");
        }

        var data = await query.ToListAsync();

        return Ok(new PagedResponse<object>
        {
            Data = data,
            TotalCount = totalCount,
            PageNumber = pagination.PageNumber,
            PageSize = pagination.PageSize
        });
    }

    [HttpGet("stats")]
    public async Task<IActionResult> GetImportStats([FromQuery] string jobType)
    {
        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
        if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out var userId))
            return Unauthorized();

        var currentUser = await _context.Users.FindAsync(userId);
        if (currentUser == null) return Unauthorized();

        var query = _context.ImportJobs.AsQueryable();

        // Security: Admins see global stats, others see departmental stats + admin-uploaded jobs
        var role = currentUser.Role?.ToLower() ?? "";
        if (role != "admin" && role != "administrator")
        {
            query = query.Include(j => j.CreatedBy)
                         .Where(j => j.CreatedBy.Department == currentUser.Department || 
                                  j.CreatedBy.Role == "admin" || 
                                  j.CreatedBy.Role == "administrator" ||
                                  j.CreatedById == userId);
        }

        if (!string.IsNullOrEmpty(jobType))
        {
            query = query.Where(j => j.JobType == jobType);
        }

        var totalJobs = await query.CountAsync();
        var successfulJobs = await query.CountAsync(j => j.Status == "Completed");
        var failedJobs = await query.CountAsync(j => j.Status == "Failed");
        var processingJobs = await query.CountAsync(j => j.Status == "Processing" || j.Status == "Pending");

        var processedJobsQuery = query.Where(j => j.Status == "Completed");
        var totalRowsProcessed = await processedJobsQuery.SumAsync(j => (int?)(j.ProcessedRows - j.ErrorCount)) ?? 0;

        // Monthly growth (Last 6 months)
        var sixMonthsAgo = DateTime.UtcNow.AddMonths(-6);
        var monthlyGrowth = await processedJobsQuery
            .Where(j => j.CreatedAt >= sixMonthsAgo)
            .GroupBy(j => new { j.CreatedAt.Year, j.CreatedAt.Month })
            .Select(g => new
            {
                Year = g.Key.Year,
                Month = g.Key.Month,
                TotalRows = g.Sum(j => j.ProcessedRows - j.ErrorCount),
                JobCount = g.Count()
            })
            .OrderBy(x => x.Year).ThenBy(x => x.Month)
            .ToListAsync();

        var totalRowsAttempted = await query.SumAsync(j => (int?)j.TotalRows) ?? 0;
        var totalErrorCount = await query.SumAsync(j => (int?)j.ErrorCount) ?? 0;
        var totalSuccessfulRows = await query.Where(j => j.Status == "Completed").SumAsync(j => (int?)(j.ProcessedRows - j.ErrorCount)) ?? 0;

        return Ok(new
        {
            Summary = new
            {
                TotalJobs = totalJobs,
                SuccessfulJobs = successfulJobs,
                FailedJobs = failedJobs,
                ProcessingJobs = processingJobs,
                TotalRowsAttempted = totalRowsAttempted,
                TotalSuccessfulRows = totalSuccessfulRows,
                TotalErrorCount = totalErrorCount,
                SuccessRate = totalJobs > 0 ? (double)successfulJobs / totalJobs * 100 : 0
            },
            MonthlyGrowth = monthlyGrowth
        });
    }

    [HttpPut("job/{id}")]
    public async Task<IActionResult> UpdateJob(int id, [FromBody] UpdateJobDto dto)
    {
        var job = await _context.ImportJobs.FindAsync(id);
        if (job == null) return NotFound("العملية غير موجودة");

        if (!string.IsNullOrEmpty(dto.FileName))
        {
            job.FileName = dto.FileName;
        }

        try
        {
            await _context.SaveChangesAsync();

            // Broadcast change
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim != null && int.TryParse(userIdClaim.Value, out var uId))
            {
                var currentUser = await _context.Users.FindAsync(uId);
                if (currentUser != null)
                {
                    var deptGroupName = $"dept_{currentUser.Department}";
                    await _notificationService.BroadcastToChannelAsync("admins", "excel_import_changed", new { jobId = id, fileName = job.FileName, action = "updated" });
                    await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_import_changed", new { jobId = id, fileName = job.FileName, action = "updated" });
                }
            }

            return Ok(job);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"خطأ أثناء تحديث العملية: {ex.Message}");
        }
    }

    [HttpGet("download-error-log/{jobId}")]
    public async Task<IActionResult> DownloadErrorLog(int jobId)
    {
        var job = await _context.ImportJobs.AsNoTracking().FirstOrDefaultAsync(j => j.Id == jobId);
        if (job == null || job.ErrorLogFile == null) return NotFound("سجل الأخطاء غير موجود لهذه العملية");

        var fileName = job.ErrorLogFileName ?? $"Errors_{job.FileName}";
        if (!fileName.EndsWith(".xlsx", StringComparison.OrdinalIgnoreCase)) fileName += ".xlsx";

        return File(job.ErrorLogFile, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileName);
    }

    [HttpPost("upload-attachments")]
    public async Task<IActionResult> UploadAttachments(IFormFile file, [FromForm] int? addedBy)
    {
        return await CreateJob(file, addedBy, "Attachment");
    }

    [HttpGet("download-attachments-template")]
    [Authorize(Policy = "UserOnly")]
    public IActionResult DownloadAttachmentsTemplate()
    {
        var templatePath = Path.Combine(_env.ContentRootPath, "Templates", "AttachmentsTemplate.xlsx");
        if (!System.IO.File.Exists(templatePath))
        {
            var wb = new XLWorkbook();
            var ws = wb.Worksheets.Add("Attachments");
            ws.RightToLeft = true;
            ws.Cell(1, 1).Value = "كود الملف";
            ws.Cell(1, 2).Value = "كود المديونية";
            ws.Cell(1, 3).Value = "كود المرفق";
            ws.Cell(1, 4).Value = "نوع المرفق";
            ws.Cell(1, 5).Value = "القيمة";
            ws.Cell(1, 6).Value = "ملاحظات";
            
            // Styling
            var rng = ws.Range(1, 1, 1, 6);
            rng.Style.Font.Bold = true;
            rng.Style.Fill.BackgroundColor = XLColor.LightGray;
            ws.Columns().AdjustToContents();

            using var stream = new MemoryStream();
            wb.SaveAs(stream);
            return File(stream.ToArray(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "AttachmentsTemplate.xlsx");
        }
        return PhysicalFile(templatePath, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "AttachmentsTemplate.xlsx");
    }

    [HttpGet("export-job-data/{jobId}")]
    public async Task<IActionResult> ExportJobData(int jobId)
    {
        var job = await _context.ImportJobs.AsNoTracking().FirstOrDefaultAsync(j => j.Id == jobId);
        if (job == null) return NotFound("العملية غير موجودة");

        var jobType = job.JobType;
        byte[] content;
        var fileName = $"Current_{job.FileName}";
        if (!fileName.EndsWith(".xlsx", StringComparison.OrdinalIgnoreCase)) fileName += ".xlsx";

        try
        {
            using var workbook = new ClosedXML.Excel.XLWorkbook();
            var worksheet = workbook.Worksheets.Add("Data");
            worksheet.RightToLeft = true;

            List<object> list = jobType switch
            {
                "Mainfile" => (await _context.Mainfiles.AsNoTracking().Where(m => m.ImportJobId == jobId).ToListAsync()).Cast<object>().ToList(),
                "AutoNumber" => (await _context.AutoNumbers.AsNoTracking().Where(a => a.ImportJobId == jobId).ToListAsync()).Cast<object>().ToList(),
                "FileDetail" => (await _context.FileDetails.AsNoTracking().Where(f => f.ImportJobId == jobId).ToListAsync()).Cast<object>().ToList(),
                "Payment" => (await _context.Payments.AsNoTracking().Where(p => p.ImportJobId == jobId).ToListAsync()).Cast<object>().ToList(),
                "FileClassification" => (await _context.FileClassifications.AsNoTracking().Where(f => f.ImportJobId == jobId).ToListAsync()).Cast<object>().ToList(),
                "Note" => (await _context.Notes.AsNoTracking().Where(n => n.ImportJobId == jobId).ToListAsync()).Cast<object>().ToList(),
                "AdditionalAmount" => (await _context.AdditionalAmounts.AsNoTracking().Where(a => a.ImportJobId == jobId).ToListAsync()).Cast<object>().ToList(),
                "Mail" => (await _context.Mails.AsNoTracking().Where(m => m.ImportJobId == jobId).ToListAsync()).Cast<object>().ToList(),
                "Attachment" => (await _context.Attachments.AsNoTracking().Where(a => a.ImportJobId == jobId).ToListAsync()).Cast<object>().ToList(),
                _ => throw new Exception("Unknown job type")
            };

            if (list.Count == 0) return BadRequest("لا توجد بيانات حالية لهذه العملية في قاعدة البيانات.");

            var properties = list[0].GetType().GetProperties()
                .Where(p => p.Name != "Id" && p.Name != "ImportJobId" && p.Name != "CreatedBy" && p.Name != "ImportJob")
                .ToList();

            // Headers
            for (int i = 0; i < properties.Count; i++)
            {
                var cell = worksheet.Cell(1, i + 1);
                cell.Value = properties[i].Name;
                cell.Style.Font.Bold = true;
                cell.Style.Fill.BackgroundColor = ClosedXML.Excel.XLColor.LightGray;
            }

            // Data
            for (int r = 0; r < list.Count; r++)
            {
                for (int c = 0; c < properties.Count; c++)
                {
                    var val = properties[c].GetValue(list[r]);
                    worksheet.Cell(r + 2, c + 1).Value = val?.ToString() ?? "";
                }
            }

            worksheet.Columns().AdjustToContents();
            using var stream = new MemoryStream();
            workbook.SaveAs(stream);
            content = stream.ToArray();
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"خطأ أثناء توليد الملف: {ex.Message}");
        }

        return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileName);
    }
}

public class UpdateJobDto
{
    public string FileName { get; set; }
}

