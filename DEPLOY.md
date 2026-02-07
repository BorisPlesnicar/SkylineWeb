# Deploy to GitHub & Vercel

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `skyline-landing-page` (or any name you prefer)
3. Description: "Landing page for Skyline iOS app"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd "C:\Users\craxh\OneDrive - HTL Krems\5BHITM\DiplomarbeitApplePage\skylineweb"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with the repository name you chose.

## Step 3: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click **Add New Project**
4. Import your `skyline-landing-page` repository
5. Vercel will auto-detect Next.js settings
6. Click **Deploy**

That's it! Your site will be live in minutes.

## Alternative: Using GitHub CLI (if installed)

If you have GitHub CLI installed, you can create the repo directly:

```bash
gh repo create skyline-landing-page --public --source=. --remote=origin --push
```
