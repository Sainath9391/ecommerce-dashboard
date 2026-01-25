import React, { useEffect, useState } from "react";
import {
  getProducts,
  getCustomers,
  createProduct,
  createCustomer,
  createOrder,
} from "../services/api";

const DataEntryPage = () => {
  // dropdown data
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  // status message
  const [message, setMessage] = useState("");

  // Product form
  const [productForm, setProductForm] = useState({
    name: "",
    category: "",
  });

  // Customer form
  const [customerForm, setCustomerForm] = useState({
    name: "",
    age: "",
    region: "",
  });

  // Order form
  const [orderForm, setOrderForm] = useState({
    productId: "",
    customerId: "",
    quantity: 1,
    sellingPrice: "",
    costPrice: "",
    orderDate: "",
  });

  useEffect(() => {
    // load initial data for dropdowns
    async function fetchDropdowns() {
      try {
        const [prodRes, custRes] = await Promise.all([
          getProducts(),
          getCustomers(),
        ]);
        setProducts(prodRes);
        setCustomers(custRes);
      } catch (err) {
        console.error("Error loading dropdown data:", err);
      }
    }
    fetchDropdowns();
  }, []);

  // simple helper
  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  // ----- HANDLERS -----

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    try {
      const created = await createProduct(productForm);
      setProducts((prev) => [...prev, created]);
      setProductForm({ name: "", category: "" });
      showMessage("Product added successfully.");
    } catch (err) {
      console.error("Error creating product:", err);
      showMessage("Failed to add product.");
    }
  };

  const handleCustomerSubmit = async (e) => {
    e.preventDefault();
    try {
      const created = await createCustomer({
        ...customerForm,
        age: customerForm.age ? Number(customerForm.age) : undefined,
      });
      setCustomers((prev) => [...prev, created]);
      setCustomerForm({ name: "", age: "", region: "" });
      showMessage("Customer added successfully.");
    } catch (err) {
      console.error("Error creating customer:", err);
      showMessage("Failed to add customer.");
    }
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      await createOrder({
        ...orderForm,
        quantity: Number(orderForm.quantity),
        sellingPrice: Number(orderForm.sellingPrice),
        costPrice: Number(orderForm.costPrice),
        orderDate: orderForm.orderDate || undefined,
      });
      setOrderForm({
        productId: "",
        customerId: "",
        quantity: 1,
        sellingPrice: "",
        costPrice: "",
        orderDate: "",
      });
      showMessage("Order added successfully. Dashboard metrics will include it.");
    } catch (err) {
      console.error("Error creating order:", err);
      showMessage("Failed to add order.");
    }
  };

  return (
    <div className="panel data-panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Data Entry</h2>
          <p className="panel-subtitle">
            Add products, customers, and orders. Metrics on the dashboard are generated from this data.
          </p>
        </div>
      </div>

      {message && (
        <div className="form-message">
          {message}
        </div>
      )}

      <div className="data-grid">
        {/* PRODUCT FORM */}
        <div className="data-card">
          <h3 className="data-card-title">Add Product</h3>
          <form onSubmit={handleProductSubmit} className="form-grid">
            <label className="form-field">
              <span>Product Name</span>
              <input
                type="text"
                value={productForm.name}
                onChange={(e) =>
                  setProductForm((f) => ({ ...f, name: e.target.value }))
                }
                required
              />
            </label>

            <label className="form-field">
              <span>Category</span>
              <input
                type="text"
                value={productForm.category}
                onChange={(e) =>
                  setProductForm((f) => ({ ...f, category: e.target.value }))
                }
                placeholder="Electronics, Accessories, etc."
              />
            </label>

            <button type="submit" className="btn-primary">
              Save Product
            </button>
          </form>
        </div>

        {/* CUSTOMER FORM */}
        <div className="data-card">
          <h3 className="data-card-title">Add Customer</h3>
          <form onSubmit={handleCustomerSubmit} className="form-grid">
            <label className="form-field">
              <span>Customer Name</span>
              <input
                type="text"
                value={customerForm.name}
                onChange={(e) =>
                  setCustomerForm((f) => ({ ...f, name: e.target.value }))
                }
                required
              />
            </label>

            <label className="form-field">
              <span>Age</span>
              <input
                type="number"
                min="0"
                value={customerForm.age}
                onChange={(e) =>
                  setCustomerForm((f) => ({ ...f, age: e.target.value }))
                }
              />
            </label>

            <label className="form-field">
              <span>Region</span>
              <select
                value={customerForm.region}
                onChange={(e) =>
                  setCustomerForm((f) => ({ ...f, region: e.target.value }))
                }
              >
                <option value="">Select region</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="East">East</option>
                <option value="West">West</option>
              </select>
            </label>

            <button type="submit" className="btn-primary">
              Save Customer
            </button>
          </form>
        </div>
      </div>

      {/* ORDER FORM full width */}
      <div className="data-card order-card">
        <h3 className="data-card-title">Add Order</h3>
        <form onSubmit={handleOrderSubmit} className="form-grid form-grid-wide">
          <label className="form-field">
            <span>Product</span>
            <select
              value={orderForm.productId}
              onChange={(e) =>
                setOrderForm((f) => ({ ...f, productId: e.target.value }))
              }
              required
            >
              <option value="">Select product</option>
              {products.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>

          <label className="form-field">
            <span>Customer</span>
            <select
              value={orderForm.customerId}
              onChange={(e) =>
                setOrderForm((f) => ({ ...f, customerId: e.target.value }))
              }
              required
            >
              <option value="">Select customer</option>
              {customers.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>

          <label className="form-field">
            <span>Quantity</span>
            <input
              type="number"
              min="1"
              value={orderForm.quantity}
              onChange={(e) =>
                setOrderForm((f) => ({ ...f, quantity: e.target.value }))
              }
              required
            />
          </label>

          <label className="form-field">
            <span>Selling Price (₹ per unit)</span>
            <input
              type="number"
              min="0"
              value={orderForm.sellingPrice}
              onChange={(e) =>
                setOrderForm((f) => ({ ...f, sellingPrice: e.target.value }))
              }
              required
            />
          </label>

          <label className="form-field">
            <span>Cost Price (₹ per unit)</span>
            <input
              type="number"
              min="0"
              value={orderForm.costPrice}
              onChange={(e) =>
                setOrderForm((f) => ({ ...f, costPrice: e.target.value }))
              }
              required
            />
          </label>

          <label className="form-field">
            <span>Order Date</span>
            <input
              type="date"
              value={orderForm.orderDate}
              onChange={(e) =>
                setOrderForm((f) => ({ ...f, orderDate: e.target.value }))
              }
            />
          </label>

          <button type="submit" className="btn-primary btn-order-submit">
            Save Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataEntryPage;
