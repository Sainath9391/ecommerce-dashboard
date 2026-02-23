Typing SVG
MongoDB Express React Node.js Recharts


GitHub stars GitHub forks License PRs Welcome


🚀 A fully functional E-Commerce Analytics Dashboard built with the MERN stack — designed for students, developers, and educators to collaborate, explore real-world business data, and understand analytics at scale.


🔴 Live Demo · 📖 Documentation · 🐛 Report Bug · ✨ Request Feature

📌 Table of Contents
📸 Dashboard Preview
✨ Features
🏗️ Tech Stack
📁 Project Structure
⚡ Getting Started
📡 Import Test Data
🔌 API Reference
🚀 Future Improvements
🤝 Contributing
👨‍💻 Developer
📸 Dashboard Preview
Dashboard Overview	Analytics Charts	Reports Page
📊 Summary Cards & KPIs	📈 Line & Pie Charts	📥 CSV Export
Real-time order tracking	Monthly Sales Trends	Top Products Report
Revenue & Profit metrics	Customer Demographics	Monthly Sales Report
✅ Fully responsive · ✅ Real-time updates · ✅ Data-driven UI

✨ Features
🏠 Dashboard Overview
Summary KPI Cards
🛒 Total Orders
📦 Total Units Sold
💰 Total Revenue
📈 Total Profit
📉 Monthly Sales Line Chart — visualize trends over time
🧁 Customer Demographics Pie Chart — understand your audience
🏆 Top Products Table — see what's driving revenue
🧭 Clean, Responsive Navigation Bar
➕ Add Data Page
Insert directly into your live MongoDB database:

📦 Products — name, price, category, stock
👤 Customers — demographics, location, metadata
🛒 Orders — customer + product linkage, quantity, date
All entries appear instantly on the dashboard — no refresh needed.

📊 Reports Page
📥 Download Monthly Sales Report (CSV)
📥 Download Top Products Report (CSV)
⚡ Real-time calculations based on live order data
🏗️ Tech Stack
Layer	Technology	Purpose
Frontend	React.js	UI Components & State Management
API Client	Axios	HTTP Requests to Backend
Charts	Recharts	Interactive Data Visualizations
Backend	Node.js + Express.js	REST API & Server Logic
ORM	Mongoose	MongoDB Schema & Querying
Database	MongoDB Atlas / Local	Data Persistence
Analytics	MongoDB Aggregation Pipelines	Server-side Data Computation
📁 Project Structure
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
⚡ Getting Started
✅ Prerequisites
Make sure you have the following installed:

node --version    # v18+ recommended
npm --version     # v8+
mongod --version  # MongoDB or use Atlas URI
1️⃣ Clone the Repository
git clone https://github.com/yourusername/ecommerce-analytics.git
cd ecommerce-analytics
2️⃣ Setup & Run Backend
cd backend
npm install
Create a .env file in the /backend directory:

MONGO_URI=your_mongodb_connection_string_here
PORT=5000
💡 Get a free MongoDB URI from MongoDB Atlas

Start the backend server:

npm run dev
✅ Server running at http://localhost:5000

3️⃣ Setup & Run Frontend
cd ../frontend
npm install
npm start
In frontend/src/api.js, configure the API base URL:

export const BASE_URL = process.env.REACT_APP_API || "http://localhost:5000";
Create a .env file in /frontend:

REACT_APP_API=http://localhost:5000
✅ App running at http://localhost:3000

📡 Import Test Data
Your repository includes 3 ready-to-use datasets for instant testing.

Using MongoDB Compass (GUI)
Step	Action
1	Open MongoDB Compass and connect to your database
2	Navigate to your database → select a collection
3	Click "Add Data" → "Insert Document" → "Insert Many"
4	Paste the JSON content from the respective file
Collection	File	Records
products	data/products.json	Sample products
customers	data/customers.json	Sample customers
orders	data/orders_100.json	100 realistic orders
Using MongoDB CLI (Alternative)
mongoimport --uri "your_mongo_uri" --collection products --file data/products.json --jsonArray
mongoimport --uri "your_mongo_uri" --collection customers --file data/customers.json --jsonArray
mongoimport --uri "your_mongo_uri" --collection orders --file data/orders_100.json --jsonArray
🔌 API Reference
📦 Products
Method	Endpoint	Description
GET	/api/data/products	Fetch all products
POST	/api/data/products	Add a new product
👤 Customers
Method	Endpoint	Description
GET	/api/data/customers	Fetch all customers
POST	/api/data/customers	Add a new customer
🛒 Orders
Method	Endpoint	Description
GET	/api/data/orders	Fetch all orders
POST	/api/data/orders	Create a new order
📊 Analytics
Method	Endpoint	Description
GET	/api/analytics/overview	KPIs: revenue, profit, orders
GET	/api/analytics/monthly-sales	Monthly sales trend data
GET	/api/analytics/customer-demographics	Pie chart breakdown
GET	/api/analytics/top-products	Best-selling products
🚀 Future Improvements
 🤖 AI Chatbot — Explain analytics in plain language
 🧠 ML Recommendations — Product suggestion engine
 🔐 JWT Authentication — Secure login & sessions
 👥 Role-Based Dashboards — Admin, Analyst, Viewer roles
 📄 PDF Report Generation — Export analytics as PDF
 🌍 Multi-currency Support — Localization for global use
 📱 Mobile App — React Native companion app
🤝 Contributing
Contributions are welcome from students, developers, and educators! 🎉

# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "feat: add amazing feature"

# 4. Push to your branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
Please follow conventional commits for your commit messages.

📄 License
Distributed under the MIT License. See LICENSE for more information.

👨‍💻 Developer
Pendalwar Sainath

GitHub LinkedIn

Built with ❤️ for students, communities, and learning enthusiasts.

Feel free to ⭐ star this repo, contribute, or raise issues!
