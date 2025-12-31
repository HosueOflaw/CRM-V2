using System.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace House_of_law_api.Infrastructure.Cloudflare;

public class CloudflareForwardingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly CloudflareOptions _options;

    public CloudflareForwardingMiddleware(RequestDelegate next, IOptions<CloudflareOptions> options)
    {
        _next = next;
        _options = options.Value;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        if (_options.RewriteClientIp && context.Request.Headers.TryGetValue("CF-Connecting-IP", out var ipHeader))
        {
            if (IPAddress.TryParse(ipHeader.FirstOrDefault(), out var ipAddress))
            {
                context.Connection.RemoteIpAddress = ipAddress;
            }
        }

        if (context.Request.Headers.TryGetValue("CF-Ray", out var rayId))
        {
            context.Items["Cloudflare-RayId"] = rayId.FirstOrDefault();
        }

        await _next(context);
    }
}
