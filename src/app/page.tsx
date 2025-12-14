import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <Header />
      <HeroSection />
      <AboutSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
