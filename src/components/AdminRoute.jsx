import { Navigate, Outlet } from "react-router-dom";

function AdminRoute() {
  const role = sessionStorage.getItem("role");

  if (role !== "ADMIN") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default AdminRoute;