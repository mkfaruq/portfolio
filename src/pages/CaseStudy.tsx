import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackgroundElements from "@/components/BackgroundElements";
import projectBongoSource from "@/assets/project-bongo-source.jpg";
import projectIotDashboard from "@/assets/project-iot-dashboard.jpg";
import projectPostOffice from "@/assets/project-post-office.jpg";
import projectIbanker from "@/assets/project-ibanker.jpg";

const caseStudies: Record<string, {
  title: string;
  subtitle: string;
  image: string;
  problem: string;
  role: string[];
  process: { step: string; description: string }[];
  outcomes: { metric: string; result: string }[];
}> = {
  "bongo-source": {
    title: "Bongo Source",
    subtitle: "B2B Marketplace Mobile App",
    image: projectBongoSource,
    problem: "Buyers and sellers in the B2B space struggled with fragmented communication and complex workflows, leading to missed opportunities and inefficient transactions. The existing platform lacked intuitive navigation and mobile-first design patterns.",
    role: [
      "Led end-to-end UX design from research to final handoff",
      "Conducted user interviews and competitive analysis",
      "Created wireframes, prototypes, and high-fidelity UI",
      "Collaborated with developers for seamless implementation",
    ],
    process: [
      { step: "Discovery", description: "Interviewed 15+ B2B users to understand pain points in current marketplace experiences" },
      { step: "Research", description: "Analyzed 5 competitor apps and identified UX gaps in transaction flows" },
      { step: "Wireframing", description: "Created low-fidelity wireframes focusing on simplified buyer-seller interactions" },
      { step: "Design", description: "Developed Material Design-based UI with consistent component library" },
      { step: "Testing", description: "Conducted usability tests with 8 users, iterated based on feedback" },
      { step: "Delivery", description: "Handed off annotated designs with developer documentation" },
    ],
    outcomes: [
      { metric: "User Task Completion", result: "+35% improvement" },
      { metric: "Time to First Order", result: "Reduced by 40%" },
      { metric: "User Satisfaction Score", result: "4.6/5 rating" },
    ],
  },
  "iot-dashboard": {
    title: "IoT System Monitoring Dashboard",
    subtitle: "Real-time Device Monitoring Platform",
    image: projectIotDashboard,
    problem: "Operations teams spent excessive time navigating between multiple screens to monitor device health, leading to delayed response times when issues occurred. The existing dashboard lacked clear data hierarchy and real-time alerts.",
    role: [
      "Redesigned information architecture for faster insights",
      "Created data visualization components for real-time metrics",
      "Designed alert system UX for critical device failures",
      "Established design system for consistent dashboard components",
    ],
    process: [
      { step: "Discovery", description: "Shadowed operations team to understand monitoring workflows and pain points" },
      { step: "Research", description: "Mapped user journeys and identified high-frequency actions" },
      { step: "Wireframing", description: "Restructured dashboard layout with priority-based information hierarchy" },
      { step: "Design", description: "Created clear data visualizations with color-coded status indicators" },
      { step: "Testing", description: "A/B tested new layout with operations team over 2-week period" },
      { step: "Delivery", description: "Provided component library and interaction specifications" },
    ],
    outcomes: [
      { metric: "Alert Response Time", result: "Reduced by 50%" },
      { metric: "Daily Screen Switches", result: "-60% reduction" },
      { metric: "Team Productivity", result: "+25% increase" },
    ],
  },
  "post-office": {
    title: "Post Office Mail Booking System",
    subtitle: "Government Digital Transformation",
    image: projectPostOffice,
    problem: "Citizens faced long wait times and confusing paper-based processes when booking mail services. The digital system needed to simplify complex government workflows while maintaining compliance requirements.",
    role: [
      "Led UX research and service design initiatives",
      "Simplified multi-step booking process",
      "Designed responsive web interface for all devices",
      "Created accessibility-compliant components",
    ],
    process: [
      { step: "Discovery", description: "Conducted field research at 3 post office locations" },
      { step: "Research", description: "Mapped existing paper-based workflow and identified bottlenecks" },
      { step: "Wireframing", description: "Designed streamlined 3-step booking flow from 8-step original" },
      { step: "Design", description: "Created government-compliant UI with clear visual hierarchy" },
      { step: "Testing", description: "Tested with diverse user group including elderly citizens" },
      { step: "Delivery", description: "Provided fully responsive designs with accessibility documentation" },
    ],
    outcomes: [
      { metric: "Booking Time", result: "From 15min to 4min" },
      { metric: "User Errors", result: "-70% reduction" },
      { metric: "Online Adoption", result: "+85% increase" },
    ],
  },
  "ibanker": {
    title: "iBanker – AML Dashboard",
    subtitle: "Anti-Money Laundering Cloud Platform",
    image: projectIbanker,
    problem: "Compliance analysts struggled with overwhelming data volumes and complex workflows when investigating potential money laundering cases. The existing system had poor usability scores and high training costs for new analysts.",
    role: [
      "Redesigned case investigation workflow",
      "Created intuitive data visualization for transaction patterns",
      "Designed collaborative features for team investigations",
      "Established fintech-compliant design patterns",
    ],
    process: [
      { step: "Discovery", description: "Interviewed 12 compliance analysts across 3 financial institutions" },
      { step: "Research", description: "Analyzed industry regulations and competitor solutions" },
      { step: "Wireframing", description: "Designed investigation workflow with smart prioritization" },
      { step: "Design", description: "Created data-dense interface with progressive disclosure patterns" },
      { step: "Testing", description: "Conducted task-based usability testing with compliance teams" },
      { step: "Delivery", description: "Delivered comprehensive UI kit and interaction documentation" },
    ],
    outcomes: [
      { metric: "Case Resolution Time", result: "-45% faster" },
      { metric: "Training Time", result: "Reduced by 60%" },
      { metric: "Task Completion Rate", result: "+40% improvement" },
    ],
  },
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudies[id] : null;

  if (!study) {
    return (
      <>
        <BackgroundElements />
        <div className="relative z-[2]">
          <Navbar />
          <main className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
              <h1 className="text-4xl font-display font-bold mb-4">Case Study Not Found</h1>
              <Link to="/" className="text-accent hover:underline">
                ← Back to Home
              </Link>
            </div>
          </main>
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
      </Helmet>
      
      <BackgroundElements />
      <div className="relative z-[2]">
        <Navbar />
        <main className="pt-28 pb-20 px-6 page-reveal">
          <div className="max-w-4xl mx-auto">
            {/* Back link */}
            <Link 
              to="/#projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>

            {/* Header */}
            <div className="mb-12">
              <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
                Case Study
              </p>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {study.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {study.subtitle}
              </p>
            </div>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden mb-16 shadow-glow">
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Problem Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">01</span>
                The Problem
              </h2>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <p className="text-foreground leading-relaxed text-lg">
                  {study.problem}
                </p>
              </div>
            </section>

            {/* My Role Section */}
            <section className="mb-16">
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
            </section>

            {/* UX Process Section */}
            <section className="mb-16">
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
            </section>

            {/* Outcomes Section */}
            <section className="mb-16">
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
            </section>

            {/* CTA */}
            <div className="text-center bg-card rounded-2xl p-12 border border-border">
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
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CaseStudy;