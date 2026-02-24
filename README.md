
<div align="center">

<br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=28&pause=1000&color=4EA94B&center=true&vCenter=true&width=700&lines=E-Commerce+Analytics+Dashboard;MERN+Stack+%7C+Real-Time+Data+%7C+Charts+%7C+CSV+Reports" alt="Typing SVG" />

<br/>

# E-Commerce Analytics Dashboard

**A production-grade analytics platform built on the MERN stack**  
_Real-Time KPIs · Interactive Charts · MongoDB Aggregation · CSV Reporting_

<br/>

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://recharts.org/)

<br/>

[![Stars](https://img.shields.io/github/stars/yourusername/ecommerce-analytics?style=flat-square&color=4EA94B)](https://github.com/yourusername/ecommerce-analytics/stargazers)
[![Forks](https://img.shields.io/github/forks/yourusername/ecommerce-analytics?style=flat-square&color=4EA94B)](https://github.com/yourusername/ecommerce-analytics/network)
[![License](https://img.shields.io/badge/License-MIT-4EA94B?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-4EA94B?style=flat-square)](CONTRIBUTING.md)
[![Status](https://img.shields.io/badge/Status-Active-4EA94B?style=flat-square)](#)

<br/>

[Live Demo](#) &nbsp;·&nbsp; [Documentation](#) &nbsp;·&nbsp; [Report Bug](#) &nbsp;·&nbsp; [Request Feature](#)

<br/>

---

</div>

## Table of Contents

- [Overview](#overview)
- [Dashboard Preview](#dashboard-preview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Importing Test Data](#importing-test-data)
- [API Reference](#api-reference)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Developer](#developer)

---

## Overview

**E-Commerce Analytics Dashboard** is a full-stack MERN application that transforms raw order, product, and customer data into actionable business insights — in real time.

Designed with a clean separation between data ingestion, server-side computation via MongoDB Aggregation Pipelines, and a responsive React frontend, this project demonstrates how modern web stacks handle analytics at scale.

> Built for developers, data enthusiasts, and recruiters who want to see what clean full-stack architecture looks like in practice.

---

## Dashboard Preview

<div align="center">

| View | Components | Capabilities |
|---|---|---|
| **Dashboard Overview** | KPI Cards, Navigation | Live revenue, profit, and order metrics |
| **Analytics Charts** | Line Chart, Pie Chart | Monthly sales trends, customer demographics |
| **Top Products Table** | Ranked Data Table | Revenue-sorted product performance |
| **Add Data Page** | Form Interface | Live insert with instant dashboard update |
| **Reports Page** | CSV Export | Monthly sales and top products download |

</div>

> Fully responsive across desktop, tablet, and mobile viewports.

---

## Features

### Dashboard Overview

Real-time KPI cards surface the four metrics that matter most at a glance — Total Orders, Total Units Sold, Total Revenue, and Total Profit. Backed by a Monthly Sales Line Chart for trend analysis, a Customer Demographics Pie Chart for audience breakdown, and a Top Products Table ranked by revenue contribution.

### Add Data

A dedicated form page for inserting live records directly into MongoDB — Products (name, price, category, stock), Customers (demographics, location, metadata), and Orders (customer + product linkage, quantity, date). All entries propagate to the dashboard immediately, with no manual refresh required.

### Reports and Exports

Download a Monthly Sales Report or Top Products Report as CSV at any time. All figures are derived from live aggregation queries and are always accurate to the current state of the database.

---

## Tech Stack

| Layer | Technology | Role |
|---|---|---|
| Frontend | React.js | Component-based UI and state management |
| HTTP Client | Axios | REST API communication |
| Charts | Recharts | Interactive, responsive data visualizations |
| Backend | Node.js + Express.js | REST API server and business logic |
| ODM | Mongoose | Schema definitions and MongoDB querying |
| Database | MongoDB Atlas / Local | Data persistence |
| Analytics Engine | MongoDB Aggregation Pipelines | Server-side KPI and trend computation |

---

## Architecture

```
Client (React + Recharts)
        │
        │  HTTP via Axios
        ▼
Express.js REST API
        │
        ├── /api/data/*          ──►  CRUD Operations
        │       ├── products
        │       ├── customers
        │       └── orders
        │
        └── /api/analytics/*     ──►  Aggregation Pipelines
                ├── overview          (KPIs: revenue, profit, orders)
                ├── monthly-sales     (Trend data for line chart)
                ├── demographics      (Breakdown for pie chart)
                └── top-products      (Revenue-ranked product list)
                        │
                        ▼
               MongoDB Atlas / Local Instance
```

All analytics computation happens server-side via aggregation pipelines, keeping the frontend lightweight and the data queries performant.

---

## Project Structure

```
ecommerce-analytics/
│
├── backend/
│   ├── models/                  # Mongoose schemas — Product, Customer, Order
│   ├── routes/                  # API route definitions
│   ├── controllers/             # Business logic and aggregation handlers
│   ├── server.js                # Express app entry point
│   └── .env                     # Environment variables (not committed)
│
├── frontend/
│   └── src/
│       ├── components/          # Reusable UI — Cards, Charts, Nav
│       ├── pages/               # Dashboard, AddData, Reports
│       ├── api.js               # Axios base URL configuration
│       ├── App.js               # Root component and routing
│       └── styles.css           # Global styles
│
├── data/                        # Sample datasets for local testing
│   ├── products.json
│   ├── customers.json
│   └── orders_100.json          # 100 realistic order records
│
├── README.md
└── package.json
```

---

## Getting Started

### Prerequisites

```bash
node --version    # v18+ recommended
npm --version     # v8+
mongod --version  # Local MongoDB, or use a MongoDB Atlas URI
```

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ecommerce-analytics.git
cd ecommerce-analytics
```

### 2. Configure and Run the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:

```env
MONGO_URI=your_mongodb_connection_string_here
PORT=5000
```

> A free MongoDB URI is available via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

```bash
npm run dev
```

Backend available at `http://localhost:5000`

### 3. Configure and Run the Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file inside `/frontend`:

```env
REACT_APP_API=http://localhost:5000
```

Confirm the base URL in `frontend/src/api.js`:

```javascript
export const BASE_URL = process.env.REACT_APP_API || "http://localhost:5000";
```

```bash
npm start
```

Frontend available at `http://localhost:3000`

---

## Importing Test Data

Three ready-to-use datasets are included in `/data` for instant local testing.

### Via MongoDB Compass

| Step | Action |
|------|--------|
| 1 | Open MongoDB Compass and connect to your database |
| 2 | Navigate to your target database and select a collection |
| 3 | Click **Add Data** → **Insert Document** → **Insert Many** |
| 4 | Paste the JSON content from the corresponding file |

| Collection | Source File | Records |
|---|---|---|
| `products` | `data/products.json` | Sample product catalog |
| `customers` | `data/customers.json` | Sample customer profiles |
| `orders` | `data/orders_100.json` | 100 realistic order records |

### Via MongoDB CLI

```bash
mongoimport --uri "your_mongo_uri" --collection products  --file data/products.json  --jsonArray
mongoimport --uri "your_mongo_uri" --collection customers --file data/customers.json --jsonArray
mongoimport --uri "your_mongo_uri" --collection orders    --file data/orders_100.json --jsonArray
```

---

## API Reference

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/data/products` | Retrieve all products |
| `POST` | `/api/data/products` | Insert a new product |

### Customers

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/data/customers` | Retrieve all customers |
| `POST` | `/api/data/customers` | Insert a new customer |

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/data/orders` | Retrieve all orders |
| `POST` | `/api/data/orders` | Create a new order |

### Analytics

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/analytics/overview` | KPIs — revenue, profit, order count |
| `GET` | `/api/analytics/monthly-sales` | Monthly sales trend data |
| `GET` | `/api/analytics/customer-demographics` | Demographic breakdown |
| `GET` | `/api/analytics/top-products` | Best-selling products by revenue |

---

## Roadmap

- [ ] AI Chatbot — explain analytics insights in plain language
- [ ] ML Recommendations — product suggestion engine
- [ ] JWT Authentication — secure login and session management
- [ ] Role-Based Access Control — Admin, Analyst, and Viewer dashboards
- [ ] PDF Report Export — download formatted analytics reports
- [ ] Multi-Currency Support — localization for global deployments
- [ ] React Native Companion App — mobile analytics dashboard

---

## Contributing

Contributions from developers, students, and open-source enthusiasts are welcome.

```bash
# Fork the repository, then:
git checkout -b feature/your-feature-name
git commit -m "feat: describe your change"
git push origin feature/your-feature-name
# Open a Pull Request
```

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for all commit messages.

---

## License

Distributed under the **MIT License**. See `LICENSE` for full details.

---

<div align="center">

## Developer

**Pendalwar Sainath**  
_Systems-focused Full-Stack Developer · MERN · Analytics · Performance Engineering_

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourusername)
[![Portfolio](https://img.shields.io/badge/Portfolio-4EA94B?style=for-the-badge&logo=vercel&logoColor=white)](https://your-portfolio.dev)

<br/>

_If this project was useful to you, a star on the repository goes a long way._

<br/>

---

<sub>Built with precision · Designed for clarity · Engineered for scale</sub>

</div>
