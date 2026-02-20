import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Calendar, Users, Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast'; // Toast import karein

const InquiryForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', guests: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Step 1: Loading Toast start karein
    const loadingToast = toast.loading('Sending your request to Urban Spoon...');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Step 2: Success Toast
        toast.success(`Cheers ${formData.name}! Your table is reserved.`, {
          id: loadingToast, // Loading toast ko replace karega
          icon: '🍽️',
        });
        
        setSubmittedData(formData);
        setFormData({ name: '', phone: '', date: '', guests: '' });
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      // Step 3: Error Toast
      toast.error("Oops! Server is busy. Try again later.", {
        id: loadingToast,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquiry-form" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 dark:bg-orange-600/5 rounded-full blur-[120px] pointer-events-none transition-all duration-700" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          {!submittedData ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-orange-50/50 dark:bg-white/5 backdrop-blur-2xl border border-orange-100 dark:border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl"
            >
              <div className="text-center mb-10">
                <motion.h2 
                  initial={{ letterSpacing: "0em" }}
                  whileInView={{ letterSpacing: "0.02em" }}
                  className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4"
                >
                  Book Your <span className="text-orange-600">Table</span>
                </motion.h2>
                <p className="text-gray-500 dark:text-gray-400 font-medium italic">Join us for an unforgettable culinary journey.</p>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inputs with focus effects */}
                {[
                  { id: 'name', type: 'text', icon: <User size={20}/>, placeholder: 'Full Name' },
                  { id: 'phone', type: 'text', icon: <Phone size={20}/>, placeholder: 'Phone Number' },
                  { id: 'date', type: 'date', icon: <Calendar size={20}/>, placeholder: '' },
                  { id: 'guests', type: 'number', icon: <Users size={20}/>, placeholder: 'No. of Guests' }
                ].map((input) => (
                  <div key={input.id} className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-600 group-focus-within:scale-125 transition-transform duration-300">
                      {input.icon}
                    </span>
                    <input 
                      type={input.type} 
                      placeholder={input.placeholder}
                      className="w-full pl-12 pr-4 py-4 bg-white dark:bg-black/40 border border-orange-200 dark:border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all dark:text-white placeholder:text-gray-400"
                      value={formData[input.id]} 
                      onChange={(e) => setFormData({...formData, [input.id]: e.target.value})} 
                      required 
                    />
                  </div>
                ))}

                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(234, 88, 12, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit" 
                  className="md:col-span-2 w-full bg-orange-600 text-white py-4 rounded-2xl font-black text-xl shadow-lg transition-all flex justify-center items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="animate-pulse">Reserving...</span>
                  ) : (
                    <><Send size={22} /> Confirm Reservation</>
                  )}
                </motion.button>
              </form>
            </motion.div>
          ) : (
            /* Innovative Summary Card */
            <motion.div
              key="summary"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              className="bg-white dark:bg-white/5 border border-green-500/30 p-10 rounded-[3rem] text-center shadow-[0_0_50px_rgba(34,197,94,0.1)] backdrop-blur-3xl"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-500" size={48} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Reservation Saved!</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">See you soon at Urban Spoon, <span className="text-orange-600 font-bold">{submittedData.name}</span>.</p>
              
              <div className="grid grid-cols-2 gap-6 text-left bg-orange-50/50 dark:bg-black/40 p-8 rounded-3xl mb-8 border border-orange-100 dark:border-white/5">
                <SummaryItem label="Phone" value={submittedData.phone} />
                <SummaryItem label="Date" value={submittedData.date} />
                <SummaryItem label="Guests" value={`${submittedData.guests} People`} />
                <SummaryItem label="Location" value="Main Hall" />
              </div>

              <button 
                onClick={() => setSubmittedData(null)}
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Book Another Table
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const SummaryItem = ({ label, value }) => (
  <div>
    <p className="text-[10px] text-orange-600 uppercase font-black tracking-widest mb-1">{label}</p>
    <p className="font-bold text-gray-800 dark:text-gray-200">{value}</p>
  </div>
);

export default InquiryForm;