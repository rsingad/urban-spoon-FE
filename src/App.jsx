import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import InquiryForm from './components/InquiryForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

// --- Innovative Adaptive Cursor (Glow + Spoon with Ting Sound) ---
const AdaptiveCursor = ({ isDarkMode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  // --- Ting Sound Generator (Web Audio API - No External File Needed) ---
  const playTingSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioContext();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(1400, audioCtx.currentTime); // Metallic high pitch
      
      gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.1);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      console.log("Audio API failed", e);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseDown = () => {
      setIsClicked(true);
      if (!isDarkMode) playTingSound(); // Call sound only in Light mode
      setTimeout(() => setIsClicked(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isDarkMode]);

  return (
    <AnimatePresence mode="wait">
      {isDarkMode ? (
        <motion.div 
          key="glow"
          className="fixed pointer-events-none z-[9999] w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]"
          style={{ left: position.x - 200, top: position.y - 200 }}
        />
      ) : (
        <motion.div
          key="spoon"
          className="fixed pointer-events-none z-[9999] text-4xl select-none"
          style={{ 
            left: position.x, 
            top: position.y,
            transform: `translate(-20%, -20%) rotate(${isClicked ? '-35deg' : '0deg'}) scale(${isClicked ? 0.8 : 1})`,
            transition: 'transform 0.05s linear'
          }}
        >
          🥄
          {isClicked && (
            <motion.div 
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              className="absolute top-0 left-0 w-8 h-8 bg-orange-400/30 rounded-full blur-sm"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <style>
        {`
          html:not(.dark), html:not(.dark) * {
            cursor: none !important;
          }
        `}
      </style>

      <div className="min-h-screen transition-all duration-500 bg-white dark:bg-[#0a0a0a] selection:bg-orange-500 selection:text-white">
        
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: isDarkMode ? '#1a1a1a' : '#fff',
              color: isDarkMode ? '#fff' : '#1a1a1a',
              border: `1px solid ${isDarkMode ? '#333' : '#eee'}`
            },
          }}
        />
        
        <AdaptiveCursor isDarkMode={isDarkMode} />

        <Routes>
          <Route path="/" element={
            <>
              <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              <main className="relative z-10">
                <Hero />
                <About />
                <Menu /> 
                <InquiryForm /> 
                <Contact />
              </main>
              <Footer />
            </>
          } />

          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;