import "./WhyChooseUs.css";
import React from "react";

const features = [
  {
    title: "Project-Based Learning",
    desc: "Ditch boring theory. Build production-grade apps that solve real business problems for your portfolio.",
    icon: (
      <svg
        className="feature-icon-svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "Expert Mentorship",
    desc: "You won’t learn alone. Get direct feedback from senior developers currently working in global tech companies.",
    icon: (
      <svg
        className="feature-icon-svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Career Placement Support",
    desc: "CV reviews, mock interviews, and access to our exclusive network of hiring partners to land your first role.",
    icon: (
      <svg
        className="feature-icon-svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="why-choose-section">
      <div className="bg-radial-overlay"></div>

      <div className="container">
        <div className="content-grid">
          <div className="text-column">
            <h2 className="why-us-heading section-heading">
              Why We Are Different From <br />
              <span className="highlight-text">Standard Bootcamps</span>
            </h2>
            <p className="section-description">
              Most schools focus on syntax. We focus on engineering. We train
              you to be the professional that companies are desperate to hire.
            </p>

            <div className="features-list">
              {features.map((feat, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-icon-wrapper">{feat.icon}</div>
                  <div>
                    <h4 className="feature-title">{feat.title}</h4>
                    <p className="feature-desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="cta-button">
              Apply for Scholarships
              <svg
                className="button-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>

          <div className="image-column">
            <div className="glow-effect"></div>
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop"
              className="hero-image"
              alt="Hands coding"
            />
            <div className="floating-card">
              <div className="card-header">
                <div className="status-dot"></div>
                <span className="status-label">Live Session</span>
              </div>
              <p className="card-title">
                Industry Expert Q&A: Master System Design
              </p>
              <div className="avatar-group">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/${i + 20}/100/100`}
                    className="avatar-img"
                    alt="Student"
                  />
                ))}
                <div className="avatar-counter">+42</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
