import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <Hero />
      {/* <About />
      <Projects />
      <Contact /> */}
    </div>
  );
}
