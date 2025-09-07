import React, { useState } from "react";

export default function Signup({ onToggle }) {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", password: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password))
      newErrors.password = "Password must be 8+ chars, with 1 capital letter & number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("Account Created Successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4 relative">
      <div className="relative z-10 bg-transparent backdrop-blur-md border border-white/10 w-full max-w-md rounded-2xl shadow-xl p-6">
        {/* Toggle Buttons */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2 bg-[#2a2a2a] rounded-full p-1">
            <button className="px-4 py-1 text-sm font-semibold bg-white text-black rounded-full">Sign up</button>
            <button onClick={onToggle} className="px-4 py-1 text-sm font-semibold text-white">Sign in</button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">Create an account</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-white/10 p-3 rounded-md outline-none placeholder:text-gray-400"
              />
              {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-white/10 p-3 rounded-md outline-none placeholder:text-gray-400"
              />
              {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/10 p-3 rounded-md outline-none placeholder:text-gray-400"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white/10 p-3 rounded-md outline-none placeholder:text-gray-400"
          />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}

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
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-white/80 transition"
          >
            Create an account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="px-4 text-gray-400 text-sm">OR SIGN IN WITH</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>

        {/* Google Sign In Button */}
        <div className="space-x-4 flex justify-center">
          <button className="w-[200px] bg-white/10 p-3 rounded-md flex justify-center items-center hover:bg-white/20 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5" />
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          By creating an account, you agree to our{" "}
          <a href="#" className="underline">Terms & Service</a>
        </p>
      </div>
    </div>
  );
}
