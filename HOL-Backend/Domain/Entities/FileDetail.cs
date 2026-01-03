using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Domain.Entities;

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
    public string? Reason { get; set; }

    [Column("patch_no")]
    public string? PatchNo { get; set; }

    [Column("court_employee")]
    public int? CourtEmployee { get; set; }

    [Column("client")]
    public string? Client { get; set; }

    [Column("date_added")]
    public DateTime? DateAdded { get; set; }

    [Column("date_finished")]
    public DateTime? DateFinished { get; set; }

    [Column("contract_no")]
    public string? ContractNo { get; set; }

    [Column("dept_amount")]
    public decimal? DeptAmount { get; set; }

    [Column("legal_plaintiff")]
    public string? LegalPlaintiff { get; set; }

    [Column("lawyer_user")]
    public int? LawyerUser { get; set; }

    [Column("court_user")]
    public int? CourtUser { get; set; }

    [Column("md_user")]
    public int? MdUser { get; set; }

    [Column("legal_advisor_user")]
    public int? LegalAdvisorUser { get; set; }

    // Permissions columns
    [Column("can_view_invoices")]
    public bool? CanViewInvoices { get; set; }

    [Column("can_view_attachments")]
    public bool? CanViewAttachments { get; set; }

    [Column("can_view_financial_matrix")]
    public bool? CanViewFinancialMatrix { get; set; }

    [Column("can_receive_automated_messages")]
    public bool? CanReceiveAutomatedMessages { get; set; }
}
