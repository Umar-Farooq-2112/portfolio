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
      description: "Designed lightweight hybrid YOLOv8 models with TinyViT/MobileViT and CBAM attention, reducing parameters to 4M and achieving 1.8x faster inference for edge deployment.",
      imgUrl: timberdefect,
      link: "",
      techStack: ["PyTorch", "YOLOv8", "OpenCV", "Ultralytics"]
    },
    {
      title: "Agentic AI Business Idea Validator Tool",
      description: "Developed an agentic AI workflow to automate business idea validation, competitor analysis, and market demand estimation with LLM-powered reporting.",
      imgUrl: businessideaai,
      link: "https://github.com/Umar-Farooq-2112/Agentic-AI-Business-Idea-Evaluator.git",
      techStack: ["LangChain", "LangGraph", "Gemini", "Firecrawl"]
    },
    {
      title: "Sentiment Analysis with Sarcasm & Emojis",
      description: "Developed a hybrid deep learning model combining Bi-directional LSTM and Multi-Head Self-Attention for sarcasm and emoji-aware sentiment analysis.",
      imgUrl: sentimentanalysis,
      link: "https://github.com/NemroNeno/Sentiment_analysis_Semester_proj.git",
      techStack: ["TensorFlow", "LSTM", "Gemini API", "NLP"]
    },
    {
      title: "AI-Based Database Management App",
      description: "Developed an AI Agents based database management application for natural language queries and automated database operations.",
      imgUrl: dbmgtaiapp,
      link: "https://github.com/Umar-Farooq-2112/Agnetic-AI-and-LLM-Based-Database-Management-Applciations.git",
      techStack: ["LangChain", "LangGraph", "SQLite", "Gemini"]
    },
    {
      title: "Road Edge Deterioration Detector",
      description: "Developed an advanced image processing algorithm to detect and analyze road edge deterioration using RunSAT and Hough transform methods.",
      imgUrl: roadedge,
      link: "https://github.com/Umar-Farooq-2112/Road-Edge-Deterioration.git",
      techStack: ["Python", "OpenCV", "Image Processing"]
    },
    {
      title: "Unique Cracks Detector from GoPro Video",
      description: "Implemented a system for unique crack detection, eliminating duplicates and merging overlapping cracks with bounding box outputs.",
      imgUrl: cracksdetector,
      link: "https://github.com/Umar-Farooq-2112/Cracks-Detection-using-Go-Pro-Videos-and-Inference-masks-.git",
      techStack: ["Python", "OpenCV", "Deep Learning"]
    },
    {
      title: "JPEG Image Compression",
      description: "Applied lossy compression algorithms to reduce image file sizes while preserving visual quality with a user-friendly Streamlit application.",
      imgUrl: jpegcompression,
      link: "https://github.com/Umar-Farooq-2112/JPEG-Compression.git",
      techStack: ["Python", "OpenCV", "Streamlit"]
    },
    {
      title: "Presentation Video Slides Extractor",
      description: "Python script that extracts and stores each slide from video recordings of meetings with presentations.",
      imgUrl: vts,
      link: "https://github.com/Umar-Farooq-2112/Video-to-Slide-Converter.git",
      techStack: ["Python", "OpenCV", "Image Processing"]
    },
    {
      title: "Road Bleeding Detector",
      description: "Python scripts for detecting road bleeding from road images and inference masks utilizing OpenCV and Image Processing.",
      imgUrl: bleedingdetector,
      link: "https://github.com/Umar-Farooq-2112/Road-Bleeding-Detector.git",
      techStack: ["Python", "OpenCV"]
    },
  ];

  const tab2 = [
    {
      title: "FitnessFusion",
      description: "Full-stack fitness application for workout and diet plans with 3 user modes (Admin, Trainer, Trainee) built with Flutter and Node.js.",
      imgUrl: fitnessfusion,
      link: "https://github.com/Umar-Farooq-2112/Fitness-Fusion.git",
      techStack: ["Flutter", "Node.js", "MySQL", "REST API"]
    },
    {
      title: "Cloud Video Storage App",
      description: "Cloud video storage app based on microservices architecture utilizing Google Cloud Buckets for storage and Express.js backend.",
      imgUrl: videostrgapp,
      link: "https://github.com/Umar-Farooq-2112/Cloud-Video-App.git",
      techStack: ["Node.js", "Express", "GCP", "Microservices"]
    },
    {
      title: "IChat - Java Chatting Application",
      description: "Peer-to-peer chatting application built in Java utilizing Socket programming and Swing UI Library.",
      imgUrl: ichat,
      link: "https://github.com/Umar-Farooq-2112/Chat-Application.git",
      techStack: ["Java", "Sockets", "Swing UI"]
    },
  ];

  const tab3 = [
    {
      title: "LangGraph Chatbot & MCP Servers",
      description: "Multiple LangGraph projects including Chatbot and MCP Servers utilizing various APIs and models.",
      imgUrl: mcp,
      link: "https://github.com/Umar-Farooq-2112/Struggle-with-LangGraph.git",
      techStack: ["LangGraph", "MCP", "Python"]
    },
    {
      title: "Chat with PDF using RAG",
      description: "Multiple PDF query chatbots using RAG, LangChain, Ollama, and Gemini APIs for document Q&A.",
      imgUrl: chatpdfrag,
      link: "https://github.com/Umar-Farooq-2112/Chat-with-Pdf-Projects-.git",
      techStack: ["LangChain", "RAG", "Ollama", "Gemini"]
    },
    {
      title: "LangChain Chatbot Projects",
      description: "Collection of chatbots developed using LangChain with OpenAI, Ollama and Gemini API integrations.",
      imgUrl: chatbot,
      link: "https://github.com/Umar-Farooq-2112/struggle-towards-langchain.git",
      techStack: ["LangChain", "OpenAI", "Ollama"]
    },
    {
      title: "Test Portal",
      description: "Console-based test portal application for quiz-based questions with difficulty levels and multiple subjects.",
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
