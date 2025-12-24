import { ReactNode, useEffect, useState } from "react";

type ParallaxLayerProps = {
  className: string;
  mx?: number;
  my?: number;
  sy?: number;
  children: ReactNode;
};

const BackgroundElements = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    let scrollRaf = 0;
    const handleScroll = () => {
      if (scrollRaf) return;
      scrollRaf = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        scrollRaf = 0;
      });
    };

    let mouseRaf = 0;
    let nextX = 0;
    let nextY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      // Only apply parallax for mouse pointers (touch devices don't have a cursor)
      if (e.pointerType && e.pointerType !== "mouse") return;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      nextX = (e.clientX - centerX) / centerX;
      nextY = (e.clientY - centerY) / centerY;

      if (mouseRaf) return;
      mouseRaf = window.requestAnimationFrame(() => {
        setMouseX(nextX);
        setMouseY(nextY);
        mouseRaf = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
      if (scrollRaf) window.cancelAnimationFrame(scrollRaf);
      if (mouseRaf) window.cancelAnimationFrame(mouseRaf);
    };
  }, []);

  const ParallaxLayer = ({ className, mx = 0, my = 0, sy = 0, children }: ParallaxLayerProps) => (
    <div
      className={className}
      style={{
        transform: `translate3d(${mouseX * mx * 0.35}px, ${mouseY * my * 0.35 + scrollY * sy}px, 0)`,
        transition: "transform 2000ms cubic-bezier(0.42, 0, 0.58, 1)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-visible -z-10">
      {/* Concentric circles - top left */}
      <ParallaxLayer
        className="absolute top-[5%] left-[3%] w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-[0.04]"
        mx={60}
        my={60}
        sy={0.1}
      >
        <svg className="w-full h-full animate-float-slow" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" className="stroke-foreground/50" strokeWidth="2" />
          <circle cx="50" cy="50" r="40" className="stroke-primary/60" strokeWidth="2" />
          <circle cx="50" cy="50" r="32" className="stroke-accent/60" strokeWidth="2" />
          <circle cx="50" cy="50" r="24" className="stroke-secondary/60" strokeWidth="2" />
          <circle cx="50" cy="50" r="8" className="fill-primary/60" />
        </svg>
      </ParallaxLayer>

      {/* Triangle - top right - with rotation */}
      <ParallaxLayer
        className="absolute top-[8%] right-[6%] w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 opacity-[0.04]"
        mx={-80}
        my={50}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "45s" }}
        >
          <polygon points="50,5 95,90 5,90" className="stroke-foreground/50" strokeWidth="2" fill="none" />
          <polygon points="50,20 80,75 20,75" className="stroke-primary/60" strokeWidth="2" fill="none" />
          <polygon points="50,35 65,60 35,60" className="stroke-accent/60" strokeWidth="2" fill="none" />
          <circle cx="50" cy="55" r="6" className="fill-secondary/60" />
        </svg>
      </ParallaxLayer>

      {/* Star - middle left - with rotation */}
      <ParallaxLayer
        className="absolute top-[32%] left-[2%] w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 opacity-[0.04]"
        mx={100}
        my={80}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "60s" }}
        >
          <polygon
            points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
            className="stroke-primary/60"
            strokeWidth="2"
            fill="none"
          />
          <polygon
            points="50,20 56,40 75,40 60,52 66,72 50,60 34,72 40,52 25,40 44,40"
            className="stroke-accent/60"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="50" cy="50" r="8" className="fill-secondary/60" />
        </svg>
      </ParallaxLayer>

      {/* Square/Diamond - top center - with rotation */}
      <ParallaxLayer
        className="absolute top-[3%] left-[38%] w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 opacity-[0.04]"
        mx={-40}
        my={50}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "50s" }}
        >
          <rect x="15" y="15" width="70" height="70" className="stroke-foreground/50" strokeWidth="2" transform="rotate(45 50 50)" />
          <rect x="25" y="25" width="50" height="50" className="stroke-primary/60" strokeWidth="2" transform="rotate(45 50 50)" />
          <rect x="35" y="35" width="30" height="30" className="stroke-accent/60" strokeWidth="2" transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="6" className="fill-secondary/60" />
        </svg>
      </ParallaxLayer>

      {/* Hexagon - bottom left - with rotation */}
      <ParallaxLayer
        className="absolute bottom-[18%] left-[5%] w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-[0.04]"
        mx={70}
        my={-60}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "55s", animationDirection: "reverse" }}
        >
          <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" className="stroke-foreground/50" strokeWidth="2" />
          <polygon points="50,15 78,32 78,68 50,85 22,68 22,32" className="stroke-primary/60" strokeWidth="2" />
          <polygon points="50,25 66,37 66,63 50,75 34,63 34,37" className="stroke-accent/60" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" className="fill-secondary/60" />
        </svg>
      </ParallaxLayer>

      {/* Large star - bottom right - with rotation */}
      <ParallaxLayer
        className="absolute bottom-[8%] right-[3%] w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 opacity-[0.04]"
        mx={-100}
        my={-80}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "70s" }}
        >
          <polygon
            points="50,2 61,38 98,38 68,60 79,98 50,75 21,98 32,60 2,38 39,38"
            className="stroke-foreground/50"
            strokeWidth="2"
            fill="none"
          />
          <polygon
            points="50,15 58,38 80,38 62,52 70,75 50,62 30,75 38,52 20,38 42,38"
            className="stroke-primary/60"
            strokeWidth="2"
            fill="none"
          />
          <polygon
            points="50,28 55,42 68,42 58,50 62,64 50,55 38,64 42,50 32,42 45,42"
            className="stroke-accent/60"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="50" cy="50" r="6" className="fill-secondary/60" />
        </svg>
      </ParallaxLayer>

      {/* Cross/Plus - scattered */}
      <ParallaxLayer
        className="absolute top-[22%] right-[28%] w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-[0.04]"
        mx={-50}
        my={40}
        sy={0.12}
      >
        <svg className="w-full h-full animate-float" viewBox="0 0 100 100" fill="none">
          <line x1="50" y1="10" x2="50" y2="90" className="stroke-primary/60" strokeWidth="4" />
          <line x1="10" y1="50" x2="90" y2="50" className="stroke-primary/60" strokeWidth="4" />
          <circle cx="50" cy="50" r="10" className="fill-accent/60" />
        </svg>
      </ParallaxLayer>

      {/* Triangle - middle - with rotation */}
      <ParallaxLayer
        className="absolute top-[58%] left-[22%] w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 opacity-[0.04]"
        mx={80}
        my={60}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "40s", animationDirection: "reverse" }}
        >
          <polygon points="50,10 90,85 10,85" className="stroke-secondary/60" strokeWidth="2" fill="none" />
          <polygon points="50,30 70,70 30,70" className="stroke-foreground/50" strokeWidth="2" fill="none" />
          <circle cx="50" cy="58" r="8" className="fill-primary/60" />
        </svg>
      </ParallaxLayer>

      {/* Pentagon - right side - with rotation */}
      <ParallaxLayer
        className="absolute top-[72%] right-[20%] w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 opacity-[0.04]"
        mx={-70}
        my={-50}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "65s" }}
        >
          <polygon points="50,5 95,38 77,92 23,92 5,38" className="stroke-accent/60" strokeWidth="2" fill="none" />
          <polygon points="50,20 80,42 68,80 32,80 20,42" className="stroke-primary/60" strokeWidth="2" fill="none" />
          <circle cx="50" cy="55" r="10" className="fill-secondary/60" />
        </svg>
      </ParallaxLayer>

      {/* Concentric circles - center bottom */}
      <ParallaxLayer
        className="absolute bottom-[5%] left-[42%] w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-[0.04]"
        mx={40}
        my={-70}
        sy={-0.08}
      >
        <svg className="w-full h-full animate-float" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" className="stroke-primary/60" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" className="stroke-foreground/50" strokeWidth="2" />
          <circle cx="50" cy="50" r="25" className="stroke-accent/60" strokeWidth="2" />
          <circle cx="50" cy="50" r="15" className="stroke-secondary/60" strokeWidth="2" />
          <circle cx="50" cy="50" r="6" className="fill-primary/60" />
        </svg>
      </ParallaxLayer>

      {/* Diamond - upper left - with rotation */}
      <ParallaxLayer
        className="absolute top-[28%] left-[18%] w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-[0.04]"
        mx={90}
        my={70}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "35s", animationDirection: "reverse" }}
        >
          <rect x="20" y="20" width="60" height="60" className="stroke-secondary/60" strokeWidth="2" transform="rotate(45 50 50)" />
          <rect x="30" y="30" width="40" height="40" className="stroke-foreground/50" strokeWidth="2" transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="8" className="fill-accent/60" />
        </svg>
      </ParallaxLayer>

      {/* Star - center - with rotation */}
      <ParallaxLayer
        className="absolute top-[52%] left-[48%] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 opacity-[0.04]"
        mx={-30}
        my={40}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "50s" }}
        >
          <polygon
            points="50,10 58,40 90,40 65,58 75,90 50,70 25,90 35,58 10,40 42,40"
            className="stroke-accent/60"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="50" cy="52" r="10" className="fill-secondary/60" />
        </svg>
      </ParallaxLayer>

      {/* Hexagon - upper right */}
      <ParallaxLayer
        className="absolute top-[15%] left-[58%] w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 opacity-[0.04]"
        mx={-60}
        my={50}
        sy={0.18}
      >
        <svg className="w-full h-full animate-float-reverse" viewBox="0 0 100 100" fill="none">
          <polygon points="50,8 88,28 88,72 50,92 12,72 12,28" className="stroke-secondary/60" strokeWidth="2" />
          <polygon points="50,22 72,35 72,65 50,78 28,65 28,35" className="stroke-primary/60" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" className="fill-accent/60" />
        </svg>
      </ParallaxLayer>

      {/* Small triangles scattered - with rotation */}
      <ParallaxLayer
        className="absolute top-[68%] left-[8%] w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 opacity-[0.04]"
        mx={80}
        my={-40}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "30s" }}
        >
          <polygon points="50,15 85,80 15,80" className="stroke-foreground/50" strokeWidth="2" fill="none" />
          <circle cx="50" cy="60" r="12" className="fill-primary/60" />
        </svg>
      </ParallaxLayer>

      <ParallaxLayer
        className="absolute top-[12%] right-[35%] w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 opacity-[0.04]"
        mx={-55}
        my={35}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "25s", animationDirection: "reverse" }}
        >
          <polygon points="50,20 80,75 20,75" className="stroke-accent/60" strokeWidth="2" fill="none" />
          <circle cx="50" cy="58" r="10" className="fill-secondary/60" />
        </svg>
      </ParallaxLayer>

      {/* Small squares - with rotation */}
      <ParallaxLayer
        className="absolute bottom-[32%] right-[12%] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 opacity-[0.04]"
        mx={-90}
        my={-60}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "40s", animationDirection: "reverse" }}
        >
          <rect x="15" y="15" width="70" height="70" className="stroke-primary/60" strokeWidth="2" />
          <rect x="30" y="30" width="40" height="40" className="stroke-foreground/50" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" className="fill-accent/60" />
        </svg>
      </ParallaxLayer>

      <ParallaxLayer
        className="absolute top-[38%] left-[32%] w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 opacity-[0.04]"
        mx={65}
        my={50}
      >
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          style={{ animationDuration: "35s" }}
        >
          <rect x="20" y="20" width="60" height="60" className="stroke-secondary/60" strokeWidth="2" />
          <circle cx="50" cy="50" r="12" className="fill-primary/60" />
        </svg>
      </ParallaxLayer>

      {/* Glowing orbs */}
      <ParallaxLayer
        className="absolute top-[18%] right-[42%] w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 opacity-[0.04]"
        mx={-40}
        my={30}
        sy={0.1}
      >
        <div className="w-full h-full rounded-full bg-primary/20 blur-md animate-pulse-slow" />
      </ParallaxLayer>

      <ParallaxLayer
        className="absolute bottom-[28%] left-[38%] w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 opacity-[0.04]"
        mx={50}
        my={-40}
        sy={-0.12}
      >
        <div className="w-full h-full rounded-full bg-secondary/20 blur-md animate-float" style={{ animationDelay: "2s" }} />
      </ParallaxLayer>

      <ParallaxLayer
        className="absolute top-[48%] left-[55%] w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 opacity-[0.04]"
        mx={-30}
        my={25}
        sy={0.08}
      >
        <div className="w-full h-full rounded-full bg-accent/20 blur-md animate-float-reverse" />
      </ParallaxLayer>

      <ParallaxLayer
        className="absolute top-[75%] right-[38%] w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 opacity-[0.04]"
        mx={-55}
        my={-35}
        sy={-0.1}
      >
        <div className="w-full h-full rounded-full bg-foreground/20 blur-md animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </ParallaxLayer>
    </div>
  );
};

export default BackgroundElements;
