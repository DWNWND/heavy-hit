import React from "react";
import { ArrowDownCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1590057484069-8f2c2d9b95dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 uppercase text-white">HEAVY HIT BOXING</h1>
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10">Train like a champion with our expert Muay Thai and boxing coaches</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#book" className="px-8 py-3 bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors">
            BOOK A SESSION
          </a>
          <a href="#services" className="px-8 py-3 border-2 border-white font-bold text-lg hover:bg-white hover:text-black transition-colors">
            EXPLORE OUR SERVICES
          </a>
        </div>
      </div>
      <a href="#services" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse-subtle">
        <ArrowDownCircle size={40} />
      </a>
    </section>
  );
};

export default HeroSection;
