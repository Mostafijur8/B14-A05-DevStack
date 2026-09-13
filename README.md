# React + TypeScript + Vite

[![Netlify Status](https://api.netlify.com/api/v1/badges/a41ccd72-4d19-4a98-abe4-d1cc06ac0587/deploy-status)](https://app.netlify.com/projects/b14-05-devstack/deploys)

A modern technology stack builder application built with **React, TypeScript, Vite, Tailwind CSS, and DaisyUI**.

## 🚀 Live Demo

[View Live Website](https://b14-05-devstack.netlify.app/)

## 📌 Project Overview

This project allows users to explore different technologies and create their own technology stack.

Users can:

* Explore different technologies
* View technology details
* Add technologies to their stack
* Remove individual technologies
* Remove all technologies from the stack
* Prevent duplicate technologies from being added
* See the total number of selected technologies
* Use the application on mobile, tablet, and desktop devices

## 🛠️ Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI
* React Icons

## ✨ Features

### Technology Cards

Each technology is displayed in a card containing:

* Technology icon
* Technology name
* Category
* Description
* Rating
* Difficulty level
* Badge

### Your Stack

The stack section allows users to:

* Add technologies
* Remove a specific technology
* Remove all technologies
* See the selected technology count

### Duplicate Prevention

A technology cannot be added to the stack more than once.

When a technology is already added, the button becomes disabled and displays:

`✓ Added to Stack`

## 📱 Responsive Design

The application is fully responsive and works on:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

## 📂 Project Structure

```text
src/
├── api.ts
├── type/
│   └── CardType.ts
├── component/
│   ├── Banner.tsx
│   └── Card/
│       ├── Card.tsx
│       ├── Stack.tsx
│       └── useStack.ts
├── App.tsx
└── main.tsx
```

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd YOUR_PROJECT_FOLDER
```

Install dependencies:

```bash
npm install
```

## ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

The application will run on the local development server.

## 🏗️ Build for Production

```bash
npm run build
```

## 👀 Preview Production Build

```bash
npm run preview
```

## 📦 Main Dependencies

```text
React
TypeScript
Vite
Tailwind CSS
DaisyUI
React Icons
```

## 🌐 Deployment

The project is deployed using **Netlify**.

[![Netlify Status](https://api.netlify.com/api/v1/badges/a41ccd72-4d19-4a98-abe4-d1cc06ac0587/deploy-status)](https://app.netlify.com/projects/b14-05-devstack/deploys)

## 👨‍💻 Author

**Mostafijur**

---

⭐ If you like this project, feel free to give it a star!
