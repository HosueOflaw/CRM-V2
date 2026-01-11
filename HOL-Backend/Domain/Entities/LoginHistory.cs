using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Domain.Entities;

[Table("login_histories")]
public class LoginHistory
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int UserId { get; set; }

    [ForeignKey("UserId")]
    public User? User { get; set; }

    public DateTime LoginTime { get; set; }

    public string? IpAddress { get; set; }

    public string? UserAgent { get; set; }

    public string? Role { get; set; } // admin, supervisor, employee

    public string? Email { get; set; }
}
