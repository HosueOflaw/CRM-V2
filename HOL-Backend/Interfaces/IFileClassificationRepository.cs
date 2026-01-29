
namespace House_of_law_api.Interfaces;

public interface IFileClassificationRepository : IBaseRepository<FileClassification>
{
    Task<IEnumerable<FileClassification>> GetByFileCodeAsync(long fileCode);
}
