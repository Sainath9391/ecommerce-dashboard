import React from "react";

const ReportsPage = ({
  overview,
  monthlySales,
  demographics,
  topProducts,
  loading,
  error,
  onRefresh,
}) => {
  const handleDownloadMonthlyCsv = () => {
    if (!monthlySales || monthlySales.length === 0) return;

    const rows = [
      ["Month", "Revenue"],
      ...monthlySales.map((row) => [row.month, row.revenue]),
    ];

    const csvContent = rows.map((r) => r.join(",")).join("\n");
    downloadCsv(csvContent, "monthly_sales_report.csv");
  };

  const handleDownloadProductsCsv = () => {
    if (!topProducts || topProducts.length === 0) return;

    const rows = [
      ["Product", "Units Sold", "Revenue"],
      ...topProducts.map((p) => [p.name, p.unitsSold, p.revenue]),
    ];

    const csvContent = rows.map((r) => r.join(",")).join("\n");
    downloadCsv(csvContent, "top_products_report.csv");
  };

  const downloadCsv = (content, filename) => {
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="panel reports-panel">
      <div className="panel-header reports-header">
        <div>
          <h2 className="panel-title">Reports</h2>
          <p className="panel-subtitle">
            Structured reports generated from your sales, customers, and product data.
          </p>
        </div>
        <div className="reports-actions">
          <button className="btn-secondary" onClick={onRefresh}>
            Refresh Data
          </button>
        </div>
      </div>

      {loading && (
        <p className="reports-info">Loading latest data for reports…</p>
      )}
      {error && <p className="reports-error">{error}</p>}

      {!loading && !error && (
        <>
          {/* Overview summary */}
          <section className="reports-section">
            <h3 className="reports-section-title">Overview Summary</h3>
            {overview ? (
              <table className="data-table reports-table">
                <tbody>
                  <tr>
                    <th>Total Orders</th>
                    <td>{overview.totalOrders}</td>
                  </tr>
                  <tr>
                    <th>Total Units Sold</th>
                    <td>{overview.totalUnits}</td>
                  </tr>
                  <tr>
                    <th>Total Revenue (₹)</th>
                    <td>{overview.totalRevenue.toLocaleString("en-IN")}</td>
                  </tr>
                  <tr>
                    <th>Total Profit (₹)</th>
                    <td>{overview.totalProfit.toLocaleString("en-IN")}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p className="reports-info">No overview data available.</p>
            )}
          </section>

          {/* Monthly sales report */}
          <section className="reports-section">
            <div className="reports-section-header">
              <h3 className="reports-section-title">Monthly Sales Report</h3>
              <button
                className="btn-secondary btn-small"
                onClick={handleDownloadMonthlyCsv}
              >
                Download CSV
              </button>
            </div>
            {monthlySales && monthlySales.length > 0 ? (
              <div className="table-shell">
                <table className="data-table reports-table">
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Revenue (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlySales.map((row) => (
                      <tr key={row.month}>
                        <td>{row.month}</td>
                        <td>{row.revenue.toLocaleString("en-IN")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="reports-info">No monthly sales data available.</p>
            )}
          </section>

          {/* Customer demographics report */}
          <section className="reports-section">
            <h3 className="reports-section-title">Customer Demographics</h3>
            {demographics && demographics.length > 0 ? (
              <div className="table-shell">
                <table className="data-table reports-table">
                  <thead>
                    <tr>
                      <th>Region</th>
                      <th>Number of Customers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demographics.map((row) => (
                      <tr key={row.label}>
                        <td>{row.label}</td>
                        <td>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="reports-info">
                No customer demographic data available.
              </p>
            )}
          </section>

          {/* Top products report */}
          <section className="reports-section">
            <div className="reports-section-header">
              <h3 className="reports-section-title">Top Products Report</h3>
              <button
                className="btn-secondary btn-small"
                onClick={handleDownloadProductsCsv}
              >
                Download CSV
              </button>
            </div>
            {topProducts && topProducts.length > 0 ? (
              <div className="table-shell">
                <table className="data-table reports-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Units Sold</th>
                      <th>Revenue (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topProducts.map((p, index) => (
                      <tr key={p.name}>
                        <td>{index + 1}</td>
                        <td>{p.name}</td>
                        <td>{p.unitsSold}</td>
                        <td>{p.revenue.toLocaleString("en-IN")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="reports-info">No product data available.</p>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default ReportsPage;
