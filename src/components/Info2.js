import React from "react";
import ProjectInfo from "./ProjectInfo";
import Footer from "./Footer";

const Info2 = () => {
  return (
    <>
        <br/>
      <div className="container mt-4">
        <div
          className="bg-white p-4 p-md-5"
          style={{ maxWidth: "1000px", border: "none" }}
        >
          {/* Title */}
          <h1 className="fs-4 fw-bold text-primary mb-3">
            Data Collection and Integration
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
            }}
          >
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
          
            <source src="/videos/datacollection.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
          <br/>
          {/* Updated Disaster Monitoring Section */}
          <p className="text-secondary">
            Data collection and integration in disaster monitoring involve
            gathering real-time and historical data from various sources and
            combining them to improve disaster preparedness, response, and
            recovery. Here’s an overview of key aspects:
          </p>

          <h5 className="fw-bold text-primary">1. Data Collection Sources</h5>
          <ul className="text-muted">
            <li>
              <strong>Remote Sensing:</strong> Satellites (e.g., Sentinel,
              Landsat, MODIS) and UAVs/drones provide imagery for detecting
              changes in land cover, temperature, and flood extent.
            </li>
            <li>
              <strong>Geospatial Data:</strong> GIS-based layers like
              topography, land use, infrastructure, and population distribution.
            </li>
            <li>
              <strong>Sensor Networks:</strong> Weather stations, seismic
              sensors, river gauge stations, and IoT-based sensors provide
              real-time monitoring.
            </li>
            <li>
              <strong>Crowdsourced Data:</strong> Social media, mobile apps, and
              citizen reports can provide on-ground insights.
            </li>
            <li>
              <strong>Government & NGO Reports:</strong> Disaster management
              agencies provide official records, early warning alerts, and
              damage assessment reports.
            </li>
          </ul>

          <h5 className="fw-bold text-primary">2. Data Integration Techniques</h5>
          <ul className="text-muted">
            <li>
              <strong>GIS-Based Integration:</strong> Combining multiple data
              layers (e.g., flood extent + population density) for impact
              analysis.
            </li>
            <li>
              <strong>Big Data Analytics:</strong> Using AI/ML to analyze large
              datasets from multiple sources for real-time predictions.
            </li>
            <li>
              <strong>Interoperability Standards:</strong> Using OGC standards
              (WMS, WFS, GeoJSON) to integrate data from different platforms.
            </li>
            <li>
              <strong>Cloud Computing:</strong> Platforms like Google Earth
              Engine, AWS, and Copernicus Data Hub enable large-scale
              processing.
            </li>
          </ul>

          <h5 className="fw-bold text-primary">3. Applications in Disaster Monitoring</h5>
          <ul className="text-muted">
            <li>
              <strong>Early Warning Systems:</strong> Integrating satellite
              data, weather forecasts, and sensor readings for flood, cyclone,
              and wildfire alerts.
            </li>
            <li>
              <strong>Risk Assessment Mapping:</strong> Combining historical
              disaster records with geospatial data to identify high-risk zones.
            </li>
            <li>
              <strong>Damage Assessment:</strong> Post-disaster satellite
              imagery and UAV surveys help in relief planning.
            </li>
            <li>
              <strong>Real-Time Decision Support:</strong> Dashboards
              integrating multiple data sources help authorities in rapid
              response.
            </li>
          </ul>
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

export default Info2;
