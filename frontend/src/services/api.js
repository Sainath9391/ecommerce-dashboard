import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

const API = axios.create({
  baseURL: BASE_URL,
});

// ---------- ANALYTICS ----------
export const getOverview = () =>
  API.get("/api/analytics/overview").then((res) => res.data);

export const getMonthlySales = () =>
  API.get("/api/analytics/monthly-sales").then((res) => res.data);

export const getCustomerDemographics = () =>
  API.get("/api/analytics/customer-demographics").then((res) => res.data);

export const getTopProducts = () =>
  API.get("/api/analytics/top-products").then((res) => res.data);

// ---------- DATA ENTRY ----------

// Products
export const getProducts = () =>
  API.get("/api/data/products").then((res) => res.data);

export const createProduct = (payload) =>
  API.post("/api/data/products", payload).then((res) => res.data);

// Customers
export const getCustomers = () =>
  API.get("/api/data/customers").then((res) => res.data);

export const createCustomer = (payload) =>
  API.post("/api/data/customers", payload).then((res) => res.data);

// Orders
export const createOrder = (payload) =>
  API.post("/api/data/orders", payload).then((res) => res.data);
