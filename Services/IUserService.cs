using House_of_law_api.DTOs;

namespace House_of_law_api.Services;

/// <summary>
/// User Service Interface - Business Logic للمستخدمين
/// </summary>
public interface IUserService
{
    Task<IEnumerable<UserDto>> GetAllUsersAsync();
    Task<UserDto?> GetUserByIdAsync(int id);
    Task<UserDto> CreateUserAsync(CreateUserDto createDto);
    Task<UserDto?> UpdateUserAsync(int id, UpdateUserDto updateDto);
    Task<bool> DeleteUserAsync(int id);
    Task<UserDto?> GetUserByUsernameAsync(string username);
    Task<IEnumerable<UserDto>> GetUsersByRoleAsync(string role);
    Task<LoginResponseDto> LoginAsync(LoginDto loginDto);
    Task<bool> ChangePasswordAsync(ChangePasswordDto changePasswordDto);
}
