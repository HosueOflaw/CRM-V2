
[Table("mails")]
public class Mail
{
  [Key]
  [Column("id")]
  public int Id { get; set; }

  [Column("file_code")]
  public long? FileCode { get; set; }

  [Column("dept_code")]
  public long? DeptCode { get; set; }

  [Column("subject")]
  public string Subject { get; set; }

  [Column("body")]
  public string Body { get; set; }

  [Column("date_added")]
  public DateTime? DateAdded { get; set; }

  [Column("date_updated")]
  public DateTime? DateUpdated { get; set; }

  [Column("user_added")]
  public int? UserAdded { get; set; }

  [Column("user_updated")]
  public int? UserUpdated { get; set; }

  [Column("import_job_id")]
  public int? ImportJobId { get; set; }
}
