using System.ComponentModel.DataAnnotations;

namespace House_of_law_api.DTOs;

public class UserDto
{
    public int Id { get; set; }
    public int? Code { get; set; }
    public string Username { get; set; }
    public string FullName { get; set; }
    public string Email { get; set; }
    public string Role { get; set; }
    public string Department { get; set; }
    public string SupervisedDepartment { get; set; }
    public string AccessibleDepartments { get; set; }
    public string AccessibleFeatures { get; set; }
    public DateTime? CreatedAt { get; set; }
}

public class CreateUserDto
{
    public int? Code { get; set; }
    [Required(ErrorMessage = "Username is required")]
    public string Username { get; set; }
    public string FullName { get; set; }
    public string Email { get; set; }
    public string Role { get; set; }
    public string Department { get; set; }
    public string SupervisedDepartment { get; set; }
    public string AccessibleDepartments { get; set; }
    public string AccessibleFeatures { get; set; }
    [Required(ErrorMessage = "Password is required")]
    [MinLength(6, ErrorMessage = "Password must be at least 6 characters")]
    public string Password { get; set; }
}

public class UpdateUserDto
{
    public int? Code { get; set; }
    public string Username { get; set; }
    public string FullName { get; set; }
    public string  Email { get; set; }
    public string Role { get; set; }
    public string Department { get; set; }
    public string  SupervisedDepartment { get; set; }
    public string AccessibleDepartments { get; set; }
    public string AccessibleFeatures { get; set; }
    public string Password { get; set; }
}
