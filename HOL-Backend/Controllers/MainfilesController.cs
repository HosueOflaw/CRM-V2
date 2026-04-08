
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
        string fieldLabel = request.Field switch {
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
            "discount" => "الخصم",
            "acceptance" => "القبول",
            "salarydate" => "تاريخ الراتب",
            "work" => "الدوام",
            "incomenotes" => "ملاحظات الدخل",
            "classification" => "التصنيف",
            _ => request.Field
        };

        // UI-Friendly Value (Fallback)
        string newValueDisplay = request.NewValueText ?? newValue?.ToString() ?? "---";

        // Audit Log
        string description = $"تعديل حالة {fieldLabel}: من {previousValue ?? "N/A"} إلى {newValueDisplay}";
        await _auditService.LogActionAsync(existing.Code, null, "UPDATE_STATUS", description, previousValue, "Mainfile", existing.Id.ToString(), existing.DateAdded, DateTime.UtcNow, userId);

        // Formatted Status for History Table (Type | NewValue)
        string historyStatus = $"{fieldLabel} | {newValueDisplay}";

        // Insert into FileStatuses History Table
        var historyEntry = new FileStatus
        {
            FileCode = existing.Id,
            Status = historyStatus,
            DateAdded = DateTime.UtcNow
        };
        _context.FileStatuses.Add(historyEntry);

        try {
            await _repository.UpdateAsync(existing);
            await _context.SaveChangesAsync();
        } catch (Exception ex) {
            _logger.LogError(ex, "Error updating status for file {Id}", id);
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }

        return Ok(new { message = "Status updated successfully", field = request.Field, newValue = newValueDisplay });
    }
}
