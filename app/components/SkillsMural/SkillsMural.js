"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const skillData = [
  {
    skill: "React",
    artifact: "Shield",
    description: "The ultimate shield of your frontend arsenal, providing robust and dynamic user interfaces."
  },
  {
    skill: "JavaScript",
    artifact: "Wand",
    description: "A versatile wand for conjuring interactive and responsive web experiences."
  },
  {
    skill: "TypeScript",
    artifact: "Book of Spells",
    description: "A meticulously crafted spellbook, ensuring type-safe and maintainable code magic."
  },
  {
    skill: "DSA",
    artifact: "Amulet",
    description: "A potent amulet that strengthens problem-solving skills, empowering me to tackle challenges effectively."
  },
  {
    skill: "C++",
    artifact: "Crystal Ball",
    description: "A crystal-clear foundation in competitive coding, polished by solving 100+ problems and earning a 4-star badge on HackerRank."
  },
];


export default function SkillsMural() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="flex flex-col items-center w-full h-full text-white">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-8">Skill Mural</h2>

      {/* Mural Display */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skillData.map((skill) => (
          <motion.div
            key={skill.skill}
            className="bg-gradient-to-br from-indigo-600 to-purple-700 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedSkill(skill)}
          >
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">
                {/* Replace with actual icons or symbols */}
                🛡️
              </div>
              <h3 className="text-xl font-semibold">{skill.artifact}</h3>
              <p className="text-sm opacity-75 mt-2">{skill.skill}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Selected Skill */}
      {selectedSkill && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-gray-900 p-6 rounded-lg text-center max-w-md w-full shadow-lg"
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
          >
            <h3 className="text-2xl font-bold mb-4">{selectedSkill.artifact}</h3>
            <p className="mb-4">{selectedSkill.description}</p>
            <button
              className="bg-red-500 w-16 h-16 rounded-full text-white px-4 py-2 hover:bg-red-600"
              onClick={() => setSelectedSkill(null)}
            >
              Hide
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
