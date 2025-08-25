import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // 🔹 adăugat useNavigate
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
  const [projects, setProjects] = useState<Project[]>([]);
  const [project, setProject] = useState<Project | null>(null);
  const [zoomedPhoto, setZoomedPhoto] = useState<string | null>(null);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Încarcă toate proiectele
  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        const projectData = data.find((proj: Project) => proj.id === parseInt(id!));
        setProject(projectData);
      })
      .catch((error) => console.error('Error fetching project:', error));
  }, [id]);

  // Scroll up pentru fiecare proiect
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" }); 
}, [id]);

  // Navigare între proiecte
  const handleNavigateProject = (direction: 'prev' | 'next') => {
    if (!project || projects.length === 0) return;

    const currentIndex = projects.findIndex((p) => p.id === project.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    } else {
      newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    }

    const newProject = projects[newIndex];
    navigate(`/projects/${newProject.id}`);
  };

  // Zoom pe imagini + navigare cu taste
  useEffect(() => {
    if (!project) return;

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

  // Format descriere
  const formatDescription = (description: string) => {
    return description.split('\n').map((text, index) => {
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
      {/* Butoane Prev / Next */}
       <div className={styles.navigationButtons}>
        <button onClick={() => handleNavigateProject('prev')} className={styles.prevButton}>Prev Project</button>
        <button onClick={() => handleNavigateProject('next')} className={styles.nextButton}>Next Project</button>
      </div>

      {/* Titlu și detalii */}
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

      {/* Descriere */}
      <div className={styles.descriptionSection}>
        {formatDescription(project.description)}
      </div>

      {/* Galerie de imagini */}
      <div className={styles.sliderSection}>
        <div className={styles.photoGallery}>
          {project.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Project ${project.name} - ${index}`}
              onClick={() => setZoomedIndex(index)}
              className={styles.zoomableImage}
            />
          ))}
        </div>

        {/* Overlay imagine mărită */}
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
              onClick={(e) => e.stopPropagation()}
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