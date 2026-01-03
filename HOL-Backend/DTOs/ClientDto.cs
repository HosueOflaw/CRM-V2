using System.ComponentModel.DataAnnotations;

namespace House_of_law_api.DTOs;

public class ClientDto
{
    public long Id { get; set; }
    public int Code { get; set; }
    public string? Name { get; set; }
    public string? Cid { get; set; }
    public string? Address { get; set; }
    public DateTime? DateAdded { get; set; }
    public string? Nationality { get; set; }
    public string? ContractNo { get; set; }
    public string? LegalPlaintiff { get; set; }
    public string? Sector { get; set; }
    public string? ContractDetails { get; set; }
}

public class CreateClientDto
{
    [Required(ErrorMessage = "كود الموكل مطلوب")]
    public int Code { get; set; }

    [Required(ErrorMessage = "اسم الموكل مطلوب")]
    public string Name { get; set; } = string.Empty;

    public string? Cid { get; set; }
    public string? Address { get; set; }
    public string? Nationality { get; set; }

    // Additional Mainfile fields
    public string? Work { get; set; }
    public string? Membership { get; set; }
    public string? CompanyEmail { get; set; }
    public string? CompanyFax { get; set; }
    public string? CompanyRegister { get; set; }
    public string? Partner1 { get; set; }
    public string? Partner2 { get; set; }
    public string? Partner3 { get; set; }
    public string? RegisterType { get; set; }
    public string? Note { get; set; }

    // Contract Information
    public string? ContractNumber { get; set; }
    public int? ContractYear { get; set; }
    public string? Sector { get; set; }
    public string? LegalClaimant { get; set; }
    public string? ContractDetails { get; set; }

    // FileDetail additional fields
    public string? PatchNo { get; set; }
    public int? CourtEmployee { get; set; }
    public DateTime? DateFinished { get; set; }
    public decimal? DeptAmount { get; set; }
    public int? LawyerUser { get; set; }
    public int? CourtUser { get; set; }
    public int? MdUser { get; set; }
    public int? LegalAdvisorUser { get; set; }

    // Contacts
    public List<ClientContactDto> Contacts { get; set; } = new();

    // Permissions
    public ClientPermissionsDto? Permissions { get; set; }

    // Financial Entries
    public List<ClientFinancialEntryDto> FinancialEntries { get; set; } = new();

    // Department
    public long? DeptCode { get; set; }
    public int? UserAdded { get; set; }
}

public class ClientContactDto
{
    public int Id { get; set; } // Add Id for deletion
    public string Phone { get; set; } = string.Empty;
    public string Relation { get; set; } = string.Empty; // نسبة القرابة
}

public class ClientPermissionsDto
{
    public bool CanViewInvoices { get; set; }
    public bool CanViewAttachments { get; set; }
    public bool CanViewFinancialMatrix { get; set; }
    public bool CanReceiveAutomatedMessages { get; set; }
}

public class ClientFinancialEntryDto
{
    public string Type { get; set; } = string.Empty;
    public Dictionary<string, string> Values { get; set; } = new(); // Changed from object to string for Swagger compatibility
}

public class ClientAttachmentDto
{
    public int Id { get; set; }
    public string? Note { get; set; }
    public DateTime? DateAdded { get; set; }
    public int? UserAdded { get; set; }
    public string? FileName { get; set; }
    public string? FilePath { get; set; }
}

public class CreateClientAttachmentDto
{
    [Required]
    public long FileCode { get; set; }

    public long? DeptCode { get; set; }
    public string? Note { get; set; }
    public string? AttachType { get; set; }
    public int? UserAdded { get; set; }
    
    // File will be uploaded via IFormFile
}
