# 🌐 API Endpoints Documentation - House of Law CRM

## 📋 Base URL
```
Development: http://localhost:5000
Production: https://api.houseoflaw.com
```

---

## 🔐 Authentication

### **POST** `/api/auth/login`
تسجيل الدخول والحصول على JWT Token

**Request Body:**
```json
{
  "username": "admin",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin",
    "fullName": "أحمد محمد",
    "email": "admin@houseoflaw.com",
    "role": "admin"
  }
}
```

**Response (401 Unauthorized):**
```json
{
  "error": "اسم المستخدم أو كلمة المرور غير صحيحة"
}
```

**SignalR Event:**
```javascript
{
  type: "user:logged_in",
  data: { userId: 1, username: "admin" },
  timestamp: "2024-01-04T10:00:00Z"
}
```

---

### **POST** `/api/auth/change-password`
تغيير كلمة المرور

**Request Body:**
```json
{
  "userId": 1,
  "currentPassword": "oldpassword123",
  "newPassword": "newpassword456"
}
```

**Response (200 OK):**
```json
{
  "message": "تم تغيير كلمة المرور بنجاح"
}
```

**Response (400 Bad Request):**
```json
{
  "error": "كلمة المرور الحالية غير صحيحة"
}
```

**SignalR Event:**
```javascript
{
  type: "password:changed",
  data: { userId: 1 },
  timestamp: "2024-01-04T10:00:00Z"
}
```

---

## 👥 Clients (الموكلين)

### **GET** `/api/clients`
جلب كل الموكلين

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "code": 12345,
    "name": "أحمد محمد",
    "cid": "123456789",
    "address": "الكويت",
    "dateAdded": "2024-01-01T10:00:00Z",
    "nationality": "كويتي",
    "contractNo": "C-2024-001",
    "legalPlaintiff": "محمد علي",
    "sector": "القطاع التجاري",
    "contractDetails": "عقد استشارات قانونية"
  }
]
```

---

### **GET** `/api/clients/{id}`
جلب موكل واحد بالـ ID

**Parameters:**
- `id` (path): ID الموكل

**Response (200 OK):**
```json
{
  "id": 1,
  "code": 12345,
  "name": "أحمد محمد",
  "cid": "123456789",
  "address": "الكويت",
  "dateAdded": "2024-01-01T10:00:00Z",
  "nationality": "كويتي",
  "contractNo": "C-2024-001",
  "legalPlaintiff": "محمد علي",
  "sector": "القطاع التجاري",
  "contractDetails": "عقد استشارات قانونية"
}
```

**Response (404 Not Found):**
```json
{
  "error": "الموكل غير موجود"
}
```

---

### **GET** `/api/clients/code/{code}`
جلب موكل بالـ Code

**Parameters:**
- `code` (path): كود الموكل

**Response (200 OK):**
```json
{
  "id": 1,
  "code": 12345,
  "name": "أحمد محمد",
  "cid": "123456789",
  "address": "الكويت",
  "dateAdded": "2024-01-01T10:00:00Z",
  "nationality": "كويتي",
  "contractNo": "C-2024-001",
  "legalPlaintiff": "محمد علي",
  "sector": "القطاع التجاري",
  "contractDetails": "عقد استشارات قانونية"
}
```

---

### **POST** `/api/clients`
إنشاء موكل جديد

**Request Body:**
```json
{
  "code": 12345,
  "name": "أحمد محمد",
  "cid": "123456789",
  "address": "الكويت",
  "nationality": "كويتي",
  
  // بيانات الشركة (اختياري)
  "work": "شركة ABC",
  "membership": "عضو",
  "companyEmail": "info@abc.com",
  "companyFax": "12345678",
  "companyRegister": "CR-12345",
  "partner1": "محمد علي",
  "partner2": "أحمد خالد",
  "partner3": "سعد محمود",
  "registerType": "شركة ذات مسؤولية محدودة",
  "note": "ملاحظات عامة",
  
  // بيانات العقد
  "contractNumber": "C-2024-001",
  "contractYear": 2024,
  "sector": "القطاع التجاري",
  "legalClaimant": "محمد علي",
  "contractDetails": "عقد استشارات قانونية",
  
  // FileDetail
  "patchNo": "P-001",
  "courtEmployee": 5,
  "dateFinished": "2024-12-31T23:59:59Z",
  "deptAmount": 5000.000,
  "lawyerUser": 2,
  "courtUser": 3,
  "mdUser": 4,
  "legalAdvisorUser": 5,
  
  // أرقام التواصل
  "contacts": [
    {
      "phone": "12345678",
      "relation": "الموكل"
    },
    {
      "phone": "87654321",
      "relation": "الزوجة"
    }
  ],
  
  // الصلاحيات
  "permissions": {
    "canViewInvoices": true,
    "canViewAttachments": true,
    "canViewFinancialMatrix": false,
    "canReceiveAutomatedMessages": true
  },
  
  // البيانات المالية
  "financialEntries": [
    {
      "type": "رسوم المحكمة",
      "values": {
        "amount": "1000.000",
        "description": "رسوم التقاضي"
      }
    },
    {
      "type": "أتعاب المحاماة",
      "values": {
        "amount": "2000.000",
        "description": "أتعاب المحامي"
      }
    }
  ],
  
  // القسم
  "deptCode": 1,
  "userAdded": 1
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "code": 12345,
  "name": "أحمد محمد",
  "cid": "123456789",
  "address": "الكويت",
  "dateAdded": "2024-01-01T10:00:00Z",
  "nationality": "كويتي",
  "contractNo": "C-2024-001",
  "legalPlaintiff": "محمد علي",
  "sector": "القطاع التجاري",
  "contractDetails": "عقد استشارات قانونية"
}
```

**Response (400 Bad Request):**
```json
{
  "errors": {
    "code": ["كود الموكل مطلوب"],
    "name": ["اسم الموكل مطلوب"]
  }
}
```

**SignalR Event:**
```javascript
{
  type: "client:created",
  data: {
    clientId: 1,
    code: 12345,
    name: "أحمد محمد"
  },
  timestamp: "2024-01-04T10:00:00Z"
}
```

---

### **POST** `/api/clients/{fileCode}/attachments`
رفع مرفق للموكل

**Parameters:**
- `fileCode` (path): كود الموكل

**Request (multipart/form-data):**
```
file: [binary file]
deptCode: 1
note: "عقد الاستشارة"
attachType: "عقد"
userAdded: 1
```

**Response (201 Created):**
```json
{
  "id": 1,
  "note": "عقد الاستشارة",
  "dateAdded": "2024-01-01T10:00:00Z",
  "userAdded": 1,
  "fileName": "contract_12345_20240101.pdf",
  "filePath": "/uploads/attachments/contract_12345_20240101.pdf"
}
```

**Response (400 Bad Request):**
```json
{
  "error": "الملف مطلوب"
}
```

**SignalR Event:**
```javascript
{
  type: "client:attachment_added",
  data: {
    fileCode: 12345,
    attachmentId: 1,
    fileName: "contract_12345_20240101.pdf"
  },
  timestamp: "2024-01-04T10:00:00Z"
}
```

---

### **GET** `/api/clients/{fileCode}/attachments`
جلب مرفقات الموكل

**Parameters:**
- `fileCode` (path): كود الموكل

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "note": "عقد الاستشارة",
    "dateAdded": "2024-01-01T10:00:00Z",
    "userAdded": 1,
    "fileName": "contract_12345_20240101.pdf",
    "filePath": "/uploads/attachments/contract_12345_20240101.pdf"
  },
  {
    "id": 2,
    "note": "صورة الهوية",
    "dateAdded": "2024-01-02T10:00:00Z",
    "userAdded": 1,
    "fileName": "id_12345_20240102.pdf",
    "filePath": "/uploads/attachments/id_12345_20240102.pdf"
  }
]
```

---

### **GET** `/api/clients/attachments/{attachmentId}/download`
تحميل مرفق

**Parameters:**
- `attachmentId` (path): ID المرفق

**Response (200 OK):**
```
Content-Type: application/pdf
Content-Disposition: attachment; filename="contract_12345_20240101.pdf"

[binary file content]
```

**Response (404 Not Found):**
```json
{
  "error": "المرفق غير موجود"
}
```

---

### **DELETE** `/api/clients/attachments/{attachmentId}`
حذف مرفق

**Parameters:**
- `attachmentId` (path): ID المرفق

**Response (204 No Content)**

**Response (404 Not Found):**
```json
{
  "error": "المرفق غير موجود"
}
```

**SignalR Event:**
```javascript
{
  type: "client:attachment_deleted",
  data: { attachmentId: 1 },
  timestamp: "2024-01-04T10:00:00Z"
}
```

---

### **GET** `/api/clients/{fileCode}/contacts`
جلب أرقام التواصل للموكل

**Parameters:**
- `fileCode` (path): كود الموكل

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "phone": "12345678",
    "relation": "الموكل"
  },
  {
    "id": 2,
    "phone": "87654321",
    "relation": "الزوجة"
  }
]
```

---

### **DELETE** `/api/clients/contacts/{contactId}`
حذف رقم تواصل

**Parameters:**
- `contactId` (path): ID رقم التواصل

**Response (204 No Content)**

**Response (404 Not Found):**
```json
{
  "error": "رقم التواصل غير موجود"
}
```

**SignalR Event:**
```javascript
{
  type: "client:contact_deleted",
  data: { contactId: 1 },
  timestamp: "2024-01-04T10:00:00Z"
}
```

---

## 💰 Payments (المدفوعات)

### **GET** `/api/payments`
جلب كل المدفوعات

**Query Parameters:**
- `fileCode` (optional): كود الموكل
- `deptCode` (optional): كود القسم

**Examples:**
```
GET /api/payments
GET /api/payments?fileCode=12345
GET /api/payments?deptCode=1
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "fileCode": 12345,
    "deptCode": 1,
    "value": 1000.000,
    "dateAdded": "2024-01-01T10:00:00Z",
    "jouralEntry": "J-001",
    "alEntry": "AL-001",
    "userAdded": 1,
    "fileStatusAfter": "مدفوع جزئياً"
  }
]
```

---

### **GET** `/api/payments/{id}`
جلب دفعة واحدة

**Parameters:**
- `id` (path): ID الدفعة

**Response (200 OK):**
```json
{
  "id": 1,
  "fileCode": 12345,
  "deptCode": 1,
  "value": 1000.000,
  "dateAdded": "2024-01-01T10:00:00Z",
  "jouralEntry": "J-001",
  "alEntry": "AL-001",
  "userAdded": 1,
  "fileStatusAfter": "مدفوع جزئياً"
}
```

**Response (404 Not Found):**
```json
{
  "error": "الدفعة غير موجودة"
}
```

---

### **POST** `/api/payments`
إنشاء دفعة جديدة (سند قبض/صرف)

**Request Body:**
```json
{
  "fileCode": 12345,
  "deptCode": 1,
  "value": 1000.000,
  "jouralEntry": "J-001",
  "alEntry": "AL-001",
  "userAdded": 1,
  "fileStatusAfter": "مدفوع جزئياً"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "fileCode": 12345,
  "deptCode": 1,
  "value": 1000.000,
  "dateAdded": "2024-01-01T10:00:00Z",
  "jouralEntry": "J-001",
  "alEntry": "AL-001",
  "userAdded": 1,
  "fileStatusAfter": "مدفوع جزئياً"
}
```

**SignalR Events:**
```javascript
// Broadcast to all
{
  type: "payment:created",
  data: {
    paymentId: 1,
    fileCode: 12345,
    deptCode: 1,
    value: 1000.000,
    dateAdded: "2024-01-01T10:00:00Z"
  },
  timestamp: "2024-01-04T10:00:00Z"
}

// Broadcast to channel (finance-1)
{
  type: "payment:created",
  data: {
    paymentId: 1,
    value: 1000.000
  },
  timestamp: "2024-01-04T10:00:00Z"
}
```

---

### **PUT** `/api/payments/{id}`
تحديث دفعة

**Parameters:**
- `id` (path): ID الدفعة

**Request Body:**
```json
{
  "fileCode": 12345,
  "deptCode": 1,
  "value": 1500.000,
  "jouralEntry": "J-001-UPDATED",
  "alEntry": "AL-001-UPDATED",
  "fileStatusAfter": "مدفوع كاملاً"
}
```

**Response (204 No Content)**

**Response (404 Not Found):**
```json
{
  "error": "الدفعة غير موجودة"
}
```

**SignalR Event:**
```javascript
{
  type: "payment:updated",
  data: { paymentId: 1 },
  timestamp: "2024-01-04T10:00:00Z"
}
```

---

### **DELETE** `/api/payments/{id}`
حذف دفعة

**Parameters:**
- `id` (path): ID الدفعة

**Response (204 No Content)**

**Response (404 Not Found):**
```json
{
  "error": "الدفعة غير موجودة"
}
```

**SignalR Event:**
```javascript
{
  type: "payment:deleted",
  data: { paymentId: 1 },
  timestamp: "2024-01-04T10:00:00Z"
}
```

---

## 👤 Users (المستخدمين)

### **GET** `/api/users`
جلب كل المستخدمين

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "code": 100,
    "username": "admin",
    "fullName": "أحمد محمد",
    "email": "admin@houseoflaw.com",
    "role": "admin",
    "createdAt": "2024-01-01T10:00:00Z"
  }
]
```

---

### **GET** `/api/users/{id}`
جلب مستخدم واحد

**Parameters:**
- `id` (path): ID المستخدم

**Response (200 OK):**
```json
{
  "id": 1,
  "code": 100,
  "username": "admin",
  "fullName": "أحمد محمد",
  "email": "admin@houseoflaw.com",
  "role": "admin",
  "createdAt": "2024-01-01T10:00:00Z"
}
```

---

### **POST** `/api/users`
إنشاء مستخدم جديد

**Request Body:**
```json
{
  "code": 101,
  "username": "user1",
  "fullName": "محمد علي",
  "email": "user1@houseoflaw.com",
  "password": "password123",
  "role": "user"
}
```

**Response (201 Created):**
```json
{
  "id": 2,
  "code": 101,
  "username": "user1",
  "fullName": "محمد علي",
  "email": "user1@houseoflaw.com",
  "role": "user",
  "createdAt": "2024-01-01T10:00:00Z"
}
```

---

### **PUT** `/api/users/{id}`
تحديث مستخدم

**Parameters:**
- `id` (path): ID المستخدم

**Request Body:**
```json
{
  "code": 101,
  "username": "user1",
  "fullName": "محمد علي المحدث",
  "email": "user1.updated@houseoflaw.com",
  "role": "admin"
}
```

**Response (204 No Content)**

---

### **DELETE** `/api/users/{id}`
حذف مستخدم

**Parameters:**
- `id` (path): ID المستخدم

**Response (204 No Content)**

---

## 🏢 Departments (الأقسام)

### **GET** `/api/departments`
جلب كل الأقسام

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "code": 1,
    "name": "القسم القانوني"
  },
  {
    "id": 2,
    "code": 2,
    "name": "القسم المالي"
  }
]
```

---

### **GET** `/api/departments/{id}`
جلب قسم واحد

**Response (200 OK):**
```json
{
  "id": 1,
  "code": 1,
  "name": "القسم القانوني"
}
```

---

### **POST** `/api/departments`
إنشاء قسم جديد

**Request Body:**
```json
{
  "code": 3,
  "name": "قسم الاستشارات"
}
```

**Response (201 Created):**
```json
{
  "id": 3,
  "code": 3,
  "name": "قسم الاستشارات"
}
```

---

### **PUT** `/api/departments/{id}`
تحديث قسم

**Request Body:**
```json
{
  "code": 3,
  "name": "قسم الاستشارات القانونية"
}
```

**Response (204 No Content)**

---

### **DELETE** `/api/departments/{id}`
حذف قسم

**Response (204 No Content)**

---

## 📝 Notes (الملاحظات)

### **GET** `/api/notes?fileCode={fileCode}`
جلب ملاحظات موكل

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "fileCode": 12345,
    "deptCode": 1,
    "noteText": "تم التواصل مع الموكل",
    "userAdded": 1,
    "dateAdded": "2024-01-01T10:00:00Z"
  }
]
```

---

### **POST** `/api/notes`
إضافة ملاحظة

**Request Body:**
```json
{
  "fileCode": 12345,
  "deptCode": 1,
  "noteText": "تم التواصل مع الموكل",
  "userAdded": 1
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "fileCode": 12345,
  "deptCode": 1,
  "noteText": "تم التواصل مع الموكل",
  "userAdded": 1,
  "dateAdded": "2024-01-01T10:00:00Z"
}
```

---

## 🔔 SignalR Hub

### **Connection:**
```javascript
const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5000/hubs/notifications")
  .build();

await connection.start();
```

### **Join Channel:**
```javascript
await connection.invoke("JoinChannel", "finance-1");
```

### **Leave Channel:**
```javascript
await connection.invoke("LeaveChannel", "finance-1");
```

### **Listen to Events:**
```javascript
connection.on("broadcast", (message) => {
  console.log("Event Type:", message.type);
  console.log("Data:", message.data);
  console.log("Timestamp:", message.timestamp);
});
```

---

## 📊 Error Responses

### **400 Bad Request**
```json
{
  "error": "رسالة الخطأ",
  "errors": {
    "field1": ["خطأ في الحقل 1"],
    "field2": ["خطأ في الحقل 2"]
  }
}
```

### **401 Unauthorized**
```json
{
  "error": "غير مصرح لك بالوصول"
}
```

### **403 Forbidden**
```json
{
  "error": "ليس لديك صلاحية لهذا الإجراء"
}
```

### **404 Not Found**
```json
{
  "error": "المورد غير موجود"
}
```

### **500 Internal Server Error**
```json
{
  "error": "حدث خطأ في الخادم"
}
```

---

## 🔑 Authentication Headers

جميع الـ Endpoints (ما عدا `/api/auth/login`) تحتاج إلى JWT Token:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

**تاريخ الإنشاء:** 2026-01-04  
**الإصدار:** 1.0  
**Base URL:** http://localhost:5000  
**SignalR Hub:** /hubs/notifications
