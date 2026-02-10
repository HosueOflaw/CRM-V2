using Microsoft.Extensions.Caching.Memory;
using House_of_law_api.Services;
namespace House_of_law_api.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class DataViewController : ControllerBase
{
  private readonly ApplicationDbContext _context;
  private readonly ILogger<DataViewController> _logger;
  private readonly IMemoryCache _cache;
  private readonly INotificationService _notificationService;

  public DataViewController(ApplicationDbContext context, ILogger<DataViewController> logger, IMemoryCache cache, INotificationService notificationService)
  {
    _context = context;
    _logger = logger;
    _cache = cache;
    _notificationService = notificationService;
  }

  // GET: api/DataView/mainfiles
  [HttpGet("mainfiles")]
  public async Task<IActionResult> GetAllMainfiles(
    [FromQuery] int page = 1,
    [FromQuery] int pageSize = 50)
  {
    var query = _context.Mainfiles
      .AsNoTracking()
      .OrderByDescending(m => m.Id);

    var total = await query.CountAsync();
    var items = await query
      .Skip((page - 1) * pageSize)
      .Take(pageSize)
      .Select(m => new MainfileDto
      {
        Id = m.Id,
        Code = m.Code,
        Name = m.Name,
        Cid = m.Cid,
        Address = m.Address,
        DateAdded = m.DateAdded,
        Nationality = m.Nationality,
        Archive = m.Archive,
        Note = m.Note,
        Work = m.Work,
        Membership = m.Membership,
        CompanyEmail = m.CompanyEmail,
        CompanyFax = m.CompanyFax,
        CompanyRegister = m.CompanyRegister,
        Partner1 = m.Partner1,
        Partner2 = m.Partner2,
        Partner3 = m.Partner3,
        RegisterType = m.RegisterType,
        AddedBy = m.AddedBy,
        ImportJobId = m.ImportJobId
      })
      .ToListAsync();

    return Ok(new
    {
      total,
      page,
      pageSize,
      items
    });
  }

  // GET: api/DataView/filedetails
  [HttpGet("filedetails")]
  public async Task<IActionResult> GetAllFileDetails(
    [FromQuery] int page = 1,
    [FromQuery] int pageSize = 50)
  {
    var query = _context.FileDetails
      .AsNoTracking()
      .OrderByDescending(f => f.Id);

    var total = await query.CountAsync();
    var items = await query
      .Skip((page - 1) * pageSize)
      .Take(pageSize)
      .Select(f => new FileDetailDto
      {
        Id = f.Id,
        FileCode = f.FileCode,
        DeptCode = f.DeptCode,
        Reason = f.Reason,
        PatchNo = f.PatchNo,
        Client = f.Client,
        DateAdded = f.DateAdded,
        DateFinished = f.DateFinished,
        ContractNo = f.ContractNo,
        DeptAmount = f.DeptAmount,
        LegalPlaintiff = f.LegalPlaintiff,
        LawyerUser = f.LawyerUser,
        CourtUser = f.CourtUser,
        MdUser = f.MdUser,
        LegalAdvisorUser = f.LegalAdvisorUser,
        ImportJobId = f.ImportJobId
      })
      .ToListAsync();

    return Ok(new
    {
      total,
      page,
      pageSize,
      items
    });
  }

  // GET: api/DataView/autonumbers
  [HttpGet("autonumbers")]
  public async Task<IActionResult> GetAllAutoNumbers(
    [FromQuery] int page = 1,
    [FromQuery] int pageSize = 50)
  {
    var query = _context.AutoNumbers
      .AsNoTracking()
      .OrderByDescending(a => a.Id);

    var total = await query.CountAsync();
    var items = await query
      .Skip((page - 1) * pageSize)
      .Take(pageSize)
      .Select(a => new AutoNumberDto
      {
        Id = a.Id,
        FileCode = a.FileCode,
        ParentAutoId = a.ParentAutoId,
        AutoNumberValue = a.AutoNumberValue,
        Type = a.Type,
        CaseRef = a.CaseRef,
        Note = a.Note,
        Claimant = a.Claimant,
        UserAdded = a.UserAdded,
        DateAdded = a.DateAdded,
        DeptCode = a.DeptCode,
        ImportJobId = a.ImportJobId
      })
      .ToListAsync();

    return Ok(new
    {
      total,
      page,
      pageSize,
      items
    });
  }

  // GET: api/DataView/mainfiles/{id}
  [HttpGet("mainfiles/{id}")]
  public async Task<IActionResult> GetMainfileById(long id)
  {
    var mainfile = await _context.Mainfiles
      .AsNoTracking()
      .Where(m => m.Id == id)
      .Select(m => new MainfileDto
      {
        Id = m.Id,
        Code = m.Code,
        Name = m.Name,
        Cid = m.Cid,
        Address = m.Address,
        DateAdded = m.DateAdded,
        Nationality = m.Nationality,
        Archive = m.Archive,
        Note = m.Note,
        Work = m.Work,
        Membership = m.Membership,
        CompanyEmail = m.CompanyEmail,
        CompanyFax = m.CompanyFax,
        CompanyRegister = m.CompanyRegister,
        Partner1 = m.Partner1,
        Partner2 = m.Partner2,
        Partner3 = m.Partner3,
        RegisterType = m.RegisterType,
        AddedBy = m.AddedBy,
        ImportJobId = m.ImportJobId
      })
      .FirstOrDefaultAsync();

    if (mainfile == null)
      return NotFound();

    return Ok(mainfile);
  }

  // GET: api/DataView/mainfiles/code/{code}
  [HttpGet("mainfiles/code/{code}")]
  public async Task<IActionResult> GetMainfileByCode(string code)
  {
    if (string.IsNullOrEmpty(code)) return BadRequest("Code is required");

    Mainfile record = null;

    // 1. Try search by business Code (int)
    if (int.TryParse(code, out int intCode))
    {
      record = await _context.Mainfiles
        .AsNoTracking()
        .FirstOrDefaultAsync(m => m.Code == intCode);
    }

    // 2. If not found, try search by database Id (long)
    if (record == null && long.TryParse(code, out long id))
    {
      record = await _context.Mainfiles
        .AsNoTracking()
        .FirstOrDefaultAsync(m => m.Id == id);
    }

    if (record == null)
      return NotFound(new { message = $"لم يتم العثور على الملف بالرمز أو الرقم التعريفي: {code}" });

    var dto = new MainfileDto
    {
      Id = record.Id,
      Code = record.Code,
      Name = record.Name,
      Cid = record.Cid,
      Address = record.Address,
      DateAdded = record.DateAdded,
      Nationality = record.Nationality,
      Archive = record.Archive,
      Note = record.Note,
      Work = record.Work,
      Membership = record.Membership,
      CompanyEmail = record.CompanyEmail,
      CompanyFax = record.CompanyFax,
      CompanyRegister = record.CompanyRegister,
      Partner1 = record.Partner1,
      Partner2 = record.Partner2,
      Partner3 = record.Partner3,
      RegisterType = record.RegisterType,
      AddedBy = record.AddedBy,
      ImportJobId = record.ImportJobId
    };

    return Ok(dto);
  }

  [HttpGet("mainfiles/autonumber/{autoNumber}")]
  public async Task<IActionResult> GetMainfileByAutoNumber(string autoNumber)
  {
    if (string.IsNullOrEmpty(autoNumber)) return BadRequest("AutoNumber ID or value is required");

    long recordFileCode = 0;

    // 1. Try search by Primary Key ID of AutoNumber table
    if (int.TryParse(autoNumber, out int id))
    {
      var auto = await _context.AutoNumbers.AsNoTracking().FirstOrDefaultAsync(a => a.Id == id);
      if (auto != null) recordFileCode = auto.FileCode ?? 0;
    }

    // 2. Fallback to search by Value if not found by ID
    if (recordFileCode == 0)
    {
      recordFileCode = await _context.AutoNumbers
        .AsNoTracking()
        .Where(a => a.AutoNumberValue.Contains(autoNumber))
        .Select(a => a.FileCode ?? 0)
        .FirstOrDefaultAsync();
    }

    if (recordFileCode == 0)
      return NotFound(new { message = "لم يتم العثور على أي ملف مرتبط بهذا الرقم الآلي (كود الملف غير موجود)" });

    // 3. Find Mainfile by ID OR by Code (since FileCode might store either)
    var mainfile = await _context.Mainfiles.AsNoTracking()
        .FirstOrDefaultAsync(m => m.Id == recordFileCode || m.Code == (int)recordFileCode);

    if (mainfile == null)
      return NotFound(new { message = $"تم العثور على الرقم الآلي ولكن الملف المرتبط (كود: {recordFileCode}) غير موجود في قاعدة البيانات" });

    return Ok(mainfile);
  }

  [HttpGet("mainfiles/filedetail/{detail}")]
  public async Task<IActionResult> GetMainfileByFileDetail(string detail)
  {
    if (string.IsNullOrEmpty(detail)) return BadRequest("Search term is required");

    long recordFileCode = 0;

    // 1. Try search by Primary Key ID
    if (int.TryParse(detail, out int id))
    {
      var fd = await _context.FileDetails.AsNoTracking().FirstOrDefaultAsync(f => f.Id == id);
      if (fd != null) recordFileCode = fd.FileCode ?? 0;
    }

    // 2. Fallback to search by ContractNo if not found by ID
    if (recordFileCode == 0)
    {
      recordFileCode = await _context.FileDetails
        .AsNoTracking()
        .Where(f => f.ContractNo.Contains(detail))
        .Select(f => f.FileCode ?? 0)
        .FirstOrDefaultAsync();
    }

    if (recordFileCode == 0)
      return NotFound(new { message = "لم يتم العثور على ملف مرتبط ببيانات البحث هذه (كود الملف غير موجود)" });

    // 3. Find Mainfile by ID OR by Code
    var mainfile = await _context.Mainfiles.AsNoTracking()
        .FirstOrDefaultAsync(m => m.Id == recordFileCode || m.Code == (int)recordFileCode);

    if (mainfile == null)
      return NotFound(new { message = $"تم العثور على تفاصيل العقد ولكن الملف المرتبط (كود: {recordFileCode}) غير موجود في قاعدة البيانات" });

    return Ok(mainfile);
  }

  // GET: api/DataView/mainfiles/{id}/details
  [HttpGet("mainfiles/{id}/details")]
  public async Task<IActionResult> GetMainfileDetails(long id)
  {
    var details = await _context.FileDetails
      .AsNoTracking()
      .Where(f => f.FileCode == id)
      .Select(f => new FileDetailDto
      {
        Id = f.Id,
        FileCode = f.FileCode,
        DeptCode = f.DeptCode,
        Reason = f.Reason,
        PatchNo = f.PatchNo,
        Client = f.Client,
        DateAdded = f.DateAdded,
        DateFinished = f.DateFinished,
        ContractNo = f.ContractNo,
        DeptAmount = f.DeptAmount,
        LegalPlaintiff = f.LegalPlaintiff,
        LawyerUser = f.LawyerUser,
        CourtUser = f.CourtUser,
        MdUser = f.MdUser,
        LegalAdvisorUser = f.LegalAdvisorUser,
        ImportJobId = f.ImportJobId
      })
      .ToListAsync();

    return Ok(details);
  }

  // GET: api/DataView/mainfiles/{id}/autonumbers
  [HttpGet("mainfiles/{id}/autonumbers")]
  public async Task<IActionResult> GetMainfileAutoNumbers(long id)
  {
    var autonumbers = await _context.AutoNumbers
      .AsNoTracking()
      .Where(a => a.FileCode == id)
      .Select(a => new AutoNumberDto
      {
        Id = a.Id,
        FileCode = a.FileCode,
        ParentAutoId = a.ParentAutoId,
        AutoNumberValue = a.AutoNumberValue,
        Type = a.Type,
        CaseRef = a.CaseRef,
        Note = a.Note,
        Claimant = a.Claimant,
        UserAdded = a.UserAdded,
        DateAdded = a.DateAdded,
        DeptCode = a.DeptCode,
        ImportJobId = a.ImportJobId
      })
      .ToListAsync();

    return Ok(autonumbers);
  }

  // PUT: api/DataView/mainfiles/{id}
  [HttpPut("mainfiles/{id}")]
  public async Task<IActionResult> UpdateMainfile(long id, [FromBody] MainfileDto dto)
  {
    if (id != dto.Id) return BadRequest("ID mismatch");

    var mainfile = await _context.Mainfiles.FindAsync(id);
    if (mainfile == null) return NotFound();

    // Role Check
    var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
    if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out var userId))
        return Unauthorized();

    var currentUser = await _context.Users.FindAsync(userId);
    if (currentUser == null) return Unauthorized();

    var role = currentUser.Role?.ToLower() ?? "";
    if (role != "admin" && role != "administrator" && role != "supervisor")
    {
        return Forbid("ليس لديك صلاحية تعديل البيانات. هذه الميزة متاحة للمشرفين والمديرين فقط.");
    }

    // Update fields
    mainfile.Code = dto.Code;
    mainfile.Name = dto.Name;
    mainfile.Cid = dto.Cid;
    mainfile.Address = dto.Address;
    mainfile.Nationality = dto.Nationality;
    mainfile.Archive = dto.Archive;
    mainfile.Note = dto.Note;
    mainfile.Work = dto.Work;
    mainfile.Membership = dto.Membership;
    mainfile.CompanyEmail = dto.CompanyEmail;
    mainfile.CompanyFax = dto.CompanyFax;
    mainfile.CompanyRegister = dto.CompanyRegister;
    mainfile.Partner1 = dto.Partner1;
    mainfile.Partner2 = dto.Partner2;
    mainfile.Partner3 = dto.Partner3;
    mainfile.RegisterType = dto.RegisterType;
    // We don't usually update AddedBy, DateAdded, or ImportJobId manually through this UI

    try
    {
      await _context.SaveChangesAsync();
      
      // Invalidate cache for the specific job
      if (mainfile.ImportJobId.HasValue)
        _cache.Remove($"job_data_{mainfile.ImportJobId}");
      
      if (dto.ImportJobId.HasValue && dto.ImportJobId != mainfile.ImportJobId)
        _cache.Remove($"job_data_{dto.ImportJobId}");

      // Broadcast change to department and admins
      var deptGroupName = $"dept_{currentUser.Department}";
      await _notificationService.BroadcastToChannelAsync("admins", "excel_data_updated", new { type = "Mainfile", id = id, action = "updated" });
      await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_data_updated", new { type = "Mainfile", id = id, action = "updated" });

      return Ok(dto);
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "Error updating mainfile {Id}", id);
      return StatusCode(500, "Internal server error during update");
    }
  }

  // GET: api/DataView/filedetails/{id}
  [HttpGet("filedetails/{id}")]
  public async Task<IActionResult> GetFileDetailById(int id)
  {
    var fileDetail = await _context.FileDetails
      .AsNoTracking()
      .Where(f => f.Id == id)
      .Select(f => new FileDetailDto
      {
        Id = f.Id,
        FileCode = f.FileCode,
        DeptCode = f.DeptCode,
        Reason = f.Reason,
        PatchNo = f.PatchNo,
        Client = f.Client,
        DateAdded = f.DateAdded,
        DateFinished = f.DateFinished,
        ContractNo = f.ContractNo,
        DeptAmount = f.DeptAmount,
        LegalPlaintiff = f.LegalPlaintiff,
        LawyerUser = f.LawyerUser,
        CourtUser = f.CourtUser,
        MdUser = f.MdUser,
        LegalAdvisorUser = f.LegalAdvisorUser,
        ImportJobId = f.ImportJobId
      })
      .FirstOrDefaultAsync();

    if (fileDetail == null)
      return NotFound();

    return Ok(fileDetail);
  }

  // GET: api/DataView/filedetails/search/{term}
  [HttpGet("filedetails/search/{term}")]
  public async Task<IActionResult> SearchFileDetails(string term)
  {
    if (string.IsNullOrEmpty(term)) return BadRequest("Search term is required");

    var query = _context.FileDetails.AsNoTracking();

    if (int.TryParse(term, out int id))
    {
       query = query.Where(f => f.Id == id);
    }
    else
    {
       // Return empty if not an integer ID
       return Ok(new List<FileDetail>());
    }

    var results = await query.Take(100).ToListAsync();

    return Ok(results);
  }

  // PUT: api/DataView/filedetails/{id}
  [HttpPut("filedetails/{id}")]
  public async Task<IActionResult> UpdateFileDetail(int id, [FromBody] FileDetailDto dto)
  {
    if (id != dto.Id) return BadRequest("ID mismatch");

    var detail = await _context.FileDetails.FindAsync(id);
    if (detail == null) return NotFound();

    // Role Check
    var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
    if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out var userId))
        return Unauthorized();

    var currentUser = await _context.Users.FindAsync(userId);
    if (currentUser == null) return Unauthorized();

    var role = currentUser.Role?.ToLower() ?? "";
    if (role != "admin" && role != "administrator" && role != "supervisor")
    {
        return Forbid("ليس لديك صلاحية تعديل البيانات. هذه الميزة متاحة للمشرفين والمديرين فقط.");
    }

    // Update fields
    detail.FileCode = dto.FileCode;
    detail.DeptCode = dto.DeptCode;
    detail.Reason = dto.Reason;
    detail.PatchNo = dto.PatchNo;
    detail.Client = dto.Client;
    detail.DateFinished = dto.DateFinished;
    detail.ContractNo = dto.ContractNo;
    detail.DeptAmount = dto.DeptAmount;
    detail.LegalPlaintiff = dto.LegalPlaintiff;
    detail.LawyerUser = dto.LawyerUser;
    detail.CourtUser = dto.CourtUser;
    detail.MdUser = dto.MdUser;
    detail.LegalAdvisorUser = dto.LegalAdvisorUser;

    try
    {
      await _context.SaveChangesAsync();
      
      // Invalidate cache for the specific job
      if (detail.ImportJobId.HasValue)
        _cache.Remove($"job_data_{detail.ImportJobId}");
        
      if (dto.ImportJobId.HasValue && dto.ImportJobId != detail.ImportJobId)
        _cache.Remove($"job_data_{dto.ImportJobId}");

      // Broadcast change to department and admins
      var deptGroupName = $"dept_{currentUser.Department}";
      await _notificationService.BroadcastToChannelAsync("admins", "excel_data_updated", new { type = "FileDetail", id = id, action = "updated" });
      await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_data_updated", new { type = "FileDetail", id = id, action = "updated" });

      return Ok(dto);
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "Error updating file detail {Id}", id);
      return StatusCode(500, "Internal server error during update");
    }
  }

  // GET: api/DataView/autonumbers/{id}
  [HttpGet("autonumbers/{id}")]
  public async Task<IActionResult> GetAutoNumberById(int id)
  {
    var autoNumber = await _context.AutoNumbers
      .AsNoTracking()
      .Where(a => a.Id == id)
      .Select(a => new AutoNumberDto
      {
        Id = a.Id,
        FileCode = a.FileCode,
        ParentAutoId = a.ParentAutoId,
        AutoNumberValue = a.AutoNumberValue,
        Type = a.Type,
        CaseRef = a.CaseRef,
        Note = a.Note,
        Claimant = a.Claimant,
        UserAdded = a.UserAdded,
        DateAdded = a.DateAdded,
        DeptCode = a.DeptCode,
        ImportJobId = a.ImportJobId
      })
      .FirstOrDefaultAsync();

    if (autoNumber == null)
      return NotFound();

    return Ok(autoNumber);
  }

  // GET: api/DataView/autonumbers/search/{term}
  [HttpGet("autonumbers/search/{term}")]
  public async Task<IActionResult> SearchAutoNumbers(string term)
  {
    if (string.IsNullOrEmpty(term)) return BadRequest("Search term is required");

    var query = _context.AutoNumbers.AsNoTracking();

    if (int.TryParse(term, out int id))
    {
       query = query.Where(a => a.Id == id);
    }
    else
    {
       // Return empty if not an integer ID
       return Ok(new List<AutoNumber>());
    }

    var results = await query.Take(100).ToListAsync();

    return Ok(results);
  }

  // PUT: api/DataView/autonumbers/{id}
  [HttpPut("autonumbers/{id}")]
  public async Task<IActionResult> UpdateAutoNumber(int id, [FromBody] AutoNumberDto dto)
  {
    if (id != dto.Id) return BadRequest("ID mismatch");

    var autoNum = await _context.AutoNumbers.FindAsync(id);
    if (autoNum == null) return NotFound();

    // Role Check
    var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
    if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out var userId))
        return Unauthorized();

    var currentUser = await _context.Users.FindAsync(userId);
    if (currentUser == null) return Unauthorized();

    var role = currentUser.Role?.ToLower() ?? "";
    if (role != "admin" && role != "administrator" && role != "supervisor")
    {
        return Forbid("ليس لديك صلاحية تعديل البيانات. هذه الميزة متاحة للمشرفين والمديرين فقط.");
    }

    // Update fields
    autoNum.FileCode = dto.FileCode;
    autoNum.ParentAutoId = dto.ParentAutoId;
    autoNum.AutoNumberValue = dto.AutoNumberValue;
    autoNum.Type = dto.Type;
    autoNum.CaseRef = dto.CaseRef;
    autoNum.Note = dto.Note;
    autoNum.Claimant = dto.Claimant;
    autoNum.DeptCode = dto.DeptCode;

    try
    {
      await _context.SaveChangesAsync();
      
      // Invalidate cache for the specific job
      if (autoNum.ImportJobId.HasValue)
        _cache.Remove($"job_data_{autoNum.ImportJobId}");
        
      if (dto.ImportJobId.HasValue && dto.ImportJobId != autoNum.ImportJobId)
        _cache.Remove($"job_data_{dto.ImportJobId}");

      // Broadcast change to department and admins
      var deptGroupName = $"dept_{currentUser.Department}";
      await _notificationService.BroadcastToChannelAsync("admins", "excel_data_updated", new { type = "AutoNumber", id = id, action = "updated" });
      await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_data_updated", new { type = "AutoNumber", id = id, action = "updated" });

      return Ok(dto);
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "Error updating auto number {Id}", id);
      return StatusCode(500, "Internal server error during update");
    }
  }
  // GET: api/DataView/payments/{id}
  [HttpGet("payments/{id}")]
  public async Task<IActionResult> GetPaymentById(int id)
  {
    var payment = await _context.Payments
      .AsNoTracking()
      .Where(p => p.Id == id)
      .FirstOrDefaultAsync();

    if (payment == null)
      return NotFound();

    return Ok(payment);
  }

  // PUT: api/DataView/payments/{id}
  [HttpPut("payments/{id}")]
  public async Task<IActionResult> UpdatePayment(int id, [FromBody] Payment dto)
  {
    if (id != dto.Id) return BadRequest("ID mismatch");

    var payment = await _context.Payments.FindAsync(id);
    if (payment == null) return NotFound();

    // Role Check
    var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
    if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out var userId))
        return Unauthorized();

    var currentUser = await _context.Users.FindAsync(userId);
    if (currentUser == null) return Unauthorized();

    var role = currentUser.Role?.ToLower() ?? "";
    if (role != "admin" && role != "administrator" && role != "supervisor")
    {
        return Forbid("ليس لديك صلاحية تعديل البيانات. هذه الميزة متاحة للمشرفين والمديرين فقط.");
    }

    // Update fields
    payment.Value = dto.Value;
    payment.JouralEntry = dto.JouralEntry;
    payment.AlEntry = dto.AlEntry;
    payment.DateAdded = dto.DateAdded;
    payment.FileStatusAfter = dto.FileStatusAfter;
    payment.UserAdded = dto.UserAdded;
    
    // New Fields
    payment.PaymentMethod = dto.PaymentMethod;
    payment.SalesAgent = dto.SalesAgent;
    payment.SalesCompany = dto.SalesCompany;
    payment.Commission = dto.Commission;
    payment.FileCode = dto.FileCode;
    payment.DeptCode = dto.DeptCode;

    try
    {
      await _context.SaveChangesAsync();
      
      // Invalidate cache for the specific job
      if (payment.ImportJobId.HasValue)
        _cache.Remove($"job_data_{payment.ImportJobId}");
        
      if (dto.ImportJobId.HasValue && dto.ImportJobId != payment.ImportJobId)
        _cache.Remove($"job_data_{dto.ImportJobId}");

      // Broadcast change to department and admins
      var deptGroupName = $"dept_{currentUser.Department}";
      await _notificationService.BroadcastToChannelAsync("admins", "excel_data_updated", new { type = "Payment", id = id, action = "updated" });
      await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_data_updated", new { type = "Payment", id = id, action = "updated" });

      return Ok(dto);
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "Error updating payment {Id}", id);
      return StatusCode(500, "Internal server error during update");
    }
  }

  // GET: api/DataView/payments/search/{term}
  [HttpGet("payments/search/{term}")]
  public async Task<IActionResult> SearchPayments(string term)
  {
    if (string.IsNullOrEmpty(term)) return BadRequest("Search term is required");

    var query = _context.Payments.AsNoTracking();

    if (int.TryParse(term, out int id))
    {
       query = query.Where(p => p.Id == id);
    }
    else
    {
       // Return empty if not an integer ID
       return Ok(new List<Payment>());
    }

    var results = await query.Take(100).ToListAsync();

    return Ok(results);
  }
}
