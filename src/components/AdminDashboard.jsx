import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Users, Calendar, Phone, TrendingUp, ArrowLeft, Search, Filter, CloudCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'; // Toast import karein

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Search logic
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = () => {
    fetch(`${import.meta.env.VITE_API_URL}/inquiry`)
      .then(res => res.json())
      .then(data => {
        setInquiries(data);
        setLoading(false);
      })
      .catch(err => {
        toast.error("Failed to load data!",err);
        setLoading(false);
      });
  };

  const deleteInquiry = async (id) => {
    const confirmToast = toast.loading("Processing...");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/inquiry/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success("Inquiry Deleted Successfully", { id: confirmToast });
        setInquiries(inquiries.filter(iq => iq._id !== id));
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
      toast.error("Could not delete inquiry", { id: confirmToast });
    }
  };

  // Live Filtering Logic
  const filteredInquiries = inquiries.filter(iq => 
    iq.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    iq.phone.includes(searchTerm)
  );

  const totalGuests = filteredInquiries.reduce((sum, iq) => sum + Number(iq.guests), 0);

  return (
    <div className="p-4 md:p-10 bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-orange-500">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <Link to="/" className="group flex items-center gap-2 text-orange-500 mb-4 font-bold">
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Back to Home
          </Link>
          <h2 className="text-5xl font-black tracking-tighter">
            RESERVATION <span className="text-orange-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.4)]">HUB</span>
          </h2>
        </motion.div>

        {/* Search Bar - Innovative UI */}
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search by name or phone..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all backdrop-blur-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-[2.5rem] shadow-2xl shadow-orange-600/20 relative overflow-hidden group">
          <TrendingUp className="absolute right-[-10px] bottom-[-10px] size-32 text-white/10 group-hover:scale-110 transition-transform" />
          <h3 className="text-white/70 font-bold uppercase text-xs tracking-widest mb-2">Active Guests</h3>
          <p className="text-5xl font-black">{totalGuests}</p>
        </motion.div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md">
          <h3 className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-2">Total Bookings</h3>
          <p className="text-5xl font-black text-orange-500">{filteredInquiries.length}</p>
        </div>
      </div>

      {/* Inquiry Table */}
      <div className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-2xl shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-orange-500 uppercase text-[10px] tracking-[0.3em] font-black">
                <th className="p-8">Customer Detail</th>
                <th className="p-8">Contact Info</th>
                <th className="p-8">Reservation Info</th>
                <th className="p-8 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <AnimatePresence>
                {filteredInquiries.map((iq) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={iq._id} 
                    className="hover:bg-orange-600/5 transition-all group"
                  >
                    <td className="p-8">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-gradient-to-tr from-orange-600 to-red-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                          {iq.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-black text-xl text-gray-100 group-hover:text-orange-500 transition-colors">{iq.name}</p>
                          <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full border border-green-500/20 uppercase tracking-tighter">Verified Member</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-8">
                      <div className="flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors">
                        <Phone size={16} className="text-orange-600"/>
                        <span className="font-bold tracking-wider">{iq.phone}</span>
                      </div>
                    </td>
                    <td className="p-8">
                      <div className="space-y-2">
                        <p className="flex items-center gap-2 text-sm font-medium text-gray-300">
                          <Calendar size={14} className="text-orange-600" /> {iq.date}
                        </p>
                        <p className="flex items-center gap-2 text-sm font-black text-white">
                          <Users size={14} className="text-orange-600" /> {iq.guests} GUESTS
                        </p>
                      </div>
                    </td>
                    <td className="p-8 text-center">
                      <button 
                        onClick={() => deleteInquiry(iq._id)}
                        className="w-12 h-12 flex items-center justify-center bg-red-500/10 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-500"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          {filteredInquiries.length === 0 && (
            <div className="py-32 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">No bookings match your search</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;