// src/components/projects/ProjectList.tsx
import React from 'react';
import { ProjectListProps } from '../../app/lib/definitions'; // Make sure the path is correct
import ProjectLayout from './ProjectLayout';

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="w-full max-w-7xl px-16 py-8">
      {/* Heading centered at the top */}
      <h1 className="text-4xl font-semibold text-center text-white mb-16 underline decoration-slice decoration-4  ">Projects</h1>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectLayout key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
