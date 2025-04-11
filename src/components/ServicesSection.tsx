import React from "react";
import { motion } from "framer-motion";
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
    <section id="services" className="py-24 bg-white section-scroll font-OpenSans">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-16"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} className="p-8 border border-gray-200 hover:border-black transition-all duration-300 flex flex-col items-center text-center  hover:shadow-lg bg-white" initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.1 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
              <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}>
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
