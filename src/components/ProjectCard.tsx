"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { MagicCard } from "./ui/magic-card";

export interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  links: {
    github: string;
    demo?: string;
  };
  technologies: string[];
}
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function ProjectCard({ index, ...data }: ProjectCardProps) {
  return (
    <motion.div
      key={data.title}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className=""
    >
      <MagicCard className="flex flex-col  cursor-pointer h-[40dvh] items-center justify-center p-4 rounded-2xl">
        <Link
          href={data.links.github}
          aria-label={data.title}
          target="_blank"
          className="overflow-hidden rounded"
        ></Link>

        <h3 className="mt-4 text-xl font-medium">{data.title}</h3>
        <p className="text-muted-foreground mb-4 mt-1">{data.description}</p>
        <div className="flex flex-wrap gap-2">
          {data.technologies.map((tech) => (
            <Badge key={tech} variant={"outline"} size={"lg"}>
              {tech}
            </Badge>
          ))}
        </div>
      </MagicCard>
    </motion.div>
  );
}
