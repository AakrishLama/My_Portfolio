import './Leadership.css';
import useScrollReveal from '../hooks/useScrollReveal';

const Leadership = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="leadership" className="leadership-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Leadership</h2>
        <div className="leadership-grid">
          <div className="leadership-card">
            <h3>LNU AI Society | Auditor</h3>
            <p className="period">Aug 2025 – Present</p>
            <p>Oversaw financial transparency and compliance for a 100+ member student society, auditing budgets and expenditures to ensure accurate reporting and improve funding allocation efficiency.</p>
          </div>
          <div className="leadership-card">
            <h3>Boy Scouts of Kathmandu | Senior Patrol Leader</h3>
            <p className="period">Sep 2018 – Jun 2021</p>
            <p>Led and mentored a troop of 25+ scouts through 15+ multi-day expeditions, ensuring 100% safety and mission success via rigorous training in survival skills, planning, and risk management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
