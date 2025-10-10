"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Cursor from "./components/Cursor";
import { ArrowLeft, ArrowRight } from "./components/icons/Icons";
import { useEffect, useRef, useState } from "react";

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


  // Function to navigate to the next section
  const goToNext = () => {
    if (currentIndex < sections.length - 1) {
      router.push(sections[currentIndex + 1].route);
    }
  };

  // Function to navigate to the previous section
  const goToPrevious = () => {
    if (currentIndex > 0) {
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
        
        {/* Modern Navigation Bar */}
        <motion.nav 
          className="fixed top-0 left-0 right-0 navbar z-50 px-6 py-4"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <motion.div 
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Shivam
            </motion.div>
            <ul className="flex space-x-8">
              {sections.map((section) => (
                <motion.li key={section.name} whileHover={{ scale: 1.1 }}>
                  <a 
                    href={section.route}
                    className={`text-lg ${pathname === section.route ? 'text-blue-400 font-bold' : 'text-white'}`}
                  >
                    {section.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.nav>

        {/* Navigation Buttons */}
        <div className="fixed bottom-10 right-10 flex space-x-4 z-10">
          {/* Previous Button */}
          <motion.button
            className={`p-4 ios-button ${
              currentIndex === 0
                ? "bg-gray-500/50 cursor-not-allowed"
                : "bg-blue-500/20 text-white hover:bg-blue-600/30"
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
            className={`p-4 ios-button ${
              currentIndex === sections.length - 1
                ? "bg-gray-500/50 cursor-not-allowed"
                : "bg-blue-500/20 text-white hover:bg-blue-600/30"
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
