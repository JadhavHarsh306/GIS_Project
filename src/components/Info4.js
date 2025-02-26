import React from "react";
import ProjectInfo from "./ProjectInfo";
import Footer from "./Footer";

const Info4 = () => {
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
            AI and Machine Learning Models
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
            <source src="/videos/aiml.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            </div><br/>
          {/* Content */}
          <p className="text-secondary">
            Our AI-driven disaster management system utilizes cutting-edge machine learning algorithms 
            to analyze real-time and historical data for accurate disaster predictions. By continuously 
            learning from environmental patterns, the system enhances early warning capabilities, 
            minimizing risks and improving disaster preparedness.
          </p>

          <h5 className="fw-bold text-primary">How Our AI Model Works</h5>

          {/* Data Ingestion & Processing */}
          <h6 className="fw-semibold text-dark mt-3">Data Ingestion & Processing</h6>
          <ul className="text-muted">
            <li>Collects real-time data from IoT sensors and a mobile rover monitoring soil moisture, temperature, precipitation, and wind speed.</li>
            <li>Integrates external data sources such as satellite imagery, weather forecasts, and historical disaster records.</li>
          </ul>

          {/* Machine Learning for Predictive Analytics */}
          <h6 className="fw-semibold text-dark mt-3">Machine Learning for Predictive Analytics</h6>
          <ul className="text-muted">
            <li>Uses supervised and unsupervised learning to identify patterns and trends in environmental conditions.</li>
            <li>Continuously trains models to improve accuracy and adaptability over time.</li>
          </ul>

          {/* Anomaly Detection & Risk Assessment */}
          <h6 className="fw-semibold text-dark mt-3">Anomaly Detection & Risk Assessment</h6>
          <ul className="text-muted">
            <li>AI models detect unusual changes in sensor readings and classify potential disaster threats.</li>
            <li>Implements threshold-based triggers to send alerts when conditions indicate an impending disaster.</li>
          </ul>

          {/* Real-Time Decision Support System */}
          <h6 className="fw-semibold text-dark mt-3">Real-Time Decision Support System</h6>
          <ul className="text-muted">
            <li>Provides visual risk assessment maps using GIS technology.</li>
            <li>Generates automated reports and alerts to notify authorities and emergency responders.</li>
          </ul>

          {/* Self-Learning & Model Improvement */}
          <h6 className="fw-semibold text-dark mt-3">Self-Learning & Model Improvement</h6>
          <ul className="text-muted">
            <li>The system refines its predictions using feedback loops and reinforcement learning.</li>
            <li>Reduces false alarms by adjusting models based on past events and outcomes.</li>
          </ul>

          {/* Importance of AI in Disaster Management */}
          <h5 className="fw-bold text-primary mt-4">Why AI Matters in Disaster Management?</h5>
          <ul className="text-muted">
            <li><strong>Faster and More Accurate Predictions</strong></li>
            <li><strong>Proactive Decision-Making</strong></li>
            <li><strong>Reduced Human Intervention & Errors</strong></li>
            <li><strong>Scalability for Multiple Disaster Types</strong></li>
          </ul>

          <p className="text-secondary">
            By combining AI-driven analytics with real-time data acquisition, our system revolutionizes 
            disaster risk management, ensuring efficient early warnings and proactive mitigation strategies.
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

export default Info4;
