

namespace House_of_law_api.Repositories;

public class MailRepository : BaseRepository<Mail>, IMailRepository
{
    public MailRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<Mail>> GetByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(m => m.FileCode == fileCode)
            .OrderByDescending(m => m.DateAdded)
            .ToListAsync();
    }

    public async Task<IEnumerable<Mail>> GetByDeptCodeAsync(long deptCode)
    {
        return await _dbSet
            .Where(m => m.DeptCode == deptCode)
            .OrderByDescending(m => m.DateAdded)
            .ToListAsync();
    }
}
