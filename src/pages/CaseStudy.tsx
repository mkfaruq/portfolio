import ImageWithSkeleton from "@/components/ui/image-with-skeleton";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackgroundElements from "@/components/BackgroundElements";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const study = projects.find(p => p.id === id) || null;

  if (!study) {
    return (
      <>
        <BackgroundElements />
        <div className="relative z-[2]">
          <Navbar />
          <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
              <h1 className="text-4xl font-display font-bold mb-4">Case Study Not Found</h1>
              <Link to="/" className="text-accent hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{study.title} Case Study | Faruq Hossain</title>
        <meta
          name="description"
          content={`${study.title} - ${study.subtitle}. UX case study by Faruq Hossain.`}
        />
        <link rel="canonical" href={`https://faruqhossain.com/case-study/${study.id}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://faruqhossain.com/case-study/${study.id}`} />
        <meta property="og:title" content={`${study.title} | Case Study`} />
        <meta property="og:description" content={study.problem.slice(0, 150) + "..."} />
        <meta property="og:image" content={study.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${study.title} | Case Study`} />
        <meta property="twitter:description" content={study.problem.slice(0, 150) + "..."} />
        <meta property="twitter:image" content={study.image} />
      </Helmet>

      <BackgroundElements />
      <div className="relative z-[2]">
        <Navbar />
        <main className="pt-28 pb-20 px-6">
          <article className="max-w-4xl mx-auto">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
              >
                <ArrowLeft size={18} />
                Back to Projects
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
                Case Study
              </p>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {study.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {study.subtitle}
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl overflow-hidden mb-16 shadow-glow"
            >
              <ImageWithSkeleton
                src={study.image}
                alt={study.title}
                containerClassName="w-full h-auto aspect-video"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Problem Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">01</span>
                The Problem
              </h2>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <p className="text-foreground leading-relaxed text-lg">
                  {study.problem}
                </p>
              </div>
            </motion.section>

            {/* My Role Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">02</span>
                My Role
              </h2>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <ul className="space-y-4">
                  {study.role.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-accent mt-1 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* UX Process Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">03</span>
                UX Process
              </h2>
              <div className="space-y-4">
                {study.process.map((item, index) => (
                  <div key={index} className="bg-card rounded-2xl p-6 border border-border flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">{item.step}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Outcomes Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">04</span>
                Outcomes & Results
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {study.outcomes.map((outcome, index) => (
                  <div key={index} className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-glow transition-shadow">
                    <p className="text-3xl font-display font-bold text-gradient mb-2">
                      {outcome.result}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {outcome.metric}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center bg-card rounded-2xl p-12 border border-border"
            >
              <h3 className="text-2xl font-display font-bold mb-4">
                Want to discuss your project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's create something amazing together.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-xl btn-3d glow-accent hover:-translate-y-1 transition-all duration-300"
              >
                Book a Free Consultation
              </Link>
            </motion.div>
          </article>
        </main>
      </div>
    </>
  );
};

export default CaseStudy;