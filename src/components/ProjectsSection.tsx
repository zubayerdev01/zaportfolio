"use client";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";

import { useSectionInView } from "@/hooks/use-section-in-view";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { ref } = useSectionInView("Projects");
  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="Projects I worked on. Each of them containing its own case study."
        />
      </motion.div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
