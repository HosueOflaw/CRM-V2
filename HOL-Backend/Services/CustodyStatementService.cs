#nullable enable
using Microsoft.AspNetCore.Hosting;
using System.IO.Compression;
using House_of_law_api.DTOs;
using House_of_law_api.Interfaces;
using House_of_law_api.Modules;

namespace House_of_law_api.Services;

public class CustodyStatementService : ICustodyStatementService
{
  private readonly ICustodyStatementRepository _repository;
  private readonly IAttachmentRepository _attachmentRepository;
  private readonly IMongoCustodyAttachmentRepository _mongoAttachmentRepository;
  private readonly ILogger<CustodyStatementService> _logger;
  private readonly string _uploadsPath;

  private readonly Dictionary<int, string> _expenseTypes = new()
    {
        { 1, "اجراءات قضائية" },
        { 2, "شهادات - معلومات مدنية" },
        { 3, "رسوم قضائية" },
        { 4, "تصوير ومصروفات ادارية" },
        { 5, "ايجار كرين" },
        { 6, "مصروفات غير مستردة" }
    };

  public CustodyStatementService(
      ICustodyStatementRepository repository,
      IAttachmentRepository attachmentRepository,
      IMongoCustodyAttachmentRepository mongoAttachmentRepository,
      ILogger<CustodyStatementService> logger,
      IWebHostEnvironment environment)
  {
    _repository = repository;
    _attachmentRepository = attachmentRepository;
    _mongoAttachmentRepository = mongoAttachmentRepository;
    _logger = logger;
    _uploadsPath = Path.Combine(environment.WebRootPath ?? environment.ContentRootPath, "uploads", "attachments");

    try
    {
      if (!Directory.Exists(_uploadsPath))
      {
        Directory.CreateDirectory(_uploadsPath);
      }
    }
    catch (Exception ex)
    {
      _logger.LogWarning(ex, "Could not create uploads path {Path}. This might be fine if using MongoDB only.", _uploadsPath);
    }
  }

  public async Task<CustodyStatementDto> CreateAsync(CreateCustodyStatementDto dto, int userId)
  {
    var entity = new CustodyStatement
    {
      FileCode = dto.FileCode,
      DeptCode = dto.DeptCode,
      CodeAttach = dto.CodeAttach,
      CodeExpense = dto.CodeExpense,
      StatementNo = dto.StatementNo,
      Amount = dto.Amount,
      CodeAutoNo = dto.CodeAutoNo,
      CodeStatus = dto.CodeStatus,
      ClientName = dto.ClientName,
      Notes = dto.Notes,
      SendToACC = dto.SendToACC,
      CompanyOrOffice = dto.CompanyOrOffice,
      CompanyCode = dto.CompanyCode,
      CivilId = dto.CivilId,
      PhoneNumber = dto.PhoneNumber,
      Court = dto.Court,
      ContractNo = dto.ContractNo,
      PersonName = dto.PersonName,
      DateAdded = dto.DateAdded ?? DateTime.Now,
      UserAdded = userId,
      Enabled = true
    };

    var created = await _repository.AddAsync(entity);
    return MapToDto(created);
  }
  
  public async Task<CustodyStatementDto?> GetByIdAsync(int id)
  {
    var entity = await _repository.GetByIdAsync(id);
    return entity != null ? MapToDto(entity) : null;
  }

  public async Task<(IEnumerable<CustodyStatementDto> Items, int TotalCount)> GetPendingAsync(int userId, int page, int pageSize)
  {
    var (entities, totalCount) = await _repository.GetPendingAsync(userId, page, pageSize);
    var dtos = entities.Select(MapToDto).ToList();
    
    foreach (var dto in dtos)
    {
      await PopulateAttachmentsAsync(dto);
    }
    
    return (dtos, totalCount);
  }

  public async Task<(IEnumerable<CustodyStatementDto> Items, int TotalCount)> GetTransferredAsync(int userId, int page, int pageSize, DateTime? fromDate = null, DateTime? toDate = null, bool? isReceived = null)
  {
    var (entities, totalCount) = await _repository.GetTransferredAsync(userId, page, pageSize, fromDate, toDate, isReceived);
    var dtos = entities.Select(MapToDto).ToList();

    foreach (var dto in dtos)
    {
      await PopulateAttachmentsAsync(dto);
    }

    return (dtos, totalCount);
  }

  private async Task PopulateAttachmentsAsync(CustodyStatementDto dto)
  {
    if (string.IsNullOrEmpty(dto.CodeAttach)) return;

    var codes = dto.CodeAttach.Split(',', StringSplitOptions.RemoveEmptyEntries);
    
    foreach (var code in codes)
    {
      var mongoAttach = await _mongoAttachmentRepository.GetByCodeAsync(code);
      if (mongoAttach != null)
      {
        dto.Attachments.Add(new AttachmentDto
        {
          Id = 0,
          AttachCode = mongoAttach.Code,
          AttachType = "custody",
          FileContent = mongoAttach.Content
        });
      }
    }
  }

  public async Task<IEnumerable<CustodyStatementDto>> GetByStatementNoAsync(string statementNo)
  {
    var entities = await _repository.GetByStatementNoAsync(statementNo);
    return entities.Select(MapToDto);
  }

  public async Task<IEnumerable<CustodyStatementDto>> GetByAutoNoAsync(long autoNo)
  {
    var entities = await _repository.GetByAutoNoAsync(autoNo);
    if (entities == null || !entities.Any()) return Enumerable.Empty<CustodyStatementDto>();

    var dtos = entities.Select(MapToDto).ToList();

    foreach (var dto in dtos)
    {
      if (!string.IsNullOrEmpty(dto.CodeAttach))
      {
        var codes = dto.CodeAttach.Split(',', StringSplitOptions.RemoveEmptyEntries);
        foreach (var code in codes)
        {
          var mongoAttach = await _mongoAttachmentRepository.GetByCodeAsync(code);
          if (mongoAttach != null)
          {
            dto.Attachments.Add(new AttachmentDto
            {
              AttachCode = mongoAttach.Code,
              AttachType = "custody",
              FileContent = mongoAttach.Content
            });
          }
        }
      }
    }

    return dtos;
  }

  public async Task<bool> SendToAccAsync(int id, int userId)
  {
    var entity = await _repository.GetByIdAsync(id);
    if (entity == null) return false;

    entity.SendToACC = true;
    entity.UserSec = userId;
    // Logic for setting other flags or dates can go here

    await _repository.UpdateAsync(entity);
    return true;
  }

  public async Task<bool> UpdateAsync(int id, CreateCustodyStatementDto dto)
  {
    var entity = await _repository.GetByIdAsync(id);
    if (entity == null) return false;

    entity.FileCode = dto.FileCode;
    entity.DeptCode = dto.DeptCode;
    entity.CodeAttach = dto.CodeAttach;
    entity.CodeExpense = dto.CodeExpense;
    entity.StatementNo = dto.StatementNo;
    entity.Amount = dto.Amount;
    entity.CodeAutoNo = dto.CodeAutoNo;
    entity.CodeStatus = dto.CodeStatus;
    entity.Notes = dto.Notes;
    entity.ClientName = dto.ClientName;
    entity.CompanyOrOffice = dto.CompanyOrOffice;
    entity.CompanyCode = dto.CompanyCode;
    entity.CivilId = dto.CivilId;
    entity.PhoneNumber = dto.PhoneNumber;
    entity.Court = dto.Court;
    entity.ContractNo = dto.ContractNo;
    entity.PersonName = dto.PersonName;

    await _repository.UpdateAsync(entity);
    return true;
  }

  public async Task<bool> DeleteAsync(int id)
  {
    var entity = await _repository.GetByIdAsync(id);
    if (entity == null) return false;

    entity.Enabled = false;
    await _repository.UpdateAsync(entity);
    return true;
  }

  public async Task<string> UploadAttachmentAsync(List<IFormFile> files, long? fileCode, long? deptCode, int userId)
  {
    if (files == null || files.Count == 0)
    {
      throw new ArgumentException("No files provided");
    }

    var codes = new List<string>();

    foreach (var file in files)
    {
      if (file.Length == 0) continue;

      using var memoryStream = new MemoryStream();
      await file.CopyToAsync(memoryStream);
      var fileBytes = memoryStream.ToArray();

      var attachmentCode = Guid.NewGuid().ToString("N");

      var mongoAttachment = new MongoCustodyAttachment
      {
        Code = attachmentCode,
        FileName = file.FileName,
        Content = fileBytes,
        UserId = userId,
        UploadDate = DateTime.UtcNow
      };

      try
      {
        await _mongoAttachmentRepository.AddAsync(mongoAttachment);
        codes.Add(attachmentCode);
        _logger.LogInformation("Attachment {FileName} uploaded to MongoDB with code {Code}", file.FileName, attachmentCode);
      }
      catch (Exception ex)
      {
        _logger.LogError(ex, "Failed to save attachment {FileName} to MongoDB", file.FileName);
        // Re-throw to be caught by controller and return 500 with message
        throw new Exception($"خطأ في حفظ المرفق في MongoDB: {ex.Message}", ex);
      }
    }

    return string.Join(",", codes);
  }

  public async Task<IEnumerable<CustodyStatementDto>> GetReportDataAsync(long? companyCode, int? expenseType)
  {
    var entities = await _repository.GetReportDataAsync(companyCode, expenseType);
    var dtos = entities.Select(MapToDto).ToList();

    foreach (var dto in dtos)
    {
      if (!string.IsNullOrEmpty(dto.CodeAttach))
      {
        var codes = dto.CodeAttach.Split(',', StringSplitOptions.RemoveEmptyEntries);
        foreach (var code in codes)
        {
          var mongoAttach = await _mongoAttachmentRepository.GetByCodeAsync(code);
          if (mongoAttach != null)
          {
            dto.Attachments.Add(new AttachmentDto
            {
              AttachCode = mongoAttach.Code,
              AttachType = "custody",
              FileContent = mongoAttach.Content
            });
          }
        }
      }
    }
    return dtos;
  }

  public async Task<IEnumerable<CustodyStatementDto>> GetByUserAddedAsync(int userId)
  {
    var entities = await _repository.GetByUserAddedAsync(userId);
    var dtos = entities.Select(MapToDto).ToList();
    foreach (var dto in dtos)
    {
      if (!string.IsNullOrEmpty(dto.CodeAttach))
      {
        var codes = dto.CodeAttach.Split(',', StringSplitOptions.RemoveEmptyEntries);
        foreach (var code in codes)
        {
          var mongoAttach = await _mongoAttachmentRepository.GetByCodeAsync(code);
          if (mongoAttach != null)
          {
            dto.Attachments.Add(new AttachmentDto
            {
              AttachCode = mongoAttach.Code,
              AttachType = "custody",
              FileContent = mongoAttach.Content
            });
          }
        }
      }
    }
    return dtos;
  }

  public async Task<string> GetNextStatementNoAsync()
  {
    var lastNo = await _repository.GetLastStatementNoAsync();
    if (string.IsNullOrEmpty(lastNo))
    {
      return "CS-1000";
    }

    try
    {
      if (lastNo.StartsWith("CS-") && int.TryParse(lastNo.Substring(3), out int numericPart))
      {
        return $"CS-{numericPart + 1}";
      }
    }
    catch
    {
      // Fallback
    }

    return "CS-1000";
  }


  public async Task<bool> UpdateSendToAccAsync(int id, bool sendToAcc)
  {
    var entity = await _repository.GetByIdAsync(id);
    if (entity == null) return false;

    entity.SendToACC = sendToAcc;
    await _repository.UpdateAsync(entity);
    return true;
  }

  public async Task<bool> UpdateReceiveAccAsync(int id, bool receiveAcc)
  {
    var entity = await _repository.GetByIdAsync(id);
    if (entity == null) return false;

    entity.ReceiveAcc = receiveAcc;
    await _repository.UpdateAsync(entity);
    return true;
  }

  public async Task<bool> UpdateStatusBulkAsync(List<int> ids, bool toCompany, bool toOffice)
  {
    if (ids == null || !ids.Any()) return false;

    foreach (var id in ids)
    {
      var entity = await _repository.GetByIdAsync(id);
      if (entity != null)
      {
        if (toCompany) entity.SendToCompany = true;
        if (toOffice) entity.CompanyOrOffice = true;
        await _repository.UpdateAsync(entity);
      }
    }
    return true;
  }

  public async Task<byte[]> GetZippedAttachmentsAsync(List<int> ids)
  {
    if (ids == null || !ids.Any()) return null;

    using var ms = new MemoryStream();
    using (var archive = new ZipArchive(ms, ZipArchiveMode.Create, true))
    {
      foreach (var id in ids)
      {
        var entity = await _repository.GetByIdAsync(id);
        if (entity != null && !string.IsNullOrEmpty(entity.CodeAttach))
        {
          var codes = entity.CodeAttach.Split(',', StringSplitOptions.RemoveEmptyEntries);
          foreach (var code in codes)
          {
            var mongoAttach = await _mongoAttachmentRepository.GetByCodeAsync(code);
            if (mongoAttach != null && mongoAttach.Content != null)
            {
              var entryName = $"{entity.Id}_{mongoAttach.FileName}";
              var entry = archive.CreateEntry(entryName);
              using var entryStream = entry.Open();
              await entryStream.WriteAsync(mongoAttach.Content, 0, mongoAttach.Content.Length);
            }
          }
        }
      }
    }
    return ms.ToArray();
  }

  private CustodyStatementDto MapToDto(CustodyStatement entity)
  {
    return new CustodyStatementDto
    {
      Id = entity.Id,
      FileCode = entity.FileCode,
      DeptCode = entity.DeptCode,
      CodeAttach = entity.CodeAttach,
      CodeExpense = entity.CodeExpense,
      StatementNo = entity.StatementNo,
      Amount = entity.Amount,
      CodeAutoNo = entity.CodeAutoNo,
      CodeStatus = entity.CodeStatus,
      SendToACC = entity.SendToACC,
      SendToCompany = entity.SendToCompany,
      ReceiveSec = entity.ReceiveSec,
      ReceiveAcc = entity.ReceiveAcc,
      DateAdded = entity.DateAdded,
      UserAdded = entity.UserAdded,
      ClientName = entity.ClientName,
      Notes = entity.Notes,
      CompanyOrOffice = entity.CompanyOrOffice,
      CompanyCode = entity.CompanyCode,
      CivilId = entity.CivilId,
      PhoneNumber = entity.PhoneNumber,
      Court = entity.Court,
      ContractNo = entity.ContractNo,
      PersonName = entity.PersonName,
      ExpenseName = entity.CodeExpense.HasValue && _expenseTypes.ContainsKey(entity.CodeExpense.Value)
            ? _expenseTypes[entity.CodeExpense.Value]
            : "غير معروف"
    };
  }
}
