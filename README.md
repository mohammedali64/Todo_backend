# 📝 Todo Application Backend

> A robust and secure RESTful API for managing tasks, built with Node.js, Express, and MongoDB.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## � Introduction

Welcome to the **Todo Application Backend**! This project serves as the backbone for a task management application, providing secure authentication and comprehensive task CRUD operations. It's designed with scalability and security in mind, utilizing modern practices and libraries.

## ✨ Features

*   **🔐 Secure Authentication**: User registration and login powered by **JWT** and **Bcrypt** for password hashing.
*   **�️ Task Management**: Full **CRUD** (Create, Read, Update, Delete) capabilities for user tasks.
*   **🛡️ Protected Routes**: Middleware to ensure only authenticated users can access their data.
*   **✅ Input Validation**: Data integrity ensured via server-side validation.
*   **🌐 CORS Enabled**: Ready for seamless frontend integration with `cors` middleware.

## 🛠️ Tech Stack

*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database**: MongoDB (via Mongoose)
*   **Authentication**: JSON Web Tokens (JWT)
*   **Tools**:
    *   `dotenv` for environment configuration
    *   `validator` for data validation
    *   `nodemon` for development

## 🔌 API Endpoints

### 👤 Authentication

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/signup` | Register a new user | ❌ |
| `POST` | `/api/login` | Authenticate user & get token | ❌ |
| `POST` | `/api/profile` | Get logged-in user details | ✅ |

### 📝 Tasks

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/createtask` | Create a new task | ✅ |
| `GET` | `/api/gettasks` | Retrieve all user tasks | ✅ |
| `PUT` | `/api/edittask/:id` | Update a specific task | ✅ |
| `DELETE` | `/api/deletetask/:id`| Delete a specific task | ✅ |

## 🚀 Getting Started

Follow these steps to get the server running locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) installed
*   [MongoDB](https://www.mongodb.com/) installed or a MongoDB Atlas URI

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/todo-app.git
    cd todo-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

4.  **Run the Server**
    *   For development:
        ```bash
        npm run dev
    *   For production:
        ```bash
        npm start
        ```

5.  **Test the API**
    The server should be running on `http://localhost:3000`. You can test endpoints using Postman or Insomnia.

## � License

This project is licensed under the ISC License.
