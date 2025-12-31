using House_of_law_api.DTOs;
using House_of_law_api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace House_of_law_api.Controllers;

/// <summary>
/// Authentication Controller - Login, Logout, etc.
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly INotificationService _notificationService;
    private readonly ILogger<AuthController> _logger;

    public AuthController(
        IUserService userService,
        INotificationService notificationService,
        ILogger<AuthController> logger)
    {
        _userService = userService;
        _notificationService = notificationService;
        _logger = logger;
    }

    /// <summary>
    /// تسجيل الدخول
    /// POST: api/auth/login
    /// </summary>
    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<ActionResult<LoginResponseDto>> Login(LoginDto loginDto)
    {
        // استخدام Cloudflare IP
        var clientIp = HttpContext.Connection.RemoteIpAddress?.ToString();
        _logger.LogInformation("Login attempt from IP: {Ip}, Username: {Username}", clientIp, loginDto.Username);

        var result = await _userService.LoginAsync(loginDto);

        if (!result.Success)
        {
            return Unauthorized(result);
        }

        // إشعار SignalR
        await _notificationService.BroadcastToAllAsync("user:logged_in", new
        {
            userId = result.UserId,
            username = result.Username,
            timestamp = DateTime.UtcNow
        });

        return Ok(result);
    }

    /// <summary>
    /// تغيير كلمة المرور
    /// POST: api/auth/change-password
    /// </summary>
    [HttpPost("change-password")]
    [Authorize]
    public async Task<IActionResult> ChangePassword(ChangePasswordDto changePasswordDto)
    {
        var success = await _userService.ChangePasswordAsync(changePasswordDto);

        if (!success)
        {
            return BadRequest(new { message = "Invalid old password or user not found" });
        }

        // إشعار SignalR
        await _notificationService.BroadcastToUserAsync(
            changePasswordDto.UserId.ToString(),
            "password:changed",
            new { userId = changePasswordDto.UserId }
        );

        return Ok(new { message = "Password changed successfully" });
    }
}
