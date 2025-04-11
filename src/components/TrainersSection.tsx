// import React from "react";

// const TrainersSection = () => {
//   const trainers = [
//     {
//       name: "Michael Rodriguez",
//       role: "Head Coach & Owner",
//       bio: "Former professional Muay Thai fighter with over 15 years of experience. Michael founded Heavy Hit Boxing to share his passion for combat sports with the community.",
//       image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       name: "Sarah Jenkins",
//       role: "Boxing Coach",
//       bio: "National boxing champion with a focus on technique and footwork. Sarah specializes in developing fighters from the ground up.",
//       image: "https://images.unsplash.com/photo-1609952542840-df54cfddc3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       name: "David Lee",
//       role: "Muay Thai Specialist",
//       bio: "With roots in Thailand, David brings authentic Muay Thai training methodologies to every class. Specializes in clinch work and elbow techniques.",
//       image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     },
//   ];

//   return (
//     <section id="trainers" className="py-20 bg-white section-scroll font-OpenSans">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-heading text-center mb-4">OUR TRAINERS</h2>
//         <div className="w-24 h-1 bg-black mx-auto mb-12"></div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {trainers.map((trainer, index) => (
//             <div key={index} className="flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
//               <div className="relative h-96 mb-4 overflow-hidden">
//                 <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
//               </div>
//               <h3 className="text-xl font-heading font-bold">{trainer.name}</h3>
//               <p className="text-gray-700 font-medium mb-3">{trainer.role}</p>
//               <p className="text-gray-600">{trainer.bio}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 bg-gray-100 p-8 text-center">
//           <h3 className="text-2xl font-heading font-bold mb-4">ABOUT OUR GYM</h3>
//           <p className="text-lg max-w-3xl mx-auto">Heavy Hit Boxing was founded in 2015 with a simple mission: to provide authentic Muay Thai and boxing training in a supportive, inclusive environment. Our 4,000 sq ft facility features top-of-the-line equipment, including a full-size ring, heavy bags, speed bags, and a complete strength and conditioning area. Whether you're looking to get in shape, learn self-defense, or compete professionally, our team is dedicated to helping you achieve your goals.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrainersSection;
