import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {

  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <h4 style={{ textAlign: "center" }}>{title}</h4>
          <div className="proj-txtx">
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}



