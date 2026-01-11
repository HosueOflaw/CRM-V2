# تجاوز فحص شهادة SSL للسيرفر المحلي (Localhost)
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$true}

$baseUrl = "http://localhost:5065"
$adminUser = "hafez200"
$adminPass = "hafez200" 

# 1. Login
Write-Host "Logging in as Admin..."
$loginBody = @{
    username = $adminUser
    password = $adminPass
} | ConvertTo-Json

try {
    $loginResponse = Invoke-RestMethod -Uri "$baseUrl/api/users/login" -Method Post -Body $loginBody -ContentType "application/json" -Headers @{ "User-Agent" = "PowerShell-Test-Script" }
    $token = $loginResponse.token
    Write-Host "Login Successful. Token received."
}
catch {
    Write-Error "Login failed: $_"
    exit
}

# 2. Get Login History
Write-Host "Fetching Login History..."
try {
    $history = Invoke-RestMethod -Uri "$baseUrl/api/users/login-history" -Method Get -Headers @{ "Authorization" = "Bearer $token" }
    
    if ($history.Count -gt 0) {
        Write-Host "Login History Retrieved Successfully. Count: $($history.Count)"
        $latest = $history[0]
        Write-Host "Latest Entry:"
        Write-Host "  User: $($latest.userName)"
        Write-Host "  Agent: $($latest.userAgent)"
        Write-Host "  IP: $($latest.ipAddress)"
        Write-Host "  Time: $($latest.loginTime)"
        
        if ($latest.userAgent -eq "PowerShell-Test-Script") {
             Write-Host "SUCCESS: Found the current login entry!" -ForegroundColor Green
        } else {
             Write-Host "WARNING: Latest entry does not match current script. (Maybe delay/order?)" -ForegroundColor Yellow
        }
    } else {
        Write-Host "WARNING: Login History is empty." -ForegroundColor Yellow
    }
}
catch {
    Write-Error "Failed to fetch history: $_"
}
