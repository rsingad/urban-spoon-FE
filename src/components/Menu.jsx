import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = [
  // --- STARTERS ---
  { id: 1, name: "Paneer Tikka", price: "280", category: "Starters", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500" },
  { id: 2, name: "Crispy Corn", price: "190", category: "Starters", img: "https://images.pexels.com/photos/28559532/pexels-photo-28559532.jpeg" },
  { id: 3, name: "Veg Spring Rolls", price: "210", category: "Starters", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500" },
  { id: 4, name: "Hara Bhara Kabab", price: "240", category: "Starters", img: "https://images.pexels.com/photos/53148/shish-kebab-meat-skewer-vegetable-skewer-meat-products-53148.jpeg" },
  { id: 5, name: "Honey Chilli Potato", price: "220", category: "Starters", img: "https://images.pexels.com/photos/568805/pexels-photo-568805.jpeg" },

  // --- MAIN COURSE ---
  { id: 6, name: "Butter Paneer Masala", price: "360", category: "Main Course", img: "https://images.pexels.com/photos/11188417/pexels-photo-11188417.jpeg" },
  { id: 7, name: "Dal Makhani Special", price: "310", category: "Main Course", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500" },
  { id: 8, name: "Kadhai Paneer", price: "340", category: "Main Course", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500" },
  { id: 9, name: "Mix Veg Handi", price: "280", category: "Main Course", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500" },
  { id: 10, name: "Malai Kofta", price: "380", category: "Main Course", img: "https://media.istockphoto.com/id/1397648059/photo/malai-kofta-curry.webp?s=2048x2048&w=is&k=20&c=6X6hQ8U4d7rSmkicIzybolSTNb7wTIedbLgvIXO4_EY=" },

  // --- BEVERAGES ---
  { id: 11, name: "Iced Caramel Macchiato", price: "180", category: "Beverages", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500" },
  { id: 12, name: "Virgin Mojito", price: "140", category: "Beverages", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500" },
  { id: 13, name: "Blue Lagoon", price: "150", category: "Beverages", img: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg" },
  { id: 14, name: "Oreo Shake", price: "190", category: "Beverages", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500" },
  { id: 15, name: "Masala Lemonade", price: "110", category: "Beverages", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500" },
];

const Menu = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Starters', 'Main Course', 'Beverages'];

  const filteredItems = filter === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === filter);

return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 text-gray-900 dark:text-white" id="menu">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl font-black bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4"
          >
            Urban Specialities
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 text-xl font-medium">
            15+ Handcrafted delicacies just for you.
          </p>
        </div>

        {/* Filters - Adaptive Colors */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-10 py-3 rounded-2xl font-bold transition-all duration-300 border ${
                filter === cat 
                ? 'bg-orange-600 text-white shadow-lg scale-110 border-transparent' 
                : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:bg-orange-50 dark:hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Animated Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -15 }}
                className="group relative bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/5 rounded-[2.5rem] overflow-hidden shadow-xl dark:shadow-2xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  {/* Overlay change on mode */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#151515] via-transparent to-transparent" />
                  
                  <div className="absolute top-6 right-6 bg-orange-600 text-white px-5 py-2 rounded-2xl font-black text-lg shadow-xl shadow-orange-600/30">
                    ₹{item.price}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <span className="text-orange-600 font-bold uppercase text-[10px] tracking-widest mb-2 block">
                    {item.category}
                  </span>
                  <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    Freshly sourced ingredients blended with authentic Urban Spoon spices.
                  </p>
                  
                  <button className="w-full py-4 bg-gray-100 dark:bg-white/5 group-hover:bg-orange-600 group-hover:text-white rounded-2xl font-bold transition-all duration-300 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">
                    Quick Order →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;