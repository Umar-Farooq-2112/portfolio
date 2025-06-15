import React from "react";
import "./ContactDetails.css"; // Add styling for this component


const ContactDetails = ({details}) => {
  const linkedin = details.linkedin;
  const github = details.github;
  const facebook = details.facebook;
  const instagram = details.instagram;
  const number = details.number;
  const whatsapp = details.whatsapp;
  
  
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h4>Email:</h4>
          <p>umarfarooq211203@gmail.com</p>
        </div>
        <div className="contact-item">
          <h4>Phone & WhatsApp:</h4>
          <p>{number}</p>
        </div>
        <div className="social-icons">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
