
[Table("payments")]
public class Payment
{
  [Key]
  [Column("id")]
  public int Id { get; set; }

  [Column("file_code")]
  public long? FileCode { get; set; }

  [Column("dept_code")]
  public long? DeptCode { get; set; }

  [Column("value")]
  public decimal? Value { get; set; }

  [Column("date_added")]
  public DateTime? DateAdded { get; set; }

  [Column("joural_entry")]
  public string JouralEntry { get; set; }

  [Column("al_entry")]
  public string AlEntry { get; set; }

  [Column("user_added")]
  public int? UserAdded { get; set; }

  [Column("user_updated")]
  public int? UserUpdated { get; set; }

  [Column("callcenter_user")]
  public int? CallcenterUser { get; set; }

  [Column("court_user")]
  public int? CourtUser { get; set; }

  [Column("advisor_user")]
  public int? AdvisorUser { get; set; }

  [Column("lawyer_user")]
  public int? LawyerUser { get; set; }

  [Column("translate_date")]
  public DateTime? TranslateDate { get; set; }

  [Column("translate_back_date")]
  public DateTime? TranslateBackDate { get; set; }

  [Column("client_closed")]
  public bool? ClientClosed { get; set; }

  [Column("journal_closed")]
  public bool? JournalClosed { get; set; }

  [Column("file_status_after")]
  public string FileStatusAfter { get; set; }

  [Column("commission")]
  public int? Commission { get; set; }

  [Column("commission_closed")]
  public bool? CommissionClosed { get; set; }
}
