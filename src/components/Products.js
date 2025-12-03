import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Products.css";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import hrxpert from "../assets/products/hrxpert.png";
import vizdomai from "../assets/products/vizdomai.png";

// Product data - easily expandable for future products
const products = [
  {
    id: 1,
    name: "HRXpert",
    tagline: "AI-Powered Recruitment Automation Platform",
    logo: hrxpert,
    description: "A microservices-based, end-to-end recruitment automation platform designed for organizations to streamline and automate their entire hiring lifecycle.",
    features: [
      "Multi-role support: Admin Recruiter, Recruiter, Interviewer, Candidate",
      "AI-based resume parsing, scoring & job-candidate matching",
      "Real-time voice-based AI interviewer",
      "Integrations with External Applications Tracking Systems(LinkedIn, Indeed etc)",
      "Automated email notifications & calendar scheduling"
    ],
    techStack: ["NestJS", "FastAPI", "Next.js", "MongoDB", "RabbitMQ", "WebRTC", "Gemini/OpenAI"],
    status: "In Development",
    link: null 
  },
  {
    id: 2,
    name: "VizdomAI",
    tagline: "AI-Powered Educational Video Platform",
    logo: vizdomai,
    description: "A complete video streaming platform where users can generate, search, and watch AI-created educational videos. Powered by a fully automated LangGraph pipeline for end-to-end video creation.",
    features: [
      "Video gallery with search & discovery",
      "AI-powered video generation from any topic",
      "Hybrid semantic search with vector embeddings & BM25",
      "Watch, like, and organize generated videos",
      "Automated scripts, visuals, TTS, captions & thumbnails"
    ],
    techStack: ["NestJS", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "LangGraph", "FFmpeg", "OpenAI"],
    status: "In Development",
    link: null // Add link when available
  }
];

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-logo-banner">
        <img src={product.logo} alt={product.name} className="product-logo-full" />
        <div className="product-status">{product.status}</div>
      </div>
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-tagline">{product.tagline}</p>
        <p className="product-description">{product.description}</p>
        
        <div className="product-features">
          <h5>Key Features</h5>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="product-tech">
          <h5>Tech Stack</h5>
          <div className="tech-tags">
            {product.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        {product.link && (
          <a href={product.link} target="_blank" rel="noopener noreferrer" className="product-link">
            View Product →
          </a>
        )}
      </div>
    </div>
  );
};

export const Products = () => {
  return (
    <section className="products" id="products">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Products I've Built</h2>
                  <p>
                    Full-scale AI-powered products designed and developed from concept to deployment,
                    showcasing end-to-end system architecture, AI integration, and scalable solutions.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <div className="products-scroll-container">
                    <div className="products-scroll">
                      {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Products;
