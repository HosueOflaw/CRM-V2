using House_of_law_api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace House_of_law_api.Controllers;

/// <summary>
/// Test Controller لاختبار JWT Token والـ Security
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class TestJwtController : ControllerBase
{
    private readonly IJwtService _jwtService;
    private readonly ILogger<TestJwtController> _logger;

    public TestJwtController(IJwtService jwtService, ILogger<TestJwtController> logger)
    {
        _jwtService = jwtService;
        _logger = logger;
    }

    /// <summary>
    /// اختبار Token بدون Authentication - للتحقق من صحة Token
    /// GET: api/testjwt/validate?token=YOUR_TOKEN
    /// </summary>
    [HttpGet("validate")]
    [AllowAnonymous]
    public IActionResult ValidateToken([FromQuery] string token)
    {
        if (string.IsNullOrWhiteSpace(token))
        {
            return BadRequest(new { error = "Token is required" });
        }

        try
        {
            var isValid = _jwtService.ValidateToken(token);
            var userId = _jwtService.GetUserIdFromToken(token);

            _logger.LogInformation("Token validation attempt - Valid: {IsValid}, UserId: {UserId}", isValid, userId);

            if (isValid)
            {
                return Ok(new
                {
                    valid = true,
                    userId = userId,
                    message = "Token is valid",
                    timestamp = DateTime.UtcNow
                });
            }
            else
            {
                return Unauthorized(new
                {
                    valid = false,
                    message = "Token is invalid or expired",
                    timestamp = DateTime.UtcNow
                });
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error validating token");
            return BadRequest(new { error = "Error validating token", message = ex.Message });
        }
    }

    /// <summary>
    /// اختبار Protected Endpoint - يتطلب Authentication
    /// GET: api/testjwt/protected
    /// </summary>
    [HttpGet("protected")]
    [Authorize]
    public IActionResult ProtectedEndpoint()
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var username = User.FindFirst(ClaimTypes.Name)?.Value;
        var role = User.FindFirst(ClaimTypes.Role)?.Value;

        _logger.LogInformation("Protected endpoint accessed by UserId: {UserId}, Username: {Username}", userId, username);

        return Ok(new
        {
            message = "You are authenticated!",
            userId = userId,
            username = username,
            role = role,
            authenticated = User.Identity?.IsAuthenticated ?? false,
            authenticationType = User.Identity?.AuthenticationType,
            claims = User.Claims.Select(c => new { c.Type, c.Value }).ToList(),
            timestamp = DateTime.UtcNow
        });
    }

    /// <summary>
    /// اختبار Protected Endpoint مع Role - Admin فقط
    /// GET: api/testjwt/admin
    /// </summary>
    [HttpGet("admin")]
    [Authorize(Roles = "admin")]
    public IActionResult AdminEndpoint()
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var username = User.FindFirst(ClaimTypes.Name)?.Value;
        var role = User.FindFirst(ClaimTypes.Role)?.Value;

        _logger.LogInformation("Admin endpoint accessed by UserId: {UserId}, Username: {Username}, Role: {Role}", 
            userId, username, role);

        return Ok(new
        {
            message = "You are an admin!",
            userId = userId,
            username = username,
            role = role,
            timestamp = DateTime.UtcNow
        });
    }

    /// <summary>
    /// اختبار Endpoint بدون Authentication - يجب أن يكون متاح للجميع
    /// GET: api/testjwt/public
    /// </summary>
    [HttpGet("public")]
    [AllowAnonymous]
    public IActionResult PublicEndpoint()
    {
        return Ok(new
        {
            message = "This is a public endpoint - no authentication required",
            timestamp = DateTime.UtcNow,
            authenticated = User.Identity?.IsAuthenticated ?? false
        });
    }

    /// <summary>
    /// اختبار Endpoint مع أي Role - يتطلب Authentication فقط
    /// GET: api/testjwt/user
    /// </summary>
    [HttpGet("user")]
    [Authorize]
    public IActionResult UserEndpoint()
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var role = User.FindFirst(ClaimTypes.Role)?.Value;

        return Ok(new
        {
            message = "You are authenticated as a user!",
            userId = userId,
            role = role,
            timestamp = DateTime.UtcNow
        });
    }

    /// <summary>
    /// اختبار Security - محاولة الوصول بدون Token
    /// GET: api/testjwt/security-test
    /// </summary>
    [HttpGet("security-test")]
    [Authorize]
    public IActionResult SecurityTest()
    {
        var hasToken = !string.IsNullOrEmpty(Request.Headers["Authorization"].ToString());
        var isAuthenticated = User.Identity?.IsAuthenticated ?? false;

        return Ok(new
        {
            message = "Security test endpoint",
            hasAuthorizationHeader = hasToken,
            isAuthenticated = isAuthenticated,
            userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value,
            securityStatus = isAuthenticated ? "SECURE" : "INSECURE",
            timestamp = DateTime.UtcNow
        });
    }

    /// <summary>
    /// اختبار Token من Header - يقرأ Token من Authorization Header
    /// GET: api/testjwt/header-token
    /// </summary>
    [HttpGet("header-token")]
    [Authorize]
    public IActionResult GetTokenFromHeader()
    {
        var authHeader = Request.Headers["Authorization"].ToString();
        var token = authHeader.Replace("Bearer ", "");

        if (string.IsNullOrWhiteSpace(token))
        {
            return BadRequest(new { error = "No token found in Authorization header" });
        }

        var isValid = _jwtService.ValidateToken(token);
        var userId = _jwtService.GetUserIdFromToken(token);

        return Ok(new
        {
            message = "Token extracted from Authorization header",
            tokenLength = token.Length,
            tokenPrefix = token.Substring(0, Math.Min(20, token.Length)) + "...",
            isValid = isValid,
            userId = userId,
            headerValue = authHeader,
            timestamp = DateTime.UtcNow
        });
    }

    /// <summary>
    /// فك Payload من Token - يوضح أن Payload يمكن قراءته (Base64 Encoded فقط)
    /// GET: api/testjwt/decode-payload?token=YOUR_TOKEN
    /// </summary>
    [HttpGet("decode-payload")]
    [AllowAnonymous]
    public IActionResult DecodePayload([FromQuery] string token)
    {
        if (string.IsNullOrWhiteSpace(token))
        {
            return BadRequest(new { error = "Token is required" });
        }

        try
        {
            var tokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
            var jwtToken = tokenHandler.ReadJwtToken(token);

            _logger.LogInformation("Payload decoded - showing that JWT payload is readable (Base64 encoded, not encrypted)");

            return Ok(new
            {
                message = "⚠️ Payload يمكن قراءته - هذا طبيعي في JWS (JSON Web Signature)",
                explanation = "JWT Payload هو Base64 Encoded فقط وليس Encrypted. يمكن قراءته بسهولة باستخدام jwt.io أو Base64 decoder.",
                securityNote = "هذا آمن لأن: 1) التوقيع يحمي من التلاعب 2) HTTPS يحمي أثناء النقل 3) البيانات غير حساسة",
                payload = new
                {
                    raw = jwtToken.Payload,
                    claims = jwtToken.Claims.Select(c => new { c.Type, c.Value }).ToList()
                },
                header = new
                {
                    alg = jwtToken.Header.Alg,
                    typ = jwtToken.Header.Typ
                },
                timestamp = DateTime.UtcNow
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error decoding token payload");
            return BadRequest(new { error = "Invalid token format", message = ex.Message });
        }
    }
}

