import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <Container>
        <Row className="align-items-center">
          {/* Logo & Title */}
          <Col md={6} className="d-flex align-items-center mb-4 mb-md-0">
            <img
              src="/images/gis.jpg"
              alt="AIDEM logo"
              width="50"
              height="50"
              className="me-3"
            />
            <h1 className="h3 fw-bold">AIDEM</h1>
          </Col>

          {/* Location */}
          <Col md={6} className="text-md-end mb-4 mb-md-0">
            <h3 className="text-info">LOCATION</h3>
            <p className="text-secondary m-0">
              <FaMapMarkerAlt className="me-2" />
              Savitribai Phule Pune University, Pune.<br/>
              Department of Geography.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-end mt-4">
          <Col md="auto">
            <h3 className="text-info">SOCIAL LINKS</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.linkedin.com/in/ai-dem-ab347b353/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-secondary text-decoration-none d-block">
                  <FaLinkedin className="me-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none d-block">
                  <FaFacebook className="me-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none d-block">
                  <FaTwitter className="me-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" className="text-secondary text-decoration-none d-block">
                  <FaInstagram className="me-2" />
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="text-center text-secondary mt-4">
          AIDEM | &copy; 2025 Copyright
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
