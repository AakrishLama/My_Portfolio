import './TechnicalSkills.css';
import { FaPython, FaJava, FaJs, FaReact, FaVuejs, FaNodeJs, FaDocker, FaGitAlt, FaAws, FaLinux, FaMicrosoft } from 'react-icons/fa';
import { SiCplusplus, SiGo, SiHtml5, SiCss3, SiDart, SiFlutter, SiPostman, SiJira, SiSpringboot, SiNextdotjs, SiMongodb, SiPostgresql, SiMysql, SiScikitlearn, SiNumpy, SiPandas, SiTensorflow } from 'react-icons/si';
import useScrollReveal from '../hooks/useScrollReveal';

const TechnicalSkills = () => {
  const skills = {
    "Languages": [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "SQL", icon: <SiPostgresql /> }, // Generic SQL icon or Postgres
      { name: "JavaScript", icon: <FaJs /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Go", icon: <SiGo /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Dart", icon: <SiDart /> }
    ],
    "Developer Tools": [
      { name: "AWS (EC2, S3)", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Azure", icon: <FaMicrosoft /> },
      { name: "Jira", icon: <SiJira /> }
    ],
    "Libraries/Frameworks": [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
      { name: "VueJS", icon: <FaVuejs /> },
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Riverpod", icon: <SiFlutter /> }, // Reuse Flutter or similar
      { name: "Go Router", icon: <SiGo /> } // Reuse Go
    ],
    "Databases": [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> }
    ],
    "Machine Learning & Data": [
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> }
    ]
  };

  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-tags">
                {items.map(skill => (
                  <span key={skill.name} className="skill-tag">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
