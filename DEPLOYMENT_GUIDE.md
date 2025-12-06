# Portfolio Deployment Guide

## 🚀 Quick Start - Deploy Your Portfolio in 3 Steps

### Option 1: Deploy to Vercel (Recommended - Easiest & Free)

**Step 1: Set Up Your Project Locally**

1. Create a new folder for your project:
```bash
mkdir anupa-portfolio
cd anupa-portfolio
```

2. Create a React app with Vite (modern, fast):
```bash
npm create vite@latest . -- --template react
```
- When prompted, select "React" and "JavaScript"

3. Install dependencies:
```bash
npm install
npm install lucide-react
```

4. Replace the default App.jsx with your portfolio:
- Delete `src/App.jsx` and `src/App.css`
- Copy your `anupa-portfolio.jsx` content into `src/App.jsx`
- Update `src/main.jsx` to import from './App'

5. Update `src/index.css` with this minimal reset:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
}
```

6. Test locally:
```bash
npm run dev
```
- Open http://localhost:5173 in your browser

**Step 2: Push to GitHub**

1. Create a new repository on GitHub (https://github.com/new)
   - Name it: `portfolio` or `anupa-portfolio`
   - Keep it public
   - Don't initialize with README

2. Initialize git and push:
```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

**Step 3: Deploy to Vercel**

1. Go to https://vercel.com
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your portfolio repository
5. Click "Deploy" (Vercel auto-detects Vite configuration)
6. Done! Your site will be live at `https://your-project.vercel.app`

**Custom Domain (Optional):**
- Go to Project Settings → Domains
- Add your custom domain (e.g., anupawimalasiri.com)

---

### Option 2: Deploy to Netlify (Also Free & Easy)

**After completing Step 1 & 2 from above:**

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. Your site will be live at `https://random-name.netlify.app`

**Custom Domain:**
- Go to Site Settings → Domain Management
- Add custom domain

---

### Option 3: Deploy to GitHub Pages (Free, GitHub Only)

**After completing Step 1 from above:**

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace with your repo name
})
```

3. Add to `package.json` scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to your repo → Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages / root
   - Save

6. Your site will be at: `https://YOUR_USERNAME.github.io/portfolio/`

---

## 📦 Complete Project Setup from Scratch

### Step-by-Step Detailed Instructions

**1. Install Node.js**
- Download from: https://nodejs.org/
- Verify installation: `node --version` and `npm --version`

**2. Create React Project with Vite**

```bash
# Create project
npm create vite@latest anupa-portfolio -- --template react

# Navigate to folder
cd anupa-portfolio

# Install dependencies
npm install

# Install Lucide icons
npm install lucide-react
```

**3. Set Up Your Files**

Create this file structure:
```
anupa-portfolio/
├── src/
│   ├── App.jsx          (your portfolio component)
│   ├── main.jsx         (entry point)
│   └── index.css        (global styles)
├── public/
├── index.html
├── package.json
└── vite.config.js
```

**4. Configure Files**

`src/main.jsx`:
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

`src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
}
```

`src/App.jsx`:
- Copy the entire content from your `anupa-portfolio.jsx` file

**5. Install Tailwind CSS**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**6. Test Locally**

```bash
npm run dev
```
Visit: http://localhost:5173

**7. Build for Production**

```bash
npm run build
```
This creates a `dist` folder with optimized files.

---

## 🌐 Custom Domain Setup

### For Vercel:
1. Buy domain from: Namecheap, GoDaddy, or Google Domains
2. In Vercel: Settings → Domains → Add domain
3. Update DNS records at your domain registrar:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

### For Netlify:
1. In Netlify: Site Settings → Domain Management
2. Add custom domain
3. Update DNS:
   - Type: A, Name: @, Value: 75.2.60.5
   - Type: CNAME, Name: www, Value: your-site.netlify.app

---

## 🔧 Troubleshooting

### Issue: "Module not found: lucide-react"
**Solution:**
```bash
npm install lucide-react
```

### Issue: Images not loading
**Solution:** 
- Replace Unsplash URLs with your own images
- Add images to `/public/images/` folder
- Reference as `/images/your-image.jpg`

### Issue: Tailwind styles not working
**Solution:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Issue: Build fails
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📝 Updating Your Portfolio

1. Make changes to `src/App.jsx`
2. Test locally: `npm run dev`
3. Commit changes:
```bash
git add .
git commit -m "Update portfolio content"
git push
```
4. Vercel/Netlify auto-deploys on push!

---

## 🎨 Customization Tips

### Update Contact Links:
- Search for "github.com/anupawimalasiri" and update
- Update email: "anupawpahasara@gmail.com"
- Update phone: "+94 72 091 9719"

### Add Resume Download:
1. Add `resume.pdf` to `/public` folder
2. Update download button:
```jsx
<a 
  href="/resume.pdf" 
  download="Anupa_Wimalasiri_Resume.pdf"
  className="px-8 py-4..."
>
  <Download className="w-5 h-5" />
  Resume
</a>
```

### Change Colors:
Find and replace:
- `emerald-` with `blue-`, `purple-`, `cyan-`, etc.
- `teal-` with your preferred secondary color

---

## 🚀 Performance Optimization

1. **Optimize Images:**
   - Use WebP format
   - Compress images: https://tinypng.com
   - Lazy load: `<img loading="lazy" ... />`

2. **Enable Analytics:**
   - Google Analytics: Add tracking code to `index.html`
   - Vercel Analytics: Enable in dashboard

3. **SEO:**
   - Update `index.html` title and meta tags
   - Add `robots.txt` and `sitemap.xml`

---

## 📞 Need Help?

If you encounter any issues:
1. Check the console for errors (F12 in browser)
2. Verify all dependencies are installed: `npm list`
3. Try: `npm run build` to see build-time errors
4. Check Vercel/Netlify deployment logs

Good luck with your deployment! 🎉
