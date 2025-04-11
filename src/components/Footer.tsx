import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import HHlogo from "/HH-white-big-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 font-OpenSans">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div className="mb-8 md:mb-0 flex items-center flex-col justify-center gap-4 md:flex-row md:gap-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {/* <h3 className="text-3xl font-heading font-black tracking-wider mb-3">HEAVY HIT BOXING</h3> */}
            <img src={HHlogo} alt="logo" className="w-[10rem] object-cover object-center  transition-transform duration-500" />

            <p className="text-white font-bold font-heading text-xl">TRAIN HARD. HIT HARDER.</p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-5 md:gap-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            {["Home", "Services", "Information", "Gallery", "Contact"].map((item, i) => (
              <motion.a key={i} href={`#${item.toLowerCase()}`} className="hover:text-gray-300 transition-colors relative group" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                {item}
                <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white" initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.2 }} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div className="flex justify-center space-x-6 mt-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <a href="https://www.facebook.com/heavyhitboxing" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="https://www.instagram.com/explore/locations/733155146/heavy-hit-boxing-gym-chiang-mai/" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
            <Facebook size={24} />
          </a>
        </motion.div>

        <hr className="border-gray-800 my-10" />

        <motion.div className="text-center text-gray-500 text-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <p>&copy; {currentYear} Heavy Hit Boxing. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
