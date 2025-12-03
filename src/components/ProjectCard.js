import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, techStack }) => {
  const technologies = techStack || [];
  const descriptionItems = Array.isArray(description) ? description : [description];
  
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={imgUrl} alt={title} />
        <div className="project-card-overlay">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-view-btn">
              <span>View Project</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          ) : (
            <span className="project-coming-soon">Coming Soon</span>
          )}
        </div>
      </div>
      <div className="project-card-content">
        <h4 className="project-card-title">{title}</h4>
        
        <ul className="project-card-features">
          {descriptionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
        {technologies.length > 0 && (
          <div className="project-card-tech">
            {technologies.map((tech, index) => (
              <span key={index} className="project-tech-tag">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}



