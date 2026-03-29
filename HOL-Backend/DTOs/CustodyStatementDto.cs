#nullable enable
namespace House_of_law_api.DTOs;

public class CustodyStatementDto
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public long? DeptCode { get; set; }
    public string CodeAttach { get; set; } = string.Empty;
    public int? CodeExpense { get; set; }
    public string StatementNo { get; set; } = string.Empty;
    public decimal? Amount { get; set; }
    public long? CodeAutoNo { get; set; }
    public string CodeStatus { get; set; } = string.Empty;
    public bool SendToACC { get; set; }
    public bool SendToCompany { get; set; }
    public bool ReceiveSec { get; set; }
    public bool ReceiveAcc { get; set; }
    public DateTime? DateAdded { get; set; }
    public int? UserAdded { get; set; }
    public string ExpenseName { get; set; } = string.Empty;
    public string ClientName { get; set; } = string.Empty;
    public string Notes { get; set; } = string.Empty;
    public bool CompanyOrOffice { get; set; }
    public long? CompanyCode { get; set; }
    public string CivilId { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string Court { get; set; } = string.Empty;
    public string ContractNo { get; set; } = string.Empty;
    public string PersonName { get; set; } = string.Empty;
    public List<AttachmentDto> Attachments { get; set; } = new();
}

public class AttachmentDto
{
    public int Id { get; set; }
    public string AttachCode { get; set; } = string.Empty;
    public string AttachType { get; set; } = string.Empty;
    public byte[]? FileContent { get; set; }
}

public class CreateCustodyStatementDto
{
    public long? FileCode { get; set; }
    public long? DeptCode { get; set; }
    public string CodeAttach { get; set; } = string.Empty;
    public int? CodeExpense { get; set; }
    public string StatementNo { get; set; } = string.Empty;
    public decimal? Amount { get; set; }
    public long? CodeAutoNo { get; set; }
    public string CodeStatus { get; set; } = string.Empty;
    public string ClientName { get; set; } = string.Empty;
    public string Notes { get; set; } = string.Empty;
    public bool SendToACC { get; set; }
    public bool CompanyOrOffice { get; set; }
    public long? CompanyCode { get; set; }
    public string CivilId { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string Court { get; set; } = string.Empty;
    public string ContractNo { get; set; } = string.Empty;
    public string PersonName { get; set; } = string.Empty;
    public DateTime? DateAdded { get; set; }
}

public class BulkUpdateDto
{
    public List<int> Ids { get; set; } = new();
    public bool ToCompany { get; set; }
    public bool ToOffice { get; set; }
}
