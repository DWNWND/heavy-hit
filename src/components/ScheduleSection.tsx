import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ScheduleSection = () => {
  const [activeTab, setActiveTab] = useState("group");

  const groupSchedule = [
    { day: "Monday", sessions: ["6:00 AM - 7:30 AM", "12:00 PM - 1:30 PM", "6:00 PM - 8:00 PM"] },
    { day: "Tuesday", sessions: ["6:00 AM - 7:30 AM", "12:00 PM - 1:30 PM", "6:00 PM - 8:00 PM"] },
    { day: "Wednesday", sessions: ["6:00 AM - 7:30 AM", "12:00 PM - 1:30 PM", "6:00 PM - 8:00 PM"] },
    { day: "Thursday", sessions: ["6:00 AM - 7:30 AM", "12:00 PM - 1:30 PM", "6:00 PM - 8:00 PM"] },
    { day: "Friday", sessions: ["6:00 AM - 7:30 AM", "12:00 PM - 1:30 PM", "6:00 PM - 8:00 PM"] },
    { day: "Saturday", sessions: ["8:00 AM - 10:00 AM", "Open Gym: 10:00 AM - 2:00 PM"] },
    { day: "Sunday", sessions: ["Closed"] },
  ];

  const privateSchedule = {
    muayThai: "Available daily from 9:00 AM - 9:00 PM by appointment",
    boxing: "Available daily from 9:00 AM - 9:00 PM by appointment",
    note: "Private lessons are 60-90 minutes and can be booked via WhatsApp",
  };

  return (
    <section id="schedule" className="py-20 bg-gray-100 section-scroll">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-4">TRAINING SCHEDULE</h2>
        <div className="w-24 h-1 bg-black mx-auto mb-12"></div>

        <Tabs defaultValue="group" className="w-full max-w-4xl mx-auto">
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
        </Tabs>
      </div>
    </section>
  );
};

export default ScheduleSection;
