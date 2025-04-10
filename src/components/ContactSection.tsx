import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = {
    phone: "+1 (555) 123-4567",
    email: "info@heavyhitboxing.com",
    address: "123 Fighter Street, Downtown, Los Angeles, CA 90001",
    hours: "Monday-Friday: 6AM-9PM | Saturday: 8AM-2PM | Sunday: Closed",
  };

  return (
    <section id="contact" className="py-20 bg-white section-scroll">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-4">CONTACT US</h2>
        <div className="w-24 h-1 bg-black mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <h3 className="text-xl font-heading font-bold mb-6">GET IN TOUCH</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p>{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p>{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p>{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p>{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="#book" className="inline-block px-8 py-3 bg-black text-white font-bold text-lg hover:bg-gray-800 transition-colors mr-4">
                BOOK NOW
              </a>
              <a href="tel:+15551234567" className="inline-block px-8 py-3 border-2 border-black font-bold text-lg hover:bg-black hover:text-white transition-colors">
                CALL US
              </a>
            </div>
          </div>

          <div className="h-96 lg:h-auto animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130390376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
