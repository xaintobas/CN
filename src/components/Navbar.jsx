import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderLogo } from "../assets/Assets";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Normalize current path for active link highlighting
  const currentPage =
    location.pathname.split("/").filter(Boolean).join("/") || "";

  const navItems = [
    { label: "Home", page: "" }, // root
    { label: "About", page: "about" },
    { label: "Learn", page: "services/all-trainings" },
    { label: "Career", page: "career" },
    { label: "Connect", page: "connect" },
  ];

  // Check if current page is under services
  const isServiceActive = currentPage.startsWith("services");

  const handleNavigate = (page) => {
    navigate(`/${page}`);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo" onClick={() => handleNavigate("")}>
        <HeaderLogo />
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => handleNavigate(item.page)}
            className={`nav-link ${currentPage === item.page ? "active" : ""}`}
          >
            {item.label}
          </button>
        ))}

        {/* Services Dropdown */}
        <div
          className="dropdown-wrapper"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button
            onClick={() => handleNavigate("/#")}
            className={`nav-link dropdown-trigger ${
              isServiceActive ? "active" : ""
            }`}
          >
            Services
            <svg
              className={`dropdown-arrow ${isServicesOpen ? "rotated" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isServicesOpen && (
            <div className="dropdown-content">
              <div className="dropdown-grid">
                <DropdownItem
                  onClick={() => handleNavigate("services/all-trainings")}
                  label="Training"
                  active={currentPage === "services/all-trainings"}
                />
                <DropdownItem
                  onClick={() => handleNavigate("services/it-support")}
                  label="IT Support"
                  active={currentPage === "services/it-support"}
                />
                <DropdownItem
                  onClick={() => handleNavigate("services/tech-solutions")}
                  label="Tech Solutions"
                  active={currentPage === "services/tech-solutions"}
                />
                <DropdownItem
                  onClick={() => handleNavigate("services/corporate-training")}
                  label="Corporate Training"
                  active={currentPage === "services/corporate-training"}
                />
                <DropdownItem
                  onClick={() =>
                    handleNavigate("services/consulting-and-procurement")
                  }
                  label="Consulting & Procurement"
                  active={currentPage === "services/consulting-and-procurement"}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Actions + Mobile Toggle */}
      <div className="navbar-actions">
        <button className="btn-primary">Enroll Now</button>
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="icon-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-content">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`mobile-nav-link ${
                  currentPage === item.page ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="mobile-services-section">
              <p className="mobile-section-title">Our Services</p>
              <button
                onClick={() => handleNavigate("services/it-support")}
                className={`mobile-sub-link ${
                  currentPage === "services/it-support" ? "active" : ""
                }`}
              >
                IT Support
              </button>
              <button
                onClick={() => handleNavigate("services/tech-solutions")}
                className={`mobile-sub-link ${
                  currentPage === "services/tech-solutions" ? "active" : ""
                }`}
              >
                Tech Solutions
              </button>
              <button
                onClick={() => handleNavigate("services/corporate-training")}
                className={`mobile-sub-link ${
                  currentPage === "services/corporate-training" ? "active" : ""
                }`}
              >
                Corporate Training
              </button>
              <button
                onClick={() =>
                  handleNavigate("services/consulting-and-procurement")
                }
                className={`mobile-sub-link ${
                  currentPage === "services/consulting-and-procurement"
                    ? "active"
                    : ""
                }`}
              >
                Consulting
              </button>
            </div>

            <button className="btn-mobile-primary">Enroll Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const DropdownItem = ({ label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`dropdown-item ${active ? "active" : ""}`}
  >
    {label}
  </button>
);

export default Navbar;
