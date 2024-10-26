// src/pages/Projects.tsx
import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
}

const initialProjects: Project[] = [
  {
    id: 1,
    name: 'Quiz App',
    description: 'A personal portfolio showcasing my projects and skills.',
    link: 'https://quiz-application-bay-sigma.vercel.app/',
  },
  {
    id: 2,
    name: 'Weather App',
    description: 'A React app to check current weather using an API.',
    link: 'https://github.com/your-username/weather-app',
  },
  {
    id: 3,
    name: 'To-Do App',
    description: 'A task management app to keep track of daily activities.',
    link: 'https://github.com/your-username/todo-app',
  },
];

const Projects: React.FC = () => {
  const [projects, _] = useState<Project[]>(initialProjects);

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
