import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaFlask, FaTools, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';

const learnTopics = [
  {
    icon: <FaLightbulb />,
    title: 'Creative Thinking',
    description: 'Unlock innovative approaches to problem-solving and design through hands-on experiences.',
  },
  {
    icon: <FaFlask />,
    title: 'STEM Exploration',
    description: 'Dive into science, technology, engineering, and mathematics through engaging experiments.',
  },
  {
    icon: <FaTools />,
    title: 'Maker Skills',
    description: 'Learn fabrication, electronics, and crafting tools to bring your ideas to life.',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Workshops & Mentorship',
    description: 'Join immersive learning sessions guided by mentors and industry leaders.',
  },
];

const upcomingEvents = [
  { date: 'Jul 10', title: 'AI + Robotics Bootcamp' },
  { date: 'Jul 15', title: '3D Printing for Beginners' },
  { date: 'Jul 20', title: 'Design Thinking Workshop' },
  { date: 'Jul 26', title: 'Community Maker Night' },
];

export default function Learn() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-yellow-100 to-white mt-24 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-800 mb-6"
        >
          Learn with Purpose
        </motion.h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-14">
          Empowering curiosity through practical knowledge and immersive learning experiences.
        </p>

        {/* Animated Learning Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {learnTopics.map((topic, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <div className="text-3xl text-orange-500 mb-4">{topic.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{topic.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Calendar Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 text-orange-800 mb-6">
            <FaCalendarAlt className="text-2xl" />
            <h3 className="text-2xl font-bold">Upcoming Learning Events</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="border-l-4 border-orange-400 pl-4 text-left bg-white rounded-md shadow-sm p-4"
              >
                <p className="text-sm text-gray-500">{event.date}</p>
                <h4 className="font-semibold text-gray-800">{event.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
