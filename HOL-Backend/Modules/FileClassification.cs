
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

  [Column("mainfile_id")]
  public long? MainfileId { get; set; }

  [Column("internal_status_id")]
  public int? InternalStatusId { get; set; }

  [Column("civil_status_id")]
  public int? CivilStatusId { get; set; }

  [Column("client_status_id")]
  public int? ClientStatusId { get; set; }

  [Column("claim_status_id")]
  public int? ClaimStatusId { get; set; }

  [Column("payment_status_id")]
  public int? PaymentStatusId { get; set; }

  [Column("file_status_id")]
  public int? FileStatusId { get; set; }

  [Column("action_status_id")]
  public int? ActionStatusId { get; set; }

  [Column("follow_up_status_id")]
  public int? FollowUpStatusId { get; set; }

  [Column("cooperation_status_id")]
  public int? CooperationStatusId { get; set; }

  [Column("contact_status_id")]
  public int? ContactStatusId { get; set; }

  [Column("discount")]
  public decimal? Discount { get; set; }

  [Column("acceptance")]
  public string Acceptance { get; set; }

  [Column("salary_date")]
  public DateTime? SalaryDate { get; set; }

  [Column("income_notes")]
  public string IncomeNotes { get; set; }

  [Column("communication_language_id")]
  public int? CommunicationLanguageId { get; set; }

  [Column("gender_id")]
  public int? GenderId { get; set; }
}
