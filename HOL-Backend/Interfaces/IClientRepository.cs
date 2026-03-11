using House_of_law_api.DTOs;
using House_of_law_api.Modules;

namespace House_of_law_api.Interfaces;

public interface IClientRepository : IBaseRepository<Client>
{
    Task<Client> GetByCodeAsync(int code);
    Task<IEnumerable<Client>> GetAllOptimizedAsync();
    Task<long> GetMaxIdAsync();
}
