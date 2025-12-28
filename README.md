# Pokémon App (Express + React Views)

This is a Pokémon web application built with **Node.js**, **Express**, and **React Views**.  
It was created as a learning project to practice server-side rendering, routing, and CRUD concepts.

---

## 🚀 Features

- View a list of Pokémon
- View individual Pokémon detail pages
- Create new Pokémon (MongoDB mode)
- Server-side rendering using `express-react-views`
- Graceful fallback to local seed data when MongoDB is unavailable

---

## 🛠️ Tech Stack

- Node.js
- Express
- MongoDB (optional)
- Mongoose
- express-react-views
- JSX (server-side rendering)

---

## ⚙️ How It Works

This app supports **two modes**:

### 1. MongoDB Mode
When MongoDB is connected:
- Pokémon are stored and retrieved from the database
- New Pokémon can be created and persisted

### 2. Seed Data Mode (Fallback)
When MongoDB is unavailable:
- Pokémon data is loaded from a local seed file
- The app continues to function without crashing
- Ideal for local development and demos

