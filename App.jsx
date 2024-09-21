import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Dashboard from "./Dashboard";
import Index from "./index";
import { Helmet } from 'react-helmet';
function App() {
  const userRole = "student";

  return (
    <div>
      <Helmet>
        <title>OpusLabApp</title> 
      </Helmet>
    <Router>
      <Routes>
        {/* Rediriger la racine vers la page de connexion */}
        <Route path="/" element={<Index />} />  // Page d'accueil
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard userRole={userRole} />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
