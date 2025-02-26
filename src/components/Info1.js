import React from "react";
import ProjectInfo from "./ProjectInfo";
import Footer from "./Footer";

const Info1 = () => {
  return (
    <>
    <br/>
      <div className="container mt-4">
        <div
          className="bg-white p-4 p-md-5"
          style={{
            maxWidth: "1000px",
            border: "none",
          }}
        >
          {/* Title */}
          <h1 className="fs-4 fw-bold text-primary mb-3">
            AI-Driven Disaster Monitoring and Early Warning System
          </h1>

          {/* Project Status */}
          <p className="text-success fw-semibold mb-3">
            <i className="fas fa-check-circle"></i> Science Day Project 2025
          </p>

          {/* Animated Video */}
          <div
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <video
              autoPlay
              loop
              muted
              style={{
                width: "100%",
                display: "block",
                animation: "fadeIn 1.5s ease-in-out, zoomIn 10s infinite alternate",
              }}
            >
              <source src="/videos/frontpage.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <br/>
          {/* Background of AI-Driven Disaster Monitoring */}
          <h2 className="fs-5 fw-bold text-primary mb-2">Background</h2>
          <p className="text-secondary">
            Disasters—whether natural (such as earthquakes, Landslide, or floods) or man-made (like industrial accidents 
            or pollution)—pose significant risks to human lives, infrastructure, and the environment. Over time, the ability 
            to predict, monitor, and respond to these events has dramatically improved, particularly with the advent of technology. 
            Early Warning Systems (EWS) have been crucial in reducing the loss of life and property by providing timely alerts 
            and information to mitigate disaster impacts.
          </p>

          <p className="text-secondary">
            Traditional EWS relied heavily on manual observation, simple prediction models, and slow data processing. However, 
            with rapid advancements in Artificial Intelligence (AI), machine learning, and big data analytics, AI-driven disaster 
            monitoring systems have transformed the landscape of disaster preparedness, early warning, and response.
          </p>
          <div className="mb-5">
        <h2 className="text-primary fw-bold">Robotics Technologies in Disaster Management 🤖</h2>

      
          <h4 className="text-dark fw-bold mt-4">A. Early Warning Systems</h4>
          <ul className="text-secondary">
            <li>AI-powered geospatial analysis processes satellite and drone imagery to detect anomalies (e.g., rising sea levels, fault line movements).</li>
            <li>IoT sensors and GPS-enabled robots track environmental changes in real time (e.g., temperature shifts, air pressure).</li>
            <li><strong>Example:</strong> Japan’s Earthquake Early Warning System (EEWS) combines seismic sensors, GIS mapping, and AI algorithms to issue real-time alerts.</li>
          </ul>


          <h4 className="text-dark fw-bold mt-4">B. Disaster Prediction & Risk Assessment</h4>
          <ul className="text-secondary">
            <li>Geoinformatics (GIS + Remote Sensing) provides historical disaster data for AI-based risk modeling.</li>
            <li>AI-driven machine learning predicts disaster-prone zones by analyzing past patterns (e.g., landslide risk maps).</li>
            <li><strong>Example:</strong> Google’s AI Flood Forecasting System uses hydrological modeling, remote sensing, and AI to predict flood risks.</li>
          </ul>
      

        
          <h4 className="text-dark fw-bold mt-4">C. Search and Rescue Operations</h4>
          <ul className="text-secondary">
            <li>Autonomous drones and ground robots navigate disaster-hit areas to locate survivors.</li>
            <li>AI-powered image recognition identifies trapped victims using thermal imaging and LiDAR scans.</li>
            <li><strong>Example:</strong> Swarm robotics (multiple AI-powered robots working together) is used in earthquake rescue missions.</li>
          </ul>
      

      
          <h4 className="text-dark fw-bold mt-4">D. Real-Time Disaster Monitoring and Damage Assessment</h4>
          <ul className="text-secondary">
            <li>Drones equipped with GIS-enabled cameras capture real-time imagery of affected areas.</li>
            <li>AI algorithms process data to assess damage and prioritize relief efforts.</li>
            <li><strong>Example:</strong> NASA’s Disaster Monitoring Program uses AI-driven satellite imagery and geospatial analytics for real-time damage assessment.</li>
          </ul>
    

        
          <h4 className="text-dark fw-bold mt-4">E. Smart Disaster Response & Relief Coordination</h4>
          <ul className="text-secondary">
            <li>AI-powered GIS maps help emergency responders allocate resources efficiently.</li>
            <li>Robots deliver medical aid and supplies in hazardous environments.</li>
            <li><strong>Example:</strong> UN’s Humanitarian Data Exchange (HDX) uses AI and geospatial data to coordinate disaster relief efforts.</li>
          </ul>
       
      </div>
        </div>
      </div>
      <ProjectInfo />
      <Footer></Footer>

      {/* Inline Animation Styles */}
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

export default Info1;
