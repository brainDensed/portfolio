"use client";

import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const SkillTree = ({ isGUI = false }) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const { getCurrentThemeInfo } = useTheme();

  const skillTree = {
    id: "root",
    name: "Full Stack Developer",
    level: 88,
    unlocked: true,
    children: [
      {
        id: "frontend",
        name: "Frontend",
        level: 95,
        unlocked: true,
        children: [
          { id: "react", name: "React", level: 98, unlocked: true },
          { id: "nextjs", name: "Next.js", level: 92, unlocked: true },
          { id: "typescript", name: "TypeScript", level: 90, unlocked: true },
          { id: "javascript", name: "JavaScript", level: 95, unlocked: true },
        ],
      },
      {
        id: "web3",
        name: "Web3",
        level: 85,
        unlocked: true,
        children: [
          { id: "solidity", name: "Solidity", level: 80, unlocked: true },
          { id: "hardhat", name: "Hardhat", level: 85, unlocked: true },
          { id: "web3js", name: "Web3.js", level: 90, unlocked: true },
          { id: "smart-contracts", name: "Smart Contracts", level: 88, unlocked: true },
        ],
      },
      {
        id: "blockchain",
        name: "Blockchain",
        level: 75,
        unlocked: true,
        children: [
          { id: "defi", name: "DeFi", level: 70, unlocked: true },
          { id: "nfts", name: "NFTs", level: 80, unlocked: true },
          { id: "zk-proofs", name: "zk-Proofs", level: 60, unlocked: false },
          { id: "layer2", name: "Layer 2", level: 75, unlocked: true },
        ],
      },
      {
        id: "tools",
        name: "Tools",
        level: 80,
        unlocked: true,
        children: [
          { id: "git", name: "Git", level: 90, unlocked: true },
          { id: "docker", name: "Docker", level: 75, unlocked: true },
          { id: "vercel", name: "Vercel", level: 85, unlocked: true },
          { id: "firebase", name: "Firebase", level: 80, unlocked: true },
        ],
      },
    ],
  };

  // Keep this callback stable to avoid prop identity changes on children
  const handleToggleSelect = useCallback((id) => {
    setSelectedNode((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      {/* Tree Container */}
      <div className="relative z-10 py-20 px-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Tree Structure */}
          <div className="flex flex-col items-center">
            {/* Root Node */}
            <TreeNode
              node={skillTree}
              level={0}
              index={0}
              totalSiblings={1}
              selectedNode={selectedNode}
              onToggle={handleToggleSelect}
            />
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute top-4 right-4 text-white font-mono text-sm">
        <motion.div
          className="bg-black/80 p-4 rounded-lg border border-green-400/30 backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-lg font-bold mb-3 text-green-400">🌳 SKILL TREE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Expert (90%+)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <span>Advanced (70-89%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <span>Intermediate (50-69%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <span>Locked</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ESC Instruction */}
      <div className="absolute top-4 left-4 text-white font-mono text-sm">
        <motion.div
          className="bg-black/60 px-3 py-2 rounded border border-gray-500/30 backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="text-xs text-gray-300">
            Press <span className="text-green-400 font-bold">ESC</span> to return to {isGUI ? 'GUI' : 'terminal'}
          </div>
        </motion.div>
      </div>

      {/* Stats Panel */}
      <div className="absolute bottom-6 left-6 text-white font-mono text-sm z-20">
        <motion.div
          className="bg-black/80 p-4 rounded-lg border border-blue-400/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-lg font-bold mb-2 text-blue-400">📊 STATS</h3>
          <div className="space-y-1 text-sm">
            <div>Total Skills: 20</div>
            <div>Unlocked: 19</div>
            <div>Average Level: 82%</div>
            <div>Target: 15LPA+ Package</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/**
 * Memoized TreeNode so clicking a node only re-renders:
 * - the clicked node, and
 * - the previously selected node (to remove its selection styles/tooltip).
 */
const TreeNode = memo(
  function TreeNode({
    node,
    level = 0,
    index = 0,
    totalSiblings = 1,
    selectedNode,
    onToggle,
  }) {
    const isRoot = level === 0;
    const isBranch = level === 1;
    // const isLeaf = level === 2;

    const isSelected = selectedNode === node.id;

    const getNodeSize = () => {
      if (isRoot) return "w-20 h-20";
      if (isBranch) return "w-16 h-16";
      return "w-12 h-12";
    };

    const getTextSize = () => {
      if (isRoot) return "text-sm";
      if (isBranch) return "text-xs";
      return "text-xs";
    };

    const getNodeColor = () => {
      if (!node.unlocked) return "border-gray-600 bg-gray-800/50 text-gray-500";
      if (node.level >= 90) return "border-green-400 bg-green-900/50 text-green-300";
      if (node.level >= 70) return "border-blue-400 bg-blue-900/50 text-blue-300";
      return "border-yellow-400 bg-yellow-900/50 text-yellow-300";
    };

    return (
      <motion.div
        className="flex flex-col items-center relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: level * 0.2 + index * 0.1,
        }}
      >
        {/* Node */}
        <motion.div
          className={`
            ${getNodeSize()} rounded-full border-2 flex items-center justify-center relative
            ${getNodeColor()}
            hover:scale-110 transition-all duration-300 cursor-pointer
            ${isSelected ? "ring-2 ring-white ring-opacity-50" : ""}
          `}
          onClick={(e) => {
            e.stopPropagation();
            onToggle(node.id);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Progress Ring - Background */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 45}%`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - node.level / 100)}%`}
              className="transition-all duration-1000"
            />
          </svg>

          {/* Text Content - Fixed position */}
          <div className="relative z-10 text-center">
            <div className={`${getTextSize()} font-bold`}>{node.level}%</div>
          </div>
        </motion.div>

        {/* Node Label */}
        <motion.div
          className={`mt-2 text-center ${getTextSize()} font-medium text-white/80`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: level * 0.2 + index * 0.1 + 0.3 }}
        >
          {node.name}
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              className="absolute top-full mt-4 bg-black/90 text-white px-4 py-3 rounded-lg border border-green-400/30 z-20 min-w-max"
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
            >
              <div className="font-bold text-green-400">{node.name}</div>
              <div className="text-sm text-gray-300">Level: {node.level}%</div>
              <div className="text-xs text-gray-400 mt-1">
                {node.unlocked ? "Unlocked" : "Locked"}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Children */}
        {Array.isArray(node.children) && node.children.length > 0 && (
          <div className="flex justify-center space-x-4 mt-6">
            {node.children.map((child, childIndex) => (
              <TreeNode
                key={child.id}
                node={child}
                level={level + 1}
                index={childIndex}
                totalSiblings={node.children.length}
                selectedNode={selectedNode}
                onToggle={onToggle}
              />
            ))}
          </div>
        )}
      </motion.div>
    );
  },
  // Custom comparator: skip re-render unless this node's selection state changes or its structural props change
  (prev, next) => {
    // If node reference or structural props changed, re-render
    if (prev.node !== next.node) return false;
    if (
      prev.level !== next.level ||
      prev.index !== next.index ||
      prev.totalSiblings !== next.totalSiblings
    )
      return false;

    // Only re-render if this node's selected state changed
    const prevIsSelected = prev.selectedNode === prev.node.id;
    const nextIsSelected = next.selectedNode === next.node.id;
    if (prevIsSelected !== nextIsSelected) return false;

    // Otherwise, skip re-render
    return true;
  }
);

export default SkillTree;