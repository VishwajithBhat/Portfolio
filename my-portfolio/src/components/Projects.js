import React from 'react';
import './Projects.css';

const projectList = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio showcasing my projects and skills.',
    url: '#home',
  },
 
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.url} target="_blank" rel="noreferrer" className="btn-secondary">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
