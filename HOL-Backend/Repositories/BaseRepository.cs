using House_of_law_api.Data;
using House_of_law_api.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace House_of_law_api.Repositories;

/// <summary>
/// Repository Base Implementation - يحتوي على العمليات الأساسية
/// </summary>
public class BaseRepository<T> : IBaseRepository<T> where T : class
{
    protected readonly ApplicationDbContext _context;
    protected readonly DbSet<T> _dbSet; 

    public BaseRepository(ApplicationDbContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }

    public virtual async Task<T> GetByIdAsync(int id)
    {
        return await _dbSet.FindAsync(id);
    }

    public virtual async Task<T> GetByIdAsync(long id)
    {
        return await _dbSet.FindAsync(id);
    }

    public virtual async Task<IEnumerable<T>> GetAllAsync()
    {
        return await _dbSet.AsNoTracking().ToListAsync();
    }

    public virtual async Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate)
    {
        return await _dbSet.AsNoTracking().Where(predicate).ToListAsync();
    }

    public virtual async Task<T> FirstOrDefaultAsync(Expression<Func<T, bool>> predicate)
    {
        return await _dbSet.AsNoTracking().FirstOrDefaultAsync(predicate);
    }

    public virtual async Task<T> AddAsync(T entity)
    {
        await _dbSet.AddAsync(entity);
        await _context.SaveChangesAsync();
        return entity;
    }

    public virtual async Task<IEnumerable<T>> AddRangeAsync(IEnumerable<T> entities)
    {
        await _dbSet.AddRangeAsync(entities);
        await _context.SaveChangesAsync();
        return entities;
    }

    public virtual async Task UpdateAsync(T entity)
    {
        _dbSet.Update(entity);
        await _context.SaveChangesAsync();
    }

    public virtual async Task DeleteAsync(T entity)
    {
        _dbSet.Remove(entity);
        await _context.SaveChangesAsync();
    }

    public virtual async Task DeleteAsync(int id)
    {
        var entity = await GetByIdAsync(id);
        if (entity != null)
        {
            await DeleteAsync(entity);
        }
    }

    public virtual async Task DeleteAsync(long id)
    {
        var entity = await GetByIdAsync(id);
        if (entity != null)
        {
            await DeleteAsync(entity);
        }
    }

    public virtual async Task<int> CountAsync()
    {
        return await _dbSet.CountAsync();
    }

    public virtual async Task<int> CountAsync(Expression<Func<T, bool>> predicate)
    {
        return await _dbSet.CountAsync(predicate);
    }

    public virtual async Task<bool> ExistsAsync(Expression<Func<T, bool>> predicate)
    {
        return await _dbSet.AnyAsync(predicate);
    }

    /// <summary>
    /// جلب البيانات مع Pagination
    /// </summary>
    public virtual async Task<(IEnumerable<T> Items, int TotalCount)> GetPagedAsync(
        int pageNumber, 
        int pageSize,
        Expression<Func<T, bool>> filter = null)
    {
        var query = _dbSet.AsQueryable();

        // تطبيق الفلتر إذا كان موجود
        if (filter != null)
        {
            query = query.Where(filter);
        }

        // حساب إجمالي العدد
        var totalCount = await query.CountAsync();

        // جلب البيانات للصفحة المطلوبة
        var items = await query
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        return (items, totalCount);
    }
}
