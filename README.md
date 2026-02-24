<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=4,12,24&height=180&section=header&text=E-Commerce%20Analytics&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Real-Time%20KPIs%20%7C%20MERN%20Stack%20%7C%20Charts%20%7C%20CSV%20Reports&descAlignY=58&descSize=16" />

<br/>

<a href="https://github.com/Sainath9391/ecommerce-analytics">
  <img src="https://readme-typing-svg.demolab.com/?font=JetBrains+Mono&weight=600&size=18&duration=3500&pause=1000&color=34D399&center=true&vCenter=true&width=620&height=45&lines=MongoDB+%2B+Express+%2B+React+%2B+Node.js;Live+KPIs+%C2%B7+Charts+%C2%B7+CSV+Exports;Production-Grade+Analytics+Architecture" alt="Typing SVG" />
</a>

<br/><br/>

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://recharts.org/)

<br/>

[![Stars](https://img.shields.io/github/stars/Sainath9391/ecommerce-analytics?style=flat-square&color=34D399&label=Stars)](https://github.com/Sainath9391/ecommerce-analytics/stargazers)
[![Forks](https://img.shields.io/github/forks/Sainath9391/ecommerce-analytics?style=flat-square&color=34D399&label=Forks)](https://github.com/Sainath9391/ecommerce-analytics/network)
[![License](https://img.shields.io/badge/License-MIT-34D399?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-22D3EE?style=flat-square)](#)

<br/>

[**Live Demo**](#) &nbsp;·&nbsp; [**API Docs**](#) &nbsp;·&nbsp; [**Report Bug**](#) &nbsp;·&nbsp; [**Request Feature**](#)

<br/>

</div>

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

## &nbsp; Table of Contents

&nbsp;&nbsp; [01 &nbsp; Overview](#-overview) &nbsp;·&nbsp;
[02 &nbsp; Dashboard Screens](#-dashboard-screens) &nbsp;·&nbsp;
[03 &nbsp; Features](#-features) &nbsp;·&nbsp;
[04 &nbsp; Tech Stack](#-tech-stack)

&nbsp;&nbsp; [05 &nbsp; Architecture](#-architecture) &nbsp;·&nbsp;
[06 &nbsp; Project Structure](#-project-structure) &nbsp;·&nbsp;
[07 &nbsp; Getting Started](#-getting-started) &nbsp;·&nbsp;
[08 &nbsp; Importing Test Data](#-importing-test-data)

&nbsp;&nbsp; [09 &nbsp; API Reference](#-api-reference) &nbsp;·&nbsp;
[10 &nbsp; Roadmap](#-roadmap) &nbsp;·&nbsp;
[11 &nbsp; Contributing](#-contributing) &nbsp;·&nbsp;
[12 &nbsp; License](#-license)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<br/>

## ◈ Overview

**E-Commerce Analytics Dashboard** is a full-stack MERN application that transforms raw order, product, and customer data into actionable business insights — in real time.

Built with a clean separation between data ingestion, server-side computation via MongoDB Aggregation Pipelines, and a responsive React frontend — demonstrating how production-grade analytics platforms are architected at scale.

<br/>

## ◈ Dashboard Screens

<div align="center">

| Screen | Key Components | What It Does |
|---|---|---|
| **Overview** | KPI Cards, Charts, Table | Revenue · Profit · Orders · Top Products |
| **Analytics** | Line Chart + Pie Chart | Monthly Sales Trends · Demographics |
| **Add Data** | Form Interface | Live insert → instant dashboard update |
| **Reports** | Download Buttons | Export CSV — Monthly Sales & Top Products |

</div>

<br/>

## ◈ Features

**Dashboard Overview** — Four real-time KPI cards (Orders, Units Sold, Revenue, Profit) backed by a Monthly Sales Line Chart, Customer Demographics Pie Chart, and a revenue-ranked Top Products Table.

**Add Data** — Insert Products, Customers, and Orders directly into MongoDB via a form interface. All records reflect on the dashboard instantly with no refresh required.

**Reports & Exports** — Download Monthly Sales and Top Products reports as CSV. Figures are computed from live aggregation queries on every request.

<br/>

## ◈ Tech Stack

<div align="center">

| Layer | Technology | Role |
|---|---|---|
| **Frontend** | React.js | UI components and state management |
| **HTTP Client** | Axios | REST API communication |
| **Charts** | Recharts | Interactive data visualizations |
| **Backend** | Node.js + Express.js | REST API and business logic |
| **ODM** | Mongoose | Schema definitions and MongoDB querying |
| **Database** | MongoDB Atlas / Local | Data persistence |
| **Analytics** | MongoDB Aggregation Pipelines | Server-side KPI computation |

</div>

<br/>

## ◈ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   React (Recharts + Axios)                   │
└────────────────────────┬────────────────────────────────────┘
                         │  HTTP
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                     Express.js REST API                      │
│                                                             │
│  ┌──────────────────────┐   ┌──────────────────────────┐   │
│  │    /api/data/*        │   │    /api/analytics/*       │   │
│  │  CRUD Operations      │   │  Aggregation Pipelines    │   │
│  │  products             │   │  overview  (KPIs)         │   │
│  │  customers            │   │  monthly-sales (Trend)    │   │
│  │  orders               │   │  demographics  (Pie)      │   │
│  └──────────┬────────────┘   │  top-products  (Table)    │   │
│             │                └──────────────┬────────────┘   │
└─────────────┼───────────────────────────────┼───────────────┘
              │                               │
              └───────────────┬───────────────┘
                              ▼
              ┌───────────────────────────────┐
              │         MongoDB Atlas          │
              │  { products · customers ·     │
              │    orders · aggregations }     │
              └───────────────────────────────┘
```

<br/>

## ◈ Project Structure

```
ecommerce-analytics/
│
├── backend/
│   ├── models/          # Mongoose schemas — Product, Customer, Order
│   ├── routes/          # API route definitions
│   ├── controllers/     # Business logic + aggregation handlers
│   ├── server.js        # Express entry point
│   └── .env             # Environment variables (not committed)
│
├── frontend/
│   └── src/
│       ├── components/  # Cards, Charts, Nav
│       ├── pages/       # Dashboard, AddData, Reports
│       ├── api.js       # Axios base URL config
│       ├── App.js       # Root component + routing
│       └── styles.css
│
├── data/
│   ├── products.json
│   ├── customers.json
│   └── orders_100.json  # 100 realistic order records
│
└── package.json
```

<br/>

## ◈ Getting Started

**Prerequisites**

```bash
node --version    # v18+
npm --version     # v8+
mongod --version  # Local MongoDB or MongoDB Atlas URI
```

**1. Clone**

```bash
git clone https://github.com/Sainath9391/ecommerce-analytics.git
cd ecommerce-analytics
```

**2. Backend Setup**

```bash
cd backend && npm install
```

Create `backend/.env`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

```bash
npm run dev
# → http://localhost:5000
```

**3. Frontend Setup**

```bash
cd ../frontend && npm install
```

Create `frontend/.env`:

```env
REACT_APP_API=http://localhost:5000
```

```bash
npm start
# → http://localhost:3000
```

<br/>

## ◈ Importing Test Data

**Via MongoDB Compass**

Connect to your database → select a collection → **Add Data** → **Insert Document** → **Insert Many** → paste the JSON file content.

| Collection | File | Records |
|---|---|---|
| `products` | `data/products.json` | Product catalog |
| `customers` | `data/customers.json` | Customer profiles |
| `orders` | `data/orders_100.json` | 100 order records |

**Via CLI**

```bash
mongoimport --uri "your_mongo_uri" --collection products  --file data/products.json  --jsonArray
mongoimport --uri "your_mongo_uri" --collection customers --file data/customers.json --jsonArray
mongoimport --uri "your_mongo_uri" --collection orders    --file data/orders_100.json --jsonArray
```

<br/>

## ◈ API Reference

**Products · Customers · Orders**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/data/products` | Retrieve all products |
| `POST` | `/api/data/products` | Insert a product |
| `GET` | `/api/data/customers` | Retrieve all customers |
| `POST` | `/api/data/customers` | Insert a customer |
| `GET` | `/api/data/orders` | Retrieve all orders |
| `POST` | `/api/data/orders` | Create an order |

**Analytics**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/analytics/overview` | Revenue, profit, order count |
| `GET` | `/api/analytics/monthly-sales` | Monthly trend data |
| `GET` | `/api/analytics/customer-demographics` | Demographic breakdown |
| `GET` | `/api/analytics/top-products` | Best sellers by revenue |

<br/>

## ◈ Roadmap

- [ ] JWT Authentication and session management
- [ ] Role-based dashboards — Admin, Analyst, Viewer
- [ ] AI Chatbot for plain-language analytics summaries
- [ ] PDF report export
- [ ] Multi-currency and localization support
- [ ] React Native companion app

<br/>

## ◈ Contributing

```bash
git checkout -b feature/your-feature
git commit -m "feat: describe your change"
git push origin feature/your-feature
# Open a Pull Request
```

Follow [Conventional Commits](https://www.conventionalcommits.org/) for all messages. Issues and suggestions welcome.

<br/>

## ◈ License

MIT License — see [`LICENSE`](LICENSE) for full details.

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=4,12,24&height=100&section=footer" />

<div align="center">

**Pendalwar Sainath**  
_Full-Stack Developer &nbsp;·&nbsp; MERN &nbsp;·&nbsp; Analytics &nbsp;·&nbsp; Performance Engineering_

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sainath9391)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/pendalwar-sainath-598169349)
[![Portfolio](https://img.shields.io/badge/Portfolio-34D399?style=for-the-badge&logo=vercel&logoColor=white)](https://your-portfolio.dev)

<br/>

<sub>Built with precision &nbsp;·&nbsp; Designed for clarity &nbsp;·&nbsp; Engineered for scale</sub>

</div>
