import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import Hero from './hero/Hero';
import 'animate.css';

interface Project {
  id: number;
  name: string;
  description: string;
  location: string;
  photos: string[];
  sector: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState<string>(''); // State to manage animation class

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleSectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sector = event.target.value;
    setSelectedSector(sector);

    if (sector === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.sector === sector);
      setFilteredProjects(filtered);
    }

    // Reset current index when filtering
    setCurrentIndex(0);
  };

  const handleNext = () => {
    // Start the "exit" animation
    setAnimationClass('animate__animated animate__backOutDown');

    // Wait for the animation to complete before changing the project
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
      setAnimationClass('animate__animated animate__backInDown'); // Start the "enter" animation
    }, 500); // Adjust the timeout to match the animation duration
  };

  const handlePrev = () => {
    // Start the "exit" animation
    setAnimationClass('animate__animated animate__backOutDown');

    // Wait for the animation to complete before changing the project
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length);
      setAnimationClass('animate__animated animate__backInDown'); // Start the "enter" animation
    }, 500); // Adjust the timeout to match the animation duration
  };

  const currentProject = filteredProjects[currentIndex];

  return (
    <>
      <Hero />

      <div className={styles.containerProjects}>
        <div className={styles.filterContainer}>
          <label htmlFor="sector-select">SELECT BY SECTOR:</label>
          <select
            id="sector-select"
            value={selectedSector}
            onChange={handleSectorChange}
            className={styles.select}
          >
            <option value="All">ALL SECTORS</option>
            <option value="Construction">CONSTRUCTION</option>
            <option value="Optic Fiber">OPTIC FIBER</option>
            <option value="Rails">RAILS</option>
          </select>
        </div>

        {currentProject && (
          <div
            className={`${styles.projectDisplay} ${animationClass}`}
            onAnimationEnd={() => setAnimationClass('')} // Reset animation class after it completes
          >
            <div className={styles.projectInfo}>
              <h2>{currentProject.name}</h2>
              <p>{currentProject.location}</p>
            </div>

            <div
              className={styles.projectImage}
              style={{
                backgroundImage: `url(${currentProject.photos[0]})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />

            <div className={styles.side}>
              <div className={styles.projectCounter}>
                {currentIndex + 1} / {filteredProjects.length}
              </div>

              <Link to={`/projects/${currentProject.id}`} className={styles.readMoreButton}>
                view project
              </Link>

              <div className={styles.navigation}>
                <button onClick={handlePrev}>
                  <span className="material-symbols-outlined" style={{ color: `#2877CE` }}>
                    keyboard_double_arrow_left
                  </span> PREV
                </button>
                <button onClick={handleNext}>
                  NEXT <span className="material-symbols-outlined" style={{ color: `#2877CE` }}>double_arrow</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Projects.module.css';
// import Hero from './hero/Hero';

// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   location: string;
//   completionDate: string;
//   sector: string;
//   photos: string[];
// }

// const Projects: React.FC = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
//   const [selectedSector, setSelectedSector] = useState<string>('All');

//   useEffect(() => {
//     fetch('/projects.json')
//       .then(response => response.json())
//       .then(data => {
//         setProjects(data);
//         setFilteredProjects(data);
//       })
//       .catch(error => console.error('Error fetching projects:', error));
//   }, []);

//   // Function to handle sector selection
//   const handleSectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const sector = event.target.value;
//     setSelectedSector(sector);

//     if (sector === 'All') {
//       setFilteredProjects(projects); // Show all projects if "All" is selected
//     } else {
//       const filtered = projects.filter(project => project.sector === sector);
//       setFilteredProjects(filtered);
//     }
//   };

//   return (
//     <>
//       <Hero />

//       <div className={styles.container}>

//         {/* Sector Selection Dropdown */}
//         <div className={styles.filterContainer}>
//           <label htmlFor="sector-select">SELECT BY SECTOR:</label>
//           <select
//             id="sector-select"
//             value={selectedSector}
//             onChange={handleSectorChange}
//             className={styles.select}
//           >
//             <option value="All">ALL SECTORS</option>
//             <option value="Construction">CONSTRUCTION</option>
//             <option value="Optic Fiber">OPTIC FIBER</option>
//             <option value="Rails">RAILS</option>
//           </select>
//         </div>

//         <div className={styles.projects}>
//           {filteredProjects.map((project) => (
//             <div key={project.id} className={styles.project}>
//               <div
//                 className={styles.projectImage}
//                 style={{
//                   backgroundImage: `url(${project.photos[0]})`,
//                   height: '300px',
//                   width: '400px',
//                   backgroundAttachment: 'fixed',
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover',
//                 }}
//               />
//               <div className={styles.projectInfo}>
//                 <h2>{project.name}</h2>
//                 <p>{project.description}</p>
//                 <Link to={`/projects/${project.id}`} className={styles.readMoreButton}>
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Projects.module.css';
// import Hero from './hero/Hero';

// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   location: string;
//   completionDate: string;
//   sector: string;
//   photos: string[];
// }

// const Projects: React.FC = () => {

//   const [projects, setProjects] = useState<Project[]>([]);

//   useEffect(() => {
//     fetch('/projects.json')
//       .then(response => response.json())
//       .then(data => setProjects(data))
//       .catch(error => console.error('Error fetching projects:', error));
//   }, []);

//   return (
//     <>
//       <Hero />

//       <div className={styles.container}>
//         <div className={styles.title}>FEATURED PROJECTS</div>
//         <div className={styles.projects}>
//           {projects.map((project) => (
//             <div key={project.id} className={styles.project}>
//               <div
//                 className={styles.projectImage}
//                 style={{
//                   backgroundImage: `url(${project.photos[0]})`,
//                   height: '300px',
//                   width: '400px',
//                   backgroundAttachment: 'fixed',
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover',
//                 }}
//               />
//               <div className={styles.projectInfo}>
//                 <h2>{project.name}</h2>
//                 <p>{project.description}</p>
//                 <Link to={`/projects/${project.id}`} className={styles.readMoreButton}>
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;
