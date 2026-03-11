namespace House_of_law_api.DTOs;

public class CustodyStatementDto
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public long? DeptCode { get; set; }
    public string CodeAttach { get; set; }
    public int? CodeExpense { get; set; }
    public string StatementNo { get; set; }
    public decimal? Amount { get; set; }
    public long? CodeAutoNo { get; set; }
    public string CodeStatus { get; set; }
    public bool SendToACC { get; set; }
    public bool SendToCompany { get; set; }
    public bool ReceiveSec { get; set; }
    public bool ReceiveAcc { get; set; }
    public DateTime? DateAdded { get; set; }
    public int? UserAdded { get; set; }
    public string ExpenseName { get; set; }
    public string ClientName { get; set; }
    public string Notes { get; set; }
    public bool CompanyOrOffice { get; set; }
    public long? CompanyCode { get; set; }
    public string CivilId { get; set; }
    public string PhoneNumber { get; set; }
    public string Court { get; set; }
    public string ContractNo { get; set; }
    public string PersonName { get; set; }
    public List<AttachmentDto> Attachments { get; set; } = new();
}

public class AttachmentDto
{
    public int Id { get; set; }
    public string AttachCode { get; set; }
    public string AttachType { get; set; }
    public byte[]? FileContent { get; set; }
}

public class CreateCustodyStatementDto
{
    public long? FileCode { get; set; }
    public long? DeptCode { get; set; }
    public string CodeAttach { get; set; }
    public int? CodeExpense { get; set; }
    public string StatementNo { get; set; }
    public decimal? Amount { get; set; }
    public long? CodeAutoNo { get; set; }
    public string CodeStatus { get; set; }
    public string ClientName { get; set; }
    public string Notes { get; set; }
    public bool SendToACC { get; set; }
    public bool CompanyOrOffice { get; set; }
    public long? CompanyCode { get; set; }
    public string CivilId { get; set; }
    public string PhoneNumber { get; set; }
    public string Court { get; set; }
    public string ContractNo { get; set; }
    public string PersonName { get; set; }
    public DateTime? DateAdded { get; set; }
}

public class BulkUpdateDto
{
    public List<int> Ids { get; set; }
    public bool ToCompany { get; set; }
    public bool ToOffice { get; set; }
}
