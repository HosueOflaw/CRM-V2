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

    [HttpPost]
    public async Task<ActionResult<CustodyStatementDto>> Create(CreateCustodyStatementDto dto)
    {
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
        var result = await _service.CreateAsync(dto, userId);
        return CreatedAtAction(nameof(GetByStatementNo), new { statementNo = result.StatementNo }, result);
    }

    [HttpGet("statement/{statementNo}")]
    public async Task<ActionResult<IEnumerable<CustodyStatementDto>>> GetByStatementNo(string statementNo)
    {
        var result = await _service.GetByStatementNoAsync(statementNo);
        return Ok(result);
    }

    [HttpGet("auto-number/{autoNo}")]
    public async Task<ActionResult<IEnumerable<CustodyStatementDto>>> GetByAutoNo(long autoNo)
    {
        var result = await _service.GetByAutoNoAsync(autoNo);
        return Ok(result);
    }

    [HttpPut("{id}/send-to-acc")]
    public async Task<IActionResult> SendToAcc(int id)
    {
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
        var success = await _service.SendToAccAsync(id, userId);
        if (!success) return NotFound();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var success = await _service.DeleteAsync(id);
        if (!success) return NotFound();
        return NoContent();
    }

    [HttpGet("by-user/{userId:int}")]
    public async Task<ActionResult<IEnumerable<CustodyStatementDto>>> GetByUserAdded(int userId)
    {
        var result = await _service.GetByUserAddedAsync(userId);
        return Ok(result);
    }

    [HttpGet("next-statement-no")]
    public async Task<ActionResult<string>> GetNextStatementNo()
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
