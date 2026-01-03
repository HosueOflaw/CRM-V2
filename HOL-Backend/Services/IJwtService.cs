namespace House_of_law_api.Services;

public interface IJwtService
{
    string GenerateToken(int userId, string username, string? role);
    bool ValidateToken(string token);
    int? GetUserIdFromToken(string token);
    
    // Optional: JWE (Encrypted) Token methods
    // string GenerateEncryptedToken(int userId, string username, string? role);
    // bool ValidateEncryptedToken(string token);
}
