import React from "react";
import aiBanner from "../assets/hero-page.png";
import aiHiring from "../assets/smart-hiring.png";
import aiPrep from "../assets/better-prepration-interview.png";
import aiExperience from "../assets/choose-us-experience.png";
import fairScalable from "../assets/fair-scalable.png";
import futureReady from "../assets/future-ready.png";

export default function About() {
  return (
    <div className="bg-[#0b0f14] text-gray-200 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] text-white py-20 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400">
          About Our AI Interview Platform
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          Preparing candidates for the future of hiring with Artificial Intelligence.
        </p>
      </section>

      {/* Section 1: AI Trend */}
      <section className="py-12 px-5 md:px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">
            Why AI Interviews are the New Trend?
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            In today’s competitive job market, companies receive thousands of applications.
            To save time, reduce bias, and maintain efficiency,
            <b className="text-blue-400"> AI-powered interviews </b>
            are rapidly being adopted worldwide.
            <br />
            <br />
            Big tech firms and startups rely on AI to evaluate communication, technical knowledge,
            and confidence in a scalable way.
            <br />
            <br />
            AI-driven interviews are not just a trend – they are becoming a
            <b className="text-blue-400"> standard in recruitment</b>, ensuring fair evaluation and faster hiring decisions.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={aiBanner}
            alt="AI Interview Trend"
            className="rounded-xl border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-500 w-[90%] sm:w-4/5 md:w-full max-w-md"
          />
        </div>
      </section>

      {/* Section 2: Recruiter Benefits */}
      <section className="py-12 px-5 md:px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center order-1 md:order-none">
          <img
            src={aiHiring}
            alt="AI Recruitment Benefits"
            className="rounded-xl border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-500 w-[90%] sm:w-4/5 md:w-full max-w-md"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">
            Smarter Hiring for Recruiters
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            Recruiters save countless hours by letting AI handle the initial screening process.
            Instead of spending days on repetitive interviews, hiring managers can focus on top-performing candidates.
            <br />
            <br />
            Structured AI insights help reduce bias, improve candidate experience, and enable faster,
            <b className="text-blue-400"> data-driven decisions.</b>
          </p>
        </div>
      </section>

      {/* Section 3: Candidate Preparation */}
      <section className="py-12 px-5 md:px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">
            Better Preparation for Candidates
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            Our platform allows candidates to practice realistic AI interviews before facing real recruiters.
            <br />
            <br />
            Receive instant, unbiased feedback on communication skills, confidence, and technical knowledge.
            <br />
            <br />
            Students and professionals can be
            <b className="text-blue-400"> interview-ready anytime, anywhere.</b>
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={aiPrep}
            alt="AI Candidate Preparation"
            className="rounded-xl border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-500 w-[90%] sm:w-4/5 md:w-full max-w-md"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-400">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto place-items-center">
          {[aiExperience, fairScalable, futureReady].map((img, idx) => (
            <div key={idx} className="w-60 sm:w-64 md:w-72">
              <img
                src={img}
                alt="Why Choose Us"
                className="w-full h-auto object-contain rounded-xl transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
