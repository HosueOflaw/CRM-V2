
namespace House_of_law_api.Interfaces;

public interface IAuditsFileRepository : IBaseRepository<AuditsFile>
{
    Task<IEnumerable<AuditsFile>> GetByFileCodeAsync(long fileCode);
}
