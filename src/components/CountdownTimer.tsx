"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const CountdownTimer = () => {
  const eventDate = new Date("2025-11-29T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [hasLaunched, setHasLaunched] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);

      const isZero =
        newTime.days === 0 &&
        newTime.hours === 0 &&
        newTime.minutes === 0 &&
        newTime.seconds === 0;

      if (isZero && !hasLaunched) {
        setHasLaunched(true);
        triggerMultipleConfetti();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hasLaunched]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const triggerMultipleConfetti = () => {
    triggerConfetti();
    setTimeout(triggerConfetti, 500);
    setTimeout(triggerConfetti, 1000);
  };

  if (!mounted) return null;

  const isOver =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isOver) {
    return (
      <div className="mt-6 flex justify-center">
        <div className="bg-yellow-300 text-black text-xl font-bold px-6 py-3 rounded-xl animate-pulse shadow-lg">
          🎉 FYIC 2025 is Live!
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 flex justify-center gap-6 text-white text-lg font-medium">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-3xl font-bold">{value.toString().padStart(2, "0")}</div>
          <div className="uppercase text-sm text-gray-300">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;


