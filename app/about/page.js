"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiVite, SiNextdotjs, SiTailwindcss, SiRedux, SiMui, SiAntdesign, SiCplusplus, SiTensorflow, SiPostman } from "react-icons/si";

const technologies = [
  { name: "Vite", icon: <SiVite className="text-4xl text-purple-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-black" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-4xl text-blue-600" /> },
  { name: "Redux", icon: <SiRedux className="text-4xl text-purple-700" /> },
  { name: "MUI", icon: <SiMui className="text-4xl text-blue-500" /> },
  { name: "Ant Design", icon: <SiAntdesign className="text-4xl text-red-600" /> },
  { name: "C++", icon: <SiCplusplus className="text-4xl text-blue-700" /> },
  { name: "DSA", icon: <SiCplusplus className="text-4xl text-blue-700" /> }, // Placeholder icon
  { name: "Git", icon: <FaGitAlt className="text-4xl text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-4xl text-black" /> },
  { name: "Postman", icon: <SiPostman className="text-4xl text-orange-500" /> },
];

const About = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-screen w-full p-8"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="col-span-1 lg:col-span-2 glass p-6 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Technologies I've Used</h1>
        <p className="mb-6 text-center text-gray-200">
          I am a Full-Stack Developer skilled in various technologies. Here are some of the technologies I’ve mastered that highlight my expertise.
        </p>
        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              {tech.icon}
              <p className="mt-2 text-lg font-semibold text-white">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      Apart from these I am currently interested in AI/ML and Algo Trading.
    </motion.section>
  );
};

export default About;