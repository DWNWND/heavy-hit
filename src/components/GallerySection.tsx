import React from "react";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Boxing training session",
    },
    {
      src: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Muay Thai class",
    },
    {
      src: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Heavy bag training",
    },
    {
      src: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Gym equipment",
    },
    {
      src: "https://images.unsplash.com/photo-1616279969467-e9f0e5e682aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Boxing ring",
    },
    {
      src: "https://images.unsplash.com/photo-1590154571575-d728d85383d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Private coaching session",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-100 section-scroll">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-4">OUR GYM</h2>
        <div className="w-24 h-1 bg-black mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-64 md:h-80 overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-all duration-500 hover:scale-105" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="inline-block px-8 py-3 bg-black text-white font-bold text-lg hover:bg-gray-800 transition-colors">
            VISIT OUR GYM
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
