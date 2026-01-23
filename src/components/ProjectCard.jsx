import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="card-image-wrapper">
        <img src={project.image} alt={project.title} className="card-image" />
        <div className="card-overlay">
          <span className="view-btn">View Code</span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>
        <div className="card-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
