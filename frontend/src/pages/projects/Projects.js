import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import Hero from './hero/Hero';
import 'animate.css';
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedSector, setSelectedSector] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState(''); // State to manage animation class
    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => {
            setProjects(data);
            setFilteredProjects(data);
        })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);
    const handleSectorChange = (event) => {
        const sector = event.target.value;
        setSelectedSector(sector);
        if (sector === 'All') {
            setFilteredProjects(projects);
        }
        else {
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
    return (_jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsxs("div", { className: styles.containerProjects, children: [_jsxs("div", { className: styles.filterContainer, children: [_jsx("label", { htmlFor: "sector-select", children: "SELECT BY SECTOR:" }), _jsxs("select", { id: "sector-select", value: selectedSector, onChange: handleSectorChange, className: styles.select, children: [_jsx("option", { value: "All", children: "ALL SECTORS" }), _jsx("option", { value: "Construction", children: "CONSTRUCTION" }), _jsx("option", { value: "Optic Fiber", children: "OPTIC FIBER" }), _jsx("option", { value: "Rails", children: "RAILS" })] })] }), currentProject && (_jsxs("div", { className: `${styles.projectDisplay} ${animationClass}`, onAnimationEnd: () => setAnimationClass(''), children: [_jsxs("div", { className: styles.projectInfo, children: [_jsx("h2", { children: currentProject.name }), _jsx("p", { children: currentProject.location })] }), _jsx("div", { className: styles.projectImage, style: {
                                    backgroundImage: `url(${currentProject.photos[0]})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                } }), _jsxs("div", { className: styles.side, children: [_jsxs("div", { className: styles.projectCounter, children: [currentIndex + 1, " / ", filteredProjects.length] }), _jsx(Link, { to: `/projects/${currentProject.id}`, className: styles.readMoreButton, children: "view project" }), _jsxs("div", { className: styles.navigation, children: [_jsxs("button", { onClick: handlePrev, children: [_jsx("span", { className: "material-symbols-outlined", style: { color: `#2877CE` }, children: "keyboard_double_arrow_left" }), " PREV"] }), _jsxs("button", { onClick: handleNext, children: ["NEXT ", _jsx("span", { className: "material-symbols-outlined", style: { color: `#2877CE` }, children: "double_arrow" })] })] })] })] }))] })] }));
};
export default Projects;
