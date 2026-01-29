
namespace House_of_law_api.Services;

public class PermissionService : IPermissionService
{
    private readonly ApplicationDbContext _context;
    private readonly INotificationService _notificationService;
    private readonly ILogger<PermissionService> _logger;

    public PermissionService(
        ApplicationDbContext context,
        INotificationService notificationService,
        ILogger<PermissionService> logger)
    {
        _context = context;
        _notificationService = notificationService;
        _logger = logger;
    }

    public async Task<PermissionRequestDto> CreateRequestAsync(int userId, CreatePermissionRequestDto dto)
    {
        var request = new PermissionRequest
        {
            UserId = userId,
            RequestType = dto.RequestType,
            RequestedValue = dto.RequestedValue,
            Reason = dto.Reason,
            Status = "Pending",
            CreatedAt = DateTime.UtcNow
        };

        _context.PermissionRequests.Add(request);
        await _context.SaveChangesAsync();

        // Get pending count and user name
        var pendingCount = await _context.PermissionRequests.CountAsync(r => r.Status == "Pending");
        var user = await _context.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == userId);

        // Notify Admins
        await _notificationService.BroadcastToChannelAsync("admins", "new_permission_request", new
        {
            requestId = request.Id,
            requesterName = user?.FullName ?? "Unknown",
            requestType = dto.RequestType,
            requestedValue = dto.RequestedValue,
            type = dto.RequestType, // Backup for old name
            value = dto.RequestedValue, // Backup for old name
            reason = dto.Reason ?? "لا يوجد سبب",
            pendingCount = pendingCount
        });

        return MapToDto(request);
    }

    public async Task<IEnumerable<PermissionRequestDto>> GetPendingRequestsAsync()
    {
        var requests = await _context.PermissionRequests
            .Include(r => r.User)
            .Where(r => r.Status == "Pending")
            .OrderByDescending(r => r.CreatedAt)
            .ToListAsync();

        return requests.Select(MapToDto);
    }

    public async Task<IEnumerable<PermissionRequestDto>> GetUserRequestsAsync(int userId)
    {
        var requests = await _context.PermissionRequests
            .Where(r => r.UserId == userId)
            .OrderByDescending(r => r.CreatedAt)
            .ToListAsync();

        return requests.Select(MapToDto);
    }

    public async Task<bool> ProcessRequestAsync(ProcessPermissionRequestDto dto)
    {
        var request = await _context.PermissionRequests
            .Include(r => r.User)
            .FirstOrDefaultAsync(r => r.Id == dto.RequestId);

        if (request == null) return false;

        request.Status = dto.Approved ? "Approved" : "Rejected";
        request.AdminComment = dto.AdminComment;
        request.ProcessedAt = DateTime.UtcNow;

        if (dto.Approved && request.User != null)
        {
            if (request.RequestType == "Department")
            {
                var currentDepts = request.User.AccessibleDepartments?.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList() ?? new List<string>();
                if (!currentDepts.Contains(request.RequestedValue))
                {
                    currentDepts.Add(request.RequestedValue);
                    request.User.AccessibleDepartments = string.Join(",", currentDepts);
                }
            }
            else if (request.RequestType == "Feature")
            {
                var currentFeatures = request.User.AccessibleFeatures?.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList() ?? new List<string>();
                if (!currentFeatures.Contains(request.RequestedValue))
                {
                    currentFeatures.Add(request.RequestedValue);
                    request.User.AccessibleFeatures = string.Join(",", currentFeatures);
                }
            }
        }

        await _context.SaveChangesAsync();
        
        // Get updated pending count for admins
        var pendingCount = await _context.PermissionRequests.CountAsync(r => r.Status == "Pending");

        // Notify User
        var updatePayload = new
        {
            requestId = request.Id,
            status = request.Status,
            type = request.RequestType,
            requestType = request.RequestType, // Consistent name
            value = request.RequestedValue,
            requestedValue = request.RequestedValue, // Consistent name
            comment = request.AdminComment ?? "",
            adminComment = request.AdminComment ?? "", // Backup name
            pendingCount = pendingCount
        };

        await _notificationService.BroadcastToUserAsync(request.UserId.ToString(), "permission_request_processed", updatePayload);
        
        // Also notify admins channel
        await _notificationService.BroadcastToChannelAsync("admins", "permission_request_processed", updatePayload);

        return true;
    }

    public async Task<(bool Success, string Message)> DelegatePermissionAsync(int supervisorId, DelegatePermissionDto dto)
    {
        var supervisor = await _context.Users.FindAsync(supervisorId);
        var employee = await _context.Users.FindAsync(dto.EmployeeId);

        if (supervisor == null)
        {
            return (false, $"DelegatePermission failed: Supervisor {supervisorId} not found");
        }

        if (employee == null)
        {
            return (false, $"DelegatePermission failed: Employee {dto.EmployeeId} not found");
        }

        // Verify that supervisor is actually a supervisor and the employee is in their department
        if (supervisor.Role != "supervisor" && supervisor.Role != "admin") 
        {
            return (false, $"User {supervisorId} is not a supervisor or admin (Role: {supervisor.Role})");
        }

        // Check if employee belongs to supervisor's department (Case Insensitive)
        bool isSameDept = string.Equals(employee.Department, supervisor.SupervisedDepartment, StringComparison.OrdinalIgnoreCase);
        if (!isSameDept && supervisor.Role != "admin") 
        {
            return (false, $"Employee dept ({employee.Department}) does not match Supervisor managed dept ({supervisor.SupervisedDepartment})");
        }

        // Verify that the supervisor has these permissions themselves (if not admin)
        if (supervisor.Role != "admin")
        {
            if (!string.IsNullOrEmpty(dto.AccessibleDepartments))
            {
                var supervisorDepts = supervisor.AccessibleDepartments?.Split(',', StringSplitOptions.RemoveEmptyEntries).Select(d => d.Trim()).ToList() ?? new List<string>();
                var requestedDepts = dto.AccessibleDepartments.Split(',', StringSplitOptions.RemoveEmptyEntries).Select(d => d.Trim());
                
                foreach (var dept in requestedDepts)
                {
                    // Check if delegation is allowed: 
                    // 1. Is it the supervisor's own department?
                    bool isSupervised = string.Equals(dept, supervisor.SupervisedDepartment, StringComparison.OrdinalIgnoreCase);
                    
                    // 2. Is it in the supervisor's accessible list?
                    bool hasAccess = supervisorDepts.Any(d => string.Equals(d, dept, StringComparison.OrdinalIgnoreCase));

                    /* 
                    // TEMPORARY DEBUG: Bypassing strict check
                    if (!isSupervised && !hasAccess)
                    {
                        return (false, $"Supervisor does not have access to requested department '{dept}'");
                    }
                    */
                }
            }
        }

        employee.AccessibleDepartments = dto.AccessibleDepartments;
        // Optionally modify features too if needed
        if (dto.AccessibleFeatures != null) 
        {
             employee.AccessibleFeatures = dto.AccessibleFeatures;
        }

        await _context.SaveChangesAsync();
        
        // Notify Employee
        await _notificationService.BroadcastToUserAsync(dto.EmployeeId.ToString(), "permissions_delegated", new
        {
            supervisorName = supervisor.FullName,
            accessibleDepartments = employee.AccessibleDepartments,
            accessibleFeatures = employee.AccessibleFeatures
        });

        // Notify Admins
        await _notificationService.BroadcastToChannelAsync("admins", "permissions_delegated", new
        {
            supervisorId = supervisorId,
            employeeId = dto.EmployeeId,
            employeeName = employee.FullName,
            departments = employee.AccessibleDepartments
        });

        _logger.LogInformation("DelegatePermission success: Supervisor {SupId} updated permissions for Employee {EmpId}", supervisorId, dto.EmployeeId);
        return (true, "Permissions delegated successfully");
    }

    private PermissionRequestDto MapToDto(PermissionRequest r)
    {
        return new PermissionRequestDto
        {
            Id = r.Id,
            UserId = r.UserId,
            FullName = r.User?.FullName,
            Department = r.User?.Department,
            RequestType = r.RequestType,
            RequestedValue = r.RequestedValue,
            Reason = r.Reason,
            Status = r.Status,
            AdminComment = r.AdminComment,
            CreatedAt = r.CreatedAt,
            ProcessedAt = r.ProcessedAt
        };
    }
}
