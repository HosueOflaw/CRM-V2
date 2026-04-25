namespace House_of_law_api.Interfaces;

public interface ICustodyStatementRepository : IBaseRepository<CustodyStatement>
{
    Task<IEnumerable<CustodyStatement>> GetByStatementNoAsync(string statementNo);
    Task<IEnumerable<CustodyStatement>> GetByAutoNoAsync(long autoNo);
    Task<IEnumerable<CustodyStatement>> GetReportDataAsync(long? companyCode, int? expenseType);
    Task<IEnumerable<CustodyStatement>> GetByUserAddedAsync(int userId);
    Task<(IEnumerable<CustodyStatement> Items, int TotalCount)> GetPendingAsync(int userId, int page, int pageSize);
    Task<(IEnumerable<CustodyStatement> Items, int TotalCount)> GetTransferredAsync(int userId, int page, int pageSize, DateTime? fromDate = null, DateTime? toDate = null, bool? isReceived = null);
    Task<string> GetLastStatementNoAsync();
}
