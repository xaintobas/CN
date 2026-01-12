import "./AllTrainings.css";
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

const AllTrainings = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web", "Mobile", "Design", "Data"];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        activeCategory === "All" ||
        course.title.toLowerCase().includes(activeCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="all-trainings all-trainings-container">
      <div className="hero-section">
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Choose Your <span className="highlight-text">Path.</span>
          </h1>

          {/* Search & Filter Bar */}
          <div className="search-bar-container">
            <div className="search-input-wrapper">
              <svg
                className="search-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by skill (e.g. React, Python)..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`category-btn ${
              activeCategory === cat ? "active" : "inactive"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="courses-section">
        <div className="courses-wrapper">
          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="card-image-wrapper">
                    <img
                      src={course.image}
                      className="card-image"
                      alt={course.title}
                    />
                    <div className="duration-badge">{course.duration}</div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{course.title}</h3>
                    <p className="card-desc">{course.desc}</p>
                    <div className="card-tags">
                      {course.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link to={`/courses/${course.id}`} className="card-button">
                      Explore Syllabus
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p className="empty-state-text">
                No tracks found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="reset-btn"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllTrainings;
