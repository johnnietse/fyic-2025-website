"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import CountdownTimer from "../components/CountdownTimer";
import "../app/globals.css";
import { useState } from "react";

function Hero() {
  const [ripple, setRipple] = useState(false);
  const [effectRunning, setEffectRunning] = useState(false);
  const [stars, setStars] = useState<
    { id: number; top: string; left: string; size: number; delay: number; rotation: number }[]
  >([]);

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
    <div className="relative min-h-screen w-full bg-[url('/image/event.png')] bg-cover bg-no-repeat transition-colors duration-500">
      {/* Fullscreen effect overlay */}
      {effectRunning && (
        <>
          <div className="fixed inset-0 bg-black z-40 transition-opacity duration-500" />

          {/* Shooting stars */}
          {stars.map((star) => (
            <div
              key={star.id}
              className="shooting-star"
              style={{
                top: star.top,
                left: star.left,
                transform: `rotate(${star.rotation}deg) scale(${star.size})`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}

          {/* Center message
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <h1 className="text-5xl md:text-6xl font-bold text-white animate-pulse">
              FYIC 2025 STARTS NOW!
            </h1>
          </div> */}
        </>
      )}

      {/* Normal page content */}
      <div className="absolute inset-0 h-full w-full bg-gray-900/60 z-10" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-20 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="white" className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            29-31 November @ Kingston
          </Typography>
          <Typography variant="h1" color="white" className="lg:max-w-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            FYIC 2025: Empowering the Next Generation of Engineers
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Join us for Ontario’s premier leadership and integration conference designed
            exclusively for first-year engineering students.
          </Typography>

          <CountdownTimer />

          <br>
          </br>
          <br>
          </br>
          
          <div className="flex items-center gap-4">


            <div className="relative">
              <IconButton
                className="rounded-full bg-white p-6 z-10 relative"
                onClick={triggerEffect}
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


