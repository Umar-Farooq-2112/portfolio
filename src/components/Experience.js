import React, { useState } from "react";
import "./Experience.css";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

const ExperienceCard = ({ title, company, duration, description, link, isOpen, onToggle, index }) => {
  return (
    <div
      className={`exp-item${isOpen ? " open" : ""}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <button className="exp-summary" onClick={onToggle} aria-expanded={isOpen}>
        <div className="exp-left">
          <span className="exp-title">{title}</span>
          <span className="exp-dot">·</span>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="exp-company"
              onClick={e => e.stopPropagation()}
            >
              {company}<span className="exp-arrow">↗</span>
            </a>
          ) : (
            <span className="exp-company no-link">{company}</span>
          )}
        </div>
        <div className="exp-right">
          <span className="exp-duration">{duration}</span>
          <span className="exp-chevron">{isOpen ? "−" : "+"}</span>
        </div>
      </button>
      <div className="exp-details" aria-hidden={!isOpen}>
        <ul className="exp-desc-list">
          {Array.isArray(description)
            ? description.map((item, i) => <li key={i}>{item}</li>)
            : <li>{description}</li>
          }
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection = ({ experiences }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="experience-section" id="experience">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Professional Experience</h2>
            <p className="exp-subtitle">
              Click any role to see what I worked on.
            </p>
            <div className="exp-list">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  index={index}
                  title={exp.title}
                  company={exp.company}
                  duration={exp.duration}
                  description={exp.description}
                  link={exp.link}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};

export default ExperienceSection;
