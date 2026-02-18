namespace House_of_law_api.Interfaces;

public interface IAuditService
{
    Task LogActionAsync(long? fileCode, long? deptCode, string action, string description, object previousState = null, string entityType = null, string entityId = null, DateTime? entityAddedDate = null, DateTime? entityUpdateDate = null);
}
