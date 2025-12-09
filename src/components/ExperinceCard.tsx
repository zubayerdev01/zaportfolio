"use client";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Experience } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ExperinceCardProps extends Experience {
  index: number;
}
const ExperinceCard = ({ index, ...data }: ExperinceCardProps) => {
  return (
    <div className="relative pl-8">
     {/* Timeline Line – */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{
          duration: 0.8,
          delay: index * 0.2 + 0.3, //
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="absolute left-0 top-6 w-[2px] bg-muted origin-top"
      />
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.4,
          delay: index * 0.2 + 0.1,
          ease: "backOut",
        }}
        viewport={{ once: true }}
        className="absolute left-[-5px] top-3 size-3 rounded-full border-2 border-primary bg-background z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
       transition={{
          duration: 0.6,
          delay: index * 0.2,
          ease: "easeOut",
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-3 pb-10"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
            <Icons.building className="size-5" />
          </div>
          <span className="text-lg font-semibold">{data.company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{data.title}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm">
            <Icons.calendar className="size-4" />
            <span>{data.period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{data.description}</p>
        <div className="flex flex-wrap gap-2">
          {data.technologies.map((tech) => (
            <Badge key={tech} variant={"outline"} size={"lg"}>
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperinceCard;
