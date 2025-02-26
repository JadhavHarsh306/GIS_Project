import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top shadow" style={{ zIndex: 1030 }}>
      <div className="container-fluid">
        {/* Logo - Aligned to Left */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/images/gis.jpg"
            alt="Omdena logo"
            width="50"
            height="40"
            className="me-2"
          />
          <span className="fs-4 fw-bold text-primary">AIDEM</span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links - Moved to the Right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/aboutus" className="btn btn-light fw-semibold text-dark">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aiSolution" className="btn btn-light fw-semibold text-dark">
                AI SOLUTIONS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sources" className="btn btn-light fw-semibold text-dark">
                SOURCES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactUs" className="btn btn-primary ms-3">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
