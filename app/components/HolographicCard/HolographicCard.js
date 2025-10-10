"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const HolographicCard = ({ isVisible, onClose }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0, rotateY: 0 }}
        animate={{ scale: 1, rotateY: isFlipped ? 180 : 0 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative w-96 h-64 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: "1000px" }}
      >
        {/* Card Container */}
        <div className="relative w-full h-full preserve-3d">
          {/* Front Side */}
          <div className={`absolute inset-0 backface-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-full h-full bg-gradient-to-br from-green-900/90 to-black/90 
                          rounded-xl border border-green-400 p-6 
                          shadow-2xl shadow-green-400/20 holographic">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-green-400 neon-green">SHIVAM</h1>
                  <p className="text-green-300 text-sm">Frontend + Web3 Developer</p>
                </div>
                <div className="text-right text-xs text-green-500">
                  <div>ID: WEB3-001</div>
                  <div>LVL: 75</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">2+</div>
                  <div className="text-xs text-green-300">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">🏆</div>
                  <div className="text-xs text-green-300">HackOdisha Winner</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">100CR</div>
                  <div className="text-xs text-green-300">Target Package</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">∞</div>
                  <div className="text-xs text-green-300">Web3 Potential</div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="text-xs text-green-300 mb-4">
                <div className="flex flex-wrap gap-1">
                  {["React", "Solidity", "Web3.js", "Hardhat", "TypeScript"].map((tech) => (
                    <span key={tech} className="bg-green-900/50 px-2 py-1 rounded border border-green-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="text-xs text-green-500 text-center">
                Click to flip • ESC to close
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className={`absolute inset-0 backface-hidden rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full h-full bg-gradient-to-br from-blue-900/90 to-black/90 
                          rounded-xl border border-blue-400 p-6 
                          shadow-2xl shadow-blue-400/20">
              
              <h2 className="text-xl font-bold text-blue-400 mb-4 text-center">CONTACT PROTOCOL</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">📧</span>
                  <span className="text-blue-300">shivam.nilay46@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">�</span>
                  <span className="text-blue-300">+91 8789581642</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">�</span>
                  <span className="text-blue-300">/in/shivam-nilay</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">🐙</span>
                  <span className="text-blue-300">github.com/shivam-nilay</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">📍</span>
                  <span className="text-blue-300">Darbhanga, Bihar, India</span>
                </div>
              </div>

              <div className="mt-6 p-3 bg-blue-900/30 rounded border border-blue-600">
                <div className="text-xs text-blue-300 text-center">
                  <div className="font-bold mb-1">AVAILABILITY STATUS</div>
                  <div className="text-green-400">🟢 OPEN TO OPPORTUNITIES</div>
                  <div className="mt-1">Remote • Hybrid • On-site</div>
                </div>
              </div>

              <div className="text-xs text-blue-500 text-center mt-4">
                Click to flip • ESC to close
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-green-400 text-2xl"
      >
        ✕
      </button>
    </div>
  );
};

export default HolographicCard;