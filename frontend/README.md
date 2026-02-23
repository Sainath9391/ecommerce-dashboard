<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=30&pause=1000&color=00D9FF&center=true&vCenter=true&width=600&lines=📊+E-Commerce+Analytics+Dashboard;Built+with+MERN+Stack;Real-Time+Data+%7C+Charts+%7C+CSV+Reports" alt="Typing SVG" />

<br/>

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

<br/>

![GitHub stars](https://img.shields.io/github/stars/yourusername/ecommerce-analytics?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/ecommerce-analytics?style=social)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

<br/>

> 🚀 A **fully functional E-Commerce Analytics Dashboard** built with the MERN stack — designed for students, developers, and educators to collaborate, explore real-world business data, and understand analytics at scale.

<br/>

[🔴 Live Demo](#) · [📖 Documentation](#) · [🐛 Report Bug](#) · [✨ Request Feature](#)

---

</div>

## 📌 Table of Contents

- [📸 Dashboard Preview](#-dashboard-preview)
- [✨ Features](#-features)
- [🏗️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚡ Getting Started](#-getting-started)
- [📡 Import Test Data](#-import-test-data)
- [🔌 API Reference](#-api-reference)
- [🚀 Future Improvements](#-future-improvements)
- [🤝 Contributing](#-contributing)
- [👨‍💻 Developer](#-developer)

---

## 📸 Dashboard Preview

<div align="center">

| Dashboard Overview | Analytics Charts | Reports Page |
|---|---|---|
| 📊 Summary Cards & KPIs | 📈 Line & Pie Charts | 📥 CSV Export |
| Real-time order tracking | Monthly Sales Trends | Top Products Report |
| Revenue & Profit metrics | Customer Demographics | Monthly Sales Report |

</div>

> ✅ **Fully responsive** · ✅ **Real-time updates** · ✅ **Data-driven UI**

---

## ✨ Features

### 🏠 Dashboard Overview
- **Summary KPI Cards**
  - 🛒 Total Orders
  - 📦 Total Units Sold
  - 💰 Total Revenue
  - 📈 Total Profit
- 📉 **Monthly Sales Line Chart** — visualize trends over time
- 🧁 **Customer Demographics Pie Chart** — understand your audience
- 🏆 **Top Products Table** — see what's driving revenue
- 🧭 **Clean, Responsive Navigation Bar**

### ➕ Add Data Page
Insert directly into your live MongoDB database:
- 📦 **Products** — name, price, category, stock
- 👤 **Customers** — demographics, location, metadata
- 🛒 **Orders** — customer + product linkage, quantity, date

> All entries appear **instantly** on the dashboard — no refresh needed.

### 📊 Reports Page
- 📥 **Download Monthly Sales Report** (CSV)
- 📥 **Download Top Products Report** (CSV)
- ⚡ Real-time calculations based on live order data

---

## 🏗️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React.js | UI Components & State Management |
| **API Client** | Axios | HTTP Requests to Backend |
| **Charts** | Recharts | Interactive Data Visualizations |
| **Backend** | Node.js + Express.js | REST API & Server Logic |
| **ORM** | Mongoose | MongoDB Schema & Querying |
| **Database** | MongoDB Atlas / Local | Data Persistence |
| **Analytics** | MongoDB Aggregation Pipelines | Server-side Data Computation |

---

## 📁 Project Structure

```
ecommerce-analytics/
│
├── 📂 backend/
│   ├── 📂 models/              # Mongoose schemas (Product, Customer, Order)
│   ├── 📂 routes/              # API route definitions
│   ├── 📂 controllers/         # Business logic handlers
│   ├── 🟢 server.js            # Express app entry point
│   └── 🔐 .env                 # Environment variables (not committed)
│
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📂 components/      # Reusable UI components (Cards, Charts, Nav)
│   │   ├── 📂 pages/           # Dashboard, AddData, Reports pages
│   │   ├── 🔌 api.js           # Axios base URL configuration
│   │   ├── ⚛️  App.js           # Root component & routing
│   │   └── 🎨 styles.css       # Global styles
│
├── 📂 data/                    # Sample test data (JSON)
│   ├── products.json
│   ├── customers.json
│   └── orders_100.json
│
├── 📄 README.md
└── 📦 package.json
```

---

## ⚡ Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

```bash
node --version    # v18+ recommended
npm --version     # v8+
mongod --version  # MongoDB or use Atlas URI
```

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/ecommerce-analytics.git
cd ecommerce-analytics
```

---

### 2️⃣ Setup & Run Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `/backend` directory:

```env
MONGO_URI=your_mongodb_connection_string_here
PORT=5000
```

> 💡 Get a free MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

Start the backend server:

```bash
npm run dev
```

✅ Server running at `http://localhost:5000`

---

### 3️⃣ Setup & Run Frontend

```bash
cd ../frontend
npm install
npm start
```

In `frontend/src/api.js`, configure the API base URL:

```javascript
export const BASE_URL = process.env.REACT_APP_API || "http://localhost:5000";
```

Create a `.env` file in `/frontend`:

```env
REACT_APP_API=http://localhost:5000
```

✅ App running at `http://localhost:3000`

---

## 📡 Import Test Data

Your repository includes 3 ready-to-use datasets for instant testing.

### Using MongoDB Compass (GUI)

| Step | Action |
|------|--------|
| 1 | Open **MongoDB Compass** and connect to your database |
| 2 | Navigate to your database → select a collection |
| 3 | Click **"Add Data"** → **"Insert Document"** → **"Insert Many"** |
| 4 | Paste the JSON content from the respective file |

| Collection | File | Records |
|---|---|---|
| `products` | `data/products.json` | Sample products |
| `customers` | `data/customers.json` | Sample customers |
| `orders` | `data/orders_100.json` | 100 realistic orders |

### Using MongoDB CLI (Alternative)

```bash
mongoimport --uri "your_mongo_uri" --collection products --file data/products.json --jsonArray
mongoimport --uri "your_mongo_uri" --collection customers --file data/customers.json --jsonArray
mongoimport --uri "your_mongo_uri" --collection orders --file data/orders_100.json --jsonArray
```

---

## 🔌 API Reference

### 📦 Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/data/products` | Fetch all products |
| `POST` | `/api/data/products` | Add a new product |

### 👤 Customers

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/data/customers` | Fetch all customers |
| `POST` | `/api/data/customers` | Add a new customer |

### 🛒 Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/data/orders` | Fetch all orders |
| `POST` | `/api/data/orders` | Create a new order |

### 📊 Analytics

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/analytics/overview` | KPIs: revenue, profit, orders |
| `GET` | `/api/analytics/monthly-sales` | Monthly sales trend data |
| `GET` | `/api/analytics/customer-demographics` | Pie chart breakdown |
| `GET` | `/api/analytics/top-products` | Best-selling products |

---

## 🚀 Future Improvements

- [ ] 🤖 **AI Chatbot** — Explain analytics in plain language
- [ ] 🧠 **ML Recommendations** — Product suggestion engine
- [ ] 🔐 **JWT Authentication** — Secure login & sessions
- [ ] 👥 **Role-Based Dashboards** — Admin, Analyst, Viewer roles
- [ ] 📄 **PDF Report Generation** — Export analytics as PDF
- [ ] 🌍 **Multi-currency Support** — Localization for global use
- [ ] 📱 **Mobile App** — React Native companion app

---

## 🤝 Contributing

Contributions are welcome from students, developers, and educators! 🎉

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "feat: add amazing feature"

# 4. Push to your branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

Please follow [conventional commits](https://www.conventionalcommits.org/) for your commit messages.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Developer

<div align="center">

**Pendalwar Sainath**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourusername)

---

Built with ❤️ for **students, communities, and learning enthusiasts.**

*Feel free to ⭐ star this repo, contribute, or raise issues!*

</div>
