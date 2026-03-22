import './WorkExperience.css';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Rankad AB",
      role: "Fullstack Developer",
      period: "March 2025 - present",
        description: "Optimizing domain visibility and performance for Large Language Models (LLMs) by developing full-stack features that enhance search engine relevance."
    },
    {
      company: "Videntic AB",
      role: "Backend Developer",
      period: "Dec 2025 - Feb 2025",
      description: "Researched GEO and implemented functionality based on numerous peer reviewed research papers."
    },
    {
      company: "Studeni AB",
      role: "Fullstack Developer",
      period: "Sep 2025 - Nov 2025",
      description: "Enhanced application reliability by using Docker and optimized cloud infrastructure on DigitalOcean (Droplets, load balancers, monitoring)."
    },
    {
      company: "Teaching Assistant",
      role: "Teaching Assistant",
      period: "Jan 2025 - Apr 2025",
      description: "Mentored and guided 80+ undergraduate students in database concepts (ER modeling, SQL, normalization), resulting in a 20% improvement in average exam scores. Assisted in grading 200+ assignments ensuring 100% timely evaluation."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <h3>{exp.role} @ {exp.company}</h3>
                <div className="period">{exp.period}</div>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
