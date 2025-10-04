import React from "react";

const FeedbackForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] p-6">
      <div className="max-w-6xl w-full space-y-12">
        
        {/* Top Heading Section */}
        <div className="relative w-full flex justify-center items-center">
          {/* Background Large Text */}
          <h1 className="absolute text-7xl md:text-[140px] font-extrabold text-gray-700 opacity-20 tracking-wider select-none">
            CONTACT
          </h1>
          {/* Foreground Heading */}
          <h2 className="relative text-3xl md:text-5xl font-bold text-blue-500">
            GET IN TOUCH
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left Section */}
          <div className="text-white space-y-6">
            <h3 className="text-xl font-semibold">DON'T BE SHY</h3>
            <p className="text-gray-400 max-w-md">
              Feel free to get in touch with me. I’m always open to discussing new
              projects, creative ideas, or opportunities to collaborate.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4">
              <span className="text-pink-400 text-2xl">📧</span>
              <div>
                <h4 className="font-semibold">Mail me</h4>
                <p className="text-gray-300">info@mail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <span className="text-green-400 text-2xl">📞</span>
              <div>
                <h4 className="font-semibold">Call me</h4>
                <p className="text-gray-300">+91 XXXXXXXXXX</p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-[#151a23]/90 p-6 rounded-xl shadow-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter your Name"
                className="p-3 w-full rounded-md bg-transparent text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Enter a valid Email Address"
                className="p-3 w-full rounded-md bg-transparent text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Dropdown Field */}
              <select
                className="p-3 w-full rounded-md bg-transparent text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled className="bg-[#151a23] text-gray-400">
                  Select Purpose
                </option>
                <option value="Project Inquiry" className="bg-[#151a23] text-white">
                  Project Inquiry
                </option>
                <option value="Collaboration / Partnership" className="bg-[#151a23] text-white">
                  Collaboration / Partnership
                </option>
                <option value="Business Proposal" className="bg-[#151a23] text-white">
                  Business Proposal
                </option>
                <option value="Hiring / Freelance Opportunity" className="bg-[#151a23] text-white">
                  Hiring / Freelance Opportunity
                </option>
                <option value="Feedback / Suggestions" className="bg-[#151a23] text-white">
                  Feedback / Suggestions
                </option>
                <option value="Other" className="bg-[#151a23] text-white">
                  Other
                </option>
              </select>

              <textarea
                placeholder="Enter your Message"
                rows="4"
                className="p-3 w-full rounded-md bg-transparent text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="accent-blue-500" />
                <label htmlFor="terms" className="text-gray-400 text-sm">
                  I accept the{" "}
                  <span className="text-blue-500 cursor-pointer">
                    Terms of Service
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full p-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
