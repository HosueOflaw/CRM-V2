using House_of_law_api.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace House_of_law_api.Services;

public interface IPermissionService
{
    Task<PermissionRequestDto> CreateRequestAsync(int userId, CreatePermissionRequestDto dto);
    Task<IEnumerable<PermissionRequestDto>> GetPendingRequestsAsync();
    Task<IEnumerable<PermissionRequestDto>> GetUserRequestsAsync(int userId);
    Task<bool> ProcessRequestAsync(ProcessPermissionRequestDto dto);
    Task<(bool Success, string Message)> DelegatePermissionAsync(int supervisorId, DelegatePermissionDto dto);
}
