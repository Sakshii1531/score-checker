import React from "react";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] text-gray-400 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Brand Name */}
        <h2 className="text-white text-2xl font-bold">DevAI</h2>
        <p className="mt-2 text-sm">
          AI-powered platform to accelerate developer growth and interview success.
        </p>

        {/* Links */}
        <div className="flex justify-center space-x-6 mt-6 text-sm">
          <a href="#" className="hover:text-blue-400">Features</a>
          <a href="#" className="hover:text-blue-400">Pricing</a>
          <a href="#" className="hover:text-blue-400">Blog</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#"><Github size={22} stroke="#fff" /></a>
          <a href="#"><Twitter size={22} stroke="#1DA1F2" /></a>
          <a href="#"><Linkedin size={22} stroke="#0077B5" /></a>
          <a href="#"><Instagram size={22} stroke="#E1306C" /></a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} DevAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
