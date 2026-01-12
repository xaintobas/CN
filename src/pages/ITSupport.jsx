import "./ITSupport.css";
import React from "react";
import "./ITSupport.css";

const ITSupport = () => {
  const stats = [
    { t: "24/7 Monitoring", d: "Global SOC operations." },
    { t: "99.9% Uptime", d: "Guaranteed by our SLA." },
    { t: "Cloud Security", d: "Enterprise-grade firewalls." },
    { t: "Disaster Recovery", d: "Automated daily backups." },
  ];

  return (
    <div className="it-support it-support-wrapper">
      <section className="hero-section">
        <div className="hero-decoration"></div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tagline">Enterprise Managed Services</span>
            <h1 className="hero-title">
              Zero Downtime. <br />
              <span className="text-highlight">Total Security.</span>
            </h1>
            <p className="hero-description">
              We provide round-the-clock proactive monitoring and technical
              support to ensure your business operations never miss a beat.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">
                Start 1-Month Free Trial
              </button>
              <button className="btn btn-secondary">View Service Plans</button>
            </div>
          </div>
          <div className="hero-visuals">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-icon">
                    <svg
                      className="icon-svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="stat-title">{s.t}</h4>
                  <p className="stat-desc">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <h2 className="features-heading">
            Your Dedicated Tech{" "}
            <span className="text-highlight">Support Force</span>
          </h2>
          <div className="features-list">
            <div className="feature-card">
              <div className="feature-emoji">🚑</div>
              <div className="feature-info">
                <h4 className="feature-title">Emergency Response</h4>
                <p className="feature-text">
                  Our Tier 3 engineers are on standby 24/7/365 to handle
                  critical infrastructure failures within 15 minutes.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-emoji">🔐</div>
              <div className="feature-info">
                <h4 className="feature-title">Cybersecurity Audit</h4>
                <p className="feature-text">
                  Regular vulnerability assessments and penetration testing to
                  keep your data safe from evolving threats.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-emoji">☁️</div>
              <div className="feature-info">
                <h4 className="feature-title">Cloud Infrastructure</h4>
                <p className="feature-text">
                  Full management of AWS, Azure, and GCP environments including
                  cost optimization and scaling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSupport;
