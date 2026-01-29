using System;

namespace House_of_law_api.DTOs;

public class BreakStatusDto
{
    public bool IsInBreak { get; set; }
    public DateTime? StartTime { get; set; }
    public int? CurrentDurationMinutes { get; set; }
}

public class UserBreakDto
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string FullName { get; set; }
    public string Department { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime? EndTime { get; set; }
    public int? DurationMinutes { get; set; }
    public int? LateMinutes { get; set; }
    public int? UnusedMinutes { get; set; }
    public bool IsCompleted { get; set; }
}
