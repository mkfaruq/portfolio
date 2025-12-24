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
      {/* Concentric circles - top left - White/Yellow/Pink/Teal */}
      <svg
        className="absolute top-[5%] left-[3%] w-32 h-32 opacity-[0.07] animate-float-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <circle cx="50" cy="50" r="48" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="40" stroke="#EBD448" strokeWidth="2" />
        <circle cx="50" cy="50" r="32" stroke="#E94381" strokeWidth="2" />
        <circle cx="50" cy="50" r="24" stroke="#2CC5BE" strokeWidth="2" />
        <circle cx="50" cy="50" r="16" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="8" fill="#EBD448" />
      </svg>

      {/* Concentric circles - top right */}
      <svg
        className="absolute top-[8%] right-[5%] w-40 h-40 opacity-[0.07] animate-float-reverse"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <circle cx="50" cy="50" r="48" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="40" stroke="#EBD448" strokeWidth="2" />
        <circle cx="50" cy="50" r="32" stroke="#E94381" strokeWidth="2" />
        <circle cx="50" cy="50" r="24" stroke="#2CC5BE" strokeWidth="2" />
        <circle cx="50" cy="50" r="16" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="#2CC5BE" />
      </svg>

      {/* Target circles - middle left */}
      <svg
        className="absolute top-[35%] left-[2%] w-36 h-36 opacity-[0.07] animate-float"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <circle cx="50" cy="50" r="45" stroke="#2CC5BE" strokeWidth="3" />
        <circle cx="50" cy="50" r="35" stroke="#E94381" strokeWidth="2" />
        <circle cx="50" cy="50" r="25" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="12" fill="#EBD448" />
        <circle cx="50" cy="50" r="5" fill="#0F3677" />
      </svg>

      {/* Quarter arc circle - top center */}
      <svg
        className="absolute top-[3%] left-[35%] w-28 h-28 opacity-[0.07] animate-pulse-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.22}px)` }}
      >
        <path d="M50 5 A45 45 0 0 1 95 50" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <path d="M50 15 A35 35 0 0 1 85 50" stroke="#EBD448" strokeWidth="2" fill="none" />
        <circle cx="50" cy="50" r="20" stroke="#E94381" strokeWidth="2" />
        <circle cx="50" cy="50" r="8" fill="#2CC5BE" />
      </svg>

      {/* Rings with center dot - middle right */}
      <svg
        className="absolute top-[45%] right-[4%] w-44 h-44 opacity-[0.07] animate-pulse-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        <circle cx="50" cy="50" r="48" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="38" stroke="#EBD448" strokeWidth="2" />
        <circle cx="50" cy="50" r="28" stroke="#E94381" strokeWidth="2" />
        <circle cx="50" cy="50" r="18" stroke="#2CC5BE" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="#E94381" />
        <circle cx="50" cy="50" r="4" fill="#0F3677" />
      </svg>

      {/* Pac-man style circle - bottom left */}
      <svg
        className="absolute bottom-[18%] left-[6%] w-32 h-32 opacity-[0.07] animate-float-reverse"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * -0.12}px)` }}
      >
        <circle cx="50" cy="50" r="45" stroke="#FFFFFF" strokeWidth="2" />
        <path d="M50 50 L50 5 A45 45 0 1 1 5 50 Z" stroke="#E94381" strokeWidth="2" fill="none" />
        <circle cx="50" cy="50" r="15" fill="#2CC5BE" />
        <circle cx="50" cy="50" r="6" fill="#0F3677" />
      </svg>

      {/* Large concentric - bottom right */}
      <svg
        className="absolute bottom-[8%] right-[3%] w-48 h-48 opacity-[0.07] animate-float-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * -0.18}px)` }}
      >
        <circle cx="50" cy="50" r="48" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="42" stroke="#EBD448" strokeWidth="2" />
        <circle cx="50" cy="50" r="36" stroke="#E94381" strokeWidth="2" />
        <circle cx="50" cy="50" r="30" stroke="#2CC5BE" strokeWidth="2" />
        <circle cx="50" cy="50" r="24" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="18" stroke="#EBD448" strokeWidth="2" />
        <circle cx="50" cy="50" r="12" fill="#E94381" />
        <circle cx="50" cy="50" r="5" fill="#0F3677" />
      </svg>

      {/* Small filled circles scattered */}
      <svg
        className="absolute top-[22%] right-[28%] w-10 h-10 opacity-[0.07] animate-float"
        viewBox="0 0 100 100"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      >
        <circle cx="50" cy="50" r="45" fill="#EBD448" />
        <circle cx="50" cy="50" r="20" fill="#0F3677" />
      </svg>

      <svg
        className="absolute top-[60%] left-[22%] w-14 h-14 opacity-[0.07] animate-pulse-slow"
        viewBox="0 0 100 100"
        style={{ transform: `translateY(${scrollY * 0.16}px)` }}
      >
        <circle cx="50" cy="50" r="45" fill="#2CC5BE" />
        <circle cx="50" cy="50" r="20" fill="#0F3677" />
      </svg>

      <svg
        className="absolute top-[75%] right-[22%] w-12 h-12 opacity-[0.07] animate-float-reverse"
        viewBox="0 0 100 100"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      >
        <circle cx="50" cy="50" r="45" fill="#E94381" />
        <circle cx="50" cy="50" r="20" fill="#0F3677" />
      </svg>

      {/* Semi-circle arc - center bottom */}
      <svg
        className="absolute bottom-[5%] left-[40%] w-36 h-36 opacity-[0.07] animate-float"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      >
        <path d="M5 50 A45 45 0 0 1 95 50" stroke="#EBD448" strokeWidth="3" />
        <path d="M15 50 A35 35 0 0 1 85 50" stroke="#FFFFFF" strokeWidth="2" />
        <path d="M25 50 A25 25 0 0 1 75 50" stroke="#E94381" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="#2CC5BE" />
      </svg>

      {/* Additional scattered rings */}
      <svg
        className="absolute top-[28%] left-[18%] w-20 h-20 opacity-[0.07] animate-float-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.14}px)` }}
      >
        <circle cx="50" cy="50" r="45" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="30" stroke="#2CC5BE" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill="#EBD448" />
      </svg>

      <svg
        className="absolute top-[55%] left-[45%] w-16 h-16 opacity-[0.07] animate-pulse-slow"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <circle cx="50" cy="50" r="45" stroke="#E94381" strokeWidth="2" />
        <circle cx="50" cy="50" r="25" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="#2CC5BE" />
      </svg>

      <svg
        className="absolute top-[15%] left-[55%] w-18 h-18 opacity-[0.07] animate-float-reverse"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      >
        <circle cx="50" cy="50" r="45" stroke="#2CC5BE" strokeWidth="2" />
        <circle cx="50" cy="50" r="30" stroke="#EBD448" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill="#E94381" />
      </svg>

      {/* Glowing orbs with different colors */}
      <div 
        className="absolute top-[18%] right-[40%] w-6 h-6 rounded-full opacity-[0.07] blur-md animate-pulse-slow"
        style={{ backgroundColor: '#EBD448', transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute bottom-[25%] left-[40%] w-5 h-5 rounded-full opacity-[0.07] blur-md animate-float"
        style={{ backgroundColor: '#2CC5BE', animationDelay: '2s', transform: `translateY(${scrollY * -0.12}px)` }}
      />
      <div 
        className="absolute top-[45%] left-[50%] w-4 h-4 rounded-full opacity-[0.07] blur-md animate-float-reverse"
        style={{ backgroundColor: '#E94381', transform: `translateY(${scrollY * 0.08}px)` }}
      />
      <div 
        className="absolute top-[70%] right-[35%] w-5 h-5 rounded-full opacity-[0.07] blur-md animate-pulse-slow"
        style={{ backgroundColor: '#FFFFFF', animationDelay: '1s', transform: `translateY(${scrollY * -0.1}px)` }}
      />
    </div>
  );
};

export default BackgroundElements;
