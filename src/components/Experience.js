import React from "react";
import "./Experience.css";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

const ExperienceCard = ({ title, company, duration, description, link, index }) => {
  return (
    <div className="experience-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="experience-timeline-dot"></div>
      <div className="experience-content">
        <div className="experience-header">
          <div className="experience-title-section">
            <h3>{title}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer" className="company-link">
              <h4>{company} <span className="link-icon">↗</span></h4>
            </a>
          </div>
          <div className="experience-duration">
            <span className="duration-badge">{duration}</span>
          </div>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

const ExperienceSection = ({experiences}) => {
  return (
    <section className="experience-section" id="experience">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Professional Experience</h2>
            <p className="experience-subtitle">
              My journey through the tech industry, building impactful solutions and growing as an engineer.
            </p>
            <div className="experience-container">
              <div className="experience-timeline-line"></div>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  index={index}
                  title={experience.title}
                  company={experience.company}
                  duration={experience.duration}
                  description={experience.description}
                  link={experience.link}
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
