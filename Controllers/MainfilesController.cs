using House_of_law_api.Interfaces;
using House_of_law_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace House_of_law_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MainfilesController : ControllerBase
{
    private readonly IMainfileRepository _repository;
    private readonly INotificationService _notificationService;
    private readonly ILogger<MainfilesController> _logger;

    public MainfilesController(
        IMainfileRepository repository,
        INotificationService notificationService,
        ILogger<MainfilesController> logger)
    {
        _repository = repository;
        _notificationService = notificationService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Domain.Entities.Mainfile>>> GetMainfiles([FromQuery] string? search = null)
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
    public async Task<ActionResult<Domain.Entities.Mainfile>> GetMainfile(long id)
    {
        var mainfile = await _repository.GetByIdAsync(id);
        if (mainfile == null) return NotFound();
        return Ok(mainfile);
    }

    [HttpGet("code/{code}")]
    public async Task<ActionResult<Domain.Entities.Mainfile>> GetMainfileByCode(int code)
    {
        var mainfile = await _repository.GetByCodeAsync(code);
        if (mainfile == null) return NotFound();
        return Ok(mainfile);
    }

    [HttpPost]
    public async Task<ActionResult<Domain.Entities.Mainfile>> CreateMainfile(Domain.Entities.Mainfile mainfile)
    {
        mainfile.DateAdded = DateTime.UtcNow;
        var created = await _repository.AddAsync(mainfile);
        await _notificationService.BroadcastToAllAsync("mainfile:created", new { id = created.Id, code = created.Code });
        return CreatedAtAction(nameof(GetMainfile), new { id = created.Id }, created);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateMainfile(long id, Domain.Entities.Mainfile mainfile)
    {
        var existing = await _repository.GetByIdAsync(id);
        if (existing == null) return NotFound();

        // Update properties
        existing.Name = mainfile.Name ?? existing.Name;
        existing.Cid = mainfile.Cid ?? existing.Cid;
        existing.Address = mainfile.Address ?? existing.Address;
        // Add other properties as needed

        await _repository.UpdateAsync(existing);
        await _notificationService.BroadcastToAllAsync("mainfile:updated", new { id = existing.Id });

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMainfile(long id)
    {
        var mainfile = await _repository.GetByIdAsync(id);
        if (mainfile == null) return NotFound();

        await _repository.DeleteAsync(mainfile);
        await _notificationService.BroadcastToAllAsync("mainfile:deleted", new { id });

        return NoContent();
    }
}
