import './Languages.css';

const Languages = () => {
  return (
    <section id="languages" className="languages-section">
      <div className="container">
        <h2 className="section-title">Languages</h2>
        <div className="languages-list">
          <div className="lang-item">
            <span className="lang-name">English</span>
            <span className="lang-level">(Native)</span>
          </div>
          <div className="lang-item">
            <span className="lang-name">Nepali</span>
            <span className="lang-level">(Native)</span>
          </div>
          <div className="lang-item">
            <span className="lang-name">Swedish</span>
            <span className="lang-level">(Fluent)</span>
          </div>
          <div className="lang-item">
            <span className="lang-name">Hindi</span>
            <span className="lang-level">(Fluent)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
