import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Rocket } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#050510] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, Math.random() * 0.5 + 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 3 + "px",
              height: Math.random() * 3 + "px",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Glitching 404 Text */}
          <div className="relative inline-block">
            <h1 className="text-[150px] md:text-[200px] font-display font-bold text-white/5 leading-none select-none">
              404
            </h1>
            <h1 className="absolute inset-0 text-[150px] md:text-[200px] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/10 leading-none mix-blend-overlay animate-pulse-slow">
              404
            </h1>
          </div>

          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent mix-blend-screen"
          >
            <Rocket size={120} strokeWidth={1} className="drop-shadow-[0_0_30px_rgba(139,92,246,0.6)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Lost in Space?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for seems to have drifted away into the cosmic void.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-105 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Return to Base
          </Link>
        </motion.div>
      </div>

      {/* Decorative planet */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
};

export default NotFound;
