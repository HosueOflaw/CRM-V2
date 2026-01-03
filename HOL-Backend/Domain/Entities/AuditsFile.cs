using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Domain.Entities;

[Table("audits_files")]
public class AuditsFile
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("file_code")]
    public long? FileCode { get; set; }

    [Column("dept_code")]
    public long? DeptCode { get; set; }

    [Column("audit")]
    public string? Audit { get; set; }

    [Column("user_added")]
    public int? UserAdded { get; set; }

    [Column("user_updated")]
    public int? UserUpdated { get; set; }
}
