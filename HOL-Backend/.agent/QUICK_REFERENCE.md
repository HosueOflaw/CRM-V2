# ⚡ Quick Reference - House of Law CRM Backend

## 🎯 نظرة سريعة

**House of Law CRM Backend** هو نظام إدارة علاقات العملاء لمكتب قانوني، مبني على:
- **.NET 8.0** (ASP.NET Core Web API)
- **Entity Framework Core 8.0**
- **SQL Server**
- **JWT Authentication**
- **SignalR** (Real-time notifications)

---

## 📂 الملفات الأساسية

```
HOL-Backend/
├── Program.cs                 # نقطة البداية - Configuration
├── appsettings.json          # الإعدادات (DB, JWT, CORS)
├── Controllers/              # API Endpoints
├── Services/                 # Business Logic
├── Repositories/             # Data Access
├── Domain/Entities/          # Database Models
├── DTOs/                     # Data Transfer Objects
├── Infrastructure/           # SignalR, Cloudflare, Swagger
└── Data/                     # DbContext & Migrations
```

---

## 🔑 المفاهيم الأساسية

### **1. الموكل (Client)**
```
Mainfile (البيانات الأساسية)
    ├── FileDetail (تفاصيل الملف القانوني)
    ├── Payments (المدفوعات)
    ├── Attachments (المرفقات)
    ├── CallcenterStatements (أرقام التواصل)
    ├── AdditionalAmounts (البيانات المالية)
    ├── Notes (الملاحظات)
    └── Mails (الرسائل)
```

### **2. تدفق البيانات**
```
Controller → Service → Repository → Database
```

### **3. المصادقة**
```
Login → JWT Token → Authorization Header
```

---

## 🚀 Quick Start

### **1. تشغيل المشروع:**
```bash
cd c:\CRM-V2\HOL-Backend
dotnet run
```

### **2. الوصول إلى Swagger:**
```
http://localhost:5000/swagger
```

### **3. تسجيل الدخول:**
```bash
POST http://localhost:5000/api/auth/login
{
  "username": "admin",
  "password": "password123"
}
```

### **4. استخدام Token:**
```
Authorization: Bearer {token}
```

---

## 📡 API Endpoints (أهم 10)

| Method | Endpoint | الوصف |
|--------|----------|-------|
| POST | `/api/auth/login` | تسجيل الدخول |
| GET | `/api/clients` | جلب كل الموكلين |
| POST | `/api/clients` | إنشاء موكل جديد |
| GET | `/api/clients/{id}` | جلب موكل واحد |
| POST | `/api/clients/{fileCode}/attachments` | رفع مرفق |
| GET | `/api/payments` | جلب كل المدفوعات |
| POST | `/api/payments` | إنشاء دفعة جديدة |
| GET | `/api/users` | جلب كل المستخدمين |
| GET | `/api/departments` | جلب كل الأقسام |
| POST | `/api/notes` | إضافة ملاحظة |

**للتفاصيل الكاملة:** راجع `API_ENDPOINTS.md`

---

## 🗄️ Database Tables (أهم 7)

| Table | الوصف | Primary Key |
|-------|-------|-------------|
| `mainfiles` | الموكلين الأساسيين | `id` |
| `file_details` | تفاصيل الملفات القانونية | `id` |
| `payments` | المدفوعات | `id` |
| `attachments` | المرفقات | `id` |
| `callcenter_statements` | أرقام التواصل | `id` |
| `users` | المستخدمين | `id` |
| `departments` | الأقسام | `id` |

**للتفاصيل الكاملة:** راجع `DATABASE_SCHEMA.md`

---

## 🔐 Security Checklist

### ✅ **موجود:**
- [x] JWT Authentication
- [x] BCrypt Password Hashing
- [x] CORS Configuration
- [x] HTTPS Redirection (Production)
- [x] SQL Injection Protection (EF Core)
- [x] Cloudflare Integration

### ⚠️ **يحتاج إضافة:**
- [ ] Rate Limiting
- [ ] File Upload Validation
- [ ] Input Validation (FluentValidation)
- [ ] API Versioning

---

## 📊 SignalR Events

| Event | متى يحدث |
|-------|----------|
| `client:created` | إضافة موكل جديد |
| `client:attachment_added` | إضافة مرفق |
| `client:attachment_deleted` | حذف مرفق |
| `client:contact_deleted` | حذف رقم تواصل |
| `payment:created` | إضافة دفعة |
| `payment:updated` | تحديث دفعة |
| `payment:deleted` | حذف دفعة |
| `user:logged_in` | تسجيل دخول |
| `password:changed` | تغيير كلمة المرور |

**SignalR Hub:** `/hubs/notifications`

---

## 🔧 Configuration

### **appsettings.json:**
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=192.168.30.151,1433;Database=New-Crm;..."
  },
  "Jwt": {
    "SecretKey": "...",
    "Issuer": "HouseOfLawAPI",
    "Audience": "HouseOfLawClient",
    "ExpiryMinutes": "60"
  },
  "Cors": {
    "AllowedOrigins": [
      "http://localhost:4200",
      "https://houseoflaw.cloudflareaccess.com"
    ]
  }
}
```

---

## 📦 NuGet Packages

```xml
<PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="8.0.22" />
<PackageReference Include="Microsoft.AspNetCore.Authentication.JwtBearer" Version="8.0.0" />
<PackageReference Include="BCrypt.Net-Next" Version="4.0.3" />
<PackageReference Include="Swashbuckle.AspNetCore" Version="6.6.2" />
```

---

## 🎓 أمثلة سريعة

### **1. إنشاء موكل جديد:**
```csharp
// Controller
[HttpPost]
public async Task<ActionResult<ClientDto>> CreateClient(CreateClientDto dto)
{
    var client = await _clientService.CreateClientAsync(dto);
    return CreatedAtAction(nameof(GetClient), new { id = client.Id }, client);
}

// Service
public async Task<ClientDto> CreateClientAsync(CreateClientDto dto)
{
    // 1. إنشاء Mainfile
    var mainfile = new Mainfile { Code = dto.Code, Name = dto.Name, ... };
    await _mainfileRepository.AddAsync(mainfile);
    
    // 2. إنشاء FileDetail
    var fileDetail = new FileDetail { FileCode = mainfile.Code, ... };
    await _fileDetailRepository.AddAsync(fileDetail);
    
    // 3. إرسال إشعار SignalR
    await _notificationService.BroadcastToAllAsync("client:created", new { ... });
    
    return new ClientDto { ... };
}
```

---

### **2. تسجيل الدخول:**
```csharp
// Controller
[HttpPost("login")]
public async Task<ActionResult<LoginResponseDto>> Login(LoginDto dto)
{
    var response = await _userService.LoginAsync(dto);
    return Ok(response);
}

// Service
public async Task<LoginResponseDto> LoginAsync(LoginDto dto)
{
    // 1. التحقق من Username
    var user = await _userRepository.GetByUsernameAsync(dto.Username);
    if (user == null) throw new UnauthorizedException();
    
    // 2. التحقق من Password
    if (!_passwordHasher.VerifyPassword(dto.Password, user.PasswordHashed))
        throw new UnauthorizedException();
    
    // 3. توليد JWT Token
    var token = _jwtService.GenerateToken(user);
    
    // 4. إرسال إشعار SignalR
    await _notificationService.BroadcastToAllAsync("user:logged_in", new { ... });
    
    return new LoginResponseDto { Token = token, User = ... };
}
```

---

### **3. رفع مرفق:**
```csharp
// Controller
[HttpPost("{fileCode}/attachments")]
public async Task<ActionResult<ClientAttachmentDto>> UploadAttachment(
    long fileCode,
    IFormFile file,
    [FromForm] CreateClientAttachmentDto dto)
{
    var attachment = await _clientService.AddAttachmentAsync(fileCode, file, dto);
    return CreatedAtAction(nameof(DownloadAttachment), new { attachmentId = attachment.Id }, attachment);
}

// Service
public async Task<ClientAttachmentDto> AddAttachmentAsync(long fileCode, IFormFile file, CreateClientAttachmentDto dto)
{
    // 1. حفظ الملف
    var fileName = $"{fileCode}_{DateTime.Now:yyyyMMddHHmmss}_{file.FileName}";
    var filePath = Path.Combine("wwwroot/uploads/attachments", fileName);
    using (var stream = new FileStream(filePath, FileMode.Create))
    {
        await file.CopyToAsync(stream);
    }
    
    // 2. حفظ في Database
    var attachment = new Attachment { FileCode = fileCode, Value = filePath, ... };
    await _attachmentRepository.AddAsync(attachment);
    
    // 3. إرسال إشعار SignalR
    await _notificationService.BroadcastToAllAsync("client:attachment_added", new { ... });
    
    return new ClientAttachmentDto { ... };
}
```

---

## 🐛 Troubleshooting

### **1. خطأ في الاتصال بقاعدة البيانات:**
```bash
# تحقق من Connection String في appsettings.json
# تحقق من أن SQL Server يعمل
# تحقق من Firewall
```

### **2. خطأ 401 Unauthorized:**
```bash
# تحقق من JWT Token
# تحقق من أن Token لم ينتهي (Expiry)
# تحقق من Authorization Header
```

### **3. خطأ في SignalR:**
```bash
# تحقق من أن Hub مسجل في Program.cs
# تحقق من CORS Configuration
# تحقق من WebSocket Support
```

---

## 📚 الملفات التوثيقية

| ملف | الوصف |
|-----|-------|
| `PROJECT_DEEP_ANALYSIS.md` | تحليل عميق شامل للمشروع |
| `DATABASE_SCHEMA.md` | توثيق قاعدة البيانات والعلاقات |
| `API_ENDPOINTS.md` | توثيق كامل لجميع API Endpoints |
| `QUICK_REFERENCE.md` | هذا الملف - مرجع سريع |
| `PROJECT_OVERVIEW.md` | نظرة عامة على المشروع |
| `COMPLETE_GUIDE.md` | دليل شامل |

---

## 🎯 Next Steps

### **للتطوير:**
1. قراءة `PROJECT_DEEP_ANALYSIS.md` لفهم البنية
2. قراءة `API_ENDPOINTS.md` لفهم الـ APIs
3. قراءة `DATABASE_SCHEMA.md` لفهم قاعدة البيانات
4. البدء في إضافة Features جديدة

### **للـ Production:**
1. إضافة Rate Limiting
2. تحسين File Upload Validation
3. إضافة Unit Tests
4. تحسين Error Handling
5. إضافة Logging (Serilog)
6. إضافة Health Checks

---

## 💡 Tips & Tricks

### **1. استخدام Generic Repository:**
```csharp
// بدلاً من كتابة كود متكرر
var user = await _context.Users.FindAsync(id);

// استخدم Generic Repository
var user = await _userRepository.GetByIdAsync(id);
```

### **2. استخدام DTOs:**
```csharp
// بدلاً من إرجاع Entity مباشرة
return Ok(user);

// استخدم DTO
return Ok(new UserDto { Id = user.Id, Username = user.Username, ... });
```

### **3. استخدام SignalR:**
```csharp
// بعد أي عملية مهمة، أرسل إشعار
await _notificationService.BroadcastToAllAsync("event:type", new { ... });
```

---

## 🔗 روابط مفيدة

- **Swagger UI:** http://localhost:5000/swagger
- **SignalR Hub:** http://localhost:5000/hubs/notifications
- **Database:** 192.168.30.151:1433 (New-Crm)

---

**تاريخ الإنشاء:** 2026-01-04  
**الإصدار:** 1.0  
**المحلل:** Antigravity AI

---

## 📞 للمساعدة

إذا كنت بحاجة لمساعدة:
1. راجع الملفات التوثيقية في `.agent/`
2. راجع `PROJECT_OVERVIEW.md`
3. راجع Swagger Documentation
