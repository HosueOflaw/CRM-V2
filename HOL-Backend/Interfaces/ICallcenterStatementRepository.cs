using House_of_law_api.Domain.Entities;

namespace House_of_law_api.Interfaces;

public interface ICallcenterStatementRepository : IBaseRepository<CallcenterStatement>
{
    Task<IEnumerable<CallcenterStatement>> GetByFileCodeAsync(long fileCode);
}
