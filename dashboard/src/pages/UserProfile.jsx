import React, { useState } from "react";
import "./Styles/UserProfile.css";

function UserProfile() {
  const [user] = useState({
    fullName: "Vikram Singh",
    mobile: "+91-9876543210",
    email: "vikram@example.com",
    address: "123 Foundry Street, Lucknow, India",
    position: "Foundry Operations Manager",
  });

  const handleEditDetails = () => {
    alert("Edit details feature coming soon!");
  };

  const handleChangePassword = () => {
    alert("Password change feature coming soon!");
  };

  return (
    <div className="user-profile-container">
      <h2 className="user-profile-title">User Profile</h2>

      <div className="user-profile-field">
        <strong>Dashboard User Full Name:</strong>
        <p>{user.fullName}</p>
      </div>

      <div className="user-profile-field">
        <strong>Mobile No:</strong>
        <p>{user.mobile}</p>
      </div>

      <div className="user-profile-field">
        <strong>Email ID:</strong>
        <p>{user.email}</p>
      </div>

      <div className="user-profile-field">
        <strong>Address:</strong>
        <p>{user.address}</p>
      </div>

      <div className="user-profile-field">
        <strong>Position:</strong>
        <p>{user.position}</p>
      </div>

      <div className="user-profile-actions">
        <button
          className="user-profile-btn btn-password"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
        <button
          className="user-profile-btn btn-edit"
          onClick={handleEditDetails}
        >
          Edit Details
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
