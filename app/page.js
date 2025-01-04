"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <header
        className="flex flex-col items-center justify-center flex-grow text-center"
        id="home"
      >
        <div className="relative z-10">
          {/* Main Text */}
          <motion.h1
            className="text-7xl font-extrabold glass-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SHIVAM
          </motion.h1>

          {/* Mirrored Text */}
          <motion.h1
            className="text-7xl font-extrabold text-transparent bg-clip-text mirror-effect"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            SHIVAM
          </motion.h1>

          {/* Designation */}
          <motion.p
            className="mt-4 text-2xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Full-Stack Developer | React Specialist
          </motion.p>

          {/* Call-to-Actions */}
          <div className="mt-8 flex justify-center space-x-4">
            <motion.a
              href="/Shivam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 rounded-md hover:bg-gray-700 text-white text-lg font-medium"
              whileHover={{ scale: 1.1 }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="py-10 text-center bg-gray-900">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Shivam. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
