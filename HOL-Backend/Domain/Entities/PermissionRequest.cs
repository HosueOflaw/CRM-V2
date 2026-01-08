using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace House_of_law_api.Domain.Entities;

[Table("permission_requests")]
public class PermissionRequest
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [ForeignKey("UserId")]
    public virtual User? User { get; set; }

    [Column("request_type")]
    public string RequestType { get; set; } = string.Empty; // "Department" or "Feature"

    [Column("requested_value")]
    public string RequestedValue { get; set; } = string.Empty; // e.g. "Law" or "billing_view"

    [Column("reason")]
    public string? Reason { get; set; }

    [Column("status")]
    public string Status { get; set; } = "Pending"; // Pending, Approved, Rejected

    [Column("admin_comment")]
    public string? AdminComment { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [Column("processed_at")]
    public DateTime? ProcessedAt { get; set; }
}
