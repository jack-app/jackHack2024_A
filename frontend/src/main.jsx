import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes.jsx";
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppRoutes />
    </AuthContextProvider>
  </React.StrictMode>
);
