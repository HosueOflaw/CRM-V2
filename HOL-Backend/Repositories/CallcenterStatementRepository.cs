

namespace House_of_law_api.Repositories;

public class CallcenterStatementRepository : BaseRepository<CallcenterStatement>, ICallcenterStatementRepository
{
    public CallcenterStatementRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<CallcenterStatement>> GetByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(c => c.FileCode == fileCode)
            .OrderByDescending(c => c.DateAdded)
            .ToListAsync();
    }
}
