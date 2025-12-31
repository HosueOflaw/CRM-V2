using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Domain.Entities;

[Table("users")]
public class User
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("code")]
    public int? Code { get; set; }

    [Column("username")]
    public string? Username { get; set; }

    [Column("full_name")]
    public string? FullName { get; set; }

    [Column("email")]
    public string? Email { get; set; }

    [Column("role")]
    public string? Role { get; set; }

    [Column("created_at")]
    public DateTime? CreatedAt { get; set; }

    [Column("PasswordHashed")]
    public string? PasswordHashed { get; set; }

    [Column("PasswordSalt")]
    public string? PasswordSalt { get; set; }
}
