$ErrorActionPreference = 'stop'
$ProgressPreference = 'silentlyContinue'
$ErrorView = 'NormalView'
curl.exe -X POST -H "Authorization: Bearer $env:RENDER_API_KEY" `
-H "Content-Type: application/json" `
-d '{\"serviceId\":\"docker-image\",\"clearCache\":true}' `
"https://api.render.com/v1/services/docker-image/deploy"
if (!(Test-Path -LiteralPath variable:\LASTEXITCODE)) {
    Write-Host '##vso[task.debug]$LASTEXITCODE is not set.'
} else {
    Write-Host ('##vso[task.debug]$LASTEXITCODE: {0}' -f $LASTEXITCODE)
    exit $LASTEXITCODE
}