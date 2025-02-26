import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AiSolutions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const iotSolution = {
    title: "Internet of Things (IoT) 🌐",
    description:
      "IoT connects physical devices to the internet, enabling data collection and remote monitoring. It enhances disaster management, agriculture, and industrial automation.",
    img: "/images/iot.jpg",
  };

  const sensors = [
    {
      title: "Temperature Sensors 🌡️",
      description:
        "Measure environmental temperature and help in weather forecasting, disaster prediction, and smart agriculture applications.",
    },
    {
      title: "Water Level Sensors 🌊",
      description:
        "Monitor water levels in rivers, reservoirs, and tanks to prevent flooding and manage water resources efficiently.",
    },
    {
      title: "GPS Sensors 📍",
      description:
        "Provide real-time location tracking for vehicles, drones, and emergency response teams in disaster management.",
    },
    {
      title: "Soil Moisture Sensors 🌱",
      description:
        "Measure soil moisture levels to optimize irrigation and improve agricultural productivity.",
    },
  ];

  return (
    <div className="container mt-5">
      <br/><br/><br/>
      <h1 className="text-primary fw-bold text-center mb-5" data-aos="fade-down">
        AI-Driven IoT & Sensor Solutions
      </h1>

      {/* IoT Section (Centered) */}
      <div className="d-flex flex-column align-items-center text-center mb-5" data-aos="fade-up">
        <img src={iotSolution.img} className="rounded shadow-sm mb-3" alt={iotSolution.title} width="300" />
        <h3 className="text-primary fw-bold">{iotSolution.title}</h3>
        <p className="text-muted">{iotSolution.description}</p>
      </div>

      {/* Sensors Section (Row Format, Text Only) */}
      <div className="row">
        {sensors.map((sensor, index) => (
          <div key={index} className="col-md-6 mb-3" data-aos="fade-up" data-aos-delay={index * 100}>
            <h5 className="text-primary fw-bold">{sensor.title}</h5>
            <p className="text-muted">{sensor.description}</p>
          </div>
        ))}
      </div>

      {/* Redirect Button */}
      <div className="text-center mt-5 mb-5" data-aos="fade-up">
        <a 
          href="https://thingspeak.mathworks.com/channels/2855693/private_show" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary px-4 py-2 fw-bold"
        >
          Go to AI Dashboard 📊
        </a>
      </div>

      {/* Hover Effects */}
      <style>
        {`
          img {
            transition: transform 0.3s ease-in-out;
          }

          img:hover {
            transform: scale(1.1);
            box-shadow: 0px 4px 10px rgba(0, 123, 255, 0.3);
          }

          .btn-primary {
            transition: all 0.3s ease-in-out;
          }

          .btn-primary:hover {
            background-color: #0056b3;
            box-shadow: 0px 4px 10px rgba(0, 123, 255, 0.4);
          }
        `}
      </style>
    </div>
  );
};

export default AiSolutions;
