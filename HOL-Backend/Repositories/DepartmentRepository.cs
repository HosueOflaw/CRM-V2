using House_of_law_api.Data;
using House_of_law_api.Domain.Entities;
using House_of_law_api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace House_of_law_api.Repositories;

public class DepartmentRepository : BaseRepository<Department>, IDepartmentRepository
{
    public DepartmentRepository(ApplicationDbContext context) : base(context) { }

    public async Task<Department?> GetByCodeAsync(int code)
    {
        return await _dbSet.FirstOrDefaultAsync(d => d.Code == code);
    }
}
