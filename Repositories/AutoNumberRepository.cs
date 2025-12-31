using House_of_law_api.Data;
using House_of_law_api.Domain.Entities;
using House_of_law_api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace House_of_law_api.Repositories;

public class AutoNumberRepository : BaseRepository<AutoNumber>, IAutoNumberRepository
{
    public AutoNumberRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<AutoNumber>> GetByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(a => a.FileCode == fileCode)
            .ToListAsync();
    }
}
