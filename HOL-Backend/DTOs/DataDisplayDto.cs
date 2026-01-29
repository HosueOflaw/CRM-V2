namespace House_of_law_api.DTOs;

// DTO لعرض Mainfile بكل التفاصيل
public class MainfileDto
{
  public long Id { get; set; }
  public int Code { get; set; }
  public string Name { get; set; }
  public string Cid { get; set; }
  public string Address { get; set; }
  public DateTime? DateAdded { get; set; }
  public string Nationality { get; set; }
  public bool? Archive { get; set; }
  public string Note { get; set; }
  public string Work { get; set; }
  public string Membership { get; set; }
  public string CompanyEmail { get; set; }
  public string CompanyFax { get; set; }
  public string CompanyRegister { get; set; }
  public string Partner1 { get; set; }
  public string Partner2 { get; set; }
  public string Partner3 { get; set; }
  public string RegisterType { get; set; }
  public int? AddedBy { get; set; }
  public int? ImportJobId { get; set; }
}

// DTO لعرض FileDetail بكل التفاصيل
public class FileDetailDto
{
  public int Id { get; set; }
  public long? FileCode { get; set; }
  public long? DeptCode { get; set; }
  public string Reason { get; set; }
  public string PatchNo { get; set; }
  public int? Client { get; set; }
  public DateTime? DateAdded { get; set; }
  public DateTime? DateFinished { get; set; }
  public string ContractNo { get; set; }
  public decimal? DeptAmount { get; set; }
  public string LegalPlaintiff { get; set; }
  public int? LawyerUser { get; set; }
  public int? CourtUser { get; set; }
  public int? MdUser { get; set; }
  public int? LegalAdvisorUser { get; set; }
  public int? ImportJobId { get; set; }
}

// DTO لعرض AutoNumber بكل التفاصيل
public class AutoNumberDto
{
  public int Id { get; set; }
  public long? FileCode { get; set; }
  public int? ParentAutoId { get; set; }
  public string AutoNumberValue { get; set; }
  public string Type { get; set; }
  public string CaseRef { get; set; }
  public string Note { get; set; }
  public string Claimant { get; set; }
  public int? UserAdded { get; set; }
  public DateTime? DateAdded { get; set; }
  public int? DeptCode { get; set; }
  public int? ImportJobId { get; set; }
}
