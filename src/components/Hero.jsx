import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Building Digital <br />
            <span className="gradient-text">Experiences</span>
          </h1>
          <p className="hero-bio">
            I'm a passionate developer creating stylish, functional, and user-centric web applications.
            Transforming ideas into reality through clean code and modern design.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/Me.jpeg" alt="Aakrish Lama" />
            <div className="circle-bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
