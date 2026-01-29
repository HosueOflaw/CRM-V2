
[Table("file_statuses")]
public class FileStatus
{
  [Key]
  [Column("id")]
  public int Id { get; set; }

  [Column("file_code")]
  public long? FileCode { get; set; }

  [Column("dept_code")]
  public int? DeptCode { get; set; }

  [Column("status")]
  public string Status { get; set; }

  [Column("date_added")]
  public DateTime? DateAdded { get; set; }
}
