import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
        <title>Faruq Hossain | UI/UX Designer - SaaS & Fintech Specialist</title>
        <meta 
          name="description" 
          content="I design conversion-focused websites & apps that help startups grow users and revenue. Specializing in SaaS dashboards, fintech, and mobile app UX design." 
        />
        <meta name="keywords" content="UI/UX Designer, SaaS Dashboard Design, Fintech UX, Mobile App Design, Product Designer, Bangladesh" />
        <link rel="canonical" href="https://faruqhossain.com" />
      </Helmet>
      
      <BackgroundElements />
      <div className="relative z-[2]">
        <Navbar />
        <main className="page-reveal">
          <HeroSection />
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