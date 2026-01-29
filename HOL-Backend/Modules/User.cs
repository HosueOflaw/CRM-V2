
[Table("users")]
public class User
{
  [Key]
  [Column("id")]
  public int Id { get; set; }

  [Column("code")]
  public int? Code { get; set; }

  [Column("username")]
  public string Username { get; set; }

  [Column("full_name")]
  public string FullName { get; set; }

  [Column("email")]
  public string Email { get; set; }

  [Column("role")]
  public string Role { get; set; }

  [Column("department")]
  public string Department { get; set; }

  [Column("reset_token")]
  public string ResetToken { get; set; }

  [Column("reset_token_expiry")]
  public DateTime? ResetTokenExpiry { get; set; }

  [Column("created_at")]
  public DateTime? CreatedAt { get; set; }

  [Column("PasswordHashed")]
  public string PasswordHashed { get; set; }

  [Column("PasswordSalt")]
  public string PasswordSalt { get; set; }

  [Column("access_failed_count")]
  public int AccessFailedCount { get; set; }

  [Column("lockout_end")]
  public DateTime? LockoutEnd { get; set; }

  [Column("security_stamp")]
  public string SecurityStamp { get; set; }

  [Column("supervised_department")]
  public string SupervisedDepartment { get; set; }

  [Column("accessible_departments")]
  public string AccessibleDepartments { get; set; }

  [Column("accessible_features")]
  public string AccessibleFeatures { get; set; }
}
