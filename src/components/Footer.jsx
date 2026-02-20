import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Utensils, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#", color: "hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]" },
    { icon: <Facebook size={20} />, href: "#", color: "hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" },
    { icon: <Twitter size={20} />, href: "#", color: "hover:text-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]" },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-600 p-2 rounded-xl shadow-[0_0_15px_rgba(234,88,12,0.4)]">
                <Utensils className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tighter">URBAN<span className="text-orange-500">SPOON</span></h2>
            </div>
            <p className="text-gray-500 leading-relaxed font-medium">
              Bringing authentic flavors from the streets to your table with a modern 3D twist.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-4 text-gray-500 font-semibold">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-orange-500 transition-colors">Our Menu</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Join the Urban Club</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-orange-600 transition-all backdrop-blur-md"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-orange-600 text-white px-6 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-sm font-medium">
            © 2026 Urban Spoon. Crafted with ❤️ by <span className="text-orange-500">Ramesh Singar</span>
          </p>

          {/* Floating Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5, scale: 1.1 }}
                className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to Top Button */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/30"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;