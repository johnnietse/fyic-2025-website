"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import CountdownTimer from "../components/CountdownTimer";
import "../app/globals.css";
import { useState, useRef, useEffect } from "react";

function Hero() {
  // Original animation states
  const [ripple, setRipple] = useState(false);
  const [effectRunning, setEffectRunning] = useState(false);
  const [stars, setStars] = useState<
    { id: number; top: string; left: string; size: number; delay: number; rotation: number }[]
  >([]);

  // Video system states
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile and handle autoplay
  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    
    const handleFirstInteraction = () => {
      [videoRef1.current, videoRef2.current].forEach(video => {
        video?.play().catch(e => console.log("Autoplay prevented:", e));
      });
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, []);

  // Smooth video looping system
  useEffect(() => {
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;
    if (!video1 || !video2) return;

    const handleLoop = () => {
      const currentVideo = activeVideo === 1 ? video1 : video2;
      if (currentVideo.currentTime > currentVideo.duration - 1.5) {
        const nextVideo = activeVideo === 1 ? video2 : video1;
        nextVideo.currentTime = 0;
        nextVideo.style.opacity = '1';
        currentVideo.style.opacity = '0';
        setActiveVideo(activeVideo === 1 ? 2 : 1);
      }
    };

    const currentVideo = activeVideo === 1 ? video1 : video2;
    currentVideo.addEventListener('timeupdate', handleLoop);
    return () => currentVideo.removeEventListener('timeupdate', handleLoop);
  }, [activeVideo]);

  // Original ripple effect
  const handleRipple = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
  };

  // Original star explosion effect
  const triggerEffect = () => {
    handleRipple();
    setEffectRunning(true);

    setStars(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 0.5,
      rotation: Math.random() * 60 - 30,
    })));

    setTimeout(() => setStars([]), 2500);
    setTimeout(() => {
      setEffectRunning(false);
      document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
    }, 2700);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* ==================== VIDEO SYSTEM ==================== */}
      {/* Primary Video */}
      <video
        ref={videoRef1}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: activeVideo === 1 ? 1 : 0 }}
        poster="/image/event-poster.jpg" // Low-res placeholder
      >
        <source src="/image/event.mp4" type="video/mp4" />
      </video>

      {/* Backup Video */}
      <video
        ref={videoRef2}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: activeVideo === 2 ? 1 : 0 }}
      >
        <source src="/videos/event-optimized.mp4" type="video/mp4" />
        <source src="/videos/event-optimized.webm" type="video/webm" />
      </video>

      {/* Fallback Image (shown if videos fail) */}
      <img
        src="/image/event-fallback.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ display: 'none' }}
        id="video-fallback"
      />

      {/* ==================== EFFECTS ==================== */}
      {effectRunning && (
        <>
          <div className="fixed inset-0 bg-black z-40 transition-opacity duration-500" />
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute w-2 h-2 bg-white rounded-full opacity-0 animate-shoot"
              style={{
                top: star.top,
                left: star.left,
                transform: `rotate(${star.rotation}deg) scale(${star.size})`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </>
      )}

      {/* ==================== CONTENT ==================== */}
      <div className="absolute inset-0 h-full w-full bg-gray-900/60 z-10" />
      
      <div className="grid min-h-screen px-8">
        <div className="container relative z-20 my-auto mx-auto grid place-items-center text-center">
          <div className="py-16 space-y-8">
            <Typography 
              variant="h3" 
              color="white" 
              className="mb-2" 
              style={{ fontFamily: 'Montserrat, sans-serif' }} 
              {...({} as any)}
            >
              29-31 November @ Kingston
            </Typography>
            
            <Typography 
              variant="h1" 
              color="white" 
              className="lg:max-w-3xl" 
              style={{ fontFamily: 'Montserrat, sans-serif' }} 
              {...({} as any)}
            >
              FYIC 2025: Empowering the Next Generation of Engineers
            </Typography>
            
            <Typography
              variant="lead"
              color="white"
              className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              Join us for Ontario's premier leadership and integration conference designed
              exclusively for first-year engineering students.
            </Typography>

            <CountdownTimer />

            <div className="flex items-center gap-4 mt-16">
              <div className="relative">
                <IconButton
                  className="rounded-full bg-white p-6 z-10 relative hover:scale-105 transition-transform"
                  onClick={triggerEffect}
                  {...({} as any)}
                >
                  <PlayIcon className="h-4 w-4 text-gray-900" />
                </IconButton>

                {ripple && (
                  <span className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 animate-ripple pointer-events-none z-0" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error boundary for videos */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', () => {
            const videos = document.querySelectorAll('video');
            let videosWorking = false;
            
            videos.forEach(video => {
              video.oncanplay = () => videosWorking = true;
              video.onerror = () => {
                if (!videosWorking) {
                  document.getElementById('video-fallback').style.display = 'block';
                }
              };
            });
          });
        `
      }} />
    </div>
  );
}

export default Hero;