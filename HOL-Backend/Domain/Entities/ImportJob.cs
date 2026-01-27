using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Domain.Entities;

[Table("import_jobs")]
public class ImportJob
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Required]
    [Column("file_name")]
    public string FileName { get; set; } = string.Empty;

    [Required]
    [Column("job_type")]
    public string JobType { get; set; } = "Mainfile"; // Mainfile, AutoNumber

    [Column("status")]
    public string Status { get; set; } = "Pending"; // Pending, Processing, Completed, Failed

    [Column("progress")]
    public int Progress { get; set; } = 0;

    [Column("total_rows")]
    public int TotalRows { get; set; } = 0;

    [Column("processed_rows")]
    public int ProcessedRows { get; set; } = 0;

    [Column("error_message")]
    public string? ErrorMessage { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [Column("completed_at")]
    public DateTime? CompletedAt { get; set; }

    [Column("created_by_id")]
    public int CreatedById { get; set; }

    [ForeignKey("CreatedById")]
    public virtual User? CreatedBy { get; set; }
}
