using House_of_law_api.Data;
using House_of_law_api.Domain.Entities;
using House_of_law_api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace House_of_law_api.Repositories;

public class AttachmentRepository : BaseRepository<Attachment>, IAttachmentRepository
{
    public AttachmentRepository(ApplicationDbContext context) : base(context) { }

    public async Task<IEnumerable<Attachment>> GetByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(a => a.FileCode == fileCode)
            .OrderByDescending(a => a.DateAdded)
            .ToListAsync();
    }

    public async Task<IEnumerable<Attachment>> GetByDeptCodeAsync(long deptCode)
    {
        return await _dbSet
            .Where(a => a.DeptCode == deptCode)
            .OrderByDescending(a => a.DateAdded)
            .ToListAsync();
    }

    public async Task<IEnumerable<Attachment>> GetEnabledAsync()
    {
        return await _dbSet
            .Where(a => a.Enabled == true)
            .ToListAsync();
    }
}
