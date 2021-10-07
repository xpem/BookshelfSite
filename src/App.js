import React from "react";
import "./assets/styles/global.css";
import { AuthProvider } from "./contexts/AuthContext";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <Routes></Routes>
    </AuthProvider>
  );
}

export default App;
