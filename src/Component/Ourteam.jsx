import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa6';
import Thara from '../Asset/Tharaneeshwaran - Founder.jpeg';
import Gokul from '../Asset/Gokul Anand-Director.jpeg';
import Gowri from '../Asset/Gowri Raja Operation and Outreach manager.jpeg';
import Kowsi from '../Asset/Kowsick - Chief technical expert.jpeg';
import Nigas from '../Asset/Nigash - Chief hacker.jpeg';
import Surves from '../Asset/Surveshwaran - Designer.jpeg';

export default function Ourteam() {
  const teamMembers = [
    {
      name: 'Tharaneeshwaran',
      role: 'Founder & CEO',
      img: Thara,
    },
    {
      name: 'Gokul Anand',
      role: 'Director',
      img: Gokul,
    },
    {
      name: 'Gowri Raja',
      role: 'Operation and Outreach Manager',
      img: Gowri,
    },
    {
      name: 'Kowsick',
      role: 'Chief Technical Expert',
      img: Kowsi,
    },
    {
      name: 'Nigash',
      role: 'Chief Hacker',
      img: Nigas,
    },
    {
      name: 'Surveshwaran',
      role: 'Designer',
      img: Surves,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-white py-36 px-8 relative overflow-hidden">
      {/* Background Glow Animation */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-200 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-orange-800"
        >
          Meet Our Creative Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Passionate, skilled, and driven by innovation — together, we craft extraordinary solutions.
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group bg-white rounded-3xl shadow-xl p-8 relative cursor-pointer hover:shadow-2xl transition-all duration-500"
          >
            <motion.div
              whileHover={{ rotate: [0, 3, -3, 0], scale: 1.05 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'mirror' }}
              className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg"
            >
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            </motion.div>
            <h3 className="text-xl font-semibold text-orange-800">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>
            <div className="flex justify-center space-x-4 text-orange-500 text-lg">
              <FaLinkedin className="hover:text-orange-700 transition-colors cursor-pointer" />
              <FaTwitter className="hover:text-orange-700 transition-colors cursor-pointer" />
              <FaEnvelope className="hover:text-orange-700 transition-colors cursor-pointer" />
            </div>

            {/* Glowing background ring on hover */}
            <div className="absolute inset-0 rounded-3xl border-2 border-orange-100 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 blur-sm"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
