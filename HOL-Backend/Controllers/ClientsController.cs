namespace House_of_law_api.Controllers;

/// <summary>
/// Clients Controller - إدارة الموكلين
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class ClientsController : ControllerBase
{
  private readonly IClientService _clientService;
  private readonly INotificationService _notificationService;
  private readonly ILogger<ClientsController> _logger;
  private readonly IAuditService _auditService;

  public ClientsController(
      IClientService clientService,
      INotificationService notificationService,
      ILogger<ClientsController> logger,
      IAuditService auditService)
  {
    _clientService = clientService;
    _notificationService = notificationService;
    _logger = logger;
    _auditService = auditService;
  }

  /// <summary>
  /// جلب كل الموكلين
  /// GET: api/clients
  /// </summary>
  [HttpGet]
  [Authorize]
  public async Task<ActionResult<IEnumerable<ClientDto>>> GetClients()
  {
    var clients = await _clientService.GetAllClientsAsync();
    return Ok(clients);
  }

  /// <summary>
  /// جلب موكل واحد
  /// GET: api/clients/5
  /// </summary>
  [HttpGet("{id}")]
  [Authorize]
  public async Task<ActionResult<ClientDto>> GetClient(long id)
  {
    var client = await _clientService.GetClientByIdAsync(id);
    if (client == null) return NotFound();
    return Ok(client);
  }

  /// <summary>
  /// جلب موكل بالـ Code
  /// GET: api/clients/code/123
  /// </summary>
  [HttpGet("code/{code}")]
  [Authorize]
  public async Task<ActionResult<ClientDto>> GetClientByCode(int code)
  {
    var client = await _clientService.GetClientByCodeAsync(code);
    if (client == null) return NotFound();
    return Ok(client);
  }

  /// <summary>
  /// إنشاء موكل جديد
  /// POST: api/clients
  /// </summary>
  [HttpPost]
  [Authorize]
  public async Task<ActionResult<ClientDto>> CreateClient([FromBody] CreateClientDto createDto)
  {
    // Validate model state
    if (!ModelState.IsValid)
    {
      var errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage);
      _logger.LogWarning("ModelState is invalid: {Errors}", string.Join(", ", errors));
      return BadRequest(new { errors = errors });
    }

    try
    {
      var client = await _clientService.CreateClientAsync(createDto);

      // إشعار SignalR لكل المستخدمين
      // Removed for performance reasons (High Concurrency)
      // await _notificationService.BroadcastToAllAsync("client:created", ...);

      // إشعار لمجموعة معينة (لو عندك deptCode)
      if (createDto.DeptCode.HasValue)
      {
        await _notificationService.BroadcastToChannelAsync(
            $"clients-{createDto.DeptCode}",
            "client:created",
            new { clientId = client.Id, name = client.Name }
        );
      }

      // Audit Log
      await _auditService.LogActionAsync(client.Code, (long?)createDto.DeptCode, "ADD", $"إضافة موكل جديد: {client.Name}", null, "Client", client.Id.ToString());

      // Return the client with 201 Created status
      return StatusCode(201, client);
    }
    catch (InvalidOperationException ex)
    {
      return BadRequest(new { error = ex.Message });
    }
  }

  /// <summary>
  /// رفع مرفق للموكل
  /// POST: api/clients/{fileCode}/attachments
  /// </summary>
  [HttpPost("{fileCode}/attachments")]
  [Authorize]
  [Consumes("multipart/form-data")]
  public async Task<ActionResult<ClientAttachmentDto>> UploadAttachment(
      long fileCode,
      IFormFile file, // Don't use [FromForm] with IFormFile - it causes Swagger errors
      [FromForm] string note = null,
      [FromForm] string attachType = null,
      [FromForm] long? deptCode = null,
      [FromForm] int? userAdded = null)
  {
    var clientIp = HttpContext.Connection.RemoteIpAddress?.ToString();

    if (file == null || file.Length == 0)
    {
      return BadRequest(new { error = "File is required" });
    }

    try
    {
      var dto = new CreateClientAttachmentDto
      {
        FileCode = fileCode,
        DeptCode = deptCode,
        Note = note,
        AttachType = attachType ?? "document",
        UserAdded = userAdded
      };

      var attachment = await _clientService.AddAttachmentAsync(fileCode, file, dto);

      // إشعار SignalR
      await _notificationService.BroadcastToAllAsync("client:attachment_added", new
      {
        fileCode = fileCode,
        attachmentId = attachment.Id,
        fileName = attachment.FileName
      });

      // Audit Log
      await _auditService.LogActionAsync(fileCode, deptCode, "ADD", $"رفع مرفق جديد: {attachment.FileName}", null, "Attachment", attachment.Id.ToString());

      return Ok(attachment);
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "Error uploading attachment");
      return StatusCode(500, new { error = ex.Message });
    }
  }

  /// <summary>
  /// جلب مرفقات الموكل
  /// GET: api/clients/{fileCode}/attachments
  /// </summary>
  [HttpGet("{fileCode}/attachments")]
  [Authorize]
  public async Task<ActionResult<IEnumerable<ClientAttachmentDto>>> GetClientAttachments(long fileCode)
  {
    var attachments = await _clientService.GetClientAttachmentsAsync(fileCode);
    return Ok(attachments);
  }

  /// <summary>
  /// جلب أرقام التواصل للموكل
  /// GET: api/clients/{fileCode}/contacts
  /// </summary>
  [HttpGet("{fileCode}/contacts")]
  [Authorize]
  public async Task<ActionResult<IEnumerable<ClientContactDto>>> GetClientContacts(long fileCode)
  {
    var contacts = await _clientService.GetClientContactsAsync(fileCode);
    return Ok(contacts);
  }

  /// <summary>
  /// حذف رقم تواصل
  /// DELETE: api/clients/contacts/{contactId}
  /// </summary>
  [HttpDelete("contacts/{contactId}")]
  [Authorize]
  public async Task<IActionResult> DeleteContact(int contactId)
  {
    var deleted = await _clientService.DeleteContactAsync(contactId);
    if (!deleted) return NotFound();

    // إشعار SignalR
    await _notificationService.BroadcastToAllAsync("client:contact_deleted", new
    {
      contactId = contactId
    });

    // Audit Log
    await _auditService.LogActionAsync(null, null, "DELETE", $"حذف رقم تواصل للموكل (ID: {contactId})", null, "Contact", contactId.ToString());

    return NoContent();
  }

  /// <summary>
  /// حذف مرفق
  /// DELETE: api/clients/attachments/{attachmentId}
  /// </summary>
  [HttpDelete("attachments/{attachmentId}")]
  [Authorize]
  public async Task<IActionResult> DeleteAttachment(int attachmentId)
  {
    var deleted = await _clientService.DeleteAttachmentAsync(attachmentId);
    if (!deleted) return NotFound();

    // إشعار SignalR
    await _notificationService.BroadcastToAllAsync("client:attachment_deleted", new
    {
      attachmentId = attachmentId
    });

    // Audit Log
    await _auditService.LogActionAsync(null, null, "DELETE", $"حذف مرفق للموكل (ID: {attachmentId})", null, "Attachment", attachmentId.ToString());

    return NoContent();
  }

  /// <summary>
  /// تحميل مرفق
  /// GET: api/clients/attachments/{attachmentId}/download
  /// </summary>
  [HttpGet("attachments/{attachmentId}/download")]
  [Authorize]
  public async Task<IActionResult> DownloadAttachment(int attachmentId)
  {
    var attachment = await _clientService.GetAttachmentByIdAsync(attachmentId);

    if (attachment == null || string.IsNullOrEmpty(attachment.FilePath))
    {
      return NotFound();
    }

    if (!System.IO.File.Exists(attachment.FilePath))
    {
      return NotFound(new { error = "File not found on server" });
    }

    // Use FileStream for efficient memory usage
    var fileStream = new FileStream(attachment.FilePath, FileMode.Open, FileAccess.Read, FileShare.Read);
    var fileName = attachment.FileName ?? Path.GetFileName(attachment.FilePath);

    return File(fileStream, "application/octet-stream", fileName);
  }
}
