import React from "react";
import ProjectInfo from "./ProjectInfo";
import Footer from "./Footer";

const Info3 = () => {
  return (
    <>
        <br/>
      <div className="container mt-4">
        <div
          className="bg-white p-4 p-md-5 rounded"
          style={{ maxWidth: "1000px", border: "none" }}
        >
          {/* Title */}
          <h1 className="fs-4 fw-bold text-primary mb-3">
            Real-Time Monitoring and Decision Support
          </h1>

          {/* Project Status */}
          <p className="text-success fw-semibold mb-3">
            <i className="fas fa-check-circle"></i> Science Day Project 2025
          </p>

          <div
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}>

          {/* Animated Video */}
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              display: "block",
              borderRadius: "10px",
              animation: "fadeIn 1.5s ease-in-out, zoomIn 10s infinite alternate",
            }}
          >
            <source src="/videos/realtime.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            </div>
            <br/>
          {/* Content */}
          <p className="text-secondary">
            Our system is designed to monitor, track, and analyze disaster-related parameters in real 
            time, ensuring accurate early warnings and timely response. Using a combination of IoT 
            sensors, a mobile rover, and AI-driven analytics, we provide a 24/7 live data stream for 
            disaster risk assessment.
          </p>

          <h5 className="fw-bold text-primary">How Our Real-Time Monitoring Works</h5>

          {/* IoT Sensor Network */}
          <h6 className="fw-semibold text-dark mt-3">IoT Sensor Network</h6>
          <ul className="text-muted">
            <li>Deploys sensors for soil moisture, temperature, precipitation, wind speed, and air pressure.</li>
            <li>Continuously collects environmental data from multiple locations, ensuring high accuracy.</li>
          </ul>

          {/* Mobile Rover */}
          <h6 className="fw-semibold text-dark mt-3">Mobile Rover for Dynamic Monitoring</h6>
          <ul className="text-muted">
            <li>A sensor-equipped rover moves through disaster-prone areas, collecting localized data.</li>
            <li>Covers areas where static sensors might not provide sufficient coverage.</li>
          </ul>

          {/* Real-Time Data Transmission */}
          <h6 className="fw-semibold text-dark mt-3">Real-Time Data Transmission & Processing</h6>
          <ul className="text-muted">
            <li>Live data is transmitted to a central processing unit via wireless communication (IoT, cloud, or edge computing).</li>
            <li>The system instantly processes and analyzes sensor readings, checking for anomalies.</li>
          </ul>

          {/* Geospatial Mapping */}
          <h6 className="fw-semibold text-dark mt-3">Geospatial Mapping & Visualization</h6>
          <ul className="text-muted">
            <li>GIS integration allows real-time map updates of at-risk areas.</li>
            <li>Heatmaps and risk assessment layers provide a visual representation of disaster threats.</li>
          </ul>

          {/* Smart Alerts */}
          <h6 className="fw-semibold text-dark mt-3">Smart Alerts & Early Warnings</h6>
          <ul className="text-muted">
            <li><strong>Automated Alerts:</strong> Notifies authorities and the public when risk levels exceed safe thresholds.</li>
            <li><strong>Multi-Channel Warnings:</strong> Alerts sent via SMS, emails, sirens, or emergency dashboards.</li>
            <li><strong>Data Trends & Forecasting:</strong> Uses historical and real-time data to predict worsening conditions.</li>
          </ul>

          {/* Importance of Continuous Monitoring */}
          <h5 className="fw-bold text-primary mt-4">Why Continuous Monitoring Matters?</h5>
          <ul className="text-muted">
            <li><strong>Immediate Threat Detection –</strong> No delay in identifying potential disasters.</li>
            <li><strong>Improved Decision-Making –</strong> Authorities receive up-to-date insights.</li>
            <li><strong>Faster Response Time –</strong> Allows early evacuations and damage control.</li>
            <li><strong>Scalable for Any Disaster –</strong> Can monitor landslides, floods, earthquakes, and more.</li>
          </ul>

          <p className="text-secondary">
            By integrating real-time data acquisition with advanced analytics and automated alerts, 
            our system provides a robust, proactive approach to disaster management, ensuring better 
            preparedness and mitigation strategies.
          </p>
        </div>
      </div>
      <ProjectInfo />
      <Footer></Footer>

      {/* Video Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes zoomIn {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.05);
            }
          }
        `}
      </style>
    </>
  );
};

export default Info3;
