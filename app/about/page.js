'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="relative flex items-center justify-center min-h-screen w-full p-8"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative z-10 glass p-6 rounded-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold dark:text-white mb-4">About Me</h1>
        
        {/* Location */}
        <p className="text-gray-700 dark:text-gray-300">
          Based in <strong>Darbhanga, Bihar, India</strong>, I’m a developer with a knack for solving complex problems and bringing ideas to life.
        </p>

        {/* Experience Overview */}
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          I have over 2 years of professional experience as a Full-Stack Developer specializing in the 
          MERN stack (MongoDB, Express, React, Node.js). My journey started with a curiosity about technology, which later transformed into 
          a passion for creating impactful digital solutions.
        </p>

        {/* Unmentioned Strengths */}
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Apart from technical skills, I excel in communication, team collaboration, and problem-solving. 
          I've solved 100+ coding problems on platforms like GeeksforGeeks, showcasing my analytical and logical thinking skills.
        </p>

        {/* Aspirations */}
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          My ultimate ambition is to work on impactful technologies like AI, machine learning, and trading systems. I aim to bridge the 
          gap between innovation and real-world challenges, helping individuals and organizations achieve their goals.
        </p>

        {/* Future Goals */}
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          I am currently exploring advanced frameworks like Next.js and Framer Motion for animations to bring more creativity to my projects. 
          Additionally, I'm planning to delve into <strong>AI/ML</strong> and <strong>financial engineering</strong> to contribute to cutting-edge industries in the future.
        </p>

        {/* Key Values */}
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Adaptability, attention to detail, and a commitment to continuous learning are the principles I follow to achieve success 
          in a dynamic tech landscape.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
