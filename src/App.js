import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage";
import Welcome from "./components/welcome";
import SignUpForm from "./components/signup";
import SignInForm from "./components/signin";
import Admin from "./components/admin";
import AdminML from "./components/admin_ml";
import AdminVal from "./components/admin_val";
import UserML from "./components/user_ml";
import UserVal from "./components/user_val";
import "./design/styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          {/* Routes where the Navbar will be rendered */}
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/admin_ml/*" element={<AdminML />} />
          <Route path="/admin_val/*" element={<AdminVal />} />
          <Route path="/user_ml/*" element={<UserML />} />
          <Route path="/user_val/*" element={<UserVal />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
