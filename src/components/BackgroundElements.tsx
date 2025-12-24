import { useEffect, useState } from "react";

const BackgroundElements = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range from center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMouseX((e.clientX - centerX) / centerX);
      setMouseY((e.clientY - centerY) / centerY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-visible -z-10">
      {/* Concentric circles - top left */}
      <svg
        className="absolute top-[5%] left-[3%] w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-[0.04] animate-float-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          transform: `translate(${mouseX * 60}px, ${mouseY * 60 + scrollY * 0.1}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <circle cx="50" cy="50" r="48" className="stroke-foreground/50" strokeWidth="2" />
        <circle cx="50" cy="50" r="40" className="stroke-primary/60" strokeWidth="2" />
        <circle cx="50" cy="50" r="32" className="stroke-accent/60" strokeWidth="2" />
        <circle cx="50" cy="50" r="24" className="stroke-secondary/60" strokeWidth="2" />
        <circle cx="50" cy="50" r="8" className="fill-primary/60" />
      </svg>

      {/* Triangle - top right - with rotation */}
      <svg
        className="absolute top-[8%] right-[6%] w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '45s', 
          transform: `translate(${mouseX * -80}px, ${mouseY * 50}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <polygon points="50,5 95,90 5,90" className="stroke-foreground/50" strokeWidth="2" fill="none" />
        <polygon points="50,20 80,75 20,75" className="stroke-primary/60" strokeWidth="2" fill="none" />
        <polygon points="50,35 65,60 35,60" className="stroke-accent/60" strokeWidth="2" fill="none" />
        <circle cx="50" cy="55" r="6" className="fill-secondary/60" />
      </svg>

      {/* Star - middle left - with rotation */}
      <svg
        className="absolute top-[32%] left-[2%] w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '60s', 
          transform: `translate(${mouseX * 100}px, ${mouseY * 80}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <polygon 
          points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" 
          className="stroke-primary/60" strokeWidth="2" fill="none" 
        />
        <polygon 
          points="50,20 56,40 75,40 60,52 66,72 50,60 34,72 40,52 25,40 44,40" 
          className="stroke-accent/60" strokeWidth="2" fill="none" 
        />
        <circle cx="50" cy="50" r="8" className="fill-secondary/60" />
      </svg>

      {/* Square/Diamond - top center - with rotation */}
      <svg
        className="absolute top-[3%] left-[38%] w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '50s', 
          transform: `translate(${mouseX * -40}px, ${mouseY * 50}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <rect x="15" y="15" width="70" height="70" className="stroke-foreground/50" strokeWidth="2" transform="rotate(45 50 50)" />
        <rect x="25" y="25" width="50" height="50" className="stroke-primary/60" strokeWidth="2" transform="rotate(45 50 50)" />
        <rect x="35" y="35" width="30" height="30" className="stroke-accent/60" strokeWidth="2" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="6" className="fill-secondary/60" />
      </svg>

      {/* Hexagon - bottom left - with rotation */}
      <svg
        className="absolute bottom-[18%] left-[5%] w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '55s', 
          animationDirection: 'reverse', 
          transform: `translate(${mouseX * 70}px, ${mouseY * -60}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" className="stroke-foreground/50" strokeWidth="2" />
        <polygon points="50,15 78,32 78,68 50,85 22,68 22,32" className="stroke-primary/60" strokeWidth="2" />
        <polygon points="50,25 66,37 66,63 50,75 34,63 34,37" className="stroke-accent/60" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" className="fill-secondary/60" />
      </svg>

      {/* Large star - bottom right - with rotation */}
      <svg
        className="absolute bottom-[8%] right-[3%] w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '70s', 
          transform: `translate(${mouseX * -100}px, ${mouseY * -80}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <polygon 
          points="50,2 61,38 98,38 68,60 79,98 50,75 21,98 32,60 2,38 39,38" 
          className="stroke-foreground/50" strokeWidth="2" fill="none" 
        />
        <polygon 
          points="50,15 58,38 80,38 62,52 70,75 50,62 30,75 38,52 20,38 42,38" 
          className="stroke-primary/60" strokeWidth="2" fill="none" 
        />
        <polygon 
          points="50,28 55,42 68,42 58,50 62,64 50,55 38,64 42,50 32,42 45,42" 
          className="stroke-accent/60" strokeWidth="2" fill="none" 
        />
        <circle cx="50" cy="50" r="6" className="fill-secondary/60" />
      </svg>

      {/* Cross/Plus - scattered */}
      <svg
        className="absolute top-[22%] right-[28%] w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-[0.04] animate-float"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          transform: `translate(${mouseX * -50}px, ${mouseY * 40 + scrollY * 0.12}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <line x1="50" y1="10" x2="50" y2="90" className="stroke-primary/60" strokeWidth="4" />
        <line x1="10" y1="50" x2="90" y2="50" className="stroke-primary/60" strokeWidth="4" />
        <circle cx="50" cy="50" r="10" className="fill-accent/60" />
      </svg>

      {/* Triangle - middle - with rotation */}
      <svg
        className="absolute top-[58%] left-[22%] w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '40s', 
          animationDirection: 'reverse', 
          transform: `translate(${mouseX * 80}px, ${mouseY * 60}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <polygon points="50,10 90,85 10,85" className="stroke-secondary/60" strokeWidth="2" fill="none" />
        <polygon points="50,30 70,70 30,70" className="stroke-foreground/50" strokeWidth="2" fill="none" />
        <circle cx="50" cy="58" r="8" className="fill-primary/60" />
      </svg>

      {/* Pentagon - right side - with rotation */}
      <svg
        className="absolute top-[72%] right-[20%] w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '65s', 
          transform: `translate(${mouseX * -70}px, ${mouseY * -50}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <polygon points="50,5 95,38 77,92 23,92 5,38" className="stroke-accent/60" strokeWidth="2" fill="none" />
        <polygon points="50,20 80,42 68,80 32,80 20,42" className="stroke-primary/60" strokeWidth="2" fill="none" />
        <circle cx="50" cy="55" r="10" className="fill-secondary/60" />
      </svg>

      {/* Concentric circles - center bottom */}
      <svg
        className="absolute bottom-[5%] left-[42%] w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-[0.04] animate-float"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          transform: `translate(${mouseX * 40}px, ${mouseY * -70 + scrollY * -0.08}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <circle cx="50" cy="50" r="45" className="stroke-primary/60" strokeWidth="2" />
        <circle cx="50" cy="50" r="35" className="stroke-foreground/50" strokeWidth="2" />
        <circle cx="50" cy="50" r="25" className="stroke-accent/60" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" className="stroke-secondary/60" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" className="fill-primary/60" />
      </svg>

      {/* Diamond - upper left - with rotation */}
      <svg
        className="absolute top-[28%] left-[18%] w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '35s', 
          animationDirection: 'reverse', 
          transform: `translate(${mouseX * 90}px, ${mouseY * 70}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <rect x="20" y="20" width="60" height="60" className="stroke-secondary/60" strokeWidth="2" transform="rotate(45 50 50)" />
        <rect x="30" y="30" width="40" height="40" className="stroke-foreground/50" strokeWidth="2" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="8" className="fill-accent/60" />
      </svg>

      {/* Star - center - with rotation */}
      <svg
        className="absolute top-[52%] left-[48%] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '50s', 
          transform: `translate(${mouseX * -30}px, ${mouseY * 40}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <polygon 
          points="50,10 58,40 90,40 65,58 75,90 50,70 25,90 35,58 10,40 42,40" 
          className="stroke-accent/60" strokeWidth="2" fill="none" 
        />
        <circle cx="50" cy="52" r="10" className="fill-secondary/60" />
      </svg>

      {/* Hexagon - upper right */}
      <svg
        className="absolute top-[15%] left-[58%] w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 opacity-[0.04] animate-float-reverse"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          transform: `translate(${mouseX * -60}px, ${mouseY * 50 + scrollY * 0.18}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <polygon points="50,8 88,28 88,72 50,92 12,72 12,28" className="stroke-secondary/60" strokeWidth="2" />
        <polygon points="50,22 72,35 72,65 50,78 28,65 28,35" className="stroke-primary/60" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" className="fill-accent/60" />
      </svg>

      {/* Small triangles scattered - with rotation */}
      <svg
        className="absolute top-[68%] left-[8%] w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '30s', 
          transform: `translate(${mouseX * 80}px, ${mouseY * -40}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <polygon points="50,15 85,80 15,80" className="stroke-foreground/50" strokeWidth="2" fill="none" />
        <circle cx="50" cy="60" r="12" className="fill-primary/60" />
      </svg>

      <svg
        className="absolute top-[12%] right-[35%] w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '25s', 
          animationDirection: 'reverse', 
          transform: `translate(${mouseX * -55}px, ${mouseY * 35}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <polygon points="50,20 80,75 20,75" className="stroke-accent/60" strokeWidth="2" fill="none" />
        <circle cx="50" cy="58" r="10" className="fill-secondary/60" />
      </svg>

      {/* Small squares - with rotation */}
      <svg
        className="absolute bottom-[32%] right-[12%] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '40s', 
          animationDirection: 'reverse', 
          transform: `translate(${mouseX * -90}px, ${mouseY * -60}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <rect x="15" y="15" width="70" height="70" className="stroke-primary/60" strokeWidth="2" />
        <rect x="30" y="30" width="40" height="40" className="stroke-foreground/50" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" className="fill-accent/60" />
      </svg>

      <svg
        className="absolute top-[38%] left-[32%] w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 opacity-[0.04] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ 
          animationDuration: '35s', 
          transform: `translate(${mouseX * 65}px, ${mouseY * 50}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <rect x="20" y="20" width="60" height="60" className="stroke-secondary/60" strokeWidth="2" />
        <circle cx="50" cy="50" r="12" className="fill-primary/60" />
      </svg>

      {/* Glowing orbs */}
      <div 
        className="absolute top-[18%] right-[42%] w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-primary/20 opacity-[0.04] blur-md animate-pulse-slow"
        style={{ 
          transform: `translate(${mouseX * -40}px, ${mouseY * 30 + scrollY * 0.1}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      />
      <div 
        className="absolute bottom-[28%] left-[38%] w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 rounded-full bg-secondary/20 opacity-[0.04] blur-md animate-float"
        style={{ 
          animationDelay: '2s', 
          transform: `translate(${mouseX * 50}px, ${mouseY * -40 + scrollY * -0.12}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      />
      <div 
        className="absolute top-[48%] left-[55%] w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-accent/20 opacity-[0.04] blur-md animate-float-reverse"
        style={{ 
          transform: `translate(${mouseX * -30}px, ${mouseY * 25 + scrollY * 0.08}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      />
      <div 
        className="absolute top-[75%] right-[38%] w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 rounded-full bg-foreground/20 opacity-[0.04] blur-md animate-pulse-slow"
        style={{ 
          animationDelay: '1s', 
          transform: `translate(${mouseX * -55}px, ${mouseY * -35 + scrollY * -0.1}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      />
    </div>
  );
};

export default BackgroundElements;
