# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Setup React Router with Tailwind & DaisyUI

→ (https://reactrouter.com/en/main/start/tutorial#setup)
npm create vite@latest react-router-project -- --template react
cd react-router-project
npm install react-router-dom localforage match-sorter sort-by

→ (https://tailwindcss.com/docs/guides/vite)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Add the paths to all of template files in your tailwind.config.js file.
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
Add the @tailwind directives for each of Tailwind’s layers to ./src/index.css file.
@tailwind base;
@tailwind components;
@tailwind utilities;

→(https://daisyui.com/docs/install/)
npm i -D daisyui@latest
add daisyUI to tailwind.config.js files:
plugins: [require("daisyui")],

Add @ .eslintrc.cjs file:
env: { node: true },

npm run dev
