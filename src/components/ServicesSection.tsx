import React from "react";
import { Users, User, Clock, Award } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Group Classes",
      description: "Join our high-energy group sessions led by professional trainers. Perfect for all levels.",
      icon: <Users className="w-12 h-12 mb-4" />,
    },
    {
      title: "Private Lessons",
      description: "One-on-one training tailored to your specific goals and skill level.",
      icon: <User className="w-12 h-12 mb-4" />,
    },
    {
      title: "Flexible Schedule",
      description: "Morning, afternoon, and evening classes to fit your busy lifestyle.",
      icon: <Clock className="w-12 h-12 mb-4" />,
    },
    {
      title: "Competition Training",
      description: "Specialized training for fighters preparing for competitions and bouts.",
      icon: <Award className="w-12 h-12 mb-4" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white section-scroll">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-4">OUR SERVICES</h2>
        <div className="w-24 h-1 bg-black mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-gray-200 hover:border-black transition-colors flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              {service.icon}
              <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
