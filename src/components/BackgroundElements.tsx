import { useEffect, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import {
  CodeCircleLinear, FigmaLinear, PenNewSquareLinear, SmartphoneLinear, MonitorLinear,
  ServerLinear, DatabaseLinear, CloudLinear, SettingsLinear, MagniferLinear, UserLinear,
  LetterLinear, LinkLinear, LayersLinear, BoxLinear, BoltCircleLinear, EarthLinear, MagicStick3Linear,
  MusicNoteLinear, CameraLinear, GalleryLinear, GamepadLinear,
  HashtagLinear, HeartLinear, LockLinear, KeyLinear
} from "solar-icon-set";

// Extended icon set (strictly verified)
const sourceIcons = [
  CodeCircleLinear, FigmaLinear, PenNewSquareLinear, SmartphoneLinear, MonitorLinear,
  ServerLinear, DatabaseLinear, CloudLinear, SettingsLinear, MagniferLinear, UserLinear,
  LetterLinear, LinkLinear, LayersLinear, BoxLinear, BoltCircleLinear, EarthLinear, MagicStick3Linear,
  MusicNoteLinear, CameraLinear, GalleryLinear, GamepadLinear,
  HashtagLinear, HeartLinear, LockLinear, KeyLinear
];

// Generate a dense field of icons - increased to 90 for full scroll coverage
// Generate a structured grid of icons to prevent clumping
const generateIcons = (count: number) => {
  const columns = 8; // Divides screen into 8 vertical columns
  const rows = Math.ceil(count / columns); // Calculates needed rows

  return Array.from({ length: count }).map((_, i) => {
    const Icon = sourceIcons[i % sourceIcons.length];

    // Grid-based positioning to ensure even coverage
    const col = i % columns;
    const row = Math.floor(i / columns);

    // Calculate cell dimensions
    const cellWidth = 100 / columns;
    const cellHeight = 100 / rows;

    // Position with random jitter within the cell
    // We add margin (10% of cell) to avoid edge overlaps
    const x = (col * cellWidth) + (Math.random() * (cellWidth * 0.8)) + (cellWidth * 0.1);
    const y = (row * cellHeight) + (Math.random() * (cellHeight * 0.8)) + (cellHeight * 0.1);

    return {
      id: i,
      Icon,
      x,
      y,
      size: 24 + Math.random() * 40,
      opacity: 0.02 + Math.random() * 0.02, // Adjusted opacity to 2-4% as requested
      rotationDir: Math.random() > 0.5 ? 1 : -1,
      floatDuration: 10 + Math.random() * 20,
      floatDelay: Math.random() * 10,
    };
  });
};

const backgroundIcons = generateIcons(256); // 8 cols * 32 rows = 256 icons

const BackgroundElements = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.pageX); // Use pageX/Y for absolute positioning relative to document
      mouseY.set(e.pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      // Use scroll dimensions to map the % positions correctly across the full page
      setWindowSize({ width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  if (windowSize.width === 0) return null;

  return (
    // changed to absolute and h-full to scroll with content
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 bg-[#050510]/0 h-full">
      {backgroundIcons.map((item) => (
        <FloatingIcon
          key={item.id}
          item={item}
          smoothX={smoothX}
          smoothY={smoothY}
          windowSize={windowSize}
        />
      ))}
    </div>
  );
};

const FloatingIcon = ({
  item,
  smoothX,
  smoothY,
  windowSize
}: {
  item: any,
  smoothX: any,
  smoothY: any,
  windowSize: { width: number, height: number }
}) => {

  const initialX = windowSize.width * (item.x / 100);
  const initialY = windowSize.height * (item.y / 100);

  // Magnetic Pull
  const x = useTransform(smoothX, (currentMouseX) => {
    const deltaX = currentMouseX - initialX;
    const attractionStrength = (item.size / 64) * 0.15;
    return deltaX * attractionStrength;
  });

  const y = useTransform(smoothY, (currentMouseY) => {
    const deltaY = currentMouseY - initialY;
    const attractionStrength = (item.size / 64) * 0.15;
    return deltaY * attractionStrength;
  });

  const floatDuration = item.floatDuration;

  return (
    // Outer motion div handles positioning and magnetic pull
    <motion.div
      className="absolute text-foreground flex items-center justify-center rounded-full"
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        x,
        y,
        opacity: item.opacity,
      }}
    >
      {/* Inner motion div handles continuous floating loop - solving conflict */}
      <motion.div
        animate={{
          y: [0, -15, 5, 0],
          x: [0, 8 * item.rotationDir, -4 * item.rotationDir, 0],
          rotate: [0, 10 * item.rotationDir, -5 * item.rotationDir, 0],
        }}
        transition={{
          y: {
            duration: floatDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.floatDelay,
          },
          x: {
            duration: floatDuration * 1.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.floatDelay,
          },
          rotate: {
            duration: floatDuration * 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: item.floatDelay,
          }
        }}
      >
        <div style={{ width: item.size, height: item.size }}>
          <item.Icon
            size={item.size}
            iconStyle="Linear"
            style={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.1))' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BackgroundElements;
