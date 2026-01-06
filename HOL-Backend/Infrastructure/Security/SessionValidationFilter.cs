using House_of_law_api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Security.Claims;

namespace House_of_law_api.Infrastructure.Security;

public class SessionValidationFilter : IAsyncActionFilter
{
    private readonly IUserRepository _userRepository;

    public SessionValidationFilter(IUserRepository userRepository)
    {
        _userRepository = userRepository;
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
                var dbUser = await _userRepository.GetByIdAsync(userId);

                // إذا تغيرت البصمة في قاعدة البيانات عن الموجودة في التوكن (يعني دخل من جهاز آخر)
                if (dbUser == null || dbUser.SecurityStamp != securityStampClaim?.Value)
                {
                    context.Result = new UnauthorizedObjectResult(new { message = "Session expired. You have logged in from another device." });
                    return;
                }
            }
        }

        await next();
    }
}
