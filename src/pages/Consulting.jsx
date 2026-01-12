import "./Consulting.css";
import React from "react";
import "./Consulting.css";
import { Link } from "react-router-dom";

const Consulting = () => {
  return (
    <div className="consulting consulting-page">
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            Strategic <span className="hero-highlight">Tech Advisory.</span>
          </h1>
          <p className="hero-description">
            Navigate the complexities of digital transformation with our senior
            consultants. From infrastructure procurement to CTO-as-a-Service.
          </p>
          <Link to="/connect" className="cta-button">
            Book Strategic Audit
          </Link>
        </div>
      </section>

      <section className="services-section">
        <div className="services-grid">
          <div className="service-card procurement-card">
            <h3 className="card-title">IT Procurement</h3>
            <p className="card-description">
              Leverage our global vendor relationships to source high-end
              hardware, software licenses, and cloud credits at institutional
              rates.
            </p>
            <ul className="feature-list">
              {[
                "Hardware Sourcing (Apple, Dell, Cisco)",
                "SaaS License Management",
                "Custom PC Builds for Labs",
                "Server Infrastructure",
              ].map((i) => (
                <li key={i} className="feature-item">
                  <div className="feature-dot"></div>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="service-card consulting-card">
            <h3 className="card-title">Strategic Consulting</h3>
            <p className="card-description">
              We help businesses modernize their tech debt, optimize cloud
              spending, and develop long-term digital roadmaps.
            </p>
            <ul className="feature-list">
              {[
                "Digital Roadmap Design",
                "Cloud Cost Optimization",
                "Fractional CTO Services",
                "Compliance & Security Audits",
              ].map((i) => (
                <li key={i} className="feature-item">
                  <div className="feature-dot"></div>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
