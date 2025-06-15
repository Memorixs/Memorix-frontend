import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SignupForm from "./signup/signupForm.jsx";
import Layout from "./layout/layout.jsx";
import SigninForm from "./signin/signinForm.jsx";
import RedirectPage from "./kakao/redirectPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout SignupFormf={SignupForm} />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/login/oauth2/code/kakao" element={<RedirectPage />} />
    </Routes>
  </BrowserRouter>
);
