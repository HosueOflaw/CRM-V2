# 🗄️ Database Schema - House of Law CRM

## 📊 Entity Relationship Diagram (ERD)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         DATABASE SCHEMA                                  │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐
│     users        │
├──────────────────┤
│ PK: id           │
│    code          │
│    username      │
│    full_name     │
│    email         │
│    role          │
│    created_at    │
│    PasswordHashed│
│    PasswordSalt  │
└──────────────────┘
         │
         │ (UserAdded)
         ▼
┌──────────────────┐         ┌──────────────────┐
│   mainfiles      │◄────────│  file_details    │
├──────────────────┤  1:1    ├──────────────────┤
│ PK: id           │         │ PK: id           │
│ UK: code         │─────────│ FK: file_code    │
│    name          │         │ FK: dept_code    │
│    cid           │         │    reason        │
│    address       │         │    patch_no      │
│    date_added    │         │    court_employee│
│    nationality   │         │    client        │
│    archive       │         │    date_added    │
│    note_         │         │    date_finished │
│    work          │         │    contract_no   │
│    membership    │         │    dept_amount   │
│    company_email │         │    legal_plaintiff│
│    company_fax   │         │    lawyer_user   │
│    company_register│       │    court_user    │
│    partner1      │         │    md_user       │
│    partner2      │         │    legal_advisor_user│
│    partner3      │         │    can_view_invoices│
│    register_type │         │    can_view_attachments│
│    kafala_added_by│        │    can_view_financial_matrix│
└──────────────────┘         │    can_receive_automated_messages│
         │                   └──────────────────┘
         │                            │
         │                            │ (DeptCode)
         │                            ▼
         │                   ┌──────────────────┐
         │                   │   departments    │
         │                   ├──────────────────┤
         │                   │ PK: id           │
         │                   │ UK: code         │
         │                   │    name          │
         │                   └──────────────────┘
         │
         │ (FileCode)
         ├─────────────────────────────────────────┐
         │                                         │
         ▼                                         ▼
┌──────────────────┐                     ┌──────────────────┐
│    payments      │                     │   attachments    │
├──────────────────┤                     ├──────────────────┤
│ PK: id           │                     │ PK: id           │
│ FK: file_code    │                     │ FK: file_code    │
│ FK: dept_code    │                     │ FK: dept_code    │
│    value         │                     │    value (path)  │
│    date_added    │                     │    attach_type   │
│    joural_entry  │                     │    notes         │
│    al_entry      │                     │    user_added    │
│    user_added    │                     │    date_added    │
│    user_updated  │                     └──────────────────┘
│    callcenter_user│
│    court_user    │
│    advisor_user  │
│    lawyer_user   │
│    translate_date│
│    translate_back_date│
│    client_closed │
│    journal_closed│
│    file_status_after│
│    commission    │
│    commission_closed│
└──────────────────┘
         │
         │ (FileCode)
         ▼
┌──────────────────┐
│callcenter_statements│
├──────────────────┤
│ PK: id           │
│ FK: file_code    │
│ FK: dept_code    │
│    date_added    │
│    notes         │
│    contact_method│
│    connected_status│
│    phone_number  │
│    next_action   │
│    next_date     │
│    promise_amount│
│    phone_owner   │
│    user_added    │
└──────────────────┘
         │
         │ (FileCode)
         ▼
┌──────────────────┐
│additional_amounts│
├──────────────────┤
│ PK: id           │
│ FK: file_code    │
│ FK: dept_code    │
│    value         │
│    amount_type   │
│    user_added    │
│    date_added    │
│    user_updated  │
│    date_updated  │
│    enabled       │
└──────────────────┘
         │
         │ (FileCode)
         ▼
┌──────────────────┐
│      notes       │
├──────────────────┤
│ PK: id           │
│ FK: file_code    │
│ FK: dept_code    │
│    note_text     │
│    user_added    │
│    date_added    │
└──────────────────┘
         │
         │ (FileCode)
         ▼
┌──────────────────┐
│      mails       │
├──────────────────┤
│ PK: id           │
│ FK: file_code    │
│ FK: dept_code    │
│    subject       │
│    body          │
│    user_added    │
│    date_added    │
└──────────────────┘
         │
         │ (FileCode)
         ▼
┌──────────────────┐
│  audits_files    │
├──────────────────┤
│ PK: id           │
│ FK: file_code    │
│    action        │
│    user_id       │
│    date_added    │
└──────────────────┘

┌──────────────────┐
│ file_statuses    │
├──────────────────┤
│ PK: id           │
│    code          │
│    name          │
│    color         │
└──────────────────┘

┌──────────────────┐
│file_classifications│
├──────────────────┤
│ PK: id           │
│    code          │
│    name          │
│    description   │
└──────────────────┘

┌──────────────────┐
│  auto_numbers    │
├──────────────────┤
│ PK: id           │
│    table_name    │
│    prefix        │
│    current_number│
│    year          │
└──────────────────┘
```

---

## 📋 Tables Details

### 1. **mainfiles** (الموكلين الأساسيين)
**الغرض:** تخزين البيانات الأساسية للموكلين (أفراد أو شركات)

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | bigint | NO | Primary Key |
| code | int | NO | كود الموكل (فريد) |
| name | nvarchar | YES | اسم الموكل |
| cid | nvarchar | YES | الرقم المدني |
| address | nvarchar | YES | العنوان |
| date_added | datetime | YES | تاريخ الإضافة |
| nationality | nvarchar | YES | الجنسية |
| archive | bit | YES | أرشيف |
| note_ | nvarchar | YES | ملاحظات |
| work | nvarchar | YES | العمل |
| membership | nvarchar | YES | العضوية |
| company_email | nvarchar | YES | بريد الشركة |
| company_fax | nvarchar | YES | فاكس الشركة |
| company_register | nvarchar | YES | سجل الشركة |
| partner1 | nvarchar | YES | الشريك الأول |
| partner2 | nvarchar | YES | الشريك الثاني |
| partner3 | nvarchar | YES | الشريك الثالث |
| register_type | nvarchar | YES | نوع السجل |
| kafala_added_by | int | YES | مضاف بواسطة (كفالة) |

**Indexes:**
- PRIMARY KEY: `id`
- UNIQUE KEY: `code`

---

### 2. **file_details** (تفاصيل الملفات القانونية)
**الغرض:** تخزين تفاصيل الملف القانوني لكل موكل

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| file_code | bigint | YES | Foreign Key → mainfiles.code |
| dept_code | bigint | YES | Foreign Key → departments.code |
| reason | nvarchar | YES | سبب الملف |
| patch_no | nvarchar | YES | رقم الدفعة |
| court_employee | int | YES | موظف المحكمة |
| client | nvarchar | YES | العميل |
| date_added | datetime | YES | تاريخ الإضافة |
| date_finished | datetime | YES | تاريخ الانتهاء |
| contract_no | nvarchar | YES | رقم العقد |
| dept_amount | decimal(18,3) | YES | المبلغ |
| legal_plaintiff | nvarchar | YES | المدعي القانوني |
| lawyer_user | int | YES | المحامي |
| court_user | int | YES | موظف المحكمة |
| md_user | int | YES | MD |
| legal_advisor_user | int | YES | المستشار القانوني |
| can_view_invoices | bit | YES | صلاحية عرض الفواتير |
| can_view_attachments | bit | YES | صلاحية عرض المرفقات |
| can_view_financial_matrix | bit | YES | صلاحية عرض المصفوفة المالية |
| can_receive_automated_messages | bit | YES | صلاحية استقبال الرسائل التلقائية |

**Relationships:**
- `file_code` → `mainfiles.code` (1:1)
- `dept_code` → `departments.code` (Many:1)

---

### 3. **payments** (المدفوعات)
**الغرض:** تخزين سندات القبض والصرف

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| file_code | bigint | YES | Foreign Key → mainfiles.code |
| dept_code | bigint | YES | Foreign Key → departments.code |
| value | decimal(18,3) | YES | المبلغ |
| date_added | datetime | YES | تاريخ الإضافة |
| joural_entry | nvarchar | YES | قيد اليومية |
| al_entry | nvarchar | YES | القيد |
| user_added | int | YES | المستخدم المضيف |
| user_updated | int | YES | المستخدم المحدث |
| callcenter_user | int | YES | موظف Call Center |
| court_user | int | YES | موظف المحكمة |
| advisor_user | int | YES | المستشار |
| lawyer_user | int | YES | المحامي |
| translate_date | datetime | YES | تاريخ الترجمة |
| translate_back_date | datetime | YES | تاريخ الترجمة العكسية |
| client_closed | bit | YES | مغلق من العميل |
| journal_closed | bit | YES | مغلق من اليومية |
| file_status_after | nvarchar | YES | حالة الملف بعد الدفع |
| commission | int | YES | العمولة |
| commission_closed | bit | YES | العمولة مغلقة |

**Relationships:**
- `file_code` → `mainfiles.code` (Many:1)
- `dept_code` → `departments.code` (Many:1)

---

### 4. **attachments** (المرفقات)
**الغرض:** تخزين المستندات والملفات المرفقة

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| file_code | bigint | YES | Foreign Key → mainfiles.code |
| dept_code | bigint | YES | Foreign Key → departments.code |
| value | nvarchar | YES | مسار الملف |
| attach_type | nvarchar | YES | نوع المرفق |
| notes | nvarchar | YES | ملاحظات |
| user_added | int | YES | المستخدم المضيف |
| date_added | datetime | YES | تاريخ الإضافة |

**Storage Path:** `wwwroot/uploads/attachments/`

**Relationships:**
- `file_code` → `mainfiles.code` (Many:1)
- `dept_code` → `departments.code` (Many:1)

---

### 5. **callcenter_statements** (أرقام التواصل)
**الغرض:** تخزين أرقام الهواتف وبيانات التواصل

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| file_code | bigint | YES | Foreign Key → mainfiles.code |
| dept_code | bigint | YES | Foreign Key → departments.code |
| date_added | datetime | YES | تاريخ الإضافة |
| notes | nvarchar | YES | ملاحظات |
| contact_method | nvarchar | YES | طريقة التواصل |
| connected_status | nvarchar | YES | حالة الاتصال |
| phone_number | nvarchar | YES | رقم الهاتف |
| next_action | nvarchar | YES | الإجراء التالي |
| next_date | datetime | YES | التاريخ التالي |
| promise_amount | decimal(18,3) | YES | المبلغ الموعود |
| phone_owner | nvarchar | YES | نسبة القرابة |
| user_added | int | YES | المستخدم المضيف |

**Relationships:**
- `file_code` → `mainfiles.code` (Many:1)
- `dept_code` → `departments.code` (Many:1)

---

### 6. **additional_amounts** (المبالغ الإضافية)
**الغرض:** تخزين البيانات المالية الإضافية

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| file_code | bigint | YES | Foreign Key → mainfiles.code |
| dept_code | bigint | YES | Foreign Key → departments.code |
| value | decimal(18,3) | YES | المبلغ |
| amount_type | nvarchar | YES | نوع المبلغ |
| user_added | int | YES | المستخدم المضيف |
| date_added | datetime | YES | تاريخ الإضافة |
| user_updated | int | YES | المستخدم المحدث |
| date_updated | datetime | YES | تاريخ التحديث |
| enabled | bit | YES | مفعل |

**Relationships:**
- `file_code` → `mainfiles.code` (Many:1)
- `dept_code` → `departments.code` (Many:1)

---

### 7. **users** (المستخدمين)
**الغرض:** تخزين بيانات موظفي المكتب القانوني

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| code | int | YES | كود المستخدم |
| username | nvarchar | YES | اسم المستخدم |
| full_name | nvarchar | YES | الاسم الكامل |
| email | nvarchar | YES | البريد الإلكتروني |
| role | nvarchar | YES | الدور (admin, user, etc.) |
| created_at | datetime | YES | تاريخ الإنشاء |
| PasswordHashed | nvarchar | YES | كلمة المرور المشفرة (BCrypt) |
| PasswordSalt | nvarchar | YES | Salt (غير مستخدم - BCrypt يدمج Salt) |

**Indexes:**
- PRIMARY KEY: `id`
- UNIQUE KEY: `username`

---

### 8. **departments** (الأقسام)
**الغرض:** تخزين الأقسام القانونية

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| code | int | YES | كود القسم |
| name | nvarchar | YES | اسم القسم |

**Indexes:**
- PRIMARY KEY: `id`
- UNIQUE KEY: `code`

---

### 9. **notes** (الملاحظات)
**الغرض:** تخزين الملاحظات على الملفات

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| file_code | bigint | YES | Foreign Key → mainfiles.code |
| dept_code | bigint | YES | Foreign Key → departments.code |
| note_text | nvarchar | YES | نص الملاحظة |
| user_added | int | YES | المستخدم المضيف |
| date_added | datetime | YES | تاريخ الإضافة |

---

### 10. **mails** (الرسائل)
**الغرض:** تخزين الرسائل المرتبطة بالملفات

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| file_code | bigint | YES | Foreign Key → mainfiles.code |
| dept_code | bigint | YES | Foreign Key → departments.code |
| subject | nvarchar | YES | الموضوع |
| body | nvarchar | YES | المحتوى |
| user_added | int | YES | المستخدم المضيف |
| date_added | datetime | YES | تاريخ الإضافة |

---

### 11. **audits_files** (سجلات التدقيق)
**الغرض:** تخزين سجلات التدقيق للملفات

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| file_code | bigint | YES | Foreign Key → mainfiles.code |
| action | nvarchar | YES | الإجراء |
| user_id | int | YES | المستخدم |
| date_added | datetime | YES | تاريخ الإضافة |

---

### 12. **file_statuses** (حالات الملفات)
**الغرض:** تخزين حالات الملفات (مفتوح، مغلق، معلق، إلخ)

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| code | nvarchar | YES | كود الحالة |
| name | nvarchar | YES | اسم الحالة |
| color | nvarchar | YES | لون الحالة |

---

### 13. **file_classifications** (تصنيفات الملفات)
**الغرض:** تخزين تصنيفات الملفات

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| code | nvarchar | YES | كود التصنيف |
| name | nvarchar | YES | اسم التصنيف |
| description | nvarchar | YES | الوصف |

---

### 14. **auto_numbers** (الأرقام التلقائية)
**الغرض:** تخزين الأرقام التلقائية للجداول

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| id | int | NO | Primary Key |
| table_name | nvarchar | YES | اسم الجدول |
| prefix | nvarchar | YES | البادئة |
| current_number | int | YES | الرقم الحالي |
| year | int | YES | السنة |

---

## 🔗 Relationships Summary

### **mainfiles (الموكل الأساسي)** هو المركز:
- **1:1** مع `file_details` (تفاصيل الملف)
- **1:Many** مع `payments` (المدفوعات)
- **1:Many** مع `attachments` (المرفقات)
- **1:Many** مع `callcenter_statements` (أرقام التواصل)
- **1:Many** مع `additional_amounts` (المبالغ الإضافية)
- **1:Many** مع `notes` (الملاحظات)
- **1:Many** مع `mails` (الرسائل)
- **1:Many** مع `audits_files` (سجلات التدقيق)

### **departments (الأقسام):**
- **1:Many** مع `file_details`
- **1:Many** مع `payments`
- **1:Many** مع `attachments`
- **1:Many** مع `callcenter_statements`
- **1:Many** مع `additional_amounts`

### **users (المستخدمين):**
- يُستخدم في `user_added`, `user_updated` في معظم الجداول

---

## 📊 Data Flow Example

### **إنشاء موكل جديد:**

```sql
-- 1. إنشاء الموكل الأساسي
INSERT INTO mainfiles (code, name, cid, address, nationality, date_added)
VALUES (12345, 'أحمد محمد', '123456789', 'الكويت', 'كويتي', GETDATE());

-- 2. إنشاء تفاصيل الملف
INSERT INTO file_details (file_code, dept_code, contract_no, dept_amount, date_added)
VALUES (12345, 1, 'C-2024-001', 5000.000, GETDATE());

-- 3. إضافة أرقام التواصل
INSERT INTO callcenter_statements (file_code, phone_number, phone_owner, date_added)
VALUES (12345, '12345678', 'الموكل', GETDATE());

-- 4. إضافة البيانات المالية
INSERT INTO additional_amounts (file_code, dept_code, amount_type, value, date_added)
VALUES (12345, 1, 'رسوم المحكمة', 1000.000, GETDATE());
```

---

## 🎯 Key Points

1. **file_code** هو المفتاح الأساسي للربط بين الجداول
2. **dept_code** يربط الملفات بالأقسام
3. **decimal(18,3)** للمبالغ المالية (دقة عالية)
4. **datetime** لجميع التواريخ
5. **bit** للقيم المنطقية (true/false)
6. **nvarchar** للنصوص (يدعم Unicode)

---

**تاريخ الإنشاء:** 2026-01-04  
**الإصدار:** 1.0  
**قاعدة البيانات:** SQL Server  
**Server:** 192.168.30.151:1433  
**Database:** New-Crm
