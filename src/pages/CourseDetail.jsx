import "./CourseDetail.css";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }
  return (
    <div className="course-detail course-detail-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-accent"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-meta">
              <span className="hero-badge hero-badge--level">
                {course.level}
              </span>
              <span className="hero-badge hero-badge--duration">
                {course.duration}
              </span>
            </div>
            <h1 className="hero-title">{course.title}</h1>
            <p className="hero-description">{course.desc}</p>

            <div className="hero-stats-grid">
              <div className="stat-card">
                <p className="stat-label">Entry Salary</p>
                <p className="stat-value stat-value--green">
                  {course.salaryRange}
                </p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Job Growth</p>
                <p className="stat-value">High Impact</p>
              </div>
            </div>

            <button className="btn btn--primary hero-cta">
              Download Full Brochure
            </button>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img src={course.image} className="hero-image" alt={course.title} />
          </div>
        </div>
      </section>

      {/* Student Video Review Section */}
      <section className="reviews-section">
        <div className="reviews-container">
          <div className="reviews-layout">
            <div className="reviews-text-col">
              <span className="section-overline">Student Journey</span>
              <h2 className="section-heading">
                Real Results.{" "}
                <span className="text-highlight">Real People.</span>
              </h2>
              <p className="reviews-quote">
                "Code Nation wasn't just about syntax. It was about the
                community and the direct line to hiring partners. Watch how our
                students transition from zero knowledge to industry leadership."
              </p>
              <div className="student-card">
                <img
                  src={`https://picsum.photos/seed/${course.id}/100/100`}
                  className="student-avatar"
                  alt="Student"
                />
                <div>
                  <p className="student-name">Track Graduate</p>
                  <p className="student-status">Successfully Placed</p>
                </div>
              </div>
              <div className="impact-grid">
                <div className="impact-item">
                  <p className="impact-value">120%</p>
                  <p className="impact-label">Avg. Salary Jump</p>
                </div>
                <div className="impact-item">
                  <p className="impact-value">Cohort</p>
                  <p className="impact-label">Limited Seats</p>
                </div>
              </div>
            </div>

            <div className="video-wrapper group">
              <div className="video-glow"></div>
              <div className="video-frame-container">
                <iframe
                  className="video-iframe"
                  src={`https://www.youtube.com/embed/${course.youtubeId}`}
                  title={`${course.title} Success Story`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Overlay Badge */}
              <div className="video-badge">
                <div className="recording-dot"></div>
                <span className="badge-text">Featured Testimonial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum-section">
        <div className="curriculum-container">
          <div className="curriculum-main">
            <h2 className="section-heading section-heading--dark">
              Deep-Dive <span className="text-highlight">Curriculum</span>
            </h2>

            <div className="syllabus-list">
              {course.syllabus.map((mod, i) => (
                <div key={i} className="module-card">
                  <div className="module-header">
                    <span className="module-week">{mod.week}</span>
                    <div className="module-number">0{i + 1}</div>
                  </div>
                  <h4 className="module-title">{mod.title}</h4>
                  <ul className="module-topics">
                    {mod.topics.map((topic, ti) => (
                      <li key={ti} className="topic-item">
                        <svg
                          className="topic-icon"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="curriculum-sidebar">
            {/* Outcomes */}
            <div className="outcomes-card">
              <h3 className="card-title">Career Outcomes</h3>
              <div className="outcomes-list">
                {course.outcomes.map((outcome, i) => (
                  <div key={i} className="outcome-item">
                    <div className="outcome-dot"></div>
                    <p className="outcome-text">{outcome}</p>
                  </div>
                ))}
              </div>
              <button className="btn btn--outline enroll-btn">
                Enroll in this Track
              </button>
            </div>

            {/* Support Box */}
            <div className="support-card">
              <h3 className="support-title">Personal Support</h3>
              <p className="support-desc">
                Every track comes with 1-on-1 career coaching, mock interviews,
                and lifetime access to our alumni community.
              </p>
              <div className="social-proof">
                <div className="avatar-stack">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="stack-avatar"></div>
                  ))}
                </div>
                <p className="proof-text">
                  Join 40+ students in the next cohort
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
