# 🍽️ Recipe Finder App

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=flat-square&logo=vite&logoColor=white)
![API](https://img.shields.io/badge/Recipe_API-Powered-FF6B6B?style=flat-square)

A React-based recipe finder app where users can **search for recipes** by name or ingredient, view detailed instructions, and explore a wide variety of dishes.

---

## Features

- 🔍 **Search Recipes** — Find recipes by dish name or key ingredient
- 📋 **Recipe Details** — View ingredients, quantities, and step-by-step instructions
- 🖼️ **Rich Cards** — Recipe results displayed in clean visual cards
- ⚡ **Fast & Lightweight** — Built with Vite for instant hot reload

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Axios | API requests |
| CSS Modules | Component-scoped styling |

---

## Project Structure

```
recipe-finder-app/
├── src/
│   ├── App.jsx               # Root component
│   ├── components/           # Reusable UI components
│   ├── utils/                # Helper functions
│   └── assets/               # Static files
├── index.html
└── vite.config.js
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/pranotivarpe/recipe-finder-app.git
cd recipe-finder-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173`

```bash
# Build for production
npm run build
```