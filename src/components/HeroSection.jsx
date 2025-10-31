"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import ReactLogo from "../assets/react.svg";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for offset
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const springX = useSpring(offsetX, { stiffness: 200, damping: 18 });
  const springY = useSpring(offsetY, { stiffness: 200, damping: 18 });

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !sectionRef.current || !imageRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const imgRect = imageRef.current.getBoundingClientRect();

    const imgCenterX = imgRect.left + imgRect.width / 2 - rect.left;
    const imgCenterY = imgRect.top + imgRect.height / 2 - rect.top;

    const dx = e.clientX - rect.left - imgCenterX;
    const dy = e.clientY - rect.top - imgCenterY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const activationRadius = 200;
    const repelStrength = 0.25;

    if (distance < activationRadius) {
      const ratio = 1 - distance / activationRadius;
      offsetX.set(-dx * ratio * repelStrength);
      offsetY.set(-dy * ratio * repelStrength);
    } else {
      offsetX.set(0);
      offsetY.set(0);
    }
  };

  const handleMouseLeave = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center px-6 py-20 md:py-32 min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Hero Card */}
      <div className="bg-gray-800 rounded-3xl shadow-xl p-16 max-w-5xl w-full flex flex-col items-center justify-center hover:scale-[1.02] transition-transform z-10 relative">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          Hi <span className="text-pink-400">.</span>
        </h1>
        <a
          href="#contact"
          className="inline-block bg-red-400 text-gray-900 px-8 py-3 rounded-full font-medium transition-transform hover:scale-105"
        >
          <p>&lt;3</p>
        </a>
      </div>

      {/* Repel Image */}
      {!isMobile && (
        <motion.img
          ref={imageRef}
          src={ReactLogo}
          alt="React Logo"
          className="absolute w-24 md:w-32 pointer-events-none select-none z-20"
          style={{
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
            x: springX,
            y: springY,
          }}
        />
      )}

      {/* Mobile drag */}
      {isMobile && (
        <motion.img
          src={ReactLogo}
          alt="React Logo"
          drag
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 400, bounceDamping: 18 }}
          className="absolute w-24 md:w-32 pointer-events-auto select-none z-20"
          style={{
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}
    </section>
  );
}
