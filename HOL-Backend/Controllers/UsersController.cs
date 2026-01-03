using House_of_law_api.DTOs;
using House_of_law_api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace House_of_law_api.Controllers;

/// <summary>
/// Users Controller - يستخدم Repository Pattern عبر UserService
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly INotificationService _notificationService;
    private readonly ILogger<UsersController> _logger;

    public UsersController(
        IUserService userService,
        INotificationService notificationService,
        ILogger<UsersController> logger)
    {
        _userService = userService;
        _notificationService = notificationService;
        _logger = logger;
    }

    /// <summary>
    /// جلب كل المستخدمين
    /// GET: api/users
    /// </summary>
    [HttpGet]
    [Authorize]
    public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers()
    {
        // استخدام Cloudflare IP في الـ Logging
        var clientIp = HttpContext.Connection.RemoteIpAddress?.ToString();
        var cloudflareRayId = HttpContext.Items["Cloudflare-RayId"]?.ToString();
        
        _logger.LogInformation("GetUsers called from IP: {Ip}, CF-Ray: {RayId}", clientIp, cloudflareRayId);

        var users = await _userService.GetAllUsersAsync();
        return Ok(users);
    }

    /// <summary>
    /// جلب مستخدم واحد
    /// GET: api/users/5
    /// </summary>
    [HttpGet("{id}")]
    [Authorize]
    public async Task<ActionResult<UserDto>> GetUser(int id)
    {
        var user = await _userService.GetUserByIdAsync(id);

        if (user == null)
        {
            return NotFound();
        }

        return Ok(user);
    }

    /// <summary>
    /// إنشاء مستخدم جديد
    /// POST: api/users
    /// </summary>
    [HttpPost]
    [Authorize(Roles = "admin")]
    public async Task<ActionResult<UserDto>> CreateUser(CreateUserDto createDto)
    {
        // استخدام Cloudflare IP للـ Logging
        var clientIp = HttpContext.Connection.RemoteIpAddress?.ToString();
        _logger.LogInformation("CreateUser called from IP: {Ip}, Username: {Username}, HasPassword: {HasPassword}", 
            clientIp, createDto.Username, !string.IsNullOrEmpty(createDto.Password));

        // Validation
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        if (string.IsNullOrWhiteSpace(createDto.Password))
        {
            return BadRequest(new { error = "Password is required" });
        }

        try
        {
            var user = await _userService.CreateUserAsync(createDto);

            // إرسال إشعار SignalR لكل المستخدمين
            await _notificationService.BroadcastToAllAsync("user:created", new
            {
                userId = user.Id,
                username = user.Username,
                fullName = user.FullName
            });

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { error = ex.Message });
        }
    }

    /// <summary>
    /// تحديث مستخدم
    /// PUT: api/users/5
    /// </summary>
    [HttpPut("{id}")]
    [Authorize]
    public async Task<IActionResult> UpdateUser(int id, UpdateUserDto updateDto)
    {
        var user = await _userService.UpdateUserAsync(id, updateDto);

        if (user == null)
        {
            return NotFound();
        }

        // إشعار SignalR
        await _notificationService.BroadcastToAllAsync("user:updated", new
        {
            userId = user.Id,
            username = user.Username
        });

        return NoContent();
    }

    /// <summary>
    /// حذف مستخدم
    /// DELETE: api/users/5
    /// </summary>
    [HttpDelete("{id}")]
    [Authorize(Roles = "admin")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var deleted = await _userService.DeleteUserAsync(id);

        if (!deleted)
        {
            return NotFound();
        }

        // إشعار SignalR
        await _notificationService.BroadcastToAllAsync("user:deleted", new
        {
            userId = id
        });

        return NoContent();
    }

    /// <summary>
    /// جلب مستخدم بالـ Username
    /// GET: api/users/username/{username}
    /// </summary>
    [HttpGet("username/{username}")]
    [Authorize]
    public async Task<ActionResult<UserDto>> GetUserByUsername(string username)
    {
        var user = await _userService.GetUserByUsernameAsync(username);

        if (user == null)
        {
            return NotFound();
        }

        return Ok(user);
    }

    /// <summary>
    /// جلب مستخدمين حسب الـ Role
    /// GET: api/users/role/{role}
    /// </summary>
    [HttpGet("role/{role}")]
    [Authorize(Roles = "admin")]
    public async Task<ActionResult<IEnumerable<UserDto>>> GetUsersByRole(string role)
    {
        var users = await _userService.GetUsersByRoleAsync(role);
        return Ok(users);
    }

    /// <summary>
    /// تسجيل الدخول
    /// POST: api/users/login
    /// </summary>
    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<ActionResult<LoginResponseDto>> Login(LoginDto loginDto)
    {
        var clientIp = HttpContext.Connection.RemoteIpAddress?.ToString();
        _logger.LogInformation("Login attempt from IP: {Ip}, Username: {Username}", clientIp, loginDto.Username);

        var result = await _userService.LoginAsync(loginDto);

        if (!result.Success)
        {
            return Unauthorized(result);
        }

        // Log token generation for debugging (only in development)
        if (!string.IsNullOrEmpty(result.Token))
        {
            _logger.LogInformation("JWT Token generated successfully for user: {Username}, Token length: {TokenLength}", 
                result.Username, result.Token?.Length ?? 0);
        }

        // إشعار SignalR
        await _notificationService.BroadcastToAllAsync("user:logged_in", new
        {
            userId = result.UserId,
            username = result.Username
        });

        return Ok(result);
    }

    /// <summary>
    /// تغيير كلمة المرور
    /// POST: api/users/change-password
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

        return Ok(new { message = "Password changed successfully" });
    }

    /// <summary>
    /// تسجيل الخروج
    /// POST: api/users/logout
    /// Headers: Authorization: Bearer {token}
    /// </summary>
    [HttpPost("logout")]
    [Authorize]
    public async Task<IActionResult> Logout()
    {
        // الحصول على User ID من الـ Claims
        var userIdClaim = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier);
        var usernameClaim = User.FindFirst(System.Security.Claims.ClaimTypes.Name);
        
        var userId = userIdClaim != null && int.TryParse(userIdClaim.Value, out var id) ? id : (int?)null;
        var username = usernameClaim?.Value;

        var clientIp = HttpContext.Connection.RemoteIpAddress?.ToString();
        _logger.LogInformation("Logout request from IP: {Ip}, UserId: {UserId}, Username: {Username}", 
            clientIp, userId, username);

        // إشعار SignalR للمستخدمين الآخرين
        if (userId.HasValue)
        {
            await _notificationService.BroadcastToAllAsync("user:logged_out", new
            {
                userId = userId.Value,
                username = username,
                timestamp = DateTime.UtcNow
            });
        }

        // ملاحظة: JWT tokens هي stateless، لذلك لا يمكن "إلغاء" الـ token من الـ server
        // الـ client يجب أن يتجاهل الـ token بعد logout
        return Ok(new 
        { 
            message = "Logout successful",
            timestamp = DateTime.UtcNow
        });
    }
}
