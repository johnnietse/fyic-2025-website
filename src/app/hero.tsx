// "use client";

// import { IconButton, Typography } from "@material-tailwind/react";
// import { PlayIcon } from "@heroicons/react/24/solid";
// import CountdownTimer from "../components/CountdownTimer";
// import "../app/globals.css";
// import { useState, useRef, useEffect } from "react";

// function Hero() {
//   // Animation states
//   const [ripple, setRipple] = useState(false);
//   const [effectRunning, setEffectRunning] = useState(false);
//   const [stars, setStars] = useState<
//     { id: number; top: string; left: string; size: number; delay: number; rotation: number }[]
//   >([]);
//   const [transitionOpacity, setTransitionOpacity] = useState(0);

//   // Video system
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [videoError, setVideoError] = useState(false);

//   // Smooth translucent transition handler
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handlePlay = async () => {
//       try {
//         await video.play();
//       } catch (err) {
//         const handleInteraction = () => {
//           video.play().finally(() => {
//             document.removeEventListener('click', handleInteraction);
//             document.removeEventListener('touchstart', handleInteraction);
//           });
//         };
//         document.addEventListener('click', handleInteraction);
//         document.addEventListener('touchstart', handleInteraction);
//       }
//     };

//     const handleLoop = () => {
//       if (video.duration > 0 && video.currentTime > video.duration - 1.0) {
//         // Fade in transition (500ms)
//         const fadeIn = () => {
//           setTransitionOpacity((prev) => {
//             const newOpacity = Math.min(prev + 0.02, 0.7); // 70% max opacity
//             if (newOpacity < 0.7) {
//               requestAnimationFrame(fadeIn);
//             } else {
//               // Reset video at peak opacity
//               video.currentTime = 0;
//               video.play().catch(console.error);
//               // Start fade out
//               fadeOut();
//             }
//             return newOpacity;
//           });
//         };

//         // Fade out transition (500ms)
//         const fadeOut = () => {
//           setTransitionOpacity((prev) => {
//             const newOpacity = Math.max(prev - 0.02, 0);
//             if (newOpacity > 0) {
//               requestAnimationFrame(fadeOut);
//             }
//             return newOpacity;
//           });
//         };

//         fadeIn();
//       }
//     };

//     video.addEventListener('loadedmetadata', handlePlay);
//     video.addEventListener('timeupdate', handleLoop);
//     video.addEventListener('error', () => setVideoError(true));

//     return () => {
//       video.removeEventListener('loadedmetadata', handlePlay);
//       video.removeEventListener('timeupdate', handleLoop);
//     };
//   }, []);

//   // Original ripple effect
//   const handleRipple = () => {
//     setRipple(true);
//     setTimeout(() => setRipple(false), 600);
//   };

//   // Star explosion effect
//   const triggerEffect = () => {
//     handleRipple();
//     setEffectRunning(true);

//     setStars(Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       top: `${Math.random() * 100}%`,
//       left: `${Math.random() * 100}%`,
//       size: Math.random() * 1.5 + 0.5,
//       delay: Math.random() * 0.5,
//       rotation: Math.random() * 60 - 30,
//     })));

//     setTimeout(() => setStars([]), 2500);
//     setTimeout(() => {
//       setEffectRunning(false);
//       document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
//     }, 2700);
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">
//       {/* ========= VIDEO BACKGROUND ========= */}
//       {!videoError ? (
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           poster="/image/event.png"
//         >
//           <source src="/image/event.mp4" type="video/mp4" />
//         </video>
//       ) : (
//         <img 
//           src="/image/event.png" 
//           alt="Background" 
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />
//       )}

//       {/* ========= TRANSLUCENT WHITE TRANSITION ========= */}
//       <div 
//         className="absolute inset-0 bg-white/70 z-30 pointer-events-none transition-opacity duration-500"
//         style={{ opacity: transitionOpacity }}
//       />

//       {/* ========= EFFECTS OVERLAY ========= */}
//       {effectRunning && (
//         <>
//           <div className="fixed inset-0 bg-black z-40 transition-opacity duration-500" />
//           {stars.map((star) => (
//             <div
//               key={star.id}
//               className="absolute w-2 h-2 bg-white rounded-full opacity-0 animate-shoot"
//               style={{
//                 top: star.top,
//                 left: star.left,
//                 transform: `rotate(${star.rotation}deg) scale(${star.size})`,
//                 animationDelay: `${star.delay}s`,
//               }}
//             />
//           ))}
//         </>
//       )}

//       {/* ========= CONTENT OVERLAY ========= */}
//       <div className="absolute inset-0 h-full w-full bg-gray-900/60 z-10" />
      
//       {/* ========= MAIN CONTENT ========= */}
//       <div className="flex flex-col min-h-screen px-8 items-center justify-center text-center">
//         <div className="container relative z-20 mx-auto">
//           <Typography 
//             variant="h3" 
//             color="white" 
//             className="mb-2" 
//             style={{ fontFamily: 'Montserrat, sans-serif' }} 
//             {...({} as any)}
//           >
//             29-31 November @ Kingston
//           </Typography>
          
//           <Typography 
//             variant="h1" 
//             color="white" 
//             className="lg:max-w-3xl mx-auto" 
//             style={{ fontFamily: 'Montserrat, sans-serif' }} 
//             {...({} as any)}
//           >
//             FYIC 2025: Empowering the Next Generation of Engineers
//           </Typography>
          
//           <Typography
//             variant="lead"
//             color="white"
//             className="mt-1 mb-12 mx-auto w-full md:max-w-full lg:max-w-2xl"
//             style={{ fontFamily: 'Montserrat, sans-serif' }}
//             {...({} as any)}
//           >
//             Join us for Ontario's premier leadership and integration conference designed
//             exclusively for first-year engineering students.
//           </Typography>

//           <CountdownTimer />

//           {/* Centered Play Button */}
//           <div className="flex justify-center mt-16">
//             <div className="relative">
//               <IconButton
//                 className="rounded-full bg-white p-6 z-10 relative hover:scale-105 transition-transform mx-auto"
//                 onClick={triggerEffect}
//                 {...({} as any)}
//               >
//                 <PlayIcon className="h-4 w-4 text-gray-900" />
//               </IconButton>

//               {ripple && (
//                 <span className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 animate-ripple pointer-events-none z-0" />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;


// "use client";

// import { IconButton, Typography } from "@material-tailwind/react";
// import { PlayIcon } from "@heroicons/react/24/solid";
// import CountdownTimer from "../components/CountdownTimer";
// import "../app/globals.css";
// import { useState, useRef } from "react";

// function Hero() {
//   // Animation states
//   const [ripple, setRipple] = useState(false);
//   const [effectRunning, setEffectRunning] = useState(false);
//   const [stars, setStars] = useState<
//     { id: number; top: string; left: string; size: number; delay: number; rotation: number }[]
//   >([]);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const handleRipple = () => {
//     setRipple(true);
//     setTimeout(() => setRipple(false), 600);
//   };

//   const triggerEffect = () => {
//     handleRipple();
//     setEffectRunning(true);

//     const newStars = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       top: `${Math.random() * 100}%`,
//       left: `${Math.random() * 100}%`,
//       size: Math.random() * 1.5 + 0.5,
//       delay: Math.random() * 0.5,
//       rotation: Math.random() * 60 - 30,
//     }));

//     setStars(newStars);

//     setTimeout(() => setStars([]), 2500);
//     setTimeout(() => {
//       setEffectRunning(false);
//       document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
//     }, 2700);
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">
//       {/* Video Background */}
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         poster="/image/event.png"
//       >
//         <source src="/image/event.mp4" type="video/mp4" />
//         <img 
//           src="/image/event.png" 
//           alt="Fallback background" 
//           className="absolute top-0 left-0 w-full h-full object-cover hidden"
//           id="fallback-image"
//         />
//       </video>

//       {/* Shooting Stars Effect */}
//       {effectRunning && (
//         <>
//           <div className="fixed inset-0 bg-black z-40 transition-opacity duration-500" />
//           {stars.map((star) => (
//             <div
//               key={star.id}
//               className="shooting-star absolute z-50"
//               style={{
//                 top: star.top,
//                 left: star.left,
//                 width: `${star.size * 8}px`,
//                 height: `${star.size * 8}px`,
//                 animationDelay: `${star.delay}s`,
//                 transform: `rotate(${star.rotation}deg)`,
//               }}
//             />
//           ))}
//         </>
//       )}

//       {/* Content Overlay */}
//       <div className="absolute inset-0 h-full w-full bg-gray-900/60 z-10" />
      
//       {/* Main Content */}
//       <div className="grid min-h-screen px-8">
//         <div className="container relative z-20 my-auto mx-auto grid place-items-center text-center">
//           <div className="space-y-8 py-8">
//             <Typography 
//               variant="h3" 
//               color="white" 
//               className="mb-2" 
//               style={{ fontFamily: 'Montserrat, sans-serif' }} 
//               {...({} as any)}
//             >
//               29-31 November @ Kingston
//             </Typography>
            
//             <Typography 
//               variant="h1" 
//               color="white" 
//               className="lg:max-w-3xl" 
//               style={{ fontFamily: 'Montserrat, sans-serif' }} 
//               {...({} as any)}
//             >
//               FYIC 2025: Empowering the Next Generation of Engineers
//             </Typography>
            
//             <Typography
//               variant="lead"
//               color="white"
//               className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
//               style={{ fontFamily: 'Montserrat, sans-serif' }}
//               {...({} as any)}
//             >
//               Join us for Ontario's premier leadership and integration conference designed
//               exclusively for first-year engineering students.
//             </Typography>

//             <CountdownTimer />

//             <div className="flex items-center gap-4 mt-8">
//               <div className="relative">
//                 <IconButton
//                   className="rounded-full bg-white p-6 z-10 relative hover:scale-105 transition-transform"
//                   onClick={triggerEffect}
//                   {...({} as any)}
//                 >
//                   <PlayIcon className="h-4 w-4 text-gray-900" />
//                 </IconButton>

//                 {ripple && (
//                   <span className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 animate-ripple pointer-events-none z-0" />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

// "use client";

// import { IconButton, Typography } from "@material-tailwind/react";
// import { PlayIcon } from "@heroicons/react/24/solid";
// import CountdownTimer from "../components/CountdownTimer";
// import "../app/globals.css";
// import { useState, useRef } from "react";

// function Hero() {
//   // Animation states
//   const [ripple, setRipple] = useState(false);
//   const [effectRunning, setEffectRunning] = useState(false);
//   const [stars, setStars] = useState<
//     { id: number; top: string; left: string; size: number; delay: number; rotation: number }[]
//   >([]);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const handleRipple = () => {
//     setRipple(true);
//     setTimeout(() => setRipple(false), 600);
//   };

//   const triggerEffect = () => {
//     handleRipple();
//     setEffectRunning(true);

//     const newStars = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       top: `${Math.random() * 100}%`,
//       left: `${Math.random() * 100}%`,
//       size: Math.random() * 1.5 + 0.5,
//       delay: Math.random() * 0.5,
//       rotation: Math.random() * 60 - 30,
//     }));

//     setStars(newStars);

//     setTimeout(() => setStars([]), 2500);
//     setTimeout(() => {
//       setEffectRunning(false);
//       document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
//     }, 2700);
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">
//       {/* Video Background with Fallback */}
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         poster="/image/event.png"
//         onError={() => {
//           const fallback = document.getElementById('fallback-image');
//           if (fallback) fallback.style.display = 'block';
//         }}
//       >
//         <source src="/image/event.mp4" type="video/mp4" />
//         <img 
//           id="fallback-image"
//           src="/image/event.png" 
//           className="absolute top-0 left-0 w-full h-full object-cover hidden"
//           alt="Fallback background"
//         />
//       </video>

//       {/* Shooting Stars Animation */}
//       {effectRunning && (
//         <>
//           <div className="fixed inset-0 bg-black z-40 transition-opacity duration-500" />
//           {stars.map((star) => (
//             <div
//               key={star.id}
//               className="shooting-star absolute z-50"
//               style={{
//                 top: star.top,
//                 left: star.left,
//                 width: `${star.size * 8}px`,
//                 height: `${star.size * 8}px`,
//                 animationDelay: `${star.delay}s`,
//                 transform: `rotate(${star.rotation}deg)`,
//               }}
//             />
//           ))}
//         </>
//       )}

//       {/* Content Overlay */}
//       <div className="absolute inset-0 h-full w-full bg-gray-900/60 z-10" />
      
//       {/* Main Content - Perfectly Centered */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 sm:px-8">
//         <div className="text-center w-full max-w-4xl px-4">
//           <Typography 
//             variant="h3" 
//             color="white" 
//             className="mb-2 sm:mb-4" 
//             style={{ fontFamily: 'Montserrat, sans-serif' }} 
//             {...({} as any)}
//           >
//             29-31 November @ Kingston
//           </Typography>
          
//           <Typography 
//             variant="h1" 
//             color="white" 
//             className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6" 
//             style={{ fontFamily: 'Montserrat, sans-serif' }} 
//             {...({} as any)}
//           >
//             FYIC 2025: Empowering the Next Generation of Engineers
//           </Typography>
          
//           <Typography
//             variant="lead"
//             color="white"
//             className="text-lg sm:text-xl mb-8 sm:mb-12"
//             style={{ fontFamily: 'Montserrat, sans-serif' }}
//             {...({} as any)}
//           >
//             Join us for Ontario's premier leadership and integration conference designed
//             exclusively for first-year engineering students.
//           </Typography>

//           <CountdownTimer />

//           {/* Centered Play Button with Ripple Effect */}
//           <div className="mt-12 sm:mt-16 flex justify-center">
//             <div className="relative">
//               <IconButton
//                 className="rounded-full bg-white p-6 sm:p-8 z-10 hover:scale-110 transition-transform duration-300"
//                 onClick={triggerEffect}
//                 {...({} as any)}
//               >
//                 <PlayIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
//               </IconButton>

//               {ripple && (
//                 <span className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-20 sm:h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 animate-ripple pointer-events-none z-0" />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;


"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import CountdownTimer from "../components/CountdownTimer";
import "../app/globals.css";
import { useState, useRef, useEffect } from "react";

function Hero() {
  // Animation states
  const [ripple, setRipple] = useState(false);
  const [effectRunning, setEffectRunning] = useState(false);
  const [stars, setStars] = useState<
    { id: number; top: string; left: string; size: number; delay: number; rotation: number }[]
  >([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Mobile autoplay workaround
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to autoplay immediately
    const playPromise = video.play().catch(e => {
      console.log("Initial autoplay prevented:", e);
    });

    // Set up interaction listeners for mobile
    const handleInteraction = () => {
      setHasInteracted(true);
      video.play().catch(e => console.log("Interaction play failed:", e));
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    // Periodic play attempt for stubborn browsers
    const playInterval = setInterval(() => {
      if (video.paused) {
        video.play().catch(e => console.log("Periodic play attempt failed:", e));
      }
    }, 3000);

    return () => {
      clearInterval(playInterval);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  // Original animations
  const handleRipple = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
  };

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
      {/* Video with all mobile-friendly attributes */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/image/event.png"
        onError={() => {
          const fallback = document.getElementById('fallback-image');
          if (fallback) fallback.style.display = 'block';
        }}
      >
        <source src="/image/event.mp4" type="video/mp4" />
        <img 
          id="fallback-image"
          src="/image/event.png" 
          className="absolute top-0 left-0 w-full h-full object-cover hidden"
          alt="Fallback background"
        />
      </video>

      {/* Shooting stars effect */}
      {effectRunning && (
        <>
          <div className="fixed inset-0 bg-black z-40 transition-opacity duration-500" />
          {stars.map((star) => (
            <div
              key={star.id}
              className="shooting-star absolute z-50"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size * 8}px`,
                height: `${star.size * 8}px`,
                animationDelay: `${star.delay}s`,
                transform: `rotate(${star.rotation}deg)`,
              }}
            />
          ))}
        </>
      )}

      {/* Content overlay */}
      <div className="absolute inset-0 h-full w-full bg-gray-900/60 z-10" />
      
      {/* Main content - perfectly centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 sm:px-8">
        <div className="text-center w-full max-w-4xl px-4">
          <Typography 
            variant="h3" 
            color="white" 
            className="mb-2 sm:mb-4" 
            style={{ fontFamily: 'Montserrat, sans-serif' }} 
            {...({} as any)}
          >
            29-31 November @ Kingston
          </Typography>
          
          <Typography 
            variant="h1" 
            color="white" 
            className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6" 
            style={{ fontFamily: 'Montserrat, sans-serif' }} 
            {...({} as any)}
          >
            FYIC 2025: Empowering the Next Generation of Engineers
          </Typography>
          
          <Typography
            variant="lead"
            color="white"
            className="text-lg sm:text-xl mb-8 sm:mb-12"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            Join us for Ontario's premier leadership and integration conference designed
            exclusively for first-year engineering students.
          </Typography>

          <CountdownTimer />

          {/* Centered play button with ripple */}
          <div className="mt-12 sm:mt-16 flex justify-center">
            <div className="relative">
              <IconButton
                className="rounded-full bg-white p-6 sm:p-8 z-10 hover:scale-110 transition-transform duration-300"
                onClick={triggerEffect}
                {...({} as any)}
              >
                <PlayIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
              </IconButton>

              {ripple && (
                <span className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-20 sm:h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 animate-ripple pointer-events-none z-0" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay to encourage interaction */}
      {!hasInteracted && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center cursor-pointer"
          onClick={() => setHasInteracted(true)}
        >
          <div className="text-white text-center p-8">
            <Typography variant="h4" className="mb-4" {...({} as any)}>
              Tap anywhere to start
            </Typography>
            <Typography {...({} as any)}>
              (Video playback requires user interaction)
            </Typography>
          </div>

          


          
        </div>
      )}
    </div>
  );
}

export default Hero;