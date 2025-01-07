"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

const chartData = [
  { skill: "React", level: 87 },
  { skill: "JavaScript", level: 83 },
  { skill: "Typescript", level: 75 },
  { skill: "Nodejs", level: 65 },
  { skill: "MongoDB", level: 60 },
];

export function BarChartComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <motion.div
      className="flex flex-col justify-center items-center w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full max-w-4xl">
        <BarChart
          width={800} // Adjusted width
          height={500} // Adjusted height
          data={chartData}
          layout="vertical"
        >
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey="skill"
            type="category"
            fontSize={20}
            tickLine={false}
            tickMargin={20} // Increased tick margin
            axisLine={false}
            width={150} // Adjusted width for Y-axis to accommodate labels
            tick={{ fill: "#ffffff" }} // Set tick color to white
          />
          <XAxis
            type="number"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#ffffff" }} // Set tick color to white
          />
          <Bar
            dataKey="level"
            fill="url(#glassGradient)" // Use gradient for glass effect
            radius={4}
          >
            <LabelList
              dataKey="level"
              position="insideLeft"
              offset={8}
              fontSize={20}
              fill="#ffffff" // Set label color to white
            />
          </Bar>
          <defs>
            <linearGradient id="glassGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(0, 123, 255, 0.6)" />
            </linearGradient>
          </defs>
        </BarChart>
      </div>
      <div className="max-w-4xl text-end text-white">
        The graph illustrates my confidence level in various technologies.
      </div>
    </motion.div>
  );
}
