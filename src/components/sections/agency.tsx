"use client";

import { Button } from "@/components/ui/button";
import { Instagram, Volume2, VolumeX, Maximize2, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

const FADE_DURATION_MS = 400; // audio crossfade duration in ms

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const reelsData = [
  {
    id: 1,
    videoUrl: "/reels/r1.mp4",
    instagramUrl: "https://www.instagram.com/reel/DS8DOIHAQ03/?igsh=ZWl3ZzZjMnF5aWY4",
  },
  {
    id: 2,
    videoUrl: "/reels/r2.mp4",
    instagramUrl: "https://www.instagram.com/reel/DTAUibYEge-/?igsh=MTQyNThtYTBwM2x4MA==",
  },
  {
    id: 3,
    videoUrl: "/reels/r3.mp4",
    instagramUrl: "https://www.instagram.com/reel/DTLM5pJEqjn/?igsh=eDFiaDljeDFnbnZ4",
  },
  {
    id: 4,
    videoUrl: "/reels/r4.mp4",
    instagramUrl: "https://www.instagram.com/reel/DXWCa8tSxcp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 5,
    videoUrl: "/reels/r5.mp4",
    instagramUrl: "https://www.instagram.com/reel/DXd0Y_mCQWS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 6,
    videoUrl: "/reels/r6.mp4",
    instagramUrl: "https://www.instagram.com/reel/DVxj83pEg72/?igsh=ajk5c2E5eWJhdnRi",
  },
];

// Bulletproof touch detection using pointer:coarse + maxTouchPoints
function detectTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    navigator.maxTouchPoints > 0
  );
}

/**
 * Smoothly fades a video element's volume from `from` to `to` over `durationMs`.
 * Returns a cancel function that stops the animation early if needed.
 */
function fadeVolume(
  el: HTMLVideoElement,
  from: number,
  to: number,
  durationMs: number
): () => void {
  const steps = 30;
  const stepTime = durationMs / steps;
  const delta = (to - from) / steps;
  let step = 0;

  // Ensure we start from the right value
  el.volume = Math.max(0, Math.min(1, from));
  if (to > from) {
    // Unmuting: make sure audio is audible from the start
    el.muted = false;
  }

  const id = setInterval(() => {
    step++;
    const next = from + delta * step;
    el.volume = Math.max(0, Math.min(1, next));

    if (step >= steps) {
      clearInterval(id);
      el.volume = to;
      if (to === 0) {
        el.muted = true;
      }
    }
  }, stepTime);

  return () => clearInterval(id);
}

// ─────────────────────────────────────────────
// ReelCard
// ─────────────────────────────────────────────
interface ReelCardProps {
  videoUrl: string;
  instagramUrl: string;
  isUnmuted: boolean;
  isDimmed: boolean;
  isTouchDevice: boolean;
  onToggleMute: () => void;
}

function ReelCard({
  videoUrl,
  instagramUrl,
  isUnmuted,
  isDimmed,
  isTouchDevice,
  onToggleMute,
}: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const cancelFadeRef = useRef<(() => void) | null>(null);
  const prevUnmutedRef = useRef<boolean>(false);

  // Observe container visibility to lazy load video
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "250px", // Load slightly ahead of scroll for a seamless feel
        threshold: 0.01,
      }
    );

    observer.observe(container);
    return () => {
      observer.unobserve(container);
    };
  }, []);

  // Autoplay and control video playing state based on view state
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isInView) {
      el.muted = true;
      el.volume = 0;
      el.play().catch(() => {});
      prevUnmutedRef.current = false;
    } else {
      el.pause();
    }
  }, [isInView, videoUrl]);

  // Handle audio fade when isUnmuted changes
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (!isInView) return;

    const wasUnmuted = prevUnmutedRef.current;
    prevUnmutedRef.current = isUnmuted;

    // Cancel any in-progress fade first
    if (cancelFadeRef.current) {
      cancelFadeRef.current();
      cancelFadeRef.current = null;
    }

    if (isUnmuted && !wasUnmuted) {
      // Fade IN: 0 → 1
      cancelFadeRef.current = fadeVolume(el, 0, 1, FADE_DURATION_MS);
    } else if (!isUnmuted && wasUnmuted) {
      // Fade OUT: current volume → 0, then mute
      const currentVol = el.volume;
      cancelFadeRef.current = fadeVolume(el, currentVol, 0, FADE_DURATION_MS);
    }
  }, [isUnmuted, isInView]);

  // Cleanup fade on unmount
  useEffect(() => {
    return () => {
      if (cancelFadeRef.current) cancelFadeRef.current();
    };
  }, []);

  const handleFullscreen = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const el = videoRef.current;
      if (!el) return;
      if (el.requestFullscreen) el.requestFullscreen();
      else if ((el as any).webkitRequestFullscreen)
        (el as any).webkitRequestFullscreen();
      else if ((el as any).msRequestFullscreen)
        (el as any).msRequestFullscreen();
    },
    []
  );

  const overlayClass = isTouchDevice
    ? // Touch: always visible
      "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 flex flex-col justify-between p-5 z-10 opacity-100"
    : // Mouse: reveal on hover
      "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 flex flex-col justify-between p-5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300";

  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-[320px] mx-auto"
    >
      <motion.div
        ref={containerRef}
        whileHover={!isTouchDevice ? { scale: 1.04 } : undefined}
        transition={
          !isTouchDevice
            ? { type: "tween", duration: 0.5, ease: [0.4, 0, 0.2, 1] }
            : undefined
        }
        className={cn(
          "w-full aspect-[9/16] rounded-2xl overflow-hidden border-2 border-border/40 bg-card/80 backdrop-blur-sm shadow-xl relative group cursor-pointer transition-all duration-500",
          !isTouchDevice &&
            "hover:shadow-[0_0_25px_rgba(132,199,41,0.35)] hover:border-primary/60",
          isDimmed &&
            "opacity-35 brightness-[0.6] grayscale-[30%] scale-[0.97] blur-[0.5px]"
        )}
      >
        {/* Video or Loading State */}
        {isInView ? (
          <video
            ref={videoRef}
            src={videoUrl}
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-black/40 flex items-center justify-center">
            <span className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
          </div>
        )}

        {/* Control Overlay */}
        <div className={overlayClass}>
          {/* Instagram icon top-right */}
          <div className="flex justify-end w-full">
            <div className="p-2.5 bg-black/60 rounded-full text-white shadow-md flex items-center justify-center pointer-events-none">
              <Instagram className="w-5 h-5" />
            </div>
          </div>

          {/* Mute + Fullscreen bottom row */}
          <div className="flex justify-between items-center w-full">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleMute();
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleMute();
              }}
              className="p-3 bg-black/70 hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground backdrop-blur-md rounded-full text-white transition-all duration-200 shadow-md flex items-center justify-center"
              title={isUnmuted ? "Mute" : "Unmute"}
            >
              {isUnmuted ? (
                <Volume2 className="w-5 h-5" />
              ) : (
                <VolumeX className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={handleFullscreen}
              onTouchEnd={handleFullscreen}
              className="p-3 bg-black/70 hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground backdrop-blur-md rounded-full text-white transition-all duration-200 shadow-md flex items-center justify-center"
              title="View Full Screen"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Floating Instagram icon — mouse-only, hides on hover */}
        {!isTouchDevice && (
          <div className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-sm rounded-full text-white/90 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
            <Instagram className="w-4 h-4" />
          </div>
        )}
      </motion.div>
    </a>
  );
}

// ─────────────────────────────────────────────
// Slideshow Component
// ─────────────────────────────────────────────
const slideVariants = {
  initial: { opacity: 0, scale: 1.01 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }
};

function Slideshow({ isTouchDevice }: { isTouchDevice: boolean }) {
  const slides = Array.from({ length: 8 }, (_, i) => `/ppt/${i}.jpg`);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay effect with smooth progress tracking and pause-resume memory
  useEffect(() => {
    if (!isPlaying) return;

    const tickRate = 50; // update progress every 50ms for buttery-smooth updates
    const totalDuration = 5000; // 5 seconds per slide
    const increment = (tickRate / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, tickRate);

    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  return (
    <div
      className="w-full max-w-5xl mx-auto mb-16 px-4"
      onMouseEnter={() => !isTouchDevice && setIsPlaying(false)}
      onMouseLeave={() => !isTouchDevice && setIsPlaying(true)}
    >
      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border-2 border-border/40 bg-card/80 backdrop-blur-sm shadow-xl relative group transition-all duration-500 hover:shadow-[0_0_25px_rgba(132,199,41,0.2)] hover:border-primary/40">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover select-none"
          />
        </AnimatePresence>

        {/* Top bar with slide indicator and play/pause toggle */}
        <div className="absolute top-4 inset-x-4 flex justify-between items-center z-20 pointer-events-none">
          <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-white/90 text-sm font-semibold shadow-md pointer-events-auto select-none">
            {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              setIsPlaying((p) => !p);
            }}
            className="p-2 bg-black/60 hover:bg-primary hover:text-primary-foreground backdrop-blur-md rounded-full text-white transition-all duration-200 shadow-md flex items-center justify-center pointer-events-auto"
            title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        {/* Indicator dots */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-20 pointer-events-none">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(i);
                setProgress(0);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300 shadow-sm pointer-events-auto",
                i === currentIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-white/40 hover:bg-white/70"
              )}
              title={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Autoplay progress bar */}
        <div
          style={{
            width: `${progress}%`,
            transition: progress === 0 ? "none" : "width 50ms linear",
          }}
          className="absolute bottom-0 left-0 h-1 bg-primary/80 z-20"
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Agency Section
// ─────────────────────────────────────────────
export default function Agency() {
  const [activeUnmutedId, setActiveUnmutedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // default true → no flash on mobile
  const sectionRef = useRef<HTMLElement>(null);

  // Detect touch device after mount
  useEffect(() => {
    setIsTouchDevice(detectTouchDevice());
  }, []);

  // ── IntersectionObserver: auto-mute when reels grid leaves viewport ──
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When less than 10% of the section is visible, kill audio
        if (entry.intersectionRatio < 0.1) {
          setActiveUnmutedId(null);
        }
      },
      { threshold: [0, 0.1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleToggleMute = useCallback((reelId: number) => {
    setActiveUnmutedId((prev) => (prev === reelId ? null : reelId));
  }, []);

  return (
    <section
      id="agency"
      ref={sectionRef}
      className="w-full py-20 md:py-32 bg-gradient-to-b from-transparent to-background/50"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h3
          className="text-lg font-bold text-muted-foreground uppercase tracking-widest mb-2"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          my agency
        </motion.h3>

        <motion.h2
          className="text-4xl sm:text-6xl md:text-8xl font-black font-headline text-center mb-4 uppercase"
          style={{
            WebkitTextStroke: "1px hsl(var(--foreground))",
            color: "transparent",
          }}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          IGNITE HAUS
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-muted-foreground mb-16"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Welcome to Ignite Haus, where creativity meets strategy. We are a
          passionate team dedicated to building impactful brands and crafting
          stunning visual experiences. From concept to execution, we ignite your
          vision.
        </motion.p>

        {/* Slideshow Component */}
        <Slideshow isTouchDevice={isTouchDevice} />

        {/* Reels Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {reelsData.map((reel) => {
            const isDimmed =
              !isTouchDevice &&
              hoveredId !== null &&
              hoveredId !== reel.id;
            const isUnmuted = activeUnmutedId === reel.id;

            return (
              <div
                key={reel.id}
                onMouseEnter={() => {
                  if (!isTouchDevice) setHoveredId(reel.id);
                }}
                onMouseLeave={() => {
                  if (!isTouchDevice) setHoveredId(null);
                }}
                className="transition-all duration-300"
              >
                <ReelCard
                  videoUrl={reel.videoUrl}
                  instagramUrl={reel.instagramUrl}
                  isUnmuted={isUnmuted}
                  isDimmed={isDimmed}
                  isTouchDevice={isTouchDevice}
                  onToggleMute={() => handleToggleMute(reel.id)}
                />
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            style={{
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
            }}
            className="hover:bg-accent shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/30"
          >
            <Link
              href="https://www.instagram.com/ignite.haus?igsh=Yjk3bmdvYzF5aXE0&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our Instagram
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
