# PopX — React + Vite Authentication Project

A simple React application built with Vite, featuring user authentication (Sign Up / Sign In) and redirect to user profile upon successful login. The project is fully configured for deployment on Vercel.

## Features

* ⚡ Built with **Vite** for fast development and builds
* ⚛️ Developed in **React JSX** with functional components and hooks
* 🔐 Simple authentication system with Sign Up & Sign In
* 🔄 Redirects to `/profile` upon successful account creation or login
* 🎨 Styled with **Tailwind CSS** for responsive UI
* 🚀 Easy deployment on **Vercel**

## Tech Stack

* **React** – Frontend UI
* **Vite** – Build Tool
* **React Router v6** – Routing & Redirects
* **Tailwind CSS** – Styling
* **Context API** – Global user state management
* **Vercel** – Hosting

## Project Structure

```
src/
├── components/
│   └── FormInput.jsx       # Reusable fieldset input component
├── context/
│   └── userContext.jsx     # Auth context (signup, login, logout)
├── pages/
│   ├── Home.jsx            # Landing page with Sign Up / Login buttons
│   ├── Signin.jsx          # Login form
│   ├── Signup.jsx          # Registration form
│   └── UserProfile.jsx     # Profile page after authentication
├── App.jsx                 # Route definitions
└── main.jsx                # App entry point
```

## Installation & Setup

### Clone the repository

```bash
git clone https://github.com/Tejashwini2004-git/Educase_Assignment.git
cd Educase_Assignment
```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

Deployment on Netlify

Push your code to GitHub
Go to netlify.com and click Add new site → Import from Git
Select your GitHub repository
Set the following build settings:

Build command: npm run build
Publish directory: dist


Click Deploy Site

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with navigation buttons |
| `/signup` | Signup | Create a new PopX account |
| `/signin` | Signin | Login with existing credentials |
| `/profile` | UserProfile | Account settings & user info |
