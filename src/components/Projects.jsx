import ProjectCard from './ProjectCard';
import { projects } from '../data/projectsData';
import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';

const Projects = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
