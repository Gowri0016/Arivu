import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCogs, FaUsers, FaTools, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    icon: <FaLightbulb />,
    title: 'Idea Incubation',
    description: 'Support for early-stage ideas through mentorship, brainstorming, and prototyping guidance.',
  },
  {
    icon: <FaTools />,
    title: 'Makers Lab',
    description: 'Access to tools and equipment including 3D printers, laser cutters, and electronics workbenches.',
  },
  {
    icon: <FaUsers />,
    title: 'Collaborative Workspaces',
    description: 'Shared innovation spaces to co-create, experiment, and bring ideas to life with peers.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Tech & Coding Support',
    description: 'Workshops and one-on-one help for coding, IoT, embedded systems, and software development.',
  },
  {
    icon: <FaCogs />,
    title: 'Fabrication & Testing',
    description: 'Prototype your projects and run tests using advanced materials and toolkits.',
  },
];

export default function Services() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-yellow-100 to-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-orange-800 mb-4"
        >
          Welcome to the Project Center
        </motion.h2>
        <p className="text-gray-700 text-base md:text-lg mb-12 max-w-3xl mx-auto">
          Empowering makers, creators, and innovators through a blend of tools, guidance, and collaborative space.
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all text-left"
            >
              <div className="text-3xl text-orange-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-orange-200 rounded-xl px-6 py-10 max-w-3xl mx-auto shadow-lg"
        >
          <h4 className="text-2xl font-bold text-orange-800 mb-3">Have a Project in Mind?</h4>
          <p className="text-orange-900 mb-4">
            Let’s collaborate and bring your vision to life. Reach out to our Project Center team today.
          </p>
          <a
            href="/enquiry"
            className="inline-block mt-2 bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-orange-700 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
