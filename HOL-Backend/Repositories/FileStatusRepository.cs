

namespace House_of_law_api.Repositories;

public class FileStatusRepository : BaseRepository<FileStatus>, IFileStatusRepository
{
    public FileStatusRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<FileStatus>> GetByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(f => f.FileCode == fileCode)
            .OrderByDescending(f => f.DateAdded)
            .ToListAsync();
    }
}
