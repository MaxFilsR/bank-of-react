import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, useNavigate } from "react-router";
const basename = import.meta.env.MODE === "production" ? "/bank-of-react" : "/";

function RedirectHandler({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem("redirectPath");
    if (redirectPath) {
      sessionStorage.removeItem("redirectPath");
      // Remove the basename from the stored path before navigating
      navigate(redirectPath.replace(basename, ""));
    }
  }, [navigate]);

  return children;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <RedirectHandler>
        <App />
      </RedirectHandler>
    </BrowserRouter>
  </StrictMode>
);
