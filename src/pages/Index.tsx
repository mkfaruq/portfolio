import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";
import BackgroundElements from "@/components/BackgroundElements";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Faruq Hossain | UI/UX Designer Portfolio</title>
        <meta 
          name="description" 
          content="Creative UI/UX designer with 2+ years of experience crafting user-centered digital interfaces. Explore my portfolio of web, mobile and dashboard designs." 
        />
        <meta name="keywords" content="UI/UX Designer, Product Designer, Figma, Web Design, Mobile App Design, Dashboard Design" />
        <link rel="canonical" href="https://faruqhossain.com" />
      </Helmet>
      
      <BackgroundElements />
      <Navbar />
      <main className="bg-background min-h-screen page-reveal relative z-10">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
