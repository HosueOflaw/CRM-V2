using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace House_of_law_api.Infrastructure.SignalR;

public class NotificationsHub : Hub
{
    public const string Route = "/hubs/notifications";

    public async Task BroadcastAsync(string channel, object payload)
    {
        await Clients.Group(channel).SendAsync("broadcast", payload);
    }

    public Task JoinChannel(string channel)
    {
        return Groups.AddToGroupAsync(Context.ConnectionId, channel);
    }

    public Task LeaveChannel(string channel)
    {
        return Groups.RemoveFromGroupAsync(Context.ConnectionId, channel);
    }
}
