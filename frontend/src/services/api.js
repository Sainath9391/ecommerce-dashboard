import axios from "axios";

// Backend URL from .env
const BASE_URL =
  process.env.REACT_APP_API ||
  "https://ecommerce-dashboardbackend-j3vy.onrender.com";

// Debug (optional)
console.log("🚀 Backend API URL:", BASE_URL);

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ===============================
// ANALYTICS
// ===============================
export const getOverview = () =>
  API.get("/api/analytics/overview").then(res => res.data);

export const getMonthlySales = () =>
  API.get("/api/analytics/monthly-sales").then(res => res.data);

export const getCustomerDemographics = () =>
  API.get("/api/analytics/customer-demographics").then(res => res.data);

export const getTopProducts = () =>
  API.get("/api/analytics/top-products").then(res => res.data);


// ===============================
// DATA
// ===============================
export const getProducts = () =>
  API.get("/api/data/products").then(res => res.data);

export const createProduct = (payload) =>
  API.post("/api/data/products", payload).then(res => res.data);

export const getCustomers = () =>
  API.get("/api/data/customers").then(res => res.data);

export const createCustomer = (payload) =>
  API.post("/api/data/customers", payload).then(res => res.data);

export const createOrder = (payload) =>
  API.post("/api/data/orders", payload).then(res => res.data);

export default API;
