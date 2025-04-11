import { MessageCircle, Clock, Calendar } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";
import LineQR from "/line-qr.png";

const BookingSection = () => {
  return (
    <section id="book" className="py-20 bg-black text-white section-scroll">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-4 text-white">BOOK A SESSION</h2>
        <div className="w-24 h-1 bg-white mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <MessageCircle size={64} />
          </div>

          {/* <h3 className="text-2xl font-heading mb-4">BOOK VIA WHATSAPP</h3> */}
          {/* <p className="text-lg mb-6">We make booking easy! Simply send us a message on WhatsApp and our team will get back to you within 2 hours.</p> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 border border-gray-700 flex flex-col items-center">
              <Clock size={32} className="mb-4" />
              <h4 className="text-xl font-heading mb-2">RESPONSE TIME</h4>
              <p>Within 2 hours during business hours</p>
            </div>
            <div className="p-6 border border-gray-700 flex flex-col items-center">
              <Calendar size={32} className="mb-4" />
              <h4 className="text-xl font-heading mb-2">BOOKING WINDOW</h4>
              <p>24 hours notice for guaranteed spots</p>
            </div>
          </div> */}

          <div className="flex flex-col gap-4 justify-center items-center mt-6">
            <span>Message us via one of the following channels to book:</span>
            <p className="mb-8 text-white">*Please include your name, preferred date/time, and session type (group/private) in your message</p>
            <img src={LineQR} alt="line qr code" className="w-[10rem] object-cover object-center  transition-transform duration-500" />
            <a href="https://wa.me/0895524242" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors">
              BOOK ON WHATSAPP
            </a>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/heavyhitboxing" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
                <Instagram size={34} />
              </a>
              <a href="https://www.instagram.com/explore/locations/733155146/heavy-hit-boxing-gym-chiang-mai/" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
                <Facebook size={34} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;
