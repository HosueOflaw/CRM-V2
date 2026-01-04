using Microsoft.AspNetCore.SignalR;
using System.Security.Claims;

namespace House_of_law_api.Infrastructure.SignalR;

public class CustomUserIdProvider : IUserIdProvider
{
    public string? GetUserId(HubConnectionContext connection)
    {
        // نستخدم NameIdentifier لأنه المكان الذي نضع فيه الـ UserId في JwtService
        return connection.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
    }
}
