"use client";

import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-screen w-full p-8"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glass Container */}
      <div className="relative z-10 glass p-6 rounded-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
        <p className="mb-6 text-center">
          I am a Full-Stack Developer skilled in React, JavaScript, and
          TypeScript with over 2 years of experience building scalable and
          efficient web applications. Here are some of the projects I’ve worked
          on that highlight my expertise.
        </p>
        {/* Projects List */}
        <div className="space-y-6">
          {/* Project 1 */}
          <div className="glass p-4 rounded-md shadow">
            <h2 className="text-xl font-bold dark:text-white">Genoroot</h2>
            <p className="mt-2">
              A dynamic content management system with state management and
              reusable components. This project improved workflow efficiency by
              20%.
            </p>
            <ul className="list-disc ml-6 mt-3 ">
              <li>
                Architected dynamic routing and robust state management with
                Redux.
              </li>
              <li>
                Integrated Ant Design and Tailwind CSS for reusable components.
              </li>
              <li>
                Streamlined the developer experience by creating an optimized
                UI/UX workflow.
              </li>
            </ul>
          </div>
          {/* Project 2 */}
          <div className="glass p-4 rounded-md shadow">
            <h2 className="text-xl font-bold dark:text-white">
              MaxLink Health
            </h2>
            <p className=" mt-2">
              A real-time health monitoring platform featuring IoT integrations
              and alert systems for critical patient data.
            </p>
            <ul className="list-disc ml-6 mt-3 ">
              <li>
                Designed and implemented APIs for scalable and efficient data
                handling.
              </li>
              <li>
                Built a real-time data visualization dashboard with seamless
                performance.
              </li>
              <li>
                Implemented critical alert systems for patient health
                monitoring.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
