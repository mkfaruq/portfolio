import ImageWithSkeleton from "@/components/ui/image-with-skeleton";
import { ExternalLink, Figma, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { projects } from "@/data/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
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

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-secondary/10 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Selected Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <div className="group glass-card rounded-2xl overflow-hidden hover:shadow-glow hover:-translate-y-2 transition-[transform,box-shadow] duration-300 ease-out h-full flex flex-col">
                {/* Project image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <Link
                      to={`/case-study/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors w-full justify-center shadow-lg"
                    >
                      <FileText size={16} />
                      View Case Study
                    </Link>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
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

                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                    <a
                      href={project.figmaLink}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200"
                    >
                      <Figma size={16} />
                      Figma
                    </a>
                    <a
                      href={project.liveLink}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;