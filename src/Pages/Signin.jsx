import React, { useState } from "react";


export default function Signin({ onToggle }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Sign in successful!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white px-4 overflow-hidden bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14]">
      {/* Floating Boxes Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`box box-${i + 1}`}></div>
        ))}
      </div>

      {/* Signin Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl p-6 bg-transparent backdrop-blur-md shadow-xl border border-white/10">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2 bg-[#2a2a2a] rounded-full p-1">
            <button
              onClick={onToggle}
              className="px-4 py-1 text-sm font-semibold text-white"
            >
              Sign up
            </button>
            <button className="px-4 py-1 text-sm font-semibold bg-white text-black rounded-full">
              Sign in
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4 text-center">Welcome Back</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/10 p-3 rounded-md outline-none placeholder:text-gray-400"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-white/10 p-3 pr-16 rounded-md outline-none placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-sm text-gray-400 hover:text-white"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-white/80 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="px-4 text-gray-400 text-sm">OR SIGN IN WITH</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>

        {/* Google Button */}
        <div className="flex justify-center">
          <button className="w-[200px] bg-white/10 p-3 rounded-md flex justify-center items-center hover:bg-white/20 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5"
            />
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          By signing in, you agree to our{" "}
          <a href="#" className="underline">
            Terms & Service
          </a>
        </p>
      </div>
    </div>
  );
}
