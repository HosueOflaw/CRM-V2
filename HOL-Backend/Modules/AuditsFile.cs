
[Table("audits_files")]
public class AuditsFile
{
  [Key]
  [Column("id")]
  public int Id { get; set; }

  [Column("file_code")]
  public long? FileCode { get; set; }

  [Column("dept_code")]
  public long? DeptCode { get; set; }

  [Column("action")]
  public string Action { get; set; }

  [Column("description")]
  public string Description { get; set; }

  [Column("previous_state")]
  public string PreviousState { get; set; }

  [Column("current_state")]
  public string CurrentState { get; set; }

  [Column("user_id")]
  public int? UserId { get; set; }

  [Column("action_date")]
  public DateTime ActionDate { get; set; } = DateTime.UtcNow;

  [Column("entity_type")]
  public string EntityType { get; set; }

  [Column("entity_id")]
  public string EntityId { get; set; }

    [Column("user_code")]
    public string UserCode { get; set; }

    [Column("entity_added_date")]
    public DateTime? EntityAddedDate { get; set; }

    [Column("entity_update_date")]
    public DateTime? EntityUpdateDate { get; set; }
}
