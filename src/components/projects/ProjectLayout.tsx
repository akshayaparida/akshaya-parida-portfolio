// src/components/projects/ProjectLayout.tsx
import React from 'react';
import Link from 'next/link';
import { Project } from '../../app/lib/definitions'; // Import the Project type
import { Github } from 'lucide-react'; // Import the Github icon

const ProjectLayout: React.FC<Project> = ({ name, description, date, demoLink, githubRepo }) => {
  return (
    <div className="bg-gray-950 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-800">
      <Link href={demoLink} target="_blank" className="block">
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl text-white">{name}</h2>
          <p className="text-gray-400">{description}</p>
          <p className="text-sm text-gray-500">{new Date(date).toDateString()}</p>
        </div>
      </Link>
      <div className="mt-4 flex space-x-4">
        <a
          href={githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-red-500 flex items-center gap-2"
        >
          <Github size={20} />
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectLayout;
