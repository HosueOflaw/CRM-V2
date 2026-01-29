
[Table("user_breaks")]
public class UserBreak
{
  [Key]
  [Column("id")]
  public int Id { get; set; }

  [Column("user_id")]
  public int UserId { get; set; }

  [ForeignKey("UserId")]
  public User User { get; set; }

  [Column("break_date")]
  public DateTime BreakDate { get; set; }

  [Column("start_time")]
  public DateTime StartTime { get; set; }

  [Column("end_time")]
  public DateTime? EndTime { get; set; }

  [Column("duration_minutes")]
  public int? DurationMinutes { get; set; }

  [Column("late_minutes")]
  public int? LateMinutes { get; set; }

  [Column("unused_minutes")]
  public int? UnusedMinutes { get; set; }

  [Column("is_completed")]
  public bool IsCompleted { get; set; }
}
