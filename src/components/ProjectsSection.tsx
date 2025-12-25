import { ExternalLink, Figma, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import projectBongoSource from "@/assets/project-bongo-source.jpg";
import projectIotDashboard from "@/assets/project-iot-dashboard.jpg";
import projectPostOffice from "@/assets/project-post-office.jpg";
import projectIbanker from "@/assets/project-ibanker.jpg";

const projects = [
  {
    id: "bongo-source",
    title: "Bongo Source",
    description: "B2B Marketplace App designed using Material Design patterns and user-centered flows, optimizing buyer-seller interactions.",
    tags: ["B2B Marketplace App", "Mobile App", "Material Design"],
    domain: "B2B Marketplace App",
    image: projectBongoSource,
    figmaLink: "#",
    liveLink: "#",
  },
  {
    id: "iot-dashboard",
    title: "IoT System Monitoring Dashboard",
    description: "Enhanced dashboard through clear data visualization, improved information architecture, and intuitive layouts.",
    tags: ["IoT Monitoring Platform", "Data Visualization", "Dashboard"],
    domain: "IoT Monitoring Platform",
    image: projectIotDashboard,
    figmaLink: "#",
    liveLink: "https://dribbble.com/mkfaruq",
  },
  {
    id: "post-office",
    title: "Post Office Mail Booking System",
    description: "Redesigned using Interaction Design principles and Responsive Design, reducing user clicks and task time.",
    tags: ["Government Service System", "Web App", "UX Research"],
    domain: "Government Service System",
    image: projectPostOffice,
    figmaLink: "#",
    liveLink: "#",
  },
  {
    id: "ibanker",
    title: "iBanker – AML Dashboard",
    description: "Anti-Money Laundering Cloud Dashboard with accessible, user-focused interfaces that improved task completion rates.",
    tags: ["Anti-Money Laundering Monitoring System", "Dashboard", "Cloud"],
    domain: "Anti-Money Laundering Monitoring System",
    image: projectIbanker,
    figmaLink: "#",
    liveLink: "#",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section 
      id="projects" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 bg-secondary/10 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-[1500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
          <p className={`text-accent font-medium tracking-wide uppercase text-sm mb-3 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}>
            Portfolio
          </p>
          <h2 className={`text-4xl md:text-5xl font-display font-bold transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
            Selected Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-[opacity,transform] duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms" }}
            >
              <div className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-glow hover:-translate-y-2 transition-[transform,box-shadow] duration-150 ease-out">
                {/* Project image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {project.domain}
                    </span>
                    {project.tags.slice(1).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent transition-colors duration-150">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <a
                      href={project.figmaLink}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-150"
                    >
                      <Figma size={16} />
                      Figma
                    </a>
                    <a
                      href={project.liveLink}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-150"
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                    <Link
                      to={`/case-study/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
                    >
                      <FileText size={16} />
                      View Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;