using System.Security.Claims;
using System.Text.Json;
using House_of_law_api.Interfaces;
using House_of_law_api.Modules;

namespace House_of_law_api.Services;

public class AuditService : IAuditService
{
    private readonly IAuditsFileRepository _repository;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly ILogger<AuditService> _logger;

    public AuditService(IAuditsFileRepository repository, IHttpContextAccessor httpContextAccessor, ILogger<AuditService> logger)
    {
        _repository = repository;
        _httpContextAccessor = httpContextAccessor;
        _logger = logger;
    }

    public async Task LogActionAsync(long? fileCode, long? deptCode, string action, string description, object previousState = null, string entityType = null, string entityId = null, DateTime? entityAddedDate = null, DateTime? entityUpdateDate = null)
    {
        try
        {
            // Capture User context
            var user = _httpContextAccessor.HttpContext?.User;
            var userIdStr = user?.FindFirstValue(ClaimTypes.NameIdentifier);
            var userCode = user?.FindFirstValue("UserCode"); // Assuming UserCode is a custom claim
            int? userId = int.TryParse(userIdStr, out var id) ? id : null;

            var audit = new AuditsFile
            {
                FileCode = fileCode,
                DeptCode = deptCode,
                Action = action,
                Description = description,
                PreviousState = previousState != null ? JsonSerializer.Serialize(previousState) : null,
                CurrentState = null, // Removed as requested
                UserId = userId,
                UserCode = userCode,
                ActionDate = DateTime.UtcNow,
                EntityType = entityType,
                EntityId = entityId,
                EntityAddedDate = entityAddedDate,
                EntityUpdateDate = entityUpdateDate
            };

            await _repository.AddAsync(audit);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error logging audit action: {Action} for File: {FileCode}", action, fileCode);
        }
    }
}
