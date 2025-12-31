using House_of_law_api.Domain.Entities;

namespace House_of_law_api.Interfaces;

public interface IAdditionalAmountRepository : IBaseRepository<AdditionalAmount>
{
    Task<IEnumerable<AdditionalAmount>> GetByFileCodeAsync(long fileCode);
    Task<decimal> GetTotalByFileCodeAsync(long fileCode);
}
