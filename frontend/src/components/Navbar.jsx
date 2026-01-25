import React from "react";

const Navbar = ({ currentPage, onChangePage }) => {
  const isDashboard = currentPage === "dashboard";
  const isDataEntry = currentPage === "data";
  const isReports = currentPage === "reports";

  return (
    <header className="nav-shell">
      <div className="nav-left">
        <div className="nav-logo-mark">EA</div>
        <div className="nav-logo-text">
          <span className="nav-title">Ecom Analytics</span>
          <span className="nav-subtitle">Sales Intelligence</span>
        </div>
      </div>

      <div className="nav-right">
        <button
          className={`nav-chip ${isDashboard ? "nav-chip-active" : ""}`}
          onClick={() => onChangePage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={`nav-chip nav-chip-muted ${
            isDataEntry ? "nav-chip-active-muted" : ""
          }`}
          onClick={() => onChangePage("data")}
        >
          Data Entry
        </button>

        <button
          className={`nav-chip nav-chip-muted ${
            isReports ? "nav-chip-active-muted" : ""
          }`}
          onClick={() => onChangePage("reports")}
        >
          Reports
        </button>

        <div className="nav-divider" />

        <div className="nav-user">
          <div className="nav-user-info">
            <span className="nav-user-name">Admin</span>
            <span className="nav-user-role">Business Owner</span>
          </div>
          <div className="nav-avatar">A</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
