import React, { useEffect, useRef, useState } from 'react';
import styles from './HomeProjects.module.css';

const HomeProjects: React.FC = () => {
  // New projects from JSON data (first 5)
  const newProjects = [
    {
      src: "/images/lof02.JPG", // Assuming you're hosting your images
      alt: "Lowestoft Fibre Network",
      info: "Fibre Network | Lowestoft, UK"
    },
    {
      src: "/images/n2.jpeg",
      alt: "NWEP Phase 3 Cable Containment",
      info: "NWEP Cable Containment | Euxton Jcn"
    },
    {
      src: "/images/f2.jpeg",
      alt: "North West Electrification Boundary Fencing",
      info: "NW Fencing | Blackpool - Preston"
    },
    {
      src: "/images/sw1.jpeg",
      alt: "Switching Access and Stairways",
      info: "Access and Stairways | Blackpool, UK"
    },
    {
      src: "/images/b1.jpeg",
      alt: "Blackpool Lighting Walkway",
      info: "Blackpool Lighting Walkway | Blackpool"
    }
  ];

  const projects = [...newProjects];

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  const handleScroll = () => {
    if (projectsRef.current) {
      const scrollLeft = projectsRef.current.scrollLeft;
      const scrollTop = projectsRef.current.scrollTop;

      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }

      requestRef.current = requestAnimationFrame(() => {
        setOffsetX(scrollLeft);
        setOffsetY(scrollTop);
      });
    }
  };

  useEffect(() => {
    const container = projectsRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>FEATURED PROJECTS</div>
      <div className={styles.projects} ref={projectsRef}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <div
              className={styles.projectImage}
              style={{
                backgroundImage: `url(${project.src})`,
                height: '300px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                margin: '20px',
              }}
            />
            <div className={styles.projectInfo}
              style={{
                transform: `translate(${offsetX * 0.05}px, ${offsetY * 0.1}px)`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              {project.info}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
