# 📝 MANUAL SETUP GUIDE - Copy & Paste Method

If you can't download the ZIP file, follow these steps to create the project manually:

---

## STEP 1: Create Project Folder

Create a folder on your computer called `portfolio-ready`

---

## STEP 2: Create These Files

Inside `portfolio-ready` folder, create these files with the exact content:

---

### FILE 1: package.json

```json
{
  "name": "anupa-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.5"
  }
}
```

---

### FILE 2: vercel.json

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

### FILE 3: vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

---

### FILE 4: tailwind.config.js

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

---

### FILE 5: postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

### FILE 6: .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

---

### FILE 7: index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Anupa Wimalasiri - Automation Specialist & Developer. Reconciliation Officer at GTN Technologies specializing in business process automation." />
    <meta name="keywords" content="Anupa Wimalasiri, Software Engineer, Automation Specialist, Python Developer, VBA Expert, Financial Technology" />
    <meta name="author" content="Anupa Wimalasiri" />
    
    <!-- Open Graph / Social Media -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Anupa Wimalasiri - Automation Specialist & Developer" />
    <meta property="og:description" content="Portfolio showcasing automation solutions, financial technology, and innovative development projects." />
    
    <title>Anupa Wimalasiri - Automation Specialist & Developer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## STEP 3: Create src Folder

Inside `portfolio-ready`, create a folder called `src`

---

### FILE 8: src/main.jsx

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

---

### FILE 9: src/index.css

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
  overflow-x: hidden;
}

#root {
  width: 100%;
  min-height: 100vh;
}
```

---

### FILE 10: src/App.jsx

**This file is very long (your portfolio code)**
**I'll provide it in a separate message or you can:**

1. Copy from the original `anupa-portfolio.jsx` file in outputs
2. Or I can send it in the next message

---

## STEP 4: Create public Folder

Inside `portfolio-ready`, create a folder called `public`

(This folder can be empty for now - you'll add images/resume later)

---

## STEP 5: Upload to GitHub

Once all files are created:

1. Install GitHub Desktop: https://desktop.github.com/
2. File → Add Local Repository
3. Choose your `portfolio-ready` folder
4. Publish repository (name: `portfolio`)
5. Deploy to Vercel!

---

## ⚠️ IMPORTANT

Make sure:
- All files have the EXACT names shown above
- Files are in the correct folders
- `src` folder contains: App.jsx, main.jsx, index.css
- `public` folder exists (can be empty)
- All config files are in the root of `portfolio-ready`

---

## 🆘 Still Having Issues?

Let me know and I can:
1. Send the App.jsx code separately
2. Create a different download method
3. Guide you through each file one by one

---
