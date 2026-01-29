
namespace House_of_law_api.Services;

public class ClientService : IClientService
{
    private readonly IMainfileRepository _mainfileRepository;
    private readonly IFileDetailRepository _fileDetailRepository;
    private readonly ICallcenterStatementRepository _callcenterRepository;
    private readonly IAttachmentRepository _attachmentRepository;
    private readonly IAdditionalAmountRepository _additionalAmountRepository;
    private readonly ILogger<ClientService> _logger;
    private readonly string _uploadsPath;

    public ClientService(
        IMainfileRepository mainfileRepository,
        IFileDetailRepository fileDetailRepository,
        ICallcenterStatementRepository callcenterRepository,
        IAttachmentRepository attachmentRepository,
        IAdditionalAmountRepository additionalAmountRepository,
        ILogger<ClientService> logger,
        IWebHostEnvironment environment)
    {
        _mainfileRepository = mainfileRepository;
        _fileDetailRepository = fileDetailRepository;
        _callcenterRepository = callcenterRepository;
        _attachmentRepository = attachmentRepository;
        _additionalAmountRepository = additionalAmountRepository;
        _logger = logger;
        _uploadsPath = Path.Combine(environment.WebRootPath ?? environment.ContentRootPath, "uploads", "attachments");

        // Create uploads directory if it doesn't exist
        if (!Directory.Exists(_uploadsPath))
        {
            Directory.CreateDirectory(_uploadsPath);
        }
    }

    public async Task<ClientDto> CreateClientAsync(CreateClientDto createDto)
    {
        // Check if code already exists
        var existingMainfile = await _mainfileRepository.GetByCodeAsync(createDto.Code);
        if (existingMainfile != null)
        {
            throw new InvalidOperationException($"Client with code {createDto.Code} already exists");
        }

        // Create Mainfile (الموكل الأساسي)
        var mainfile = new Mainfile
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
            DateAdded = DateTime.UtcNow
        };

        var createdMainfile = await _mainfileRepository.AddAsync(mainfile);

        // Create FileDetail (تفاصيل الملف)
        var contractNo = createDto.ContractNumber != null && createDto.ContractYear.HasValue
            ? $"{createDto.ContractNumber}/{createDto.ContractYear}"
            : createDto.ContractNumber;

        var fileDetail = new FileDetail
        {
            FileCode = createdMainfile.Id,
            DeptCode = createDto.DeptCode,
            ContractNo = contractNo,
            LegalPlaintiff = createDto.LegalClaimant,
            Reason = createDto.ContractDetails, // البيان - فقط contractDetails، مش Permissions
            PatchNo = createDto.PatchNo,
            DateFinished = createDto.DateFinished,
            DeptAmount = createDto.DeptAmount,
            LawyerUser = createDto.LawyerUser,
            CourtUser = createDto.CourtUser,
            MdUser = createDto.MdUser,
            LegalAdvisorUser = createDto.LegalAdvisorUser,
            DateAdded = DateTime.UtcNow,
            Client = createDto.Code
        };

        _logger.LogInformation("FileDetail to save: FileCode={FileCode}, Reason={Reason}",
            fileDetail.FileCode, fileDetail.Reason ?? "NULL");

        await _fileDetailRepository.AddAsync(fileDetail);

        _logger.LogInformation("FileDetail saved: Id={Id}, FileCode={FileCode}, Reason={Reason}",
            fileDetail.Id, fileDetail.FileCode, fileDetail.Reason ?? "NULL");

        // Create Contacts (أرقام التواصل)
        int contactsSaved = 0;
        if (createDto.Contacts != null && createDto.Contacts.Any())
        {
            foreach (var contact in createDto.Contacts)
            {
                if (!string.IsNullOrWhiteSpace(contact.Phone))
                {
                    var callcenterStatement = new CallcenterStatement
                    {
                        FileCode = createdMainfile.Id,
                        DeptCode = createDto.DeptCode,
                        PhoneNumber = contact.Phone,
                        PhoneOwner = contact.Relation ?? "", // نسبة القرابة
                        DateAdded = DateTime.UtcNow,
                        UserAdded = createDto.UserAdded
                    };

                    await _callcenterRepository.AddAsync(callcenterStatement);
                    contactsSaved++;
                }
            }
        }

        // Store Financial Entries in AdditionalAmounts table
        int financialEntriesSaved = 0;
        if (createDto.FinancialEntries != null && createDto.FinancialEntries.Any())
        {
            foreach (var financialEntry in createDto.FinancialEntries)
            {
                // Store each value in the Values dictionary as a separate AdditionalAmount record
                if (financialEntry.Values != null)
                {
                    foreach (var valuePair in financialEntry.Values)
                    {
                        if (!string.IsNullOrWhiteSpace(valuePair.Value) &&
                            decimal.TryParse(valuePair.Value, out var amountValue))
                        {
                            var additionalAmount = new AdditionalAmount
                            {
                                FileCode = createdMainfile.Id,
                                DeptCode = createDto.DeptCode,
                                AmountType = $"{financialEntry.Type}_{valuePair.Key}", // e.g., "مقدم_fees"
                                Value = amountValue,
                                UserAdded = createDto.UserAdded,
                                DateAdded = DateTime.UtcNow,
                                Enabled = true
                            };

                            await _additionalAmountRepository.AddAsync(additionalAmount);
                            financialEntriesSaved++;
                        }
                        else
                        {
                            _logger.LogWarning("Skipped invalid financial value: Key={Key}, Value={Value}",
                                valuePair.Key, valuePair.Value);
                        }
                    }
                }
            }
        }

        _logger.LogInformation("Client created successfully: Code={Code}, Name={Name}, Id={Id}, Contacts={Contacts}, FinancialEntries={FinancialEntries}",
            createdMainfile.Code, createdMainfile.Name, createdMainfile.Id, contactsSaved, financialEntriesSaved);

        return new ClientDto
        {
            Id = createdMainfile.Id,
            Code = createdMainfile.Code,
            Name = createdMainfile.Name,
            Cid = createdMainfile.Cid,
            Address = createdMainfile.Address,
            DateAdded = createdMainfile.DateAdded,
            Nationality = createdMainfile.Nationality,
            ContractNo = contractNo,
            LegalPlaintiff = createDto.LegalClaimant,
            Sector = createDto.Sector,
            ContractDetails = createDto.ContractDetails
        };
    }

    public async Task<ClientDto> GetClientByIdAsync(long id)
    {
        var mainfile = await _mainfileRepository.GetByIdAsync(id);
        if (mainfile == null) return null;

        var fileDetail = (await _fileDetailRepository.GetByFileCodeAsync(id)).FirstOrDefault();

        return new ClientDto
        {
            Id = mainfile.Id,
            Code = mainfile.Code,
            Name = mainfile.Name,
            Cid = mainfile.Cid,
            Address = mainfile.Address,
            DateAdded = mainfile.DateAdded,
            Nationality = mainfile.Nationality,
            ContractNo = fileDetail?.ContractNo,
            LegalPlaintiff = fileDetail?.LegalPlaintiff,
            ContractDetails = fileDetail?.Reason
        };
    }

    public async Task<ClientDto> GetClientByCodeAsync(int code)
    {
        var mainfile = await _mainfileRepository.GetByCodeAsync(code);
        if (mainfile == null) return null;

        return await GetClientByIdAsync(mainfile.Id);
    }

    public async Task<IEnumerable<ClientDto>> GetAllClientsAsync()
    {
        // Fixing performance: Limit to recent 1000 records until full pagination is implemented
        var clients = await _mainfileRepository.GetAllClientsOptimizedAsync();
        return clients.Take(1000); 
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

    public async Task<ClientAttachmentDto> AddAttachmentAsync(long fileCode, IFormFile file, CreateClientAttachmentDto dto)
    {
        if (file == null || file.Length == 0)
        {
            throw new ArgumentException("File is required");
        }

        // Generate unique file name
        var fileName = $"{Guid.NewGuid()}_{file.FileName}";
        var filePath = Path.Combine(_uploadsPath, fileName);

        // Save file
        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        // Create attachment record
        var attachment = new Attachment
        {
            FileCode = fileCode,
            DeptCode = dto.DeptCode,
            Notes = dto.Note,
            AttachType = dto.AttachType ?? "document",
            Value = filePath, // Store file path
            AttachCode = fileName,
            UserAdded = dto.UserAdded ?? 1,
            DateAdded = DateTime.UtcNow,
            Enabled = true
        };

        var created = await _attachmentRepository.AddAsync(attachment);

        _logger.LogInformation("Attachment added: FileCode={FileCode}, FileName={FileName}", fileCode, fileName);

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

        // Delete physical file
        if (!string.IsNullOrEmpty(attachment.Value) && File.Exists(attachment.Value))
        {
            try
            {
                File.Delete(attachment.Value);
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Failed to delete file: {FilePath}", attachment.Value);
            }
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
        var statements = await _callcenterRepository.GetByFileCodeAsync(fileCode);

        return statements.Select(s => new ClientContactDto
        {
            Id = s.Id, // Add Id for deletion
            Phone = s.PhoneNumber ?? "",
            Relation = s.PhoneOwner ?? ""
        });
    }

    public async Task<bool> DeleteContactAsync(int contactId)
    {
        var statement = await _callcenterRepository.GetByIdAsync(contactId);
        if (statement == null) return false;

        await _callcenterRepository.DeleteAsync(statement);
        _logger.LogInformation("Deleted contact: Id={Id}, Phone={Phone}", contactId, statement.PhoneNumber);
        return true;
    }
}
