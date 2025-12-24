import { useEffect, useState } from "react";
import backgroundSvg from "@/assets/background_elements.svg";

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
      {/* Main background SVG - top left */}
      <img
        src={backgroundSvg}
        alt=""
        className="absolute top-[5%] left-[2%] w-64 h-auto opacity-[0.07] animate-float-slow"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      {/* Main background SVG - top right */}
      <img
        src={backgroundSvg}
        alt=""
        className="absolute top-[10%] right-[3%] w-48 h-auto opacity-[0.07] animate-float-reverse scale-x-[-1]"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />

      {/* Main background SVG - middle left */}
      <img
        src={backgroundSvg}
        alt=""
        className="absolute top-[35%] left-[5%] w-56 h-auto opacity-[0.07] animate-float rotate-12"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      {/* Main background SVG - middle right */}
      <img
        src={backgroundSvg}
        alt=""
        className="absolute top-[45%] right-[8%] w-52 h-auto opacity-[0.07] animate-pulse-slow scale-x-[-1] -rotate-6"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />

      {/* Main background SVG - bottom left */}
      <img
        src={backgroundSvg}
        alt=""
        className="absolute bottom-[15%] left-[8%] w-44 h-auto opacity-[0.07] animate-float-reverse rotate-45"
        style={{ transform: `translateY(${scrollY * -0.12}px)` }}
      />

      {/* Main background SVG - bottom right */}
      <img
        src={backgroundSvg}
        alt=""
        className="absolute bottom-[10%] right-[5%] w-60 h-auto opacity-[0.07] animate-float-slow scale-x-[-1] rotate-12"
        style={{ transform: `translateY(${scrollY * -0.18}px)` }}
      />

      {/* Main background SVG - center top */}
      <img
        src={backgroundSvg}
        alt=""
        className="absolute top-[3%] left-[40%] w-40 h-auto opacity-[0.07] animate-pulse-slow -rotate-12"
        style={{ transform: `translateY(${scrollY * 0.22}px)` }}
      />

      {/* Main background SVG - bottom center */}
      <img
        src={backgroundSvg}
        alt=""
        className="absolute bottom-[5%] left-[35%] w-48 h-auto opacity-[0.07] animate-float rotate-180"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      />

      {/* Extra scattered elements - smaller sizes */}
      <img
        src={backgroundSvg}
        alt=""
        className="absolute top-[65%] left-[25%] w-32 h-auto opacity-[0.07] animate-float-reverse -rotate-45"
        style={{ transform: `translateY(${scrollY * 0.16}px)` }}
      />

      <img
        src={backgroundSvg}
        alt=""
        className="absolute top-[20%] right-[25%] w-36 h-auto opacity-[0.07] animate-float scale-x-[-1] rotate-6"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      />

      <img
        src={backgroundSvg}
        alt=""
        className="absolute top-[80%] right-[30%] w-28 h-auto opacity-[0.07] animate-pulse-slow rotate-90"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      />

      <img
        src={backgroundSvg}
        alt=""
        className="absolute top-[55%] left-[45%] w-24 h-auto opacity-[0.07] animate-float-slow -rotate-30"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
    </div>
  );
};

export default BackgroundElements;
