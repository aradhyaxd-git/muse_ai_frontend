import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      {/* === Main Footer === */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row justify-between items-start border-b border-gray-200 gap-16">
        
        {/* === Left: Logo + Description === */}
        <div className="flex-1">
          <img
            src={assets.logo}
            alt="Muse.ai Logo"
            className="h-12 mb-6"
          />
          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            Experience the power of AI with{" "}
            <span className="text-gray-900 font-semibold">Muse.ai</span>. <br />
            Transform your content creation with our suite of premium AI tools —
            write articles, generate images, and enhance your workflow.
          </p>
        </div>

        {/* === Right: Company Links === */}
        <div className="flex flex-col">
          <h3 className="text-gray-900 font-semibold mb-5 text-xl">Company</h3>
          <ul className="space-y-3 text-base text-gray-600">
            <li>
              <a href="#" className="hover:text-[#2563EB] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2563EB] transition">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2563EB] transition">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2563EB] transition">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center text-base text-gray-500">
          <p>&copy; {new Date().getFullYear()} Muse.ai. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-[#2563EB] font-medium">Team VA</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
