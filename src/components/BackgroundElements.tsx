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
      {/* Concentric circles - top left */}
      <svg
        className="absolute top-[5%] left-[3%] w-32 h-32 opacity-[0.025] animate-float-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <circle cx="50" cy="50" r="48" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="40" stroke="#EBD448" strokeWidth="2" />
        <circle cx="50" cy="50" r="32" stroke="#E94381" strokeWidth="2" />
        <circle cx="50" cy="50" r="24" stroke="#2CC5BE" strokeWidth="2" />
        <circle cx="50" cy="50" r="8" fill="#EBD448" />
      </svg>

      {/* Triangle - top right - with rotation */}
      <svg
        className="absolute top-[8%] right-[6%] w-36 h-36 opacity-[0.02] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '45s' }}
      >
        <polygon points="50,5 95,90 5,90" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <polygon points="50,20 80,75 20,75" stroke="#EBD448" strokeWidth="2" fill="none" />
        <polygon points="50,35 65,60 35,60" stroke="#E94381" strokeWidth="2" fill="none" />
        <circle cx="50" cy="55" r="6" fill="#2CC5BE" />
      </svg>

      {/* Star - middle left - with rotation */}
      <svg
        className="absolute top-[32%] left-[2%] w-28 h-28 opacity-[0.03] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '60s' }}
      >
        <polygon 
          points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" 
          stroke="#EBD448" strokeWidth="2" fill="none" 
        />
        <polygon 
          points="50,20 56,40 75,40 60,52 66,72 50,60 34,72 40,52 25,40 44,40" 
          stroke="#E94381" strokeWidth="2" fill="none" 
        />
        <circle cx="50" cy="50" r="8" fill="#2CC5BE" />
      </svg>

      {/* Square/Diamond - top center - with rotation */}
      <svg
        className="absolute top-[3%] left-[38%] w-24 h-24 opacity-[0.025] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '50s' }}
      >
        <rect x="15" y="15" width="70" height="70" stroke="#FFFFFF" strokeWidth="2" transform="rotate(45 50 50)" />
        <rect x="25" y="25" width="50" height="50" stroke="#EBD448" strokeWidth="2" transform="rotate(45 50 50)" />
        <rect x="35" y="35" width="30" height="30" stroke="#E94381" strokeWidth="2" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="6" fill="#2CC5BE" />
      </svg>

      {/* Concentric squares - middle right */}
      <svg
        className="absolute top-[42%] right-[4%] w-40 h-40 opacity-[0.02] animate-pulse-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        <rect x="5" y="5" width="90" height="90" stroke="#FFFFFF" strokeWidth="2" />
        <rect x="15" y="15" width="70" height="70" stroke="#EBD448" strokeWidth="2" />
        <rect x="25" y="25" width="50" height="50" stroke="#E94381" strokeWidth="2" />
        <rect x="35" y="35" width="30" height="30" stroke="#2CC5BE" strokeWidth="2" />
        <circle cx="50" cy="50" r="8" fill="#E94381" />
      </svg>

      {/* Hexagon - bottom left - with rotation */}
      <svg
        className="absolute bottom-[18%] left-[5%] w-32 h-32 opacity-[0.03] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '55s', animationDirection: 'reverse' }}
      >
        <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" stroke="#FFFFFF" strokeWidth="2" />
        <polygon points="50,15 78,32 78,68 50,85 22,68 22,32" stroke="#EBD448" strokeWidth="2" />
        <polygon points="50,25 66,37 66,63 50,75 34,63 34,37" stroke="#E94381" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="#2CC5BE" />
      </svg>

      {/* Large star - bottom right - with rotation */}
      <svg
        className="absolute bottom-[8%] right-[3%] w-44 h-44 opacity-[0.025] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '70s' }}
      >
        <polygon 
          points="50,2 61,38 98,38 68,60 79,98 50,75 21,98 32,60 2,38 39,38" 
          stroke="#FFFFFF" strokeWidth="2" fill="none" 
        />
        <polygon 
          points="50,15 58,38 80,38 62,52 70,75 50,62 30,75 38,52 20,38 42,38" 
          stroke="#EBD448" strokeWidth="2" fill="none" 
        />
        <polygon 
          points="50,28 55,42 68,42 58,50 62,64 50,55 38,64 42,50 32,42 45,42" 
          stroke="#E94381" strokeWidth="2" fill="none" 
        />
        <circle cx="50" cy="50" r="6" fill="#2CC5BE" />
      </svg>

      {/* Cross/Plus - scattered */}
      <svg
        className="absolute top-[22%] right-[28%] w-16 h-16 opacity-[0.02] animate-float"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      >
        <line x1="50" y1="10" x2="50" y2="90" stroke="#EBD448" strokeWidth="4" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="#EBD448" strokeWidth="4" />
        <circle cx="50" cy="50" r="10" fill="#E94381" />
      </svg>

      {/* Triangle - middle - with rotation */}
      <svg
        className="absolute top-[58%] left-[22%] w-20 h-20 opacity-[0.025] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '40s', animationDirection: 'reverse' }}
      >
        <polygon points="50,10 90,85 10,85" stroke="#2CC5BE" strokeWidth="2" fill="none" />
        <polygon points="50,30 70,70 30,70" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <circle cx="50" cy="58" r="8" fill="#EBD448" />
      </svg>

      {/* Pentagon - right side - with rotation */}
      <svg
        className="absolute top-[72%] right-[20%] w-18 h-18 opacity-[0.03] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '65s' }}
      >
        <polygon points="50,5 95,38 77,92 23,92 5,38" stroke="#E94381" strokeWidth="2" fill="none" />
        <polygon points="50,20 80,42 68,80 32,80 20,42" stroke="#EBD448" strokeWidth="2" fill="none" />
        <circle cx="50" cy="55" r="10" fill="#2CC5BE" />
      </svg>

      {/* Concentric circles - center bottom */}
      <svg
        className="absolute bottom-[5%] left-[42%] w-32 h-32 opacity-[0.02] animate-float"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      >
        <circle cx="50" cy="50" r="45" stroke="#EBD448" strokeWidth="2" />
        <circle cx="50" cy="50" r="35" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="25" stroke="#E94381" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" stroke="#2CC5BE" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" fill="#EBD448" />
      </svg>

      {/* Diamond - upper left - with rotation */}
      <svg
        className="absolute top-[28%] left-[18%] w-16 h-16 opacity-[0.025] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '35s', animationDirection: 'reverse' }}
      >
        <rect x="20" y="20" width="60" height="60" stroke="#2CC5BE" strokeWidth="2" transform="rotate(45 50 50)" />
        <rect x="30" y="30" width="40" height="40" stroke="#FFFFFF" strokeWidth="2" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="8" fill="#E94381" />
      </svg>

      {/* Star - center - with rotation */}
      <svg
        className="absolute top-[52%] left-[48%] w-14 h-14 opacity-[0.02] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '50s' }}
      >
        <polygon 
          points="50,10 58,40 90,40 65,58 75,90 50,70 25,90 35,58 10,40 42,40" 
          stroke="#E94381" strokeWidth="2" fill="none" 
        />
        <circle cx="50" cy="52" r="10" fill="#2CC5BE" />
      </svg>

      {/* Hexagon - upper right */}
      <svg
        className="absolute top-[15%] left-[58%] w-18 h-18 opacity-[0.03] animate-float-reverse"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      >
        <polygon points="50,8 88,28 88,72 50,92 12,72 12,28" stroke="#2CC5BE" strokeWidth="2" />
        <polygon points="50,22 72,35 72,65 50,78 28,65 28,35" stroke="#EBD448" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="#E94381" />
      </svg>

      {/* Small triangles scattered - with rotation */}
      <svg
        className="absolute top-[68%] left-[8%] w-12 h-12 opacity-[0.025] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '30s' }}
      >
        <polygon points="50,15 85,80 15,80" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <circle cx="50" cy="60" r="12" fill="#EBD448" />
      </svg>

      <svg
        className="absolute top-[12%] right-[35%] w-10 h-10 opacity-[0.02] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '25s', animationDirection: 'reverse' }}
      >
        <polygon points="50,20 80,75 20,75" stroke="#E94381" strokeWidth="2" fill="none" />
        <circle cx="50" cy="58" r="10" fill="#2CC5BE" />
      </svg>

      {/* Small squares - with rotation */}
      <svg
        className="absolute bottom-[32%] right-[12%] w-14 h-14 opacity-[0.025] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '40s', animationDirection: 'reverse' }}
      >
        <rect x="15" y="15" width="70" height="70" stroke="#EBD448" strokeWidth="2" />
        <rect x="30" y="30" width="40" height="40" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="#E94381" />
      </svg>

      <svg
        className="absolute top-[38%] left-[32%] w-12 h-12 opacity-[0.02] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '35s' }}
      >
        <rect x="20" y="20" width="60" height="60" stroke="#2CC5BE" strokeWidth="2" />
        <circle cx="50" cy="50" r="12" fill="#EBD448" />
      </svg>

      {/* Glowing orbs */}
      <div 
        className="absolute top-[18%] right-[42%] w-6 h-6 rounded-full opacity-[0.025] blur-md animate-pulse-slow"
        style={{ backgroundColor: '#EBD448', transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute bottom-[28%] left-[38%] w-5 h-5 rounded-full opacity-[0.02] blur-md animate-float"
        style={{ backgroundColor: '#2CC5BE', animationDelay: '2s', transform: `translateY(${scrollY * -0.12}px)` }}
      />
      <div 
        className="absolute top-[48%] left-[55%] w-4 h-4 rounded-full opacity-[0.03] blur-md animate-float-reverse"
        style={{ backgroundColor: '#E94381', transform: `translateY(${scrollY * 0.08}px)` }}
      />
      <div 
        className="absolute top-[75%] right-[38%] w-5 h-5 rounded-full opacity-[0.025] blur-md animate-pulse-slow"
        style={{ backgroundColor: '#FFFFFF', animationDelay: '1s', transform: `translateY(${scrollY * -0.1}px)` }}
      />
    </div>
  );
};

export default BackgroundElements;
