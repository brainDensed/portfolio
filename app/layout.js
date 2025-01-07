"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Cursor from "./components/Cursor";
import { ArrowLeft, ArrowRight } from "./components/icons/Icons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const sections = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "Contact", route: "/contact" },
  ];

  const router = useRouter();
  const pathname = usePathname();

  // Get the index of the current section
  const currentIndex = sections.findIndex((section) => section.route === pathname);

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

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Cursor />

        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="fixed glass bottom-10 right-10 flex space-x-4 z-50">
          {/* Previous Button */}
          <motion.button
            className={`p-4 ${
              currentIndex === 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#2a3f5d] text-white shadow-lg hover:scale-105"
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
                : "bg-[#2a3f5d] text-white shadow-lg hover:scale-105"
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