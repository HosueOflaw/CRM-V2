

namespace House_of_law_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DepartmentsController : ControllerBase
{
  private readonly IDepartmentRepository _repository;
  private readonly INotificationService _notificationService;
  private readonly ILogger<DepartmentsController> _logger;

  public DepartmentsController(
      IDepartmentRepository repository,
      INotificationService notificationService,
      ILogger<DepartmentsController> logger)
  {
    _repository = repository;
    _notificationService = notificationService;
    _logger = logger;
  }

  [HttpGet]
  public async Task<ActionResult<IEnumerable<DepartmentDto>>> GetDepartments()
  {
    var departments = await _repository.GetAllAsync();
    var dtos = departments.Select(d => new DepartmentDto
    {
      Id = d.Id,
      Code = d.Code,
      Name = d.Name
    });
    return Ok(dtos);
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<DepartmentDto>> GetDepartment(int id)
  {
    var department = await _repository.GetByIdAsync(id);
    if (department == null) return NotFound();

    return Ok(new DepartmentDto { Id = department.Id, Code = department.Code, Name = department.Name });
  }

  [HttpPost]
  public async Task<ActionResult<DepartmentDto>> CreateDepartment(CreateDepartmentDto dto)
  {
    var department = new Department
    {
      Code = dto.Code,
      Name = dto.Name
    };

    var created = await _repository.AddAsync(department);
    await _notificationService.BroadcastToAllAsync("department:created", new { id = created.Id, name = created.Name });

    return CreatedAtAction(nameof(GetDepartment), new { id = created.Id },
        new DepartmentDto { Id = created.Id, Code = created.Code, Name = created.Name });
  }

  [HttpPut("{id}")]
  public async Task<IActionResult> UpdateDepartment(int id, CreateDepartmentDto dto)
  {
    var department = await _repository.GetByIdAsync(id);
    if (department == null) return NotFound();

    department.Code = dto.Code ?? department.Code;
    department.Name = dto.Name ?? department.Name;

    await _repository.UpdateAsync(department);
    await _notificationService.BroadcastToAllAsync("department:updated", new { id = department.Id });

    return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> DeleteDepartment(int id)
  {
    var department = await _repository.GetByIdAsync(id);
    if (department == null) return NotFound();

    await _repository.DeleteAsync(department);
    await _notificationService.BroadcastToAllAsync("department:deleted", new { id });

    return NoContent();
  }
}
