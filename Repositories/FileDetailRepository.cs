using House_of_law_api.Data;
using House_of_law_api.Domain.Entities;
using House_of_law_api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace House_of_law_api.Repositories;

public class FileDetailRepository : BaseRepository<FileDetail>, IFileDetailRepository
{
    public FileDetailRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<FileDetail>> GetByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(f => f.FileCode == fileCode)
            .ToListAsync();
    }

    public async Task<IEnumerable<FileDetail>> GetByDeptCodeAsync(long deptCode)
    {
        return await _dbSet
            .Where(f => f.DeptCode == deptCode)
            .ToListAsync();
    }
}
