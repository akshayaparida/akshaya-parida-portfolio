"use client"; // This marks the component as a client-side component if necessary

import Image from "next/image";
import bg from "../../../../public/background/projects-bg.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../lib/data";

export default function Projects() {
  return (
    <>
      {/* Background Image */}
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left- 0 w-full h-full object-cover opacity-20"
      />

    <ProjectList projects={projectsData} />
    </>
  );
}
