import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
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
import roadedge from "../assets/projects/roadedge.png";
import resumescoreai from "../assets/projects/resumescoreai.png";
import dbmgtaiapp from "../assets/projects/dbmgtaiapp.png";
import businessideaai from "../assets/projects/businessideaai.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // const tab1 = projectsdetails.tab1;
  // const tab2 = projectsdetails.tab2;
  // const tab3 = projectsdetails.tab3;


  const tab1 = [
    {
      title: "Agentic AI Business Idea Market Analysis and Validator Tool",
      description: `Developed an agentic AI workflow using LangChain, LangGraph, Google Gemini, and Firecrawl to automate business idea validation, competitor analysis, and market demand estimation.
Implemented modular nodes for web scraping, pain point extraction, and LLM-powered reporting, delivering actionable insights and structured reports for entrepreneurs.`,
      imgUrl: businessideaai,
      link: "https://github.com/Umar-Farooq-2112/Agentic-AI-Business-Idea-Evaluator.git"
    },
    {
      title: "Agentic AI Resume Scoring with Job Description for Job Fit",
      description: `Built an AI-driven resume scoring app using LangChain, LangGraph, and Google Gemini to analyze resumes with respect to job descriptions.
Implemented robust agent workflows with Pydantic validation for structured parsing, fit scoring, and actionable feedback.`,
      imgUrl: resumescoreai,
      link: "https://github.com/Umar-Farooq-2112/Resume-Scoring-wrt-job-description.git"
    },
    {
      "title": "Sentiment Analysis with Sarcasm and Emojis",
      "description": "Developed a lightweight hybrid deep learning model combining Bi-directional LSTM and Multi-Head Self-Attention for sarcasm- and emoji-aware sentiment analysis. Created a custom sarcasm and emoji-enriched dataset using the Google Gemini API, integrated with the IMDB dataset to improve model generalization.",
      "imgUrl": sentimentanalysis,
      "link": "https://github.com/NemroNeno/Sentiment_analysis_Semester_proj.git"
    },
    {
      title: "Agentic AI and LLM-Based Database Management Applications",
      description: `Developed an AI Agents based database management application using LangChain, LangGraph, SQLite and Google Gemini.`,
      imgUrl: dbmgtaiapp,
      link: "https://github.com/Umar-Farooq-2112/Agnetic-AI-and-LLM-Based-Database-Management-Applciations.git"
    },
    {
      title: "Road Edge Deterioration Detector",
      description: `Developed an advanced image processing algorithm to detect 
and analyze road edge deterioration using RunSAT and Hough 
transform methods during my internhsip with RoadGauge Ltd.`,
      imgUrl: roadedge,
      link: "https://github.com/Umar-Farooq-2112/Road-Edge-Deterioration.git"
    },
    {
      title: "Unique Cracks Detector from GoPro Video",
      description: `Implemented a system to ensure unique crack detection, 
eliminating duplicates and accurately merging overlapping 
cracks in the final JSON output as bounding boxes`,
      imgUrl: cracksdetector,
      link: "https://github.com/Umar-Farooq-2112/Cracks-Detection-using-Go-Pro-Videos-and-Inference-masks-.git"
    },
    {
      title: "JPEG Image Compression",
      description: `Applied lossy compression algorithms to reduce image file sizes 
      while preserving visual quality, demonstrating proficiency in 
      image processing and software development.
      Implemented using Python, utilizing OpenCV and Streamlit to 
      develop a user-friendly application.`,
      imgUrl: jpegcompression,
      link: "https://github.com/Umar-Farooq-2112/JPEG-Compression.git"
    },
    {
      title: "Preseatation Video Slides Extractor",
      description: `Implemented a python script taking input a video of any meeting with presentations on it,
      extracting and storing each slide in the presenatation locally`,
      imgUrl: vts,
      link: "https://github.com/Umar-Farooq-2112/Video-to-Slide-Converter.git"
    },
    {
      title: "Road Bleeding Detector",
      description: `Implemented python scripts for detecting road bleeding from road images and inference masks utilizing OpenCV and Image Processing Techniques`,
      imgUrl: bleedingdetector,
      link: "https://github.com/Umar-Farooq-2112/Road-Bleeding-Detector.git"
    },
  ];
  const tab2 = [
    {
      title: "FitnessFusion",
      description: "Design & Development of a fitness application for assigning workout and diet plans to end users with 3 differenct modes of application (Admin, Trainer and Trainee) in Flutter and Node JS with MySQL.",
      imgUrl: fitnessfusion,
      link: "https://github.com/Umar-Farooq-2112/Fitness-Fusion.git"
    },
    {
      title: "Cloud Video Storage App",
      description: "A Cloud Video storage app based on microservices architecture utilizing Google Cloud Buckets for video storage and Node/Express JS for Backend Management.",
      imgUrl: videostrgapp,
      link: "https://github.com/Umar-Farooq-2112/Cloud-Video-App.git"
    },
    {
      title: "IChat - Chatting Application in Java",
      description: "A Simple Peer to Peer Chatting Appilation made in java utilizing Java Socket and Swing UI Library",
      imgUrl: ichat,
      link: "https://github.com/Umar-Farooq-2112/Chat-Application.git"
    },

  ];

  const tab3 = [
    {
      title: "LangGraph Chatbot and MCP Servers Projects",
      description: "Multiple LangGraph Projects including Chatbot, MCP Servers utilizing multiple APIs and Models.",
      imgUrl: mcp,
      link: "https://github.com/Umar-Farooq-2112/Struggle-with-LangGraph.git"
    },
    {
      title: "Chat with PDF Projects using Langchain, Ollama and Gemini APIs",
      description: "Multiple PDF queries chatbot using RAG, LangChain, Ollama, Gemini APIs.",
      imgUrl: chatpdfrag,
      link: "https://github.com/Umar-Farooq-2112/Chat-with-Pdf-Projects-.git"
    },
    {
      title: "LangChain Chatbot Projects",
      description: "Developed Chatbots using LangChain, OpenAI, Ollama and Gemini APIs.",
      imgUrl: chatbot,
      link: "https://github.com/Umar-Farooq-2112/struggle-towards-langchain.git"
    },
    {
      title: "Test Portal",
      description: "A Simple Console based Test Portal application for Quiz based Questions with different difficulty levels and multiple subjects.",
      imgUrl: testportal,
      link: "https://github.com/Umar-Farooq-2112/Test-Portal.git"
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
                  <h2>Projects</h2>
                  <p>Various Projects in AI,Computer Vision, Flutter, Python, Java and C/C++</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">AI and Computer Vision</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Other</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            tab1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            tab2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            tab3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  )
}
