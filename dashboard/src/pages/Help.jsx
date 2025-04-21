import React, { useState } from "react";

const faqs = [
  {
    question: "What is Inceptor and how does it help foundries?",
    answer:
      "Inceptor is an intelligent ladle and sprue alignment system that uses computer vision, sensors, and actuators to automate and perfect the molten metal pouring process. It reduces misalignment, human error, and defects in castings.",
  },
  {
    question: "How does Inceptor detect the pouring position?",
    answer:
      "Inceptor uses a computer vision system to detect the X-coordinate of the ladle in real-time. It combines this with fixed Y and Z coordinates to determine the exact pouring point, ensuring precise alignment.",
  },
  {
    question: "What sensors are used in the system?",
    answer:
      "The system includes: Lidar to detect proximity to the pouring point, IR sensors to confirm ladle positioning, and temperature sensors to monitor molten metal temperature, ensuring consistent quality.",
  },
  {
    question: "Why is monitoring temperature important during pouring?",
    answer:
      "Temperature changes during pouring can lead to poor metal flow and structural defects. Inceptor continuously monitors temperature to ensure optimal conditions are maintained.",
  },
  {
    question: "How is the ladle moved and controlled?",
    answer:
      "Inceptor uses actuators to control ladle movement. Once the system detects that the ladle has reached the fixed pouring coordinate, the actuators stop, and pouring begins automatically.",
  },
  {
    question: "What happens after pouring is complete?",
    answer:
      "Once pouring is finished, Inceptor automatically moves the ladle forward using actuators, making the process continuous and efficient without manual intervention.",
  },
  {
    question: "Can Inceptor help reduce casting defects?",
    answer:
      "Absolutely. By ensuring perfect alignment and stable temperatures, Inceptor eliminates misalignment-related defects and enhances overall casting quality.",
  },
  {
    question: "Is manual adjustment still required?",
    answer:
      "No. Inceptor fully automates alignment and pouring, significantly reducing the need for manual monitoring and corrections.",
  },
  {
    question: "How does Inceptor improve safety in the foundry?",
    answer:
      "Inceptor minimizes human interaction with hot molten metal by automating pouring, which reduces the risk of burns, spills, and handling accidents.",
  },
  {
    question: "Is the system adaptable to different foundry setups?",
    answer:
      "Yes. Inceptor can be customized for various ladle sizes, pouring points, and foundry layouts, offering a scalable solution for small to large operations.",
  },
];

function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2
        style={{ textAlign: "center", marginBottom: "2rem", color: "#2e7d32" }}
      >
        Help & FAQs - Inceptor System
      </h2>
      {faqs.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1rem",
            borderBottom: "1px solid #ddd",
            paddingBottom: "1rem",
          }}
        >
          <h4
            onClick={() => toggle(index)}
            style={{
              cursor: "pointer",
              marginBottom: "0.5rem",
              color: "#1b5e20",
              fontWeight: openIndex === index ? "bold" : "normal",
              transition: "0.3s ease",
            }}
          >
            {index + 1}. {item.question}
          </h4>
          {openIndex === index && (
            <p style={{ color: "#444", marginLeft: "1rem" }}>{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Help;
