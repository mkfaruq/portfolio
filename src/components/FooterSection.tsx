import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, ArrowUp, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const FooterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      toast({
        title: "Subscribed!",
        description: "You've been added to the newsletter.",
      });
      setEmail("");
    }, 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/20 pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 flex flex-col items-center">
            <Link
              to="/"
              onClick={scrollToTop}
              className="font-display font-bold text-2xl text-foreground hover:text-accent transition-colors inline-block"
            >
              FH<span className="text-accent">.</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
              Product UI/UX Designer crafting digital experiences with purpose and precision. Specialized in SaaS, Dashboards, and Complex Systems.
            </p>
            <div className="flex gap-4 justify-center">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mkfaruq" },
                { icon: Instagram, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:bg-accent/5 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Faruq Hossain. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            Back to Top
            <span className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;