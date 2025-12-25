import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ProcessSection from "@/components/ProcessSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import BackgroundElements from "@/components/BackgroundElements";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Faruq Hossain | Product UI/UX Designer - SaaS Dashboards & Web Applications</title>
        <meta 
          name="description" 
          content="Product UI/UX Designer experienced in SaaS Dashboards, Mobile App UI/UX, Web Applications & complex platforms. 2+ years designing data-driven products." 
        />
        <meta name="keywords" content="Product UI/UX Designer, SaaS Dashboard Design, Mobile App UI/UX, Web Application Design, IoT Dashboard, Government Systems, Bangladesh" />
        <link rel="canonical" href="https://faruqhossain.com" />
      </Helmet>
      
      <BackgroundElements />
      <div className="relative z-[2]">
        <Navbar />
        <main className="page-reveal">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <SkillsSection />
          <ProcessSection />
          <ExperienceSection />
          <ProjectsSection />
          <ImpactSection />
          <TestimonialsSection />
          <ContactSection />
          <FooterSection />
        </main>
      </div>
    </>
  );
};

export default Index;