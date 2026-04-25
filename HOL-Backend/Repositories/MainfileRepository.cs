

namespace House_of_law_api.Repositories;

public class MainfileRepository : BaseRepository<Mainfile>, IMainfileRepository
{
    public MainfileRepository(ApplicationDbContext context) : base(context) { }

    private IQueryable<Mainfile> GetMainfilesWithStatuses()
    {
        return from m in _dbSet
               join fc in _context.FileClassifications on (long?)m.Id equals fc.MainfileId into fcJoin from fc in fcJoin.DefaultIfEmpty()
               join i in _context.LookupValues on (fc != null ? fc.InternalStatusId : null) equals i.Id into iJoin from i in iJoin.DefaultIfEmpty()
               join civ in _context.LookupValues on (fc != null ? fc.CivilStatusId : null) equals civ.Id into civJoin from civ in civJoin.DefaultIfEmpty()
               join coop in _context.LookupValues on (fc != null ? fc.CooperationStatusId : null) equals coop.Id into coopJoin from coop in coopJoin.DefaultIfEmpty()
               join cont in _context.LookupValues on (fc != null ? fc.ContactStatusId : null) equals cont.Id into contJoin from cont in contJoin.DefaultIfEmpty()
               join cst in _context.LookupValues on (fc != null ? fc.ClientStatusId : null) equals cst.Id into cstJoin from cst in cstJoin.DefaultIfEmpty()
               join clm in _context.LookupValues on (fc != null ? fc.ClaimStatusId : null) equals clm.Id into clmJoin from clm in clmJoin.DefaultIfEmpty()
               join pay in _context.LookupValues on (fc != null ? fc.PaymentStatusId : null) equals pay.Id into payJoin from pay in payJoin.DefaultIfEmpty()
               join fls in _context.LookupValues on (fc != null ? fc.FileStatusId : null) equals fls.Id into flsJoin from fls in flsJoin.DefaultIfEmpty()
               join act in _context.LookupValues on (fc != null ? fc.ActionStatusId : null) equals act.Id into actJoin from act in actJoin.DefaultIfEmpty()
               join fup in _context.LookupValues on (fc != null ? fc.FollowUpStatusId : null) equals fup.Id into fupJoin from fup in fupJoin.DefaultIfEmpty()
               join lang in _context.LookupValues on (fc != null ? fc.CommunicationLanguageId : null) equals lang.Id into langJoin from lang in langJoin.DefaultIfEmpty()
               join gen in _context.LookupValues on (fc != null ? fc.GenderId : null) equals gen.Id into genJoin from gen in genJoin.DefaultIfEmpty()
               select new Mainfile
               {
                   Id = m.Id,
                   Code = m.Code,
                   Name = m.Name,
                   Cid = m.Cid,
                   Address = m.Address,
                   DateAdded = m.DateAdded,
                   Nationality = m.Nationality,
                   Archive = m.Archive,
                   Note = m.Note,
                   Work = m.Work,
                   Membership = m.Membership,
                   CompanyEmail = m.CompanyEmail,
                   CompanyFax = m.CompanyFax,
                   CompanyRegister = m.CompanyRegister,
                   Partner1 = m.Partner1,
                   Partner2 = m.Partner2,
                   Partner3 = m.Partner3,
                   RegisterType = m.RegisterType,
                   AddedBy = m.AddedBy,
                   ImportJobId = m.ImportJobId,
                   Status = m.Status,
                   
                   // Form Classification Table
                   InternalStatus = i != null ? i.Name : null,
                   CivilStatus = civ != null ? civ.Name : null,
                   CooperationStatus = coop != null ? coop.Name : null,
                   ContactStatus = cont != null ? cont.Name : null,
                   ClientStatus = cst != null ? cst.Name : null,
                   ClaimStatus = clm != null ? clm.Name : null,
                   PaymentStatus = pay != null ? pay.Name : null,
                   FileStatus = fls != null ? fls.Name : null,
                   ActionStatus = act != null ? act.Name : null,
                   FollowUpStatus = fup != null ? fup.Name : null,
                   CommunicationLanguage = lang != null ? lang.Name : null,
                   Gender = gen != null ? gen.Name : null,

                   Classification = fc
               };
    }

    public async Task<Mainfile> GetByCodeAsync(int code)
    {
        return await GetMainfilesWithStatuses().FirstOrDefaultAsync(m => m.Code == code);
    }

    public async Task<Mainfile> GetByCidAsync(string cid)
    {
        return await GetMainfilesWithStatuses().FirstOrDefaultAsync(m => m.Cid == cid);
    }

    public async Task<IEnumerable<Mainfile>> GetByDeptCodeAsync(long? deptCode)
    {
        if (!deptCode.HasValue)
            return Enumerable.Empty<Mainfile>();

        return await GetMainfilesWithStatuses()
            .Where(m => m.Id == deptCode.Value)
            .ToListAsync();
    }

    public async Task<IEnumerable<Mainfile>> SearchAsync(string searchTerm)
    {
        if (string.IsNullOrWhiteSpace(searchTerm))
            return Enumerable.Empty<Mainfile>();

        bool isNumeric = int.TryParse(searchTerm, out int searchCode);

        return await GetMainfilesWithStatuses()
            .Where(m => (m.Name != null && m.Name.Contains(searchTerm)) ||
                        (m.Cid != null && m.Cid.Contains(searchTerm)) ||
                        (isNumeric && m.Code == searchCode))
            .OrderByDescending(m => isNumeric && m.Code == searchCode)
            .ThenByDescending(m => m.Cid == searchTerm)
            .Take(50)
            .ToListAsync();
    }
    public async Task<IEnumerable<ClientDto>> GetAllClientsOptimizedAsync()
    {
        return await _context.Mainfiles
            .AsNoTracking()
            .GroupJoin(
                _context.FileDetails.AsNoTracking(),
                m => m.Code, // Corrected from m.Id to m.Code
                f => (int?)f.FileCode,
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

    public async Task<long> GetMaxIdAsync()
    {
        if (!await _dbSet.AnyAsync())
            return 0;

        return await _dbSet.MaxAsync(m => m.Id);
    }
}
