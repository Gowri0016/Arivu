import React, { useState } from 'react';
import { FaPenNib, FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 text-2xl font-bold text-black">
          <FaPenNib className="text-orange-600 w-6 h-6" />
          <span className="font-semibold">Arivu Kalam</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-sm">
          {/* Dropdown */}
          <div className="relative group">
            <a href="/about" className="flex items-center gap-1 hover:text-orange-600">
              About Us <FaCaretDown className="text-xs mt-1" />
            </a>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded-md mt-2 p-3 space-y-1 z-10 w-44"
            >
              <a href="/our-story" className="hover:text-orange-600">Our Story</a>
              <a href="/our-team" className="hover:text-orange-600">Our Team</a>
              <a href="/media" className="hover:text-orange-600">Press & Media</a>
              <a href="/blog" className="hover:text-orange-600">Blog</a>
            </motion.div>
          </div>

          {/* Main Links */}
          {[
            { label: 'Learn', href: '/learn' },
            { label: 'Projects', href: '/project' },
            { label: 'Citizen Science', href: '/citizen-science' },
            { label: 'Makerspace/Cafe', href: '/makerspace' },
          ].map(({ label, href }, i) => (
            <a
              key={i}
              href={href}
              className="relative group hover:text-orange-600 transition"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
            </a>
          ))}

          {/* CTA */}
          <motion.a
            href="/enquiry"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg shadow transition"
          >
            Have a Question?
          </motion.a>
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-black"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md"
          >
            {/* Dropdown (static on mobile) */}
            <div className="space-y-1">
              <p className="font-semibold text-orange-700">About Us</p>
              <div className="ml-4 space-y-1 text-sm">
                <a href="/our-story" className="block">Our Story</a>
                <a href="/our-team" className="block">Our Team</a>
                <a href="/media" className="block">Press & Media</a>
                <a href="/blog" className="block">Blog</a>
              </div>
            </div>

            {/* Mobile Links */}
            <a href="/learn" className="block">Learn</a>
            <a href="/project" className="block">Projects</a>
            <a href="/citizen-science" className="block">Citizen Science</a>
            <a href="/makerspace" className="block">Makerspace/Cafe</a>

            {/* CTA */}
            <a
              href="/enquiry"
              className="block mt-4 bg-orange-600 text-white text-center py-2 rounded-md font-medium hover:bg-orange-700 transition"
            >
              Have a Question?
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
