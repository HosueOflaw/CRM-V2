
namespace House_of_law_api.Interfaces;

public interface IAttachmentRepository : IBaseRepository<Attachment>
{
    Task<IEnumerable<Attachment>> GetByFileCodeAsync(long fileCode);
    Task<IEnumerable<Attachment>> GetByDeptCodeAsync(long deptCode);
    Task<IEnumerable<Attachment>> GetEnabledAsync();
}
