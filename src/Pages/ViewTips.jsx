import React from "react";

const ViewTips = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-4xl w-full">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-10 text-center">
           Smart Career Growth Tips
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 leading-relaxed mb-8 text-center text-lg">
          Your <span className="text-blue-600 font-semibold"> AI Career Guide </span> 
          is here to help you with 
          <span className="font-bold"> resumes, interviews, and job strategy</span>.  
          Get <span className="font-semibold text-blue-700">personalized insights </span> 
          to accelerate your career journey.
        </p>

        {/* Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          <div className="bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            ✅ Use strong <span className="font-semibold">action verbs</span> in your resume
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            🎯 Highlight <span className="font-semibold">3–5 key achievements</span>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            📄 Keep it <span className="font-semibold">1–2 pages</span> & ATS-friendly
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            📝 Customize resume for <span className="font-semibold">each job</span>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            🗣 Prepare a crisp <span className="font-semibold">intro pitch</span>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            🤝 Practice <span className="font-semibold">HR & technical Qs</span>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            💡 Work on <span className="font-semibold">body language</span>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            🔎 Research the <span className="font-semibold">company</span>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition md:col-span-2">
            📧 Send a polite <span className="font-semibold">thank-you mail</span> after interview
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTips;
