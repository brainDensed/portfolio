"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import SkillTree from "../SkillTree/SkillTree";
import HolographicCard from "../HolographicCard/HolographicCard";
import MatrixRain from "../MatrixRain/MatrixRain";

const ModernGUI = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showSkillTree, setShowSkillTree] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const { getCurrentThemeInfo, changeTheme, getAvailableThemes } = useTheme();
  const currentTheme = getCurrentThemeInfo();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle ESC key to close modals
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        const wasSkillTreeOpen = showSkillTree;
        setShowCard(false);
        setShowSkillTree(false);
        setShowMatrix(false);

        // Notify parent if SkillTree was closed
        if (wasSkillTreeOpen) {
          window.dispatchEvent(new CustomEvent('skillTreeToggle', { detail: { active: false } }));
        }
      }
    };

    if (showCard || showSkillTree || showMatrix) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showCard, showSkillTree, showMatrix]);

  const navigationItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👤" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "contact", label: "Contact", icon: "📞" },
  ];

  const projects = [
    {
      id: "theramine",
      name: "Theramine",
      track: "Verbwire - Web3 Infrastructure",
      tech: ["React", "Solidity", "Web3.js", "Hardhat"],
      achievement: "Award-winning project",
      impact: "Secure chat on Web3 between therapist and user",
      status: "completed"
    },
    {
      id: "genoroot",
      name: "Genoroot",
      tech: ["React", "Redux", "Tailwind", "Firebase"],
      features: "AI/ML hair analysis platform",
      performance: "15% faster loading, 20% dev speed boost",
      duration: "Oct 2024 - Mar 2025",
      status: "completed"
    },
    {
      id: "planetdoctor",
      name: "Planetdoctor",
      tech: ["React", "Google Maps API", "Multilingual"],
      features: "Location-based doctor discovery",
      impact: "15% faster booking, Spanish/English support",
      duration: "Sep 2024 - Dec 2024",
      status: "completed"
    },
    {
      id: "authbase",
      name: "AuthBase",
      tech: ["React", "JWT", "Redis", "Docker", "AWS"],
      features: "Production-ready auth system",
      security: "JWT + Session-based authentication",
      duration: "Apr 2025 - May 2025",
      status: "completed"
    },
    {
      id: "maxlink",
      name: "MaxLink-Health",
      tech: ["React", "IoT Integration", "Real-time APIs"],
      features: "Health monitoring, Auto-invoicing",
      innovation: "Time-based billing system",
      duration: "Dec 2023 - Apr 2024",
      status: "completed"
    }
  ];

  const experience = [
    {
      period: "Feb 2023 - Mar 2025",
      role: "Junior Developer",
      company: "Dreamsoft4u Pvt. Ltd",
      location: "Jaipur, Rajasthan",
      achievements: [
        "Developed 5+ projects & reusable components",
        "Cut development time by 25%",
        "Mentored junior developers with pair programming",
        "Increased team efficiency by 30%"
      ]
    },
    {
      period: "Aug 2019 - Aug 2023",
      role: "Computer Science & Engineering",
      company: "JECRC University",
      location: "Jaipur, Rajasthan",
      achievements: [
        "Built strong foundation in algorithms & DS",
        "Specialized in web technologies"
      ]
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <>
      <MatrixRain isActive={showMatrix} onClose={() => setShowMatrix(false)} isGUI={true} />
      <HolographicCard isVisible={showCard} onClose={() => setShowCard(false)} />
      {showSkillTree && (
        <div
          className="fixed inset-0 z-50 bg-black/95"
          onClick={() => {
            setShowSkillTree(false);
            window.dispatchEvent(new CustomEvent('skillTreeToggle', { detail: { active: false } }));
          }}
        >
          <SkillTree isGUI={true} />
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 flex">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            className="w-64 bg-black/50 backdrop-blur-md border-r min-h-screen p-6"
            style={{
              borderColor: `${currentTheme.colors.primary}30`,
            }}
          >
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold mb-2"
                style={{ color: currentTheme.colors.primary }}
              >
                SHIVAM.EXE
              </motion.h1>
              <p className="text-gray-400 text-sm">Frontend + Web3 Specialist</p>
            </div>

            <nav className="space-y-2">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3`}
                  style={{
                    backgroundColor: activeSection === item.id ? `${currentTheme.colors.primary}20` : 'transparent',
                    color: activeSection === item.id ? currentTheme.colors.primary : undefined,
                    border: activeSection === item.id ? `1px solid ${currentTheme.colors.primary}50` : '1px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.color = currentTheme.colors.primary;
                      e.target.style.backgroundColor = `${currentTheme.colors.primary}10`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.color = '';
                      e.target.style.backgroundColor = '';
                    }
                  }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h3 className="text-sm font-semibold text-gray-300 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setShowCard(true)}
                  className="w-full text-left px-4 py-2 rounded text-sm text-gray-400 transition-colors"
                  style={{ '--hover-color': currentTheme.colors.primary }}
                  onMouseEnter={(e) => {
                    e.target.style.color = currentTheme.colors.primary;
                    e.target.style.backgroundColor = `${currentTheme.colors.primary}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '';
                    e.target.style.backgroundColor = '';
                  }}
                >
                  💳 Business Card
                </button>
                <button
                  onClick={() => {
                    setShowSkillTree(true);
                    window.dispatchEvent(new CustomEvent('skillTreeToggle', { detail: { active: true } }));
                  }}
                  className="w-full text-left px-4 py-2 rounded text-sm text-gray-400 transition-colors"
                  style={{ '--hover-color': currentTheme.colors.primary }}
                  onMouseEnter={(e) => {
                    e.target.style.color = currentTheme.colors.primary;
                    e.target.style.backgroundColor = `${currentTheme.colors.primary}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '';
                    e.target.style.backgroundColor = '';
                  }}
                >
                  🌳 Skill Tree
                </button>
                <button
                  onClick={() => setShowMatrix(true)}
                  className="w-full text-left px-4 py-2 rounded text-sm text-gray-400 transition-colors"
                  style={{ '--hover-color': currentTheme.colors.primary }}
                  onMouseEnter={(e) => {
                    e.target.style.color = currentTheme.colors.primary;
                    e.target.style.backgroundColor = `${currentTheme.colors.primary}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '';
                    e.target.style.backgroundColor = '';
                  }}
                >
                  💻 Matrix Mode
                </button>
                <button
                  onClick={() => setShowThemeSelector(!showThemeSelector)}
                  className="w-full text-left px-4 py-2 rounded text-sm text-gray-400 transition-colors"
                  style={{ '--hover-color': currentTheme.colors.primary }}
                  onMouseEnter={(e) => {
                    e.target.style.color = currentTheme.colors.primary;
                    e.target.style.backgroundColor = `${currentTheme.colors.primary}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '';
                    e.target.style.backgroundColor = '';
                  }}
                >
                  🎨 Themes
                </button>
              </div>
            </div>
          </motion.div>

          {/* Theme Selector Overlay */}
          <AnimatePresence>
            {showThemeSelector && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setShowThemeSelector(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-gray-900/95 backdrop-blur-md p-6 rounded-xl border border-gray-700 max-w-md w-full max-h-[80vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold" style={{ color: currentTheme.colors.primary }}>Choose Theme</h3>
                    <button
                      onClick={() => setShowThemeSelector(false)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-2">
                    {getAvailableThemes().map((theme) => (
                      <button
                        key={theme.key}
                        onClick={() => {
                          changeTheme(theme.key);
                          setShowThemeSelector(false);
                        }}
                        className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-gray-700 hover:border-gray-600"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-white">{theme.name}</div>
                            <div className="text-sm text-gray-400">{theme.description}</div>
                          </div>
                          {getCurrentThemeInfo().key === theme.key && (
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: currentTheme.colors.primary }}
                            ></div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <AnimatePresence mode="wait">
              {activeSection === "home" && <HomeSection key="home" currentTheme={currentTheme} />}
              {activeSection === "about" && <AboutSection key="about" currentTheme={currentTheme} />}
              {activeSection === "skills" && <SkillsSection key="skills" currentTheme={currentTheme} />}
              {activeSection === "projects" && <ProjectsSection key="projects" projects={projects} currentTheme={currentTheme} />}
              {activeSection === "experience" && <ExperienceSection key="experience" experience={experience} currentTheme={currentTheme} />}
              {activeSection === "contact" && <ContactSection key="contact" currentTheme={currentTheme} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// Home Section Component
const HomeSection = ({ currentTheme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-4xl mx-auto"
  >
    <div className="text-center mb-12">
      <motion.h1
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold mb-4"
        style={{ color: currentTheme.colors.primary }}
      >
        SHIVAM
      </motion.h1>
      <p className="text-xl text-gray-300 mb-2">Frontend Developer | Web3 Specialist</p>
      <p className="text-lg text-gray-400">Building the future of decentralized web</p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-black/50 backdrop-blur-md p-6 rounded-xl border"
        style={{ borderColor: `${currentTheme.colors.primary}30` }}
      >
        <div className="text-3xl mb-4">🚀</div>
        <h3 className="text-xl font-bold mb-2" style={{ color: currentTheme.colors.primary }}>2+ Years Experience</h3>
        <p className="text-gray-300">Professional frontend development with modern technologies</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-black/50 backdrop-blur-md p-6 rounded-xl border"
        style={{ borderColor: `${currentTheme.colors.primary}30` }}
      >
        <div className="text-3xl mb-4">🏆</div>
        <h3 className="text-xl font-bold mb-2" style={{ color: currentTheme.colors.primary }}>Award Winner</h3>
        <p className="text-gray-300">HackOdisha 5.0 - Verbwire Track</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-black/50 backdrop-blur-md p-6 rounded-xl border"
        style={{ borderColor: `${currentTheme.colors.primary}30` }}
      >
        <div className="text-3xl mb-4">₹15 LPA+</div>
        <h3 className="text-xl font-bold mb-2" style={{ color: currentTheme.colors.primary }}>Target Package</h3>
        <p className="text-gray-300">Ready for senior roles and leadership positions</p>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-black/50 backdrop-blur-md p-8 rounded-xl border"
      style={{ borderColor: `${currentTheme.colors.primary}30` }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: currentTheme.colors.primary }}>Latest Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-lg border"
          style={{
            backgroundColor: `${currentTheme.colors.primary}20`,
            borderColor: `${currentTheme.colors.primary}50`
          }}
        >
          <h3 className="font-bold mb-2" style={{ color: currentTheme.colors.primary }}>Theramine</h3>
          <p className="text-sm text-gray-300">Award-winning Web3 chat application for therapy sessions</p>
        </div>
        <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-700/50">
          <h3 className="font-bold text-blue-400 mb-2">Genoroot</h3>
          <p className="text-sm text-gray-300">AI-powered hair analysis platform with 15% performance boost</p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// About Section Component
const AboutSection = ({ currentTheme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-4xl mx-auto"
  >
    <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border"
      style={{ borderColor: `${currentTheme.colors.primary}30` }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl"
        style={{
          background: `linear-gradient(to bottom right, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`
        }}
      >
        👨‍💻
      </motion.div>

      <h1 className="text-4xl font-bold text-center mb-6" style={{ color: currentTheme.colors.primary }}>About Shivam</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4" style={{ color: currentTheme.colors.primary }}>Professional Summary</h2>
          <p className="text-gray-300 mb-4">
            Passionate Frontend Developer with 2+ years of experience building modern web applications
            and exploring the decentralized web (Web3). Specialized in React ecosystem and blockchain
            technologies.
          </p>
          <p className="text-gray-300 mb-4">
            Currently seeking opportunities with ₹15 LPA+ package to contribute to innovative projects
            and grow as a senior developer.
          </p>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span style={{ color: currentTheme.colors.primary }}>📍</span>
              <span className="text-gray-300">Darbhanga, Bihar, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <span style={{ color: currentTheme.colors.primary }}>🎓</span>
              <span className="text-gray-300">B.Tech Computer Science, JECRC University</span>
            </div>
            <div className="flex items-center space-x-2">
              <span style={{ color: currentTheme.colors.primary }}>⚡</span>
              <span className="text-gray-300">Available: Remote • Hybrid • On-site</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4" style={{ color: currentTheme.colors.primary }}>Core Expertise</h2>
          <div className="space-y-3">
            {[
              { name: "React & Next.js", level: 95 },
              { name: "Web3 & Solidity", level: 85 },
              { name: "TypeScript", level: 90 },
              { name: "Performance Optimization", level: 88 }
            ].map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">{skill.name}</span>
                  <span style={{ color: currentTheme.colors.primary }}>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Skills Section Component
const SkillsSection = ({ currentTheme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-6xl mx-auto"
  >
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.primary }}>Technical Skills</h1>
      <p className="text-gray-400">Interactive skill visualization and expertise levels</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS (Beginner)"], color: "green" },
        { category: "Web3", skills: ["Solidity", "Web3.js", "Hardhat", "Smart Contracts"], color: "blue" },
        { category: "Tools", skills: ["Git", "Docker", "Vercel", "Firebase"], color: "purple" }
      ].map((group, index) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-black/50 backdrop-blur-md p-6 rounded-xl border"
            style={{ borderColor: `${currentTheme.colors.primary}30` }}
          >
          <h3 className="text-xl font-bold mb-4" style={{ color: currentTheme.colors.primary }}>{group.category}</h3>
          <div className="space-y-3">
            {group.skills.map((skill, skillIndex) => (
              <div key={skill} className="flex items-center justify-between">
                <span className="text-gray-300">{skill}</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05) + (star * 0.1) }}
                      className="w-2 h-2 rounded-full"
                       style={{
                         backgroundColor: (skill === "Tailwind CSS (Beginner)" ?
                           (star <= 2 ? currentTheme.colors.primary : "#374151") :
                           (star <= 4 ? currentTheme.colors.primary : "#374151"))
                       }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Projects Section Component
const ProjectsSection = ({ projects, currentTheme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-6xl mx-auto"
  >
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.primary }}>Featured Projects</h1>
      <p className="text-gray-400">Portfolio of innovative solutions and technical achievements</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-black/50 backdrop-blur-md p-6 rounded-xl border transition-all duration-300"
            style={{
              borderColor: `${currentTheme.colors.primary}30`,
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = `${currentTheme.colors.primary}60`;
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = `${currentTheme.colors.primary}30`;
            }}
          >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold" style={{ color: currentTheme.colors.primary }}>{project.name}</h3>
            <span className="text-xs bg-green-900/50 px-2 py-1 rounded border border-green-600">
              {project.status}
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-gray-300 text-sm">{project.impact || project.features}</p>

            <div className="flex flex-wrap gap-1">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs bg-gray-800 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            {project.achievement && (
              <div className="text-xs flex items-center space-x-1" style={{ color: currentTheme.colors.accent }}>
                <span>🏆</span>
                <span>{project.achievement}</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Experience Section Component
const ExperienceSection = ({ experience, currentTheme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-4xl mx-auto"
  >
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.primary }}>Professional Experience</h1>
      <p className="text-gray-400">Career journey and achievements</p>
    </div>

    <div className="space-y-6">
      {experience.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-black/50 backdrop-blur-md p-6 rounded-xl border"
            style={{ borderColor: `${currentTheme.colors.primary}30` }}
          >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold" style={{ color: currentTheme.colors.primary }}>{exp.role}</h3>
              <p className="text-gray-300">{exp.company}</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <p className="font-semibold" style={{ color: currentTheme.colors.primary }}>{exp.period}</p>
              <p className="text-gray-400 text-sm">{exp.location}</p>
            </div>
          </div>

          <div className="space-y-2">
            {exp.achievements.map((achievement, achIndex) => (
              <div key={achIndex} className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: currentTheme.colors.primary }}>•</span>
                <span className="text-gray-300 text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Contact Section Component
const ContactSection = ({ currentTheme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-4xl mx-auto"
  >
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.primary }}>Get In Touch</h1>
      <p className="text-gray-400">Let's discuss opportunities and collaborations</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border"
        style={{ borderColor: `${currentTheme.colors.primary}30` }}
      >
        <h2 className="text-2xl font-bold mb-6" style={{ color: currentTheme.colors.primary }}>Contact Information</h2>

        <div className="space-y-4">
          {[
            { icon: "📍", label: "Location", value: "Darbhanga, Bihar, India" },
            { icon: "🔗", label: "LinkedIn", value: "/in/shivam-nilay" },
            { icon: "🐙", label: "GitHub", value: "github.com/brainDensed" }
          ].map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4 p-3 rounded-lg transition-colors"
                style={{ '--hover-bg': `${currentTheme.colors.primary}10` }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = `${currentTheme.colors.primary}10`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '';
                }}
              >
              <span className="text-2xl">{contact.icon}</span>
              <div>
                <p className="text-sm text-gray-400">{contact.label}</p>
                <p className="font-semibold" style={{ color: currentTheme.colors.primary }}>{contact.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border"
        style={{ borderColor: `${currentTheme.colors.primary}30` }}
      >
        <h2 className="text-2xl font-bold mb-6" style={{ color: currentTheme.colors.primary }}>Availability Status</h2>

        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🟢</div>
          <h3 className="text-xl font-bold mb-2" style={{ color: currentTheme.colors.primary }}>Open to Opportunities</h3>
          <p className="text-gray-300 mb-4">Actively seeking new challenges and career growth</p>
        </div>

        <div className="space-y-3">
          <div className="p-3 rounded border text-center"
            style={{
              backgroundColor: `${currentTheme.colors.primary}20`,
              borderColor: `${currentTheme.colors.primary}50`
            }}
          >
            <p className="font-semibold" style={{ color: currentTheme.colors.primary }}>Target Package</p>
            <p className="text-2xl font-bold text-white">₹15 LPA+</p>
          </div>

          <div className="p-3 bg-blue-900/20 rounded border border-blue-700/50 text-center">
            <p className="text-blue-400 font-semibold">Work Preferences</p>
            <p className="text-white">Remote • Hybrid • On-site</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ModernGUI;