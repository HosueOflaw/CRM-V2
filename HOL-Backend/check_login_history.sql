-- Check latest login history records
SELECT TOP 5 
    Id,
    UserId,
    LoginTime,
    IpAddress,
    Role,
    Email,
    UserAgent
FROM login_histories
ORDER BY LoginTime DESC;

-- Check if any records have Role and Email populated
SELECT 
    COUNT(*) as TotalRecords,
    COUNT(Role) as RecordsWithRole,
    COUNT(Email) as RecordsWithEmail
FROM login_histories;
