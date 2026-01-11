using System;

namespace House_of_law_api.DTOs;

public class LoginHistoryDto
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string? UserName { get; set; }
    public string? Role { get; set; }
    public string? Email { get; set; }
    public DateTime LoginTime { get; set; }
    public string? IpAddress { get; set; }
    public string? UserAgent { get; set; }
}
