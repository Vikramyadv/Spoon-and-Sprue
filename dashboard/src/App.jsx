import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";
import RealTimeMonitoring from "./pages/RealTimeMonitoring";
import Analytics from "./pages/Analytics";
import Defects from "./pages/Defects";
import Help from "./pages/Help";
import UserProfile from "./pages/UserProfile";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<RealTimeMonitoring />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="defects" element={<Defects />} />
          <Route path="help" element={<Help />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
