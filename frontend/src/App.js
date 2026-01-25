import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import MonthlySalesChart from "./components/MonthlySalesChart";
import DemographicsChart from "./components/DemographicsChart";
import TopProductsTable from "./components/TopProductsTable";
import DataEntryPage from "./components/DataEntryPage";
import ReportsPage from "./components/ReportsPage";
import {
  getOverview,
  getMonthlySales,
  getCustomerDemographics,
  getTopProducts,
} from "./services/api";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const [overview, setOverview] = useState(null);
  const [monthlySales, setMonthlySales] = useState([]);
  const [demographics, setDemographics] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      setError("");

      const [overviewRes, monthlySalesRes, demographicsRes, topProductsRes] =
        await Promise.all([
          getOverview(),
          getMonthlySales(),
          getCustomerDemographics(),
          getTopProducts(),
        ]);

      setOverview(overviewRes);
      setMonthlySales(monthlySalesRes);
      setDemographics(demographicsRes);
      setTopProducts(topProductsRes);
    } catch (err) {
      console.error("Error fetching analytics:", err);
      setError("Unable to load analytics. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <div className="app-shell">
      <Navbar currentPage={currentPage} onChangePage={setCurrentPage} />
      <main className="main-shell">
        <div className="dashboard-inner">
          {currentPage === "dashboard" && (
            <>
              <section className="dashboard-header">
                <div>
                  <h1 className="dashboard-title">
                    E-Commerce Sales Dashboard
                  </h1>
                  <p className="dashboard-subtitle">
                    Monitor performance, understand your customers, and track
                    growth in a single view.
                  </p>
                </div>
                <div className="header-meta">
                  <span className="pill pill-soft">Live Data</span>
                  <span className="pill pill-outline">Last 12 months</span>
                </div>
              </section>

              {loading && (
                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                  Loading analytics...
                </p>
              )}

              {error && (
                <p style={{ fontSize: "0.9rem", color: "#b91c1c" }}>{error}</p>
              )}

              {!loading && !error && (
                <>
                  <section className="section-block">
                    {overview && <SummaryCards overview={overview} />}
                  </section>

                  <section className="section-block charts-grid">
                    <div className="panel panel-primary">
                      <div className="panel-header">
                        <div>
                          <h2 className="panel-title">Monthly Sales Trend</h2>
                          <p className="panel-subtitle">
                            Total revenue generated per month (₹).
                          </p>
                        </div>
                      </div>
                      <MonthlySalesChart data={monthlySales} />
                    </div>

                    <div className="panel">
                      <div className="panel-header">
                        <div>
                          <h2 className="panel-title">Customer Demographics</h2>
                          <p className="panel-subtitle">
                            Distribution of customers across regions.
                          </p>
                        </div>
                      </div>
                      <DemographicsChart data={demographics} />
                    </div>
                  </section>

                  <section className="section-block">
                    <div className="panel">
                      <div className="panel-header">
                        <div>
                          <h2 className="panel-title">Top-Selling Products</h2>
                          <p className="panel-subtitle">
                            Ranked by revenue and units sold.
                          </p>
                        </div>
                      </div>
                      <TopProductsTable data={topProducts} />
                    </div>
                  </section>
                </>
              )}
            </>
          )}

          {currentPage === "data" && <DataEntryPage />}

          {currentPage === "reports" && (
            <ReportsPage
              overview={overview}
              monthlySales={monthlySales}
              demographics={demographics}
              topProducts={topProducts}
              loading={loading}
              error={error}
              onRefresh={fetchAnalytics}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
