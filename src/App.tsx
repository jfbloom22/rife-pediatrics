import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { OurTeamPage } from "./pages/OurTeam";
import { RegisterPage } from "./pages/Register";
import { FAQPage } from "./pages/FAQ";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/our-team" element={<OurTeamPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default App;
