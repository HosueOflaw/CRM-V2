# 🏛️ House of Law CRM - Backend API

<div align="center">

![.NET](https://img.shields.io/badge/.NET-8.0-512BD4?style=for-the-badge&logo=dotnet)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp)
![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens)
![SignalR](https://img.shields.io/badge/SignalR-512BD4?style=for-the-badge)

**نظام إدارة علاقات العملاء للمكاتب القانونية**

[المميزات](#-المميزات) • [التثبيت](#-التثبيت) • [الاستخدام](#-الاستخدام) • [التوثيق](#-التوثيق) • [المساهمة](#-المساهمة)

</div>

---

## 📋 نظرة عامة

**House of Law CRM Backend** هو نظام متكامل لإدارة علاقات العملاء (CRM) مصمم خصيصاً للمكاتب القانونية. يوفر النظام واجهة برمجية (API) قوية وآمنة لإدارة:

- ✅ **الموكلين** - معلومات الموكلين والملفات القانونية
- ✅ **المدفوعات** - سندات القبض والصرف
- ✅ **المرفقات** - المستندات والملفات
- ✅ **أرقام التواصل** - جهات الاتصال
- ✅ **الأقسام** - الأقسام القانونية المختلفة
- ✅ **المستخدمين** - موظفي المكتب القانوني
- ✅ **الملاحظات** - ملاحظات على الملفات
- ✅ **البيانات المالية** - المبالغ الإضافية والتفاصيل المالية

---

## 🚀 المميزات

### 🏗️ **بنية معمارية نظيفة**
- **Repository Pattern** - فصل طبقة الوصول للبيانات
- **Service Layer Pattern** - فصل منطق الأعمال
- **Dependency Injection** - إدارة Dependencies بكفاءة
- **Generic Repository** - إعادة استخدام الكود

### 🔐 **أمان عالي**
- **JWT Authentication** - مصادقة آمنة بالـ Tokens
- **BCrypt Password Hashing** - تشفير كلمات المرور
- **CORS Configuration** - حماية من Cross-Origin Attacks
- **SQL Injection Protection** - حماية من SQL Injection (EF Core)
- **Cloudflare Integration** - IP Forwarding & DDoS Protection

### 📡 **إشعارات فورية**
- **SignalR Hub** - إشعارات Real-time
- **Event Broadcasting** - بث الأحداث لجميع المستخدمين
- **Channel Support** - إشعارات مستهدفة لمجموعات معينة

### 📚 **توثيق تلقائي**
- **Swagger/OpenAPI** - توثيق API تلقائي
- **Interactive UI** - واجهة تفاعلية لاختبار APIs
- **File Upload Support** - دعم رفع الملفات في Swagger

### ⚡ **أداء عالي**
- **Async/Await** - عمليات غير متزامنة
- **Connection Pooling** - إدارة اتصالات قاعدة البيانات
- **Retry Logic** - إعادة المحاولة عند فشل الاتصال

---

## 🛠️ التقنيات المستخدمة

| التقنية | الإصدار | الاستخدام |
|---------|---------|-----------|
| **.NET** | 8.0 | Framework الأساسي |
| **ASP.NET Core** | 8.0 | Web API |
| **Entity Framework Core** | 8.0.22 | ORM |
| **SQL Server** | 2019+ | قاعدة البيانات |
| **JWT Bearer** | 8.0.0 | Authentication |
| **BCrypt.Net** | 4.0.3 | Password Hashing |
| **SignalR** | 8.0 | Real-time Notifications |
| **Swagger** | 6.6.2 | API Documentation |

---

## 📦 التثبيت

### **المتطلبات:**
- **.NET 8.0 SDK** أو أحدث
- **SQL Server 2019** أو أحدث
- **Visual Studio 2022** أو **VS Code**

### **الخطوات:**

1. **Clone المشروع:**
```bash
git clone https://github.com/your-org/house-of-law-backend.git
cd house-of-law-backend
```

2. **تحديث Connection String:**
```json
// appsettings.json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER;Database=New-Crm;User Id=sa;Password=YOUR_PASSWORD;TrustServerCertificate=True;Encrypt=False;"
  }
}
```

3. **تحديث JWT Secret:**
```json
// appsettings.json
{
  "Jwt": {
    "SecretKey": "YOUR_SECRET_KEY_AT_LEAST_32_CHARACTERS_LONG"
  }
}
```

4. **تشغيل Migrations:**
```bash
dotnet ef database update
```

5. **تشغيل المشروع:**
```bash
dotnet run
```

6. **الوصول إلى Swagger:**
```
http://localhost:5000/swagger
```

---

## 🎯 الاستخدام

### **1. تسجيل الدخول:**
```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin",
    "fullName": "أحمد محمد",
    "role": "admin"
  }
}
```

---

### **2. إنشاء موكل جديد:**
```bash
POST http://localhost:5000/api/clients
Authorization: Bearer {token}
Content-Type: application/json

{
  "code": 12345,
  "name": "أحمد محمد",
  "cid": "123456789",
  "address": "الكويت",
  "nationality": "كويتي",
  "contractNumber": "C-2024-001",
  "deptCode": 1,
  "userAdded": 1
}
```

---

### **3. رفع مرفق:**
```bash
POST http://localhost:5000/api/clients/12345/attachments
Authorization: Bearer {token}
Content-Type: multipart/form-data

file: [binary file]
deptCode: 1
note: "عقد الاستشارة"
attachType: "عقد"
userAdded: 1
```

---

### **4. الاتصال بـ SignalR:**
```javascript
const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5000/hubs/notifications")
  .build();

await connection.start();

connection.on("broadcast", (message) => {
  console.log("Event:", message.type);
  console.log("Data:", message.data);
});
```

---

## 📚 التوثيق

### **الملفات التوثيقية:**

| ملف | الوصف |
|-----|-------|
| [**QUICK_REFERENCE.md**](.agent/QUICK_REFERENCE.md) | مرجع سريع - أهم المعلومات |
| [**PROJECT_DEEP_ANALYSIS.md**](.agent/PROJECT_DEEP_ANALYSIS.md) | تحليل عميق شامل للمشروع |
| [**DATABASE_SCHEMA.md**](.agent/DATABASE_SCHEMA.md) | توثيق قاعدة البيانات والعلاقات |
| [**API_ENDPOINTS.md**](.agent/API_ENDPOINTS.md) | توثيق كامل لجميع API Endpoints |
| [**PROJECT_OVERVIEW.md**](PROJECT_OVERVIEW.md) | نظرة عامة على المشروع |

### **Swagger Documentation:**
```
http://localhost:5000/swagger
```

---

## 🏗️ البنية المعمارية

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
└─────────────────────────────────────────┘
```

---

## 📊 قاعدة البيانات

### **الجداول الرئيسية:**

```
mainfiles (الموكلين)
    ├── file_details (تفاصيل الملفات)
    ├── payments (المدفوعات)
    ├── attachments (المرفقات)
    ├── callcenter_statements (أرقام التواصل)
    ├── additional_amounts (المبالغ الإضافية)
    ├── notes (الملاحظات)
    └── mails (الرسائل)

users (المستخدمين)
departments (الأقسام)
file_statuses (حالات الملفات)
file_classifications (تصنيفات الملفات)
```

**للتفاصيل الكاملة:** راجع [DATABASE_SCHEMA.md](.agent/DATABASE_SCHEMA.md)

---

## 🔔 SignalR Events

| Event | متى يحدث | البيانات |
|-------|----------|----------|
| `client:created` | إضافة موكل جديد | `{ clientId, code, name }` |
| `client:attachment_added` | إضافة مرفق | `{ fileCode, attachmentId, fileName }` |
| `payment:created` | إضافة دفعة | `{ paymentId, fileCode, value }` |
| `user:logged_in` | تسجيل دخول | `{ userId, username }` |

**SignalR Hub:** `/hubs/notifications`

---

## 🔐 الأمان

### ✅ **موجود:**
- [x] JWT Authentication (60 دقيقة Expiry)
- [x] BCrypt Password Hashing (Work Factor: 12)
- [x] CORS Configuration
- [x] HTTPS Redirection (Production)
- [x] SQL Injection Protection (EF Core)
- [x] Cloudflare Integration

### ⚠️ **يحتاج إضافة (للـ Production):**
- [ ] Rate Limiting
- [ ] File Upload Validation (MIME Type, Size, Anti-Virus)
- [ ] Input Validation (FluentValidation)
- [ ] API Versioning

---

## 🧪 الاختبار

### **تشغيل Tests:**
```bash
dotnet test
```

### **Coverage Report:**
```bash
dotnet test /p:CollectCoverage=true
```

---

## 🚀 النشر (Deployment)

### **1. Build للـ Production:**
```bash
dotnet publish -c Release -o ./publish
```

### **2. تحديث appsettings.Production.json:**
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "PRODUCTION_CONNECTION_STRING"
  },
  "Jwt": {
    "SecretKey": "PRODUCTION_SECRET_KEY"
  },
  "Cors": {
    "AllowedOrigins": [
      "https://your-production-domain.com"
    ]
  }
}
```

### **3. تشغيل على IIS/Azure/Docker:**
- **IIS:** انسخ مجلد `publish` إلى IIS
- **Azure:** استخدم Azure App Service
- **Docker:** استخدم Dockerfile المرفق

---

## 📈 الأداء

### **Benchmarks:**
- **Login:** ~50ms
- **Create Client:** ~100ms
- **Get Clients (100 records):** ~80ms
- **Upload Attachment (1MB):** ~200ms

### **Database:**
- **Connection Pooling:** Enabled
- **Retry Logic:** 3 attempts, 30s delay
- **Decimal Precision:** (18,3)

---

## 🤝 المساهمة

نرحب بالمساهمات! يرجى اتباع الخطوات التالية:

1. **Fork المشروع**
2. **إنشاء Branch جديد** (`git checkout -b feature/AmazingFeature`)
3. **Commit التغييرات** (`git commit -m 'Add some AmazingFeature'`)
4. **Push إلى Branch** (`git push origin feature/AmazingFeature`)
5. **فتح Pull Request**

### **معايير الكود:**
- استخدم **Clean Code** principles
- اتبع **C# Coding Conventions**
- أضف **Unit Tests** للـ Features الجديدة
- حدّث **التوثيق** عند الحاجة

---

## 📝 الترخيص

هذا المشروع مرخص تحت **MIT License** - راجع ملف [LICENSE](LICENSE) للتفاصيل.

---

## 👥 الفريق

- **المطور الرئيسي:** House of Law Team
- **المحلل:** Antigravity AI
- **التاريخ:** 2024-2026

---

## 📞 الدعم

للحصول على الدعم:
- 📧 **Email:** support@houseoflaw.com
- 📚 **التوثيق:** راجع مجلد `.agent/`
- 🐛 **Issues:** افتح Issue على GitHub

---

## 🎯 Roadmap

### **الإصدار 1.0** (الحالي)
- [x] JWT Authentication
- [x] CRUD Operations (Clients, Payments, Users)
- [x] SignalR Integration
- [x] File Upload/Download
- [x] Swagger Documentation

### **الإصدار 1.1** (قريباً)
- [ ] Rate Limiting
- [ ] Advanced File Validation
- [ ] FluentValidation
- [ ] Unit Tests (80%+ Coverage)

### **الإصدار 2.0** (المستقبل)
- [ ] API Versioning
- [ ] Caching (Redis)
- [ ] Health Checks
- [ ] Distributed Tracing (OpenTelemetry)
- [ ] Microservices Architecture

---

## 🙏 شكر خاص

- **Microsoft** - .NET Framework
- **Entity Framework Team** - EF Core
- **BCrypt.Net Contributors** - Password Hashing
- **SignalR Team** - Real-time Communication

---

<div align="center">

**صُنع بـ ❤️ بواسطة House of Law Team**

[⬆ العودة للأعلى](#-house-of-law-crm---backend-api)

</div>
