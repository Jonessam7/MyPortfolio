import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[2fr_1fr] gap-16 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Jones Samuel
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Backend Java Developer passionate about building robust, scalable server-side applications and microservices architecture.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Jonessam7" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="bg-gray-800 p-2.5 rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:-translate-y-0.5 transition-all duration-300 w-10 h-10" />
              </a>
              <a href="https://linkedin.com/in/jones-samuel" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="bg-gray-800 p-2.5 rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:-translate-y-0.5 transition-all duration-300 w-10 h-10" />
              </a>
              <a href="mailto:Jonessamueljs134@gmail.com">
                <Mail size={20} className="bg-gray-800 p-2.5 rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:-translate-y-0.5 transition-all duration-300 w-10 h-10" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-500">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300">Backend Development</li>
                <li className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300">Database Design</li>
                <li className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300">Security & Auth</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-500">Projects</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300">Family Calendar</li>
                <li className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300">AI Travel Agency</li>
                <li className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300">Academic Projects</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-800 text-gray-500">
          <p>&copy; 2025 Jones Samuel. All rights reserved</p>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;