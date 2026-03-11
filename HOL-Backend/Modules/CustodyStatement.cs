using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MongoDB.Bson.Serialization.Attributes;

namespace House_of_law_api.Modules;

[Table("custody_statements")]
[BsonIgnoreExtraElements]
public class CustodyStatement
{
    [Key]
    [Column("id")]
    [BsonId]
    public int Id { get; set; }

    [Column("file_code")]
    public long? FileCode { get; set; }

    [Column("dept_code")]
    public long? DeptCode { get; set; }

    [Column("code_attach")]
    public string CodeAttach { get; set; }

    [Column("code_expense")]
    public int? CodeExpense { get; set; }

    [Column("statement_no")]
    public string StatementNo { get; set; }

    [Column("amount")]
    public decimal? Amount { get; set; }

    [Column("code_auto_no")]
    public long? CodeAutoNo { get; set; }

    [Column("code_status")]
    public string CodeStatus { get; set; }

    [Column("send_to_acc")]
    public bool SendToACC { get; set; }

    [Column("send_to_company")]
    public bool SendToCompany { get; set; }

    [Column("receive_sec")]
    public bool ReceiveSec { get; set; }

    [Column("receive_acc")]
    public bool ReceiveAcc { get; set; }

    [Column("date_added")]
    public DateTime? DateAdded { get; set; }

    [Column("user_added")]
    public int? UserAdded { get; set; }

    [Column("user_sec")]
    public int? UserSec { get; set; }

    [Column("user_acc")]
    public int? UserAcc { get; set; }

    [Column("client_name")]
    public string ClientName { get; set; }

    [Column("notes")]
    public string Notes { get; set; }

    [Column("company_or_office")]
    public bool CompanyOrOffice { get; set; }

    [Column("company_code")]
    public long? CompanyCode { get; set; }

    [Column("civil_id")]
    public string CivilId { get; set; }

    [Column("phone_number")]
    public string PhoneNumber { get; set; }

    [Column("court")]
    public string Court { get; set; }

    [Column("contract_no")]
    public string ContractNo { get; set; }

    [Column("person_name")]
    public string PersonName { get; set; }

    [Column("enabled")]
    public bool Enabled { get; set; } = true;
}
