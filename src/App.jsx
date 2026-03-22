import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import WorkExperience from './components/WorkExperience';
import Leadership from './components/Leadership';
import Languages from './components/Languages';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiquidEther from './components/LiquidEther';
import './App.css';

function App() {
  return (
    <div className="app">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={42}
          cursorSize={95}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#e4e0f5"
          color1="#080fe2"
          color2="#8870d2"
        />
      </div>
      <Navbar />
      <main>
        <Hero />
        <WorkExperience />
        <Projects />
        <TechnicalSkills />
        <Leadership />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
