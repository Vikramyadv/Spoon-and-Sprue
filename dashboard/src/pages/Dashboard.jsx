import React, { useEffect, useState, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import ApiData from "./ApiData";
import "./DashboardPage.css";

function DashboardPage() {
  const pouringStartCoordinates = { x: 50, y: 50, z: 0 };

  const [coordinates, setCoordinates] = useState({ x: 0, y: 50, z: 0 });
  const [lidarData, setLidarData] = useState(0);
  const [irData, setIrData] = useState(0);
  const [temperature, setTemperature] = useState(1500);
  const [alertMessage, setAlertMessage] = useState("");
  const [isAligned, setIsAligned] = useState(false);
  const [apiXaxisData, setApiXaxisData] = useState([]);
  const [apiTempData, setApiTempData] = useState([]);

  const xAxisIndex = useRef(0);
  const tempIndex = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const xAxisRes = await fetch(
          "https://a1p74wb9z6.execute-api.ap-south-1.amazonaws.com/default/finaliot_xaxis"
        );
        const xAxisData = await xAxisRes.json();
        const tempRes = await fetch(
          "https://a1p74wb9z6.execute-api.ap-south-1.amazonaws.com/default/finaliot_temp"
        );
        const tempData = await tempRes.json();

        const tempApiXaxisData = xAxisData.body.split(",").map(Number);
        const tempApiTempData = tempData.body.split(",").map(Number);

        setApiXaxisData(tempApiXaxisData);
        setApiTempData(tempApiTempData);

        if (tempApiXaxisData.length > 0) {
          setCoordinates((prev) => ({
            ...prev,
            x: tempApiXaxisData[xAxisIndex.current % tempApiXaxisData.length],
          }));
          xAxisIndex.current =
            (xAxisIndex.current + 1) % tempApiXaxisData.length;
        }

        if (tempApiTempData.length > 0) {
          setTemperature(
            tempApiTempData[tempIndex.current % tempApiTempData.length]
          );
          tempIndex.current = (tempIndex.current + 1) % tempApiTempData.length;
        }
      } catch (error) {
        console.error("API fetch error:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      const newX = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

      setCoordinates((prev) => ({
        ...prev,
        x: newX,
      }));

      setLidarData(Math.random() * 100);
      setIrData(Math.random() * 100);
      setTemperature(Math.floor(Math.random() * (1700 - 1500 + 1)) + 1500);

      const aligned =
        Math.abs(newX - pouringStartCoordinates.x) < 5 &&
        Math.abs(coordinates.y - pouringStartCoordinates.y) < 5;
      setIsAligned(aligned);

      if (newX < 10 || coordinates.y < 10) {
        setAlertMessage("The alignment is not right");
      } else {
        setAlertMessage("Alignment in progress");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>

      <div className="alignment-indicator-container">
        <h3>Alignment Status</h3>
        <div
          className={`alignment-indicator ${
            isAligned ? "aligned" : "misaligned"
          }`}
        >
          {isAligned ? "Aligned" : "Not Aligned"}
        </div>
      </div>

      <div className="sensor-data">
        <div className="coordinate">
          <h3>Coordinates</h3>
          <p>X: {coordinates.x.toFixed(2)}</p>
          <p>Y: {coordinates.y.toFixed(2)}</p>
          <p>Z: {coordinates.z.toFixed(2)}</p>
        </div>

        <div className="lidar">
          <h3>LIDAR (Distance)</h3>
          <p>{lidarData.toFixed(2)} cm</p>
        </div>

        <div className="ir">
          <h3>IR Sensor</h3>
          <p>{irData.toFixed(2)}</p>
        </div>

        <div className="temperature">
          <h3>Temperature</h3>
          <p>{temperature} °C</p>
        </div>
      </div>

      <div className="alert-message">
        <h3>Status</h3>
        <p>{alertMessage}</p>
      </div>

      <ApiData />
    </div>
  );
}

export default DashboardPage;
