import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProjectShow.module.css';
const ProjectShow = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => {
            const projectData = data.find((proj) => proj.id === parseInt(id));
            setProject(projectData);
        })
            .catch(error => console.error('Error fetching project:', error));
    }, [id]);
    // Utility function to format the description
    const formatDescription = (description) => {
        return description.split('\n').map((text, index) => {
            // Add highlights to specific keywords
            if (text.includes('Scope of Work:') || text.includes('Key Stats:')) {
                return (_jsx("p", { children: _jsx("strong", { children: text }) }, index));
            }
            return _jsx("p", { children: text }, index);
        });
    };
    if (!project) {
        return _jsx("div", { children: "Loading..." });
    }
    return (_jsxs("div", { className: styles.container, children: [_jsx("div", { className: styles.titleSection, children: _jsx("h1", { children: project.name }) }), _jsxs("div", { className: styles.detailsSection, children: [_jsxs("p", { children: [_jsx("span", { className: styles.label, children: "Location:" }), _jsx("span", { className: styles.value, children: project.location })] }), _jsxs("p", { children: [_jsx("span", { className: styles.label, children: "Completion Date:" }), _jsx("span", { className: styles.value, children: project.completionDate })] }), _jsxs("p", { children: [_jsx("span", { className: styles.label, children: "Sector:" }), _jsx("span", { className: styles.value, children: project.sector })] })] }), _jsx("div", { className: styles.descriptionSection, children: formatDescription(project.description) }), _jsx("div", { className: styles.sliderSection, children: _jsx("div", { className: styles.photoGallery, children: project.photos.map((photo, index) => (_jsx("img", { src: photo, alt: `Project ${project.name} - ${index}` }, index))) }) })] }));
};
export default ProjectShow;
