import "./TrainingTracks.css";
import { courses } from "../data/courses";
import { Link } from "react-router-dom";

const TrainingTracks = () => {
  return (
    <section id="trainings" className="training-section">
      <div className="section-header">
        <h2 className="section-title">
          Launch Your Tech Career <br />
          <span className="highlight-text">With Industry Experts</span>
        </h2>
        <p className="section-subtitle">
          Immersive training programs designed to take you from total novice to
          job-ready developer in months, not years.
        </p>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="card-image-container">
              <img
                src={course.image}
                className="card-image"
                alt={course.title}
              />
              <div className="icon-badge-wrapper">
                <div className={`icon-badge ${course.theme}`}>
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="card-meta">
                <span className="meta-level">{course.level}</span>
                <span className="meta-duration">{course.duration}</span>
              </div>

              <h3 className="card-title">{course.title}</h3>
              <p className="card-desc">{course.desc}</p>

              <div className="tags-wrapper">
                {course.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <Link to={`/courses/${course.id}`} className="card-button">
                View Syllabus
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {courses.length > 0 && (
        <div className="footer-action">
          <Link className="explore-button">Explore All Training Tracks</Link>
        </div>
      )}
    </section>
  );
};

export default TrainingTracks;
