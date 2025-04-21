import React, { useState, useEffect } from "react";
import "./Styles/RealTimeMonitoring.css";

function RealTimeMonitoring() {
  const [coordinates, setCoordinates] = useState({ x: 15.5, y: 22.3, z: 3.1 });
  const [lidarData, setLidarData] = useState(12.4);
  const [irData, setIrData] = useState(5.8);
  const [temperature, setTemperature] = useState(75);

  const pouringCoordinates = { x: 20.0, y: 25.0, z: 5.0 };

  const apiEndpoint =
    "https://hyixaftszh.execute-api.us-east-1.amazonaws.com/default/displayData";

  const [isAligned, setIsAligned] = useState(false);
  const [apiXaxisData, setApiXaxisData] = useState(null);
  const [apiTemperatureData, setApiTemperatureData] = useState(null);

  // Function to fetch data from the API and update coordinates and temperature
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        if (jsonData && Array.isArray(jsonData)) {
          // Assuming the API provides data in a structured manner
          let latestData = jsonData[jsonData.length - 1]; // Use the most recent data
          setApiXaxisData(latestData.axisX);
          setApiTemperatureData(latestData.temperature);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 3000); // Update every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="ladle-sprue-dashboard">
      <h1 className="dashboard-title">
        Ladle and Sprue Alignment System Dashboard
      </h1>
      <div className="sensor-data">
        <div className="coordinates">
          <h3>Real-time Coordinates</h3>
          <p>X: {coordinates.x}</p>
          <p>Y: {coordinates.y.toFixed(2)}</p>
          <p>Z: {coordinates.z.toFixed(2)}</p>
        </div>
        <div className="lidar">
          <h3>Distance</h3>
          <p>Distance: {lidarData !== null ? lidarData.toFixed(2) : "N/A"}</p>
        </div>
        <div className="ir">
          <h3>Lidar Value</h3>
          <p>Value: {irData !== null ? irData.toFixed(2) : "N/A"}</p>
        </div>
        <div className="temperature">
          <h3>Temperature</h3>
          <p>{temperature} °C</p>
        </div>
      </div>

      <div className="pouring-coordinates">
        <h3>Fixed Pouring Coordinates</h3>
        <p>X: {pouringCoordinates.x}</p>
        <p>Y: {pouringCoordinates.y}</p>
        <p>Z: {pouringCoordinates.z}</p>
      </div>

      <div className="api-data">
        <h3>API Data</h3>
        <div className="data-item">
          <p>
            <strong>X (From API):</strong>{" "}
            {apiXaxisData ? apiXaxisData : "Loading..."}
          </p>
        </div>
        <div className="data-item">
          <p>
            <strong>Temperature (From API):</strong>{" "}
            {apiTemperatureData ? apiTemperatureData : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RealTimeMonitoring;
