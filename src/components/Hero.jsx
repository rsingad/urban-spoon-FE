import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background with Zoom Effect */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/5778899/pexels-photo-5778899.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Floating Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-7xl font-black text-white drop-shadow-2xl">
          Urban <span className="text-orange-500">Spoon</span>
        </h1>
        <motion.p 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-2xl text-gray-200 mt-4 italic"
        >
          Elevating Flavors to a New Dimension
        </motion.p>
        <button className="mt-8 bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(234,88,12,0.6)] transition-all">
          Reserve 3D Experience
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;