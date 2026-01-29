
[Table("employee_tasks")]
public class EmployeeTask
{
  [Key]
  [Column("id")]
  public int Id { get; set; }

  [Required]
  [Column("title")]
  public string Title { get; set; } = string.Empty;

  [Column("description")]
  public string Description { get; set; }

  [Column("status")]
  public string Status { get; set; } = "Pending";

  [Column("priority")]
  public string Priority { get; set; } = "Medium";

  [Column("assigned_to_id")]
  public int AssignedToId { get; set; }

  [ForeignKey("AssignedToId")]
  public virtual User AssignedTo { get; set; }

  [Column("created_by_id")]
  public int CreatedById { get; set; }

  [ForeignKey("CreatedById")]
  public virtual User CreatedBy { get; set; }

  [Column("department")]
  public string Department { get; set; }

  [Column("start_date")]
  public DateTime? StartDate { get; set; }

  [Column("due_date")]
  public DateTime DueDate { get; set; }

  [Column("completed_at")]
  public DateTime? CompletedAt { get; set; }

  [Column("created_at")]
  public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

  [Column("supervisor_comment")]
  public string SupervisorComment { get; set; }

  [Column("employee_comment")]
  public string EmployeeComment { get; set; }
}
