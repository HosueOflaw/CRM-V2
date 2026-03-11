using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Modules;

[Table("client_financial_details")]
public class ClientFinancialDetail
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Required]
    [Column("client_id")]
    public long ClientId { get; set; }

    [ForeignKey("ClientId")]
    public virtual Client Client { get; set; }

    [Required]
    [Column("category")]
    public string Category { get; set; } // اتعاب، ودي، تنفيذ، إلخ

    [Column("down_payment_percent")]
    public decimal? DownPaymentPercent { get; set; }

    [Column("final_payment_percent")]
    public decimal? FinalPaymentPercent { get; set; }

    [Column("collection_commission")]
    public decimal? CollectionCommission { get; set; }
}
