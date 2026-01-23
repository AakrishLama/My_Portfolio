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
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TechnicalSkills />
        <WorkExperience />
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
