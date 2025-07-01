import React from 'react';
import { motion } from 'framer-motion';

export default function Enquiry() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-white px-4 py-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden"
      >
        {/* Animated Floating Shape */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 opacity-30 rounded-full blur-3xl"
        />

        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-6 tracking-wide">
          Enquiry Form
        </h2>

        <form className="space-y-6">
          <FloatingInput label="Full Name" name="name" type="text" />
          <FloatingInput label="Email Address" name="email" type="email" />
          <FloatingInput label="Phone Number" name="phone" type="tel" />
          <FloatingInput label="Your Message" name="message" type="textarea" />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white font-semibold py-3 rounded-full shadow-lg"
          >
            Submit Enquiry
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

const FloatingInput = ({ label, name, type }) => {
  return (
    <div className="relative z-0 w-full group">
      {type === 'textarea' ? (
        <textarea
          name={name}
          rows="4"
          className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-400 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600 peer resize-none"
          placeholder=" "
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-400 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
          placeholder=" "
        />
      )}
      <label
        htmlFor={name}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};
