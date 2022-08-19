import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./HOC/ProtectedRoute";
import { useEffect, useState } from "react";
import DetailPage from "./Pages/DetailPage";

function App() {
  const [login, setLogin] = useState("");

  useEffect(() => {
    const checkIfLogin = () => {
      const token = localStorage.getItem("myToken");
      if (!token) {
        setLogin(false);
      } else {
        setLogin(true);
      }
    };
    checkIfLogin();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLogin={setLogin} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={login}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detailpage/:id"
          element={
            <ProtectedRoute user={login}>
              <DetailPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
