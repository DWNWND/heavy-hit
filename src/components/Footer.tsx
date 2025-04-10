import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-heading font-black tracking-wider mb-2">HEAVY HIT BOXING</h3>
            <p className="text-gray-400">Train Hard. Hit Harder.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#hero" className="hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#services" className="hover:text-gray-300 transition-colors">
              Services
            </a>
            <a href="#schedule" className="hover:text-gray-300 transition-colors">
              Schedule
            </a>
            <a href="#trainers" className="hover:text-gray-300 transition-colors">
              Trainers
            </a>
            <a href="#gallery" className="hover:text-gray-300 transition-colors">
              Gallery
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Heavy Hit Boxing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
