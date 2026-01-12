import "./CorporateTraining.css";
import React from "react";
import "./CorporateTraining.css";
import { Link } from "react-router-dom";

const CorporateTraining = () => {
  const advantages = [
    {
      t: "Custom Curricula",
      d: "Training programs built specifically around your stack and company goals.",
    },
    {
      t: "Impact Reporting",
      d: "Granular tracking of student progress and skill acquisition.",
    },
    {
      t: "Flexible Formats",
      d: "Choose between on-site, remote-live, or asynchronous learning paths.",
    },
  ];

  return (
    <div className="corporate-training">
      <section className="section-hero">
        <div className="container hero-content">
          <span className="hero-label">Future-Proof Your Workforce</span>
          <h1 className="hero-headline">
            Scale Your Team's <br />
            <span className="text-highlight">Technical Edge.</span>
          </h1>
          <p className="hero-description">
            We partner with HR leaders to design custom tech curricula that
            bridge internal skill gaps and boost retention.
          </p>
          <div className="hero-actions">
            <Link to="/connect" className="btn-primary">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section-features">
        <div className="container features-grid">
          <div>
            <h2 className="section-title">The Corporate Advantage</h2>
            <div className="features-list">
              {advantages.map((adv, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-icon">{i + 1}</div>
                  <div>
                    <h4 className="feature-title">{adv.t}</h4>
                    <p className="feature-description">{adv.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-card stat-card-dark">
              <p className="stat-value">92%</p>
              <p className="stat-label">Completion Rate</p>
            </div>
            <div className="stat-card stat-card-brand">
              <p className="stat-value">40+</p>
              <p className="stat-label">Corporate Partners</p>
            </div>
            <div className="testimonial-card">
              <div>
                <p className="testimonial-source">Featured in Forbes Tech</p>
                <p className="testimonial-quote">
                  "The new standard for enterprise upskilling."
                </p>
              </div>
              <div className="testimonial-star">🌟</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateTraining;
