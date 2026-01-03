using House_of_law_api.Infrastructure.SignalR;
using Microsoft.AspNetCore.SignalR;

namespace House_of_law_api.Services;

public interface INotificationService
{
    Task BroadcastToAllAsync(string eventType, object payload);
    Task BroadcastToChannelAsync(string channel, string eventType, object payload);
    Task BroadcastToUserAsync(string userId, string eventType, object payload);
}

public class NotificationService : INotificationService
{
    private readonly IHubContext<NotificationsHub> _hubContext;

    public NotificationService(IHubContext<NotificationsHub> hubContext)
    {
        _hubContext = hubContext;
    }

    /// <summary>
    /// يبث event لكل المستخدمين المتصلين بالـ Hub
    /// </summary>
    public async Task BroadcastToAllAsync(string eventType, object payload)
    {
        await _hubContext.Clients.All.SendAsync("broadcast", new
        {
            type = eventType,
            data = payload,
            timestamp = DateTime.UtcNow
        });
    }

    /// <summary>
    /// يبث event لمجموعة معينة (مثلاً: finance-1, users-2)
    /// </summary>
    public async Task BroadcastToChannelAsync(string channel, string eventType, object payload)
    {
        await _hubContext.Clients.Group(channel).SendAsync("broadcast", new
        {
            type = eventType,
            data = payload,
            timestamp = DateTime.UtcNow
        });
    }

    /// <summary>
    /// يبث event لمستخدم معين (لو عندك UserId في الـ Connection)
    /// </summary>
    public async Task BroadcastToUserAsync(string userId, string eventType, object payload)
    {
        await _hubContext.Clients.User(userId).SendAsync("broadcast", new
        {
            type = eventType,
            data = payload,
            timestamp = DateTime.UtcNow
        });
    }
}
