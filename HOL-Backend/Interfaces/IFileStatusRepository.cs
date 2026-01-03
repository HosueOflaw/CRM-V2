using House_of_law_api.Domain.Entities;

namespace House_of_law_api.Interfaces;

public interface IFileStatusRepository : IBaseRepository<FileStatus>
{
    Task<IEnumerable<FileStatus>> GetByFileCodeAsync(long fileCode);
}
