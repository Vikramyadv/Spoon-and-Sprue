import React, { useState, useEffect } from "react";
import "./Styles/RealTimeMonitoring.css";
import ApiData from "../components/ApiData";

function RealTimeMonitoring() {
  const [coordinates, setCoordinates] = useState({ x: 15, y: 25, z: 5 });
  const [lidarData, setLidarData] = useState(12.4);
  const [irData, setIrData] = useState(5.8);
  const [temperature, setTemperature] = useState(75);
  const [pouringStarted, setPouringStarted] = useState(false);

  const pouringCoordinates = { x: 20, y: 25, z: 5 };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newAxisX = Math.floor(Math.random() * 11) + 10; // Random integer between 10 and 20
      const newTemperature = Math.floor(Math.random() * 41) + 60; // Random integer between 60 and 100
      const newLidarData = Math.random() * 5 + 10;
      const newIrData = Math.random() * 5 + 5;

      if (!pouringStarted) {
        setCoordinates({
          x: newAxisX,
          y: pouringCoordinates.y,
          z: pouringCoordinates.z,
        });
      }

      setTemperature(newTemperature);
      setLidarData(newLidarData);
      setIrData(newIrData);

      if (
        newAxisX === pouringCoordinates.x &&
        pouringCoordinates.y === coordinates.y &&
        pouringCoordinates.z === coordinates.z
      ) {
        setPouringStarted(true);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [coordinates.y, coordinates.z, pouringCoordinates]);

  return (
    <div className="ladle-sprue-dashboard">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <img src="/PourSyncLogo.png" alt="PourSync Logo" className="logo" />
        </header>
      </div>

      <h1 className="dashboard-title">PourSync System Dashboard</h1>

      <div className="sensor-data">
        <div className="coordinates">
          <h3>Real-time Coordinates</h3>
          <p>X: {coordinates.x}</p>
          <p>Y: {coordinates.y}</p>
          <p>Z: {coordinates.z}</p>
        </div>

        <div className="lidar">
          <h3>Distance</h3>
          <p>{lidarData !== null ? lidarData.toFixed(2) : "N/A"}</p>
        </div>

        <div className="ir">
          <h3>IR Sensor</h3>
          <p>{irData !== null ? irData.toFixed(2) : "N/A"}</p>
        </div>

        <div className="temperature">
          <h3>Temperature</h3>
          <p>{temperature} °C</p>
        </div>
      </div>

      <div className="pouring-coordinates">
        <h3>Pouring Coordinates</h3>
        <p>X: {pouringCoordinates.x}</p>
        <p>Y: {pouringCoordinates.y}</p>
        <p>Z: {pouringCoordinates.z}</p>
      </div>

      {pouringStarted ? (
        <div className="pouring-status">
          <p className="highlight">Pouring has started</p>
        </div>
      ) : (
        <div className="pouring-status">
          <p className="not-started">Pouring has not started</p>
        </div>
      )}

      <ApiData />
    </div>
  );
}

export default RealTimeMonitoring;
