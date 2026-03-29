-- ======================================================
-- Fix: Missing Columns and Lookup Table for Status Management
-- This script adds the missing status columns to 'mainfiles' 
-- and creates the 'lookup_values' table.
-- ======================================================

USE [New-Crm]; -- Ensure this matches your database name
GO

-- 1. Add status columns to mainfiles table
IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('mainfiles') AND name = 'cooperation_status_id')
    ALTER TABLE mainfiles ADD cooperation_status_id INT NULL;
GO

IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('mainfiles') AND name = 'contact_status_id')
    ALTER TABLE mainfiles ADD contact_status_id INT NULL;
GO

IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('mainfiles') AND name = 'civil_status_id')
    ALTER TABLE mainfiles ADD civil_status_id INT NULL;
GO

IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('mainfiles') AND name = 'internal_status_id')
    ALTER TABLE mainfiles ADD internal_status_id INT NULL;
GO

-- 2. Create lookup_values table
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID('lookup_values') AND type in (N'U'))
BEGIN
    CREATE TABLE lookup_values (
        id INT IDENTITY(1,1) PRIMARY KEY,
        [type] NVARCHAR(50) NOT NULL,      -- COOPERATION, CONTACT, CIVIL, INTERNAL
        [code] NVARCHAR(50) NOT NULL,      -- Status short code
        [name] NVARCHAR(200) NOT NULL,     -- Status name in Arabic
        [description] NVARCHAR(MAX) NULL,
        [is_active] BIT DEFAULT 1,
        [created_at] DATETIME DEFAULT GETUTCDATE()
    );
END
GO

-- 3. Populate initial lookup values (Standard Statuses)
-- Cooperation Statuses
IF NOT EXISTS (SELECT 1 FROM lookup_values WHERE [type] = 'COOPERATION')
BEGIN
    INSERT INTO lookup_values ([type], [code], [name]) VALUES 
    ('COOPERATION', '1', N'متعاون'),
    ('COOPERATION', '2', N'وعد قوي'),
    ('COOPERATION', '3', N'وعد ضعيف'),
    ('COOPERATION', '4', N'رفض السداد'),
    ('COOPERATION', '5', N'مغادر نهائي');
END

-- Contact Statuses
IF NOT EXISTS (SELECT 1 FROM lookup_values WHERE [type] = 'CONTACT')
BEGIN
    INSERT INTO lookup_values ([type], [code], [name]) VALUES 
    ('CONTACT', '1', N'تواصل ناجح'),
    ('CONTACT', '2', N'لا يرد'),
    ('CONTACT', '3', N'هاتف مغلق'),
    ('CONTACT', '4', N'رقم غير صحيح');
END

-- Civil Statuses
IF NOT EXISTS (SELECT 1 FROM lookup_values WHERE [type] = 'CIVIL')
BEGIN
    INSERT INTO lookup_values ([type], [code], [name]) VALUES 
    ('CIVIL', '1', N'صالح'),
    ('CIVIL', '2', N'منتهي'),
    ('CIVIL', '3', N'غير مسجل');
END

-- Internal Statuses
IF NOT EXISTS (SELECT 1 FROM lookup_values WHERE [type] = 'INTERNAL')
BEGIN
    INSERT INTO lookup_values ([type], [code], [name]) VALUES 
    ('INTERNAL', '1', N'تحت المراجعة'),
    ('INTERNAL', '2', N'معتمد'),
    ('INTERNAL', '3', N'مرفوض');
END
GO
