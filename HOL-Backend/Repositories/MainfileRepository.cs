

namespace House_of_law_api.Repositories;

public class MainfileRepository : BaseRepository<Mainfile>, IMainfileRepository
{
    public MainfileRepository(ApplicationDbContext context) : base(context) { }

    public async Task<Mainfile> GetByCodeAsync(int code)
    {
        return await _dbSet.FirstOrDefaultAsync(m => m.Code == code);
    }

    public async Task<IEnumerable<Mainfile>> GetByDeptCodeAsync(long? deptCode)
    {
        if (!deptCode.HasValue)
            return Enumerable.Empty<Mainfile>();

        return await _dbSet
            .Where(m => m.Id == deptCode.Value) // Adjust based on your schema
            .ToListAsync();
    }

  public async Task<IEnumerable<Mainfile>> SearchByNameAsync(string searchTerm)
  {
    if (string.IsNullOrWhiteSpace(searchTerm))
      return await GetAllAsync();

    return await _dbSet
        .Where(m => m.Name != null && m.Name.Contains(searchTerm))
        .ToListAsync();
  }
    public async Task<IEnumerable<ClientDto>> GetAllClientsOptimizedAsync()
    {
        return await _context.Mainfiles
            .AsNoTracking()
            .GroupJoin(
                _context.FileDetails.AsNoTracking(),
                m => m.Id,
                f => f.FileCode,
                (m, details) => new { m, detail = details.FirstOrDefault() }
            )
            .Select(x => new ClientDto
            {
                Id = x.m.Id,
                Code = x.m.Code,
                Name = x.m.Name,
                Cid = x.m.Cid,
                Address = x.m.Address,
                DateAdded = x.m.DateAdded,
                Nationality = x.m.Nationality,
                ContractNo = x.detail != null ? x.detail.ContractNo : null,
                LegalPlaintiff = x.detail != null ? x.detail.LegalPlaintiff : null,
                ContractDetails = x.detail != null ? x.detail.Reason : null
            })
            .ToListAsync();
    }
}
