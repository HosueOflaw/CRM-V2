
namespace House_of_law_api.Interfaces;

public interface IAutoNumberRepository : IBaseRepository<AutoNumber>
{
    Task<IEnumerable<AutoNumber>> GetByFileCodeAsync(long fileCode);
}
