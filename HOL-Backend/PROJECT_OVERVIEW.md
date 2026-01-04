# 📋 نظرة شاملة على مشروع House of Law CRM Backend

## 🎯 نظرة عامة

هذا مشروع **Backend API** لنظام إدارة علاقات العملاء (CRM) لمكتب قانوني يسمى **"House of Law"**. المشروع مبني باستخدام:
- **.NET 8.0** (ASP.NET Core Web API)
- **Entity Framework Core 8.0** (ORM)
- **SQL Server** (قاعدة البيانات)
- **SignalR** (للإشعارات الفورية)
- **JWT Authentication** (المصادقة)
- **Swagger/OpenAPI** (توثيق API)

---

## 🏗️ البنية المعمارية (Architecture)

المشروع يتبع نمط **Repository Pattern** و **Service Layer Pattern**:

```
Controllers (API Layer)
    ↓
Services (Business Logic Layer)
    ↓
Repositories (Data Access Layer)
    ↓
Entity Framework Core
    ↓
SQL Server Database
```

### 📁 هيكل المجلدات:

```
HOL-Backend/
├── Controllers/          # API Controllers (REST Endpoints)
├── Services/             # Business Logic Layer
├── Repositories/         # Data Access Layer
├── Domain/Entities/      # Database Entities (Models)
├── DTOs/                 # Data Transfer Objects
├── Interfaces/           # Repository & Service Interfaces
├── Infrastructure/       # Infrastructure Components
│   ├── SignalR/         # SignalR Hub
│   ├── Cloudflare/      # Cloudflare Integration
│   └── Swagger/         # Swagger Configuration
├── Data/                 # DbContext & Migrations
└── Program.cs            # Application Entry Point
```

---

## 🔑 المكونات الرئيسية

### 1️⃣ **Controllers (واجهات API)**

#### **AuthController** - المصادقة
- `POST /api/auth/login` - تسجيل الدخول
- `POST /api/auth/change-password` - تغيير كلمة المرور

#### **ClientsController** - إدارة الموكلين
- `GET /api/clients` - جلب كل الموكلين
- `GET /api/clients/{id}` - جلب موكل واحد
- `GET /api/clients/code/{code}` - جلب موكل بالكود
- `POST /api/clients` - إنشاء موكل جديد
- `POST /api/clients/{fileCode}/attachments` - رفع مرفق
- `GET /api/clients/{fileCode}/attachments` - جلب المرفقات
- `GET /api/clients/{fileCode}/contacts` - جلب أرقام التواصل
- `DELETE /api/clients/contacts/{contactId}` - حذف رقم تواصل
- `DELETE /api/clients/attachments/{attachmentId}` - حذف مرفق
- `GET /api/clients/attachments/{attachmentId}/download` - تحميل مرفق

#### **PaymentsController** - إدارة المدفوعات
- `GET /api/payments` - جلب كل المدفوعات
- `GET /api/payments/{id}` - جلب دفعة واحدة
- `POST /api/payments` - إنشاء دفعة جديدة
- `PUT /api/payments/{id}` - تحديث دفعة
- `DELETE /api/payments/{id}` - حذف دفعة

#### **Controllers أخرى:**
- `UsersController` - إدارة المستخدمين
- `DepartmentsController` - إدارة الأقسام
- `MainfilesController` - إدارة الملفات الرئيسية
- `NotesController` - إدارة الملاحظات
- `ErrorController` - معالجة الأخطاء

---

### 2️⃣ **Services (طبقة الأعمال)**

#### **UserService** - خدمة المستخدمين
- إدارة المستخدمين (CRUD)
- تسجيل الدخول (`LoginAsync`)
- تغيير كلمة المرور (`ChangePasswordAsync`)
- توليد JWT Token

#### **ClientService** - خدمة الموكلين
- إنشاء موكل جديد (`CreateClientAsync`)
- جلب الموكلين (`GetAllClientsAsync`, `GetClientByIdAsync`)
- إدارة المرفقات (`AddAttachmentAsync`, `DeleteAttachmentAsync`)
- إدارة أرقام التواصل (`GetClientContactsAsync`, `DeleteContactAsync`)

#### **JwtService** - خدمة JWT
- توليد Token (`GenerateToken`)
- التحقق من Token (`ValidateToken`)
- استخراج UserId من Token (`GetUserIdFromToken`)

#### **NotificationService** - خدمة الإشعارات
- بث إشعارات لجميع المستخدمين (`BroadcastToAllAsync`)
- بث إشعارات لمجموعة معينة (`BroadcastToChannelAsync`)
- بث إشعارات لمستخدم معين (`BroadcastToUserAsync`)

#### **PasswordHasher** - تشفير كلمات المرور
- استخدام **BCrypt.Net** لتشفير كلمات المرور
- `HashPassword` - تشفير كلمة المرور
- `VerifyPassword` - التحقق من كلمة المرور

---

### 3️⃣ **Repositories (طبقة الوصول للبيانات)**

جميع الـ Repositories ترث من `BaseRepository<T>` الذي يوفر:
- `GetByIdAsync` - جلب بواسطة ID
- `GetAllAsync` - جلب كل السجلات
- `AddAsync` - إضافة سجل جديد
- `UpdateAsync` - تحديث سجل
- `DeleteAsync` - حذف سجل
- `GetPagedAsync` - جلب مع Pagination

#### **Repositories المتاحة:**
- `UserRepository` - المستخدمين
- `MainfileRepository` - الملفات الرئيسية (الموكلين)
- `FileDetailRepository` - تفاصيل الملفات
- `PaymentRepository` - المدفوعات
- `DepartmentRepository` - الأقسام
- `AttachmentRepository` - المرفقات
- `CallcenterStatementRepository` - أرقام التواصل
- `AdditionalAmountRepository` - المبالغ الإضافية
- `NoteRepository` - الملاحظات
- `MailRepository` - الرسائل
- وغيرها...

---

### 4️⃣ **Domain Entities (الكيانات)**

#### **User** - المستخدم
```csharp
- Id, Code, Username, FullName, Email
- Role (admin, user, etc.)
- PasswordHashed, PasswordSalt
- CreatedAt
```

#### **Mainfile** - الموكل الأساسي
```csharp
- Id, Code, Name, Cid (الرقم المدني)
- Address, Nationality, DateAdded
- Work, Membership, CompanyEmail
- Partner1, Partner2, Partner3
- RegisterType, Note
```

#### **FileDetail** - تفاصيل الملف
```csharp
- FileCode (مرجع للموكل)
- DeptCode (كود القسم)
- ContractNo, LegalPlaintiff
- DeptAmount, DateFinished
- LawyerUser, CourtUser, MdUser, LegalAdvisorUser
- Permissions: CanViewInvoices, CanViewAttachments, etc.
```

#### **Payment** - المدفوعات
```csharp
- FileCode, DeptCode
- Value (المبلغ)
- JouralEntry, AlEntry
- UserAdded, DateAdded
- FileStatusAfter
- Commission, CommissionClosed
```

#### **Attachment** - المرفقات
```csharp
- FileCode, DeptCode
- Value (مسار الملف)
- AttachType, Notes
- UserAdded, DateAdded
```

#### **CallcenterStatement** - أرقام التواصل
```csharp
- FileCode, DeptCode
- PhoneNumber, PhoneOwner (نسبة القرابة)
- UserAdded, DateAdded
```

#### **AdditionalAmount** - المبالغ الإضافية
```csharp
- FileCode, DeptCode
- AmountType (نوع المبلغ)
- Value, Enabled
- UserAdded, DateAdded
```

#### **Entities أخرى:**
- `Department` - الأقسام
- `Note` - الملاحظات
- `Mail` - الرسائل
- `FileStatus` - حالة الملف
- `FileClassification` - تصنيف الملف
- `AuditsFile` - سجلات التدقيق
- `AutoNumber` - الأرقام التلقائية

---

### 5️⃣ **Infrastructure (البنية التحتية)**

#### **SignalR Hub** (`NotificationsHub`)
- Route: `/hubs/notifications`
- يدعم Groups (Channels) للإشعارات المستهدفة
- Events متاحة:
  - `client:created` - موكل جديد
  - `client:attachment_added` - مرفق جديد
  - `client:contact_deleted` - حذف رقم تواصل
  - `payment:created` - دفعة جديدة
  - `user:logged_in` - تسجيل دخول

#### **Cloudflare Integration**
- IP Forwarding (`CF-Connecting-IP`)
- Ray ID Tracking
- Middleware للتعامل مع Cloudflare

#### **Swagger Configuration**
- توثيق API تلقائي
- دعم File Upload
- Filters مخصصة

---

## 🔐 الأمان (Security)

### ✅ **ما هو موجود:**
1. **JWT Authentication**
   - Token-based authentication
   - Expiry time: 60 دقيقة (قابل للتعديل)
   - Claims: UserId, Username, Role

2. **Password Hashing**
   - BCrypt.Net (آمن)
   - Salt مدمج في الـ Hash

3. **Authorization Policies**
   - `AdminOnly` - للمسؤولين فقط
   - `UserOnly` - للمستخدمين المصادق عليهم

4. **CORS Configuration**
   - Origins محددة في Production
   - Credentials support

5. **HTTPS Redirection**
   - في Production فقط

### ⚠️ **ما يحتاج تحسين:**
1. **Rate Limiting** - غير موجود
2. **File Upload Validation** - محدود
3. **Input Validation** - يحتاج تحسين

---

## 📊 قاعدة البيانات

### **Connection String:**
```json
Server=192.168.30.151,1433
Database=New-Crm
User Id=sa
Password=HouseOfLaw@123
```

### **Migrations:**
- Entity Framework Migrations موجودة في `Migrations/`
- Migration الأخيرة: `20251204131635_InitialCreate`

### **Decimal Precision:**
- `DeptAmount`, `Value`, `PromiseAmount`: `decimal(18,3)`

---

## 🔄 تدفق البيانات (Data Flow)

### **مثال: إنشاء موكل جديد**

1. **Frontend** → `POST /api/clients` (CreateClientDto)
2. **ClientsController** → `ClientService.CreateClientAsync()`
3. **ClientService**:
   - إنشاء `Mainfile` (الموكل الأساسي)
   - إنشاء `FileDetail` (تفاصيل الملف)
   - إنشاء `CallcenterStatement` (أرقام التواصل)
   - إنشاء `AdditionalAmount` (البيانات المالية)
4. **Repositories** → حفظ في قاعدة البيانات
5. **SignalR** → بث إشعار `client:created` لجميع المستخدمين
6. **Response** → `ClientDto` مع Status 201

---

## 📡 SignalR Events

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

## 🛠️ التكوين (Configuration)

### **appsettings.json:**

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "..."
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
  },
  "Cloudflare": {
    "RewriteClientIp": true
  }
}
```

---

## 📦 Dependencies (الحزم المستخدمة)

```xml
- Microsoft.EntityFrameworkCore.SqlServer (8.0.22)
- Microsoft.EntityFrameworkCore.Design (8.0.22)
- Microsoft.AspNetCore.Authentication.JwtBearer (8.0.0)
- System.IdentityModel.Tokens.Jwt (8.0.0)
- BCrypt.Net-Next (4.0.3)
- Swashbuckle.AspNetCore (6.6.2)
```

---

## 🚀 نقاط القوة

1. ✅ **Architecture جيدة** - Repository Pattern + Service Layer
2. ✅ **JWT Authentication** - آمن ومحترف
3. ✅ **SignalR Integration** - إشعارات فورية
4. ✅ **Swagger Documentation** - توثيق تلقائي
5. ✅ **Error Handling** - معالجة أخطاء
6. ✅ **Logging** - تسجيل الأحداث
7. ✅ **CORS Configuration** - دعم Frontend
8. ✅ **File Upload Support** - رفع الملفات

---

## 🔧 نقاط التحسين المقترحة

1. ⚠️ **Rate Limiting** - حماية من DDoS
2. ⚠️ **Input Validation** - تحسين Validation
3. ⚠️ **File Upload Security** - فحص الملفات
4. ⚠️ **Caching** - تحسين الأداء
5. ⚠️ **Unit Tests** - اختبارات تلقائية
6. ⚠️ **API Versioning** - إدارة الإصدارات

---

## 📝 ملاحظات مهمة

1. **File Storage**: الملفات تُحفظ في `wwwroot/uploads/attachments/`
2. **Auto Numbering**: يستخدم `AutoNumber` entity
3. **Permissions**: مخزنة في `FileDetail` (CanViewInvoices, etc.)
4. **Financial Data**: تُحفظ في `AdditionalAmount` table
5. **Contacts**: تُحفظ في `CallcenterStatement` table

---

## 🎯 الخلاصة

هذا مشروع **Backend API متكامل** لنظام CRM قانوني، مبني بأفضل الممارسات:
- ✅ Architecture نظيفة ومنظمة
- ✅ Security جيدة (JWT + BCrypt)
- ✅ Real-time Notifications (SignalR)
- ✅ Documentation (Swagger)
- ✅ Error Handling & Logging

المشروع جاهز للاستخدام في **Development**، ويحتاج بعض التحسينات للـ **Production** (Rate Limiting, File Validation, etc.)

---

**تاريخ الإنشاء:** 2024  
**الإصدار:** 1.0  
**اللغة:** C# (.NET 8.0)  
**قاعدة البيانات:** SQL Server

