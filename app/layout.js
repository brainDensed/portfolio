"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Cursor from "./components/Cursor";
import { ArrowLeft, ArrowRight } from "./components/icons/Icons";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once client-side rendering starts
  }, []);

  const sections = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "Contact", route: "/contact" },
  ];

  const router = useRouter();
  const pathname = usePathname();

  // Get the index of the current section
  const currentIndex = sections.findIndex(
    (section) => section.route === pathname
  );
  const clickSound = new Audio("/sounds/Switch.mp3");

  // Function to play the sound
  const playSound = () => {
    clickSound.currentTime = 0; // Reset the sound to the beginning
    clickSound.play();
  };

  // Function to navigate to the next section
  const goToNext = () => {
    if (currentIndex < sections.length - 1) {
      playSound();
      router.push(sections[currentIndex + 1].route);
    }
  };

  // Function to navigate to the previous section
  const goToPrevious = () => {
    if (currentIndex > 0) {
      playSound();
      router.push(sections[currentIndex - 1].route);
    }
  };

  if (!isClient) {
    return null; // Render nothing on the server-side during the initial render
  }

  return (
    <html lang="en">
      <head>
        <title>Portfolio</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ overflowX: "hidden", minHeight: "100vh" }} // Ensure full height and no horizontal overflow
      >
        <Cursor />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ minHeight: "100vh", overflowY: "auto" }} // Ensure content can scroll vertically
          >
            {children}
          </motion.div>
        </AnimatePresence>
        {/* Navigation Buttons */}
        <div className="fixed glass bottom-10 right-10 flex space-x-4 z-10">
          {/* Previous Button */}
          <motion.button
            className={`p-4 ${
              currentIndex === 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#305d9b] text-white shadow-lg hover:scale-105"
            } text-white rounded-full`}
            whileHover={{ scale: currentIndex > 0 ? 1.2 : 1 }}
            whileTap={{ scale: currentIndex > 0 ? 0.9 : 1 }}
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            aria-label="Go to previous section"
          >
            <ArrowLeft />
          </motion.button>

          {/* Next Button */}
          <motion.button
            className={`p-4 ${
              currentIndex === sections.length - 1
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#305d9b] text-white shadow-lg hover:scale-105"
            } text-white rounded-full`}
            whileHover={{ scale: currentIndex < sections.length - 1 ? 1.2 : 1 }}
            whileTap={{ scale: currentIndex < sections.length - 1 ? 0.9 : 1 }}
            onClick={goToNext}
            disabled={currentIndex === sections.length - 1}
            aria-label="Go to next section"
          >
            <ArrowRight />
          </motion.button>
        </div>
      </body>
    </html>
  );
}
