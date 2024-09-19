
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProjectShow.module.css';

interface Project {
  id: number;
  name: string;
  description: string;
  location: string;
  completionDate: string;
  sector: string;
  photos: string[];
}

const ProjectShow: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        const projectData = data.find((proj: Project) => proj.id === parseInt(id!));
        setProject(projectData);
      })
      .catch(error => console.error('Error fetching project:', error));
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {/* First row: Title and Details */}
      <div className={styles.titleSection}>
        <h1>{project.name}</h1>
      </div>
      <div className={styles.detailsSection}>
        <div className={styles.detailsSection}>
  <p>
    <span className={styles.label}>Location:</span>
    <span className={styles.value}>{project.location}</span>
  </p>
  <p>
    <span className={styles.label}>Completion Date:</span>
    <span className={styles.value}>{project.completionDate}</span>
  </p>
  <p>
    <span className={styles.label}>Sector:</span>
    <span className={styles.value}>{project.sector}</span>
  </p>
</div>

      </div>

      {/* Second row: Description */}
      <div className={styles.descriptionSection}>
        <p>{project.description}</p>
      </div>

      {/* Third row: Image Slider */}
      <div className={styles.sliderSection}>
        <div className={styles.photoGallery}>
          {project.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Project ${project.name} - ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
