Todo App Backend (Node.js + Express + MongoDB + JWT)

A fully functional RESTful backend API built with Node.js, Express, MongoDB, and JWT authentication.
This backend powers a Todo application where users can:

Create an account

Log in securely

Manage personal tasks

Perform CRUD operations

Access only their own data (secure multi-user architecture)

🛠 Tech Stack

Node.js

Express.js

MongoDB + Mongoose

JWT (jsonwebtoken) for authentication

bcrypt for password hashing

CORS

Validator for email validation

Nodemon (development)

📌 Features
🔐 Authentication

User Signup

User Login

Password hashing using bcrypt

JWT-based authentication

Protected APIs (middleware)

📝 Task Management

Create Task

Edit Task

Delete Task

Get All Tasks for logged-in user

Tasks linked to the authenticated user only

Validations for priority & status fields

Sorted tasks (latest first)

🧩 Clean Architecture

Models for User & Task

Auth Middleware

Environment-based configuration

Deployed on Render (optional)

📂 Folder Structure
project/
│
├── config/
│   └── db.js               # Database connection
│
├── middlewares/
│   └── auth.js             # JWT authentication middleware
│
├── models/
│   ├── User.js
│   └── Task.js
│
├── src/
│   └── server.js           # Main server file
│
├── .env                    # Environment variables
└── package.json

🔧 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/todo-backend.git
cd todo-backend

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file in root:

MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key
PORT=3000

4️⃣ Start the server
npm start

5️⃣ Run in development mode (optional)
npm run dev

🔐 Authentication Flow
Signup

POST /api/signup

Body:

{
  "name": "Ali",
  "email": "test@gmail.com",
  "password": "123456"
}


Response:

{
  "message": "User creation Successful",
  "token": "jwt_token",
  "user": {
    "id": "123",
    "name": "Ali",
    "email": "test@gmail.com"
  }
}

Login

POST /api/login

Body:

{
  "email": "test@gmail.com",
  "password": "123456"
}


Response:

{
  "token": "jwt_token",
  "id": "123",
  "email": "test@gmail.com",
  "name": "Ali"
}

🔒 Protected Routes

Include JWT token in headers:

Authorization: Bearer <your_token>

📝 Task APIs
Create Task

POST /api/createtask

Body:

{
  "title": "Learn MERN",
  "description": "Finish backend",
  "priority": "high",
  "status": "pending",
  "date": "2025-01-01"
}

Get Tasks

GET /api/gettasks
Returns only the logged-in user’s tasks.

Edit Task

PUT /api/edittask/:id

Delete Task

DELETE /api/deletetask/:id

🌍 Deployment (Render)

Add environment variables in Render Dashboard:

MONGO_URI=
JWT_SECRET=
PORT=10000


Set Build Command:

npm install


Set Start Command:

npm start

🛡 Security Implemented

Password hashing

JWT authentication

Protected routes

User-based access control

Data validation

No password included in responses

📈 Possible Future Enhancements

Task filtering (priority, status)

Search tasks

Pagination

Task categories

Profile editing

Dark mode in frontend

🏁 Conclusion

This backend provides a clean, secure, and scalable API for a Todo app using modern MERN principles.
Perfect for learning backend development, building full-stack apps, or demonstrating real-world skills in interviews.
