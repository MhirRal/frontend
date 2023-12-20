import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage";
import Welcome from "./components/welcome";
import "./design/styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/welcome" element={<Welcome />} />{" "}
          {/* Defined route for Welcome */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
