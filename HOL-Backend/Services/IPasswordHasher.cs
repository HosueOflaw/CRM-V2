namespace House_of_law_api.Services;

/// <summary>
/// Password Hashing Service Interface
/// </summary>
public interface IPasswordHasher
{
    /// <summary>
    /// Hash password - returns hashed password as string (BCrypt format)
    /// </summary>
    string HashPassword(string password);

    /// <summary>
    /// Verify password against hash
    /// </summary>
    bool VerifyPassword(string password, string hash);
}
