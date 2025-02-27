import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const contacts = [
  {
    name: "Pratyush Pal",
    phone: "+91 9330502264",
    email: "palpratyush0@gmail.com",
  },
  {
    name: "Vinod More",
    phone: "+91 9324528454",
    email: "vinod84.more@gmail.com",
  },
  {
    name: "Tina Khatun",
    phone: "+91 8759525577",
    email: "tnakhtun.tk@gamil.com",
  },
  {
    name: "ANAND BABAJI AVHAD",
    phone: "+91 8849258861",
    email: "avhada25@gmail.com",
  },
];

const ContactUs = () => {
  return (
    <Container className="mt-5 pt-5 pb-5">
      <Card className="shadow-lg p-4">
        <h1 className="text-primary fw-bold text-center">Contact Us</h1>
        <p className="text-muted text-center">
          We would love to hear from you! Reach out through any of the following methods:
        </p>
        <Row className="mt-4">
          {contacts.map((contact, index) => (
            <Col md={6} key={index} className="mb-3">
              <Card className="p-3 shadow-sm">
                <div className="d-flex align-items-center">
                  <FaUser className="text-primary fs-3 me-3" />
                  <div>
                    <h5 className="fw-bold">{contact.name}</h5>
                    <div className="d-flex align-items-center">
                      <FaPhoneAlt className="text-primary me-2" />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaEnvelope className="text-primary me-2" />
                      <span>{contact.email}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </Container>
  );
};

export default ContactUs;
