import "./FAQ.css";
import React, { useState } from "react";

const faqs = [
  {
    q: "Do I need any prior coding experience to start?",
    a: "No! Our 'Beginner' level tracks (Web Dev, UI/UX) are designed specifically for those with zero experience. We start from the absolute fundamentals.",
  },
  {
    q: "Do you offer flexible payment plans?",
    a: "Yes, we have 3-month and 6-month installment plans available for all our premium bootcamps. You can also apply for partial scholarships.",
  },
  {
    q: "What kind of laptop do I need?",
    a: "For most tracks, a laptop with 8GB RAM and an i5 processor (or equivalent) is sufficient. For Data Science or Mobile Dev, we recommend 16GB RAM if possible.",
  },
  {
    q: "How does the job placement support work?",
    a: "Once you complete 80% of your curriculum, our Career Team starts mock interviews and matches your profile with our network of 50+ hiring partners.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">
            Frequently Asked <span className="highlight-text">Questions</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know before joining the Nation.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="faq-question-btn"
              >
                <span className="faq-question-text">{faq.q}</span>
                <svg
                  className={`faq-icon ${openIndex === i ? "open" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && <div className="faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
