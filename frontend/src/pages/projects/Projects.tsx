import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

interface Project {
  id: number;
  name: string;
  description: string;
  location: string;
  completionDate: string;
  sector: string;
  photos: string[];
}

const Projects: React.FC = () => {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>FEATURED PROJECTS</div>
      <div className={styles.projects}>
        {projects.map((project) => (
          <div key={project.id} className={styles.project}>
            <div
              className={styles.projectImage}
              style={{
                backgroundImage: `url(${project.photos[0]})`,
                height: '300px',
                width: '400px',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
            <div className={styles.projectInfo}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <Link to={`/projects/${project.id}`} className={styles.readMoreButton}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
