"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
      setIsHidden(true);
    };

    const handleMouseLeave = () => {
      setIsHidden(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("input, textarea").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("input, textarea").forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-50 cursor-mirror ${isHidden ? "hidden" : ""}`}
      style={{ x: cursorPosition.x - 50, y: cursorPosition.y - 50 }} // Adjust to center the cursor
      animate={{ x: cursorPosition.x - 50, y: cursorPosition.y - 50 }} // Adjust to center the cursor
      transition={{ type: "spring", stiffness: 1000, damping: 30 }}
    >
      <div className="w-full h-full transform bg-transparent"></div>
    </motion.div>
  );
};

export default Cursor;