
[Table("file_classifications")]
public class FileClassification
{
  [Key]
  [Column("id")]
  public int Id { get; set; }

  [Column("code")]
  public string Code { get; set; }

  [Column("file_code")]
  public long? FileCode { get; set; }

  [Column("dept_code")]
  public long? DeptCode { get; set; }

  [Column("classification")]
  public string Classification { get; set; }

  [Column("department")]
  public string Department { get; set; }

  [Column("user_added")]
  public int? UserAdded { get; set; }

  [Column("date_added")]
  public DateTime? DateAdded { get; set; }

  [Column("import_job_id")]
  public int? ImportJobId { get; set; }
}
