
namespace House_of_law_api.Interfaces;

public interface IDepartmentRepository : IBaseRepository<Department>
{
    Task<Department> GetByCodeAsync(int code);
}
