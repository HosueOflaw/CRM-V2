using House_of_law_api.Domain.Entities;
using House_of_law_api.DTOs;
using House_of_law_api.Interfaces;

namespace House_of_law_api.Services;

/// <summary>
/// User Service Implementation - Business Logic للمستخدمين
/// </summary>
public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IPasswordHasher _passwordHasher;
    private readonly IJwtService _jwtService;
    private readonly INotificationService _notificationService;
    private readonly ILogger<UserService> _logger;

    public UserService(
        IUserRepository userRepository,
        IPasswordHasher passwordHasher,
        IJwtService jwtService,
        INotificationService notificationService,
        ILogger<UserService> logger)
    {
        _userRepository = userRepository;
        _passwordHasher = passwordHasher;
        _jwtService = jwtService;
        _notificationService = notificationService;
        _logger = logger;
    }

    public async Task<IEnumerable<UserDto>> GetAllUsersAsync()
    {
        var users = await _userRepository.GetAllAsync();
        return users.Select(u => MapToDto(u));
    }

    public async Task<UserDto?> GetUserByIdAsync(int id)
    {
        var user = await _userRepository.GetByIdAsync(id);
        return user == null ? null : MapToDto(user);
    }

    public async Task<UserDto> CreateUserAsync(CreateUserDto createDto)
    {
        // Validation
        if (await _userRepository.UsernameExistsAsync(createDto.Username ?? ""))
        {
            throw new InvalidOperationException($"Username '{createDto.Username}' already exists");
        }

        if (!string.IsNullOrEmpty(createDto.Email) && await _userRepository.EmailExistsAsync(createDto.Email))
        {
            throw new InvalidOperationException($"Email '{createDto.Email}' already exists");
        }

        // Create entity
        var user = new User
        {
            Code = createDto.Code,
            Username = createDto.Username,
            FullName = createDto.FullName,
            Email = createDto.Email,
            Role = createDto.Role,
            Department = createDto.Department,
            CreatedAt = DateTime.UtcNow
        };

        // Hash password if provided
        if (!string.IsNullOrEmpty(createDto.Password))
        {
            _logger.LogInformation("Hashing password for user: {Username}", createDto.Username);
            var hashedPassword = _passwordHasher.HashPassword(createDto.Password);
            user.PasswordHashed = hashedPassword;
            user.PasswordSalt = null; // BCrypt includes salt in the hash, so we don't need separate salt
            _logger.LogInformation("Password hashed successfully. Hash: {Hash}", hashedPassword);
        }
        else
        {
            _logger.LogWarning("No password provided for user: {Username}", createDto.Username);
        }

        var createdUser = await _userRepository.AddAsync(user);
        _logger.LogInformation("User created: {UserId}, Username: {Username}", createdUser.Id, createdUser.Username);

        return MapToDto(createdUser);
    }

    public async Task<UserDto?> UpdateUserAsync(int id, UpdateUserDto updateDto)
    {
        var user = await _userRepository.GetByIdAsync(id);
        if (user == null)
        {
            return null;
        }

        // Update properties
        if (updateDto.Code.HasValue)
            user.Code = updateDto.Code.Value;

        if (!string.IsNullOrEmpty(updateDto.Username))
            user.Username = updateDto.Username;

        if (!string.IsNullOrEmpty(updateDto.FullName))
            user.FullName = updateDto.FullName;

        if (!string.IsNullOrEmpty(updateDto.Email))
            user.Email = updateDto.Email;

        if (!string.IsNullOrEmpty(updateDto.Role))
            user.Role = updateDto.Role;

        if (!string.IsNullOrEmpty(updateDto.Department))
            user.Department = updateDto.Department;

        await _userRepository.UpdateAsync(user);
        _logger.LogInformation("User updated: {UserId}", user.Id);

        return MapToDto(user);
    }

    public async Task<bool> DeleteUserAsync(int id)
    {
        var user = await _userRepository.GetByIdAsync(id);
        if (user == null)
        {
            return false;
        }

        await _userRepository.DeleteAsync(user);
        _logger.LogInformation("User deleted: {UserId}", id);

        return true;
    }

    public async Task<UserDto?> GetUserByUsernameAsync(string username)
    {
        var user = await _userRepository.GetByUsernameAsync(username);
        return user == null ? null : MapToDto(user);
    }

    public async Task<IEnumerable<UserDto>> GetUsersByRoleAsync(string role)
    {
        var users = await _userRepository.GetByRoleAsync(role);
        return users.Select(u => MapToDto(u));
    }

    public async Task<LoginResponseDto> LoginAsync(LoginDto loginDto)
    {
        var user = await _userRepository.GetByUsernameAsync(loginDto.Username);

        if (user == null)
        {
            return new LoginResponseDto
            {
                Success = false,
                Message = "Invalid username or password"
            };
        }

        if (string.IsNullOrWhiteSpace(user.PasswordHashed))
        {
            return new LoginResponseDto
            {
                Success = false,
                Message = "User has no password set"
            };
        }

        var isValid = _passwordHasher.VerifyPassword(
            loginDto.Password,
            user.PasswordHashed
        );

        if (!isValid)
        {
            return new LoginResponseDto
            {
                Success = false,
                Message = "Invalid username or password"
            };
        }

        _logger.LogInformation("User logged in: {UserId}, Username: {Username}", user.Id, user.Username);

        // إرسال إشارة تسجيل خروج لأي أجهزة أخرى قبل تسجيل الدخول الجديد (One Session per User)
        await _notificationService.SendForceLogoutAsync(user.Id.ToString());

        // Generate JWT Token
        var token = _jwtService.GenerateToken(user.Id, user.Username ?? "", user.Role);

        return new LoginResponseDto
        {
            Success = true,
            UserId = user.Id,
            Username = user.Username,
            FullName = user.FullName,
            Email = user.Email,
            Role = user.Role,
            Department = user.Department,
            Token = token,
            ExpiresIn = 3600,
            Message = "Login successful"
        };
    }

    public async Task<bool> ChangePasswordAsync(ChangePasswordDto changePasswordDto)
    {
        var user = await _userRepository.GetByIdAsync(changePasswordDto.UserId);
        if (user == null)
        {
            return false;
        }

        // Verify old password
        if (string.IsNullOrWhiteSpace(user.PasswordHashed))
        {
            return false;
        }

        var isValid = _passwordHasher.VerifyPassword(
            changePasswordDto.OldPassword,
            user.PasswordHashed
        );

        if (!isValid)
        {
            return false;
        }

        // Hash new password
        var hashedPassword = _passwordHasher.HashPassword(changePasswordDto.NewPassword);
        user.PasswordHashed = hashedPassword;
        user.PasswordSalt = null; // BCrypt includes salt in the hash

        await _userRepository.UpdateAsync(user);
        _logger.LogInformation("Password changed for user: {UserId}", user.Id);

        return true;
    }

    private static UserDto MapToDto(User user)
    {
        return new UserDto
        {
            Id = user.Id,
            Code = user.Code,
            Username = user.Username,
            FullName = user.FullName,
            Email = user.Email,
            Role = user.Role,
            Department = user.Department,
            CreatedAt = user.CreatedAt
        };
    }
}
