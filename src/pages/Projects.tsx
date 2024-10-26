// src/pages/Projects.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useDashboardStore from '../store/useDashboardStore';

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
}

const Projects: React.FC = () => {
  const [projects, _] = useState<Project[]>([]);
  const { username } = useDashboardStore();

  useEffect(() => {
    const getProjects = async () => {
      console.log('projects')
      if(!username) return
      const repos = await axios.get(`https://api.github.com/users/${username}/repos`);
      console.log(repos);
      repos.data.forEach((repo: any) => {
        _(prev => [
          ...prev,
          {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            link: repo.homepage || '',
          },
        ]);
      });
    };
    getProjects();
  }, [username]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <li
            key={project.id}
            className="bg-white shadow-md rounded-lg p-6 transition hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
              {project.name}
            </h3>
            <p className="text-gray-600 mb-4">
              {project.description || 'No Description Available'}
            </p>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                View Project
              </a>
            ) : (
              <span className="block text-center text-gray-400 py-2">No Link Available</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
