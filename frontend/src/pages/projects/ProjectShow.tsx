import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Define the type for a project
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
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p><strong>Location:</strong> {project.location}</p>
      <p><strong>Completion Date:</strong> {project.completionDate}</p>
      <p><strong>Sector:</strong> {project.sector}</p>

      <h2>Photos</h2>
      <div>
        {project.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Project ${project.name} - ${index}`} width="300px" />
        ))}
      </div>
    </div>
  );
};

export default ProjectShow;
