
namespace House_of_law_api.Interfaces;

/// <summary>
/// User Repository Interface - عمليات خاصة بالمستخدمين
/// </summary>
public interface IUserRepository : IBaseRepository<User>
{
    Task<User> GetByUsernameAsync(string username);
    Task<User> GetByEmailAsync(string email);
    Task<IEnumerable<User>> GetByRoleAsync(string role);
    Task<bool> UsernameExistsAsync(string username);
    Task<bool> EmailExistsAsync(string email);
}
