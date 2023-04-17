import React from 'react';
import './ProjectSection.css';

const ProjectSection = () => {
  return (
    <section id="projects" className="project-section">
      <h2 className="section-header">My Projects</h2>
      <div className="project-container">
        <div className="project-card">
          <img className="project-img" src="/project-1.png" alt="Project 1" />
          <div className="project-info">
            <h3 className="project-title">Project 1</h3>
            <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a className="btn" href="#">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <img className="project-img" src="/project-2.png" alt="Project 2" />
          <div className="project-info">
            <h3 className="project-title">Project 2</h3>
            <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a className="btn" href="#">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <img className="project-img" src="/project-3.png" alt="Project 3" />
          <div className="project-info">
            <h3 className="project-title">Project 3</h3>
            <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a className="btn" href="#">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
