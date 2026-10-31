
import { useState } from "react";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: "⌂" },
    { name: "Medicines", icon: "💊" },
    { name: "Categories", icon: "▦" },
    { name: "Orders", icon: "🛒" },
    { name: "Customers", icon: "👥" },
    { name: "Suppliers", icon: "🚚" },
    { name: "Employees", icon: "👤" },
    { name: "Reports", icon: "📊" },
    { name: "Settings", icon: "⚙" },
  ];

  const statistics = [
    {
      title: "Total Medicines",
      value: "1,248",
      change: "+12%",
      icon: "💊",
      color: "cyan",
    },
    {
      title: "Categories",
      value: "28",
      change: "+3",
      icon: "▦",
      color: "green",
    },
    {
      title: "Total Customers",
      value: "856",
      change: "+8%",
      icon: "👥",
      color: "purple",
    },
    {
      title: "Total Suppliers",
      value: "45",
      change: "+5%",
      icon: "🚚",
      color: "orange",
    },
    {
      title: "Total Orders",
      value: "312",
      change: "+15%",
      icon: "🛒",
      color: "blue",
    },
    {
      title: "Total Sales",
      value: "₹2,48,750",
      change: "+18%",
      icon: "₹",
      color: "teal",
    },
  ];

  const orders = [
    ["ORD-00125", "Rohit Sharma", "30 Oct 2026", "₹1,250", "Delivered"],
    ["ORD-00124", "Priya Patel", "30 Oct 2026", "₹980", "Processing"],
    ["ORD-00123", "Amit Kumar", "29 Oct 2026", "₹2,340", "Shipped"],
    ["ORD-00122", "Sneha Joshi", "29 Oct 2026", "₹760", "Delivered"],
    ["ORD-00121", "Vikram Singh", "28 Oct 2026", "₹1,560", "Processing"],
  ];

  const lowStock = [
    ["Paracetamol 500mg", "12"],
    ["Amoxicillin 250mg", "8"],
    ["Vitamin D3", "5"],
    ["Metformin 500mg", "15"],
    ["Cough Syrup", "20"],
  ];

  const expiredMedicines = [
    ["Azithromycin 250mg", "15 Oct 2026"],
    ["Cefixime 200mg", "18 Oct 2026"],
    ["Vitamin B12", "20 Oct 2026"],
    ["Ibuprofen 400mg", "22 Oct 2026"],
    ["Ranitidine 150mg", "25 Oct 2026"],
  ];

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
                  {[10, 28, 42, 56, 40, 61, 85].map(
                    (height, index) => (
                      <div className="chart-point" key={index}>
                        <div style={{ height: `${height}%` }} />
                      </div>
                    )
                  )}
                </div>

                <div className="chart-dates">
                  {["24", "25", "26", "27", "28", "29", "30"].map(
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
                  <strong>₹2,48,750</strong>
                  <small>Total Sales</small>
                </div>
              </div>

              <div className="category-list">
                {[
                  ["Pain Relief", "28%", "cyan-dot"],
                  ["Antibiotics", "22%", "blue-dot"],
                  ["Vitamins", "15%", "orange-dot"],
                  ["Diabetes Care", "12%", "yellow-dot"],
                  ["Skin Care", "8%", "purple-dot"],
                  ["Others", "15%", "green-dot"],
                ].map(([name, value, color]) => (
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

      </main>
    </div>
  );
}

export default AdminDashboard;
