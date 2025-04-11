import { ArrowDownCircle } from "lucide-react";
import HHlogo from "/logo-with-tok.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white font-OpenSans "
      style={{
        backgroundImage: `url('${HHlogo}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="absolute inset-0 hero-gradient"></div>
      <motion.div className="container mx-auto px-4 z-10 text-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 uppercase text-white">HEAVY HIT BOXING GYM</h1>
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10">Train like a champion with our expert Muay Thai and boxing coaches</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#book" className="px-8 py-3 bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all ease-in-out duration-300 flex items-center justify-center">
            BOOK A SESSION
          </a>
          <a href="#services" className="px-8 py-3 border-2 border-white font-bold text-lg hover:bg-white hover:text-black transition-all ease-in-out duration-300 flex items-center justify-center">
            EXPLORE OUR SERVICES
          </a>
        </div>
      </motion.div>
      <a href="#services" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse-subtle">
        <ArrowDownCircle size={40} />
      </a>
    </section>
  );
};

export default HeroSection;
