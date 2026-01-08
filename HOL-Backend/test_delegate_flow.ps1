# تجاوز فحص شهادة SSL للسيرفر المحلي (Localhost)
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$true}

$baseUrl = "https://localhost:7112/api"
$loginUrl = "$baseUrl/Auth/login"
$delegateUrl = "$baseUrl/Permissions/delegate"

# 1. Login
$loginBody = @{
    username = "hafez200"
    password = "hafez200"
} | ConvertTo-Json

Write-Host "1. Logging in as hafez200..." -ForegroundColor Cyan
try {
    $loginResponse = Invoke-RestMethod -Uri $loginUrl -Method Post -Body $loginBody -ContentType "application/json"
    
    if ($loginResponse.success -eq $false) {
        Write-Error "Login failed: $($loginResponse.message)"
        exit
    }
    
    $token = $loginResponse.token
    Write-Host "Login successful! Token acquired." -ForegroundColor Green
    # Write-Host "Token: $token" 

} catch {
    Write-Error "Login request failed: $_"
    exit
}

# 2. Delegate Permission
$delegateBody = @{
    employeeId = 28
    accessibleDepartments = "reports"
    accessibleFeatures = ""
} | ConvertTo-Json

$headers = @{
    Authorization = "Bearer $token"
}

Write-Host "`n2. Sending Delegate Request (Employee: 28, Dept: reports)..." -ForegroundColor Cyan
try {
    $delegateResponse = Invoke-RestMethod -Uri $delegateUrl -Method Post -Body $delegateBody -ContentType "application/json" -Headers $headers
    Write-Host "Response:" -ForegroundColor Yellow
    Write-Host ($delegateResponse | ConvertTo-Json -Depth 5) -ForegroundColor Green
} catch {
    Write-Host "Request Failed:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Server Response Body: $responseBody" -ForegroundColor Red
    }
}
