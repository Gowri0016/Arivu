import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaHandshake, FaGlobeAsia } from 'react-icons/fa';

export default function About() {
  return (
    <section className="bg-gradient-to-br from-yellow-100 via-orange-50 to-white mt-16 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-800">About Arivu Kalam</h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Arivu Kalam is more than a place — it's a movement for innovation, creativity, and community-led learning.
          </p>
        </motion.div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <FaRocket />,
              title: 'Our Mission',
              text: 'To ignite minds by offering a space that nurtures invention, experimentation, and meaningful collaboration.',
            },
            {
              icon: <FaHandshake />,
              title: 'Our Culture',
              text: 'We believe in community-first — where learners, tinkerers, and creators unite across disciplines and backgrounds.',
            },
            {
              icon: <FaGlobeAsia />,
              title: 'Our Impact',
              text: 'Transforming education and innovation across India by promoting maker culture and sustainable change.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
            >
              <div className="text-3xl text-orange-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote or Highlight Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-orange-100 text-orange-900 text-center rounded-2xl px-8 py-12 shadow-inner max-w-4xl mx-auto"
        >
          <blockquote className="text-xl md:text-2xl font-medium italic leading-relaxed">
            "We don’t just teach people how to build things — we empower them to build a better world."
          </blockquote>
          <p className="mt-4 text-sm">— Founders of Arivu Kalam</p>
        </motion.div>
      </div>
    </section>
  );
}
