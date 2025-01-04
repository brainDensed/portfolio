'use client';

import { motion } from 'framer-motion';

const Experiences = () => {
  return (
    <motion.section
      className="relative flex items-center justify-center min-h-screen w-full p-8 pt-24" // Added pt-24 for padding top
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative z-10 glass p-6 rounded-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold dark:text-white mb-4 text-center">Experience</h1>
        
        {/* General Information */}
        <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
          I am Shivam, a passionate Full-Stack Developer with experience in React, JavaScript, TypeScript, 
          and modern frameworks. Here’s a closer look at my professional journey, including achievements 
          and learnings beyond my resume.
        </p>
        
        {/* Experience Details */}
        <div className="space-y-6">
          {/* Dreamsoft4u Experience */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow">
            <h2 className="text-xl font-bold dark:text-white">Junior Software Developer</h2>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              Dreamsoft4u Pvt. Ltd. | Jaipur, Rajasthan | August 2023 – Present
            </p>
            <ul className="mt-3 text-gray-700 dark:text-gray-400 list-disc pl-6">
              <li>Successfully led the migration of legacy code to React, ensuring scalability and improved performance.</li>
              <li>Introduced and advocated for best practices, such as DRY (Don't Repeat Yourself) principles, improving team productivity.</li>
              <li>Collaborated closely with analysts and stakeholders to align technical solutions with business goals.</li>
              <li>Built scalable reusable components using Ant Design and TailwindCSS, saving time in project lifecycles.</li>
            </ul>
          </div>

          {/* Intern Experience */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow">
            <h2 className="text-xl font-bold dark:text-white">Software Developer Intern</h2>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              Dreamsoft4u Pvt. Ltd. | Jaipur, Rajasthan | February 2023 – July 2023
            </p>
            <ul className="mt-3 text-gray-700 dark:text-gray-400 list-disc pl-6">
              <li>Developed real-time features, gaining practical hands-on experience with React and Redux.</li>
              <li>Worked with cross-functional teams to implement customer-centric enhancements, bridging technical and non-technical communication.</li>
              <li>Learned the importance of agile development, participating in weekly sprints and retrospectives.</li>
              <li>Resolved bugs under tight deadlines, reinforcing my problem-solving and debugging skills.</li>
            </ul>
          </div>
          
          {/* Additional Achievements (Beyond Resume) */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow">
            <h2 className="text-xl font-bold dark:text-white">Key Accomplishments</h2>
            <ul className="mt-3 text-gray-700 dark:text-gray-400 list-disc pl-6">
              <li>Mentored new team members, enhancing onboarding processes and knowledge sharing.</li>
              <li>Integrated a process automation tool (e.g., Make.com) to reduce repetitive manual tasks, saving 15+ hours per sprint.</li>
              <li>Conceptualized interactive components for customer dashboards using Framer Motion, resulting in a 25% increase in user satisfaction.</li>
              <li>Explored and implemented custom middleware solutions for error tracking and logging in production environments.</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experiences;