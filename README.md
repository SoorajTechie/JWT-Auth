# 🔐 JWT Authentication with Cookies - MERN Stack

This project is a simple and secure **JWT-based authentication system** using:

- 🟢 **MongoDB** for database  
- 🟨 **Express.js** as backend server  
- 🔵 **React.js** frontend  
- 🔐 **JWT (JSON Web Token)** for authentication  
- 🍪 **HTTP-Only Cookies** to store tokens securely  

---

## 🚀 Features

- ✅ User registration with hashed password
- ✅ Login with JWT token
- ✅ JWT stored securely in HTTP-only cookie
- ✅ Logout by clearing cookie
- ✅ Protected route (`/profile`) that verifies JWT from cookie
- ✅ React frontend with form validations

---

## ⚙️ Backend Setup (Node.js + Express)

1. Navigate to the backend folder:
   ```
   cd server
   ```
2. Install dependencies:
    ```
     npm install

``` 
3. Create a .env file in the server/ directory:

 - PORT=8000
 - MONGO_URI=mongodb://localhost:27017/db_name
 - JWT_SECRET=your_jwt_secret
  
4. Start the backend server:
```
    npm install
```
# ⚛️ Frontend Setup (React)

 Navigate to the frontend folder:
   ```
    cd client
    ```
# Install dependencies:

    npm install
  
 Start the React app:
  
    npm start
---

Let me know if you want a deployable version or GitHub Actions CI/CD instructions added too.
