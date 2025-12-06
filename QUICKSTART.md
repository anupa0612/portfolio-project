# 🚀 QUICK START GUIDE

## Option 1: Easiest Way - Use Vercel (5 Minutes)

### Step 1: Download Project
- Download the `portfolio-project` folder to your computer
- Extract it if it's zipped

### Step 2: Upload to GitHub
1. Go to https://github.com/new
2. Create a new repository called "portfolio"
3. Download GitHub Desktop (https://desktop.github.com/)
4. Open GitHub Desktop → File → Add Local Repository
5. Choose your portfolio-project folder
6. Click "Publish repository"

### Step 3: Deploy to Vercel
1. Go to https://vercel.com
2. Click "Sign up with GitHub"
3. Click "New Project"
4. Select your "portfolio" repository
5. Click "Deploy"
6. Done! Your site is live! 🎉

Your portfolio will be at: `https://portfolio-yourusername.vercel.app`

---

## Option 2: Run Locally First (Recommended for Testing)

### Prerequisites
1. Install Node.js from https://nodejs.org/ (Download LTS version)
2. Install VS Code from https://code.visualstudio.com/

### Steps

**Windows Users:**
1. Open the portfolio-project folder
2. Double-click `setup.bat`
3. Wait for installation to complete
4. Open Command Prompt in this folder
5. Type: `npm run dev`
6. Open browser to: http://localhost:5173

**Mac/Linux Users:**
1. Open Terminal in the portfolio-project folder
2. Run: `chmod +x setup.sh`
3. Run: `./setup.sh`
4. Run: `npm run dev`
5. Open browser to: http://localhost:5173

### Then Deploy
After testing locally, follow Option 1 to deploy to Vercel.

---

## Need Help?

### Common Issues

**"Node.js is not installed"**
→ Install Node.js from https://nodejs.org/

**"npm install fails"**
→ Check your internet connection
→ Try running: `npm cache clean --force` then `npm install` again

**"Port 5173 already in use"**
→ Close other applications using this port
→ Or change port in vite.config.js

### Video Tutorials
- Deploy to Vercel: https://www.youtube.com/results?search_query=deploy+vite+react+to+vercel
- React basics: https://react.dev/learn

---

## What's Next?

1. ✅ Get your portfolio online (follow Option 1)
2. 📝 Customize content (edit src/App.jsx)
3. 🎨 Add your own projects and images
4. 🌐 Get a custom domain (optional)
5. 📊 Add Google Analytics (optional)

Good luck! 🚀
