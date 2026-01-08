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
    private readonly IEmailService _emailService;
    private readonly ILogger<UserService> _logger;

    public UserService(
        IUserRepository userRepository,
        IPasswordHasher passwordHasher,
        IJwtService jwtService,
        INotificationService notificationService,
        IEmailService emailService,
        ILogger<UserService> logger)
    {
        _userRepository = userRepository;
        _passwordHasher = passwordHasher;
        _jwtService = jwtService;
        _notificationService = notificationService;
        _emailService = emailService;
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
            SupervisedDepartment = createDto.SupervisedDepartment,
            AccessibleDepartments = createDto.AccessibleDepartments,
            AccessibleFeatures = createDto.AccessibleFeatures,
            CreatedAt = DateTime.UtcNow
        };

        // Auto-set SupervisedDepartment for Supervisor if not provided
        if (createDto.Role == "supervisor" && string.IsNullOrEmpty(createDto.SupervisedDepartment))
        {
            user.SupervisedDepartment = createDto.Department;
        }

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

        if (updateDto.SupervisedDepartment != null)
            user.SupervisedDepartment = updateDto.SupervisedDepartment;

        if (updateDto.AccessibleDepartments != null)
            user.AccessibleDepartments = updateDto.AccessibleDepartments;

        if (updateDto.AccessibleFeatures != null)
            user.AccessibleFeatures = updateDto.AccessibleFeatures;

        // Auto-set SupervisedDepartment if Role is Supervisor and it's null
        if (user.Role == "supervisor" && string.IsNullOrEmpty(user.SupervisedDepartment))
        {
            user.SupervisedDepartment = user.Department;
        }

        // تحديث كلمة المرور إذا تم إرسالها (خاص بالآدمن أو تغيير كلمة المرور بدون القديمة)
        if (!string.IsNullOrEmpty(updateDto.Password))
        {
            user.PasswordHashed = _passwordHasher.HashPassword(updateDto.Password);
            user.PasswordSalt = null;
            _logger.LogInformation("Password updated for user: {UserId} during profile update", user.Id);
            
            // تسجيل خروج قسري لضمان أن المستخدم سيدخل بالباسورد الجديد
            await _notificationService.SendForceLogoutAsync(user.Id.ToString(), "password_updated_by_admin");
        }

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

        // 1. تحقق مما إذا كان الحساب مقفلاً حالياً
        if (user.LockoutEnd.HasValue && user.LockoutEnd > DateTime.UtcNow)
        {
            var remainingTime = user.LockoutEnd.Value - DateTime.UtcNow;
            return new LoginResponseDto
            {
                Success = false,
                Message = $"حساب مقفل مؤقتاً. يرجى المحاولة بعد {Math.Ceiling(remainingTime.TotalMinutes)} دقيقة."
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
            // 2. زيادة عداد المحاولات الفاشلة
            user.AccessFailedCount++;
            
            if (user.AccessFailedCount >= 5)
            {
                user.LockoutEnd = DateTime.UtcNow.AddMinutes(15);
                _logger.LogWarning("Account locked due to too many failed attempts: {Username}", user.Username);
                
                await _userRepository.UpdateAsync(user);
                return new LoginResponseDto
                {
                    Success = false,
                    Message = "تم قفل الحساب لمدة 15 دقيقة بسبب كثرة المحاولات الفاشلة."
                };
            }

            await _userRepository.UpdateAsync(user);
            return new LoginResponseDto
            {
                Success = false,
                Message = $"اسم المستخدم أو كلمة المرور غير صحيحة. المحاولات المتبقية: {5 - user.AccessFailedCount}"
            };
        }

        // التحقق مما إذا كان هناك جلسة سابقة مفتوحة لتحديد رسالة النجاح
        bool wasLoggedInElsewhere = !string.IsNullOrEmpty(user.SecurityStamp);

        // 3. تصفير العداد عند نجاح تسجيل الدخول وتوليد SecurityStamp جديد
        user.AccessFailedCount = 0;
        user.LockoutEnd = null;
        user.SecurityStamp = Guid.NewGuid().ToString(); // توليد بصمة جديدة للجلسة
        
        await _userRepository.UpdateAsync(user);

        _logger.LogInformation("User logged in: {UserId}, Username: {Username}", user.Id, user.Username);

        // إرسال إشارة تسجيل خروج لأي أجهزة أخرى قبل تسجيل الدخول الجديد (One Session per User - SignalR)
        await _notificationService.SendForceLogoutAsync(user.Id.ToString());

        // Generate JWT Token with SecurityStamp and permissions
        var token = _jwtService.GenerateToken(
            user.Id, 
            user.Username ?? "", 
            user.Role, 
            user.SecurityStamp,
            user.SupervisedDepartment,
            user.AccessibleDepartments,
            user.AccessibleFeatures);

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
            Message = wasLoggedInElsewhere 
                ? "تم تسجيل الدخول بنجاح، وقد قمنا بإغلاق جلسة كانت مفتوحة على جهاز آخر" 
                : "تم تسجيل الدخول بنجاح"
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

    public async Task<bool> AdminResetPasswordAsync(AdminResetPasswordDto resetDto)
    {
        var user = await _userRepository.GetByIdAsync(resetDto.UserId);
        if (user == null)
        {
            return false;
        }

        // Hash new password
        var hashedPassword = _passwordHasher.HashPassword(resetDto.NewPassword);
        user.PasswordHashed = hashedPassword;
        user.PasswordSalt = null;

        await _userRepository.UpdateAsync(user);
        _logger.LogInformation("Password reset by Admin for user: {UserId}", user.Id);

        // إرسال إشارة تسجيل خروج قسري للمستخدم لكي يضطر للدخول بكلمة المرور الجديدة
        await _notificationService.SendForceLogoutAsync(user.Id.ToString(), "password_reset_by_admin");

        return true;
    }

    public async Task<bool> ForgotPasswordAsync(string email)
    {
        var users = await _userRepository.GetAllAsync();
        var user = users.FirstOrDefault(u => u.Email == email);
        
        if (user == null) return false;

        // Generate a random 6-digit code
        var code = new Random().Next(100000, 999999).ToString();
        
        user.ResetToken = code;
        user.ResetTokenExpiry = DateTime.UtcNow.AddMinutes(15);
        
        await _userRepository.UpdateAsync(user);

        // Send Email
        await _emailService.SendEmailAsync(
            user.Email!, 
            "Password Reset Code", 
            $"Your verification code is: {code}. It will expire in 15 minutes."
        );

        return true;
    }

    public async Task<bool> ResetPasswordAsync(ResetPasswordDto resetDto)
    {
        var users = await _userRepository.GetAllAsync();
        var user = users.FirstOrDefault(u => u.Email == resetDto.Email);

        if (user == null || user.ResetToken != resetDto.Token || user.ResetTokenExpiry < DateTime.UtcNow)
        {
            return false;
        }

        // Hash new password
        user.PasswordHashed = _passwordHasher.HashPassword(resetDto.NewPassword);
        user.PasswordSalt = null;
        user.ResetToken = null;
        user.ResetTokenExpiry = null;

        await _userRepository.UpdateAsync(user);
        
        _logger.LogInformation("Password reset via email for user: {UserId}", user.Id);
        
        // Force logout from all sessions
        await _notificationService.SendForceLogoutAsync(user.Id.ToString(), "password_reset_via_forgot");

        return true;
    }

    public async Task LogoutAsync(int userId)
    {
        var user = await _userRepository.GetByIdAsync(userId);
        if (user != null)
        {
            user.SecurityStamp = null; // مسح بصمة الجلسة عند تسجيل الخروج
            await _userRepository.UpdateAsync(user);
            _logger.LogInformation("User logged out and security stamp cleared: {UserId}", userId);
        }
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
            SupervisedDepartment = user.SupervisedDepartment,
            AccessibleDepartments = user.AccessibleDepartments,
            AccessibleFeatures = user.AccessibleFeatures,
            CreatedAt = user.CreatedAt
        };
    }
}
