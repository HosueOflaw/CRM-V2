using House_of_law_api.Data;
using House_of_law_api.Domain.Entities;
using House_of_law_api.DTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace House_of_law_api.Services;

public interface IBreakService
{
    Task<UserBreakDto?> StartBreakAsync(int userId);
    Task<UserBreakDto?> EndBreakAsync(int userId);
    Task<BreakStatusDto> GetCurrentStatusAsync(int userId);
    Task<IEnumerable<UserBreakDto>> GetDailyBreaksAsync(DateTime date);
    Task<IEnumerable<UserBreakDto>> GetActiveBreaksAsync();
}

public class BreakService : IBreakService
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<BreakService> _logger;

    public BreakService(ApplicationDbContext context, ILogger<BreakService> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<UserBreakDto?> StartBreakAsync(int userId)
    {
        var today = DateTime.UtcNow.Date;
        
        // التحقق مما إذا كان لديه بريك مفتوح بالفعل أو انتهى منه اليوم
        var existingBreak = await _context.UserBreaks
            .FirstOrDefaultAsync(b => b.UserId == userId && b.BreakDate == today);

        if (existingBreak != null)
        {
            throw new InvalidOperationException("You have already started/taken a break today.");
        }

        var newBreak = new UserBreak
        {
            UserId = userId,
            BreakDate = today,
            StartTime = DateTime.UtcNow,
            IsCompleted = false
        };

        _context.UserBreaks.Add(newBreak);
        await _context.SaveChangesAsync();

        // Reload to include User for mapping
        await _context.Entry(newBreak).Reference(b => b.User).LoadAsync();

        return MapToDto(newBreak);
    }

    public async Task<UserBreakDto?> EndBreakAsync(int userId)
    {
        var activeBreak = await _context.UserBreaks
            .FirstOrDefaultAsync(b => b.UserId == userId && !b.IsCompleted);

        if (activeBreak == null)
        {
            throw new InvalidOperationException("No active break found to end.");
        }

        activeBreak.EndTime = DateTime.UtcNow;
        activeBreak.IsCompleted = true;
        
        // حساب المدة
        var duration = activeBreak.EndTime.Value - activeBreak.StartTime;
        activeBreak.DurationMinutes = (int)duration.TotalMinutes;

        // حساب التأخير (أكبر من 60 دقيقة)
        if (activeBreak.DurationMinutes > 60)
        {
            activeBreak.LateMinutes = activeBreak.DurationMinutes - 60;
            activeBreak.UnusedMinutes = 0;
        }
        else
        {
            activeBreak.LateMinutes = 0;
            activeBreak.UnusedMinutes = 60 - activeBreak.DurationMinutes;
        }

        await _context.SaveChangesAsync();
        
        // Ensure User is loaded for mapping
        if (activeBreak.User == null)
            await _context.Entry(activeBreak).Reference(b => b.User).LoadAsync();

        return MapToDto(activeBreak);
    }

    public async Task<BreakStatusDto> GetCurrentStatusAsync(int userId)
    {
        var activeBreak = await _context.UserBreaks
            .FirstOrDefaultAsync(b => b.UserId == userId && !b.IsCompleted);

        if (activeBreak == null)
        {
            return new BreakStatusDto { IsInBreak = false };
        }

        var duration = DateTime.UtcNow - activeBreak.StartTime;

        return new BreakStatusDto
        {
            IsInBreak = true,
            StartTime = activeBreak.StartTime,
            CurrentDurationMinutes = (int)duration.TotalMinutes
        };
    }

    public async Task<IEnumerable<UserBreakDto>> GetDailyBreaksAsync(DateTime date)
    {
        var breaks = await _context.UserBreaks
            .Include(b => b.User)
            .Where(b => b.BreakDate == date.Date)
            .OrderByDescending(b => b.StartTime)
            .ToListAsync();

        return breaks.Select(MapToDto);
    }

    public async Task<IEnumerable<UserBreakDto>> GetActiveBreaksAsync()
    {
        var breaks = await _context.UserBreaks
            .Include(b => b.User)
            .Where(b => !b.IsCompleted)
            .ToListAsync();

        return breaks.Select(MapToDto);
    }

    private static UserBreakDto MapToDto(UserBreak b)
    {
        return new UserBreakDto
        {
            Id = b.Id,
            UserId = b.UserId,
            FullName = b.User?.FullName,
            Department = b.User?.Department,
            StartTime = b.StartTime,
            EndTime = b.EndTime,
            DurationMinutes = b.DurationMinutes,
            LateMinutes = b.LateMinutes,
            UnusedMinutes = b.UnusedMinutes,
            IsCompleted = b.IsCompleted
        };
    }
}
