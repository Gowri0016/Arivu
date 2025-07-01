import React from 'react';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

export default function Project() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-white overflow-hidden mt-14 px-6 py-24">
      {/* Animated floating geometric background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-4 border-dashed border-orange-200 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-block bg-orange-100 p-6 rounded-full shadow-md mb-8"
        >
          <FaTools className="text-orange-500 text-4xl" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-orange-800"
        >
          Projects Under Construction
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-gray-600 text-lg max-w-xl mx-auto"
        >
          We’re currently crafting some incredible maker projects. Stay tuned for what’s next in innovation, creativity, and hands-on learning.
        </motion.p>

        {/* Placeholder Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center items-center"
        >
          <div className="w-24 h-24 rounded-full border-4 border-dashed border-orange-400 animate-spin-slow"></div>
        </motion.div>
      </div>
    </section>
  );
}
