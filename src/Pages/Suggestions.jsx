import React from "react";

const Suggestions = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-12 max-w-4xl w-full">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-10 text-center">
          Tailored Resume & Interview Suggestions
        </h1>

        {/* Intro Paragraphs */}
        <p className="text-gray-700 leading-relaxed mb-5 text-lg">
          Our <span className="font-semibold text-blue-600">AI-powered platform</span> not only analyzes resumes but also
          prepares you for interviews through <span className="font-semibold">mock interview simulations</span>. 
          You will receive <span className="font-semibold">real-time feedback</span> on both your resume and interview 
          performance, helping you confidently land your dream job.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          By following these suggestions, you can improve keyword usage, highlight achievements, and increase your chances 
          of getting shortlisted for interviews. Our AI also gives insights into:
        </p>

        {/* Suggestions List */}
        <ul className="list-disc pl-8 text-gray-800 space-y-3 text-base">
          <li>Add skills that match the job description</li>
          <li>Use measurable achievements with numbers</li>
          <li>Optimize keywords for ATS (Applicant Tracking Systems)</li>
          <li>Keep formatting simple, professional, and clean</li>
          <li>Practice interview questions with AI feedback</li>
          <li>Get insights on communication style, tone, and confidence</li>
          <li>Track progress with detailed performance reports</li>
          <li>Receive tailored templates and best practices</li>
          <li>Enhance soft skills with personalized improvement tips</li>
        </ul>
      </div>
    </div>
  );
};

export default Suggestions;
