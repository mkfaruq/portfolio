const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Floating circles - top left */}
      <svg
        className="absolute top-[8%] left-[5%] w-28 h-28 text-accent/30 animate-float-slow drop-shadow-[0_0_15px_hsl(var(--accent)/0.5)]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </svg>

      {/* Grid pattern - top right */}
      <svg
        className="absolute top-[15%] right-[8%] w-36 h-36 text-accent/25 animate-float-reverse drop-shadow-[0_0_12px_hsl(var(--accent)/0.4)]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <line x1="0" y1="25" x2="100" y2="25" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="75" x2="100" y2="75" stroke="currentColor" strokeWidth="1" />
        <line x1="25" y1="0" x2="25" y2="100" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="1" />
        <line x1="75" y1="0" x2="75" y2="100" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Triangle - left side */}
      <svg
        className="absolute top-[35%] left-[3%] w-24 h-24 text-accent/35 animate-spin-slow drop-shadow-[0_0_18px_hsl(var(--accent)/0.5)]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon points="50,10 90,80 10,80" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      {/* Cross/Plus - right side */}
      <svg
        className="absolute top-[55%] right-[5%] w-20 h-20 text-accent/40 animate-pulse-slow drop-shadow-[0_0_20px_hsl(var(--accent)/0.6)]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="3" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="3" />
      </svg>

      {/* Dots pattern - bottom right */}
      <svg
        className="absolute bottom-[12%] right-[12%] w-32 h-32 text-accent/30 animate-float drop-shadow-[0_0_10px_hsl(var(--accent)/0.4)]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        {[0, 25, 50, 75].map((x) =>
          [0, 25, 50, 75].map((y) => (
            <circle key={`${x}-${y}`} cx={x + 12.5} cy={y + 12.5} r="4" />
          ))
        )}
      </svg>

      {/* Hexagon - left middle */}
      <svg
        className="absolute top-[60%] left-[8%] w-20 h-20 text-accent/30 animate-float-reverse drop-shadow-[0_0_15px_hsl(var(--accent)/0.5)]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon 
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
          stroke="currentColor" 
          strokeWidth="2"
        />
      </svg>

      {/* Squiggle line - center right */}
      <svg
        className="absolute top-[40%] right-[20%] w-28 h-14 text-accent/35 animate-float-slow drop-shadow-[0_0_12px_hsl(var(--accent)/0.4)]"
        viewBox="0 0 100 50"
        fill="none"
      >
        <path 
          d="M0,25 Q25,0 50,25 T100,25" 
          stroke="currentColor" 
          strokeWidth="2"
        />
      </svg>

      {/* Diamond - bottom left */}
      <svg
        className="absolute bottom-[20%] left-[15%] w-18 h-18 text-accent/35 animate-spin-slow drop-shadow-[0_0_18px_hsl(var(--accent)/0.5)]"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '25s' }}
      >
        <rect 
          x="15" y="15" 
          width="70" height="70" 
          stroke="currentColor" 
          strokeWidth="2"
          transform="rotate(45 50 50)"
        />
      </svg>

      {/* Arc - top center */}
      <svg
        className="absolute top-[5%] left-[35%] w-24 h-24 text-accent/30 animate-pulse-slow drop-shadow-[0_0_15px_hsl(var(--accent)/0.5)]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path 
          d="M20,80 A40,40 0 1,1 80,80" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Star - center left */}
      <svg
        className="absolute top-[25%] left-[25%] w-16 h-16 text-accent/35 animate-float drop-shadow-[0_0_20px_hsl(var(--accent)/0.6)]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon 
          points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" 
          stroke="currentColor" 
          strokeWidth="2"
        />
      </svg>

      {/* Spiral - bottom center */}
      <svg
        className="absolute bottom-[8%] left-[45%] w-20 h-20 text-accent/30 animate-spin-slow drop-shadow-[0_0_15px_hsl(var(--accent)/0.5)]"
        viewBox="0 0 100 100"
        fill="none"
        style={{ animationDuration: '30s' }}
      >
        <path 
          d="M50,50 m0,-40 a40,40 0 1,1 0,80 a30,30 0 1,1 0,-60 a20,20 0 1,1 0,40" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Small ring - top right area */}
      <svg
        className="absolute top-[30%] right-[30%] w-14 h-14 text-accent/40 animate-pulse-slow drop-shadow-[0_0_12px_hsl(var(--accent)/0.5)]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" />
      </svg>

      {/* Zigzag - right side middle */}
      <svg
        className="absolute top-[70%] right-[15%] w-24 h-16 text-accent/30 animate-float-reverse drop-shadow-[0_0_10px_hsl(var(--accent)/0.4)]"
        viewBox="0 0 100 60"
        fill="none"
      >
        <polyline 
          points="0,30 20,10 40,50 60,10 80,50 100,30" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Glowing orbs scattered around */}
      <div className="absolute top-[18%] right-[40%] w-6 h-6 rounded-full bg-accent/40 blur-md animate-pulse-slow" />
      <div className="absolute bottom-[25%] left-[40%] w-5 h-5 rounded-full bg-accent/50 blur-md animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[45%] left-[50%] w-4 h-4 rounded-full bg-accent/45 blur-md animate-float-reverse" />
      <div className="absolute top-[75%] right-[35%] w-5 h-5 rounded-full bg-accent/40 blur-md animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[10%] right-[55%] w-4 h-4 rounded-full bg-accent/50 blur-md animate-float-slow" />
      <div className="absolute bottom-[35%] right-[45%] w-6 h-6 rounded-full bg-accent/35 blur-md animate-float" style={{ animationDelay: '3s' }} />
    </div>
  );
};

export default BackgroundElements;
