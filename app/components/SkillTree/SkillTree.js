"use client";

import { motion } from "framer-motion";

const SkillTree = () => {
  const skills = {
    frontend: {
      name: "Frontend Mastery",
      level: 95,
      unlocked: true,
      children: ["React", "Next.js", "TypeScript", "JavaScript"]
    },
    web3: {
      name: "Web3 Development",
      level: 85,
      unlocked: true,
      children: ["Solidity", "Hardhat", "Web3.js", "Smart Contracts"]
    },
    blockchain: {
      name: "Blockchain Tech",
      level: 75,
      unlocked: true,
      children: ["DeFi", "NFTs", "zk-Proofs", "Layer 2"]
    },
    styling: {
      name: "UI/UX Design",
      level: 90,
      unlocked: true,
      children: ["Tailwind CSS", "Material UI", "Framer Motion", "Ant Design"]
    },
    tools: {
      name: "Development Tools",
      level: 80,
      unlocked: true,
      children: ["Git", "Docker", "Vercel", "Firebase"]
    },
    languages: {
      name: "Programming Languages",
      level: 85,
      unlocked: true,
      children: ["JavaScript", "TypeScript", "C++", "Go"]
    }
  };

  const SkillNode = ({ skill, position, isRoot = false }) => (
    <motion.div
      className={`absolute ${position} transform -translate-x-1/2 -translate-y-1/2`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
    >
      <div className={`relative ${isRoot ? 'w-32 h-32' : 'w-24 h-24'}`}>
        {/* Skill Circle */}
        <div className={`
          w-full h-full rounded-full border-4 flex items-center justify-center
          ${skill.unlocked 
            ? 'border-green-400 bg-green-900/50 text-green-300' 
            : 'border-gray-600 bg-gray-800/50 text-gray-500'
          }
          hover:scale-110 transition-transform cursor-pointer
        `}>
          <div className="text-center">
            <div className={`${isRoot ? 'text-lg' : 'text-sm'} font-bold`}>
              {skill.level}%
            </div>
            <div className={`${isRoot ? 'text-xs' : 'text-xs'} mt-1`}>
              {skill.name.split(' ')[0]}
            </div>
          </div>
        </div>
        
        {/* Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={isRoot ? "45%" : "40%"}
            fill="none"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="2"
          />
          <circle
            cx="50%"
            cy="50%"
            r={isRoot ? "45%" : "40%"}
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * (isRoot ? 45 : 40)}`}
            strokeDashoffset={`${2 * Math.PI * (isRoot ? 45 : 40) * (1 - skill.level / 100)}`}
            className="transition-all duration-1000"
          />
        </svg>
      </div>
      
      {/* Tooltip */}
      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
                      bg-black/90 text-green-400 px-3 py-2 rounded text-xs
                      opacity-0 hover:opacity-100 transition-opacity z-10
                      whitespace-nowrap">
        <div className="font-bold">{skill.name}</div>
        <div className="text-green-300">Level: {skill.level}%</div>
        {skill.children && (
          <div className="mt-1">
            {skill.children.map((child, i) => (
              <div key={i} className="text-gray-300">• {child}</div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.8)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
          </linearGradient>
        </defs>
        
        {/* Central hub connections */}
        <motion.line
          x1="50%" y1="50%" x2="20%" y2="20%"
          stroke="url(#lineGradient)" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1="50%" y1="50%" x2="80%" y2="20%"
          stroke="url(#lineGradient)" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.line
          x1="50%" y1="50%" x2="20%" y2="80%"
          stroke="url(#lineGradient)" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
        <motion.line
          x1="50%" y1="50%" x2="80%" y2="80%"
          stroke="url(#lineGradient)" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        />
      </svg>

      {/* Skill Nodes */}
      <SkillNode skill={skills.frontend} position="top-1/4 left-1/4" />
      <SkillNode skill={skills.web3} position="top-1/4 right-1/4" />
      <SkillNode skill={skills.blockchain} position="bottom-1/4 left-1/4" />
      <SkillNode skill={skills.styling} position="bottom-1/4 right-1/4" />
      <SkillNode skill={skills.tools} position="top-1/2 left-1/6" />
      <SkillNode skill={skills.languages} position="top-1/2 right-1/6" />
      
      {/* Central Core */}
      <SkillNode 
        skill={{
          name: "Frontend + Web3",
          level: 88,
          unlocked: true
        }} 
        position="top-1/2 left-1/2" 
        isRoot={true}
      />

      {/* Legend */}
      <div className="absolute bottom-4 left-4 text-green-400 font-mono text-sm">
        <div className="bg-black/80 p-4 rounded border border-green-400">
          <h3 className="text-lg font-bold mb-2">🎮 SKILL TREE</h3>
          <div className="space-y-1">
            <div>🟢 Mastered Skills</div>
            <div>⚡ Active Development</div>
            <div>🎯 Target: 15LPA+ Package</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTree;