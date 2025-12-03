import 'react-multi-carousel/lib/styles.css';
import './Skills.css';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Skills = ({skills}) => {
  const languages = skills.languages;
  const tools = skills.tools;
  const technologies = skills.technologies;
  const frameworks = skills.frameworks;
  const backend = skills.backend;

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="skill-bx">
                    <h2>Skills & Expertise</h2>
                    <p>
                      A comprehensive toolkit built through hands-on experience in AI, backend systems, and full-stack development — constantly evolving with the latest technologies.
                    </p>
                    
                    {/* First Row - 2 columns */}
                    <div className="skills-grid">
                      <div className="skills-category">
                        <div className="category-header">
                          <span className="category-icon">💻</span>
                          <h3>Programming Languages</h3>
                        </div>
                        <div className="skills-tags">
                          {languages.map((skill, index) => (
                            <span className="skill-tag" key={index}>{skill.title}</span>
                          ))}
                        </div>
                      </div>

                      <div className="skills-category">
                        <div className="category-header">
                          <span className="category-icon">🛠️</span>
                          <h3>Tools & Platforms</h3>
                        </div>
                        <div className="skills-tags">
                          {tools.map((skill, index) => (
                            <span className="skill-tag" key={index}>{skill.title}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Second Row - Full width for Specialization */}
                    <div className="skills-grid skills-grid-full">
                      <div className="skills-category">
                        <div className="category-header">
                          <span className="category-icon">🎯</span>
                          <h3>Specializations & Expertise</h3>
                        </div>
                        <div className="skills-tags">
                          {technologies.map((skill, index) => (
                            <span className="skill-tag" key={index}>{skill.title}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Third Row - 2 columns */}
                    <div className="skills-grid">
                      <div className="skills-category">
                        <div className="category-header">
                          <span className="category-icon">🤖</span>
                          <h3>AI & ML Frameworks</h3>
                        </div>
                        <div className="skills-tags">
                          {frameworks.map((skill, index) => (
                            <span className="skill-tag" key={index}>{skill.title}</span>
                          ))}
                        </div>
                      </div>

                      <div className="skills-category">
                        <div className="category-header">
                          <span className="category-icon">⚙️</span>
                          <h3>Backend & DevOps</h3>
                        </div>
                        <div className="skills-tags">
                          {backend.map((skill, index) => (
                            <span className="skill-tag" key={index}>{skill.title}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  )
}
