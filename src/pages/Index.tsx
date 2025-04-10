
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ScheduleSection from "@/components/ScheduleSection";
import TrainersSection from "@/components/TrainersSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ScheduleSection />
      <TrainersSection />
      <GallerySection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
