

namespace House_of_law_api.Repositories;

public class NoteRepository : BaseRepository<Note>, INoteRepository
{
    public NoteRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<Note>> GetByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(n => n.FileCode == fileCode)
            .OrderByDescending(n => n.DateAdded)
            .ToListAsync();
    }

    public async Task<IEnumerable<Note>> GetByDeptCodeAsync(long deptCode)
    {
        return await _dbSet
            .Where(n => n.DeptCode == deptCode)
            .OrderByDescending(n => n.DateAdded)
            .ToListAsync();
    }
}
