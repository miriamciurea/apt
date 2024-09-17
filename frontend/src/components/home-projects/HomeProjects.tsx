import React, { useEffect, useRef, useState } from 'react';
import styles from './HomeProjects.module.css'; // Adjust path as necessary

const HomeProjects: React.FC = () => {

  const [offsetX, setOffsetX] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  const handleScroll = () => {
    if (projectsRef.current) {
      const scrollLeft = projectsRef.current.scrollLeft;

      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }

      requestRef.current = requestAnimationFrame(() => {
        setOffsetX(scrollLeft);
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

  const projects = [
    {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbSUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8fDI%3D",
      alt: "Team Construction Site",
      info: "Kent Projects | UK"
    },
    {
      src: "https://images.unsplash.com/photo-1593630265256-d2cc162ab58f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8Mg%3D%3D",
      alt: "Construction Site",
      info: "Build Works | US"
    },
    {
      src: "https://images.unsplash.com/photo-1680879221403-f19bb46fe527?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaWx3YXklMjB3b3JrZXJzfGVufDB8fDB8fHwy",
      alt: "Railway Workers",
      info: "Railway Project | Germany"
    },
    {
      src: "https://images.unsplash.com/photo-1712233462849-7db3060ba1f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbHdheSUyMHdvcmtlcnN8ZW58MHwxfDB8fHwy",
      alt: "Railway Construction",
      info: "Railway Works | Japan"
    },
    {
      src: "https://images.unsplash.com/photo-1593630987785-98139c5f3cc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8Mg%3D%3D",
      alt: "Construction",
      info: "Skyline Projects | UAE"
    },
    {
      src: "https://images.unsplash.com/photo-1680879221403-f19bb46fe527?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaWx3YXklMjB3b3JrZXJzfGVufDB8fDB8fHwy",
      alt: "Railway Workers",
      info: "Railway Project | Germany"
    },
    {
      src: "https://images.unsplash.com/photo-1712233462849-7db3060ba1f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbHdheSUyMHdvcmtlcnN8ZW58MHwxfDB8fHwy",
      alt: "Railway Construction",
      info: "Railway Works | Japan"
    },
    {
      src: "https://images.unsplash.com/photo-1593630987785-98139c5f3cc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8Mg%3D%3D",
      alt: "Construction",
      info: "Skyline Projects | UAE"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>FEATURED PROJECTS</div>
      <div className={styles.projects} ref={projectsRef}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <img
              src={project.src}
              alt={project.alt}
              className={styles.projectImage}
              style={{
                transform: `translateX(${offsetX * 0.3}px)`, // Adjust factor for parallax speed
                transition: 'transform 0.2s ease-out', // Smooth parallax effect
              }}
            />
            <div className={styles.projectInfo}
              style={{
                transform: `translateX(${offsetX * 0.3}px)`, // Adjust factor for parallax speed
                transition: 'transform 0.1s ease-out', // Smooth parallax effect
              }}
            >{project.info}</div>
          </div>
        ))}
      </div>

      <div className={styles.gliderScrollbar}>
      <div
        className={styles.gliderScrollbarHandle}
        style={{
          transform: `translateX(${offsetX}%)`, // Moves based on scroll percentage
        }}
      ></div>
      </div>
    </div>
  );
};

export default HomeProjects;
