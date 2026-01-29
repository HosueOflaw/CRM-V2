namespace House_of_law_api.DTOs;

public class LoginDto
{
    public string Username { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}

public class LoginResponseDto
{
    public int UserId { get; set; }
    public string Username { get; set; }
    public string FullName { get; set; }
    public string Email { get; set; }
    public string Role { get; set; }
    public string Department { get; set; }
    public string SupervisedDepartment { get; set; }
    public string AccessibleDepartments { get; set; }
    public string AccessibleFeatures { get; set; }
    public bool Success { get; set; }
    public string Message { get; set; }
    public string Token { get; set; }
    public int ExpiresIn { get; set; } = 3600;
}

public class ChangePasswordDto
{
    public int UserId { get; set; }
    public string OldPassword { get; set; } = string.Empty;
    public string NewPassword { get; set; } = string.Empty;
}

public class AdminResetPasswordDto
{
    public int UserId { get; set; }
    public string NewPassword { get; set; } = string.Empty;
}

public class ForgotPasswordDto
{
    public string Email { get; set; } = string.Empty;
}

public class ResetPasswordDto
{
    public string Email { get; set; } = string.Empty;
    public string Token { get; set; } = string.Empty;
    public string NewPassword { get; set; } = string.Empty;
}
