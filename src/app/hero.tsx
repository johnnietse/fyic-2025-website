"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import CountdownTimer from "../components/CountdownTimer";
import "../app/globals.css";
import { useState, useRef } from "react";

function Hero() {
  const [ripple, setRipple] = useState(false);
  const [effectRunning, setEffectRunning] = useState(false);
  const [stars, setStars] = useState<
    { id: number; top: string; left: string; size: number; delay: number; rotation: number }[]
  >([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleRipple = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
  };

  const triggerEffect = () => {
    handleRipple();
    setEffectRunning(true);

    const newStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 0.5,
      rotation: Math.random() * 60 - 30,
    }));

    setStars(newStars);

    setTimeout(() => setStars([]), 2500);
    setTimeout(() => {
      setEffectRunning(false);
      document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
    }, 2700);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background with Fallback */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/image/event-poster.jpg"
        onError={() => {
          const fallback = document.getElementById('fallback-image');
          if (fallback) fallback.style.display = 'block';
        }}
      >
        <source src="/videos/event.mp4" type="video/mp4" />
        <source src="/videos/event.webm" type="video/webm" />
        <img 
          id="fallback-image"
          src="/image/event-fallback.jpg" 
          className="absolute top-0 left-0 w-full h-full object-cover hidden"
          alt="Fallback background"
        />
      </video>

      {/* Effects Overlay */}
      {effectRunning && (
        <>
          <div className="fixed inset-0 bg-black z-40 transition-opacity duration-500" />
          
          {/* Shooting Stars Animation */}
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

      {/* Content Overlay */}
      <div className="absolute inset-0 h-full w-full bg-gray-900/60 z-10" />
      
      {/* Main Content */}
      <div className="flex flex-col min-h-screen px-8 items-center justify-center text-center">
        <div className="container relative z-20 mx-auto">
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
            className="lg:max-w-3xl mx-auto" 
            style={{ fontFamily: 'Montserrat, sans-serif' }} 
            {...({} as any)}
          >
            FYIC 2025: Empowering the Next Generation of Engineers
          </Typography>
          
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 mx-auto w-full md:max-w-full lg:max-w-2xl"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            Join us for Ontario's premier leadership and integration conference designed
            exclusively for first-year engineering students.
          </Typography>

          <CountdownTimer />

          {/* Centered Play Button */}
          <div className="flex justify-center mt-16">
            <div className="relative">
              <IconButton
                className="rounded-full bg-white p-6 z-10 relative hover:scale-105 transition-transform mx-auto"
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
  );
}

export default Hero;