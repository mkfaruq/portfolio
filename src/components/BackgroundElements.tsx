const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating circles */}
      <svg
        className="absolute top-[10%] left-[5%] w-24 h-24 text-accent/10 animate-float-slow"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* Grid pattern */}
      <svg
        className="absolute top-[20%] right-[8%] w-32 h-32 text-accent/8 animate-float-reverse"
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

      {/* Triangle */}
      <svg
        className="absolute bottom-[30%] left-[3%] w-20 h-20 text-accent/10 animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon points="50,10 90,80 10,80" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      {/* Cross/Plus */}
      <svg
        className="absolute top-[60%] right-[5%] w-16 h-16 text-accent/15 animate-pulse-slow"
        viewBox="0 0 100 100"
        fill="none"
      >
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="3" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="3" />
      </svg>

      {/* Dots pattern */}
      <svg
        className="absolute bottom-[15%] right-[15%] w-28 h-28 text-accent/10 animate-float"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        {[0, 25, 50, 75].map((x) =>
          [0, 25, 50, 75].map((y) => (
            <circle key={`${x}-${y}`} cx={x + 12.5} cy={y + 12.5} r="3" />
          ))
        )}
      </svg>

      {/* Hexagon */}
      <svg
        className="absolute top-[40%] left-[10%] w-16 h-16 text-accent/8 animate-float-reverse"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon 
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
          stroke="currentColor" 
          strokeWidth="2"
        />
      </svg>

      {/* Squiggle line */}
      <svg
        className="absolute bottom-[40%] right-[25%] w-24 h-12 text-accent/10 animate-float-slow"
        viewBox="0 0 100 50"
        fill="none"
      >
        <path 
          d="M0,25 Q25,0 50,25 T100,25" 
          stroke="currentColor" 
          strokeWidth="2"
        />
      </svg>

      {/* Diamond */}
      <svg
        className="absolute top-[75%] left-[20%] w-14 h-14 text-accent/12 animate-spin-slow"
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

      {/* Arc */}
      <svg
        className="absolute top-[5%] left-[40%] w-20 h-20 text-accent/10 animate-pulse-slow"
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

      {/* Small scattered circles with glow */}
      <div className="absolute top-[25%] right-[30%] w-4 h-4 rounded-full bg-accent/20 blur-sm animate-pulse-slow" />
      <div className="absolute bottom-[20%] left-[35%] w-3 h-3 rounded-full bg-accent/25 blur-sm animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[50%] left-[45%] w-2 h-2 rounded-full bg-accent/30 blur-sm animate-float-reverse" />
    </div>
  );
};

export default BackgroundElements;
