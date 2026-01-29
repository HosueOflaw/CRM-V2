

namespace House_of_law_api.Repositories;

public class FileClassificationRepository : BaseRepository<FileClassification>, IFileClassificationRepository
{
    public FileClassificationRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<FileClassification>> GetByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(f => f.FileCode == fileCode)
            .ToListAsync();
    }
}
