import React, { useState } from 'react';
import './Project.css';

const projectsData = [
  { id: 1, title: 'Online book selling website', description: 'The Online book selling website is developed by me to tackle real world challenges through innovative solutions that integrate my theoretical knowledge gained in the course with practical application.An online book-selling website is a platform on the internet where people can buy and sell books. Its like a virtual bookstore where users can browse through a wide variety of books, including novels, textbooks, comics, and more. Customers can search for specific titles, authors, or genres, and then purchase books directly through the website. These platforms often provide detailed information about each book, including summaries, reviews, and sometimes even sample chapters' },
  { id: 2, title: 'Self Driving Car', description: 'This project was created by me for our engineering clinics which is a car that drives on its own through python' },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    
    <div>
      <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <p className='projects-p'>Here are some projects that I worked on</p>
      <div className="projects-box">
        <div className="projects-navbar">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-nav-item ${selectedProject === project ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="project-info">
          {selectedProject && (
            <div className="project-card">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </div>
      </div>
      </section>
    </div>
   
  );
  
};


export default Projects;