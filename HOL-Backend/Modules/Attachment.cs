
namespace House_of_law_api.Modules;

[Table("attachments", Schema = "dbo")]
public class Attachment
{
  [Key]
  [Column("id")]
  public int Id { get; set; }

  [Column("file_code")]
  public long? FileCode { get; set; }

  [Column("dept_code")]
  public long? DeptCode { get; set; }

  [Column("attach_code")]
  public string AttachCode { get; set; }

  [Column("attach_type")]
  public string AttachType { get; set; }

  [Column("auto_number_code")]
  public string AutoNumberCode { get; set; }

  [Column("value")]
  public string Value { get; set; }

  [Column("notes")]
  public string Notes { get; set; }

  [Column("user_added")]
  public int? UserAdded { get; set; }

  [Column("user_updated")]
  public int? UserUpdated { get; set; }

  [Column("date_added")]
  public DateTime? DateAdded { get; set; }

  [Column("date_updated")]
  public DateTime? DateUpdated { get; set; }

  [Column("enabled")]
  public bool? Enabled { get; set; }

  [Column("import_job_id")]
  public int? ImportJobId { get; set; }
}
