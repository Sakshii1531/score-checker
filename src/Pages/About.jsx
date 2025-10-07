import React from "react";
import aiBanner from "../assets/hero-page.png";
import aiHiring from "../assets/smart-hiring.png";
import aiPrep from "../assets/better-prepration-interview.png";
import aiExperience from "../assets/choose-us-experience.png"; // new image
import fairScalable from "../assets/fair.png";  // new image
import futureReady from "../assets/future-ready.png";    // new image

export default function About() {
  return (
    <div className="bg-[#0b0f14] text-gray-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] text-white py-20 px-6 text-center ">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
          About Our AI Interview Platform
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          Preparing candidates for the future of hiring with Artificial Intelligence.
        </p>
      </section>

      {/* Section 1: AI Trend */}
      <section className="py-10 px-4 md:px-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            Why AI Interviews are the New Trend?
          </h2>
          <p className="text-base leading-relaxed text-gray-300">
            In today’s competitive job market, companies receive thousands of applications.
            To save time, reduce bias, and maintain efficiency,
            <b className="text-blue-500"> AI-powered interviews </b>
            are rapidly being adopted worldwide.
            <br /><br />
            Big tech firms and startups rely on AI to evaluate communication, technical knowledge,
            and confidence in a scalable way.
            <br /><br />
            AI-driven interviews are not just a trend – they are becoming a
            <b className="text-blue-500"> standard in recruitment</b>, ensuring fair evaluation and faster hiring decisions.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={aiBanner}
            alt="AI Interview Trend"
            className="rounded-xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-500 w-[90%]"
          />
        </div>
      </section>

      {/* Section 2: Recruiter Benefits */}
      <section className="py-10 px-4 md:px-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src={aiHiring}
            alt="AI Recruitment Benefits"
            className="rounded-xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-500 w-[90%]"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            Smarter Hiring for Recruiters
          </h2>
          <p className="text-base leading-relaxed text-gray-300">
            Recruiters save countless hours by letting AI handle the initial screening process.
            Instead of spending days on repetitive interviews, hiring managers can focus on top-performing candidates.
            <br /><br />
            Structured AI insights help reduce bias, improve candidate experience, and enable faster,
            <b className="text-blue-500"> data-driven decisions.</b>
          </p>
        </div>
      </section>

      {/* Section 3: Candidate Preparation */}
      <section className="py-10 px-4 md:px-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            Better Preparation for Candidates
          </h2>
          <p className="text-base leading-relaxed text-gray-300">
            Our platform allows candidates to practice realistic AI interviews before facing real recruiters.
            <br /><br />
            Receive instant, unbiased feedback on communication skills, confidence, and technical knowledge.
            <br /><br />
            Students and professionals can be
            <b className="text-blue-500"> interview-ready anytime, anywhere.</b>
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={aiPrep}
            alt="AI Candidate Preparation"
            className="rounded-xl border border-blue-500/30  hover:scale-105 transition-transform duration-500 w-[90%]"
          />
        </div>
      </section>

     {/* Why Choose Us Section */}
<section className="py-16 px-4 md:px-10 bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] text-center">
  <h2 className="text-3xl font-bold mb-12 text-blue-500">
    Why Choose Us?
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto place-items-center">
    {[aiExperience, fairScalable, futureReady].map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt="Why Choose Us"
        className="w-56 h-56 md:w-64 md:h-64 object-contain rounded-xl transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]"
      />
    ))}
  </div>
</section>



    </div>
  );
}
