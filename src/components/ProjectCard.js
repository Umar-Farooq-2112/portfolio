import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, techStack }) => {
  // Extract tech from description or use provided techStack
  const technologies = techStack || [];
  
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="project-card-content">
        <h4 className="project-card-title">{title}</h4>
        <p className="project-card-description">{description}</p>
        
        {technologies.length > 0 && (
          <div className="project-card-tech">
            {technologies.slice(0, 4).map((tech, index) => (
              <span key={index} className="project-tech-tag">{tech}</span>
            ))}
          </div>
        )}
        
        <div className="project-card-footer">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
              View Project <span className="project-card-link-icon">→</span>
            </a>
          ) : (
            <span className="project-card-link" style={{ opacity: 0.5, cursor: 'default' }}>
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  )
}



