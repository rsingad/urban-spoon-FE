import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Home, BookOpen, PhoneCall, Sun, Moon, Menu as MenuIcon, X, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom'; // Admin navigation ke liye

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: <Home size={18} />, href: '/#' },
    { name: 'Menu', icon: <BookOpen size={18} />, href: '#menu' },
    { name: 'Contact', icon: <PhoneCall size={18} />, href: '#contact' },
  ];

  return (
    <div className="fixed top-0 w-full z-[100] px-4 py-6 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          pointer-events-auto flex items-center justify-between
          transition-all duration-500 ease-in-out
          ${isScrolled 
            ? 'w-full md:w-[80%] bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/20 rounded-[2rem] px-8 py-3 shadow-2xl' 
            : 'w-full bg-transparent px-8 py-4'}
        `}
      >
        {/* Logo Section */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="bg-orange-600 p-2 rounded-xl shadow-[0_0_15px_rgba(234,88,12,0.6)] group-hover:shadow-[0_0_25px_rgba(234,88,12,1)] transition-all">
            <Utensils className="text-white" size={22} />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white transition-colors">
            URBAN<span className="text-orange-500 drop-shadow-[0_0_8px_rgba(234,88,12,0.6)]">SPOON</span>
          </h1>
        </motion.div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <motion.li key={link.name} whileHover={{ y: -2 }}>
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-all"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-gray-200 dark:border-white/10 pl-6">
            {/* Night Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.8, rotate: 45 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-full border transition-all duration-500 ${
                isDarkMode 
                ? 'bg-gray-900 border-orange-500 text-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.4)]' 
                : 'bg-orange-50 border-orange-200 text-orange-600 shadow-inner'
              }`}
            >
              {isDarkMode ? <Moon size={20} fill="currentColor" /> : <Sun size={20} fill="currentColor" />}
            </motion.button>

            {/* Admin Panel Link */}
            <Link to="/admin">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(234,88,12,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-6 py-2.5 rounded-2xl font-black text-xs flex items-center gap-2 tracking-widest transition-all"
              >
                <ShieldCheck size={16} /> ADMIN
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-900 dark:text-white bg-white/10 backdrop-blur-md rounded-xl border border-white/20" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-white/80 dark:bg-black/90 z-[-1] flex flex-col items-center justify-center gap-8 pointer-events-auto"
          >
            {navLinks.map((link, i) => (
              <motion.a 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-4xl font-black text-gray-900 dark:text-white hover:text-orange-500 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => { setIsDarkMode(!isDarkMode); setMobileMenuOpen(false); }}
              className="mt-6 flex items-center gap-3 bg-orange-600 text-white px-8 py-3 rounded-2xl font-bold shadow-xl shadow-orange-600/30"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />} 
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;