import React from "react";
import "./Experience.css"; // Add the CSS for styling

// const experiences = [
//   {
//     title: "Computer Vision Intern",
//     company: "RoadGauge Ltd",
//     duration: "July 2024 - Current",
//     description: "Worked on road-edge detection and crack-detection solutions using deep learning and OpenCV.",
//     link: "https://roadgauge.ai"
//   },
// ];

const ExperienceCard = ({ title, company, duration, description, link }) => {
  return (
    <div className="experience-card">
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
        <h4>{company}</h4>
      </a>
      <p className="duration">{duration}</p>
      <p className="description">{description}</p>
    </div>
  );
};

const ExperienceSection = ({experiences}) => {
  return (
    <section className="experience-section" id="experience">
      <h2>My Experiences</h2>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            duration={experience.duration}
            description={experience.description}
            link={experience.link}
          />
        ))}
      </div>
    </section>
  );
};


export default ExperienceSection;
