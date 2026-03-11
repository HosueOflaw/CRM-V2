using Microsoft.AspNetCore.Http;
using House_of_law_api.DTOs;

namespace House_of_law_api.Interfaces;

public interface ICustodyStatementService
{
    Task<CustodyStatementDto> CreateAsync(CreateCustodyStatementDto dto, int userId);
    Task<IEnumerable<CustodyStatementDto>> GetByStatementNoAsync(string statementNo);
    Task<IEnumerable<CustodyStatementDto>> GetByAutoNoAsync(long autoNo);
    Task<IEnumerable<CustodyStatementDto>> GetReportDataAsync(long? companyCode, int? expenseType);
    Task<bool> UpdateStatusBulkAsync(List<int> ids, bool toCompany, bool toOffice);
    Task<byte[]> GetZippedAttachmentsAsync(List<int> ids);
    Task<IEnumerable<CustodyStatementDto>> GetByUserAddedAsync(int userId);
    Task<string> UploadAttachmentAsync(List<IFormFile> files, long? fileCode, long? deptCode, int userId);
    Task<bool> SendToAccAsync(int id, int userId);
    Task<bool> DeleteAsync(int id);
}
