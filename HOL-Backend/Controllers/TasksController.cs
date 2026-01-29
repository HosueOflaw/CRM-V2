using House_of_law_api.DTOs;
using House_of_law_api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;

namespace House_of_law_api.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class TasksController : ControllerBase
{
    private readonly ITaskService _taskService;

    public TasksController(ITaskService taskService)
    {
        _taskService = taskService;
    }

    private int GetCurrentUserId()
    {
        return int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "0");
    }

    [HttpPost]
    [Authorize(Roles = "admin,supervisor")]
    public async Task<IActionResult> CreateTask(CreateTaskDto dto)
    {
        try
        {
            var userId = GetCurrentUserId();
            var result = await _taskService.CreateTaskAsync(userId, dto);
            return Ok(result);
        }
        catch (UnauthorizedAccessException ex)
        {
            return StatusCode(403, new { message = ex.Message });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetTasks(
        [FromQuery] string status, 
        [FromQuery] string priority,
        [FromQuery] DateTime? date,
        [FromQuery] DateTime? startDate,
        [FromQuery] DateTime? endDate)
    {
        var userId = GetCurrentUserId();
        var tasks = await _taskService.GetTasksAsync(userId, status, priority, date, startDate, endDate);
        return Ok(tasks);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTaskById(int id)
    {
        var userId = GetCurrentUserId();
        var task = await _taskService.GetTaskByIdAsync(userId, id);
        
        if (task == null) 
            return NotFound(new { message = "Task not found or you don't have permission to view it." });

        return Ok(task);
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "admin,supervisor")]
    public async Task<IActionResult> UpdateTask(int id, UpdateTaskDto dto)
    {
        try
        {
            var userId = GetCurrentUserId();
            var result = await _taskService.UpdateTaskAsync(userId, id, dto);
            
            if (result == null) 
                return NotFound(new { message = "Task not found." });

            return Ok(result);
        }
        catch (UnauthorizedAccessException ex)
        {
            return StatusCode(403, new { message = ex.Message });
        }
    }

    [HttpPut("{id}/status")]
    public async Task<IActionResult> UpdateTaskStatus(int id, UpdateTaskStatusDto dto)
    {
        try
        {
            var userId = GetCurrentUserId();
            var result = await _taskService.UpdateTaskStatusAsync(userId, id, dto);

            if (result == null) 
                return NotFound(new { message = "Task not found." });

            return Ok(result);
        }
        catch (UnauthorizedAccessException ex)
        {
            return StatusCode(403, new { message = ex.Message });
        }
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "admin,supervisor")]
    public async Task<IActionResult> DeleteTask(int id)
    {
        try
        {
            var userId = GetCurrentUserId();
            var success = await _taskService.DeleteTaskAsync(userId, id);

            if (!success)
                return NotFound(new { message = "Task not found." });

            return Ok(new { message = "Task deleted successfully" });
        }
        catch (UnauthorizedAccessException ex)
        {
            return StatusCode(403, new { message = ex.Message });
        }
    }
}
