using House_of_law_api.Interfaces;
using House_of_law_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace House_of_law_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NotesController : ControllerBase
{
    private readonly INoteRepository _repository;
    private readonly INotificationService _notificationService;
    private readonly ILogger<NotesController> _logger;

    public NotesController(
        INoteRepository repository,
        INotificationService notificationService,
        ILogger<NotesController> logger)
    {
        _repository = repository;
        _notificationService = notificationService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Domain.Entities.Note>>> GetNotes([FromQuery] long? fileCode = null, [FromQuery] long? deptCode = null)
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
    public async Task<ActionResult<Domain.Entities.Note>> GetNote(int id)
    {
        var note = await _repository.GetByIdAsync(id);
        if (note == null) return NotFound();
        return Ok(note);
    }

    [HttpPost]
    public async Task<ActionResult<Domain.Entities.Note>> CreateNote(Domain.Entities.Note note)
    {
        note.DateAdded = DateTime.UtcNow;
        var created = await _repository.AddAsync(note);
        await _notificationService.BroadcastToAllAsync("note:created", new { id = created.Id, fileCode = created.FileCode });
        return CreatedAtAction(nameof(GetNote), new { id = created.Id }, created);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateNote(int id, Domain.Entities.Note note)
    {
        var existing = await _repository.GetByIdAsync(id);
        if (existing == null) return NotFound();

        existing.NoteText = note.NoteText ?? existing.NoteText;
        existing.UserUpdated = note.UserUpdated ?? existing.UserUpdated;

        await _repository.UpdateAsync(existing);
        await _notificationService.BroadcastToAllAsync("note:updated", new { id = existing.Id });

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteNote(int id)
    {
        var note = await _repository.GetByIdAsync(id);
        if (note == null) return NotFound();

        await _repository.DeleteAsync(note);
        await _notificationService.BroadcastToAllAsync("note:deleted", new { id });

        return NoContent();
    }
}
