using House_of_law_api.DTOs;
using House_of_law_api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace House_of_law_api.Controllers;

[ApiController]
[Route("api/CustodyStatements")]
[Authorize]
public class CustodyStatementsController : ControllerBase
{
    private readonly ICustodyStatementService _service;
    private readonly ILogger<CustodyStatementsController> _logger;

    public CustodyStatementsController(ICustodyStatementService service, ILogger<CustodyStatementsController> logger)
    {
        _service = service;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CustodyStatementDto>>> GetAll()
    {
        var result = await _service.GetReportDataAsync(null, null);
        return Ok(result);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<CustodyStatementDto>> GetById(int id)
    {
        var result = await _service.GetByIdAsync(id);
        if (result == null) return NotFound();
        return Ok(result);
    }

    [HttpGet("pending")]
    public async Task<ActionResult<IEnumerable<CustodyStatementDto>>> GetPending(int page = 1, int pageSize = 5)
    {
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
        var (items, totalCount) = await _service.GetPendingAsync(userId, page, pageSize);
        
        return Ok(new { items, totalCount });
    }

    [HttpGet("transferred")]
    public async Task<ActionResult<IEnumerable<CustodyStatementDto>>> GetTransferred(int page = 1, int pageSize = 5)
    {
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
        var (items, totalCount) = await _service.GetTransferredAsync(userId, page, pageSize);
        
        return Ok(new { items, totalCount });
    }

    [HttpGet("by-user/{userId:int}")]
    public async Task<ActionResult<object>> GetByUserId(int userId, int page = 1, int pageSize = 10, DateTime? fromDate = null, DateTime? toDate = null, bool? isReceived = null)
    {
        var (items, totalCount) = await _service.GetTransferredAsync(userId, page, pageSize, fromDate, toDate, isReceived);
        return Ok(new { items, totalCount });
    }

    [HttpPost("{id:int}/send-to-acc")]
    public async Task<IActionResult> SendToAcc(int id)
    {
        var success = await _service.UpdateSendToAccAsync(id, true);
        if (!success) return NotFound();
        return NoContent();
    }

    [HttpPost("{id:int}/receive-acc")]
    public async Task<IActionResult> ReceiveAcc(int id)
    {
        var success = await _service.UpdateReceiveAccAsync(id, true);
        if (!success) return NotFound();
        return NoContent();
    }

    [HttpPost]
    public async Task<ActionResult<CustodyStatementDto>> Create([FromBody] CreateCustodyStatementDto dto)
    {
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
        var result = await _service.CreateAsync(dto, userId);
        return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
    }

    [HttpPost("update/{id:int}")]
    public async Task<IActionResult> Update(int id, [FromBody] CreateCustodyStatementDto dto)
    {
        var success = await _service.UpdateAsync(id, dto);
        if (!success) return BadRequest("Failed to update record");
        return NoContent();
    }


    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var success = await _service.DeleteAsync(id);
        if (!success) return BadRequest("Failed to delete record");
        return NoContent();
    }

    [HttpGet("next-statement-no")]
    public async Task<ActionResult<object>> GetNextStatementNo()
    {
        var result = await _service.GetNextStatementNoAsync();
        return Ok(new { statementNo = result });
    }

    [HttpGet("report")]
    public async Task<ActionResult<IEnumerable<CustodyStatementDto>>> GetReport(long? companyCode, int? expenseType)
    {
        var result = await _service.GetReportDataAsync(companyCode, expenseType);
        return Ok(result);
    }

    [HttpPost("bulk-update")]
    public async Task<IActionResult> UpdateStatusBulk([FromBody] BulkUpdateDto dto)
    {
        var success = await _service.UpdateStatusBulkAsync(dto.Ids, dto.ToCompany, dto.ToOffice);
        if (!success) return BadRequest("Failed to update status");
        return NoContent();
    }

    [HttpPost("download-zip")]
    public async Task<IActionResult> DownloadZip([FromBody] List<int> ids)
    {
        var zipBytes = await _service.GetZippedAttachmentsAsync(ids);
        if (zipBytes == null) return NotFound("No attachments found for selection");
        return File(zipBytes, "application/zip", $"Attachments_{DateTime.Now:yyyyMMddHHmmss}.zip");
    }

    [HttpPost("upload-attachment")]
    [Consumes("multipart/form-data")]
    public async Task<ActionResult<string>> UploadAttachment(
        [FromForm] List<IFormFile> files,
        [FromForm] long? fileCode = null,
        [FromForm] long? deptCode = null)
    {
        if (files == null || files.Count == 0)
        {
            return BadRequest("Files are required");
        }

        try
        {
            var userIdStr = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userIdStr) || !int.TryParse(userIdStr, out var userId))
            {
                return Unauthorized("User ID claim missing or invalid");
            }
            
            var attachmentCode = await _service.UploadAttachmentAsync(files, fileCode, deptCode, userId);
            return Ok(new { code = attachmentCode });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error uploading custody attachments");
            return StatusCode(500, new { error = ex.Message });
        }
    }
}
