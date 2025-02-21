import Auth from "./utils/auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light"); // State variable for theme switch

  // useNavigate function to direct users to Movies page after successful sign up
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/Movies");
    }
  }, [navigate]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`page-container ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <main className="app-container container pt-5">
        <Outlet />
      </main>
      <Footer toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}

export default App;
