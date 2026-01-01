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
        <title>Faruq Hossain | UI/UX Designer - SaaS Dashboards & Web Applications</title>
        <meta
          name="description"
          content="UI/UX Designer experienced in SaaS Dashboards, Mobile App UI/UX, Web Applications & complex platforms. 2+ years designing data-driven products."
        />
        <meta name="keywords" content="UI/UX Designer, SaaS Dashboard Design, Mobile App UI/UX, Web Application Design, IoT Dashboard, Government Systems, Bangladesh" />
        <link rel="canonical" href="https://faruqhossain.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://faruqhossain.com/" />
        <meta property="og:title" content="Faruq Hossain | UI/UX Designer" />
        <meta property="og:description" content="UI/UX Designer specialized in complex SaaS platfroms and data-driven dashboards." />
        <meta property="og:image" content="https://faruqhossain.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://faruqhossain.com/" />
        <meta property="twitter:title" content="Faruq Hossain | UI/UX Designer" />
        <meta property="twitter:description" content="UI/UX Designer specialized in complex SaaS platfroms and data-driven dashboards." />
        <meta property="twitter:image" content="https://faruqhossain.com/og-image.jpg" />
      </Helmet>

      <div className="relative min-h-screen overflow-hidden">
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
      </div>
    </>
  );
};

export default Index;