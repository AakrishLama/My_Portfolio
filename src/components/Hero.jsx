import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title" style={{fontFamily: "charm"}}>
            About Me <br />
            <span className="gradient-text">Aakrish Lama</span>
          </h1>
          <p className="hero-bio">
            I’m a developer who enjoys solving challenging problems through thoughtful
            system design and clean code. My experience spans full-stack web development, cloud platforms,
            and applied machine learning, with a strong focus on performance and reliability.
            I’ve worked with technologies like React, Spring Boot, Docker, and AWS to build real products,
            from collaborative cloud platforms to ML-powered audio tools and always aiming to ship software that’s efficient,
            secure, and user-focused.
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
