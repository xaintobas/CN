import "./Career.css";
import React from "react";

const Career = () => {
  return (
    <div className="career-page">
      <section className="hero-section">
        <div className="container hero-content">
          <h1 className="hero-title">
            Join the <span className="highlight-text">Nation.</span>
          </h1>
          <p className="hero-description">
            We're looking for passionate educators, engineers, and creatives to
            help us shape the next generation of tech talent.
          </p>
          {/* <button className="cta-button">View Open Roles</button> */}
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="container benefits-grid">
          <div className="benefits-text-col">
            <h2 className="section-heading">Why Work With Us?</h2>
            <div className="benefits-list">
              {[
                {
                  t: "Remote First",
                  d: "Work from anywhere in the world, on your own schedule.",
                },
                {
                  t: "Growth Budget",
                  d: "We pay for your books, courses, and conference tickets.",
                },
                {
                  t: "Global Impact",
                  d: "Your work directly transforms the lives of hundreds of students.",
                },
              ].map((b, i) => (
                <div key={i} className="benefit-card">
                  <div className="benefit-icon-box">
                    <svg
                      className="benefit-icon"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L1 21h22L12 2zm0 3.45L18.8 19H5.2L12 5.45z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="benefit-title">{b.t}</h4>
                    <p className="benefit-desc">{b.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-images-grid">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
              className="team-img"
              alt="Team"
            />
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop"
              className="team-img offset-img"
              alt="Office"
            />
          </div>
        </div>
      </section>

      {/* Job List */}
      <section className="jobs-section">
        <div className="jobs-container">
          <h2 className="jobs-main-heading">Current Opportunities</h2>
          <div className="jobs-list">
            {[
              {
                title: "Senior React Instructor",
                loc: "Remote",
                type: "Full-time",
              },
              {
                title: "UI/UX Design Mentor",
                loc: "Lagos/Hybrid",
                type: "Contract",
              },
              {
                title: "Career Services Specialist",
                loc: "Remote",
                type: "Part-time",
              },
              { title: "DevOps Engineer", loc: "Global", type: "Full-time" },
            ].map((job, i) => (
              <div key={i} className="job-card">
                <div>
                  <h4 className="job-title">{job.title}</h4>
                  <p className="job-meta">
                    {job.loc} • {job.type}
                  </p>
                </div>
                <svg
                  className="job-arrow-icon"
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
