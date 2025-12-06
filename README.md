# Anupa Wimalasiri - Portfolio Website

A modern, responsive portfolio website showcasing automation solutions, financial technology projects, and professional experience.

## 🌟 Features

- ✨ Modern, unique design with glassmorphism effects
- 🎨 Custom animations and interactive elements
- 📱 Fully responsive across all devices
- ⚡ Built with React + Vite for optimal performance
- 🎯 SEO optimized
- 🚀 Easy to deploy

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify / GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone or download this project**

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open your browser:**
Visit `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Deploy"

### Deploy to GitHub Pages

1. Update `vite.config.js` with your repo name:
```javascript
base: '/your-repo-name/',
```

2. Run:
```bash
npm run deploy
```

## 📝 Customization

### Update Your Information

Edit `src/App.jsx` and update:

- **Contact Details:** Email, phone, location
- **Social Links:** GitHub, LinkedIn URLs
- **Projects:** Add/remove/edit projects
- **Skills:** Modify technical skills and tools
- **Experience:** Update work history
- **Education:** Add/modify educational background

### Change Colors

Find and replace color classes in `src/App.jsx`:
- `emerald-` → your preferred primary color
- `teal-` → your preferred secondary color

### Add Your Resume

1. Add `resume.pdf` to `/public` folder
2. Update download button in `src/App.jsx`

## 📁 Project Structure

```
portfolio/
├── public/           # Static assets
├── src/
│   ├── App.jsx      # Main portfolio component
│   ├── main.jsx     # React entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── package.json     # Dependencies
├── vite.config.js   # Vite configuration
└── tailwind.config.js
```

## 🎨 Color Scheme

- **Primary:** Emerald (Green)
- **Secondary:** Teal
- **Background:** Dark slate gradients
- **Accents:** White and light slate

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

- **Email:** anupawpahasara@gmail.com
- **LinkedIn:** [linkedin.com/in/anupawimalasiri-71b105251](https://www.linkedin.com/in/anupawimalasiri-71b105251)
- **Location:** Colombo, Sri Lanka

---

Built with ❤️ using React + Vite + Tailwind CSS
