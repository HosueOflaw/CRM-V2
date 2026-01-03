using House_of_law_api.Domain.Entities;

namespace House_of_law_api.Interfaces;

public interface IMailRepository : IBaseRepository<Mail>
{
    Task<IEnumerable<Mail>> GetByFileCodeAsync(long fileCode);
    Task<IEnumerable<Mail>> GetByDeptCodeAsync(long deptCode);
}
