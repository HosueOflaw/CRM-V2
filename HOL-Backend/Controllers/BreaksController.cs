using House_of_law_api.DTOs;
using House_of_law_api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace House_of_law_api.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class BreaksController : ControllerBase
{
    private readonly IBreakService _breakService;

    public BreaksController(IBreakService breakService)
    {
        _breakService = breakService;
    }

    [HttpPost("start")]
    public async Task<IActionResult> StartBreak()
    {
        var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value!);
        try
        {
            var result = await _breakService.StartBreakAsync(userId);
            return Ok(result);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpPost("end")]
    public async Task<IActionResult> EndBreak()
    {
        var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value!);
        try
        {
            var result = await _breakService.EndBreakAsync(userId);
            return Ok(result);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpGet("status")]
    public async Task<IActionResult> GetStatus()
    {
        var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value!);
        var status = await _breakService.GetCurrentStatusAsync(userId);
        return Ok(status);
    }

    [HttpGet("active")]
    [Authorize(Roles = "admin,supervisor")]
    public async Task<IActionResult> GetActiveBreaks()
    {
        string? department = null;
        if (User.IsInRole("supervisor"))
        {
            department = User.FindFirst("SupervisedDepartment")?.Value;
        }

        var result = await _breakService.GetActiveBreaksAsync(department);
        return Ok(result);
    }

    [HttpGet("daily")]
    [Authorize(Roles = "admin,supervisor")]
    public async Task<IActionResult> GetDailyReport([FromQuery] DateTime? date)
    {
        var reportDate = date ?? DateTime.UtcNow;
        
        string? department = null;
        if (User.IsInRole("supervisor"))
        {
            department = User.FindFirst("SupervisedDepartment")?.Value;
        }

        var result = await _breakService.GetDailyBreaksAsync(reportDate, department);
        return Ok(result);
    }
}
