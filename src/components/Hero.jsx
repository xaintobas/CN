import React from "react";
import "./Hero.css";
const Hero = ({ onOpenAdvisor }) => {
  return (
    <section className="hero-section">
      {/* Background patterns */}
      <div className="hero-bg-pattern"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">Code Nation Academy</span>
          <h1 className="hero-title">
            Don't Just Learn.{" "}
            <span className="text-highlight">Transform Your Life.</span>
          </h1>
          <p className="hero-description">
            We bridge the gap between curiosity and professional mastery. Join
            500+ graduates who replaced uncertainty with high-paying tech
            careers.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              Enroll Now
              <svg
                className="icon-sm"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button className="btn-secondary">Get Career Advice</button>
          </div>

          <div className="social-proof">
            <div className="avatar-group">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/${i + 20}/100/100`}
                  className="avatar-img"
                  alt="Student"
                />
              ))}
            </div>
            <p className="proof-text">
              Join <span className="proof-highlight">500+</span> successful
              alumni worldwide
            </p>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
              className="hero-main-img"
              alt="Students working together"
            />
            <div className="hero-image-overlay"></div>

            {/* Dynamic Overlay Card */}
            <div className="success-card">
              <div className="success-card-header">
                <div className="success-icon-box">
                  <svg
                    className="icon-md"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <p className="success-label">Latest Success</p>
                  <p className="success-title">Chidi hired at Microsoft</p>
                </div>
              </div>
              <p className="success-quote">
                "Code Nation didn't just teach me Python, they taught me how to
                think like a Software Engineer."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
