namespace House_of_law_api.Infrastructure.Cloudflare;

public class CloudflareOptions
{
    /// <summary>
    /// When true the middleware rewrites HttpContext.Connection.RemoteIpAddress with CF-Connecting-IP.
    /// </summary>
    public bool RewriteClientIp { get; set; } = true;

    /// <summary>
    /// Optional list of origins allowed to use Cloudflare protected endpoints.
    /// </summary>
    public string[] AllowedOrigins { get; set; } = [];
}
