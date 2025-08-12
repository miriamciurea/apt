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
  const [zoomedPhoto, setZoomedPhoto] = useState<string | null>(null);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  

  // function for full image zoom on projects images"

  useEffect(() => {

    if (project === null) return;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (zoomedIndex === null) return;

    if (e.key === 'Escape') {
      setZoomedIndex(null);
    } else if (e.key === 'ArrowLeft') {
      setZoomedIndex((prev) => (prev! > 0 ? prev! - 1 : project.photos.length - 1));
    } else if (e.key === 'ArrowRight') {
      setZoomedIndex((prev) => (prev! < project.photos.length - 1 ? prev! + 1 : 0));
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [zoomedIndex, project]);

  useEffect(() => {

    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        const projectData = data.find((proj: Project) => proj.id === parseInt(id!));
        setProject(projectData);
      })
      .catch(error => console.error('Error fetching project:', error));
  }, [id]);

  // Utility function to format the description
  const formatDescription = (description: string) => {
    return description.split('\n').map((text, index) => {
      // Add highlights to specific keywords
      if (text.includes('Scope of Work:') || text.includes('Key Stats:')) {
        return (
          <p key={index}>
            <strong>{text}</strong>
          </p>
        );
      }
      return <p key={index}>{text}</p>;
    });
  };

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

      {/* Second row: Description */}
      <div className={styles.descriptionSection}>
        {formatDescription(project.description)}
      </div>

      {/* Third row: Image Slider */}
      <div className={styles.sliderSection}>
        <div className={styles.photoGallery}>
          {project.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Project ${project.name} - ${index}`} onClick={() => setZoomedIndex(index)} className={styles.zoomableImage} />
          ))}   
        </div>

        {zoomedPhoto && (
  <div className={styles.fullscreenOverlay} onClick={() => setZoomedPhoto(null)}>
    <img src={zoomedPhoto} alt="Zoomed view" className={styles.fullscreenImage} />
  </div>
)}

        {zoomedIndex !== null && (
  <div className={styles.fullscreenOverlay} onClick={() => setZoomedIndex(null)}>
    <button
      className={styles.navButton}
      onClick={(e) => {
        e.stopPropagation();
        setZoomedIndex((prev) => (prev! > 0 ? prev! - 1 : project.photos.length - 1));
      }}
    >
      ‹
    </button>

    <img
      src={project.photos[zoomedIndex]}
      alt={`Zoomed Project ${zoomedIndex}`}
      className={styles.fullscreenImage}
      onClick={(e) => e.stopPropagation()} // prevent closing on image click
    />

    <button
      className={styles.navButton}
      onClick={(e) => {
        e.stopPropagation();
        setZoomedIndex((prev) => (prev! < project.photos.length - 1 ? prev! + 1 : 0));
      }}
    >
      ›
    </button>
  </div>
)}

      </div>
    </div>
  );
};

export default ProjectShow;
