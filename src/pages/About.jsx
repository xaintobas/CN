import "./About.css";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-decoration"></div>
        <div className="container hero-content">
          <span className="hero-tag">Our Story</span>
          <h1 className="hero-title">
            Building the Future of <br />
            <span className="text-highlight">Tech Education.</span>
          </h1>
          <p className="hero-description">
            Code Nation was born out of a simple observation: traditional
            education isn't moving fast enough for the digital age. We're here
            to change that.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container mission-grid">
          <div>
            <h2 className="section-heading">Our Mission</h2>
            <p className="section-text">
              To empower individuals with industry-standard tech skills,
              bridging the gap between talent and global opportunities through
              immersive, project-based learning.
            </p>
            <div className="green-bar"></div>
          </div>
          <div>
            <h2 className="section-heading">Our Vision</h2>
            <p className="section-text">
              To be the premier ecosystem for digital transformation in Africa
              and beyond, where every student becomes a creator of world-class
              solutions.
            </p>
            <div className="green-bar"></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading-large">Core Values</h2>
            <p className="section-subheading">
              The principles that guide every classroom and line of code.
            </p>
          </div>
          <div className="values-grid">
            {[
              {
                title: "Excellence",
                desc: 'We don\'t settle for "good enough". We push for production-grade standards.',
                icon: "🏆",
              },
              {
                title: "Integrity",
                desc: "Transparency in our teaching, our pricing, and our partnerships.",
                icon: "🛡️",
              },
              {
                title: "Community",
                desc: "Learning is social. We grow faster when we grow together.",
                icon: "🤝",
              },
            ].map((value, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="team-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading-large">Led by Experts</h2>
            <p className="section-subheading">
              Senior engineers and designers from the world's leading tech hubs.
            </p>
          </div>
          <div className="team-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="team-member-card">
                <div className="team-image-wrapper">
                  <img
                    src={`https://picsum.photos/seed/team${i}/400/400`}
                    alt="Team member"
                    className="team-image"
                  />
                </div>
                <h4 className="team-name">Lead Instructor {i}</h4>
                <p className="team-role">Senior Engineer</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
