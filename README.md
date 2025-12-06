Todo Backend API (Node.js + Express + MongoDB + JWT)

A secure and scalable backend for a Task Management Application, built using:

🟢 Node.js

⚡ Express

🍃 MongoDB + Mongoose

🔐 JWT Authentication

🔒 Bcrypt Password Hashing

🌍 CORS Enabled

📦 REST API Architecture

This backend powers the Todo Frontend with user authentication and task CRUD operations.

✨ Features
🔑 User Authentication

Signup with hashed passwords

Login with JWT authentication

Protected routes via middleware

Token validation on every secured request

📝 Task Management API

Create new tasks

Fetch all tasks for logged-in user

Update tasks (title, description, priority, date, status)

Delete tasks

Task–User relationship (each task belongs to a user)

🔐 Security

Passwords hashed with bcrypt

JWT tokens for session handling

CORS protection (frontend allowed domains)

🛠️ Tech Stack
Technology	Purpose
Node.js	Runtime environment
Express	Server framework
MongoDB	Database
Mongoose	ODM for Mongo
JWT	Authentication
Bcrypt	Password hashing
CORS	Cross-origin security
📁 Folder Structure
backend/
│
├── config/
│   └── db.js          # DB connection
│
├── middlewares/
│   └── auth.js        # JWT authentication middleware
│
├── models/
│   ├── User.js        # User schema
│   └── Task.js        # Task schema
│
├── src/
│   └── server.js      # Main express server & routes
│
├── .env               # Environment variables
├── package.json
└── README.md

🔧 Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/your-username/Todo_backend.git
cd Todo_backend

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file:

MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_secret_key
PORT=3000

4️⃣ Start the server
Development
npm run dev

Production
npm start


Server runs at:

👉 http://localhost:3000

🔗 API Endpoints
🧍 Auth Routes
POST /api/signup

Create new user
Body:

{
  "name": "Ali",
  "email": "ali@gmail.com",
  "password": "123456"
}

POST /api/login

Login and receive JWT
Body:

{
  "email": "ali@gmail.com",
  "password": "123456"
}

POST /api/profile (Protected)

Get user profile based on JWT.

📝 Task Routes
POST /api/createtask (Protected)

Create new task
Body:

{
  "title": "Learn Redux",
  "description": "Finish auth logic",
  "priority": "high",
  "status": "todo",
  "date": "2025-01-01"
}

GET /api/gettasks (Protected)

Fetch all tasks for logged-in user.

PUT /api/edittask/:id (Protected)

Update a task.

DELETE /api/deletetask/:id (Protected)

Remove a task.

🔐 JWT Authentication Flow

User signs up or logs in

Server returns a JWT

Frontend stores token in localStorage

All protected requests include:

Authorization: Bearer <token>


Server verifies token → extracts userId → allows access

🚀 Deployment
🌐 Backend Hosting: Render.com

Environment variables configured under Render → Environment
Works perfectly with your Vercel frontend.
