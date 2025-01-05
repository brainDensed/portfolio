'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'React', url: 'https://react.dev' },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
  { name: 'C++', url: 'https://isocpp.org' },
  { name: 'Redux', url: 'https://redux.js.org' },
  { name: 'Ant Design', url: 'https://ant.design' },
  { name: 'MUI', url: 'https://mui.com' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
  { name: 'Git/GitHub', url: 'https://github.com' },
];

const Skills = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-screen w-full p-8"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative z-10 glass p-6 rounded-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold dark:text-white mb-4">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <motion.a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 glass text-gray-300 rounded-lg shadow-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;