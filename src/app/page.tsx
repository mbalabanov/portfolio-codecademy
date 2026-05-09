import TopNav from "@/app/components/TopNav";
import HeroSlider from "@/app/components/HeroSlider";
import IntroSection from "@/app/components/IntroSection";
import AboutSection from "@/app/components/AboutSection";
import ProjectsGrid from "@/app/components/ProjectsGrid";
import SkillsSection from "@/app/components/SkillsSection";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <>
      <TopNav />
      <HeroSlider />
      <IntroSection />
      <AboutSection />
      <ProjectsGrid />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
