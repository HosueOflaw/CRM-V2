using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Modules;

[Table("clients")]
public class Client
{
    [Key]
    [Column("id")]
    public long Id { get; set; }

    [Required]
    [Column("code")]
    public int Code { get; set; }

    [Column("name")]
    public string Name { get; set; }

    [Column("cid")]
    public string Cid { get; set; }

    [Column("address")]
    public string Address { get; set; }

    [Column("nationality")]
    public string Nationality { get; set; }

    [Column("work")]
    public string Work { get; set; }

    [Column("membership")]
    public string Membership { get; set; }

    [Column("company_email")]
    public string CompanyEmail { get; set; }

    [Column("company_fax")]
    public string CompanyFax { get; set; }

    [Column("company_register")]
    public string CompanyRegister { get; set; }

    [Column("partner1")]
    public string Partner1 { get; set; }

    [Column("partner2")]
    public string Partner2 { get; set; }

    [Column("partner3")]
    public string Partner3 { get; set; }

    [Column("register_type")]
    public string RegisterType { get; set; }

    [Column("note")]
    public string Note { get; set; }

    // Contract Data
    [Column("contract_no")]
    public string ContractNo { get; set; }

    [Column("department")]
    public string Department { get; set; }

    [Column("dept_code")]
    public long? DeptCode { get; set; }

    [Column("legal_plaintiff")]
    public string LegalPlaintiff { get; set; }

    [Column("contract_details")]
    public string ContractDetails { get; set; }

    [Column("patch_no")]
    public string PatchNo { get; set; }

    [Column("date_finished")]
    public DateTime? DateFinished { get; set; }

    [Column("dept_amount")]
    public decimal? DeptAmount { get; set; }

    // Responsible Users
    [Column("lawyer_user")]
    public int? LawyerUser { get; set; }

    [Column("court_user")]
    public int? CourtUser { get; set; }

    [Column("md_user")]
    public int? MdUser { get; set; }

    [Column("legal_advisor_user")]
    public int? LegalAdvisorUser { get; set; }

    // Contacts (Flattened)
    [Column("phone1")]
    public string Phone1 { get; set; }
    [Column("phone1_owner")]
    public string Phone1Owner { get; set; }
    [Column("phone2")]
    public string Phone2 { get; set; }
    [Column("phone2_owner")]
    public string Phone2Owner { get; set; }

    // Financial (Flattened)
    [Column("financial_amount")]
    public decimal? FinancialAmount { get; set; }
    [Column("financial_type")]
    public string FinancialType { get; set; }
    [Column("down_payment_percent")]
    public decimal? DownPaymentPercent { get; set; }
    [Column("final_payment_percent")]
    public decimal? FinalPaymentPercent { get; set; }
    [Column("collection_commission")]
    public decimal? CollectionCommission { get; set; }

    // Audit/Tracking
    [Column("user_added")]
    public int? UserAdded { get; set; }

    [Column("date_added")]
    public DateTime? DateAdded { get; set; }

    [Column("user_updated")]
    public int? UserUpdated { get; set; }

    [Column("date_updated")]
    public DateTime? DateUpdated { get; set; }

    [Column("import_job_id")]
    public int? ImportJobId { get; set; }

    [ForeignKey("ImportJobId")]
    public virtual ImportJob ImportJob { get; set; }

    // Navigation Properties
    public virtual ICollection<ClientContact> ClientContacts { get; set; } = new List<ClientContact>();
    public virtual ICollection<ClientFinancialDetail> FinancialDetails { get; set; } = new List<ClientFinancialDetail>();
}
