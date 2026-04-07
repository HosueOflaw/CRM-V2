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

  // Status Names (Joins)
  public string InternalStatus { get; set; }
  public string CivilStatus { get; set; }
  public string CooperationStatus { get; set; }
  public string ContactStatus { get; set; }

  public string ClientStatus { get; set; }
  public string ClaimStatus { get; set; }
  public string PaymentStatus { get; set; }
  public string FileStatus { get; set; }
  public string ActionStatus { get; set; }
  public string FollowUpStatus { get; set; }
  public decimal? Discount { get; set; }
  public string Acceptance { get; set; }
  public DateTime? SalaryDate { get; set; }
  public string IncomeNotes { get; set; }
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
  public string LawyerUserName { get; set; }
  public int? CourtUser { get; set; }
  public string CourtUserName { get; set; }
  public int? MdUser { get; set; }
  public string MdUserName { get; set; }
  public int? LegalAdvisorUser { get; set; }
  public string LegalAdvisorUserName { get; set; }
  public int? ImportJobId { get; set; }
  public string Note1 { get; set; }
  public string Note2 { get; set; }
  public string Note3 { get; set; }
  public string Note4 { get; set; }
  public string Note5 { get; set; }
  public string Note6 { get; set; }
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

// DTO لعرض الدفعات
public class PaymentDisplayDto
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public decimal? Value { get; set; }
    public DateTime? DateAdded { get; set; }
    public string PaymentMethod { get; set; }
    public string UserAddedName { get; set; }
    public string SalesAgent { get; set; }
    public string JouralEntry { get; set; }
    public string FileStatusAfter { get; set; }
    public long? DeptCode { get; set; }
}

// DTO للمرفقات
public class AttachmentDisplayDto
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public string AttachCode { get; set; }
    public string AttachType { get; set; }
    public string Value { get; set; }
    public string Notes { get; set; }
    public DateTime? DateAdded { get; set; }
}

// DTO للمبالغ الإضافية
public class AdditionalAmountDto
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public decimal? Value { get; set; }
    public string AmountType { get; set; }
    public DateTime? DateAdded { get; set; }
}

// DTO لسجل التدقيق
public class AuditsFileDto
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public string Action { get; set; }
    public string Description { get; set; }
    public string PreviousState { get; set; }
    public string CurrentState { get; set; }
    public string UserName { get; set; }
    public DateTime ActionDate { get; set; }
}

// DTO لجهات الاتصال
public class ClientContactDisplayDto
{
    public int Id { get; set; }
    public string Phone { get; set; }
    public string Relation { get; set; }
    public string Source { get; set; }
    public string Status { get; set; }
}

public class ClientContactCreateDto
{
    public string Phone { get; set; }
    public string Relation { get; set; }
    public string Source { get; set; }
    public string Status { get; set; }
}

// DTO لتصنيفات الملف
public class FileClassificationDto
{
    public int Id { get; set; }
    public string Code { get; set; } = string.Empty;
    public long? FileCode { get; set; }
    public long? DeptCode { get; set; }
    public string Classification { get; set; } = string.Empty;
    public string Department { get; set; } = string.Empty;
    public DateTime? DateAdded { get; set; }
}

// DTO لحالات الملف
public class FileStatusDto
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public int? DeptCode { get; set; }
    public string Status { get; set; } = string.Empty;
    public string UserName { get; set; }
    public DateTime? DateAdded { get; set; }
}

public class CallcenterStatementDto
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public long? DeptCode { get; set; }
    public DateTime? DateAdded { get; set; }
    public string Notes { get; set; } = string.Empty;
    public string ContactMethod { get; set; } = string.Empty;
    public string ConnectedStatus { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string PhoneOwner { get; set; } = string.Empty;
    public string NextAction { get; set; } = string.Empty;
    public DateTime? NextDate { get; set; }
    public decimal? PromiseAmount { get; set; }
    public string UserAddedName { get; set; } = string.Empty;
}

public class DashboardStatsDto
{
    public int TotalClients { get; set; }
    public int TotalStatements { get; set; }
    public int TodayStatements { get; set; }
    public int MonthStatements { get; set; }
}
