
// Sidebar Menu Items
export const menuItems = [
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

// Dashboard Statistics
export const statistics = [
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
    change: "+5",
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

// Recent Orders
export const orders = [
  ["ORD-00125", "Rohit Sharma", "30 Oct 2026", "₹1,250", "Delivered"],
  ["ORD-00124", "Priya Patel", "30 Oct 2026", "₹980", "Processing"],
  ["ORD-00123", "Amit Kumar", "29 Oct 2026", "₹2,340", "Shipped"],
  ["ORD-00122", "Sneha Joshi", "29 Oct 2026", "₹760", "Delivered"],
  ["ORD-00121", "Vikram Singh", "28 Oct 2026", "₹1,560", "Processing"],
];

// Low Stock Medicines
export const lowStock = [
  ["Paracetamol 500mg", "12"],
  ["Amoxicillin 250mg", "8"],
  ["Vitamin D3", "5"],
  ["Metformin 500mg", "15"],
  ["Cough Syrup", "20"],
];

// Expired Medicines
export const expiredMedicines = [
  ["Azithromycin 250mg", "15 Oct 2026"],
  ["Cefixime 200mg", "18 Oct 2026"],
  ["Vitamin B12", "20 Oct 2026"],
  ["Ibuprofen 400mg", "22 Oct 2026"],
  ["Ranitidine 150mg", "25 Oct 2026"],
];

// Sales Chart Data
export const salesChartHeights = [10, 28, 42, 56, 40, 61, 85];

export const salesChartDates = [
  "24", "25", "26", "27", "28", "29", "30"
];

// Sales by Category
export const categorySales = [
  ["Pain Relief", "28%", "cyan-dot"],
  ["Antibiotics", "22%", "blue-dot"],
  ["Vitamins", "15%", "orange-dot"],
  ["Diabetes Care", "12%", "yellow-dot"],
  ["Skin Care", "8%", "purple-dot"],
  ["Others", "15%", "green-dot"],
];

export const totalSales = "₹2,48,750";
