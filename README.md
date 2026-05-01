# 🔐 AuthX — Full Stack Authentication System

A modern, production-ready **authentication platform** built using **React (Vite)** and **Spring Boot**.
AuthX provides secure and scalable authentication with **JWT**, **OAuth2 (Google & GitHub)**, and a sleek UI.

---

## 🚀 Features

* 🔑 Email & Password Authentication (JWT-based)
* 🌐 OAuth2 Login (Google & GitHub)
* 🔁 Refresh Token Mechanism
* 🔐 Secure HTTP-only cookies
* ⚡ Smooth UI animations (Framer Motion)
* 📊 Dashboard with analytics UI
* 🧱 Clean full-stack architecture

---

## 🖼️ Screenshots

### 🏠 Home Page

<img width="2048" height="1303" alt="image" src="https://github.com/user-attachments/assets/ddffd423-6309-4750-952c-81c0c68d8b4b" />

### 🔑 Login

<img width="2048" height="1224" alt="image" src="https://github.com/user-attachments/assets/a017e14c-4043-48d5-902c-ab27cdecf3de" />


### ❌ Login Error State

<img width="2048" height="1255" alt="image" src="https://github.com/user-attachments/assets/e964b279-ff6b-4ba5-a147-ddaeadb9cd26" />

### 📝 Register

<img width="2048" height="1251" alt="image" src="https://github.com/user-attachments/assets/32b4cfb8-b376-4ec1-a8bc-a075a5c871a5" />

### 📊 Dashboard

<img width="2047" height="964" alt="image" src="https://github.com/user-attachments/assets/6707c72d-3213-4ea2-bccf-840cfb5092d4" />

---

## 🧱 Tech Stack

### 🖥️ Frontend

* React (Vite)
* TypeScript
* Tailwind CSS
* Framer Motion
* Axios
* React Router
* ShadCN UI

### ⚙️ Backend

* Spring Boot 3
* Spring Security 6
* JWT Authentication
* OAuth2 (Google, GitHub)
* Spring Data JPA (MySQL)
* Lombok

---

## 📁 Project Structure

```
authx/
│
├── backend/        # Spring Boot API
├── frontend/       # React + Vite App
└── README.md
```

---

## ⚙️ Backend Setup

### Prerequisites

* Java 17+
* Maven
* MySQL

### Steps

```bash
cd backend
```

Create database:

```sql
CREATE DATABASE authx;
```

Run backend:

```bash
mvn spring-boot:run
```

📍 Backend: http://localhost:8081

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file:

```bash
VITE_BACKEND_URL=http://localhost:8081
```

Run frontend:

```bash
npm run dev
```

📍 Frontend: http://localhost:5173

---

## 🔗 Authentication Flow

1. User logs in with email/password → JWT issued
2. OAuth login → redirected → JWT issued
3. Refresh token rotates silently
4. Logout clears session & cookies

---

## 🔑 API Endpoints

| Method | Endpoint                       | Description   |
| ------ | ------------------------------ | ------------- |
| POST   | `/api/auth/login`              | Login         |
| POST   | `/api/auth/register`           | Register      |
| GET    | `/api/auth/me`                 | Current user  |
| POST   | `/api/auth/refresh`            | Refresh token |
| POST   | `/api/auth/logout`             | Logout        |
| GET    | `/oauth2/authorization/google` | Google login  |
| GET    | `/oauth2/authorization/github` | GitHub login  |

---

## 🧠 Environment Variables

| Variable             | Description     |
| -------------------- | --------------- |
| JWT_SECRET           | JWT signing key |
| GOOGLE_CLIENT_ID     | Google OAuth    |
| GOOGLE_CLIENT_SECRET | Google secret   |
| GITHUB_CLIENT_ID     | GitHub OAuth    |
| GITHUB_CLIENT_SECRET | GitHub secret   |
| VITE_BACKEND_URL     | Backend URL     |

---

## 🧰 Commands

```bash
# Backend
mvn spring-boot:run

# Frontend
npm run dev

# Build frontend
npm run build
```

---

## 🚀 Deployment

* Frontend → Vercel / Netlify
* Backend → Render / AWS / DigitalOcean
* Use HTTPS + secure cookies

---

## 👨‍💻 Author

**Saurabh Prasad**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
