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
  private readonly IAuditService _auditService;

  public DataViewController(ApplicationDbContext context, ILogger<DataViewController> logger, IMemoryCache cache, INotificationService notificationService, IAuditService auditService)
  {
    _context = context;
    _logger = logger;
    _cache = cache;
    _notificationService = notificationService;
    _auditService = auditService;
  }

  // GET: api/DataView/dashboard-stats
  [HttpGet("dashboard-stats")]
  public async Task<IActionResult> GetDashboardStats()
  {
    var today = DateTime.UtcNow.Date;
    var firstDayOfMonth = new DateTime(today.Year, today.Month, 1);

    var stats = new DashboardStatsDto
    {
      TotalClients = await _context.Mainfiles.CountAsync(),
      TotalStatements = await _context.CallcenterStatements.CountAsync(),
      TodayStatements = await _context.CallcenterStatements.CountAsync(s => s.DateAdded >= today),
      MonthStatements = await _context.CallcenterStatements.CountAsync(s => s.DateAdded >= firstDayOfMonth)
    };

    return Ok(stats);
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
    var mainfile = await _context.Mainfiles.AsNoTracking()
                             .Where(m => m.Id == id)
                             .Select(m => new { m.Code, m.Cid })
                             .FirstOrDefaultAsync();

    if (mainfile == null) return NotFound("Client not found");

    var details = await (from f in _context.FileDetails.AsNoTracking()
                         where f.FileCode == mainfile.Code
                         join lawyer in _context.Users.AsNoTracking() on f.LawyerUser equals lawyer.Id into lJoin
                         from l in lJoin.DefaultIfEmpty()
                         join court in _context.Users.AsNoTracking() on f.CourtUser equals court.Id into cJoin
                         from c in cJoin.DefaultIfEmpty()
                         join md in _context.Users.AsNoTracking() on f.MdUser equals md.Id into mJoin
                         from m in mJoin.DefaultIfEmpty()
                         join advisor in _context.Users.AsNoTracking() on f.LegalAdvisorUser equals advisor.Id into aJoin
                         from a in aJoin.DefaultIfEmpty()
                         select new FileDetailDto
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
                           LawyerUserName = l != null ? l.FullName : null,
                           CourtUser = f.CourtUser,
                           CourtUserName = c != null ? c.FullName : null,
                           MdUser = f.MdUser,
                           MdUserName = m != null ? m.FullName : null,
                           LegalAdvisorUser = f.LegalAdvisorUser,
                           LegalAdvisorUserName = a != null ? a.FullName : null,
                           ImportJobId = f.ImportJobId,
                           Note1 = f.Note1,
                           Note2 = f.Note2,
                           Note3 = f.Note3,
                           Note4 = f.Note4,
                           Note5 = f.Note5,
                           Note6 = f.Note6
                         }).ToListAsync();

    return Ok(details);
  }

  // GET: api/DataView/files/{fileCode}/attachments
  [HttpGet("files/{fileCode}/attachments")]
  public async Task<IActionResult> GetAttachments(long fileCode)
  {
    var attachments = await _context.Attachments.AsNoTracking()
        .Where(a => a.FileCode == fileCode)
        .Select(a => new AttachmentDisplayDto
        {
          Id = a.Id,
          FileCode = a.FileCode,
          AttachCode = a.AttachCode,
          AttachType = a.AttachType,
          Value = a.Value,
          Notes = a.Notes,
          DateAdded = a.DateAdded
        }).ToListAsync();
    return Ok(attachments);
  }

  // GET: api/DataView/files/{fileCode}/payments
  [HttpGet("files/{fileCode}/payments")]
  public async Task<IActionResult> GetPayments(long fileCode)
  {
    var payments = await (from p in _context.Payments.AsNoTracking()
                          where p.FileCode == fileCode
                          join u in _context.Users.AsNoTracking() on p.UserAdded equals u.Id into uJoin
                          from u in uJoin.DefaultIfEmpty()
                          select new PaymentDisplayDto
                          {
                            Id = p.Id,
                            FileCode = p.FileCode,
                            Value = p.Value,
                            DateAdded = p.DateAdded,
                            PaymentMethod = p.PaymentMethod,
                            UserAddedName = u != null ? u.FullName : "System",
                            SalesAgent = p.SalesAgent,
                            JouralEntry = p.JouralEntry,
                            FileStatusAfter = p.FileStatusAfter,
                            DeptCode = p.DeptCode
                          }).ToListAsync();
    return Ok(payments);
  }

  // GET: api/DataView/files/{fileCode}/additional-amounts
  [HttpGet("files/{fileCode}/additional-amounts")]
  public async Task<IActionResult> GetAdditionalAmounts(long fileCode)
  {
    var amounts = await _context.AdditionalAmounts.AsNoTracking()
        .Where(a => a.FileCode == fileCode)
        .Select(a => new AdditionalAmountDto
        {
          Id = a.Id,
          FileCode = a.FileCode,
          Value = a.Value,
          AmountType = a.AmountType,
          DateAdded = a.DateAdded
        }).ToListAsync();
    return Ok(amounts);
  }

  // GET: api/DataView/files/{fileCode}/audits
  [HttpGet("files/{fileCode}/audits")]
  public async Task<IActionResult> GetAudits(long fileCode, [FromQuery] int page = 1, [FromQuery] int pageSize = 5)
  {
    var query = from a in _context.AuditsFiles.AsNoTracking()
                where a.FileCode == fileCode
                join u in _context.Users.AsNoTracking() on a.UserId equals u.Id into uJoin
                from u in uJoin.DefaultIfEmpty()
                orderby a.ActionDate descending
                select new AuditsFileDto
                {
                  Id = a.Id,
                  FileCode = a.FileCode,
                  Action = a.Action,
                  Description = a.Description,
                  PreviousState = a.PreviousState,
                  CurrentState = a.CurrentState,
                  UserName = u != null ? u.FullName : a.UserCode,
                  ActionDate = a.ActionDate
                };

    var total = await query.CountAsync();
    var items = await query.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();

    return Ok(new { total, items, page, pageSize });
  }

  // GET: api/DataView/files/{fileCode}/auto-numbers
  [HttpGet("files/{fileCode}/auto-numbers")]
  public async Task<IActionResult> GetAutoNumbers(long fileCode)
  {
    var numbers = await _context.AutoNumbers.AsNoTracking()
        .Where(a => a.FileCode == fileCode)
        .Select(a => new AutoNumberDto
        {
          Id = a.Id,
          FileCode = a.FileCode,
          AutoNumberValue = a.AutoNumberValue,
          Type = a.Type,
          CaseRef = a.CaseRef,
          Note = a.Note,
          Claimant = a.Claimant,
          DateAdded = a.DateAdded
        }).ToListAsync();
    return Ok(numbers);
  }

  // GET: api/DataView/files/{cid}/contacts
  [HttpGet("files/{cid}/contacts")]
  public async Task<IActionResult> GetContacts(string cid)
  {
    // 1. Find all Client Identities and Mainfile Identities associated with this Cid
    var clients = await _context.Clients.AsNoTracking()
        .Where(c => c.Cid == cid)
        .ToListAsync();

    var mainfileIds = await _context.Mainfiles.AsNoTracking()
        .Where(m => m.Cid == cid)
        .Select(m => m.Id)
        .ToListAsync();

    var allTargetIds = clients.Select(c => c.Id).Concat(mainfileIds).Distinct().ToList();

    // 2. Start building our consolidated contact list
    var consolidatedContacts = new List<ClientContactDisplayDto>();

    // 3. Extract numbers from legacy Phone1/Phone2 columns in the Clients table
    foreach (var client in clients)
    {
      if (!string.IsNullOrWhiteSpace(client.Phone1))
      {
        consolidatedContacts.Add(new ClientContactDisplayDto
        {
          Id = 0, // Virtual ID for legacy data
          Phone = client.Phone1,
          Relation = client.Phone1Owner ?? "أساسي (عميل)",
          Source = "جدول العملاء",
          Status = "نشط"
        });
      }
      if (!string.IsNullOrWhiteSpace(client.Phone2))
      {
        consolidatedContacts.Add(new ClientContactDisplayDto
        {
          Id = 0,
          Phone = client.Phone2,
          Relation = client.Phone2Owner ?? "إضافي (عميل)",
          Source = "جدول العملاء",
          Status = "نشط"
        });
      }
    }

    // 4. Fetch all records from the ClientContacts table linked to those identities
    var tableContacts = await _context.ClientContacts.AsNoTracking()
        .Where(c => allTargetIds.Contains(c.ClientId))
        .Select(c => new ClientContactDisplayDto
        {
          Id = c.Id,
          Phone = c.Phone,
          Relation = c.Relation,
          Source = c.Source ?? "جهات اتصال",
          Status = c.Status
        }).ToListAsync();

    consolidatedContacts.AddRange(tableContacts);

    // 5. Remove duplicates based on phone number
    var uniqueContacts = consolidatedContacts
        .GroupBy(c => c.Phone)
        .Select(g => g.First())
        .ToList();

    return Ok(uniqueContacts);
  }

  // POST: api/DataView/files/{cid}/contacts
  [HttpPost("files/{cid}/contacts")]
  public async Task<IActionResult> AddContact(string cid, [FromBody] ClientContactCreateDto dto)
  {
    try
    {
      // 1. Try to find an existing Client record
      var client = await _context.Clients.FirstOrDefaultAsync(c => c.Cid == cid);

      if (client == null)
      {
        // 2. If not found, try to find a Mainfile record to "promote" to a client identity
        var mainfile = await _context.Mainfiles.AsNoTracking().FirstOrDefaultAsync(m => m.Cid == cid);
        if (mainfile == null) return NotFound("No Client or Mainfile found for this Cid.");

        // 3. Create a new Client record based on Mainfile info
        client = new Client
        {
          Cid = mainfile.Cid,
          Name = mainfile.Name,
          Address = mainfile.Address,
          Nationality = mainfile.Nationality,
          Code = mainfile.Code,
          DateAdded = DateTime.Now
        };
        _context.Clients.Add(client);
        await _context.SaveChangesAsync();
      }

      // 4. Save the contact linked to the Client Id
      var contact = new ClientContact
      {
        ClientId = client.Id,
        Phone = dto.Phone,
        Relation = dto.Relation,
        Source = dto.Source,
        Status = dto.Status
      };

      _context.ClientContacts.Add(contact);
      await _context.SaveChangesAsync();

      return Ok(new { message = "Contact added successfully", id = contact.Id, clientId = client.Id });
    }
    catch (Exception ex)
    {
      Console.WriteLine($"Error in AddContact: {ex.Message}");
      return StatusCode(500, new { error = ex.Message, detail = ex.InnerException?.Message });
    }
  }

  [HttpGet("files/{fileCode}/classifications")]
  public async Task<IActionResult> GetClassifications(long fileCode)
  {
    var list = await _context.FileClassifications.AsNoTracking()
        .Where(c => c.MainfileId == fileCode)
        .Select(c => new FileClassificationDto
        {
          Id = c.Id,
          Classification = c.Classification,
          Department = c.Department,
          DateAdded = c.DateAdded
        }).ToListAsync();
    return Ok(list);
  }


  // GET: api/DataView/files/{fileCode}/callcenter-statements
  [HttpGet("files/{fileCode}/callcenter-statements")]
  public async Task<IActionResult> GetCallcenterStatements(long fileCode, [FromQuery] int page = 1, [FromQuery] int pageSize = 5)
  {
    var query = from s in _context.Set<CallcenterStatement>().AsNoTracking()
                where s.FileCode == fileCode
                join u in _context.Users.AsNoTracking() on s.UserAdded equals u.Id into uJoin
                from u in uJoin.DefaultIfEmpty()
                orderby s.DateAdded descending
                select new CallcenterStatementDto
                {
                  Id = s.Id,
                  FileCode = s.FileCode,
                  DeptCode = s.DeptCode,
                  DateAdded = s.DateAdded,
                  Notes = s.Notes,
                  ContactMethod = s.ContactMethod,
                  ConnectedStatus = s.ConnectedStatus,
                  PhoneNumber = s.PhoneNumber,
                  PhoneOwner = s.PhoneOwner,
                  NextAction = s.NextAction,
                  NextDate = s.NextDate,
                  PromiseAmount = s.PromiseAmount,
                  UserAddedName = u != null ? u.FullName : "System"
                };

    var total = await query.CountAsync();
    var items = await query.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();

    return Ok(new { total, items, page, pageSize });
  }

  [HttpGet("callcenter-statements/search")]
  public async Task<IActionResult> SearchCallcenterStatements(
    [FromQuery] string cid,
    [FromQuery] string name,
    [FromQuery] DateTime? fromDate,
    [FromQuery] DateTime? toDate,
    [FromQuery] int page = 1,
    [FromQuery] int pageSize = 20)
  {
    var query = from s in _context.Set<CallcenterStatement>().AsNoTracking()
                join m in _context.Mainfiles.AsNoTracking() on s.FileCode equals m.Id into mJoin
                from m in mJoin.DefaultIfEmpty()
                join c in _context.Clients.AsNoTracking() on (m != null ? m.Cid : null) equals c.Cid into cJoin
                from c in cJoin.DefaultIfEmpty()
                join u in _context.Users.AsNoTracking() on s.UserAdded equals u.Id into uJoin
                from u in uJoin.DefaultIfEmpty()
                select new
                {
                  Statement = s,
                  ClientName = m != null ? m.Name : (c != null ? c.Name : "غير معروف"),
                  CivilId = m != null ? m.Cid : (c != null ? c.Cid : null),
                  UserName = u != null ? u.FullName : "System"
                };

    if (!string.IsNullOrEmpty(cid))
    {
      query = query.Where(x => x.CivilId == cid || x.Statement.FileCode.ToString() == cid);
    }

    if (!string.IsNullOrEmpty(name))
    {
      query = query.Where(x => x.ClientName.Contains(name));
    }

    if (fromDate.HasValue)
    {
      query = query.Where(x => x.Statement.DateAdded >= fromDate.Value);
    }

    if (toDate.HasValue)
    {
      query = query.Where(x => x.Statement.DateAdded <= toDate.Value);
    }

    var total = await query.CountAsync();
    var items = await query
      .OrderByDescending(x => x.Statement.DateAdded)
      .Skip((page - 1) * pageSize)
      .Take(pageSize)
      .Select(x => new CallcenterStatementDto
      {
        Id = x.Statement.Id,
        FileCode = x.Statement.FileCode,
        DeptCode = x.Statement.DeptCode,
        DateAdded = x.Statement.DateAdded,
        Notes = x.Statement.Notes,
        ContactMethod = x.Statement.ContactMethod,
        ConnectedStatus = x.Statement.ConnectedStatus,
        PhoneNumber = x.Statement.PhoneNumber,
        PhoneOwner = x.Statement.PhoneOwner,
        NextAction = x.Statement.NextAction,
        NextDate = x.Statement.NextDate,
        PromiseAmount = x.Statement.PromiseAmount,
        UserAddedName = x.UserName,
        ClientName = x.ClientName,
        CivilID = x.CivilId ?? ""
      })
      .ToListAsync();

    return Ok(new { total, items, page, pageSize });
  }

  // POST: api/DataView/files/callcenter-statements
  [HttpPost("files/callcenter-statements")]
  public async Task<IActionResult> AddCallcenterStatement([FromBody] CallcenterStatement statement)
  {
    if (statement == null || statement.FileCode == null)
    {
      return BadRequest("بيانات الإفادة غير صالحة");
    }

    statement.DateAdded = DateTime.UtcNow;
    
    _context.Set<CallcenterStatement>().Add(statement);
    await _context.SaveChangesAsync();

    return Ok(new { message = "تم حفظ الإفادة بنجاح", id = statement.Id });
  }

  [HttpGet("files/{fileCode}/statuses")]
  public async Task<IActionResult> GetStatuses(long fileCode, [FromQuery] int page = 1, [FromQuery] int pageSize = 5)
  {
    var query = _context.FileStatuses.AsNoTracking()
        .Where(c => c.FileCode == fileCode);

    var total = await query.CountAsync();
    var items = await query
        .OrderByDescending(c => c.DateAdded)
        .Skip((page - 1) * pageSize)
        .Take(pageSize)
        .Select(c => new FileStatusDto
        {
          Id = c.Id,
          Status = c.Status,
          DateAdded = c.DateAdded
        }).ToListAsync();

    return Ok(new { total, items, page, pageSize });
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

  // GET: api/DataView/files/{fileCode}/dashboard-stats
  [HttpGet("files/{fileCode}/dashboard-stats")]
  public async Task<IActionResult> GetFileDashboardStats(long fileCode)
  {
    // Get total clients related to this file code/id
    // Normally, mainfile details count represents the clients (debtors/plaintiffs)
    var clientsCount = await _context.FileDetails.CountAsync(d => d.FileCode == fileCode);

    // If FileDetails is 0, we can fallback to checking by ID if they differ (in older tables FileCode holds the PK Id)
    if (clientsCount == 0 && int.TryParse(fileCode.ToString(), out int id)) {
       clientsCount = await _context.FileDetails.CountAsync(d => d.FileCode == id);
    }
    
    // Fallback: at least 1 if the main file exists
    if (clientsCount == 0) clientsCount = 1;

    var today = DateTime.UtcNow.Date;
    var startOfMonth = new DateTime(today.Year, today.Month, 1);

    var statementsQuery = _context.CallcenterStatements.Where(s => s.FileCode == fileCode);
    
    var totalStatements = await statementsQuery.CountAsync();
    var todayStatements = await statementsQuery.CountAsync(s => s.DateAdded != null && s.DateAdded.Value.Date == today);
    var monthStatements = await statementsQuery.CountAsync(s => s.DateAdded != null && s.DateAdded.Value.Date >= startOfMonth);

    return Ok(new
    {
      totalClients = clientsCount,
      totalStatements = totalStatements,
      todayStatements = todayStatements,
      monthStatements = monthStatements
    });
  }
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

    // Capture Previous State for Audit
    var previousState = new
    {
      mainfile.Name,
      mainfile.Code,
      mainfile.Cid,
      mainfile.Address,
      mainfile.Nationality,
      mainfile.Archive,
      mainfile.Note,
      mainfile.Work
    };

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

      // Audit Log
      await _auditService.LogActionAsync(mainfile.Code, null, "UPDATE", $"تعديل بيانات الملف: {mainfile.Name} بواسطة User Update", previousState, "Mainfile", id.ToString(), mainfile.DateAdded, DateTime.UtcNow);

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

    // Capture Previous State for Audit
    var previousState = new
    {
      detail.DeptCode,
      detail.Reason,
      detail.PatchNo,
      detail.Client,
      detail.ContractNo,
      detail.DeptAmount,
      detail.LawyerUser
    };

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

      // Audit Log
      await _auditService.LogActionAsync(detail.FileCode, (long?)detail.DeptCode, "UPDATE", $"تعديل تفاصيل الملف: {detail.ContractNo} بواسطة User Update", previousState, "FileDetail", id.ToString(), detail.DateAdded, DateTime.UtcNow);

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

    // Capture Previous State for Audit
    var previousState = new
    {
      autoNum.AutoNumberValue,
      autoNum.Type,
      autoNum.CaseRef,
      autoNum.Note,
      autoNum.Claimant,
      autoNum.DeptCode
    };

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

      // Audit Log
      await _auditService.LogActionAsync(autoNum.FileCode, (long?)autoNum.DeptCode, "UPDATE", $"تعديل الرقم الآلي: {autoNum.AutoNumberValue} بواسطة User Update", previousState, "AutoNumber", id.ToString(), autoNum.DateAdded, DateTime.UtcNow);

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

    // Capture Previous State for Audit
    var previousState = new
    {
      payment.Value,
      payment.FileStatusAfter,
      payment.PaymentMethod,
      payment.SalesAgent,
      payment.SalesCompany,
      payment.Commission
    };

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

      // Audit Log
      await _auditService.LogActionAsync(payment.FileCode, (long?)payment.DeptCode, "UPDATE", $"تعديل سند الدفع بقيمة {payment.Value} بواسطة User Update", previousState, "Payment", id.ToString(), payment.DateAdded, DateTime.UtcNow);

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

  // GET: api/DataView/mainfiles/{id}/fileclassifications
  [HttpGet("mainfiles/{id}/fileclassifications")]
  public async Task<IActionResult> GetMainfileClassifications(long id)
  {
    var classifications = await _context.FileClassifications
      .AsNoTracking()
      .Where(f => f.FileCode == id)
      .ToListAsync();

    return Ok(classifications);
  }

  // GET: api/DataView/fileclassifications/{id}
  [HttpGet("fileclassifications/{id}")]
  public async Task<IActionResult> GetFileClassificationById(int id)
  {
    var classification = await _context.FileClassifications
      .AsNoTracking()
      .FirstOrDefaultAsync(f => f.Id == id);

    if (classification == null)
      return NotFound();

    return Ok(classification);
  }

  // GET: api/DataView/fileclassifications/search/{term}
  [HttpGet("fileclassifications/search/{term}")]
  public async Task<IActionResult> SearchFileClassifications(string term)
  {
    if (string.IsNullOrEmpty(term)) return BadRequest("Search term is required");

    var query = _context.FileClassifications.AsNoTracking();

    if (int.TryParse(term, out int id))
    {
      query = query.Where(f => f.Id == id);
    }
    else
    {
      query = query.Where(f => f.Code.Contains(term) || f.Classification.Contains(term) || f.Department.Contains(term));
    }

    var results = await query.Take(100).ToListAsync();

    return Ok(results);
  }

  // PUT: api/DataView/fileclassifications/{id}
  [HttpPut("fileclassifications/{id}")]
  public async Task<IActionResult> UpdateFileClassification(int id, [FromBody] FileClassification dto)
  {
    if (id != dto.Id) return BadRequest("ID mismatch");

    var classification = await _context.FileClassifications.FindAsync(id);
    if (classification == null) return NotFound();

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

    // Capture Previous State for Audit
    var previousState = new
    {
      classification.Code,
      classification.Classification,
      classification.Department,
      classification.DeptCode
    };

    // Update fields
    classification.Code = dto.Code;
    classification.Classification = dto.Classification;
    classification.Department = dto.Department;
    classification.DeptCode = dto.DeptCode;
    classification.FileCode = dto.FileCode;

    try
    {
      await _context.SaveChangesAsync();

      // Invalidate cache for the specific job
      if (classification.DateAdded.HasValue) // Using date as a proxy since no direct JobId in model often, but model has it sometimes
      {
        // Wait, FileClassification model doesn't have ImportJobId in previous view_file. Let me check.
      }

      // Broadcast change to department and admins
      var deptGroupName = $"dept_{currentUser.Department}";
      await _notificationService.BroadcastToChannelAsync("admins", "excel_data_updated", new { type = "FileClassification", id = id, action = "updated" });
      await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_data_updated", new { type = "FileClassification", id = id, action = "updated" });

      // Audit Log
      await _auditService.LogActionAsync(classification.FileCode, (long?)classification.DeptCode, "UPDATE", $"تعديل تصنيف ملف: {classification.Classification} بواسطة User Update", previousState, "FileClassification", id.ToString(), classification.DateAdded, DateTime.UtcNow);

      return Ok(dto);
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "Error updating file classification {Id}", id);
      return StatusCode(500, "Internal server error during update");
    }
  }

  // GET: api/DataView/mainfiles/{id}/notes
  [HttpGet("mainfiles/{id}/notes")]
  public async Task<IActionResult> GetMainfileNotes(long id, [FromQuery] int page = 1, [FromQuery] int pageSize = 5)
  {
    var query = _context.Notes
        .AsNoTracking()
        .Where(n => n.FileCode == id);

    var total = await query.CountAsync();
    var items = await query
        .OrderByDescending(n => n.DateAdded)
        .Skip((page - 1) * pageSize)
        .Take(pageSize)
        .ToListAsync();

    return Ok(new { total, items, page, pageSize });
  }

  // GET: api/DataView/notes/{id}
  [HttpGet("notes/{id}")]
  public async Task<IActionResult> GetNoteById(int id)
  {
    var note = await _context.Notes
        .AsNoTracking()
        .FirstOrDefaultAsync(n => n.Id == id);

    if (note == null)
      return NotFound();

    return Ok(note);
  }

  // GET: api/DataView/notes/search/{term}
  [HttpGet("notes/search/{term}")]
  public async Task<IActionResult> SearchNotes(string term)
  {
    if (string.IsNullOrEmpty(term)) return BadRequest("Search term is required");

    var query = _context.Notes.AsNoTracking();

    if (int.TryParse(term, out int id))
    {
      query = query.Where(n => n.Id == id);
    }
    else
    {
      query = query.Where(n => n.NoteText.Contains(term));
    }

    var results = await query.Take(100).ToListAsync();

    return Ok(results);
  }

  // PUT: api/DataView/notes/{id}
  [HttpPut("notes/{id}")]
  public async Task<IActionResult> UpdateNote(int id, [FromBody] Note dto)
  {
    if (id != dto.Id) return BadRequest("ID mismatch");

    var note = await _context.Notes.FindAsync(id);
    if (note == null) return NotFound();

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

    // Capture Previous State for Audit
    var previousState = new { note.NoteText, note.DeptCode };

    // Update fields
    note.NoteText = dto.NoteText;
    note.DeptCode = dto.DeptCode;
    note.FileCode = dto.FileCode;
    note.UserUpdated = userId;

    try
    {
      await _context.SaveChangesAsync();

      // Broadcast change to department and admins
      var deptGroupName = $"dept_{currentUser.Department}";
      await _notificationService.BroadcastToChannelAsync("admins", "excel_data_updated", new { type = "Note", id = id, action = "updated" });
      await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_data_updated", new { type = "Note", id = id, action = "updated" });

      // Audit Log
      await _auditService.LogActionAsync(note.FileCode, (long?)note.DeptCode, "UPDATE", $"تعديل ملاحظة بواسطة User Update", previousState, "Note", id.ToString(), note.DateAdded, DateTime.UtcNow);

      return Ok(dto);
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "Error updating note {Id}", id);
      return StatusCode(500, "Internal server error during update");
    }
  }

  // GET: api/DataView/additionalamounts/{id}
  [HttpGet("additionalamounts/{id}")]
  public async Task<IActionResult> GetAdditionalAmountById(int id)
  {
    var amount = await _context.AdditionalAmounts
        .AsNoTracking()
        .FirstOrDefaultAsync(a => a.Id == id);

    if (amount == null)
      return NotFound();

    return Ok(amount);
  }

  // GET: api/DataView/additionalamounts/search/{term}
  [HttpGet("additionalamounts/search/{term}")]
  public async Task<IActionResult> SearchAdditionalAmounts(string term)
  {
    if (string.IsNullOrEmpty(term)) return BadRequest("Search term is required");

    var query = _context.AdditionalAmounts.AsNoTracking();

    if (int.TryParse(term, out int id))
    {
      query = query.Where(a => a.Id == id);
    }
    else
    {
      query = query.Where(a => a.AmountType.Contains(term));
    }

    var results = await query.Take(100).ToListAsync();

    return Ok(results);
  }

  // PUT: api/DataView/additionalamounts/{id}
  [HttpPut("additionalamounts/{id}")]
  public async Task<IActionResult> UpdateAdditionalAmount(int id, [FromBody] AdditionalAmount dto)
  {
    if (id != dto.Id) return BadRequest("ID mismatch");

    var amount = await _context.AdditionalAmounts.FindAsync(id);
    if (amount == null) return NotFound();

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

    // Capture Previous State for Audit
    var previousState = new { amount.Value, amount.AmountType, amount.DeptCode, amount.FileCode };

    // Update fields
    amount.Value = dto.Value;
    amount.AmountType = dto.AmountType;
    amount.DeptCode = dto.DeptCode;
    amount.FileCode = dto.FileCode;
    amount.UserUpdated = userId;
    amount.DateUpdated = DateTime.UtcNow;

    try
    {
      await _context.SaveChangesAsync();

      // Invalidate cache for the specific job
      if (amount.ImportJobId.HasValue)
        _cache.Remove($"job_data_{amount.ImportJobId}");

      // Broadcast change to department and admins
      var deptGroupName = $"dept_{currentUser.Department}";
      await _notificationService.BroadcastToChannelAsync("admins", "excel_data_updated", new { type = "AdditionalAmount", id = id, action = "updated" });
      await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_data_updated", new { type = "AdditionalAmount", id = id, action = "updated" });

      // Audit Log
      await _auditService.LogActionAsync(amount.FileCode ?? 0, (long?)amount.DeptCode, "UPDATE", $"تعديل مبلغ إضافي بواسطة User Update", previousState, "AdditionalAmount", id.ToString(), amount.DateAdded, DateTime.UtcNow);

      return Ok(dto);
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "Error updating additional amount {Id}", id);
      return StatusCode(500, "Internal server error during update");
    }
  }

  // GET: api/DataView/mails/{id}
  [HttpGet("mails/{id}")]
  public async Task<IActionResult> GetMailById(int id)
  {
    var mail = await _context.Mails
        .AsNoTracking()
        .FirstOrDefaultAsync(m => m.Id == id);

    if (mail == null)
      return NotFound();

    return Ok(mail);
  }

  // GET: api/DataView/mails/search/{term}
  [HttpGet("mails/search/{term}")]
  public async Task<IActionResult> SearchMails(string term)
  {
    if (string.IsNullOrEmpty(term)) return BadRequest("Search term is required");

    var query = _context.Mails.AsNoTracking();

    if (int.TryParse(term, out int id))
    {
      query = query.Where(m => m.Id == id);
    }
    else
    {
      query = query.Where(m => m.Subject.Contains(term) || m.Body.Contains(term));
    }

    var results = await query.Take(100).ToListAsync();

    return Ok(results);
  }

  // PUT: api/DataView/mails/{id}
  [HttpPut("mails/{id}")]
  public async Task<IActionResult> UpdateMail(int id, [FromBody] Mail dto)
  {
    if (id != dto.Id) return BadRequest("ID mismatch");

    var mail = await _context.Mails.FindAsync(id);
    if (mail == null) return NotFound();

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

    // Capture Previous State for Audit
    var previousState = new { mail.Subject, mail.Body, mail.DeptCode, mail.FileCode };

    // Update fields
    mail.Subject = dto.Subject;
    mail.Body = dto.Body;
    mail.DeptCode = dto.DeptCode;
    mail.FileCode = dto.FileCode;
    mail.UserUpdated = userId;
    mail.DateUpdated = DateTime.UtcNow;

    try
    {
      await _context.SaveChangesAsync();

      // Invalidate cache for the specific job
      if (mail.ImportJobId.HasValue)
        _cache.Remove($"job_data_{mail.ImportJobId}");

      // Broadcast change to department and admins
      var deptGroupName = $"dept_{currentUser.Department}";
      await _notificationService.BroadcastToChannelAsync("admins", "excel_data_updated", new { type = "Mail", id = id, action = "updated" });
      await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_data_updated", new { type = "Mail", id = id, action = "updated" });

      // Audit Log
      await _auditService.LogActionAsync(mail.FileCode ?? 0, (long?)mail.DeptCode, "UPDATE", $"تعديل بريد بواسطة User Update", previousState, "Mail", id.ToString(), mail.DateAdded, DateTime.UtcNow);

      return Ok(dto);
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "Error updating mail {Id}", id);
      return StatusCode(500, "Internal server error during update");
    }
  }
  // GET: api/DataView/attachments/{id}
  [HttpGet("attachments/{id}")]
  public async Task<IActionResult> GetAttachmentById(int id)
  {
    var attachment = await _context.Attachments
        .AsNoTracking()
        .FirstOrDefaultAsync(a => a.Id == id);

    if (attachment == null)
      return NotFound();

    return Ok(attachment);
  }

  // GET: api/DataView/attachments/search/{term}
  [HttpGet("attachments/search/{term}")]
  public async Task<IActionResult> SearchAttachments(string term)
  {
    if (string.IsNullOrEmpty(term)) return BadRequest("Search term is required");

    var query = _context.Attachments.AsNoTracking();

    if (int.TryParse(term, out int id))
    {
      query = query.Where(a => a.Id == id);
    }
    else
    {
      query = query.Where(a => a.AttachCode.Contains(term) || a.Notes.Contains(term) || a.Value.Contains(term));
    }

    var results = await query.Take(100).ToListAsync();

    return Ok(results);
  }

  // PUT: api/DataView/attachments/{id}
  [HttpPut("attachments/{id}")]
  public async Task<IActionResult> UpdateAttachment(int id, [FromBody] House_of_law_api.Modules.Attachment dto)
  {
    if (id != dto.Id) return BadRequest("ID mismatch");

    var attachment = await _context.Attachments.FindAsync(id);
    if (attachment == null) return NotFound();

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

    // Capture Previous State for Audit
    var previousState = new { attachment.AttachCode, attachment.AttachType, attachment.Value, attachment.Notes, attachment.DeptCode, attachment.FileCode };

    // Update fields
    attachment.AttachCode = dto.AttachCode;
    attachment.AttachType = dto.AttachType;
    attachment.Value = dto.Value;
    attachment.Notes = dto.Notes;
    attachment.DeptCode = dto.DeptCode;
    attachment.FileCode = dto.FileCode;
    attachment.UserUpdated = userId;
    attachment.DateUpdated = DateTime.UtcNow;

    try
    {
      await _context.SaveChangesAsync();

      // Invalidate cache for the specific job
      if (attachment.ImportJobId.HasValue)
        _cache.Remove($"job_data_{attachment.ImportJobId}");

      // Broadcast change to department and admins
      var deptGroupName = $"dept_{currentUser.Department}";
      await _notificationService.BroadcastToChannelAsync("admins", "excel_data_updated", new { type = "Attachment", id = id, action = "updated" });
      await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_data_updated", new { type = "Attachment", id = id, action = "updated" });

      // Audit Log
      await _auditService.LogActionAsync(attachment.FileCode ?? 0, (long?)attachment.DeptCode, "UPDATE", $"تعديل مرفق بواسطة User Update", previousState, "Attachment", id.ToString(), attachment.DateAdded, DateTime.UtcNow);

      return Ok(dto);
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "Error updating attachment {Id}", id);
      return StatusCode(500, "Internal server error during update");
    }
  }

  // GET: api/DataView/mainfiles/{id}/attachments
  [HttpGet("mainfiles/{id}/attachments")]
  public async Task<IActionResult> GetMainfileAttachments(long id)
  {
    var attachments = await _context.Attachments
        .AsNoTracking()
        .Where(a => a.FileCode == id)
        .OrderByDescending(a => a.DateAdded)
        .ToListAsync();

    return Ok(attachments);
  }

  // GET: api/DataView/mainfiles/{id}/mails
  [HttpGet("mainfiles/{id}/mails")]
  public async Task<IActionResult> GetMainfileMails(long id)
  {
    var mails = await _context.Mails
        .AsNoTracking()
        .Where(m => m.FileCode == id)
        .OrderByDescending(m => m.DateAdded)
        .ToListAsync();

    return Ok(mails);
  }

  // GET: api/DataView/mainfiles/{id}/additionalamounts
  [HttpGet("mainfiles/{id}/additionalamounts")]
  public async Task<IActionResult> GetMainfileAdditionalAmounts(long id)
  {
    var amounts = await _context.AdditionalAmounts
        .AsNoTracking()
        .Where(a => a.FileCode == id)
        .OrderByDescending(a => a.DateAdded)
        .ToListAsync();

    return Ok(amounts);
  }

  // GET: api/DataView/mainfiles/{id}/payments
  [HttpGet("mainfiles/{id}/payments")]
  public async Task<IActionResult> GetMainfilePayments(long id)
  {
    var payments = await _context.Payments
        .AsNoTracking()
        .Where(p => p.FileCode == id)
        .OrderByDescending(p => p.DateAdded)
        .ToListAsync();

    return Ok(payments);
  }
}
