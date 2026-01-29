
namespace House_of_law_api.Interfaces;

public interface INoteRepository : IBaseRepository<Note>
{
    Task<IEnumerable<Note>> GetByFileCodeAsync(long fileCode);
    Task<IEnumerable<Note>> GetByDeptCodeAsync(long deptCode);
}
