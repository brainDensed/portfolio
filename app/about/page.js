"use client";

import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaGithub, FaEthereum, FaHammer } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiSolidity, SiWeb3Dotjs, SiIpfs, SiChainlink } from "react-icons/si";

const technologies = [
  { name: "Solidity", icon: <SiSolidity className="text-4xl text-gray-400" /> },
  { name: "Web3.js", icon: <SiWeb3Dotjs className="text-4xl text-orange-500" /> },
  { name: "Ethereum", icon: <FaEthereum className="text-4xl text-blue-400" /> },
  { name: "IPFS", icon: <SiIpfs className="text-4xl text-teal-500" /> },
  { name: "Hardhat", icon: <FaHammer className="text-4xl text-yellow-500" /> },
  { name: "Chainlink", icon: <SiChainlink className="text-4xl text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-4xl text-blue-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-blue-500" /> },
  { name: "Redux", icon: <SiRedux className="text-4xl text-purple-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-4xl text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-4xl text-white" /> },
];

const About = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-screen w-full p-8 pt-24"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="material-card w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Web3 Developer</h1>
        <p className="mb-6 text-center text-gray-200">
          I am a Full-Stack Web3 Developer specializing in blockchain technologies and decentralized applications. My expertise spans both traditional web development and cutting-edge blockchain solutions.
        </p>
        
        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <motion.div 
              key={tech.name} 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {tech.icon}
              <p className="mt-2 text-lg font-semibold text-white">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Achievements Section */}
      <div className="material-card w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Achievements</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-300">HackOdisha 5.0 - Verbwire Track Winner</h3>
            <p className="text-gray-300 mt-2">
              Developed an innovative blockchain solution using Verbwire API that earned first place in the Verbwire track at HackOdisha 5.0.
            </p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-300">EVM Chain Certification</h3>
            <p className="text-gray-300 mt-2">
              Completed advanced certification in Ethereum development and smart contract programming.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;