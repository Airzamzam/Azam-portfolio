import React from "react";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center px-6 py-20 md:py-32 min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 rounded-3xl shadow-xl p-16 max-w-5xl w-full flex flex-col items-center justify-center hover:scale-[1.02] transition-transform">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          Hi <span className="text-pink-400">Mohsinigga</span>
        </h1>
        <a
          href="#contact"
          className="inline-block bg-red-400 text-gray-900 px-8 py-3 rounded-full font-medium transition-transform hover:scale-105"
        >
          <p>&lt;3</p>
        </a>
      </div>
    </section>
  );
}
