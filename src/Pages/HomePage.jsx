import React from "react";
import homePageImage from "../assets/homePage.png"; // your image from src/assets

const HomePage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* New Tag */}
          <span className="inline-block text-[10px] tracking-widest font-semibold uppercase bg-blue-600/90 px-3 py-1 rounded-full shadow-md">
            New
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
            AI for Every Developer
          </h1>

          {/* Description */}
          <p className="text-gray-300 mt-6 text-lg max-w-xl">
            An AI-powered platform that simulates real interviews, provides instant feedback, and helps you track your progress for success.
          </p>

          {/* Button */}
          <button className="mt-8 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg transition-transform transform hover:scale-105">
            Explore More
          </button>
        </div>

        {/* RIGHT — GLOW PANEL */}
        <div className="relative flex items-center justify-center">
          {/* Neon Glow */}
          <div className="pointer-events-none absolute -right-8 top-10 h-2/3 w-28 bg-gradient-to-b from-cyan-400/40 via-blue-500/30 to-indigo-600/20 blur-3xl rounded-full opacity-80" />

          {/* Panel */}
          <div className="relative w-full max-w-[560px] rounded-[22px] bg-[#0e1420]/70 border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md overflow-hidden">
            {/* Top Rim Light */}
            <div className="pointer-events-none absolute -top-2 left-6 right-6 h-[3px] bg-gradient-to-r from-transparent via-sky-300/70 to-transparent blur-[2px]" />

            {/* Image */}
            <div className="p-5">
              <img
                src={homePageImage}
                alt="AI interface"
                className="w-full h-[360px] object-cover md:object-contain rounded-xl"
              />
            </div>

            {/* Bottom Bar */}
            <div className="relative mx-8 mb-8">
              <div className="h-16 rounded-3xl bg-black/90 border border-white/5 flex items-center justify-between px-6">
                <span className="text-sm text-gray-300">Running...</span>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md transition-transform transform hover:scale-105">
                  <span className="text-yellow-300">✦</span> Stop
                </button>
              </div>
              {/* Glow Effect */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-sky-400/40 via-fuchsia-400/30 to-rose-400/40 blur-2xl" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
