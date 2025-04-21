import React from "react";
import { NavLink } from "react-router-dom";
import {
  MonitorHeart as MonitorIcon,
  Insights as AnalyticsIcon,
  BugReport as DefectsIcon,
  HelpOutline as HelpIcon,
  Person as UserIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import "./DashboardLayout.css";

const menuItems = [
  { to: "/dashboard", label: "Real Time Monitoring", icon: <MonitorIcon /> },
  { to: "/dashboard/analytics", label: "Analytics", icon: <AnalyticsIcon /> },
  { to: "/dashboard/defects", label: "Defects", icon: <DefectsIcon /> },
  { to: "/dashboard/help", label: "Help", icon: <HelpIcon /> },
  { to: "/dashboard/profile", label: "User Profile", icon: <UserIcon /> },
  { to: "/dashboard/about", label: "About Us", icon: <InfoIcon /> },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `menu-item ${isActive ? "active" : ""}`
                }
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
