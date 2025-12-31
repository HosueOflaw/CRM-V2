using House_of_law_api.Domain.Entities;

namespace House_of_law_api.Interfaces;

public interface IMainfileRepository : IBaseRepository<Mainfile>
{
    Task<Mainfile?> GetByCodeAsync(int code);
    Task<IEnumerable<Mainfile>> GetByDeptCodeAsync(long? deptCode);
    Task<IEnumerable<Mainfile>> SearchByNameAsync(string searchTerm);
}
