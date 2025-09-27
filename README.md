# deepFrog

A minimal React + TypeScript + Vite template with ESLint support.

# Features
React with TypeScript support
Fast Refresh with Vite
ESLint with type-aware rules
Optional React Compiler support
Ready for production deployment

# Prerequisites

Node.js ≥ 18
npm or yarn

# Getting Started Locally

Clone the repository

git clone https://github.com/Anshika2608/deepfrog.git

cd project

Install dependencies
npm install
# or
yarn install

Run the development server

npm run dev
# or
yarn dev


Open your browser at http://localhost:5173
 to view your app.

Build for production

npm run build
# or
yarn build


The production files will be in the dist folder.

Preview production build locally

npm run preview
# or
yarn preview

# Deployment on Vercel

Push your project to a Git repository (GitHub, GitLab, or Bitbucket).

Go to Vercel
 and import your project.

Configure project settings if necessary:

Framework: Vite

Root Directory: / (or your project folder if nested)

Build Command: npm run build

Output Directory: dist

Click Deploy.

After deployment, Vercel will provide a live URL for your app.

ESLint

This project comes with a recommended ESLint setup for React + TypeScript:

npm run lint
# or
yarn lint


Optional extensions for stricter type-checking and React-specific rules are included.
See eslint.config.js for configuration details.

Optional: Enable React Compiler

To enable the React Compiler for better runtime performance:

# Install the package
npm install @react/compiler

# Configure as per the documentation:
# https://react.dev/learn/react-compiler/installation

# Project Structure
├─ public/           # Static assets 
├─ src/  # Source code
│  ├─ main.tsx  # Entry point
|  |─ Assets/   #images
|  |─ Sections/  #section component
│  ├─ App.tsx        # Root component
├─ index.html        # HTML template
├─ tsconfig.app.json # TypeScript config
├─ eslint.config.js  # ESLint config

```
