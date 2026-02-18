

namespace House_of_law_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PaymentsController : ControllerBase
{
    private readonly IPaymentRepository _repository;
    private readonly INotificationService _notificationService;
    private readonly ILogger<PaymentsController> _logger;
    private readonly IAuditService _auditService;

    public PaymentsController(
        IPaymentRepository repository,
        INotificationService notificationService,
        ILogger<PaymentsController> logger,
        IAuditService auditService)
    {
        _repository = repository;
        _notificationService = notificationService;
        _logger = logger;
        _auditService = auditService;
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

        IEnumerable<Payment> payments;

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
            // Performance Guard: Limit to recent 1000 if fetching all
            payments = payments.OrderByDescending(p => p.DateAdded).Take(1000);
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

        var payment = new Payment
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

        // Audit Log (Movement tracking)
        string movementMsg = string.IsNullOrEmpty(created.FileStatusAfter) 
            ? $"إضافة سند دفع بقيمة {created.Value}" 
            : $"إضافة سند دفع بقيمة {created.Value} وتغيير الحالة إلى {created.FileStatusAfter}";
            
        await _auditService.LogActionAsync(
            created.FileCode, 
            created.DeptCode, 
            "STATUS_CHANGE", 
            movementMsg, 
            null, 
            "Payment", 
            created.Id.ToString(),
            created.DateAdded);

        // إرسال إشعار SignalR لكل المستخدمين
        // Removed for performance reasons
        // await _notificationService.BroadcastToAllAsync("payment:created", ...);

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

        // Capture Previous State
        var previousState = new { payment.Value, payment.FileCode, payment.DeptCode, payment.FileStatusAfter };

        payment.FileCode = updateDto.FileCode ?? payment.FileCode;
        payment.DeptCode = updateDto.DeptCode ?? payment.DeptCode;
        payment.Value = updateDto.Value;
        payment.JouralEntry = updateDto.JouralEntry ?? payment.JouralEntry;
        payment.AlEntry = updateDto.AlEntry ?? payment.AlEntry;
        payment.FileStatusAfter = updateDto.FileStatusAfter ?? payment.FileStatusAfter;

        await _repository.UpdateAsync(payment);

        // Audit Log
        await _auditService.LogActionAsync(
            payment.FileCode, 
            payment.DeptCode, 
            "STATUS_CHANGE", 
            $"تحديث سند دفع / حركة ملف (ID: {id}) بواسطة User Update", 
            previousState, 
            "Payment", 
            id.ToString(),
            payment.DateAdded,
            DateTime.UtcNow);

        // إشعار SignalR
        // Removed for performance reasons
        // await _notificationService.BroadcastToAllAsync("payment:updated", ...);

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

        // Audit Log
        await _auditService.LogActionAsync(
            payment.FileCode, 
            payment.DeptCode, 
            "DELETE", 
            $"حذف سند دفع بقيمة {payment.Value}", 
            payment, 
            "Payment", 
            id.ToString());

        // إشعار SignalR
        // Removed for performance reasons
        // await _notificationService.BroadcastToAllAsync("payment:deleted", ...);

        return NoContent();
    }
}
