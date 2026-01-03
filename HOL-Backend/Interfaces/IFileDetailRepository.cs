using House_of_law_api.Domain.Entities;

namespace House_of_law_api.Interfaces;

public interface IFileDetailRepository : IBaseRepository<FileDetail>
{
    Task<IEnumerable<FileDetail>> GetByFileCodeAsync(long fileCode);
    Task<IEnumerable<FileDetail>> GetByDeptCodeAsync(long deptCode);
}
