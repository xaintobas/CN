import React from "react";
import "./AgencyAffiliation.css";

const AgencyAffiliation = () => {
  return (
    <section className="agency-section">
      <div className="agency-container">
        <div className="content-column">
          <div className="section-label">
            <div className="label-line"></div>
            THE CODE NATION ADVANTAGE
          </div>
          <h2 className="section-heading">
            We are a Dev Agency{" "}
            <span className="highlight-text">Turned Academy</span>
          </h2>
          <p className="description-text">
            Unlike schools that just teach from textbooks, we started as a
            software development agency. We build high-scale solutions for
            global brands. Our training is based on the{" "}
            <b>exact tools, workflows, and standards</b> we use in our
            professional agency work.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <p className="feature-text">Enterprise Workflows</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <p className="feature-text">Real Client Scenarios</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <p className="feature-text">Agile Mentality</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <p className="feature-text">Live Feedback Loops</p>
            </div>
          </div>
        </div>

        <div className="visual-column">
          <div className="code-card">
            <div className="window-controls">
              <div className="control-dot red"></div>
              <div className="control-dot yellow"></div>
              <div className="control-dot green"></div>
            </div>
            <div className="code-content">
              <p className="code-line comment">// Our Agency Core Code</p>
              <p className="code-line text-light">class CodeNation {"{"}</p>
              <p className="code-line text-light indent-1">
                static impact(lives) {"{"}
              </p>
              <p className="code-line text-light indent-2">
                return lives.map(life {"=>"} life.transform());
              </p>
              <p className="code-line text-light indent-1">{"}"}</p>
              <p className="code-line text-light">{"}"}</p>
            </div>
            <div className="card-footer">
              <div className="footer-content">
                <span className="footer-label">Client Projects Built</span>
                <span className="footer-value">120+</span>
              </div>
            </div>
          </div>
          <div className="decorative-border"></div>
        </div>
      </div>
    </section>
  );
};

export default AgencyAffiliation;
