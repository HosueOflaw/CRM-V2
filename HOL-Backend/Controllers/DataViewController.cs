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
}
