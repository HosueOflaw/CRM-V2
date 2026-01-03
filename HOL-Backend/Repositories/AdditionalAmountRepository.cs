using House_of_law_api.Data;
using House_of_law_api.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using House_of_law_api.Interfaces;

namespace House_of_law_api.Repositories;

public class AdditionalAmountRepository : BaseRepository<AdditionalAmount>, IAdditionalAmountRepository
{
    public AdditionalAmountRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<AdditionalAmount>> GetByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(a => a.FileCode == fileCode && (a.Enabled == null || a.Enabled == true))
            .ToListAsync();
    }

    public async Task<decimal> GetTotalByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(a => a.FileCode == fileCode && a.Value.HasValue && (a.Enabled == null || a.Enabled == true))
            .SumAsync(a => a.Value ?? 0);
    }
}
