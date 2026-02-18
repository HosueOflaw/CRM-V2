

namespace House_of_law_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NotesController : ControllerBase
{
    private readonly INoteRepository _repository;
    private readonly INotificationService _notificationService;
    private readonly ILogger<NotesController> _logger;
    private readonly IAuditService _auditService;

    public NotesController(
        INoteRepository repository,
        INotificationService notificationService,
        ILogger<NotesController> logger,
        IAuditService auditService)
    {
        _repository = repository;
        _notificationService = notificationService;
        _logger = logger;
        _auditService = auditService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Note>>> GetNotes([FromQuery] long? fileCode = null, [FromQuery] long? deptCode = null)
    {
        if (fileCode.HasValue)
        {
            var notes = await _repository.GetByFileCodeAsync(fileCode.Value);
            return Ok(notes);
        }

        if (deptCode.HasValue)
        {
            var notes = await _repository.GetByDeptCodeAsync(deptCode.Value);
            return Ok(notes);
        }

        var allNotes = await _repository.GetAllAsync();
        return Ok(allNotes);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Note>> GetNote(int id)
    {
        var note = await _repository.GetByIdAsync(id);
        if (note == null) return NotFound();
        return Ok(note);
    }

    [HttpPost]
    public async Task<ActionResult<Note>> CreateNote(Note note)
    {
        note.DateAdded = DateTime.UtcNow;
        var created = await _repository.AddAsync(note);

        // Audit Log
        await _auditService.LogActionAsync(created.FileCode, (long?)created.DeptCode, "ADD", $"إضافة ملاحظة جديدة على الملف", null, "Note", created.Id.ToString(), created.DateAdded);

        await _notificationService.BroadcastToAllAsync("note:created", new { id = created.Id, fileCode = created.FileCode });
        return CreatedAtAction(nameof(GetNote), new { id = created.Id }, created);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateNote(int id, Note note)
    {
        var existing = await _repository.GetByIdAsync(id);
        if (existing == null) return NotFound();

        // Capture Previous State
        var previousState = new { existing.NoteText };

        existing.NoteText = note.NoteText ?? existing.NoteText;
        existing.UserUpdated = note.UserUpdated ?? existing.UserUpdated;

        await _repository.UpdateAsync(existing);

        // Audit Log
        await _auditService.LogActionAsync(existing.FileCode, (long?)existing.DeptCode, "UPDATE", $"تعديل الملاحظة بواسطة User Update", previousState, "Note", existing.Id.ToString(), existing.DateAdded, DateTime.UtcNow);

        await _notificationService.BroadcastToAllAsync("note:updated", new { id = existing.Id });

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteNote(int id)
    {
        var note = await _repository.GetByIdAsync(id);
        if (note == null) return NotFound();

        await _repository.DeleteAsync(note);

        // Audit Log
        await _auditService.LogActionAsync(note.FileCode, (long?)note.DeptCode, "DELETE", $"حذف ملاحظة من الملف", note, "Note", id.ToString());

        await _notificationService.BroadcastToAllAsync("note:deleted", new { id });

        return NoContent();
    }
}
