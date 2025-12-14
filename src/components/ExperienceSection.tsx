"use client";
import ExperinceCard from "@/components/ExperinceCard";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { experiencesData } from "@/lib/data";

export default function ExperienceSection() {
  const { ref } = useSectionInView("Experience");
  return (
    <section ref={ref} id="experience" className="my-10 scroll-mt-28 md:mb-20">
      <SectionHeading
        heading="My Experience"
        content="Professional experience that I have accumulated over several years."
      />
      <div className="relative max-w-4xl mx-auto ">
        {experiencesData.map((exp, index) => (
          <ExperinceCard key={index} {...exp} index={index} />
        ))}
      </div>
    </section>
  );
}
