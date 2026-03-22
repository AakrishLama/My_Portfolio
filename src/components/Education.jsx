import './Education.css';
import useScrollReveal from '../hooks/useScrollReveal';

const Education = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="education" className="education-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="edu-card">
            <div className="edu-logo-wrapper">
              <img src="/LNU.png" alt="Linnaeus University" className="edu-logo" />
            </div>
            <div className="edu-content">
              <h3>Linnaeus University</h3>
              <p className="edu-program">Software Technology</p>
              <p className="edu-period">2023 - 2026</p>
            </div>
          </div>
          <div className="edu-card">
            <div className="edu-logo-wrapper">
              <img src="/SvenErikson.png" alt="Sveneriksongymnasiet" className="edu-logo" />
            </div>
            <div className="edu-content">
              <h3>Sveneriksongymnasiet</h3>
              <p className="edu-program">Student</p>
              <p className="edu-period">2022 - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
