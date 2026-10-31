
import { useState } from "react";
import "../styles/AdminDashboard.css";
import Medicines from "./admin/Medicines";

import {
  menuItems,
  statistics,
  orders,
  lowStock,
  expiredMedicines,
  salesChartHeights,
  salesChartDates,
  categorySales,
  totalSales,
} from "../data/adminDashboardData";

function AdminDashboard() {
  const [activePage, setActivePage] = useState("Dashboard");

  
  return (
    <div className="admin-layout">

      {/* LEFT SIDEBAR */}
      <aside className="admin-sidebar">

        <div className="admin-brand">
          <div className="admin-logo">✚</div>
          <div>
            <h2>MEDICARE</h2>
            <p>Better Health • Brighter Tomorrow</p>
          </div>
        </div>

        <nav className="admin-navigation">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={
                activePage === item.name
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActivePage(item.name)}
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>© 2026 MEDICARE</p>
          <small>Medicine Retail Management System</small>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-main">

        {/* TOP HEADER */}
        <header className="admin-header">

          <input
            type="search"
            placeholder="Search medicine, customer, order..."
            className="admin-search"
          />

          <div className="admin-profile">
            <button className="notification-button">
              ♧ <span>3</span>
            </button>

            <span className="profile-avatar">👤</span>

            <div>
              <strong>Admin</strong>
              <small>Administrator</small>
            </div>

          </div>
        </header>
        {activePage === "Medicines" ? (
  <Medicines />
) : (
  <>

        {/* WELCOME BANNER */}
        <section className="welcome-banner">
          <div>
            <h1>Good Morning, Admin 👋</h1>
            <p>
              Here's what's happening with your medicine store today.
            </p>
          </div>

          <div className="banner-medicine">💊 🧴 ✚</div>
        </section>

        {/* DASHBOARD STATISTICS */}
        <section className="statistics-grid">

          {statistics.map((item) => (
            <div
              className={`stat-card ${item.color}`}
              key={item.title}
            >
              <div className="stat-heading">
                <span className="stat-icon">{item.icon}</span>
                <span>{item.title}</span>
              </div>

              <h2>{item.value}</h2>

              <p>↗ {item.change} from last month</p>
            </div>
          ))}

        </section>

        {/* SALES CHARTS */}
        <section className="charts-grid">

          <div className="dashboard-card sales-card">
            <div className="card-heading">
              <h2>Sales Overview</h2>
              <span>Last 7 Days</span>
            </div>

            <div className="sales-chart">
              <div className="chart-values">
                <span>50K</span>
                <span>40K</span>
                <span>30K</span>
                <span>20K</span>
                <span>10K</span>
                <span>0</span>
              </div>

              <div className="chart-area">
                <div className="chart-line">
                  {salesChartHeights.map(
                    (height, index) => (
                      <div className="chart-point" key={index}>
                        <div style={{ height: `${height}%` }} />
                      </div>
                    )
                  )}
                </div>

                <div className="chart-dates">
                  {salesChartDates.map(
                    (day) => <span key={day}>Oct {day}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-card category-card">
            <h2>Sales by Category</h2>

            <div className="category-content">
              <div className="donut-chart">
                <div>
                <strong>{totalSales}</strong>
                  <small>Total Sales</small>
                </div>
              </div>

              <div className="category-list">
                {categorySales.map(([name, value, color]) => (
                  <div key={name}>
                    <span className={color}></span>
                    {name}
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* TABLES */}
        <section className="tables-grid">

          {/* RECENT ORDERS */}
          <div className="dashboard-card table-card">
            <h2>Recent Orders</h2>

            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <tr key={order[0]}>
                      {order.map((value, index) => (
                        <td key={index}>
                          {index === 4 ? (
                            <span className={`order-status ${value.toLowerCase()}`}>
                              {value}
                            </span>
                          ) : value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* LOW STOCK */}
          <div className="dashboard-card table-card">
            <h2>⚠ Low Stock Alerts</h2>

            <table>
              <thead>
                <tr>
                  <th>Medicine Name</th>
                  <th>Stock</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {lowStock.map(([name, stock]) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>{stock}</td>
                    <td>
                      <span className="stock-status">Low Stock</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* EXPIRED MEDICINES */}
          <div className="dashboard-card table-card">
            <h2>⚠ Expired Medicines</h2>

            <table>
              <thead>
                <tr>
                  <th>Medicine Name</th>
                  <th>Expiry Date</th>
                </tr>
              </thead>

              <tbody>
                {expiredMedicines.map(([name, date]) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>
                      <span className="expired-status">{date}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </section>

        <footer className="dashboard-footer">
          MEDICARE © 2026 | Medicine Retail Management System
        </footer>
          </>
)}
      </main>
      
    </div>
  );
}

export default AdminDashboard;
