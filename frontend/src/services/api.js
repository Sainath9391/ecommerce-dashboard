import axios from "axios";

const ANALYTICS_BASE_URL = "http://localhost:5000/api/analytics";
const DATA_BASE_URL = "http://localhost:5000/api/data";

// ---------- ANALYTICS ----------
export const getOverview = () =>
  axios.get(`${ANALYTICS_BASE_URL}/overview`).then((res) => res.data);

export const getMonthlySales = () =>
  axios.get(`${ANALYTICS_BASE_URL}/monthly-sales`).then((res) => res.data);

export const getCustomerDemographics = () =>
  axios.get(`${ANALYTICS_BASE_URL}/customer-demographics`).then((res) => res.data);

export const getTopProducts = () =>
  axios.get(`${ANALYTICS_BASE_URL}/top-products`).then((res) => res.data);

// ---------- DATA ENTRY ----------

// Products
export const getProducts = () =>
  axios.get(`${DATA_BASE_URL}/products`).then((res) => res.data);

export const createProduct = (payload) =>
  axios.post(`${DATA_BASE_URL}/products`, payload).then((res) => res.data);

// Customers
export const getCustomers = () =>
  axios.get(`${DATA_BASE_URL}/customers`).then((res) => res.data);

export const createCustomer = (payload) =>
  axios.post(`${DATA_BASE_URL}/customers`, payload).then((res) => res.data);

// Orders
export const createOrder = (payload) =>
  axios.post(`${DATA_BASE_URL}/orders`, payload).then((res) => res.data);
