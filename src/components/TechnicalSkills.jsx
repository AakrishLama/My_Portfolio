import './TechnicalSkills.css';

const TechnicalSkills = () => {
  const skills = {
    "Languages": ["Python", "Java", "SQL", "JavaScript", "C++", "Go", "HTML5", "CSS", "Dart"],
    "Developer Tools": ["AWS (EC2, S3)", "Docker", "Git", "Postman", "Azure", "Jira"],
    "Libraries/Frameworks": ["Spring Boot", "ReactJS", "NextJS", "VueJS", "NodeJS", "Flutter", "Riverpod", "Go Router"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
    "Machine Learning & Data": ["Scikit-learn", "NumPy", "Pandas"]
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-tags">
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
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
