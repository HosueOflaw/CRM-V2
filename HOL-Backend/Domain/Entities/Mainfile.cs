using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Domain.Entities;

[Table("mainfiles")]
public class Mainfile
{
    [Key]
    [Column("id")]
    public long Id { get; set; }

    [Required]
    [Column("code")]
    public int Code { get; set; }

    [Column("name")]
    public string? Name { get; set; }

    [Column("cid")]
    public string? Cid { get; set; }

    [Column("address")]
    public string? Address { get; set; }

    [Column("date_added")]
    public DateTime? DateAdded { get; set; }

    [Column("nationality")]
    public string? Nationality { get; set; }

    [Column("archive")]
    public bool? Archive { get; set; }

    [Column("note_")]
    public string? Note { get; set; }

    [Column("work")]
    public string? Work { get; set; }

    [Column("membership")]
    public string? Membership { get; set; }

    [Column("company_email")]
    public string? CompanyEmail { get; set; }

    [Column("company_fax")]
    public string? CompanyFax { get; set; }

    [Column("company_register")]
    public string? CompanyRegister { get; set; }

    [Column("partner1")]
    public string? Partner1 { get; set; }

    [Column("partner2")]
    public string? Partner2 { get; set; }

    [Column("partner3")]
    public string? Partner3 { get; set; }

    [Column("register_type")]
    public string? RegisterType { get; set; }

    [Column("added_by")]
    public int? AddedBy { get; set; }

    [Column("import_job_id")]
    public int? ImportJobId { get; set; }

    [ForeignKey("ImportJobId")]
    public virtual ImportJob? ImportJob { get; set; }
}
