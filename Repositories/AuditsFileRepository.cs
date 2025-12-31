using House_of_law_api.Data;
using House_of_law_api.Domain.Entities;
using House_of_law_api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace House_of_law_api.Repositories;

public class AuditsFileRepository : BaseRepository<AuditsFile>, IAuditsFileRepository
{
    public AuditsFileRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<AuditsFile>> GetByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(a => a.FileCode == fileCode)
            .ToListAsync();
    }
}
