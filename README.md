# Student Management System – Backend API

## Project Overview

This project is a **Student Management System** built with **Node.js, Express.js, TypeScript, and MongoDB Atlas**.  
It supports two types of users: **Admin** and **Student**.

### Features

**Admin Panel**
- Admin login with email & password
- Add students (name, email, department, password)
- Assign tasks to students with due date/time

**Student Interface**
- Student login with email & password
- View tasks assigned to them
- See task status: Pending, Overdue, Completed
- Update task status to Completed

**Authentication**
- JWT-based
- No session or cookies
- All requests and responses are in JSON

---

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- JWT for authentication
- bcrypt for password hashing

---

## Setup Instructions

1. Clone the repository:

git clone [<your-repo-url>](https://github.com/athuls11/student-management-system.git)
cd student-management-system

2. Install dependencies:

npm install

3. Create .env file in project root:

PORT=3000
MONGO_URI=mongodb+srv://athuls180_db_user:ejYWaXviMNtm0UMT@student-management-clus.mnt8m7d.mongodb.net/?appName=student-management-cluster
JWT_SECRET=jwtsecretkeyforstudentmanagementsystem
JWT_EXPIRES_IN=1d

4. Run the server (development mode):

npm run dev
Server will start at http://localhost:3000

## API Documentation

Detailed API documentation with sample requests and responses is available in Postman:  
[View API Docs](https://documenter.getpostman.com/view/19649153/2sBXcAKPBP)
