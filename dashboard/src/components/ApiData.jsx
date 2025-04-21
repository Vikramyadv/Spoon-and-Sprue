import React, { useEffect, useState } from "react";

function ApiData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const xAxisRes = await fetch(
          "https://a1p74wb9z6.execute-api.ap-south-1.amazonaws.com/default/finaliot_xaxis"
        );
        const xAxisData = await xAxisRes.json();
        const xAxisValues = xAxisData.body.split(",").map(Number);

        setData(xAxisValues);
      } catch (error) {
        console.error("Failed to fetch API data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="api-data">
      <h3>Fetched X-Axis Data</h3>
      <ul>
        {data.map((val, idx) => (
          <li key={idx}>X: {val}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApiData;
