import React, { useState } from "react";
import "./Styles/AboutUs.css";

function AboutUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here handle form submission logic
    alert("Form submitted: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="about-us-container">
      <h2 className="about-us-title">About Us</h2>
      <div className="about-us-content">
        <p>
          At <span className="about-us-highlight">Inceptor</span>, we are
          dedicated to revolutionizing the foundry industry by providing an
          automated solution to eliminate defects in the pouring process. Our
          system ensures precise alignment and accurate pouring, which leads to
          a significant reduction in errors and improvements in quality.
        </p>
        <p>
          Inceptor aims to improve the efficiency and safety of molten metal
          handling by minimizing human involvement in high-risk tasks. Our
          solution increases productivity while ensuring high standards of
          quality and consistency.
        </p>
        <p>
          With Inceptor, foundries can eliminate the risk of misalignment,
          reduce manual labor, and ensure smoother, safer, and more efficient
          operations.
        </p>
      </div>

      <div className="contact-form">
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AboutUs;
