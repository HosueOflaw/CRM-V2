-- SQL Script to fix PasswordHashed and PasswordSalt columns
-- Run this directly on your SQL Server database

USE [New-Crm];
GO

-- Drop existing columns if they exist
IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('users') AND name = 'PasswordHashed')
BEGIN
    ALTER TABLE users DROP COLUMN PasswordHashed;
END
GO

IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('users') AND name = 'PasswordSalt')
BEGIN
    ALTER TABLE users DROP COLUMN PasswordSalt;
END
GO

-- Add new columns as nvarchar(max)
ALTER TABLE users ADD PasswordHashed nvarchar(max) NULL;
GO

ALTER TABLE users ADD PasswordSalt nvarchar(max) NULL;
GO

PRINT 'Password columns updated successfully!';
GO
