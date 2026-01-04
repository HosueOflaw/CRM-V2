# 🏛️ House of Law CRM Backend - تحليل عميق شامل

## 📌 نظرة عامة

**House of Law CRM Backend** هو نظام إدارة علاقات العملاء (CRM) متخصص للمكاتب القانونية، مبني على **ASP.NET Core 8.0** مع **Entity Framework Core** و **SQL Server**.

---

## 🎯 الهدف من النظام

النظام مصمم لإدارة:
- ✅ **الموكلين (Clients)** - معلومات الموكلين والملفات القانونية
- ✅ **المدفوعات (Payments)** - سندات القبض والصرف
- ✅ **المرفقات (Attachments)** - المستندات والملفات
- ✅ **أرقام التواصل (Contacts)** - أرقام الهواتف وجهات الاتصال
- ✅ **الأقسام (Departments)** - الأقسام القانونية المختلفة
- ✅ **المستخدمين (Users)** - موظفي المكتب القانوني
- ✅ **الملاحظات (Notes)** - ملاحظات على الملفات
- ✅ **البيانات المالية (Financial Data)** - المبالغ الإضافية والتفاصيل المالية

---

## 🏗️ البنية المعمارية (Architecture)

### 1. **النمط المعماري**
المشروع يتبع **Clean Architecture** مع:
- **Repository Pattern** - لفصل Data Access Layer
- **Service Layer Pattern** - لفصل Business Logic
- **Dependency Injection** - لإدارة Dependencies

```
┌─────────────────────────────────────────┐
│         Controllers (API Layer)         │
│  - ClientsController                    │
│  - PaymentsController                   │
│  - UsersController                      │
│  - AuthController                       │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│      Services (Business Logic)          │
│  - ClientService                        │
│  - UserService                          │
│  - JwtService                           │
│  - NotificationService                  │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│    Repositories (Data Access Layer)     │
│  - MainfileRepository                   │
│  - PaymentRepository                    │
│  - UserRepository                       │
│  - BaseRepository<T>                    │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│      Entity Framework Core (ORM)        │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         SQL Server Database             │
│  Server: 192.168.30.151:1433            │
│  Database: New-Crm                      │
└─────────────────────────────────────────┘
```

---

## 📁 هيكل المشروع التفصيلي

```
HOL-Backend/
│
├── Controllers/                    # API Endpoints (REST Controllers)
│   ├── AuthController.cs          # تسجيل الدخول وتغيير كلمة المرور
│   ├── ClientsController.cs       # إدارة الموكلين والمرفقات
│   ├── PaymentsController.cs      # إدارة المدفوعات
│   ├── UsersController.cs         # إدارة المستخدمين
│   ├── DepartmentsController.cs   # إدارة الأقسام
│   ├── MainfilesController.cs     # إدارة الملفات الرئيسية
│   ├── NotesController.cs         # إدارة الملاحظات
│   └── ErrorController.cs         # معالجة الأخطاء
│
├── Services/                       # Business Logic Layer
│   ├── ClientService.cs           # منطق أعمال الموكلين
│   ├── UserService.cs             # منطق أعمال المستخدمين
│   ├── JwtService.cs              # توليد والتحقق من JWT Tokens
│   ├── NotificationService.cs     # إدارة الإشعارات عبر SignalR
│   ├── PasswordHasher.cs          # تشفير كلمات المرور (BCrypt)
│   └── Interfaces/                # Service Interfaces
│       ├── IClientService.cs
│       ├── IUserService.cs
│       ├── IJwtService.cs
│       └── IPasswordHasher.cs
│
├── Repositories/                   # Data Access Layer
│   ├── BaseRepository.cs          # Generic Repository (CRUD Operations)
│   ├── MainfileRepository.cs      # Mainfile-specific queries
│   ├── FileDetailRepository.cs    # FileDetail-specific queries
│   ├── PaymentRepository.cs       # Payment-specific queries
│   ├── UserRepository.cs          # User-specific queries
│   ├── AttachmentRepository.cs    # Attachment-specific queries
│   ├── CallcenterStatementRepository.cs
│   ├── AdditionalAmountRepository.cs
│   └── ... (15 repositories total)
│
├── Domain/Entities/                # Database Models (Entities)
│   ├── Mainfile.cs                # الموكل الأساسي
│   ├── FileDetail.cs              # تفاصيل الملف القانوني
│   ├── Payment.cs                 # المدفوعات
│   ├── User.cs                    # المستخدمين
│   ├── Department.cs              # الأقسام
│   ├── Attachment.cs              # المرفقات
│   ├── CallcenterStatement.cs     # أرقام التواصل
│   ├── AdditionalAmount.cs        # المبالغ الإضافية
│   ├── Note.cs                    # الملاحظات
│   ├── Mail.cs                    # الرسائل
│   ├── FileStatus.cs              # حالة الملف
│   ├── FileClassification.cs      # تصنيف الملف
│   ├── AuditsFile.cs              # سجلات التدقيق
│   └── AutoNumber.cs              # الأرقام التلقائية
│
├── DTOs/                           # Data Transfer Objects
│   ├── ClientDto.cs               # DTOs للموكلين
│   ├── PaymentDto.cs              # DTOs للمدفوعات
│   ├── UserDto.cs                 # DTOs للمستخدمين
│   ├── AuthDto.cs                 # DTOs للمصادقة
│   ├── DepartmentDto.cs           # DTOs للأقسام
│   └── PaginationDto.cs           # DTOs للـ Pagination
│
├── Infrastructure/                 # Infrastructure Components
│   ├── SignalR/
│   │   └── NotificationsHub.cs    # SignalR Hub للإشعارات الفورية
│   ├── Cloudflare/
│   │   ├── CloudflareMiddleware.cs
│   │   └── CloudflareOptions.cs
│   └── Swagger/
│       ├── SwaggerFileUploadOperationFilter.cs
│       └── SwaggerIgnoreSchemaFilter.cs
│
├── Data/                           # Database Context & Migrations
│   ├── ApplicationDbContext.cs    # EF Core DbContext
│   └── Migrations/                # EF Core Migrations
│       └── 20251204131635_InitialCreate.cs
│
├── Interfaces/                     # Repository Interfaces
│   ├── IBaseRepository.cs         # Generic Repository Interface
│   ├── IMainfileRepository.cs
│   ├── IPaymentRepository.cs
│   ├── IUserRepository.cs
│   └── ... (16 interfaces total)
│
├── wwwroot/                        # Static Files
│   └── uploads/
│       └── attachments/           # مجلد المرفقات المرفوعة
│
├── Program.cs                      # Application Entry Point
├── appsettings.json               # Configuration
├── HouseOfLawApi.csproj           # Project File
└── PROJECT_OVERVIEW.md            # نظرة عامة على المشروع
```

---

## 🔑 المكونات الأساسية بالتفصيل

### 1️⃣ **Controllers (API Layer)**

#### **AuthController** - المصادقة والأمان
```csharp
POST /api/auth/login              // تسجيل الدخول
POST /api/auth/change-password    // تغيير كلمة المرور
```

**الوظائف:**
- تسجيل الدخول بـ Username/Password
- توليد JWT Token
- تغيير كلمة المرور
- إرسال إشعار SignalR عند تسجيل الدخول

---

#### **ClientsController** - إدارة الموكلين
```csharp
GET    /api/clients                           // جلب كل الموكلين
GET    /api/clients/{id}                      // جلب موكل بالـ ID
GET    /api/clients/code/{code}               // جلب موكل بالـ Code
POST   /api/clients                           // إنشاء موكل جديد
POST   /api/clients/{fileCode}/attachments    // رفع مرفق
GET    /api/clients/{fileCode}/attachments    // جلب مرفقات الموكل
GET    /api/clients/{fileCode}/contacts       // جلب أرقام التواصل
DELETE /api/clients/contacts/{contactId}      // حذف رقم تواصل
DELETE /api/clients/attachments/{attachmentId} // حذف مرفق
GET    /api/clients/attachments/{attachmentId}/download // تحميل مرفق
```

**الوظائف:**
- إنشاء موكل جديد مع كل البيانات (Mainfile + FileDetail + Contacts + Financial)
- رفع وتحميل المرفقات
- إدارة أرقام التواصل
- إرسال إشعارات SignalR عند كل عملية

---

#### **PaymentsController** - إدارة المدفوعات
```csharp
GET    /api/payments                    // جلب كل المدفوعات
GET    /api/payments/{id}               // جلب دفعة واحدة
POST   /api/payments                    // إنشاء دفعة جديدة
PUT    /api/payments/{id}               // تحديث دفعة
DELETE /api/payments/{id}               // حذف دفعة
```

**Query Parameters:**
- `?fileCode=123` - جلب مدفوعات موكل معين
- `?deptCode=456` - جلب مدفوعات قسم معين

**الوظائف:**
- إنشاء سندات قبض/صرف
- تحديث وحذف المدفوعات
- إرسال إشعارات SignalR للمدفوعات
- Broadcast لمجموعات معينة (مثل: `finance-{deptCode}`)

---

#### **UsersController** - إدارة المستخدمين
```csharp
GET    /api/users           // جلب كل المستخدمين
GET    /api/users/{id}      // جلب مستخدم واحد
POST   /api/users           // إنشاء مستخدم جديد
PUT    /api/users/{id}      // تحديث مستخدم
DELETE /api/users/{id}      // حذف مستخدم
```

---

### 2️⃣ **Services (Business Logic Layer)**

#### **ClientService** - خدمة الموكلين
```csharp
Task<ClientDto> CreateClientAsync(CreateClientDto createDto)
Task<ClientDto?> GetClientByIdAsync(long id)
Task<ClientDto?> GetClientByCodeAsync(int code)
Task<IEnumerable<ClientDto>> GetAllClientsAsync()
Task<ClientAttachmentDto> AddAttachmentAsync(long fileCode, IFormFile file, CreateClientAttachmentDto dto)
Task<bool> DeleteAttachmentAsync(int attachmentId)
Task<IEnumerable<ClientAttachmentDto>> GetClientAttachmentsAsync(long fileCode)
Task<IEnumerable<ClientContactDto>> GetClientContactsAsync(long fileCode)
Task<bool> DeleteContactAsync(int contactId)
```

**منطق إنشاء موكل جديد:**
1. إنشاء `Mainfile` (البيانات الأساسية)
2. إنشاء `FileDetail` (تفاصيل الملف القانوني)
3. إنشاء `CallcenterStatement` (أرقام التواصل)
4. إنشاء `AdditionalAmount` (البيانات المالية)
5. إرسال إشعار SignalR `client:created`

---

#### **UserService** - خدمة المستخدمين
```csharp
Task<LoginResponseDto> LoginAsync(LoginDto loginDto)
Task<bool> ChangePasswordAsync(int userId, ChangePasswordDto changePasswordDto)
Task<UserDto> CreateUserAsync(CreateUserDto createDto)
Task<UserDto?> GetUserByIdAsync(int id)
Task<IEnumerable<UserDto>> GetAllUsersAsync()
```

**منطق تسجيل الدخول:**
1. التحقق من Username
2. التحقق من Password (BCrypt)
3. توليد JWT Token
4. إرسال إشعار SignalR `user:logged_in`

---

#### **JwtService** - خدمة JWT
```csharp
string GenerateToken(User user)
ClaimsPrincipal? ValidateToken(string token)
int? GetUserIdFromToken(string token)
```

**JWT Configuration:**
- **Issuer:** `HouseOfLawAPI`
- **Audience:** `HouseOfLawClient`
- **Expiry:** 60 دقيقة (قابل للتعديل)
- **Claims:** UserId, Username, Role

---

#### **NotificationService** - خدمة الإشعارات
```csharp
Task BroadcastToAllAsync(string eventType, object payload)
Task BroadcastToChannelAsync(string channel, string eventType, object payload)
Task BroadcastToUserAsync(string userId, string eventType, object payload)
```

**الأحداث المتاحة:**
- `client:created` - موكل جديد
- `client:attachment_added` - مرفق جديد
- `client:attachment_deleted` - حذف مرفق
- `client:contact_deleted` - حذف رقم تواصل
- `payment:created` - دفعة جديدة
- `payment:updated` - تحديث دفعة
- `payment:deleted` - حذف دفعة
- `user:logged_in` - تسجيل دخول
- `password:changed` - تغيير كلمة المرور

---

### 3️⃣ **Repositories (Data Access Layer)**

#### **BaseRepository<T>** - Generic Repository
```csharp
Task<T?> GetByIdAsync(int id)
Task<T?> GetByIdAsync(long id)
Task<IEnumerable<T>> GetAllAsync()
Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate)
Task<T?> FirstOrDefaultAsync(Expression<Func<T, bool>> predicate)
Task<T> AddAsync(T entity)
Task<IEnumerable<T>> AddRangeAsync(IEnumerable<T> entities)
Task UpdateAsync(T entity)
Task DeleteAsync(T entity)
Task DeleteAsync(int id)
Task DeleteAsync(long id)
Task<int> CountAsync()
Task<int> CountAsync(Expression<Func<T, bool>> predicate)
Task<bool> ExistsAsync(Expression<Func<T, bool>> predicate)
Task<(IEnumerable<T> Items, int TotalCount)> GetPagedAsync(int pageNumber, int pageSize, Expression<Func<T, bool>>? filter = null)
```

**المميزات:**
- ✅ Generic - يعمل مع أي Entity
- ✅ Async/Await - غير متزامن
- ✅ Pagination Support
- ✅ Filter Support
- ✅ Count & Exists

---

#### **Repositories المتخصصة:**

**MainfileRepository:**
```csharp
Task<Mainfile?> GetByCodeAsync(int code)
```

**PaymentRepository:**
```csharp
Task<IEnumerable<Payment>> GetByFileCodeAsync(long fileCode)
Task<IEnumerable<Payment>> GetByDeptCodeAsync(long deptCode)
```

**UserRepository:**
```csharp
Task<User?> GetByUsernameAsync(string username)
Task<User?> GetByEmailAsync(string email)
```

**AttachmentRepository:**
```csharp
Task<IEnumerable<Attachment>> GetByFileCodeAsync(long fileCode)
```

---

### 4️⃣ **Domain Entities (Database Models)**

#### **Mainfile** - الموكل الأساسي
```csharp
public class Mainfile
{
    public long Id { get; set; }
    public int Code { get; set; }              // كود الموكل (فريد)
    public string? Name { get; set; }          // اسم الموكل
    public string? Cid { get; set; }           // الرقم المدني
    public string? Address { get; set; }       // العنوان
    public DateTime? DateAdded { get; set; }   // تاريخ الإضافة
    public string? Nationality { get; set; }   // الجنسية
    public bool? Archive { get; set; }         // أرشيف
    public string? Note { get; set; }          // ملاحظات
    
    // بيانات الشركة (إذا كان الموكل شركة)
    public string? Work { get; set; }
    public string? Membership { get; set; }
    public string? CompanyEmail { get; set; }
    public string? CompanyFax { get; set; }
    public string? CompanyRegister { get; set; }
    
    // الشركاء
    public string? Partner1 { get; set; }
    public string? Partner2 { get; set; }
    public string? Partner3 { get; set; }
    
    public string? RegisterType { get; set; }
    public int? KafalaAddedBy { get; set; }
}
```

---

#### **FileDetail** - تفاصيل الملف القانوني
```csharp
public class FileDetail
{
    public int Id { get; set; }
    public long? FileCode { get; set; }        // مرجع للموكل
    public long? DeptCode { get; set; }        // كود القسم
    public string? Reason { get; set; }        // سبب الملف
    public string? PatchNo { get; set; }       // رقم الدفعة
    public int? CourtEmployee { get; set; }    // موظف المحكمة
    public string? Client { get; set; }
    public DateTime? DateAdded { get; set; }
    public DateTime? DateFinished { get; set; }
    public string? ContractNo { get; set; }    // رقم العقد
    public decimal? DeptAmount { get; set; }   // المبلغ (18,3)
    public string? LegalPlaintiff { get; set; } // المدعي القانوني
    
    // المسؤولين عن الملف
    public int? LawyerUser { get; set; }       // المحامي
    public int? CourtUser { get; set; }        // موظف المحكمة
    public int? MdUser { get; set; }           // MD
    public int? LegalAdvisorUser { get; set; } // المستشار القانوني
    
    // الصلاحيات
    public bool? CanViewInvoices { get; set; }
    public bool? CanViewAttachments { get; set; }
    public bool? CanViewFinancialMatrix { get; set; }
    public bool? CanReceiveAutomatedMessages { get; set; }
}
```

---

#### **Payment** - المدفوعات
```csharp
public class Payment
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public long? DeptCode { get; set; }
    public decimal? Value { get; set; }        // المبلغ (18,3)
    public DateTime? DateAdded { get; set; }
    public string? JouralEntry { get; set; }   // قيد اليومية
    public string? AlEntry { get; set; }
    public int? UserAdded { get; set; }
    public int? UserUpdated { get; set; }
    
    // المسؤولين
    public int? CallcenterUser { get; set; }
    public int? CourtUser { get; set; }
    public int? AdvisorUser { get; set; }
    public int? LawyerUser { get; set; }
    
    // التواريخ
    public DateTime? TranslateDate { get; set; }
    public DateTime? TranslateBackDate { get; set; }
    
    // الحالة
    public bool? ClientClosed { get; set; }
    public bool? JournalClosed { get; set; }
    public string? FileStatusAfter { get; set; }
    
    // العمولة
    public int? Commission { get; set; }
    public bool? CommissionClosed { get; set; }
}
```

---

#### **CallcenterStatement** - أرقام التواصل
```csharp
public class CallcenterStatement
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public long? DeptCode { get; set; }
    public DateTime? DateAdded { get; set; }
    public string? Notes { get; set; }
    public string? ContactMethod { get; set; }     // طريقة التواصل
    public string? ConnectedStatus { get; set; }   // حالة الاتصال
    public string? PhoneNumber { get; set; }       // رقم الهاتف
    public string? NextAction { get; set; }        // الإجراء التالي
    public DateTime? NextDate { get; set; }        // التاريخ التالي
    public decimal? PromiseAmount { get; set; }    // المبلغ الموعود (18,3)
    public string? PhoneOwner { get; set; }        // نسبة القرابة
    public int? UserAdded { get; set; }
}
```

---

#### **AdditionalAmount** - المبالغ الإضافية
```csharp
public class AdditionalAmount
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public long? DeptCode { get; set; }
    public decimal? Value { get; set; }        // المبلغ (18,3)
    public string? AmountType { get; set; }    // نوع المبلغ
    public int? UserAdded { get; set; }
    public DateTime? DateAdded { get; set; }
    public int? UserUpdated { get; set; }
    public DateTime? DateUpdated { get; set; }
    public bool? Enabled { get; set; }
}
```

---

#### **Attachment** - المرفقات
```csharp
public class Attachment
{
    public int Id { get; set; }
    public long? FileCode { get; set; }
    public long? DeptCode { get; set; }
    public string? Value { get; set; }         // مسار الملف
    public string? AttachType { get; set; }    // نوع المرفق
    public string? Notes { get; set; }
    public int? UserAdded { get; set; }
    public DateTime? DateAdded { get; set; }
}
```

**مسار التخزين:** `wwwroot/uploads/attachments/`

---

#### **User** - المستخدمين
```csharp
public class User
{
    public int Id { get; set; }
    public int? Code { get; set; }
    public string? Username { get; set; }
    public string? FullName { get; set; }
    public string? Email { get; set; }
    public string? Role { get; set; }          // admin, user, etc.
    public DateTime? CreatedAt { get; set; }
    public string? PasswordHashed { get; set; } // BCrypt Hash
    public string? PasswordSalt { get; set; }   // (غير مستخدم - BCrypt يدمج Salt)
}
```

---

### 5️⃣ **DTOs (Data Transfer Objects)**

#### **CreateClientDto** - إنشاء موكل جديد
```csharp
public class CreateClientDto
{
    // البيانات الأساسية
    [Required] public int Code { get; set; }
    [Required] public string Name { get; set; }
    public string? Cid { get; set; }
    public string? Address { get; set; }
    public string? Nationality { get; set; }
    
    // بيانات الشركة
    public string? Work { get; set; }
    public string? Membership { get; set; }
    public string? CompanyEmail { get; set; }
    public string? CompanyFax { get; set; }
    public string? CompanyRegister { get; set; }
    public string? Partner1 { get; set; }
    public string? Partner2 { get; set; }
    public string? Partner3 { get; set; }
    public string? RegisterType { get; set; }
    public string? Note { get; set; }
    
    // بيانات العقد
    public string? ContractNumber { get; set; }
    public int? ContractYear { get; set; }
    public string? Sector { get; set; }
    public string? LegalClaimant { get; set; }
    public string? ContractDetails { get; set; }
    
    // FileDetail
    public string? PatchNo { get; set; }
    public int? CourtEmployee { get; set; }
    public DateTime? DateFinished { get; set; }
    public decimal? DeptAmount { get; set; }
    public int? LawyerUser { get; set; }
    public int? CourtUser { get; set; }
    public int? MdUser { get; set; }
    public int? LegalAdvisorUser { get; set; }
    
    // أرقام التواصل
    public List<ClientContactDto> Contacts { get; set; } = new();
    
    // الصلاحيات
    public ClientPermissionsDto? Permissions { get; set; }
    
    // البيانات المالية
    public List<ClientFinancialEntryDto> FinancialEntries { get; set; } = new();
    
    // القسم
    public long? DeptCode { get; set; }
    public int? UserAdded { get; set; }
}
```

---

## 🔐 الأمان (Security)

### ✅ **ما هو موجود:**

#### 1. **JWT Authentication**
```csharp
// Configuration في Program.cs
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecretKey)),
            ValidateIssuer = true,
            ValidIssuer = "HouseOfLawAPI",
            ValidateAudience = true,
            ValidAudience = "HouseOfLawClient",
            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero
        };
    });
```

**المميزات:**
- ✅ Token-based authentication
- ✅ Expiry time: 60 دقيقة
- ✅ Claims: UserId, Username, Role
- ✅ ClockSkew = Zero (دقة عالية)

---

#### 2. **Password Hashing (BCrypt)**
```csharp
public class PasswordHasher : IPasswordHasher
{
    public string HashPassword(string password)
    {
        return BCrypt.Net.BCrypt.HashPassword(password, workFactor: 12);
    }

    public bool VerifyPassword(string password, string hashedPassword)
    {
        return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
    }
}
```

**المميزات:**
- ✅ BCrypt.Net (آمن جداً)
- ✅ Work Factor: 12 (توازن بين الأمان والأداء)
- ✅ Salt مدمج في الـ Hash

---

#### 3. **Authorization Policies**
```csharp
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminOnly", policy => policy.RequireRole("admin"));
    options.AddPolicy("UserOnly", policy => policy.RequireAuthenticatedUser());
});
```

**الاستخدام:**
```csharp
[Authorize(Policy = "AdminOnly")]
public class UsersController : ControllerBase { }
```

---

#### 4. **CORS Configuration**
```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        if (corsOrigins.Length == 0)
        {
            // Development: Allow all origins
            policy.AllowAnyOrigin();
        }
        else
        {
            // Production: Allow specific origins with credentials
            policy.WithOrigins(corsOrigins)
                  .AllowCredentials();
        }
        policy.AllowAnyHeader()
              .AllowAnyMethod()
              .SetPreflightMaxAge(TimeSpan.FromHours(24));
    });
});
```

**Allowed Origins:**
- `http://localhost:4200` (Development)
- `https://houseoflaw.cloudflareaccess.com` (Production)

---

#### 5. **Cloudflare Integration**
```csharp
// Middleware للتعامل مع Cloudflare
app.UseCloudflareForwarding();
```

**المميزات:**
- ✅ IP Forwarding (`CF-Connecting-IP`)
- ✅ Ray ID Tracking
- ✅ DDoS Protection (من Cloudflare)

---

#### 6. **HTTPS Redirection**
```csharp
// في Production فقط
if (!app.Environment.IsDevelopment())
{
    appBuilder.UseHttpsRedirection();
}
```

---

#### 7. **SQL Injection Protection**
- ✅ **Entity Framework Core** - Parameterized Queries
- ✅ **LINQ** - آمن من SQL Injection

---

### ⚠️ **ما يحتاج تحسين:**

1. **Rate Limiting** - غير موجود
   - يحتاج إضافة `AspNetCoreRateLimit` package
   
2. **File Upload Validation** - محدود
   - يحتاج فحص نوع الملف (MIME Type)
   - يحتاج فحص حجم الملف
   - يحتاج فحص محتوى الملف (Anti-Virus)

3. **Input Validation** - يحتاج تحسين
   - إضافة FluentValidation
   - تحسين Validation Attributes

4. **API Versioning** - غير موجود
   - يحتاج إضافة `Microsoft.AspNetCore.Mvc.Versioning`

---

## 📡 SignalR Integration

### **NotificationsHub**
```csharp
public class NotificationsHub : Hub
{
    public const string Route = "/hubs/notifications";

    public async Task BroadcastAsync(string channel, object payload)
    {
        await Clients.Group(channel).SendAsync("broadcast", payload);
    }

    public Task JoinChannel(string channel)
    {
        return Groups.AddToGroupAsync(Context.ConnectionId, channel);
    }

    public Task LeaveChannel(string channel)
    {
        return Groups.RemoveFromGroupAsync(Context.ConnectionId, channel);
    }
}
```

### **الأحداث المتاحة:**

| Event | متى يحدث | البيانات |
|-------|----------|----------|
| `client:created` | إضافة موكل جديد | `{ clientId, code, name }` |
| `client:attachment_added` | إضافة مرفق | `{ fileCode, attachmentId, fileName }` |
| `client:attachment_deleted` | حذف مرفق | `{ attachmentId }` |
| `client:contact_deleted` | حذف رقم تواصل | `{ contactId }` |
| `payment:created` | إضافة دفعة | `{ paymentId, fileCode, value }` |
| `payment:updated` | تحديث دفعة | `{ paymentId }` |
| `payment:deleted` | حذف دفعة | `{ paymentId }` |
| `user:logged_in` | تسجيل دخول | `{ userId, username }` |
| `password:changed` | تغيير كلمة المرور | `{ userId }` |

---

## 🗄️ قاعدة البيانات

### **Connection String:**
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=192.168.30.151,1433;Database=New-Crm;User Id=sa;Password=HouseOfLaw@123;TrustServerCertificate=True;Encrypt=False;"
  }
}
```

### **Decimal Precision:**
```csharp
modelBuilder.Entity<FileDetail>().Property(x => x.DeptAmount)
    .HasColumnType("decimal(18,3)");

modelBuilder.Entity<CallcenterStatement>().Property(x => x.PromiseAmount)
    .HasColumnType("decimal(18,3)");

modelBuilder.Entity<AdditionalAmount>().Property(x => x.Value)
    .HasColumnType("decimal(18,3)");

modelBuilder.Entity<Payment>().Property(x => x.Value)
    .HasColumnType("decimal(18,3)");
```

**ملاحظة:** الدقة `(18,3)` تعني:
- 18 رقم إجمالي
- 3 أرقام بعد الفاصلة العشرية

---

## 🔄 تدفق البيانات (Data Flow)

### **مثال: إنشاء موكل جديد**

```
1. Frontend → POST /api/clients (CreateClientDto)
   ↓
2. ClientsController.CreateClient()
   ↓
3. ClientService.CreateClientAsync()
   ├─→ إنشاء Mainfile (البيانات الأساسية)
   ├─→ إنشاء FileDetail (تفاصيل الملف)
   ├─→ إنشاء CallcenterStatement (أرقام التواصل)
   └─→ إنشاء AdditionalAmount (البيانات المالية)
   ↓
4. Repositories → حفظ في قاعدة البيانات
   ↓
5. NotificationService → بث إشعار SignalR
   ├─→ BroadcastToAllAsync("client:created", { ... })
   └─→ جميع المستخدمين المتصلين يستقبلون الإشعار
   ↓
6. Response → ClientDto مع Status 201 Created
```

---

## 📦 Dependencies (NuGet Packages)

```xml
<PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="8.0.22" />
<PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="8.0.22" />
<PackageReference Include="Microsoft.EntityFrameworkCore.Tools" Version="8.0.22" />
<PackageReference Include="Microsoft.AspNetCore.Authentication.JwtBearer" Version="8.0.0" />
<PackageReference Include="System.IdentityModel.Tokens.Jwt" Version="8.0.0" />
<PackageReference Include="BCrypt.Net-Next" Version="4.0.3" />
<PackageReference Include="Swashbuckle.AspNetCore" Version="6.6.2" />
```

---

## 🚀 نقاط القوة

1. ✅ **Architecture نظيفة** - Repository Pattern + Service Layer
2. ✅ **JWT Authentication** - آمن ومحترف
3. ✅ **BCrypt Password Hashing** - آمن جداً
4. ✅ **SignalR Integration** - إشعارات فورية
5. ✅ **Swagger Documentation** - توثيق تلقائي
6. ✅ **Error Handling** - معالجة أخطاء شاملة
7. ✅ **Logging** - تسجيل الأحداث
8. ✅ **CORS Configuration** - دعم Frontend
9. ✅ **File Upload Support** - رفع الملفات
10. ✅ **Cloudflare Integration** - IP Forwarding
11. ✅ **Generic Repository** - إعادة استخدام الكود
12. ✅ **Async/Await** - أداء عالي

---

## 🔧 نقاط التحسين المقترحة

### **أولوية عالية (🔴):**
1. ⚠️ **Rate Limiting** - حماية من DDoS
2. ⚠️ **File Upload Security** - فحص الملفات
3. ⚠️ **API Versioning** - إدارة الإصدارات

### **أولوية متوسطة (🟡):**
4. ⚠️ **Input Validation** - FluentValidation
5. ⚠️ **Caching** - Redis/Memory Cache
6. ⚠️ **Unit Tests** - اختبارات تلقائية
7. ⚠️ **Integration Tests** - اختبارات التكامل

### **أولوية منخفضة (🟢):**
8. ⚠️ **Health Checks** - `/health` endpoint
9. ⚠️ **Metrics** - Prometheus/Grafana
10. ⚠️ **Distributed Tracing** - OpenTelemetry

---

## 📝 ملاحظات مهمة

1. **File Storage**: الملفات تُحفظ في `wwwroot/uploads/attachments/`
2. **Auto Numbering**: يستخدم `AutoNumber` entity
3. **Permissions**: مخزنة في `FileDetail` (CanViewInvoices, etc.)
4. **Financial Data**: تُحفظ في `AdditionalAmount` table
5. **Contacts**: تُحفظ في `CallcenterStatement` table
6. **SignalR Hub**: `/hubs/notifications`
7. **Swagger UI**: `/swagger` (Development only)
8. **JWT Expiry**: 60 دقيقة (قابل للتعديل في appsettings.json)

---

## 🎯 الخلاصة

**House of Law CRM Backend** هو نظام **متكامل وآمن** لإدارة المكاتب القانونية:

✅ **Architecture:** Clean Architecture مع Repository Pattern  
✅ **Security:** JWT + BCrypt + CORS + Cloudflare  
✅ **Real-time:** SignalR للإشعارات الفورية  
✅ **Documentation:** Swagger/OpenAPI  
✅ **Performance:** Async/Await + Generic Repository  
✅ **Scalability:** Service Layer + Dependency Injection  

**جاهز للاستخدام في Development** ويحتاج بعض التحسينات للـ Production (Rate Limiting, File Validation, etc.)

---

**تاريخ التحليل:** 2026-01-04  
**الإصدار:** 1.0  
**اللغة:** C# (.NET 8.0)  
**قاعدة البيانات:** SQL Server  
**المحلل:** Antigravity AI
