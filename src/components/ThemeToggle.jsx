import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [offscreen, setOffscreen] = useState(false);

  // timings
  const IDLE_DELAY = 3000;   
  const RETURN_DELAY = 5000; 

  // JS refs (no TypeScript generics in .jsx)
  const idleTimer = useRef(null);
  const returnTimer = useRef(null);

  // theme init
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark =
      stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDark) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    resetIdleCycle(); 
  };

  // timers
  const clearTimers = () => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    if (returnTimer.current) clearTimeout(returnTimer.current);
    idleTimer.current = null;
    returnTimer.current = null;
  };

  const startIdleTimer = () => {
    clearTimers();
    idleTimer.current = setTimeout(() => {
      setOffscreen(true); 
      returnTimer.current = setTimeout(() => {
        setOffscreen(false); 
        startIdleTimer();    
      }, RETURN_DELAY);
    }, IDLE_DELAY);
  };


  const resetIdleCycle = () => {
    setOffscreen(false);
    startIdleTimer();
  };

  useEffect(() => {
    startIdleTimer();
    return clearTimers;
  }, []);

  const onUserAttention = () => resetIdleCycle();

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={onUserAttention}
      onFocus={onUserAttention}
      onTouchStart={onUserAttention}
      aria-label={isDarkMode ? "Switch to Starter (light) mode" : "Switch to Legendary (dark) mode"}
      className={cn(
        "fixed bottom-8 right-[35px] z-50",
        "h-12 w-12 rounded-full overflow-hidden",
        "transform-gpu transition-transform duration-[3000ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        "active:scale-95 focus-visible:outline-none",
        "ring-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/30",
        offscreen
          ? "translate-x-[130%] rotate-[720deg] opacity-0 pointer-events-none scale-185" /* change scale */
          : "translate-x-0 rotate-0 opacity-100 scale-100"
      )}

    >
      {/* Pokéball look (light mode) */}
      {!isDarkMode && (
        <div className="relative h-full w-full">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-[#EE1515]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[6px] bg-black" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-5 w-5 rounded-full bg-white shadow-inner ring-2 ring-black" />
          </div>
        </div>
      )}

      {/* Legendary aura (dark mode) */}
      {isDarkMode && (
        <div className="relative h-full w-full rounded-full overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(180,120,255,0.55),rgba(0,0,0,0)_60%)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white/90 shadow-[0_0_20px_rgba(200,150,255,0.9),_0_0_40px_rgba(200,150,255,0.5)]" />
          <div className="absolute inset-0 rounded-full border border-white/15" />
        </div>
      )}
    </button>
  );
};
