import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    metric: "Alignment Time (sec)",
    Inceptor: 5,
    Traditional: 20,
  },
  {
    metric: "Misalignment Errors",
    Inceptor: 2,
    Traditional: 15,
  },
  {
    metric: "Material Waste (kg)",
    Inceptor: 1,
    Traditional: 7,
  },
];

function Analytics() {
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Inceptor vs Traditional Foundry Methods
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="metric" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Inceptor" fill="#4CAF50" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Traditional" fill="#f44336" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Analytics;
