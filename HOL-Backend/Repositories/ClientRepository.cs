using House_of_law_api.Data;
using House_of_law_api.Interfaces;
using House_of_law_api.Modules;
using Microsoft.EntityFrameworkCore;

namespace House_of_law_api.Repositories;

public class ClientRepository : BaseRepository<Client>, IClientRepository
{
    public ClientRepository(ApplicationDbContext context) : base(context)
    {
    }

    public override async Task<Client> GetByIdAsync(long id)
    {
        return await _context.Clients
            .Include(c => c.ClientContacts)
            .Include(c => c.FinancialDetails)
            .FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<Client> GetByCodeAsync(int code)
    {
        return await _context.Clients
            .Include(c => c.ClientContacts)
            .Include(c => c.FinancialDetails)
            .FirstOrDefaultAsync(c => c.Code == code);
    }

    public async Task<IEnumerable<Client>> GetAllOptimizedAsync()
    {
        return await _context.Clients
            .Include(c => c.ClientContacts)
            .OrderByDescending(c => c.DateAdded)
            .Take(1000)
            .ToListAsync();
    }

    public async Task<long> GetMaxIdAsync()
    {
        return await _context.Clients.MaxAsync(c => (long?)c.Id) ?? 0;
    }
}
