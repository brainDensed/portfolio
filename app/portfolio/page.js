"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BarChartComponent } from "../components/charts/BarChart";

const Portfolio = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 lg:px-8 py-8 overflow-y-auto"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="col-span-1 flex justify-center">
          <Image
            src="/images/Coder.png"
            alt="Portfolio Illustration"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Bar Chart Section */}
        <div className="col-span-1 flex justify-center">
          <BarChartComponent />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;