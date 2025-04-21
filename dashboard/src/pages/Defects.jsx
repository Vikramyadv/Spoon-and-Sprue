import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const defectsData = [
  { month: "Jan", WithoutInceptor: 14, WithInceptor: 4 },
  { month: "Feb", WithoutInceptor: 15, WithInceptor: 3 },
  { month: "Mar", WithoutInceptor: 13, WithInceptor: 2 },
  { month: "Apr", WithoutInceptor: 16, WithInceptor: 1 },
  { month: "May", WithoutInceptor: 12, WithInceptor: 1 },
];

function Defects() {
  return (
    <div
      style={{ padding: "2rem", backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "1rem" }}>
        Defect Rate Reduction with Inceptor
      </h2>
      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
          color: "#555",
        }}
      >
        In traditional foundries, misalignment between the ladle and sprue
        causes molten metal spillage and defects. <strong>Inceptor</strong>{" "}
        eliminates misalignment through automated precision, significantly
        reducing defects and improving casting quality.
      </p>

      <div style={{ marginTop: "3rem" }}>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={defectsData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorWith" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorWithout" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f44336" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f44336" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="WithInceptor"
              stroke="#4CAF50"
              fillOpacity={1}
              fill="url(#colorWith)"
              name="Defects (With Inceptor)"
            />
            <Area
              type="monotone"
              dataKey="WithoutInceptor"
              stroke="#f44336"
              fillOpacity={1}
              fill="url(#colorWithout)"
              name="Defects (Without Inceptor)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <h3 style={{ color: "#4CAF50" }}>📉 Impact</h3>
        <p style={{ color: "#444", maxWidth: "700px", margin: "0 auto" }}>
          Foundries using <strong>Inceptor</strong> report up to an{" "}
          <strong>80% reduction in casting defects</strong>, with increased
          production reliability, safety, and efficiency.
        </p>
      </div>
    </div>
  );
}

export default Defects;
