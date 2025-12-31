using Microsoft.AspNetCore.Builder;

namespace House_of_law_api.Infrastructure.Cloudflare;

public static class CloudflareApplicationBuilderExtensions
{
    public static IApplicationBuilder UseCloudflareForwarding(this IApplicationBuilder app)
    {
        return app.UseMiddleware<CloudflareForwardingMiddleware>();
    }
}
