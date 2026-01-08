using System;

namespace House_of_law_api.DTOs;

public class PermissionRequestDto
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string? FullName { get; set; }
    public string? Department { get; set; }
    public string RequestType { get; set; } = string.Empty;
    public string RequestedValue { get; set; } = string.Empty;
    public string? Reason { get; set; }
    public string Status { get; set; } = "Pending";
    public string? AdminComment { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? ProcessedAt { get; set; }
}

public class CreatePermissionRequestDto
{
    public string RequestType { get; set; } = string.Empty; // "Department" or "Feature"
    public string RequestedValue { get; set; } = string.Empty;
    public string? Reason { get; set; }
}

public class ProcessPermissionRequestDto
{
    public int RequestId { get; set; }
    public bool Approved { get; set; }
    public string? AdminComment { get; set; }
}

public class DelegatePermissionDto
{
    public int EmployeeId { get; set; }
    public string? AccessibleDepartments { get; set; } // Comma separated
    public string? AccessibleFeatures { get; set; } // Comma separated
}
