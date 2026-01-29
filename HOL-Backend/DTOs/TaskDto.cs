using System;
using System.ComponentModel.DataAnnotations;

namespace House_of_law_api.DTOs;

public class EmployeeTaskDto
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; }
    public string Status { get; set; } = string.Empty;
    public string Priority { get; set; } = string.Empty;
    
    public int AssignedToId { get; set; }
    public string AssignedToName { get; set; }
    
    public int CreatedById { get; set; }
    public string CreatedByName { get; set; }
    
    public string Department { get; set; }
    public DateTime DueDate { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? CompletedAt { get; set; }
    public DateTime? StartDate { get; set; }
    
    public string SupervisorComment { get; set; }
    public string EmployeeComment { get; set; }
    public bool IsOverdue { get; set; }
}

public class CreateTaskDto
{
    [Required(ErrorMessage = "Title is required")]
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; }
    
    [Required]
    public int AssignedToId { get; set; }
    
    [Required]
    public DateTime DueDate { get; set; }
    
    public string Priority { get; set; } = "Medium";
}

public class UpdateTaskDto
{
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime? DueDate { get; set; }
    public string Priority { get; set; }
    public string SupervisorComment { get; set; }
}

public class UpdateTaskStatusDto
{
    [Required]
    public string Status { get; set; } = string.Empty; // InProgress, Completed, Pending
    public string EmployeeComment { get; set; }
    public string SupervisorComment { get; set; }
}
