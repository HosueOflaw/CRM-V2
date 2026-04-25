
using House_of_law_api.Data;
using House_of_law_api.Interfaces;
using House_of_law_api.Modules;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace House_of_law_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MainfilesController : ControllerBase
{
  private readonly IMainfileRepository _repository;
  private readonly INotificationService _notificationService;
  private readonly ApplicationDbContext _context;
  private readonly ILogger<MainfilesController> _logger;
  private readonly IAuditService _auditService;

  public MainfilesController(
      IMainfileRepository repository,
      INotificationService notificationService,
      ApplicationDbContext context,
      ILogger<MainfilesController> logger,
      IAuditService auditService)
  {
    _repository = repository;
    _notificationService = notificationService;
    _context = context;
    _logger = logger;
    _auditService = auditService;
  }

  [HttpGet]
  public async Task<ActionResult<IEnumerable<Mainfile>>> GetMainfiles([FromQuery] string search = null)
  {
    var clientIp = HttpContext.Connection.RemoteIpAddress?.ToString();
    _logger.LogInformation("GetMainfiles called from IP: {Ip}", clientIp);

    if (!string.IsNullOrWhiteSpace(search))
    {
      var results = await _repository.SearchAsync(search);
      return Ok(results);
    }

    // Return empty list or limited recent files to avoid fetching the entire database
    var mainfiles = (await _repository.GetAllAsync()).OrderByDescending(m => m.Id).Take(20);
    return Ok(mainfiles);
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<Mainfile>> GetMainfile(long id)
  {
    var mainfile = await _repository.GetByIdAsync(id);
    if (mainfile == null) return NotFound();
    return Ok(mainfile);
  }

  [HttpGet("code/{code}")]
  public async Task<ActionResult<Mainfile>> GetMainfileByCode(int code)
  {
    var mainfile = await _repository.GetByCodeAsync(code);
    if (mainfile == null) return NotFound();
    return Ok(mainfile);
  }

  [HttpGet("cid/{cid}")]
  public async Task<ActionResult<Mainfile>> GetMainfileByCid(string cid)
  {
    var mainfile = await _repository.GetByCidAsync(cid);
    if (mainfile == null) return NotFound();
    return Ok(mainfile);
  }

  [HttpGet("next-id")]
  public async Task<ActionResult<long>> GetNextId()
  {
    var maxId = await _repository.GetMaxIdAsync();
    return Ok(maxId + 1);
  }

  [HttpPost]
  public async Task<ActionResult<Mainfile>> CreateMainfile(Mainfile mainfile)
  {
    _logger.LogInformation("Creating new Mainfile: {Code} - {Name}", mainfile.Code, mainfile.Name);
    mainfile.DateAdded = DateTime.UtcNow;
    var created = await _repository.AddAsync(mainfile);

    // Audit Log
    await _auditService.LogActionAsync(created.Code, null, "ADD", $"إضافة ملف جديد: {created.Name}", null, "Mainfile", created.Id.ToString(), created.DateAdded);

    var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
    if (userIdClaim != null && int.TryParse(userIdClaim.Value, out var userId))
    {
      var currentUser = await _context.Users.FindAsync(userId);
      if (currentUser != null)
      {
        var deptGroupName = $"dept_{currentUser.Department}";
        await _notificationService.BroadcastToChannelAsync("admins", "excel_data_updated", new { type = "Mainfile", id = created.Id, action = "created" });
        await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_data_updated", new { type = "Mainfile", id = created.Id, action = "created" });
      }
    }

    return CreatedAtAction(nameof(GetMainfile), new { id = created.Id }, created);
  }

  [HttpPut("{id}")]
  public async Task<IActionResult> UpdateMainfile(long id, Mainfile mainfile)
  {
    var existing = await _repository.GetByIdAsync(id);
    if (existing == null) return NotFound();

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

    // Capture Previous State
    var previousState = new { existing.Name, existing.Cid, existing.Address };

    // Update properties
    existing.Name = mainfile.Name ?? existing.Name;
    existing.Cid = mainfile.Cid ?? existing.Cid;
    existing.Address = mainfile.Address ?? existing.Address;
    // Add other properties as needed

    await _repository.UpdateAsync(existing);

    // Audit Log
    await _auditService.LogActionAsync(existing.Code, null, "UPDATE", $"تعديل بيانات الملف: {existing.Name} بواسطة User Update", previousState, "Mainfile", existing.Id.ToString(), existing.DateAdded, DateTime.UtcNow);

    var deptGroupName = $"dept_{currentUser.Department}";
    await _notificationService.BroadcastToChannelAsync("admins", "excel_data_updated", new { type = "Mainfile", id = existing.Id, action = "updated" });
    await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_data_updated", new { type = "Mainfile", id = existing.Id, action = "updated" });

    return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> DeleteMainfile(long id)
  {
    var mainfile = await _repository.GetByIdAsync(id);
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
      return Forbid("ليس لديك صلاحية حذف البيانات. هذه الميزة متاحة للمشرفين والمديرين فقط.");
    }

    await _repository.DeleteAsync(mainfile);

    // Audit Log
    await _auditService.LogActionAsync(mainfile.Code, null, "DELETE", $"حذف الملف: {mainfile.Name}", mainfile, "Mainfile", id.ToString());

    var deptGroupName = $"dept_{currentUser.Department}";
    await _notificationService.BroadcastToChannelAsync("admins", "excel_data_updated", new { type = "Mainfile", id = id, action = "deleted" });
    await _notificationService.BroadcastToChannelAsync(deptGroupName, "excel_data_updated", new { type = "Mainfile", id = id, action = "deleted" });

    return NoContent();
  }

  [HttpPut("{id}/status")]
  public async Task<IActionResult> UpdateStatus(long id, [FromBody] StatusUpdateDto request)
  {
    var existing = await _repository.GetByIdAsync(id);
    if (existing == null) return NotFound();

    var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
    if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out var userId))
      return Unauthorized();

    var currentUser = await _context.Users.FindAsync(userId);

    // Get or Create Classification Record
    var classification = await _context.FileClassifications.FirstOrDefaultAsync(fc => fc.MainfileId == existing.Id);
    if (classification == null)
    {
      classification = new FileClassification
      {
        MainfileId = existing.Id,
        Code = existing.Code.ToString(),
        FileCode = (long)existing.Code,
        DateAdded = DateTime.UtcNow,
        UserAdded = userId
      };
      _context.FileClassifications.Add(classification);
    }

    object previousValue = null;
    object newValue = null;
    string fieldName = request.Field.ToLower();

    switch (fieldName)
    {
      case "status":
        previousValue = existing.Status;
        existing.Status = request.NewValueText;
        newValue = request.NewValueText;
        break;
      case "client":
        previousValue = classification.ClientStatusId;
        classification.ClientStatusId = request.NewValueId;
        newValue = request.NewValueId;
        break;
      case "claim":
        previousValue = classification.ClaimStatusId;
        classification.ClaimStatusId = request.NewValueId;
        newValue = request.NewValueId;
        break;
      case "payment":
        previousValue = classification.PaymentStatusId;
        classification.PaymentStatusId = request.NewValueId;
        newValue = request.NewValueId;
        break;
      case "file":
        previousValue = classification.FileStatusId;
        classification.FileStatusId = request.NewValueId;
        newValue = request.NewValueId;
        break;
      case "action":
        previousValue = classification.ActionStatusId;
        classification.ActionStatusId = request.NewValueId;
        newValue = request.NewValueId;
        break;
      case "comms_lang":
        previousValue = classification.CommunicationLanguageId;
        classification.CommunicationLanguageId = request.NewValueId;
        newValue = request.NewValueId;
        break;
      case "gender":
        previousValue = classification.GenderId;
        classification.GenderId = request.NewValueId;
        newValue = request.NewValueId;
        break;
      case "followup":
        previousValue = classification.FollowUpStatusId;
        classification.FollowUpStatusId = request.NewValueId;
        newValue = request.NewValueId;
        break;
      case "internal":
        previousValue = classification.InternalStatusId;
        classification.InternalStatusId = request.NewValueId;
        newValue = request.NewValueId;
        break;
      case "civil":
        previousValue = classification.CivilStatusId;
        classification.CivilStatusId = request.NewValueId;
        newValue = request.NewValueId;
        break;
      case "contact":
        previousValue = classification.ContactStatusId;
        classification.ContactStatusId = request.NewValueId;
        newValue = request.NewValueId;
        break;
      case "cooperation":
        previousValue = classification.CooperationStatusId;
        classification.CooperationStatusId = request.NewValueId;
        newValue = request.NewValueId;
        break;
      case "work":
        previousValue = existing.Work;
        existing.Work = request.NewValueText;
        newValue = request.NewValueText;
        break;
      case "discount":
        previousValue = classification.Discount;
        if (decimal.TryParse(request.NewValueText, out decimal d)) { classification.Discount = d; newValue = d; }
        break;
      case "acceptance":
        previousValue = classification.Acceptance;
        classification.Acceptance = request.NewValueText;
        newValue = request.NewValueText;
        break;
      case "membership":
        previousValue = existing.Membership;
        existing.Membership = request.NewValueText;
        newValue = request.NewValueText;
        break;
      case "salarydate":
        previousValue = classification.SalaryDate;
        if (DateTime.TryParse(request.NewValueText, out DateTime dt)) { classification.SalaryDate = dt; newValue = dt; }
        break;
      case "incomenotes":
        previousValue = classification.IncomeNotes;
        classification.IncomeNotes = request.NewValueText;
        newValue = request.NewValueText;
        break;
      case "code":
        previousValue = classification.Code;
        classification.Code = request.NewValueText;
        newValue = request.NewValueText;
        break;
      case "file_code":
        previousValue = classification.FileCode;
        if (long.TryParse(request.NewValueText, out long fc)) { classification.FileCode = fc; newValue = fc; }
        break;
      case "dept_code":
        previousValue = classification.DeptCode;
        if (long.TryParse(request.NewValueText, out long dc)) { classification.DeptCode = dc; newValue = dc; }
        break;
      case "classification":
        previousValue = classification.Classification;
        classification.Classification = request.NewValueText;
        newValue = request.NewValueText;
        break;
      default:
        return BadRequest("Invalid status field: " + request.Field);
    }

    // Get current user
    string currentUserName = currentUser?.FullName ?? "موظف النظام";

    // Label Mapping
    string fieldLabel = request.Field switch
    {
      "client" => "حالة العميل",
      "claim" => "حالة المطالبة",
      "payment" => "حالة السداد",
      "file" => "حالة الملف",
      "action" => "حالة الإجراءات",
      "followup" => "حالة المتابعة",
      "internal" => "حالة داخلية",
      "civil" => "حالة مدنية",
      "contact" => "حالة تواصل",
      "cooperation" => "حالة تعاون",
      "comms_lang" => "لغة التواصل",
      "gender" => "النوع",
      "discount" => "الخصم",
      "acceptance" => "القبول",
      "salarydate" => "تاريخ الراتب",
      "work" => "الدوام",
      "incomenotes" => "ملاحظات الدخل",
      "classification" => "التصنيف",
      "membership" => "التصنيف",
      "status" => "الحالة",
      _ => request.Field
    };

    // UI-Friendly Value (Fallback)
    string newValueDisplay = request.NewValueText ?? newValue?.ToString() ?? "غير محدد";
    string previousValueDisplay = previousValue?.ToString() ?? "غير محدد";

    // Use the resolved pristine names to bypass corrupted Database LookupValues mojibake
    var lookupFields = new[] { "client", "claim", "payment", "file", "action", "followup", "internal", "civil", "contact", "cooperation", "comms_lang", "gender" };
    if (lookupFields.Contains(fieldName))
    {
      if (previousValue is int prevId)
        previousValueDisplay = GetLookupTranslation(fieldName, prevId);

      if (newValue is int newId)
        newValueDisplay = GetLookupTranslation(fieldName, newId);
    }

    // Only log if the value actually changed (avoids spam from unmodified 'code' or 'file_code')
    if (previousValue == null || newValue == null || !previousValue.Equals(newValue))
    {
      // Audit Log
      string description = $"تعديل حالة {fieldLabel}: من {previousValueDisplay} إلى {newValueDisplay}";
      await _auditService.LogActionAsync(existing.Code, null, "UPDATE_STATUS", description, previousValueDisplay, "Mainfile", existing.Id.ToString(), existing.DateAdded, DateTime.UtcNow, userId);

      // Formatted Status for History Table (Type | NewValue)
      string historyStatus = $"{fieldLabel} | {newValueDisplay}";

      // Insert into FileStatuses History Table (Generic Log)
      var historyEntry = new FileStatus
      {
        FileCode = existing.Id,
        Status = historyStatus,
        DateAdded = DateTime.UtcNow
      };
      _context.FileStatuses.Add(historyEntry);

      // Insert into Specialized History Tables (requested specialized workflow)
      StatusHistoryBase specializedEntry = fieldName switch
      {
        "client" => new ClientStatusHistory(),
        "claim" => new ClaimStatusHistory(),
        "payment" => new PaymentStatusHistory(),
        "file" => new FileStatusHistory(),
        "action" => new ActionStatusHistory(),
        "followup" => new FollowUpStatusHistory(),
        "internal" => new InternalStatusHistory(),
        "civil" => new CivilStatusHistory(),
        "contact" => new ContactStatusHistory(),
        "cooperation" => new CooperationStatusHistory(),
        "discount" => new DiscountHistory(),
        "acceptance" => new AcceptanceHistory(),
        "work" => new JobHistory(),
        "salarydate" => new SalaryHistory(),
        "incomenotes" => new SalaryHistory(),
        _ => null
      };

      if (specializedEntry != null)
      {
        specializedEntry.FileCode = (long)existing.Code;
        specializedEntry.StatusId = request.NewValueId ?? 0;
        specializedEntry.StatusName = newValueDisplay;
        specializedEntry.UserId = userId;
        specializedEntry.UserName = currentUserName;
        specializedEntry.DateAdded = DateTime.UtcNow;

        switch (specializedEntry)
        {
          case ClientStatusHistory h: _context.ClientStatusHistories.Add(h); break;
          case ClaimStatusHistory h: _context.ClaimStatusHistories.Add(h); break;
          case PaymentStatusHistory h: _context.PaymentStatusHistories.Add(h); break;
          case FileStatusHistory h: _context.FileStatusHistories.Add(h); break;
          case ActionStatusHistory h: _context.ActionStatusHistories.Add(h); break;
          case FollowUpStatusHistory h: _context.FollowUpStatusHistories.Add(h); break;
          case InternalStatusHistory h: _context.InternalStatusHistories.Add(h); break;
          case CivilStatusHistory h: _context.CivilStatusHistories.Add(h); break;
          case ContactStatusHistory h: _context.ContactStatusHistories.Add(h); break;
          case CooperationStatusHistory h: _context.CooperationStatusHistories.Add(h); break;
          case DiscountHistory h: _context.DiscountHistories.Add(h); break;
          case AcceptanceHistory h: _context.AcceptanceHistories.Add(h); break;
          case JobHistory h: _context.JobHistories.Add(h); break;
          case SalaryHistory h: _context.SalaryHistories.Add(h); break;
        }
      }
    }

    try
    {
      await _repository.UpdateAsync(existing);
      await _context.SaveChangesAsync();
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "Error updating status for file {Id}", id);
      return StatusCode(500, $"Internal server error: {ex.Message}");
    }

    return Ok(new { message = "Status updated successfully", field = request.Field, newValue = newValueDisplay });
  }

  private string GetLookupTranslation(string fieldName, int id)
  {
    return fieldName switch
    {
      "client" => id switch { 1 => "غير مصنف", 2 => "مدني خطا", 3 => "نشط", 4 => "مسجون", 5 => "وفاه", 6 => "مغادر نهائي", 7 => "سداد المحكمة", 8 => "سداد شركة", 9 => "سداد مندوب مكتب", _ => id.ToString() },
      "claim" => id switch { 1 => "غير مصنف", 2 => "حفظ", 3 => "حفظ مؤقت في المكتب", 4 => "حفظ مؤقت في الشركة", 5 => "سداد محكمة", 6 => "سحب اداري", 7 => "وقف", 8 => "سداد قبل التحويل", 9 => "سداد بمعرفة الشركة", _ => id.ToString() },
      "file" => id switch { 1 => "غير مصنف", 2 => "ودي", 3 => "قضائي", _ => id.ToString() },
      "action" => id switch { 1 => "غير مصنف", 2 => "اونلاين", 3 => "رسوم", 4 => "تنفيذ", 5 => "تنفيذ جديد 1", 6 => "مرفوض مرة", 7 => "مرفوض مرتين", 8 => "مرفوض اكثر من مرتين", 9 => "مرفوض فوق 1000", 10 => "جلسات", 11 => "رفض الدعوى بحالتها", 12 => "تم التسليم للمتداول", 13 => "الغاء الحكم بالتظلم", 14 => "قيد الرفع", 15 => "اعادة الرفع", _ => id.ToString() },
      "interior" => id switch { 1 => "غير مصنف", 2 => "غير مخالف", 3 => "في قائمة الممنوعين", 4 => "مخالف اقامة", 5 => "هجرة", 6 => "خارج البلاد", _ => id.ToString() },
      "internal" => id switch { 1 => "غير مصنف", 2 => "غير مخالف", 3 => "في قائمة الممنوعين", 4 => "مخالف اقامة", 5 => "هجرة", 6 => "خارج البلاد", _ => id.ToString() },
      "civil" => id switch { 1 => "غير مصنف", 2 => "صالحة", 3 => "منتهية", 4 => "لاغية", 5 => "يتعذر", 6 => "غير نشط", 7 => "وفاة", _ => id.ToString() },
      "contact" => id switch { 1 => "غير مصنف", 2 => "مع العميل", 3 => "غير متواصل", 4 => "لا يمكن التواصل", 5 => "مع اخر", 6 => "مع العميل واخر", _ => id.ToString() },
      "cooperation" => id switch { 1 => "غير مصنف", 2 => "وعد بالسداد", 3 => "تقسيط", 4 => "متعاون", 5 => "غير متعاون", 6 => "مماطل", 7 => "متردد", 8 => "غير قادر", 9 => "وعد ضعيف", 10 => "وعد قوي", 11 => "رافض السداد", 12 => "لم نصل اليه", _ => id.ToString() },
      "comms_lang" => id switch { 1 => "غير مصنف", 2 => "عربي", 3 => "إنجليزي", 4 => "أوردو", 5 => "هندي", 6 => "تاغالوغ", _ => id.ToString() },
      "gender" => id switch { 1 => "غير مصنف", 2 => "ذكر", 3 => "أنثى", _ => id.ToString() },
      "status" => id switch 
      { 
        1 => "سداد جزئى", 2 => "تحصيل ودى", 3 => "خارج البلاد", 4 => "مغادر نهائى", 
        5 => "حفظ", 6 => "سداد مكتب", 7 => "تنفيذ", 14 => "حفظ مؤقت من الشركة",
        15 => "حفظ مؤقت من المكتب", 16 => "سحب ادارى", 17 => "سداد بمعرفة الشركة",
        18 => "سداد محكمه", 22 => "محكمة فقط", 25 => "موكل", 26 => "ودي فقط",
        27 => "وفاة", 28 => "وقف", 35 => "ملغى", 46 => "مرفوض", 58 => "تسوية",
        _ => id.ToString() 
      },
      _ => id.ToString()
    };
  }
}
