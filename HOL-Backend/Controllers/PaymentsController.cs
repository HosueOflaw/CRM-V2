using House_of_law_api.DTOs;
using House_of_law_api.Interfaces;
using House_of_law_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace House_of_law_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PaymentsController : ControllerBase
{
    private readonly IPaymentRepository _repository;
    private readonly INotificationService _notificationService;
    private readonly ILogger<PaymentsController> _logger;

    public PaymentsController(
        IPaymentRepository repository,
        INotificationService notificationService,
        ILogger<PaymentsController> logger)
    {
        _repository = repository;
        _notificationService = notificationService;
        _logger = logger;
    }

    /// <summary>
    /// جلب كل المدفوعات
    /// GET: api/payments
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<PaymentDto>>> GetPayments(
        [FromQuery] long? fileCode = null,
        [FromQuery] long? deptCode = null)
    {
        // استخدام Cloudflare IP في الـ Logging
        var clientIp = HttpContext.Connection.RemoteIpAddress?.ToString();
        _logger.LogInformation("GetPayments called from IP: {Ip}", clientIp);

        IEnumerable<Domain.Entities.Payment> payments;

        if (fileCode.HasValue)
        {
            payments = await _repository.GetByFileCodeAsync(fileCode.Value);
        }
        else if (deptCode.HasValue)
        {
            payments = await _repository.GetByDeptCodeAsync(deptCode.Value);
        }
        else
        {
            payments = await _repository.GetAllAsync();
        }

        var dtos = payments.Select(p => new PaymentDto
        {
            Id = p.Id,
            FileCode = p.FileCode,
            DeptCode = p.DeptCode,
            Value = p.Value,
            DateAdded = p.DateAdded,
            JouralEntry = p.JouralEntry,
            AlEntry = p.AlEntry,
            UserAdded = p.UserAdded,
            FileStatusAfter = p.FileStatusAfter
        });

        return Ok(dtos);
    }

    /// <summary>
    /// جلب دفعة واحدة
    /// GET: api/payments/5
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<PaymentDto>> GetPayment(int id)
    {
        var payment = await _repository.GetByIdAsync(id);

        if (payment == null)
        {
            return NotFound();
        }

        var paymentDto = new PaymentDto
        {
            Id = payment.Id,
            FileCode = payment.FileCode,
            DeptCode = payment.DeptCode,
            Value = payment.Value,
            DateAdded = payment.DateAdded,
            JouralEntry = payment.JouralEntry,
            AlEntry = payment.AlEntry,
            UserAdded = payment.UserAdded,
            FileStatusAfter = payment.FileStatusAfter
        };

        return Ok(paymentDto);
    }

    /// <summary>
    /// إنشاء دفعة جديدة (سند قبض/صرف)
    /// POST: api/payments
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<PaymentDto>> CreatePayment(CreatePaymentDto createDto)
    {
        // استخدام Cloudflare IP
        var clientIp = HttpContext.Connection.RemoteIpAddress?.ToString();
        _logger.LogInformation("CreatePayment called from IP: {Ip}, Amount: {Amount}", clientIp, createDto.Value);

        var payment = new Domain.Entities.Payment
        {
            FileCode = createDto.FileCode,
            DeptCode = createDto.DeptCode,
            Value = createDto.Value,
            JouralEntry = createDto.JouralEntry,
            AlEntry = createDto.AlEntry,
            UserAdded = createDto.UserAdded,
            FileStatusAfter = createDto.FileStatusAfter,
            DateAdded = DateTime.UtcNow
        };

        var created = await _repository.AddAsync(payment);

        // إرسال إشعار SignalR لكل المستخدمين
        await _notificationService.BroadcastToAllAsync("payment:created", new
        {
            paymentId = created.Id,
            fileCode = created.FileCode,
            deptCode = created.DeptCode,
            value = created.Value,
            dateAdded = created.DateAdded
        });

        // أو إرسال لمجموعة معينة (مثلاً: finance-1)
        if (created.DeptCode.HasValue)
        {
            await _notificationService.BroadcastToChannelAsync(
                $"finance-{created.DeptCode}",
                "payment:created",
                new
                {
                    paymentId = created.Id,
                    value = created.Value
                }
            );
        }

        var paymentDto = new PaymentDto
        {
            Id = created.Id,
            FileCode = created.FileCode,
            DeptCode = created.DeptCode,
            Value = created.Value,
            DateAdded = created.DateAdded,
            JouralEntry = created.JouralEntry,
            AlEntry = created.AlEntry,
            UserAdded = created.UserAdded,
            FileStatusAfter = created.FileStatusAfter
        };

        return CreatedAtAction(nameof(GetPayment), new { id = created.Id }, paymentDto);
    }

    /// <summary>
    /// تحديث دفعة
    /// PUT: api/payments/5
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatePayment(int id, CreatePaymentDto updateDto)
    {
        var payment = await _repository.GetByIdAsync(id);

        if (payment == null)
        {
            return NotFound();
        }

        payment.FileCode = updateDto.FileCode ?? payment.FileCode;
        payment.DeptCode = updateDto.DeptCode ?? payment.DeptCode;
        payment.Value = updateDto.Value;
        payment.JouralEntry = updateDto.JouralEntry ?? payment.JouralEntry;
        payment.AlEntry = updateDto.AlEntry ?? payment.AlEntry;
        payment.FileStatusAfter = updateDto.FileStatusAfter ?? payment.FileStatusAfter;

        await _repository.UpdateAsync(payment);

        // إشعار SignalR
        await _notificationService.BroadcastToAllAsync("payment:updated", new
        {
            paymentId = payment.Id
        });

        return NoContent();
    }

    /// <summary>
    /// حذف دفعة
    /// DELETE: api/payments/5
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePayment(int id)
    {
        var payment = await _repository.GetByIdAsync(id);

        if (payment == null)
        {
            return NotFound();
        }

        await _repository.DeleteAsync(payment);

        // إشعار SignalR
        await _notificationService.BroadcastToAllAsync("payment:deleted", new
        {
            paymentId = id
        });

        return NoContent();
    }
}
