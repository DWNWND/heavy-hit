import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InfoBoard from "/infoboard-small.png";
import { motion } from "framer-motion";

const InformationSection = () => {
  const [activeTab, setActiveTab] = useState("group");

  // const groupSchedule = [
  //   { day: "Monday", sessions: ["6:00 AM - 7:30 AM", "12:00 PM - 1:30 PM", "6:00 PM - 8:00 PM"] },
  //   { day: "Tuesday", sessions: ["6:00 AM - 7:30 AM", "12:00 PM - 1:30 PM", "6:00 PM - 8:00 PM"] },
  //   { day: "Wednesday", sessions: ["6:00 AM - 7:30 AM", "12:00 PM - 1:30 PM", "6:00 PM - 8:00 PM"] },
  //   { day: "Thursday", sessions: ["6:00 AM - 7:30 AM", "12:00 PM - 1:30 PM", "6:00 PM - 8:00 PM"] },
  //   { day: "Friday", sessions: ["6:00 AM - 7:30 AM", "12:00 PM - 1:30 PM", "6:00 PM - 8:00 PM"] },
  //   { day: "Saturday", sessions: ["8:00 AM - 10:00 AM", "Open Gym: 10:00 AM - 2:00 PM"] },
  //   { day: "Sunday", sessions: ["Closed"] },
  // ];

  // const privateSchedule = {
  //   muayThai: "Available daily from 9:00 AM - 9:00 PM by appointment",
  //   boxing: "Available daily from 9:00 AM - 9:00 PM by appointment",
  //   note: "Private lessons are 60-90 minutes and can be booked via WhatsApp",
  // };

  return (
    <section id="information" className="py-20 bg-gray-100 section-scroll font-OpenSans">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-4">INFORMATION</h2>
        <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
        <motion.div className="flex flex-col justify-center items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
          <p className="max-w-2xl text-center text-xl mb-10 font-semibold">We are a gym that teaches Muay Thai and Western boxing for health, weight loss, and fitness. It is suitable for anyone who is interested, even those without any prior experience.</p>
          <div className="flex justify-center items-center">
            <img src={InfoBoard} alt="logo" className="max-w-2xl w-full object-cover object-center transition-transform duration-500" />
          </div>
        </motion.div>
        {/* <Tabs defaultValue="group" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="group" className="font-heading text-lg py-3">
              GROUP CLASSES
            </TabsTrigger>
            <TabsTrigger value="private" className="font-heading text-lg py-3">
              PRIVATE SESSIONS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="group" className="animate-fade-in-up">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="py-4 px-6 text-left font-heading">DAY</th>
                    <th className="py-4 px-6 text-left font-heading">CLASS TIMES</th>
                  </tr>
                </thead>
                <tbody>
                  {groupSchedule.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-4 px-6 font-bold">{item.day}</td>
                      <td className="py-4 px-6">
                        {item.sessions.map((session, idx) => (
                          <div key={idx} className="mb-1 last:mb-0">
                            {session}
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="private" className="animate-fade-in-up">
            <div className="bg-white p-6 shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold mb-4">MUAY THAI PRIVATE TRAINING</h3>
                <p className="text-lg">{privateSchedule.muayThai}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold mb-4">BOXING PRIVATE TRAINING</h3>
                <p className="text-lg">{privateSchedule.boxing}</p>
              </div>

              <div className="p-4 bg-black text-white text-center">
                <p>{privateSchedule.note}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs> */}
      </div>
    </section>
  );
};

export default InformationSection;
