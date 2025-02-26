import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Sources = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const sources = [
    {
      text: "Indian Space Research Organisation (ISRO) 🚀",
      img: "/images/isro.png",
      link: "https://www.isro.gov.in/",
    },
    {
      text: "Indian Institute of Remote Sensing (IIRS) 🛰️",
      img: "/images/iirs.png",
      link: "https://www.iirs.gov.in/",
    },
    {
      text: "Geological Survey of India (GSI) 🌍",
      img: "/images/gsi.png",
      link: "https://www.gsi.gov.in/webcenter/portal/OCBIS",
    },
    {
      text: "National Aeronautics and Space Administration (NASA) 🚀",
      img: "/images/nasa.jpg",
      link: "https://www.nasa.gov/",
    },
    {
      text: "Food and Agriculture Organization (FAO) 🌾",
      img: "/images/fao.png",
      link: "https://www.fao.org/soils-portal/data-hub/soil-maps-and-databases/en/",
    },
    {
      text: "Alaska Satellite Facility (ASF) 🛰️",
      img: "/images/alsos.png",
      link: "https://www.earthdata.nasa.gov/data/projects/alos-palsar-rtc-project",
    },
    {
      text: "Open Government Data (OGD) 📊",
      img: "/images/ogd.jpg",
      link: "https://www.data.gov.in/",
    },
  ];

  return (
    <div className="container mt-5">
      <br /><br /><br />
      <h1 className="text-primary fw-bold text-center mb-5" data-aos="fade-down">
        Sources & References
      </h1>

      <div className="row justify-content-center">
        {sources.map((source, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Delayed effect
          >
            <div className="source-card p-3 rounded shadow-sm d-flex align-items-center">
              <img
                src={source.img}
                alt={source.text}
                className="source-img rounded-circle me-3"
              />
              <a
                href={source.link}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link text-dark fw-medium text-decoration-none"
              >
                {source.text}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .source-card {
            background: #ffffff;
            border-left: 5px solid #007bff;
            transition: all 0.4s ease-in-out;
          }

          .source-card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 0px 15px rgba(0, 120, 255, 0.5);
            border-left: 5px solid #0056b3;
          }

          .source-img {
            width: 60px;
            height: 60px;
            transition: transform 0.3s ease-in-out;
          }

          .source-card:hover .source-img {
            transform: scale(1.2);
            animation: pulse 1s infinite alternate;
          }

          @keyframes pulse {
            0% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }

          .source-link {
            position: relative;
            transition: color 0.3s ease-in-out;
          }

          .source-card:hover .source-link {
            color: #007bff;
          }

          .source-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 2px;
            background-color: #007bff;
            transition: width 0.3s ease-in-out;
          }

          .source-card:hover .source-link::after {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Sources;
