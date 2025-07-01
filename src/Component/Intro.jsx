import React from 'react';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="bg-white px-6 py-20 mt-28 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto space-y-16"
      >
        {/* Title + Paragraph */}
        <div className="text-center">
          <motion.h2
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug"
          >
            Maker’s Asylum is an institution — literally and figuratively.
          </motion.h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            A DIY community space where like-minded innovators unlock out-of-the-box thinking and bring their ideas to life through shared tools, knowledge, and collaboration. At the forefront of the Maker Movement in India.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md bg-gray-50"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Foster a culture of open experimentation, hands-on learning, and collaborative ideation across disciplines.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md bg-gray-50"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Empower everyone — especially youth — to adopt a maker mindset through experiential programs, citizen science, and inclusive communities.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
