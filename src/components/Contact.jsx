import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactDetails = [
    { icon: <MapPin className="text-orange-500" />, label: "Address", value: "123 Gourmet Street, bapu nager, Jaipur" },
    { icon: <Phone className="text-orange-500" />, label: "Phone", value: "+91 78779 04941" },
    { icon: <Mail className="text-orange-500" />, label: "Email", value: "hello@urbanspoon.com" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-gray-900 dark:text-white">
            Find <span className="text-orange-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.4)]">Us</span>
          </h2>
          <p className="text-gray-500 mt-4 font-medium uppercase tracking-[0.3em]">Contact & Timings</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Details */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-orange-50 dark:bg-white/5 p-8 rounded-[2.5rem] border border-orange-100 dark:border-white/10 backdrop-blur-md shadow-xl h-full"
          >
            <h3 className="text-2xl font-black mb-8 dark:text-white flex items-center gap-3">
              <span className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/40 text-white">
                <Phone size={20} />
              </span>
              Get In Touch
            </h3>
            <div className="space-y-8">
              {contactDetails.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-md group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-orange-600 uppercase mb-1">{item.label}</p>
                    <p className="font-bold text-gray-800 dark:text-gray-200">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Opening Hours */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-gray-900 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group h-full"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl group-hover:bg-orange-600/40 transition-all duration-700" />
            
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-orange-500">
                <Clock size={20} />
              </span>
              Opening Hours
            </h3>
            <div className="space-y-6 relative z-10">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all">
                <p className="text-gray-400 text-sm font-bold uppercase mb-2">Monday - Friday</p>
                <p className="text-2xl font-black text-white">10:00 <span className="text-orange-500 text-sm italic">AM</span> — 11:00 <span className="text-orange-500 text-sm italic">PM</span></p>
              </div>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all">
                <p className="text-gray-400 text-sm font-bold uppercase mb-2">Saturday - Sunday</p>
                <p className="text-2xl font-black text-white">09:00 <span className="text-orange-500 text-sm italic">AM</span> — 11:30 <span className="text-orange-500 text-sm italic">PM</span></p>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Task 3 (Real Map Integration) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-1 min-h-[400px] rounded-[2.5rem] overflow-hidden border-2 border-orange-500/20 shadow-2xl relative"
          >
            {/* Map Iframe Integration */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.354145926317!2d75.7958!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4190c109773%3A0x6d95368a1d798157!2sC%20Scheme%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.3) contrast(1.2)' }} 
              allowFullScreen="" 
              loading="lazy" 
              className="absolute inset-0 grayscale-[0.2] invert-[0.1] dark:invert-[0.9] dark:hue-rotate-180 transition-all duration-500"
            ></iframe>

            {/* Floating Glow on Map */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2.5rem]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;