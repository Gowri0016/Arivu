import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-orange-900 via-yellow-800 to-yellow-600 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10 z-0 pointer-events-none" />

      {/* Top Angled Cut */}
      <div className="absolute -top-16 left-0 w-full h-20 bg-white opacity-10 transform -skew-y-6 z-0" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-24"
      >
        {/* Brand & Tagline */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-black drop-shadow-md text-white"
          >
            Arivu Kalam
          </motion.h2>
          <p className="text-orange-100 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Explore. Make. Innovate. A sanctuary for creators and thinkers where imagination becomes reality.
          </p>
        </div>

        {/* Social Icons with Animated Glow */}
        <div className="flex justify-center gap-8 text-3xl mb-12">
          {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
            <motion.a
              key={i}
              href="/"
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              <span className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-20 group-hover:opacity-50 transition"></span>
              <Icon className="relative z-10 group-hover:text-yellow-300 transition duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Quick Links and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-orange-100">
          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-300 text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="/learn" className="hover:text-yellow-400 transition">Learn</a></li>
              <li><a href="/projects" className="hover:text-yellow-400 transition">Projects</a></li>
              <li><a href="/citizen-science" className="hover:text-yellow-400 transition">Citizen Science</a></li>
              <li><a href="/makerspace" className="hover:text-yellow-400 transition">Makerspace/Cafe</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-yellow-300 text-lg font-semibold mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:info@arivukalam.com" className="hover:text-yellow-400">info@arivukalam.com</a></li>
              <li>Phone: <a href="tel:+919876543210" className="hover:text-yellow-400">+91 9876543210</a></li>
              <li>Location: Tamil Nadu, India</li>
            </ul>
          </div>

          {/* Branding */}
          <div>
            <img src="https://www.transparenttextures.com/patterns/stardust.png" alt="logo" className="w-32 mb-4" />
            <p className="leading-relaxed">
              "Empowering the next generation of creators through exploration, collaboration, and critical making."
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-14 text-xs text-orange-200">
          <p>© {new Date().getFullYear()} <strong className="text-yellow-300">Arivu Kalam</strong>. All rights reserved.</p>
          <p>Crafted with ❤️ by <span className="font-semibold text-yellow-200">Poeage Technology</span></p>
        </div>
      </motion.div>

      {/* Bottom Curve SVG */}
      <svg className="absolute bottom-0 w-full h-20 text-white opacity-10 z-0" viewBox="0 0 1440 320">
        <path
          fill="currentColor"
          d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,256C672,267,768,245,864,213.3C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L0,320Z"
        />
      </svg>
    </footer>
  );
}
