import "./ImpactStories.css";
import React from "react";

const stories = [
  {
    id: 1,
    name: "Sarah Johnson",
    from: "Retail Clerk",
    to: "Frontend Dev at Stripe",
    image: "https://picsum.photos/seed/sarah/400/400",
    quote:
      "I was working two jobs and felt stuck. Code Nation gave me the roadmap and the confidence to change my life. I went from zero coding to a six-figure role in 6 months.",
  },
  {
    id: 2,
    name: "Marcus Chen",
    from: "Marketing Intern",
    to: "UX Designer at Adobe",
    image: "https://picsum.photos/seed/marcus/400/400",
    quote:
      "The design masterclass was a game changer. The portfolio I built during the program was exactly what hiring managers were looking for.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    from: "Customer Support",
    to: "Software Engineer at Meta",
    image: "https://picsum.photos/seed/elena/400/400",
    quote:
      "The mentorship is real. Having someone who works at a Big Tech company review my code every week pushed me to a level I couldn't reach alone.",
  },
];

const ImpactStories = () => {
  return (
    <section className="impact-stories-section">
      <div className="container">
        <div className="header">
          <h2 className="title">
            Real People. <span className="highlight">Real Impact.</span>
          </h2>
          <p className="subtitle">
            See the transformations that started in our classrooms.
          </p>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="card-header">
                <img src={story.image} className="avatar" alt={story.name} />
                <div>
                  <h4 className="person-name">{story.name}</h4>
                  <div className="career-path">
                    <span className="role-previous">{story.from}</span>
                    <svg
                      className="arrow-icon"
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
                    <span className="role-current">{story.to}</span>
                  </div>
                </div>
              </div>
              <p className="quote">"{story.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
