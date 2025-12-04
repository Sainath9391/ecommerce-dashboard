# 📚 E-Commerce Analytics Dashboard (MERN)

<!-- Standard Badges -->
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<!-- Repo Badges -->
![Stars](https://img.shields.io/github/stars/yourusername/yourrepo?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/yourusername/yourrepo?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/yourusername/yourrepo?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-orange?style=for-the-badge)

<!-- Tech Stack Logo Badges -->
![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node](https://img.shields.io/badge/Backend-Node.js-3C873A?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Server-Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Chart](https://img.shields.io/badge/Charts-Recharts-EE4C2C?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Axios](https://img.shields.io/badge/API-Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)


A fully functional **E-Commerce Analytics Dashboard** built using **React, Node.js, Express, and MongoDB**.  
 where students, friends, and teachers can collaborate, analyze data, and understand real-world business dashboards.

The dashboard allows users to **add products, customers, and orders**, and automatically generates **sales analytics, charts, reports, and CSV exports**.

---

## 🚀 Features

### 🎯 Dashboard Overview
- **Summary Cards**
  - Total Orders
  - Total Units Sold
  - Total Revenue
  - Total Profit
- **Monthly Sales Line Chart**
- **Customer Demographics Pie Chart**
- **Top Products Table**
- **Clean Navigation Bar**

### 📝 Add Data Page
Add the following directly into the database:
- Products  
- Customers  
- Orders  

All entries appear instantly on the dashboard.

### 📊 Reports Page
- Download **Monthly Sales Report (CSV)**
- Download **Top Products Report (CSV)**
- Real-time calculations based on stored orders

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- React.js  
- Axios (API communication)  
- Recharts (charts and graphs)  
- Modern UI with responsive layout  

### 🖧 Backend
- Node.js  
- Express.js  
- Mongoose ORM  
- MongoDB Aggregation Pipelines for analytics  

### 🗄️ Database
- MongoDB Atlas / Local MongoDB  
- Collections:
  - `products`
  - `customers`
  - `orders`

---

## 📁 Project Structure

root/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── server.js
│ └── .env
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── styles.css
├── README.md
└── package.json


---

## 📦 Test Data Included

Your repository includes the following ready-to-insert MongoDB data:

- **products.json**
- **customers.json**
- **orders_100.json** ✔️ (100 orders dataset in Extended JSON format)

Import them using **MongoDB Compass → Insert Many**.

---

## 🔌 API Endpoints

### ➤ Products
POST /api/products
GET /api/products


### ➤ Customers

POST /api/customers
GET /api/customers


### ➤ Orders

POST /api/orders
GET /api/orders


### ➤ Analytics

GET /api/analytics/summary
GET /api/analytics/monthly-sales
GET /api/analytics/customer-regions
GET /api/analytics/top-products


---

## 🚀 Getting Started



1. Install Backend Dependencies
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongodb_uri
PORT=5000


Run backend:

npm run dev

2. Install Frontend Dependencies
cd ../frontend
npm install
npm start


Set API base URL in frontend/src/api.js:

export const API_BASE = "http://localhost:5000";


📡 Import Test Data

Use MongoDB Compass:

Open each collection:

products

customers

orders

Click INSERT MANY

Paste the JSON from:

products.json

customers.json

orders_100.json

📈 Dashboard Preview

Full analytics with charts

Real-time updates

CSV downloads

Data-driven UI

🧠 Future Improvements

AI Chatbot to explain analytics

Product recommendations (ML)

User authentication (JWT)

Multiple dashboard roles

PDF report generation

❤️ Developed By : Pendalwar Sainath.

Built with ❤️ for students, communities, and learning enthusiasts.
Feel free to contribute or raise issues!
