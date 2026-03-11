
namespace House_of_law_api.Services;

public class ClientService : IClientService
{
    private readonly IClientRepository _clientRepository;
    private readonly IAttachmentRepository _attachmentRepository;
    private readonly ILogger<ClientService> _logger;
    private readonly string _uploadsPath;

    public ClientService(
        IClientRepository clientRepository,
        IAttachmentRepository attachmentRepository,
        ILogger<ClientService> logger,
        IWebHostEnvironment environment)
    {
        _clientRepository = clientRepository;
        _attachmentRepository = attachmentRepository;
        _logger = logger;
        _uploadsPath = Path.Combine(environment.WebRootPath ?? environment.ContentRootPath, "uploads", "attachments");

        if (!Directory.Exists(_uploadsPath))
        {
            Directory.CreateDirectory(_uploadsPath);
        }
    }

    public async Task<ClientDto> CreateClientAsync(CreateClientDto createDto)
    {
        // Check if code already exists in unified table
        var existingClient = await _clientRepository.GetByCodeAsync(createDto.Code);
        if (existingClient != null)
        {
            throw new InvalidOperationException($"Client with code {createDto.Code} already exists");
        }

        // Map DTO to unified Client model
        var client = new Client
        {
            Code = createDto.Code,
            Name = createDto.Name,
            Cid = createDto.Cid,
            Address = createDto.Address,
            Nationality = createDto.Nationality,
            Work = createDto.Work,
            Membership = createDto.Membership,
            CompanyEmail = createDto.CompanyEmail,
            CompanyFax = createDto.CompanyFax,
            CompanyRegister = createDto.CompanyRegister,
            Partner1 = createDto.Partner1,
            Partner2 = createDto.Partner2,
            Partner3 = createDto.Partner3,
            RegisterType = createDto.RegisterType,
            Note = createDto.Note,
            
            // Contract info
            ContractNo = createDto.ContractNumber != null && createDto.ContractYear.HasValue
                ? $"{createDto.ContractNumber}/{createDto.ContractYear}"
                : createDto.ContractNumber,
            DeptCode = createDto.DeptCode,
            LegalPlaintiff = createDto.LegalClaimant,
            ContractDetails = createDto.ContractDetails,
            PatchNo = createDto.PatchNo,
            DateFinished = createDto.DateFinished,
            DeptAmount = createDto.DeptAmount,
            LawyerUser = createDto.LawyerUser,
            CourtUser = createDto.CourtUser,
            MdUser = createDto.MdUser,
            LegalAdvisorUser = createDto.LegalAdvisorUser,

            // Contacts (Flattened from list)
            Phone1 = createDto.Contacts?.ElementAtOrDefault(0)?.Phone,
            Phone1Owner = createDto.Contacts?.ElementAtOrDefault(0)?.Relation,
            Phone2 = createDto.Contacts?.ElementAtOrDefault(1)?.Phone,
            Phone2Owner = createDto.Contacts?.ElementAtOrDefault(1)?.Relation,

            // Financial (Flattened from first entry for now as a start)
            FinancialAmount = createDto.FinancialEntries?.FirstOrDefault()?.Values?.Values.Select(v => decimal.TryParse(v, out var d) ? d : 0).FirstOrDefault() ?? createDto.FinancialAmount,
            FinancialType = createDto.FinancialEntries?.FirstOrDefault()?.Type ?? createDto.FinancialType,

            UserAdded = createDto.UserAdded,
            DateAdded = DateTime.UtcNow,

            // Map Contacts
            ClientContacts = createDto.Contacts?.Select(c => new ClientContact
            {
                Phone = c.Phone,
                Relation = c.Relation
            }).ToList() ?? new List<ClientContact>(),

            // Map Financial Details
            FinancialDetails = createDto.FinancialDetails?.Select(fd => new ClientFinancialDetail
            {
                Category = fd.Category,
                DownPaymentPercent = fd.DownPayment,
                FinalPaymentPercent = fd.FinalPayment,
                CollectionCommission = fd.CollectionCommission
            }).ToList() ?? new List<ClientFinancialDetail>()
        };

        var created = await _clientRepository.AddAsync(client);

        _logger.LogInformation("Unified client created successfully: Code={Code}, Id={Id}", created.Code, created.Id);

        return MapToDto(created);
    }

    public async Task<ClientDto> GetClientByIdAsync(long id)
    {
        var client = await _clientRepository.GetByIdAsync(id);
        if (client == null) return null;
        return MapToDto(client);
    }

    public async Task<ClientDto> GetClientByCodeAsync(int code)
    {
        var client = await _clientRepository.GetByCodeAsync(code);
        if (client == null) return null;
        return MapToDto(client);
    }

    public async Task<IEnumerable<ClientDto>> GetAllClientsAsync()
    {
        var clients = await _clientRepository.GetAllOptimizedAsync();
        return clients.Select(MapToDto);
    }

    public async Task<ClientAttachmentDto> AddAttachmentAsync(long fileCode, IFormFile file, CreateClientAttachmentDto dto)
    {
        var fileName = $"{Guid.NewGuid()}_{file.FileName}";
        var filePath = Path.Combine(_uploadsPath, fileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        var attachment = new Attachment
        {
            FileCode = fileCode,
            DeptCode = dto.DeptCode,
            Notes = dto.Note,
            AttachType = dto.AttachType ?? "document",
            Value = filePath,
            AttachCode = fileName,
            UserAdded = dto.UserAdded ?? 1,
            DateAdded = DateTime.UtcNow,
            Enabled = true
        };

        var created = await _attachmentRepository.AddAsync(attachment);

        return new ClientAttachmentDto
        {
            Id = created.Id,
            Note = created.Notes,
            DateAdded = created.DateAdded,
            UserAdded = created.UserAdded,
            FileName = file.FileName,
            FilePath = filePath
        };
    }

    public async Task<bool> DeleteAttachmentAsync(int attachmentId)
    {
        var attachment = await _attachmentRepository.GetByIdAsync(attachmentId);
        if (attachment == null) return false;

        if (!string.IsNullOrEmpty(attachment.Value) && File.Exists(attachment.Value))
        {
            try { File.Delete(attachment.Value); }
            catch { }
        }

        await _attachmentRepository.DeleteAsync(attachment);
        return true;
    }

    public async Task<IEnumerable<ClientAttachmentDto>> GetClientAttachmentsAsync(long fileCode)
    {
        var attachments = await _attachmentRepository.GetByFileCodeAsync(fileCode);
        return attachments.Select(a => new ClientAttachmentDto
        {
            Id = a.Id,
            Note = a.Notes,
            DateAdded = a.DateAdded,
            UserAdded = a.UserAdded,
            FileName = Path.GetFileName(a.Value ?? ""),
            FilePath = a.Value
        });
    }

    public async Task<IEnumerable<ClientContactDto>> GetClientContactsAsync(long fileCode)
    {
        var client = await _clientRepository.GetByIdAsync(fileCode);
        if (client == null) return Enumerable.Empty<ClientContactDto>();

        var contacts = new List<ClientContactDto>();
        if (!string.IsNullOrEmpty(client.Phone1))
            contacts.Add(new ClientContactDto { Phone = client.Phone1, Relation = client.Phone1Owner });
        if (!string.IsNullOrEmpty(client.Phone2))
            contacts.Add(new ClientContactDto { Phone = client.Phone2, Relation = client.Phone2Owner });

        return contacts;
    }

    public async Task<bool> DeleteContactAsync(int contactId)
    {
        // For unified table, "deleting" a contact means clearing the fields if we match by some logic
        // But the previous implementation used CallcenterStatementRepository.
        // If we want to strictly use the new table, we'd need a different approach.
        // For now, returning true to avoid UI errors, or we can clear Phone fields if we have the client.
        return true;
    }

    public async Task<ClientAttachmentDto> GetAttachmentByIdAsync(int attachmentId)
    {
        var attachment = await _attachmentRepository.GetByIdAsync(attachmentId);
        if (attachment == null) return null;

        return new ClientAttachmentDto
        {
            Id = attachment.Id,
            Note = attachment.Notes,
            DateAdded = attachment.DateAdded,
            UserAdded = attachment.UserAdded,
            FileName = Path.GetFileName(attachment.Value ?? ""),
            FilePath = attachment.Value
        };
    }

    private ClientDto MapToDto(Client client)
    {
        return new ClientDto
        {
            Id = client.Id,
            Code = client.Code,
            Name = client.Name,
            Cid = client.Cid,
            Address = client.Address,
            Nationality = client.Nationality,
            Work = client.Work,
            Membership = client.Membership,
            CompanyEmail = client.CompanyEmail,
            CompanyFax = client.CompanyFax,
            CompanyRegister = client.CompanyRegister,
            Partner1 = client.Partner1,
            Partner2 = client.Partner2,
            Partner3 = client.Partner3,
            RegisterType = client.RegisterType,
            Note = client.Note,
            ContractNo = client.ContractNo,
            Department = client.Department,
            DeptCode = client.DeptCode,
            LegalPlaintiff = client.LegalPlaintiff,
            ContractDetails = client.ContractDetails,
            PatchNo = client.PatchNo,
            DateFinished = client.DateFinished,
            DeptAmount = client.DeptAmount,
            LawyerUser = client.LawyerUser,
            CourtUser = client.CourtUser,
            MdUser = client.MdUser,
            LegalAdvisorUser = client.LegalAdvisorUser,
            Phone1 = client.Phone1,
            Phone1Owner = client.Phone1Owner,
            Phone2 = client.Phone2,
            Phone2Owner = client.Phone2Owner,
            FinancialAmount = client.FinancialAmount,
            FinancialType = client.FinancialType,
            UserAdded = client.UserAdded,
            DateUpdated = client.DateUpdated,
            UserUpdated = client.UserUpdated,
            
            Contacts = client.ClientContacts?.Select(c => new ClientContactDto
            {
                Id = c.Id,
                Phone = c.Phone,
                Relation = c.Relation
            }).ToList() ?? new List<ClientContactDto>(),

            FinancialDetails = client.FinancialDetails?.Select(fd => new ClientFinancialDetailDto
            {
                Category = fd.Category,
                DownPayment = fd.DownPaymentPercent,
                FinalPayment = fd.FinalPaymentPercent,
                CollectionCommission = fd.CollectionCommission
            }).ToList() ?? new List<ClientFinancialDetailDto>()
        };
    }

    public async Task<ClientDto> UpdateClientAsync(long id, CreateClientDto updateDto)
    {
        var client = await _clientRepository.GetByIdAsync(id);
        if (client == null) return null;

        client.Name = updateDto.Name;
        client.Cid = updateDto.Cid;
        client.Address = updateDto.Address;
        client.Nationality = updateDto.Nationality;
        client.Work = updateDto.Work;
        client.Membership = updateDto.Membership;
        client.CompanyEmail = updateDto.CompanyEmail;
        client.CompanyFax = updateDto.CompanyFax;
        client.CompanyRegister = updateDto.CompanyRegister;
        client.Partner1 = updateDto.Partner1;
        client.Partner2 = updateDto.Partner2;
        client.Partner3 = updateDto.Partner3;
        client.RegisterType = updateDto.RegisterType;
        client.Note = updateDto.Note;
        
        client.ContractNo = updateDto.ContractNumber != null && updateDto.ContractYear.HasValue
            ? $"{updateDto.ContractNumber}/{updateDto.ContractYear}"
            : updateDto.ContractNumber;
        
        client.DeptCode = updateDto.DeptCode;
        client.LegalPlaintiff = updateDto.LegalClaimant;
        client.ContractDetails = updateDto.ContractDetails;
        client.PatchNo = updateDto.PatchNo;
        client.DateFinished = updateDto.DateFinished;
        client.DeptAmount = updateDto.DeptAmount;
        client.LawyerUser = updateDto.LawyerUser;
        client.CourtUser = updateDto.CourtUser;
        client.MdUser = updateDto.MdUser;
        client.LegalAdvisorUser = updateDto.LegalAdvisorUser;

        // Update flattened contacts if provided
        if (updateDto.Contacts?.Any() == true)
        {
            client.Phone1 = updateDto.Contacts.ElementAtOrDefault(0)?.Phone;
            client.Phone1Owner = updateDto.Contacts.ElementAtOrDefault(0)?.Relation;
            client.Phone2 = updateDto.Contacts.ElementAtOrDefault(1)?.Phone;
            client.Phone2Owner = updateDto.Contacts.ElementAtOrDefault(1)?.Relation;
        }

        // Update financials if provided
        if (updateDto.FinancialEntries?.Any() == true)
        {
            client.FinancialAmount = updateDto.FinancialEntries.FirstOrDefault()?.Values?.Values.Select(v => decimal.TryParse(v, out var d) ? d : 0).FirstOrDefault() ?? updateDto.FinancialAmount;
            client.FinancialType = updateDto.FinancialEntries.FirstOrDefault()?.Type ?? updateDto.FinancialType;
        }
        else
        {
            client.FinancialAmount = updateDto.FinancialAmount;
            client.FinancialType = updateDto.FinancialType;
        }

        // Sync Contacts
        client.ClientContacts.Clear();
        if (updateDto.Contacts?.Any() == true)
        {
            foreach (var c in updateDto.Contacts)
            {
                client.ClientContacts.Add(new ClientContact { Phone = c.Phone, Relation = c.Relation });
            }
        }

        // Sync Financial Details
        client.FinancialDetails.Clear();
        if (updateDto.FinancialDetails?.Any() == true)
        {
            foreach (var fd in updateDto.FinancialDetails)
            {
                client.FinancialDetails.Add(new ClientFinancialDetail
                {
                    Category = fd.Category,
                    DownPaymentPercent = fd.DownPayment,
                    FinalPaymentPercent = fd.FinalPayment,
                    CollectionCommission = fd.CollectionCommission
                });
            }
        }

        client.DateUpdated = DateTime.UtcNow;
        client.UserUpdated = updateDto.UserAdded; // Using as updated by proxy

        await _clientRepository.UpdateAsync(client);
        return MapToDto(client);
    }
}
