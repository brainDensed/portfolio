"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar"; // Ensure Navbar is imported
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AnimatePresence mode="wait">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <Cursor />
          {/* Ensure Navbar is included */}
          {children}
        </body>
      </AnimatePresence>
    </html>
  );
}
