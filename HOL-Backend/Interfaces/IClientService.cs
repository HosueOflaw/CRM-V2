using House_of_law_api.DTOs;
using Microsoft.AspNetCore.Http;

namespace House_of_law_api.Interfaces;

public interface IClientService
{
    Task<ClientDto> CreateClientAsync(CreateClientDto createDto);
    Task<ClientDto?> GetClientByIdAsync(long id);
    Task<ClientDto?> GetClientByCodeAsync(int code);
    Task<IEnumerable<ClientDto>> GetAllClientsAsync();
    Task<ClientAttachmentDto> AddAttachmentAsync(long fileCode, IFormFile file, CreateClientAttachmentDto dto);
    Task<bool> DeleteAttachmentAsync(int attachmentId);
    Task<IEnumerable<ClientAttachmentDto>> GetClientAttachmentsAsync(long fileCode);
    Task<IEnumerable<ClientContactDto>> GetClientContactsAsync(long fileCode);
    Task<bool> DeleteContactAsync(int contactId);
}
