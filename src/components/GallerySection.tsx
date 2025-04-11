import React from "react";
import { motion } from "framer-motion";
import group1 from "/groupphotos/group1.jpg";
import group2 from "/groupphotos/group2.jpg";
import group3 from "/groupphotos/group3.jpg";
import group4 from "/groupphotos/group4.jpg";
import group5 from "/groupphotos/group5.jpg";
import group6 from "/groupphotos/group6.jpg";
import group7 from "/groupphotos/group7.jpg";
import group8 from "/groupphotos/group8.jpg";
import group9 from "/groupphotos/group9.jpg";
import group10 from "/groupphotos/group10.jpg";

const GallerySection = () => {
  const galleryImages = [
    {
      src: `${group1}`,
      alt: "Boxing training session",
    },
    {
      src: `${group2}`,
      alt: "Muay Thai class",
    },
    {
      src: `${group3}`,
      alt: "Heavy bag training",
    },
    {
      src: `${group4}`,
      alt: "Gym equipment",
    },
    {
      src: `${group5}`,
      alt: "Boxing ring",
    },
    {
      src: `${group6}`,
      alt: "Private coaching session",
    },
    {
      src: `${group7}`,
      alt: "Gym equipment",
    },
    {
      src: `${group8}`,
      alt: "Boxing ring",
    },
    {
      src: `${group9}`,
      alt: "Private coaching session",
    },
  ];

  return (
    <motion.section id="gallery" className="py-24 bg-gray-100 section-scroll font-OpenSans" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">GALLERY</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-16"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div key={index} className="relative h-64 md:h-80 overflow-hidden rounded-lg" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.03 }}>
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-all duration-500" />
              <motion.div className="absolute inset-0 bg-black/60 opacity-0 flex items-center justify-center" whileHover={{ opacity: 1 }}>
                <p className="text-white text-lg font-medium">{image.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <motion.a href="#contact" className="inline-block px-8 py-3 bg-black text-white font-bold text-lg hover:bg-gray-900 transition-all rounded-sm" whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }} whileTap={{ scale: 0.95 }}>
            VISIT OUR GYM
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GallerySection;
