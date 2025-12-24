import { useEffect, useState } from "react";

const BackgroundElements = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-visible z-[1]">
      {/* Floating circles - top left - Purple */}
      <svg
        className="absolute top-[8%] left-[5%] w-28 h-28 animate-float-slow drop-shadow-[0_0_15px_hsl(270_70%_60%/0.05)]"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <circle cx="50" cy="50" r="45" stroke="hsl(270 70% 60% / 0.05)" strokeWidth="2" />
        <circle cx="50" cy="50" r="30" stroke="hsl(270 70% 60% / 0.03)" strokeWidth="1" />
      </svg>

      {/* Grid pattern - top right - Cyan */}
      <svg
        className="absolute top-[15%] right-[8%] w-36 h-36 animate-float-reverse drop-shadow-[0_0_12px_hsl(180_70%_50%/0.05)]"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <line x1="0" y1="25" x2="100" y2="25" stroke="hsl(180 70% 50% / 0.05)" strokeWidth="1" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="hsl(180 70% 50% / 0.05)" strokeWidth="1" />
        <line x1="0" y1="75" x2="100" y2="75" stroke="hsl(180 70% 50% / 0.05)" strokeWidth="1" />
        <line x1="25" y1="0" x2="25" y2="100" stroke="hsl(180 70% 50% / 0.05)" strokeWidth="1" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="hsl(180 70% 50% / 0.05)" strokeWidth="1" />
        <line x1="75" y1="0" x2="75" y2="100" stroke="hsl(180 70% 50% / 0.05)" strokeWidth="1" />
      </svg>

      {/* Triangle - left side - Pink */}
      <svg
        className="absolute top-[35%] left-[3%] w-24 h-24 animate-spin-slow drop-shadow-[0_0_18px_hsl(330_70%_60%/0.05)]"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <polygon points="50,10 90,80 10,80" stroke="hsl(330 70% 60% / 0.05)" strokeWidth="2" fill="none" />
      </svg>

      {/* Cross/Plus - right side - Orange */}
      <svg
        className="absolute top-[55%] right-[5%] w-20 h-20 animate-pulse-slow drop-shadow-[0_0_20px_hsl(30_80%_55%/0.05)]"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        <line x1="50" y1="10" x2="50" y2="90" stroke="hsl(30 80% 55% / 0.05)" strokeWidth="3" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(30 80% 55% / 0.05)" strokeWidth="3" />
      </svg>

      {/* Dots pattern - bottom right - Green */}
      <svg
        className="absolute bottom-[12%] right-[12%] w-32 h-32 animate-float drop-shadow-[0_0_10px_hsl(150_60%_50%/0.05)]"
        viewBox="0 0 100 100"
        fill="hsl(150 60% 50% / 0.05)"
        style={{ transform: `translateY(${scrollY * -0.12}px)` }}
      >
        {[0, 25, 50, 75].map((x) =>
          [0, 25, 50, 75].map((y) => (
            <circle key={`${x}-${y}`} cx={x + 12.5} cy={y + 12.5} r="4" />
          ))
        )}
      </svg>

      {/* Hexagon - left middle - Blue */}
      <svg
        className="absolute top-[60%] left-[8%] w-20 h-20 animate-float-reverse drop-shadow-[0_0_15px_hsl(210_80%_55%/0.05)]"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * -0.18}px)` }}
      >
        <polygon 
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
          stroke="hsl(210 80% 55% / 0.05)"
          strokeWidth="2"
        />
      </svg>

      {/* Squiggle line - center right - Yellow */}
      <svg
        className="absolute top-[40%] right-[20%] w-28 h-14 animate-float-slow drop-shadow-[0_0_12px_hsl(50_80%_55%/0.05)]"
        viewBox="0 0 100 50"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.14}px)` }}
      >
        <path 
          d="M0,25 Q25,0 50,25 T100,25" 
          stroke="hsl(50 80% 55% / 0.05)"
          strokeWidth="2"
        />
      </svg>

      {/* Diamond - bottom left - Red */}
      <svg
        className="absolute bottom-[20%] left-[15%] w-18 h-18 animate-spin-slow drop-shadow-[0_0_18px_hsl(0_70%_55%/0.05)]"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '25s', transform: `translateY(${scrollY * -0.1}px)` }}
      >
        <rect 
          x="15" y="15" 
          width="70" height="70" 
          stroke="hsl(0 70% 55% / 0.05)"
          strokeWidth="2"
          transform="rotate(45 50 50)"
        />
      </svg>

      {/* Arc - top center - Teal */}
      <svg
        className="absolute top-[5%] left-[35%] w-24 h-24 animate-pulse-slow drop-shadow-[0_0_15px_hsl(170_70%_50%/0.05)]"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.22}px)` }}
      >
        <path 
          d="M20,80 A40,40 0 1,1 80,80" 
          stroke="hsl(170 70% 50% / 0.05)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Star - center left - Violet */}
      <svg
        className="absolute top-[25%] left-[25%] w-16 h-16 animate-float drop-shadow-[0_0_20px_hsl(290_70%_60%/0.05)]"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.16}px)` }}
      >
        <polygon 
          points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" 
          stroke="hsl(290 70% 60% / 0.05)"
          strokeWidth="2"
        />
      </svg>

      {/* Spiral - bottom center - Indigo */}
      <svg
        className="absolute bottom-[8%] left-[45%] w-20 h-20 animate-spin-slow drop-shadow-[0_0_15px_hsl(240_70%_60%/0.05)]"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '30s', transform: `translateY(${scrollY * -0.08}px)` }}
      >
        <path 
          d="M50,50 m0,-40 a40,40 0 1,1 0,80 a30,30 0 1,1 0,-60 a20,20 0 1,1 0,40" 
          stroke="hsl(240 70% 60% / 0.05)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Small ring - top right area - Coral */}
      <svg
        className="absolute top-[30%] right-[30%] w-14 h-14 animate-pulse-slow drop-shadow-[0_0_12px_hsl(15_80%_55%/0.05)]"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      >
        <circle cx="50" cy="50" r="40" stroke="hsl(15 80% 55% / 0.05)" strokeWidth="3" />
      </svg>

      {/* Zigzag - right side middle - Lime */}
      <svg
        className="absolute top-[70%] right-[15%] w-24 h-16 animate-float-reverse drop-shadow-[0_0_10px_hsl(80_70%_50%/0.05)]"
        viewBox="0 0 100 60"
        fill="none"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      >
        <polyline 
          points="0,30 20,10 40,50 60,10 80,50 100,30" 
          stroke="hsl(80 70% 50% / 0.05)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Glowing orbs with different colors */}
      <div 
        className="absolute top-[18%] right-[40%] w-6 h-6 rounded-full bg-[hsl(270_70%_60%/0.05)] blur-md animate-pulse-slow"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute bottom-[25%] left-[40%] w-5 h-5 rounded-full bg-[hsl(180_70%_50%/0.05)] blur-md animate-float"
        style={{ animationDelay: '2s', transform: `translateY(${scrollY * -0.12}px)` }}
      />
      <div 
        className="absolute top-[45%] left-[50%] w-4 h-4 rounded-full bg-[hsl(330_70%_60%/0.05)] blur-md animate-float-reverse"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />
      <div 
        className="absolute top-[75%] right-[35%] w-5 h-5 rounded-full bg-[hsl(30_80%_55%/0.05)] blur-md animate-pulse-slow"
        style={{ animationDelay: '1s', transform: `translateY(${scrollY * -0.1}px)` }}
      />
      <div 
        className="absolute top-[10%] right-[55%] w-4 h-4 rounded-full bg-[hsl(150_60%_50%/0.05)] blur-md animate-float-slow"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      />
      <div 
        className="absolute bottom-[35%] right-[45%] w-6 h-6 rounded-full bg-[hsl(210_80%_55%/0.05)] blur-md animate-float"
        style={{ animationDelay: '3s', transform: `translateY(${scrollY * -0.14}px)` }}
      />
    </div>
  );
};

export default BackgroundElements;
