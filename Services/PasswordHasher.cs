using BCrypt.Net;

namespace House_of_law_api.Services;

/// <summary>
/// Password Hashing Service Implementation using BCrypt
/// </summary>
public class PasswordHasher : IPasswordHasher
{
    private const int WorkFactor = 12; // BCrypt work factor (higher = more secure but slower)

    /// <summary>
    /// Hash password - returns BCrypt hash as string
    /// BCrypt format: $2a$workfactor$salt+hash
    /// </summary>
    public string HashPassword(string password)
    {
        if (string.IsNullOrWhiteSpace(password))
            throw new ArgumentException("Password cannot be null or empty", nameof(password));

        // BCrypt automatically generates and includes salt in the hash
        // Returns string in format: $2a$12$salt+hash
        return BCrypt.Net.BCrypt.HashPassword(password, WorkFactor);
    }

    /// <summary>
    /// Verify password against BCrypt hash
    /// </summary>
    public bool VerifyPassword(string password, string hash)
    {
        if (string.IsNullOrWhiteSpace(password) || string.IsNullOrWhiteSpace(hash))
            return false;

        try
        {
            // BCrypt.Verify automatically extracts salt from the hash
            return BCrypt.Net.BCrypt.Verify(password, hash);
        }
        catch
        {
            return false;
        }
    }
}
