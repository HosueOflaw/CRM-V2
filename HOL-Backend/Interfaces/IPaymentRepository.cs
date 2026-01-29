
namespace House_of_law_api.Interfaces;

/// <summary>
/// Payment Repository Interface - عمليات خاصة بالمدفوعات
/// </summary>
public interface IPaymentRepository : IBaseRepository<Payment>
{
    Task<IEnumerable<Payment>> GetByFileCodeAsync(long fileCode);
    Task<IEnumerable<Payment>> GetByDeptCodeAsync(long deptCode);
    Task<IEnumerable<Payment>> GetByDateRangeAsync(DateTime startDate, DateTime endDate);
    Task<decimal> GetTotalByFileCodeAsync(long fileCode);
    Task<decimal> GetTotalByDeptCodeAsync(long deptCode);
}
