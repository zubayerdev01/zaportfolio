"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { MagicCard } from "./ui/magic-card";

export interface ProjectCardProps {
  index: number;
  image: string;
  title: string;
  description: string;
  links: {
    github: string;
    demo: string;
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
      className="overflow-hidden relative mx-auto max-w-3xl w-full "
    >
      <MagicCard className="flex flex-col h-full cursor-pointer p-6 md:p-8 rounded-2xl relative overflow-hidden group">
        <Link
          href={data.links.demo ?? "#"}
          aria-label={data.title}
          target="_blank"
          className="absolute inset-0 z-10"
        ></Link>
        <motion.div
          className="flex flex-col h-full space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden bg-muted">
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                priority={index < 3}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="space-y-4 flex-1 flex flex-col">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-semibold text-foreground"
            >
              {data.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm md:text-base leading-relaxed flex-1"
            >
              {data.description}
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {data.technologies.map((tech) => (
                <motion.div
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Badge
                    variant={"outline"}
                    className="text-xs md:text-sm py-1.5 px-3"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </MagicCard>
    </motion.div>
  );
}
