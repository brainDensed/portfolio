"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HolographicCard = ({ isVisible, onClose, isGUI = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip when modal closes
  useEffect(() => {
    if (!isVisible) setIsFlipped(false);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      {/* Perspective wrapper prevents flattening and enables 3D */}
      <div className="relative w-96 h-64" style={{ perspective: "1000px" }} onClick={(e) => e.stopPropagation()}>
        {/* Rotating wrapper with consistent border, radius, background, and shadow */}
        <motion.div
          className="relative w-full h-full preserve-3d rounded-xl border border-green-400 shadow-2xl overflow-hidden bg-gradient-to-br from-green-900/90 to-black/90 holographic cursor-pointer"
          initial={{ rotateY: 0, scale: 0.95 }}
          animate={{ rotateY: isFlipped ? 180 : 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front Face (content only) */}
          <div className="absolute inset-0 backface-hidden">
            <div className="w-full h-full p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-green-400 neon-green">SHIVAM</h1>
                  <p className="text-green-300 text-sm">Frontend + Web3 Developer</p>
                </div>
                <div className="text-right text-xs text-green-300">
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
                  <div className="text-xs text-green-300">Award Winner</div>
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
              <div className="text-xs text-green-300 text-center">
                Click to flip • ESC to close
              </div>
            </div>
          </div>

          {/* Back Face (content only) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="w-full h-full p-6">
              <h2 className="text-xl font-bold text-green-400 mb-4 text-center">CONTACT</h2>

              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">📧</span>
                  <span className="text-green-300">Contact via LinkedIn</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">📞</span>
                  <span className="text-green-300">Available for opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">🔗</span>
                  <span className="text-green-300">/in/shivam-nilay</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">🐙</span>
                  <span className="text-green-300">github.com/shivam-nilay</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">📍</span>
                  <span className="text-green-300">Darbhanga, Bihar, India</span>
                </div>
              </div>

              <div className="mt-6 p-3 bg-green-900/20 rounded border border-green-700/50">
                <div className="text-xs text-green-300 text-center">
                  <div className="font-bold mb-1">AVAILABILITY STATUS</div>
                  <div className="text-green-400">🟢 OPEN TO OPPORTUNITIES</div>
                  <div className="mt-1">Remote • Hybrid • On-site</div>
                </div>
              </div>

              <div className="text-xs text-green-300 text-center mt-4">
                Click to flip • ESC to close
              </div>
            </div>
          </div>
        </motion.div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-green-400 text-2xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default HolographicCard;
