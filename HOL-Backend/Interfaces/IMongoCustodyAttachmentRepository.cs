using House_of_law_api.Modules;

namespace House_of_law_api.Interfaces;

public interface IMongoCustodyAttachmentRepository
{
    Task<MongoCustodyAttachment> GetByCodeAsync(string code);
    Task<MongoCustodyAttachment> AddAsync(MongoCustodyAttachment entity);
    Task<bool> DeleteAsync(string code);
}
