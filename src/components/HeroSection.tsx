import { ArrowDown, Dribbble, Facebook, Linkedin, MessageCircle, FileDown, Mail } from "lucide-react";
import profileImage from "@/assets/profile-new.jpg";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-6 py-20 pt-28 relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
      />

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-work-sans font-bold leading-tight mb-4 relative z-10"
            >
              <span className="text-gradient animate-gradient-shift inline-block overflow-hidden whitespace-nowrap animate-typewriter border-r-2 border-accent pb-2">
                Product UI/UX Designer
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl font-medium mb-6"
            >
              Specialized in SaaS Dashboards, Web & Mobile Applications and Complex Platforms
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed"
            >
              2+ years of experience designing data-driven web and mobile products - including government service platforms, IoT & anti money laundering monitoring systems, B2B business platform.
            </motion.p>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-8 flex-wrap"
            >
              {[
                { href: "https://dribbble.com/mkfaruq", icon: Dribbble, label: "Dribbble" },
                { href: "https://www.linkedin.com/in/mkfaruq", icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.facebook.com/faruq41", icon: Facebook, label: "Facebook" },
                { href: "mailto:mkfaruqhossain@gmail.com", icon: Mail, label: "Email" },
                { href: "https://wa.me/8801750005162", icon: MessageCircle, label: "WhatsApp" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:rotate-[360deg] transition-all duration-[3000ms] ease-in-out btn-3d"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="/Faruq_Hossain_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent/90 text-accent-foreground font-medium rounded-full btn-3d glow-accent btn-sweep"
              >
                <FileDown size={20} strokeWidth={2} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 text-foreground font-medium group"
              >
                <span className="w-12 h-12 rounded-full border-2 border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <ArrowDown size={18} className="animate-bounce" />
                </span>
                <span className="group-hover:text-accent transition-colors">View Case Studies</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-6 scale-105 glow-accent animate-pulse-slow" />
              <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden shadow-glow glow-subtle">
                <img
                  src={profileImage}
                  alt="Faruq Hossain - UI/UX Designer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;