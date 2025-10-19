import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <HeroSection />
      {/* <About />
      <Projects />
      <Contact /> */}
    </div>
  );
}
