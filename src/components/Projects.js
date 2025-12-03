import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";
import vts from "../assets/projects/vts.png";
import ichat from "../assets/projects/ichat.png";
import mcp from "../assets/projects/mcp.png";
import chatpdfrag from "../assets/projects/chatpdfrag.png";
import chatbot from "../assets/projects/chatbot.png";
import testportal from "../assets/projects/testportal.png";
import videostrgapp from "../assets/projects/videostrgapp.png";
import jpegcompression from "../assets/projects/jpegcompression.png";
import bleedingdetector from "../assets/projects/bleedingdetector.png";
import cracksdetector from "../assets/projects/cracksdetector.png";
import fitnessfusion from "../assets/projects/fitnessfusion.png";
import sentimentanalysis from "../assets/projects/sentimentanalysis.png";
import timberdefect from "../assets/projects/timberdefect.png";
import roadedge from "../assets/projects/roadedge.png";
import dbmgtaiapp from "../assets/projects/dbmgtaiapp.png";
import businessideaai from "../assets/projects/businessideaai.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const tab1 = [
    {
      title: "Hybrid YOLOv8 with Vision Transformers for Timber Defect Detection",
      description: [
        "Hybrid YOLOv8 + TinyViT/MobileViT architecture",
        "CBAM attention mechanism integration",
        "Reduced to 4M parameters for edge deployment",
        "1.8x faster inference speed"
      ],
      imgUrl: timberdefect,
      link: "",
      techStack: ["PyTorch", "YOLOv8", "OpenCV", "Ultralytics"]
    },
    {
      title: "Agentic AI Business Idea Validator",
      description: [
        "Automated business idea validation workflow",
        "Competitor analysis & market estimation",
        "LLM-powered comprehensive reporting",
        "Multi-agent orchestration system"
      ],
      imgUrl: businessideaai,
      link: "https://github.com/Umar-Farooq-2112/Agentic-AI-Business-Idea-Evaluator.git",
      techStack: ["LangChain", "LangGraph", "Gemini", "Firecrawl"]
    },
    {
      title: "Sentiment Analysis with Sarcasm & Emojis",
      description: [
        "Bi-directional LSTM architecture",
        "Multi-Head Self-Attention mechanism",
        "Sarcasm & emoji-aware analysis",
        "Hybrid deep learning model"
      ],
      imgUrl: sentimentanalysis,
      link: "https://github.com/NemroNeno/Sentiment_analysis_Semester_proj.git",
      techStack: ["TensorFlow", "LSTM", "Gemini API", "NLP"]
    },
    {
      title: "AI-Based Database Management App",
      description: [
        "Natural language to SQL queries",
        "AI Agents for automated DB operations",
        "Multi-database support",
        "Interactive query interface"
      ],
      imgUrl: dbmgtaiapp,
      link: "https://github.com/Umar-Farooq-2112/Agnetic-AI-and-LLM-Based-Database-Management-Applciations.git",
      techStack: ["LangChain", "LangGraph", "SQLite", "Gemini"]
    },
    {
      title: "Road Edge Deterioration Detector",
      description: [
        "RunSAT algorithm implementation",
        "Hough transform for edge detection",
        "Automated deterioration analysis",
        "Advanced image processing pipeline"
      ],
      imgUrl: roadedge,
      link: "https://github.com/Umar-Farooq-2112/Road-Edge-Deterioration.git",
      techStack: ["Python", "OpenCV", "Image Processing"]
    },
    {
      title: "Unique Cracks Detector from GoPro Video",
      description: [
        "Duplicate crack elimination",
        "Overlapping crack merging",
        "Bounding box output generation",
        "Video frame analysis"
      ],
      imgUrl: cracksdetector,
      link: "https://github.com/Umar-Farooq-2112/Cracks-Detection-using-Go-Pro-Videos-and-Inference-masks-.git",
      techStack: ["Python", "OpenCV", "Deep Learning"]
    },
    {
      title: "JPEG Image Compression",
      description: [
        "Lossy compression algorithms",
        "Visual quality preservation",
        "Streamlit web interface",
        "Adjustable compression levels"
      ],
      imgUrl: jpegcompression,
      link: "https://github.com/Umar-Farooq-2112/JPEG-Compression.git",
      techStack: ["Python", "OpenCV", "Streamlit"]
    },
    {
      title: "Presentation Video Slides Extractor",
      description: [
        "Automated slide extraction",
        "Meeting video processing",
        "Frame-by-frame analysis",
        "Organized slide storage"
      ],
      imgUrl: vts,
      link: "https://github.com/Umar-Farooq-2112/Video-to-Slide-Converter.git",
      techStack: ["Python", "OpenCV", "Image Processing"]
    },
    {
      title: "Road Bleeding Detector",
      description: [
        "Road bleeding detection from images",
        "Inference mask utilization",
        "OpenCV-based processing",
        "Automated defect analysis"
      ],
      imgUrl: bleedingdetector,
      link: "https://github.com/Umar-Farooq-2112/Road-Bleeding-Detector.git",
      techStack: ["Python", "OpenCV"]
    },
  ];

  const tab2 = [
    {
      title: "FitnessFusion",
      description: [
        "Full-stack fitness application",
        "Workout & diet plan management",
        "3 user modes: Admin, Trainer, Trainee",
        "Flutter mobile + Node.js backend"
      ],
      imgUrl: fitnessfusion,
      link: "https://github.com/Umar-Farooq-2112/Fitness-Fusion.git",
      techStack: ["Flutter", "Node.js", "MySQL", "REST API"]
    },
    {
      title: "Cloud Video Storage App",
      description: [
        "Microservices architecture",
        "Google Cloud Buckets integration",
        "Express.js backend API",
        "Scalable video storage solution"
      ],
      imgUrl: videostrgapp,
      link: "https://github.com/Umar-Farooq-2112/Cloud-Video-App.git",
      techStack: ["Node.js", "Express", "GCP", "Microservices"]
    },
    {
      title: "IChat - Java Chatting Application",
      description: [
        "Peer-to-peer communication",
        "Socket programming implementation",
        "Swing UI interface",
        "Real-time messaging"
      ],
      imgUrl: ichat,
      link: "https://github.com/Umar-Farooq-2112/Chat-Application.git",
      techStack: ["Java", "Sockets", "Swing UI"]
    },
  ];

  const tab3 = [
    {
      title: "LangGraph Chatbot & MCP Servers",
      description: [
        "Multiple LangGraph implementations",
        "MCP Server development",
        "Various API integrations",
        "Modular chatbot architecture"
      ],
      imgUrl: mcp,
      link: "https://github.com/Umar-Farooq-2112/Struggle-with-LangGraph.git",
      techStack: ["LangGraph", "MCP", "Python"]
    },
    {
      title: "Chat with PDF using RAG",
      description: [
        "RAG-based document Q&A",
        "Multiple PDF support",
        "Ollama & Gemini integration",
        "Context-aware responses"
      ],
      imgUrl: chatpdfrag,
      link: "https://github.com/Umar-Farooq-2112/Chat-with-Pdf-Projects-.git",
      techStack: ["LangChain", "RAG", "Ollama", "Gemini"]
    },
    {
      title: "LangChain Chatbot Projects",
      description: [
        "Multiple chatbot implementations",
        "OpenAI & Ollama integration",
        "Gemini API support",
        "Conversational AI patterns"
      ],
      imgUrl: chatbot,
      link: "https://github.com/Umar-Farooq-2112/struggle-towards-langchain.git",
      techStack: ["LangChain", "OpenAI", "Ollama"]
    },
    {
      title: "Test Portal",
      description: [
        "Console-based quiz application",
        "Multiple difficulty levels",
        "Multi-subject support",
        "Score tracking system"
      ],
      imgUrl: testportal,
      link: "https://github.com/Umar-Farooq-2112/Test-Portal.git",
      techStack: ["Python", "CLI"]
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Featured Projects</h2>
                  <p>A showcase of my work in AI, Computer Vision, NLP, and Full-Stack Development</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">AI & Computer Vision</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Full-Stack Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Other Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <div className="projects-grid">
                          {tab1.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="projects-grid">
                          {tab2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="projects-grid">
                          {tab3.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
