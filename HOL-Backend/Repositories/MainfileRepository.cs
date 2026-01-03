using House_of_law_api.Data;
using House_of_law_api.Domain.Entities;
using House_of_law_api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace House_of_law_api.Repositories;

public class MainfileRepository : BaseRepository<Mainfile>, IMainfileRepository
{
    public MainfileRepository(ApplicationDbContext context) : base(context) { }

    public async Task<Mainfile?> GetByCodeAsync(int code)
    {
        return await _dbSet.FirstOrDefaultAsync(m => m.Code == code);
    }

    public async Task<IEnumerable<Mainfile>> GetByDeptCodeAsync(long? deptCode)
    {
        if (!deptCode.HasValue)
            return Enumerable.Empty<Mainfile>();

        return await _dbSet
            .Where(m => m.Id == deptCode.Value) // Adjust based on your schema
            .ToListAsync();
    }

    public async Task<IEnumerable<Mainfile>> SearchByNameAsync(string searchTerm)
    {
        if (string.IsNullOrWhiteSpace(searchTerm))
            return await GetAllAsync();

        return await _dbSet
            .Where(m => m.Name != null && m.Name.Contains(searchTerm))
            .ToListAsync();
    }
}
