

namespace House_of_law_api.Repositories;

/// <summary>
/// Payment Repository Implementation
/// </summary>
public class PaymentRepository : BaseRepository<Payment>, IPaymentRepository
{
    public PaymentRepository(ApplicationDbContext context) : base(context)
    {
    }

    public async Task<IEnumerable<Payment>> GetByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(p => p.FileCode == fileCode)
            .OrderByDescending(p => p.DateAdded)
            .ToListAsync();
    }

    public async Task<IEnumerable<Payment>> GetByDeptCodeAsync(long deptCode)
    {
        return await _dbSet
            .Where(p => p.DeptCode == deptCode)
            .OrderByDescending(p => p.DateAdded)
            .ToListAsync();
    }

    public async Task<IEnumerable<Payment>> GetByDateRangeAsync(DateTime startDate, DateTime endDate)
    {
        return await _dbSet
            .Where(p => p.DateAdded >= startDate && p.DateAdded <= endDate)
            .OrderByDescending(p => p.DateAdded)
            .ToListAsync();
    }

    public async Task<decimal> GetTotalByFileCodeAsync(long fileCode)
    {
        return await _dbSet
            .Where(p => p.FileCode == fileCode && p.Value.HasValue)
            .SumAsync(p => p.Value ?? 0);
    }

    public async Task<decimal> GetTotalByDeptCodeAsync(long deptCode)
    {
        return await _dbSet
            .Where(p => p.DeptCode == deptCode && p.Value.HasValue)
            .SumAsync(p => p.Value ?? 0);
    }
}
