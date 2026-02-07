# PowerShell script to push Skyline landing page to GitHub
# Usage: After creating a GitHub repository, update the URL below and run this script

$repoUrl = "https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"

Write-Host "Setting up GitHub remote..." -ForegroundColor Green
git remote add origin $repoUrl 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Remote might already exist. Updating..." -ForegroundColor Yellow
    git remote set-url origin $repoUrl
}

Write-Host "Renaming branch to main..." -ForegroundColor Green
git branch -M main

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSuccess! Your code has been pushed to GitHub." -ForegroundColor Green
    Write-Host "Now you can deploy to Vercel:" -ForegroundColor Cyan
    Write-Host "1. Go to https://vercel.com" -ForegroundColor Cyan
    Write-Host "2. Sign in with GitHub" -ForegroundColor Cyan
    Write-Host "3. Import your repository" -ForegroundColor Cyan
    Write-Host "4. Deploy!" -ForegroundColor Cyan
} else {
    Write-Host "`nError: Make sure you've created the GitHub repository first!" -ForegroundColor Red
    Write-Host "Visit https://github.com/new to create a new repository." -ForegroundColor Yellow
}
