import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SignupForm from "./signup/signupForm.jsx";
import Layout from "./layout/layout.jsx";

import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout SignupFormf={SignupForm} />} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
  </BrowserRouter>
);
