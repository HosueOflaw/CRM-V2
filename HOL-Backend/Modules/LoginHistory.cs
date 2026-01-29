
[Table("login_histories")]
public class LoginHistory
{
  [Key]
  [Column("id")]
  public int Id { get; set; }

  [Required]
  [Column("user_id")]
  public int UserId { get; set; }

  [ForeignKey("UserId")]
  public User User { get; set; }

  [Column("login_time")]
  public DateTime LoginTime { get; set; }

  [Column("ip_address")]
  public string IpAddress { get; set; }

  [Column("user_agent")]
  public string UserAgent { get; set; }

  [Column("role")]
  public string Role { get; set; } // admin, supervisor, employee

  [Column("email")]
  public string Email { get; set; }
}
