

namespace House_of_law_api.Services;

public class TaskService : ITaskService
{
  private readonly ApplicationDbContext _context;
  private readonly INotificationService _notificationService; // Assuming we want to notify users
  private readonly ILogger<TaskService> _logger;

  public TaskService(
      ApplicationDbContext context,
      INotificationService notificationService,
      ILogger<TaskService> logger)
  {
    _context = context;
    _notificationService = notificationService;
    _logger = logger;
  }

  public async Task<object> CreateTaskAsync(int supervisorId, CreateTaskDto dto)
  {
    var supervisor = await _context.Users.FindAsync(supervisorId);
    var employee = await _context.Users.FindAsync(dto.AssignedToId);

    if (supervisor == null || employee == null)
      throw new ArgumentException("Supervisor or Employee not found");

    // Permission Check: Supervisor can only assign to their dept (unless Admin)
    if (supervisor.Role != "admin" && supervisor.SupervisedDepartment != employee.Department)
    {
      throw new UnauthorizedAccessException("You can only assign tasks to employees in your supervised department.");
    }

    var task = new EmployeeTask
    {
      Title = dto.Title,
      Description = dto.Description,
      AssignedToId = dto.AssignedToId,
      CreatedById = supervisorId,
      Department = employee.Department, // Task belongs to employee's dept
      Priority = dto.Priority ?? "Medium",
      Status = "Pending",
      DueDate = dto.DueDate,
      CreatedAt = DateTime.UtcNow
    };

    _context.EmployeeTasks.Add(task);
    await _context.SaveChangesAsync();

    // Notify Employee/Supervisor via SignalR
    var notificationData = new
    {
      taskId = task.Id,
      title = task.Title,
      priority = task.Priority,
      assignedBy = supervisor.FullName,
      dueDate = task.DueDate
    };

    await _notificationService.BroadcastToUserAsync(dto.AssignedToId.ToString(), "new_task_assigned", notificationData);

    // Also notify admins
    await _notificationService.BroadcastToChannelAsync("admins", "new_task_assigned", notificationData);

    return await MapToDto(task);
  }

  public async Task<IEnumerable<EmployeeTaskDto>> GetTasksAsync(int userId, string status = null, string priority = null, DateTime? date = null, DateTime? startDate = null, DateTime? endDate = null)
  {
    var user = await _context.Users.FindAsync(userId);
    if (user == null) return new List<EmployeeTaskDto>();

    var query = _context.EmployeeTasks
        .Include(t => t.AssignedTo)
        .Include(t => t.CreatedBy)
        .AsQueryable();

    // Filter based on Role
    if (user.Role == "admin")
    {
      // Admin sees all
    }
    else if (user.Role == "supervisor")
    {
      // Supervisor sees tasks in their supervised department OR tasks created by them
      query = query.Where(t => t.Department == user.SupervisedDepartment || t.CreatedById == userId);
    }
    else // Employee
    {
      // Employee sees only their own tasks
      query = query.Where(t => t.AssignedToId == userId);
    }

    // Apply filters
    if (!string.IsNullOrEmpty(status))
      query = query.Where(t => t.Status == status);

    if (!string.IsNullOrEmpty(priority))
      query = query.Where(t => t.Priority == priority);

    // Date Filters (on CreatedAt)
    if (date.HasValue)
    {
      var targetDate = date.Value.Date;
      query = query.Where(t => t.CreatedAt.Date == targetDate);
    }

    if (startDate.HasValue)
    {
      var start = startDate.Value.Date;
      query = query.Where(t => t.CreatedAt.Date >= start);
    }

    if (endDate.HasValue)
    {
      var end = endDate.Value.Date;
      query = query.Where(t => t.CreatedAt.Date <= end);
    }

    var tasks = await query.OrderByDescending(t => t.CreatedAt).ToListAsync();

    // Manual mapping to avoid async issues with MapToDto inside Select
    var dtos = new List<EmployeeTaskDto>();
    foreach (var task in tasks)
    {
      dtos.Add(await MapToDto(task));
    }
    return dtos;
  }

  public async Task<EmployeeTaskDto> GetTaskByIdAsync(int userId, int taskId)
  {
    var task = await _context.EmployeeTasks
        .Include(t => t.AssignedTo)
        .Include(t => t.CreatedBy)
        .FirstOrDefaultAsync(t => t.Id == taskId);

    if (task == null) return null;

    var user = await _context.Users.FindAsync(userId);
    if (user == null) return null;

    // Permission check
    if (user.Role != "admin" &&
        task.CreatedById != userId &&
        task.AssignedToId != userId &&
        (user.Role != "supervisor" || task.Department != user.SupervisedDepartment))
    {
      return null; // Unauthorized to view
    }

    return await MapToDto(task);
  }

  public async Task<EmployeeTaskDto> UpdateTaskAsync(int userId, int taskId, UpdateTaskDto dto)
  {
    var task = await _context.EmployeeTasks.FindAsync(taskId);
    if (task == null) return null;

    var user = await _context.Users.FindAsync(userId);

    // Only Admin or Creator (Supervisor) can edit details
    if (user?.Role != "admin" && task.CreatedById != userId)
    {
      throw new UnauthorizedAccessException("Only the assigner or admin can edit task details.");
    }

    if (!string.IsNullOrEmpty(dto.Title)) task.Title = dto.Title;
    if (!string.IsNullOrEmpty(dto.Description)) task.Description = dto.Description;
    if (dto.DueDate.HasValue) task.DueDate = dto.DueDate.Value;
    if (!string.IsNullOrEmpty(dto.Priority)) task.Priority = dto.Priority;
    if (!string.IsNullOrEmpty(dto.SupervisorComment)) task.SupervisorComment = dto.SupervisorComment;

    await _context.SaveChangesAsync();

    var updateData = new
    {
      taskId = task.Id,
      title = task.Title,
      updatedBy = user?.FullName,
      status = task.Status
    };

    // Notify assigned user that details changed
    await _notificationService.BroadcastToUserAsync(task.AssignedToId.ToString(), "task_updated", updateData);

    // Also notify admins
    await _notificationService.BroadcastToChannelAsync("admins", "task_updated", updateData);

    return await MapToDto(task);
  }

  public async Task<EmployeeTaskDto> UpdateTaskStatusAsync(int userId, int taskId, UpdateTaskStatusDto dto)
  {
    var task = await _context.EmployeeTasks.FindAsync(taskId);
    if (task == null) return null;

    // Employees can only update their own tasks
    // Supervisors/Admins can update any status
    if (task.AssignedToId != userId)
    {
      var user = await _context.Users.FindAsync(userId);
      if (user?.Role != "admin" && task.CreatedById != userId && (user?.Role != "supervisor" || task.Department != user.SupervisedDepartment))
      {
        throw new UnauthorizedAccessException("You don't have permission to update this task.");
      }
    }

    // Logic for status transitions
    if (task.Status != dto.Status)
    {
      task.Status = dto.Status;

      if (dto.Status == "InProgress" && task.StartDate == null)
      {
        task.StartDate = DateTime.UtcNow;
      }
      else if (dto.Status == "Completed")
      {
        task.CompletedAt = DateTime.UtcNow;
      }
    }

    if (!string.IsNullOrEmpty(dto.EmployeeComment))
    {
      task.EmployeeComment = dto.EmployeeComment;
    }

    if (!string.IsNullOrEmpty(dto.SupervisorComment))
    {
      task.SupervisorComment = dto.SupervisorComment;
    }

    await _context.SaveChangesAsync();

    var currentUser = await _context.Users.FindAsync(userId);
    var statusData = new
    {
      taskId = task.Id,
      title = task.Title,
      status = task.Status,
      updatedBy = currentUser?.FullName,
      employeeComment = task.EmployeeComment,
      supervisorComment = task.SupervisorComment
    };

    // Notification Logic:
    // 1. If the Actor is the Assigned Employee -> Notify the Creator (Supervisor/Admin)
    if (userId == task.AssignedToId)
    {
      await _notificationService.BroadcastToUserAsync(task.CreatedById.ToString(), "task_status_updated", statusData);
    }
    // 2. If the Actor is the Supervisor/Admin -> Notify the Assigned Employee (e.g., re-opening the task)
    else
    {
      await _notificationService.BroadcastToUserAsync(task.AssignedToId.ToString(), "task_status_updated", statusData);
    }

    // 3. Always notify admins
    await _notificationService.BroadcastToChannelAsync("admins", "task_status_updated", statusData);

    return await MapToDto(task);
  }

  public async Task<bool> DeleteTaskAsync(int userId, int taskId)
  {
    var task = await _context.EmployeeTasks.FindAsync(taskId);
    if (task == null) return false;

    var user = await _context.Users.FindAsync(userId);

    // Only Admin or Creator can delete
    if (user?.Role != "admin" && task.CreatedById != userId)
    {
      throw new UnauthorizedAccessException("Only Admin or Creator can delete this task.");
    }

    var deleteData = new
    {
      taskId = task.Id,
      title = task.Title,
      deletedBy = user?.FullName
    };

    var assignedId = task.AssignedToId;
    _context.EmployeeTasks.Remove(task);
    await _context.SaveChangesAsync();

    // Notify assigned user
    await _notificationService.BroadcastToUserAsync(assignedId.ToString(), "task_deleted", deleteData);

    // Also notify admins
    await _notificationService.BroadcastToChannelAsync("admins", "task_deleted", deleteData);

    return true;
  }

  private async Task<EmployeeTaskDto> MapToDto(EmployeeTask t)
  {
    return  new EmployeeTaskDto
    {
      Id = t.Id,
      Title = t.Title,
      Description = t.Description,
      Status = t.Status,
      Priority = t.Priority,
      AssignedToId = t.AssignedToId,
      AssignedToName = t.AssignedTo?.FullName ?? "Unknown",
      CreatedById = t.CreatedById,
      CreatedByName = t.CreatedBy?.FullName ?? "Unknown",
      Department = t.Department,
      DueDate = t.DueDate,
      CreatedAt = t.CreatedAt,
      CompletedAt = t.CompletedAt,
      StartDate = t.StartDate,
      SupervisorComment = t.SupervisorComment,
      EmployeeComment = t.EmployeeComment,
      IsOverdue = t.Status != "Completed" && t.DueDate < DateTime.UtcNow
    };
  }
}
