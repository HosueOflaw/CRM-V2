using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Domain.Entities;

[Table("auto_numbers")]
public class AutoNumber
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("file_code")]
    public long? FileCode { get; set; }

    [Column("parent_auto_id")]
    public int? ParentAutoId { get; set; }

    [Column("auto_number")]
    public string? AutoNumberValue { get; set; }

    [Column("type")]
    public string? Type { get; set; }

    [Column("case_ref")]
    public string? CaseRef { get; set; }

    [Column("note")]
    public string? Note { get; set; }

    [Column("claimant")]
    public string? Claimant { get; set; }

    [Column("user_added")]
    public int? UserAdded { get; set; }

    [Column("date_added")]
    public DateTime? DateAdded { get; set; }
}
