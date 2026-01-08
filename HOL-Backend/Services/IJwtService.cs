namespace House_of_law_api.Services;

public interface IJwtService
{
    string GenerateToken(int userId, string username, string? role, string? securityStamp = null, string? supervisedDept = null, string? accessibleDepts = null, string? accessibleFeatures = null);
    bool ValidateToken(string token);
    int? GetUserIdFromToken(string token);
    
    // Optional: JWE (Encrypted) Token methods
    // string GenerateEncryptedToken(int userId, string username, string? role);
    // bool ValidateEncryptedToken(string token);
}
