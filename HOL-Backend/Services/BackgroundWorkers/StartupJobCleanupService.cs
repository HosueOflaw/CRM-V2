using House_of_law_api.Data;
using Microsoft.EntityFrameworkCore;

namespace House_of_law_api.Services.BackgroundWorkers;

public class StartupJobCleanupService : IHostedService
{
    private readonly IServiceProvider _serviceProvider;
    private readonly ILogger<StartupJobCleanupService> _logger;

    public StartupJobCleanupService(IServiceProvider serviceProvider, ILogger<StartupJobCleanupService> logger)
    {
        _serviceProvider = serviceProvider;
        _logger = logger;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("Startup Job Cleanup Service starting...");

        using (var scope = _serviceProvider.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

            try
            {
                var stuckJobs = await context.ImportJobs
                    .Where(j => j.Status == "Processing")
                    .ToListAsync(cancellationToken);

                if (stuckJobs.Any())
                {
                    _logger.LogWarning("Found {Count} stuck jobs from previous run. Marking them as Failed.", stuckJobs.Count);

                    foreach (var job in stuckJobs)
                    {
                        job.Status = "Failed";
                        job.ErrorMessage = "تم إيقاف العملية بسبب إعادة تشغيل الخادم (Stale job cleaned up on startup).";
                        job.CompletedAt = DateTime.UtcNow;
                    }

                    await context.SaveChangesAsync(cancellationToken);
                    _logger.LogInformation("Successfully cleaned up {Count} stuck jobs.", stuckJobs.Count);
                }
                else
                {
                    _logger.LogInformation("No stuck jobs found.");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while cleaning up stuck jobs.");
            }
        }
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}
