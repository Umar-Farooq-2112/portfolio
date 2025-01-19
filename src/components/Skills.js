import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import ProgressBar from "./ProgressBar"


export const Skills = ({skills}) => {
  const languages = skills.languages;
  const others = skills.others;
  const tools = skills.tools;
  const technologies = skills.technologies;

  // const languages = [
  //   { percentage: 80, title: "C/C++" },
  //   { percentage: 80, title: "Python" },
  //   { percentage: 70, title: "JavaScript" },
  //   { percentage: 80, title: "SQL" },
  // ];
  // const others = [
  //   { percentage: 75, title: "Git/GitHub" },
  //   { percentage: 70, title: "Database Management and Development" },
  //   { percentage: 60, title: "MongoDB" },
  // ];
  // const tools = [
  //   { percentage: 85, title: "Visual Studio Code" },
  //   { percentage: 80, title: "Jupyter Notebook" },
  //   { percentage: 70, title: "Android Studio" },
  //   { percentage: 75, title: "Google Colaboratory" },
  // ];
  // const technologies = [
  //   { percentage: 80, title: "Computer Vision" },
  //   { percentage: 70, title: "Generative AI" },
  //   { percentage: 75, title: "Flutter Development" },
  //   { percentage: 70, title: "Firebase" },
  //   { percentage: 65, title: "Node/Express JS" },
  // ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Throughout my journey as a software engineer, I've gained expertise in a variety of tools and technologies. Below are the key skills that I use to develop innovative solutions and create meaningful applications
                <br></br>
                I am constantly learning and evolving, always striving to stay updated with the latest trends and best practices in the tech industry
              </p>
              <h3>Programming Languages</h3>
              <div className="skill-grid-container">
                {languages.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <ProgressBar percentage={skill.percentage} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </div>
              <h3 style={{marginTop: "10px"}}>Technologies</h3>
              <div className="skill-grid-container">
                {technologies.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <ProgressBar percentage={skill.percentage} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </div>
              <h3 style={{marginTop: "10px"}}>Tools</h3>
              <div className="skill-grid-container">
                {tools.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <ProgressBar percentage={skill.percentage} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </div>
              <h3 style={{marginTop: "10px"}}>Other</h3>
              <div className="skill-grid-container">
                {others.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <ProgressBar percentage={skill.percentage} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
