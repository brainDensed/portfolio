"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    
    const handleMouseDown = () => {
      setIsClicking(true);
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseEnter = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.tagName.toLowerCase() === 'input' ||
          e.target.tagName.toLowerCase() === 'textarea') {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] cursor-material"
        style={{ 
          x: cursorPosition.x - 16, 
          y: cursorPosition.y - 16,
          opacity: 1,
          boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.5)"
        }}
        animate={{ 
          x: cursorPosition.x - 16, 
          y: cursorPosition.y - 16,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 30 }}
      />
      
      {/* Trailing cursor effect */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white/30 rounded-full pointer-events-none z-[9999]"
        style={{ 
          x: cursorPosition.x - 8, 
          y: cursorPosition.y - 8,
          opacity: 1,
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.3)"
        }}
        animate={{ 
          x: cursorPosition.x - 8, 
          y: cursorPosition.y - 8,
          opacity: isHovering ? 0.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25, delay: 0.05 }}
      />
    </>
  );
};

export default Cursor;