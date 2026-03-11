using System.Security.Claims;
using System.Text.Json;
using House_of_law_api.Interfaces;
using House_of_law_api.Modules;

namespace House_of_law_api.Services;

public class AuditService : IAuditService
{
    private readonly IAuditsFileRepository _repository;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly ApplicationDbContext _context;
    private readonly ILogger<AuditService> _logger;

    public AuditService(IAuditsFileRepository repository, IHttpContextAccessor httpContextAccessor, ApplicationDbContext context, ILogger<AuditService> logger)
    {
        _repository = repository;
        _httpContextAccessor = httpContextAccessor;
        _context = context;
        _logger = logger;
    }

    public async Task LogActionAsync(long? fileCode, long? deptCode, string action, string description, object previousState = null, string entityType = null, string entityId = null, DateTime? entityAddedDate = null, DateTime? entityUpdateDate = null, int? userId = null)
    {
        try
        {
            // Capture User context
            string userCode = null;
            int? finalUserId = userId;

            if (finalUserId.HasValue)
            {
                // Fetch UserCode from DB if userId provided
                var dbUser = await _context.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == finalUserId.Value);
                userCode = dbUser?.Code?.ToString();
            }
            else
            {
                // Fallback to HttpContext
                var httpUser = _httpContextAccessor.HttpContext?.User;
                var userIdStr = httpUser?.FindFirstValue(ClaimTypes.NameIdentifier);
                userCode = httpUser?.FindFirstValue("UserCode"); 
                if (int.TryParse(userIdStr, out var id)) finalUserId = id;
            }

            var audit = new AuditsFile
            {
                FileCode = fileCode,
                DeptCode = deptCode,
                Action = action,
                Description = description,
                PreviousState = previousState != null ? JsonSerializer.Serialize(previousState) : null,
                CurrentState = null, // Removed as requested
                UserId = finalUserId,
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
