import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Leaf, Star } from 'lucide-react'; // Icons for uniqueness

const About = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* 3D Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(234,88,12,0.2)]">
              <img 
                src="https://images.pexels.com/photos/15629088/pexels-photo-15629088.jpeg" 
                alt="Chef Cooking" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Background Floating Elements for 3D Feel */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-red-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h4 className="text-orange-500 font-bold tracking-widest uppercase mb-4">ABOUT</h4>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
              Traditional Taste <br />
              <span className="text-orange-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.4)]">Meet Modern Vibes</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
              Urban Spoon ek premium dining destination hai jahan hum authentic flavors ko modern twist ke saath pesh karte hain. 
              Humari specialized cuisine fresh ingredients aur traditional spices ka ek anokha mishran hai.
            </p>

            {/* Unique Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-orange-50 dark:bg-white/5 rounded-2xl border border-orange-100 dark:border-white/10 hover:shadow-lg transition-all">
                <ChefHat className="text-orange-600" size={32} />
                <span className="font-bold dark:text-gray-200">Expert Chefs</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-orange-50 dark:bg-white/5 rounded-2xl border border-orange-100 dark:border-white/10 hover:shadow-lg transition-all">
                <Leaf className="text-orange-600" size={32} />
                <span className="font-bold dark:text-gray-200">Fresh Organic</span>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-orange-600 text-white px-10 py-4 rounded-full font-black shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;