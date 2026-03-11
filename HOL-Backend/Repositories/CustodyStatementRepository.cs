using House_of_law_api.Data;
using House_of_law_api.Interfaces;
using House_of_law_api.Modules;
using Microsoft.EntityFrameworkCore;

namespace House_of_law_api.Repositories;

public class CustodyStatementRepository : BaseRepository<CustodyStatement>, ICustodyStatementRepository
{
    public CustodyStatementRepository(ApplicationDbContext context) : base(context)
    {
    }

    public async Task<IEnumerable<CustodyStatement>> GetByStatementNoAsync(string statementNo)
    {
        return await _dbSet
            .Where(x => x.StatementNo == statementNo && x.Enabled)
            .OrderByDescending(x => x.DateAdded)
            .ToListAsync();
    }

    public async Task<IEnumerable<CustodyStatement>> GetByAutoNoAsync(long autoNo)
    {
        return await _dbSet
            .Where(x => x.CodeAutoNo == autoNo && x.Enabled)
            .OrderByDescending(x => x.DateAdded)
            .ToListAsync();
    }

    public async Task<IEnumerable<CustodyStatement>> GetReportDataAsync(long? companyCode, int? expenseType)
    {
        var query = _dbSet
            .Where(x => x.Enabled && !x.SendToCompany && !x.CompanyOrOffice);

        if (companyCode.HasValue)
        {
            query = query.Where(x => x.CompanyCode == companyCode);
        }

        if (expenseType.HasValue)
        {
            query = query.Where(x => x.CodeExpense == expenseType);
        }

        return await query
            .OrderByDescending(x => x.DateAdded)
            .ToListAsync();
    }

    public async Task<IEnumerable<CustodyStatement>> GetByUserAddedAsync(int userId)
    {
        return await _dbSet
            .Where(x => x.UserAdded == userId && x.Enabled)
            .OrderByDescending(x => x.DateAdded)
            .ToListAsync();
    }
}
