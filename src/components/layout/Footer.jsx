import React from "react";
import { assets } from "../../assets/assets";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00008B] text-white">
      {/* === Main Footer === */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row justify-between gap-16 border-b border-gray-600">
        
        {/* === Left: Big Text + Email + Socials === */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
            We build AI tools.<br /> 
            Sign up to explore the latest innovations.
          </h2>

          <form className="flex items-center max-w-md border-b border-gray-400 pb-2 mb-6">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow bg-transparent text-white placeholder-gray-300 focus:outline-none text-lg"
            />
            <button
              type="submit"
              className="text-white hover:text-gray-300 text-xl"
            >
              ✉️
            </button>
          </form>

          {/* === Social Icons === */}
          <div className="flex space-x-6 text-xl">
            <a href="#" className="hover:text-gray-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* === Right: Company Links === */}
        <div className="flex flex-wrap gap-16 md:gap-24">
          <ul className="space-y-3 text-sm tracking-wide">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          </ul>
          <ul className="space-y-3 text-sm tracking-wide">
            <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-300">Support</a></li>
          </ul>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} Muse.ai. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-white font-medium">Team VA</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
