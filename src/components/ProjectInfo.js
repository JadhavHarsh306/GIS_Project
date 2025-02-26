import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ProjectInfo = () => {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    const footer = document.querySelector("footer");
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <div
      className="p-3 project-info-box"
      data-aos="fade-right"
      style={{
        position: "fixed",
        right: "20px",
        bottom: footerVisible ? "600px" : "150px",
        zIndex: "1000",
        transition: "bottom 0.4s ease-in-out",
        animation: "slideIn 1s ease-in-out, bounceEffect 2s infinite",
      }}
    >
      <div
        className="bg-white p-4 rounded shadow project-container"
        style={{ maxWidth: "350px" }}
      >
        <h2 className="fs-5 fw-semibold text-dark mb-3" data-aos="fade-up">
          Objectives
        </h2>

        {[
          {
            to: "/objectives/dataCollections",
            text: "Data Collection and Integration",
            img: "/images/Data.jpg",
          },
          {
            to: "/objectives/realTimeMonitoring",
            text: "Real-Time Monitoring and Decision Support",
            img: "/images/real.jpg",
          },
          {
            to: "/objectives/artificalIntelligence",
            text: "AI and Machine Learning Models",
            img: "/images/ai.jpg",
          },
        ].map((project, index) => (
          <Link
            key={index}
            to={project.to}
            className="d-flex align-items-center text-decoration-none p-2 mb-2 rounded project-link"
            style={{
              backgroundColor: "#f8f9fa",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "all 0.4s ease-in-out",
              animation: `fadeIn 1s ease-in-out ${index * 0.3}s both`,
            }}
          >
            <img
              alt={project.text}
              className="rounded me-3 project-img"
              src={project.img}
              width="60"
              height="60"
            />
            <span className="text-dark fw-medium">{project.text}</span>
          </Link>
        ))}
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes bounceEffect {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .project-link:hover {
            background-color: #e9ecef !important;
            transform: scale(1.05);
            box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15);
          }

          .project-img {
            transition: transform 0.3s ease-in-out;
          }

          .project-link:hover .project-img {
            transform: scale(1.1);
          }

          .project-container:hover {
            animation: bounceEffect 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectInfo;
