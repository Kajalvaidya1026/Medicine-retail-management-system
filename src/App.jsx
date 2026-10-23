
import Login from "./pages/login.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<registration />} />
    </Routes>
  );
}

export default App;
