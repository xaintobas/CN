import "./TechSolutions.css";
import React from "react";
import { Link } from "react-router-dom";

const TechSolutions = () => {
  return (
    <div className="tech-solutions tech-solutions-wrapper">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-heading">
              We Build <br />
              <span className="highlight-text">What Matters.</span>
            </h1>
            <p className="hero-description">
              From MVP development to enterprise-scale systems, our engineering
              team turns your complex business challenges into sleek digital
              products.
            </p>
            <div className="stats-row">
              <div>
                <p className="stat-number">120+</p>
                <p className="stat-label">Projects Shipped</p>
              </div>
              <div className="stat-divider"></div>
              <div>
                <p className="stat-number">15+</p>
                <p className="stat-label">Proprietary Assets</p>
              </div>
            </div>
            <Link to={"/connect"} className="cta-button">
              Discuss Your Project
            </Link>
          </div>
          <div className="hero-visual">
            <div className="image-frame">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop"
                className="hero-image"
                alt="Coding"
              />
            </div>
            <div className="floating-badge">
              <div className="badge-content">
                <div className="status-dot"></div>
                <span className="badge-text">Live API Integrated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="features-heading">Our Engineering Expertise</h2>
          </div>
          <div className="features-grid">
            {[
              {
                t: "Custom Software",
                d: "Bespoke web and mobile applications designed for high user engagement and scalability.",
                icon: "🏗️",
              },
              {
                t: "AI & Machine Learning",
                d: "Integrating intelligent models to automate workflows and predictive analytics.",
                icon: "🤖",
              },
              {
                t: "DevOps & Automation",
                d: "Streamlining deployment pipelines to ship features 10x faster with zero downtime.",
                icon: "⚙️",
              },
            ].map((e, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{e.icon}</div>
                <h4 className="feature-title">{e.t}</h4>
                <p className="feature-description">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechSolutions;
