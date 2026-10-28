import { Routes, Route, Navigate } from "react-router-dom";

import Registration from "./pages/registration";
import Login from "./pages/login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
}

export default App;
