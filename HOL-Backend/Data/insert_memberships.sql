-- إضافة تصنيفات الـ Membership (التصنيف) إلى جدول LookupValues لدعم إدارتها من النظام
INSERT INTO [dbo].[lookup_values] ([type], [code], [name], [description], [is_active], [created_at])
VALUES 
('MEMBERSHIP', '1', N'باتش جديد', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '2', N'ترسيم فقط', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '3', N'قيد الخصم', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '4', N'تحت السن', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '5', N'VIP', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '6', N'قليل القيمة', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '7', N'الملف متقادم', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '8', N'قضائى', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '9', N'ودى فقط', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '10', N'اونلاين', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '11', N'رسوم', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '12', N'تنفيذ', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '13', N'متداول فقط', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '14', N'تزوير', N'تصنيف', 1, GETUTCDATE()),
('MEMBERSHIP', '15', N'جلسات', N'تصنيف', 1, GETUTCDATE());
