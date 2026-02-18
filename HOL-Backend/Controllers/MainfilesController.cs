

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

        if (!string.IsNullOrEmpty(search))
        {
            var results = await _repository.SearchByNameAsync(search);
            return Ok(results);
        }

        var mainfiles = await _repository.GetAllAsync();
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
}
