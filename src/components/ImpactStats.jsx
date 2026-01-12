import React from "react";
import "./ImpactStats.css";

const stats = [
  { label: "Careers Launched", value: "500+", sub: "Since 2018" },
  { label: "Avg Salary Increase", value: "115%", sub: "Post-graduation" },
  { label: "Job Placement Rate", value: "94%", sub: "Within 6 months" },
  { label: "Hiring Partners", value: "50+", sub: "Global Tech Firms" },
];

const ImpactStats = () => {
  return (
    <section id="impact" className="impact-section">
      <div className="stats-container">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
            <p className="stat-sub">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
