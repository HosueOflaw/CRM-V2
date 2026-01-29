
[Table("file_details")]
public class FileDetail
{
  [Key]
  [Column("id")]
  public int Id { get; set; }

  [Column("file_code")]
  public long? FileCode { get; set; }

  [Column("dept_code")]
  public long? DeptCode { get; set; }

  [Column("reason")]
  public string Reason { get; set; }

  [Column("patch_no")]
  public string PatchNo { get; set; }


  [Column("client")]
  public int? Client { get; set; }

  [Column("date_added")]
  public DateTime? DateAdded { get; set; }

  [Column("date_finished")]
  public DateTime? DateFinished { get; set; }

  [Column("contract_no")]
  public string ContractNo { get; set; }

  [Column("dept_amount")]
  public decimal? DeptAmount { get; set; }

  [Column("legal_plaintiff")]
  public string LegalPlaintiff { get; set; }

  [Column("lawyer_user")]
  public int? LawyerUser { get; set; }

  [Column("court_user")]
  public int? CourtUser { get; set; }

  [Column("md_user")]
  public int? MdUser { get; set; }

  [Column("legal_advisor_user")]
  public int? LegalAdvisorUser { get; set; }

  [Column("import_job_id")]
  public int? ImportJobId { get; set; }

  [ForeignKey("ImportJobId")]
  public virtual ImportJob ImportJob { get; set; }
}
