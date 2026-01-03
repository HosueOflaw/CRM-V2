using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Domain.Entities;

[Table("additional_amounts")]
public class AdditionalAmount
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("file_code")]
    public long? FileCode { get; set; }

    [Column("dept_code")]
    public long? DeptCode { get; set; }

    [Column("value")]
    public decimal? Value { get; set; }

    [Column("amount_type")]
    public string? AmountType { get; set; }

    [Column("user_added")]
    public int? UserAdded { get; set; }

    [Column("date_added")]
    public DateTime? DateAdded { get; set; }

    [Column("user_updated")]
    public int? UserUpdated { get; set; }

    [Column("date_updated")]
    public DateTime? DateUpdated { get; set; }

    [Column("enabled")]
    public bool? Enabled { get; set; }
}
