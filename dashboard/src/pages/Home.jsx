import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Home.css"; // Create this file for styling
import { Button } from "@mui/material";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Inceptor</h1>
      <p className="home-description">
        Revolutionizing molten metal pouring with precision and automation.
      </p>
      <Button className="monitoring-button" onClick={handleClick}>
        Go to Inceptor Dashboard
      </Button>
    </div>
  );
}

export default Home;
