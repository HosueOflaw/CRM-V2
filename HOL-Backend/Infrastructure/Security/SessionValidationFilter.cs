using House_of_law_api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Caching.Memory;
using System.Security.Claims;

namespace House_of_law_api.Infrastructure.Security;

public class SessionValidationFilter : IAsyncActionFilter
{
    private readonly IUserRepository _userRepository;
    private readonly IMemoryCache _cache;

    public SessionValidationFilter(IUserRepository userRepository, IMemoryCache cache)
    {
        _userRepository = userRepository;
        _cache = cache;
    }

    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        var user = context.HttpContext.User;

        if (user.Identity?.IsAuthenticated == true)
        {
            var userIdClaim = user.FindFirst(ClaimTypes.NameIdentifier);
            var securityStampClaim = user.FindFirst("SecurityStamp");

            if (userIdClaim != null && int.TryParse(userIdClaim.Value, out var userId))
            {
                var cacheKey = $"user_stamp_{userId}";
                
                if (!_cache.TryGetValue(cacheKey, out string dbSecurityStamp))
                {
                    var dbUser = await _userRepository.GetByIdAsync(userId);
                    dbSecurityStamp = dbUser?.SecurityStamp;

                    if (dbSecurityStamp != null)
                    {
                        var cacheOptions = new MemoryCacheEntryOptions()
                            .SetSlidingExpiration(TimeSpan.FromMinutes(5)) // Cache for 5 minutes
                            .SetAbsoluteExpiration(TimeSpan.FromMinutes(30));

                        _cache.Set(cacheKey, dbSecurityStamp, cacheOptions);
                    }
                }

                // إذا تغيرت البصمة في قاعدة البيانات عن الموجودة في التوكن (يعني دخل من جهاز آخر)
                if (dbSecurityStamp == null || dbSecurityStamp != securityStampClaim?.Value)
                {
                    context.Result = new UnauthorizedObjectResult(new { message = "Session expired. You have logged in from another device." });
                    return;
                }
            }
        }

        await next();
    }
}
