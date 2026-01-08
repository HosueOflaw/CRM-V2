using House_of_law_api.DTOs;
using House_of_law_api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace House_of_law_api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class PermissionsController : ControllerBase
{
    private readonly IPermissionService _permissionService;

    public PermissionsController(IPermissionService permissionService)
    {
        _permissionService = permissionService;
    }

    [HttpPost("request")]
    public async Task<IActionResult> CreateRequest(CreatePermissionRequestDto dto)
    {
        var userIdString = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out var userId))
            return Unauthorized();

        var result = await _permissionService.CreateRequestAsync(userId, dto);
        return Ok(result);
    }

    [HttpGet("my-requests")]
    public async Task<ActionResult<IEnumerable<PermissionRequestDto>>> GetMyRequests()
    {
        var userIdString = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out var userId))
            return Unauthorized();

        var result = await _permissionService.GetUserRequestsAsync(userId);
        return Ok(result);
    }

    [HttpGet("pending")]
    [Authorize(Roles = "admin")]
    public async Task<ActionResult<IEnumerable<PermissionRequestDto>>> GetPendingRequests()
    {
        var result = await _permissionService.GetPendingRequestsAsync();
        return Ok(result);
    }

    [HttpPost("process")]
    [Authorize(Roles = "admin")]
    public async Task<IActionResult> ProcessRequest(ProcessPermissionRequestDto dto)
    {
        var success = await _permissionService.ProcessRequestAsync(dto);
        if (!success) return NotFound();
        return Ok(new { message = "Request processed successfully" });
    }

    [HttpPost("delegate")]
    [Authorize(Roles = "admin,supervisor")]
    public async Task<IActionResult> DelegatePermission(DelegatePermissionDto dto)
    {
        var supervisorIdString = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(supervisorIdString) || !int.TryParse(supervisorIdString, out var supervisorId))
            return Unauthorized();

        var result = await _permissionService.DelegatePermissionAsync(supervisorId, dto);
        
        if (!result.Success) 
            return BadRequest(new { message = result.Message });
        
        return Ok(new { message = result.Message });
    }
}
