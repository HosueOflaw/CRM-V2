using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace House_of_law_api.Services;

public class JwtService : IJwtService
{
    private readonly IConfiguration _configuration;
    private readonly ILogger<JwtService> _logger;

    public JwtService(IConfiguration configuration, ILogger<JwtService> logger)
    {
        _configuration = configuration;
        _logger = logger;
    }

    public string GenerateToken(int userId, string username, string role, string securityStamp = null, string supervisedDept = null, string accessibleDepts = null, string accessibleFeatures = null)
    {
        var secretKey = _configuration["Jwt:SecretKey"] 
            ?? throw new InvalidOperationException("JWT SecretKey not configured");
        
        var issuer = _configuration["Jwt:Issuer"] ?? "HouseOfLawAPI";
        var audience = _configuration["Jwt:Audience"] ?? "HouseOfLawClient";
        var expiryMinutes = int.Parse(_configuration["Jwt:ExpiryMinutes"] ?? "60");

        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var claims = new List<Claim>
        {
            // Standard JWT Claims
            new Claim(JwtRegisteredClaimNames.Sub, userId.ToString()), // Subject (User ID)
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()), // JWT ID (Unique)
            new Claim(JwtRegisteredClaimNames.Iat, 
                DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString(), 
                ClaimValueTypes.Integer64), // Issued At
            new Claim(JwtRegisteredClaimNames.Exp, 
                DateTimeOffset.UtcNow.AddMinutes(expiryMinutes).ToUnixTimeSeconds().ToString(),
                ClaimValueTypes.Integer64), // Expiration
            
            // Custom Claims
            new Claim(ClaimTypes.NameIdentifier, userId.ToString()), // User ID
            new Claim(ClaimTypes.Name, username), // Username
            new Claim(ClaimTypes.Role, role ?? "User"), // Role
        };

        if (!string.IsNullOrEmpty(securityStamp))
            claims.Add(new Claim("SecurityStamp", securityStamp));

        if (!string.IsNullOrEmpty(supervisedDept))
            claims.Add(new Claim("SupervisedDepartment", supervisedDept));

        if (!string.IsNullOrEmpty(accessibleDepts))
            claims.Add(new Claim("AccessibleDepartments", accessibleDepts));

        if (!string.IsNullOrEmpty(accessibleFeatures))
            claims.Add(new Claim("AccessibleFeatures", accessibleFeatures));

        var token = new JwtSecurityToken(
            issuer: issuer,
            audience: audience,
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(expiryMinutes),
            signingCredentials: credentials
        );

        var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
        _logger.LogInformation("JWT token generated for user: {UserId}", userId);
        
        return tokenString;
    }

    public bool ValidateToken(string token)
    {
        try
        {
            var secretKey = _configuration["Jwt:SecretKey"] 
                ?? throw new InvalidOperationException("JWT SecretKey not configured");
            
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(secretKey);

            tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = true,
                ValidIssuer = _configuration["Jwt:Issuer"] ?? "HouseOfLawAPI",
                ValidateAudience = true,
                ValidAudience = _configuration["Jwt:Audience"] ?? "HouseOfLawClient",
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero
            }, out SecurityToken validatedToken);

            return true;
        }
        catch
        {
            return false;
        }
    }

    public int? GetUserIdFromToken(string token)
    {
        try
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var jwtToken = tokenHandler.ReadJwtToken(token);
            var userIdClaim = jwtToken.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
            
            if (userIdClaim != null && int.TryParse(userIdClaim.Value, out var userId))
            {
                return userId;
            }
            
            return null;
        }
        catch
        {
            return null;
        }
    }
}

