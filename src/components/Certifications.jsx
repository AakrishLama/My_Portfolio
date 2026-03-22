import './Certifications.css';
import useScrollReveal from '../hooks/useScrollReveal';

const Certifications = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="certifications" className="certifications-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-card">
          <div className="cert-logo-wrapper">
            <img src="/az900.png" alt="AWS AZ9000" className="cert-logo" />
          </div>
          <div className="cert-content">
            <h3>Azure AZ-900</h3>
            <p>Certified Cloud Practitioner & Architect</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
