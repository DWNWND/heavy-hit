import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import InformationSection from "@/components/InformationSection";
// import TrainersSection from "@/components/TrainersSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const Index = () => {
  return (
    <motion.div className="min-h-screen" initial="hidden" animate="visible" variants={fadeInVariants}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <InformationSection />
      <BookingSection />
      {/* <TrainersSection /> */}
      <GallerySection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
