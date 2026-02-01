
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
  private readonly string _uploadPath;
  private readonly IMemoryCache _cache;
  private readonly INotificationService _notificationService;

  public ExcelImportController(ApplicationDbContext context, IMemoryCache cache, INotificationService notificationService)
  {
    _context = context;
    _cache = cache;
    _notificationService = notificationService;
    _uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "uploads", "excel_imports");

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
          _ => (new List<string>(), new List<string>())
      };
  }

  private (bool isValid, string errorMessage) ValidateExcelHeaders(IFormFile file, string jobType)
  {
    try
    {
      using var stream = file.OpenReadStream();
      // Read first row without skipping headers
      var firstRow = MiniExcel.Query(stream).FirstOrDefault() as IDictionary<string, object>;

      if (firstRow == null) return (false, "الملف فارغ");

      var columns = firstRow.Values
          .Select(v => v?.ToString()?.Trim())
          .Where(v => !string.IsNullOrEmpty(v))
          .ToList();

      var (required, forbidden) = GetValidationRules(jobType);

      // 1. Check Missing Columns
      var missing = required.Where(h => !columns.Any(c => c.Equals(h, StringComparison.OrdinalIgnoreCase))).ToList();
      if (missing.Any())
      {
        return (false, $"هذا الملف لا يبدو ملف {GetJobTypeAr(jobType)}. يفتقد للأعمدة الأساسية: {string.Join(", ", missing)}");
      }

      // 2. Check Forbidden Columns (Powerful Isolation)
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

  private async Task<IActionResult> CreateJob(IFormFile file, int? addedBy, string jobType)
  {
    if (file == null || file.Length == 0)
      return BadRequest("Please upload a valid Excel file.");

    var extension = Path.GetExtension(file.FileName).ToLower();
    if (extension != ".xlsx" && extension != ".xls")
      return BadRequest("Only .xlsx and .xls files are supported.");

    // Validate Headers before saving
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

    // Broadcast change
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
      // Non-admins see jobs from their department + any job uploaded by an Admin (General System Imports)
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
      // New Order: FileCode, DeptCode (Renamed to كود المديونية), AutoNumber, Type, CaseRef, Note, Claimant
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
            var filePath = Path.Combine(_uploadPath, job.FileName);
            if (System.IO.File.Exists(filePath))
            {
                try { System.IO.File.Delete(filePath); } catch { }
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
    public async Task<IActionResult> GetImportStats([FromQuery] string? jobType)
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

        var totalRowsProcessed = await query.SumAsync(j => j.ProcessedRows);

        // Monthly growth (Last 6 months)
        var sixMonthsAgo = DateTime.UtcNow.AddMonths(-6);
        var monthlyGrowth = await query
            .Where(j => j.CreatedAt >= sixMonthsAgo && j.Status == "Completed")
            .GroupBy(j => new { j.CreatedAt.Year, j.CreatedAt.Month })
            .Select(g => new
            {
                Year = g.Key.Year,
                Month = g.Key.Month,
                TotalRows = g.Sum(j => j.ProcessedRows),
                JobCount = g.Count()
            })
            .OrderBy(x => x.Year).ThenBy(x => x.Month)
            .ToListAsync();

        return Ok(new
        {
            Summary = new
            {
                TotalJobs = totalJobs,
                SuccessfulJobs = successfulJobs,
                FailedJobs = failedJobs,
                ProcessingJobs = processingJobs,
                TotalRowsProcessed = totalRowsProcessed,
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
}

public class UpdateJobDto
{
    public string FileName { get; set; }
}

