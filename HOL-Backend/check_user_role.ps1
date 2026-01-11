# تجاوز فحص شهادة SSL
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$true}

$baseUrl = "http://localhost:5065"

# Login
$loginBody = @{
    username = "hafez200"
    password = "hafez200"
} | ConvertTo-Json

Write-Host "Logging in..." -ForegroundColor Cyan
$loginResponse = Invoke-RestMethod -Uri "$baseUrl/api/auth/login" -Method Post -Body $loginBody -ContentType "application/json"

if ($loginResponse.success) {
    Write-Host "Login successful!" -ForegroundColor Green
    Write-Host "User: $($loginResponse.fullName)" -ForegroundColor Yellow
    Write-Host "Role: $($loginResponse.role)" -ForegroundColor Yellow
    
    # Decode JWT to see claims
    $token = $loginResponse.token
    $tokenParts = $token.Split('.')
    $payload = $tokenParts[1]
    
    # Add padding if needed
    while ($payload.Length % 4 -ne 0) {
        $payload += "="
    }
    
    $decodedBytes = [System.Convert]::FromBase64String($payload)
    $decodedText = [System.Text.Encoding]::UTF8.GetString($decodedBytes)
    
    Write-Host "`nToken Claims:" -ForegroundColor Cyan
    Write-Host $decodedText -ForegroundColor White
    
    if ($loginResponse.role -ne "admin") {
        Write-Host "`nWARNING: This user is NOT an admin. Cannot access login-history endpoint." -ForegroundColor Red
        Write-Host "Please use an admin account or update this user's role in the database." -ForegroundColor Yellow
    }
} else {
    Write-Host "Login failed: $($loginResponse.message)" -ForegroundColor Red
}
