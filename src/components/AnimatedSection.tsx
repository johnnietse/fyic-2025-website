// components/AnimatedSection.tsx

"use client";  // <-- Add this line at the top of your file

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";

// Define animation variants for smoother control
const variants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
  // Initialize animation control using `useAnimation`
  const controls = useAnimation();

  // Trigger the animation after component mounts
  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={variants}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
