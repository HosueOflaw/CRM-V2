using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Domain.Entities;

[Table("callcenter_statements")]
public class CallcenterStatement
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("file_code")]
    public long? FileCode { get; set; }

    [Column("dept_code")]
    public long? DeptCode { get; set; }

    [Column("date_added")]
    public DateTime? DateAdded { get; set; }

    [Column("notes")]
    public string? Notes { get; set; }

    [Column("contact_method")]
    public string? ContactMethod { get; set; }

    [Column("connected_status")]
    public string? ConnectedStatus { get; set; }

    [Column("phone_number")]
    public string? PhoneNumber { get; set; }

    [Column("next_action")]
    public string? NextAction { get; set; }

    [Column("next_date")]
    public DateTime? NextDate { get; set; }

    [Column("promise_amount")]
    public decimal? PromiseAmount { get; set; }

    [Column("phone_owner")]
    public string? PhoneOwner { get; set; }

    [Column("user_added")]
    public int? UserAdded { get; set; }
}
