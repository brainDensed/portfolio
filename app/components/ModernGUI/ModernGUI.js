"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import SkillTree from "../SkillTree/SkillTree";
import HolographicCard from "../HolographicCard/HolographicCard";
import MatrixRain from "../MatrixRain/MatrixRain";

// Material 3 Design System Constants
const MATERIAL3 = {
  elevation: {
    level0: 'none',
    level1: '0px 1px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.14)',
    level2: '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 8px 24px 0px rgba(0, 0, 0, 0.15)',
    level3: '0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
    level4: '0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
    level5: '0px 4px 4px -1px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)'
  },
  borderRadius: {
    none: '0px',
    extraSmall: '4px',
    small: '8px',
    medium: '12px',
    large: '16px',
    extraLarge: '28px',
    full: '9999px'
  },
  typography: {
    displayLarge: { fontSize: '57px', lineHeight: '64px', fontWeight: '400' },
    displayMedium: { fontSize: '45px', lineHeight: '52px', fontWeight: '400' },
    displaySmall: { fontSize: '36px', lineHeight: '44px', fontWeight: '400' },
    headlineLarge: { fontSize: '32px', lineHeight: '40px', fontWeight: '400' },
    headlineMedium: { fontSize: '28px', lineHeight: '36px', fontWeight: '400' },
    headlineSmall: { fontSize: '24px', lineHeight: '32px', fontWeight: '400' },
    titleLarge: { fontSize: '22px', lineHeight: '28px', fontWeight: '500' },
    titleMedium: { fontSize: '16px', lineHeight: '24px', fontWeight: '500' },
    titleSmall: { fontSize: '14px', lineHeight: '20px', fontWeight: '500' },
    labelLarge: { fontSize: '14px', lineHeight: '20px', fontWeight: '500' },
    labelMedium: { fontSize: '12px', lineHeight: '16px', fontWeight: '500' },
    labelSmall: { fontSize: '11px', lineHeight: '16px', fontWeight: '500' },
    bodyLarge: { fontSize: '16px', lineHeight: '24px', fontWeight: '400' },
    bodyMedium: { fontSize: '14px', lineHeight: '20px', fontWeight: '400' },
    bodySmall: { fontSize: '12px', lineHeight: '16px', fontWeight: '400' }
  }
};

const ModernGUI = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showSkillTree, setShowSkillTree] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [isQuickActionHovered, setIsQuickActionHovered] = useState(false);
  const { getCurrentThemeInfo, changeTheme, getAvailableThemes } = useTheme();
  const currentTheme = getCurrentThemeInfo();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Enhanced ESC key handler with better state management
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        const wasSkillTreeOpen = showSkillTree;
        setShowCard(false);
        setShowSkillTree(false);
        setShowMatrix(false);
        setShowThemeSelector(false);

        // Notify parent if SkillTree was closed
        if (wasSkillTreeOpen) {
          window.dispatchEvent(new CustomEvent('skillTreeToggle', { detail: { active: false } }));
        }
      }
    };

    if (showCard || showSkillTree || showMatrix || showThemeSelector) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [showCard, showSkillTree, showMatrix, showThemeSelector]);

  // Improved quick action handlers that don't interfere with navigation
  const handleQuickAction = useCallback((action) => {
    switch (action) {
      case 'card':
        setShowCard(true);
        break;
      case 'skillTree':
        setShowSkillTree(true);
        window.dispatchEvent(new CustomEvent('skillTreeToggle', { detail: { active: true } }));
        break;
      case 'matrix':
        setShowMatrix(true);
        break;
      case 'themes':
        setShowThemeSelector(!showThemeSelector);
        break;
    }
  }, [showThemeSelector]);

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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-2 border-white border-t-transparent rounded-full"
          style={{ borderTopColor: currentTheme.colors.primary }}
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
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          onClick={() => {
            setShowSkillTree(false);
            window.dispatchEvent(new CustomEvent('skillTreeToggle', { detail: { active: false } }));
          }}
        >
          <SkillTree isGUI={true} />
        </div>
      )}

      {/* Material 3 Background with iOS-like gradient */}
      <div className="h-screen text-white relative overflow-hidden flex flex-col">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_60%)]" />
          {/* iOS-like subtle noise texture */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="relative z-10 flex flex-1">
          {/* Material 3 Sidebar with iOS-like design - Responsive */}
          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-80 lg:w-80 md:w-72 sm:w-64 h-full relative"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.8)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRight: `1px solid rgba(148, 163, 184, 0.1)`
            }}
          >
            {/* Material 3 Elevation Level 2 */}
            <div
              className="absolute inset-0 rounded-r-3xl"
              style={{
                boxShadow: MATERIAL3.elevation.level2,
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.8) 100%)'
              }}
            />

            <div className="relative z-10 p-8 h-full flex flex-col">
              {/* Header Section with Material 3 Typography */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <motion.h1
                  className="text-3xl font-bold mb-3 tracking-tight"
                  style={{
                    ...MATERIAL3.typography.headlineLarge,
                    color: currentTheme.colors.primary,
                    backgroundImage: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  SHIVAM.EXE
                </motion.h1>
                <p
                  className="text-slate-400"
                  style={MATERIAL3.typography.bodyMedium}
                >
                  Frontend + Web3 Specialist
                </p>
              </motion.div>

              {/* Material 3 Navigation with iOS-like segments */}
              <nav className="flex-1 space-y-3">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (index * 0.05) }}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center space-x-4 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    style={{
                      background: activeSection === item.id
                        ? `linear-gradient(135deg, ${currentTheme.colors.primary}20, ${currentTheme.colors.secondary}15)`
                        : 'rgba(255, 255, 255, 0.05)',
                      border: activeSection === item.id
                        ? `1px solid ${currentTheme.colors.primary}40`
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: activeSection === item.id
                        ? `0 4px 12px ${currentTheme.colors.primary}30`
                        : 'none'
                    }}
                    aria-pressed={activeSection === item.id}
                    aria-label={`Navigate to ${item.label} section`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveSection(item.id);
                      }
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== item.id) {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== item.id) {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }
                    }}
                  >
                    {/* Active indicator for Material 3 */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                        style={{ backgroundColor: currentTheme.colors.primary }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <motion.span
                      className="text-2xl"
                      animate={{ scale: activeSection === item.id ? 1.1 : 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span style={MATERIAL3.typography.labelLarge}>{item.label}</span>
                  </motion.button>
                ))}
              </nav>

              {/* Material 3 Quick Actions Section */}
              <div className="pt-8 border-t border-slate-700/50">
                <motion.h3
                  className="text-slate-300 mb-6 font-medium"
                  style={MATERIAL3.typography.titleSmall}
                >
                  Quick Actions
                </motion.h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'card', label: 'Business Card', icon: '💳', action: 'card' },
                    { id: 'skillTree', label: 'Skill Tree', icon: '🌳', action: 'skillTree' },
                    { id: 'matrix', label: 'Matrix Mode', icon: '💻', action: 'matrix' },
                    { id: 'themes', label: 'Themes', icon: '🎨', action: 'themes' }
                  ].map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + (index * 0.05) }}
                      onClick={() => handleQuickAction(item.action)}
                      className="p-4 rounded-xl text-slate-400 hover:text-white transition-all duration-200 text-center relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                      aria-label={`${item.label} - ${item.action}`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleQuickAction(item.action);
                        }
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        setIsQuickActionHovered(true);
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        setIsQuickActionHovered(false);
                      }}
                    >
                      <motion.div
                        animate={{ rotate: isQuickActionHovered ? 5 : 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="text-2xl mb-2"
                      >
                        {item.icon}
                      </motion.div>
                      <div
                        className="text-xs font-medium"
                        style={MATERIAL3.typography.labelSmall}
                      >
                        {item.label}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Material 3 Theme Selector with iOS-like modal */}
          <AnimatePresence>
            {showThemeSelector && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
                onClick={() => setShowThemeSelector(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  className="w-full max-w-lg max-h-[80vh] overflow-hidden"
                  style={{
                    background: 'rgba(30, 41, 59, 0.95)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: MATERIAL3.borderRadius.large,
                    boxShadow: MATERIAL3.elevation.level5
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Material 3 Header */}
                  <div
                    className="flex items-center justify-between p-6 border-b"
                    style={{ borderColor: 'rgba(148, 163, 184, 0.1)' }}
                  >
                    <div>
                      <h3
                        className="text-2xl font-bold"
                        style={{
                          ...MATERIAL3.typography.headlineSmall,
                          color: currentTheme.colors.primary
                        }}
                      >
                        Choose Theme
                      </h3>
                      <p
                        className="text-slate-400 mt-1"
                        style={MATERIAL3.typography.bodySmall}
                      >
                        Select your preferred color scheme
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowThemeSelector(false)}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Material 3 Theme Grid */}
                  <div className="p-6 max-h-96 overflow-y-auto">
                    <div className="grid gap-3">
                      {getAvailableThemes().map((theme, index) => (
                        <motion.button
                          key={theme.key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => {
                            changeTheme(theme.key);
                            setShowThemeSelector(false);
                          }}
                          className={`w-full text-left p-4 rounded-xl transition-all duration-200 relative overflow-hidden ${
                            getCurrentThemeInfo().key === theme.key
                              ? 'text-white'
                              : 'text-slate-400 hover:text-white'
                          }`}
                          style={{
                            background: getCurrentThemeInfo().key === theme.key
                              ? `linear-gradient(135deg, ${currentTheme.colors.primary}20, ${currentTheme.colors.secondary}15)`
                              : 'rgba(255, 255, 255, 0.05)',
                            border: getCurrentThemeInfo().key === theme.key
                              ? `1px solid ${currentTheme.colors.primary}40`
                              : '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                          onMouseEnter={(e) => {
                            if (getCurrentThemeInfo().key !== theme.key) {
                              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (getCurrentThemeInfo().key !== theme.key) {
                              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                            }
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div
                                className="font-semibold"
                                style={{
                                  ...MATERIAL3.typography.titleMedium,
                                  color: getCurrentThemeInfo().key === theme.key
                                    ? currentTheme.colors.primary
                                    : 'inherit'
                                }}
                              >
                                {theme.name}
                              </div>
                              <div
                                className="text-slate-400 mt-1"
                                style={MATERIAL3.typography.bodySmall}
                              >
                                {theme.description}
                              </div>
                            </div>
                            {getCurrentThemeInfo().key === theme.key && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-5 h-5 rounded-full flex items-center justify-center"
                                style={{
                                  backgroundColor: currentTheme.colors.primary,
                                  boxShadow: `0 0 0 2px ${currentTheme.colors.primary}40`
                                }}
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                  <path
                                    d="M20 6L9 17L4 12"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </motion.div>
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Material 3 Main Content Area */}
          <div className="flex-1 relative">
            {/* iOS-like content container with proper spacing - Responsive */}
            <div className="p-4 sm:p-6 lg:p-8 h-full overflow-y-auto">
              <AnimatePresence mode="wait">
                {activeSection === "home" && (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HomeSection currentTheme={currentTheme} />
                  </motion.div>
                )}
                {activeSection === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AboutSection currentTheme={currentTheme} />
                  </motion.div>
                )}
                {activeSection === "skills" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SkillsSection currentTheme={currentTheme} />
                  </motion.div>
                )}
                {activeSection === "projects" && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectsSection projects={projects} currentTheme={currentTheme} />
                  </motion.div>
                )}
                {activeSection === "experience" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExperienceSection experience={experience} currentTheme={currentTheme} />
                  </motion.div>
                )}
                {activeSection === "contact" && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ContactSection currentTheme={currentTheme} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Material 3 Home Section Component
const HomeSection = ({ currentTheme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-6xl mx-auto space-y-8"
  >
    {/* Hero Section with Material 3 Typography */}
    <div className="text-center space-y-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative"
      >
        <h1
          className="text-8xl font-bold tracking-tight mb-6 relative"
          style={{
            ...MATERIAL3.typography.displayLarge,
            backgroundImage: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary}, ${currentTheme.colors.accent})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: `0 0 40px ${currentTheme.colors.primary}40`
          }}
        >
          SHIVAM
        </h1>
        {/* iOS-like glow effect */}
        <div
          className="absolute inset-0 blur-xl opacity-30"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
            borderRadius: MATERIAL3.borderRadius.extraLarge
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <p
          className="text-2xl text-slate-300"
          style={MATERIAL3.typography.headlineSmall}
        >
          Frontend Developer | Web3 Specialist
        </p>
        <p
          className="text-lg text-slate-400 max-w-2xl mx-auto"
          style={MATERIAL3.typography.bodyLarge}
        >
          Building the future of decentralized web with cutting-edge technologies
        </p>
      </motion.div>
    </div>

    {/* Material 3 Stats Cards with iOS-like design */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          icon: "🚀",
          title: "2+ Years Experience",
          description: "Professional frontend development with modern technologies",
          delay: 0.1
        },
        {
          icon: "🏆",
          title: "Award Winner",
          description: "HackOdisha 5.0 - Verbwire Track",
          delay: 0.2
        },
        {
          icon: "₹15 LPA+",
          title: "Target Package",
          description: "Ready for senior roles and leadership positions",
          delay: 0.3
        }
      ].map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: stat.delay, duration: 0.4 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="group relative overflow-hidden"
          style={{
            background: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: MATERIAL3.borderRadius.large,
            boxShadow: MATERIAL3.elevation.level2
          }}
        >
          {/* Hover effect overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.colors.primary}10, ${currentTheme.colors.secondary}05)`
            }}
          />

          <div className="relative p-8 text-center space-y-4">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-5xl mb-4"
            >
              {stat.icon}
            </motion.div>

            <h3
              className="text-xl font-bold text-white group-hover:text-slate-200"
              style={{
                ...MATERIAL3.typography.titleLarge,
                color: currentTheme.colors.primary
              }}
            >
              {stat.title}
            </h3>

            <p
              className="text-slate-400 group-hover:text-slate-300 leading-relaxed"
              style={MATERIAL3.typography.bodyMedium}
            >
              {stat.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Material 3 Featured Projects Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="relative"
      style={{
        background: 'rgba(30, 41, 59, 0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        borderRadius: MATERIAL3.borderRadius.large,
        boxShadow: MATERIAL3.elevation.level3
      }}
    >
      <div className="p-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-8"
          style={{
            ...MATERIAL3.typography.headlineMedium,
            color: currentTheme.colors.primary
          }}
        >
          Latest Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Theramine",
              description: "Award-winning Web3 chat application for therapy sessions",
              gradient: `linear-gradient(135deg, ${currentTheme.colors.primary}20, ${currentTheme.colors.secondary}15)`
            },
            {
              name: "Genoroot",
              description: "AI-powered hair analysis platform with 15% performance boost",
              gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.15))"
            }
          ].map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-6 rounded-xl border relative overflow-hidden group"
              style={{
                background: project.gradient,
                border: `1px solid ${currentTheme.colors.primary}30`,
                boxShadow: MATERIAL3.elevation.level1
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.colors.primary}05, transparent)`
                }}
              />

              <div className="relative">
                <h3
                  className="text-xl font-bold mb-3"
                  style={{
                    ...MATERIAL3.typography.titleLarge,
                    color: currentTheme.colors.primary
                  }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-slate-300 group-hover:text-slate-200"
                  style={MATERIAL3.typography.bodyMedium}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// Material 3 About Section Component
const AboutSection = ({ currentTheme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-6xl mx-auto"
  >
    <div
      className="relative overflow-hidden"
      style={{
        background: 'rgba(30, 41, 59, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        borderRadius: MATERIAL3.borderRadius.large,
        boxShadow: MATERIAL3.elevation.level3
      }}
    >
      {/* iOS-like gradient overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`
        }}
      />

      <div className="relative p-8 md:p-12">
        {/* Profile Avatar with Material 3 styling */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-40 h-40 mx-auto mb-8 relative"
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center text-6xl relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
              boxShadow: MATERIAL3.elevation.level3
            }}
          >
            👨‍💻
            {/* iOS-like inner glow */}
            <div
              className="absolute inset-2 rounded-full opacity-30"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
                filter: 'blur(8px)'
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-center mb-12 tracking-tight"
          style={{
            ...MATERIAL3.typography.displaySmall,
            backgroundImage: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          About Shivam
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{
                  ...MATERIAL3.typography.headlineSmall,
                  color: currentTheme.colors.primary
                }}
              >
                Professional Summary
              </h2>

              <div className="space-y-4 text-slate-300">
                <p style={MATERIAL3.typography.bodyLarge}>
                  Passionate Frontend Developer with 2+ years of experience building modern web applications
                  and exploring the decentralized web (Web3). Specialized in React ecosystem and blockchain
                  technologies.
                </p>
                <p style={MATERIAL3.typography.bodyLarge}>
                  Currently seeking opportunities with ₹15 LPA+ package to contribute to innovative projects
                  and grow as a senior developer.
                </p>
              </div>
            </div>

            {/* Contact Information with Material 3 cards */}
            <div className="space-y-4">
              <h3
                className="text-lg font-semibold text-slate-200"
                style={MATERIAL3.typography.titleMedium}
              >
                Contact Information
              </h3>

              {[
                { icon: "📍", label: "Location", value: "Darbhanga, Bihar, India" },
                { icon: "🎓", label: "Education", value: "B.Tech Computer Science, JECRC University" },
                { icon: "⚡", label: "Availability", value: "Remote • Hybrid • On-site" }
              ].map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="flex items-center space-x-4 p-4 rounded-xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p
                      className="text-slate-400"
                      style={MATERIAL3.typography.bodySmall}
                    >
                      {info.label}
                    </p>
                    <p
                      className="font-semibold text-white"
                      style={MATERIAL3.typography.bodyMedium}
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Expertise with Material 3 progress indicators */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2
              className="text-2xl font-bold"
              style={{
                ...MATERIAL3.typography.headlineSmall,
                color: currentTheme.colors.primary
              }}
            >
              Core Expertise
            </h2>

            <div className="space-y-6">
              {[
                { name: "React & Next.js", level: 95 },
                { name: "Web3 & Solidity", level: 85 },
                { name: "TypeScript", level: 90 },
                { name: "Performance Optimization", level: 88 }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span
                      className="text-slate-200 font-medium"
                      style={MATERIAL3.typography.bodyLarge}
                    >
                      {skill.name}
                    </span>
                    <span
                      className="font-bold"
                      style={{
                        ...MATERIAL3.typography.labelMedium,
                        color: currentTheme.colors.primary
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  <div
                    className="w-full h-3 rounded-full overflow-hidden"
                    style={{
                      backgroundColor: 'rgba(148, 163, 184, 0.2)',
                      border: '1px solid rgba(148, 163, 184, 0.1)'
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: 0.6 + (index * 0.1), ease: "easeOut" }}
                      className="h-full rounded-full relative"
                      style={{
                        background: `linear-gradient(90deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
                        boxShadow: `0 0 10px ${currentTheme.colors.primary}40`
                      }}
                    >
                      {/* iOS-like shine effect */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"
                        style={{ animationDuration: '3s' }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Material 3 Skills Section Component
const SkillsSection = ({ currentTheme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-7xl mx-auto"
  >
    <div className="text-center mb-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6 tracking-tight"
        style={{
          ...MATERIAL3.typography.displaySmall,
          backgroundImage: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Technical Skills
      </motion.h1>
      <p
        className="text-xl text-slate-400 max-w-2xl mx-auto"
        style={MATERIAL3.typography.headlineSmall}
      >
        Interactive skill visualization and expertise levels
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          category: "Frontend",
          skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
          color: "primary",
          icon: "⚛️"
        },
        {
          category: "Web3",
          skills: ["Solidity", "Web3.js", "Hardhat", "Smart Contracts"],
          color: "secondary",
          icon: "⛓️"
        },
        {
          category: "Tools & DevOps",
          skills: ["Git", "Docker", "Vercel", "Firebase"],
          color: "accent",
          icon: "🔧"
        }
      ].map((group, index) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="relative overflow-hidden group"
          style={{
            background: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: MATERIAL3.borderRadius.large,
            boxShadow: MATERIAL3.elevation.level2
          }}
        >
          {/* Hover gradient overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.colors[group.color]}15, transparent)`
            }}
          />

          <div className="relative p-8">
            <div className="flex items-center space-x-4 mb-6">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-3xl"
              >
                {group.icon}
              </motion.div>
              <h3
                className="text-2xl font-bold"
                style={{
                  ...MATERIAL3.typography.headlineSmall,
                  color: currentTheme.colors[group.color]
                }}
              >
                {group.category}
              </h3>
            </div>

            <div className="space-y-4">
              {group.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (skillIndex * 0.05) }}
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <span
                    className="text-slate-200 font-medium"
                    style={MATERIAL3.typography.bodyLarge}
                  >
                    {skill}
                  </span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.3 + (index * 0.1) + (skillIndex * 0.05) + (star * 0.1),
                          type: "spring",
                          stiffness: 200
                        }}
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: (skill === "Tailwind CSS" ?
                            (star <= 3 ? currentTheme.colors[group.color] : "rgba(148, 163, 184, 0.3)") :
                            (star <= 4 ? currentTheme.colors[group.color] : "rgba(148, 163, 184, 0.3)")),
                          boxShadow: star <= 4 ? `0 0 8px ${currentTheme.colors[group.color]}60` : 'none'
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Material 3 Projects Section Component
const ProjectsSection = ({ projects, currentTheme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-7xl mx-auto"
  >
    <div className="text-center mb-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6 tracking-tight"
        style={{
          ...MATERIAL3.typography.displaySmall,
          backgroundImage: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Featured Projects
      </motion.h1>
      <p
        className="text-xl text-slate-400 max-w-3xl mx-auto"
        style={MATERIAL3.typography.headlineSmall}
      >
        Portfolio of innovative solutions and technical achievements
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ y: -12, scale: 1.02 }}
          className="relative overflow-hidden group"
          style={{
            background: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: MATERIAL3.borderRadius.large,
            boxShadow: MATERIAL3.elevation.level2
          }}
        >
          {/* Hover gradient overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.colors.primary}10, ${currentTheme.colors.secondary}05)`
            }}
          />

          <div className="relative p-8">
            <div className="flex items-start justify-between mb-6">
              <h3
                className="text-2xl font-bold text-white group-hover:text-slate-200"
                style={{
                  ...MATERIAL3.typography.headlineSmall,
                  color: currentTheme.colors.primary
                }}
              >
                {project.name}
              </h3>
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: 'rgba(34, 197, 94, 0.2)',
                  borderColor: 'rgba(34, 197, 94, 0.4)',
                  color: '#22c55e'
                }}
              >
                {project.status}
              </motion.span>
            </div>

            <div className="space-y-4">
              <p
                className="text-slate-300 group-hover:text-slate-200 leading-relaxed"
                style={MATERIAL3.typography.bodyMedium}
              >
                {project.impact || project.features}
              </p>

              {/* Material 3 Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (techIndex * 0.05) }}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `linear-gradient(135deg, ${currentTheme.colors.primary}20, ${currentTheme.colors.secondary}15)`,
                      border: `1px solid ${currentTheme.colors.primary}40`,
                      color: currentTheme.colors.primary
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {project.achievement && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center space-x-2 pt-2 border-t border-slate-700/50"
                  style={{ borderColor: `${currentTheme.colors.accent}30` }}
                >
                  <span className="text-lg">🏆</span>
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: currentTheme.colors.accent,
                      ...MATERIAL3.typography.labelMedium
                    }}
                  >
                    {project.achievement}
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Material 3 Experience Section Component
const ExperienceSection = ({ experience, currentTheme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-6xl mx-auto"
  >
    <div className="text-center mb-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6 tracking-tight"
        style={{
          ...MATERIAL3.typography.displaySmall,
          backgroundImage: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Professional Experience
      </motion.h1>
      <p
        className="text-xl text-slate-400 max-w-2xl mx-auto"
        style={MATERIAL3.typography.headlineSmall}
      >
        Career journey and achievements
      </p>
    </div>

    <div className="space-y-8">
      {experience.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ x: 8, scale: 1.01 }}
          className="relative overflow-hidden group"
          style={{
            background: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: MATERIAL3.borderRadius.large,
            boxShadow: MATERIAL3.elevation.level2
          }}
        >
          {/* Timeline indicator */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1"
            style={{ backgroundColor: currentTheme.colors.primary }}
          />

          <div className="p-8 ml-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="flex items-center space-x-4 mb-4 md:mb-0"
              >
                <div
                  className="w-4 h-4 rounded-full border-2"
                  style={{
                    backgroundColor: currentTheme.colors.primary,
                    borderColor: currentTheme.colors.secondary
                  }}
                />
                <div>
                  <h3
                    className="text-2xl font-bold text-white group-hover:text-slate-200"
                    style={{
                      ...MATERIAL3.typography.headlineSmall,
                      color: currentTheme.colors.primary
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-slate-300 text-lg"
                    style={MATERIAL3.typography.titleMedium}
                  >
                    {exp.company}
                  </p>
                </div>
              </motion.div>

              <div className="text-right">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="px-4 py-2 rounded-lg border"
                  style={{
                    backgroundColor: `${currentTheme.colors.primary}15`,
                    borderColor: `${currentTheme.colors.primary}30`
                  }}
                >
                  <p
                    className="font-bold"
                    style={{
                      ...MATERIAL3.typography.titleSmall,
                      color: currentTheme.colors.primary
                    }}
                  >
                    {exp.period}
                  </p>
                  <p
                    className="text-slate-400 text-sm"
                    style={MATERIAL3.typography.bodySmall}
                  >
                    {exp.location}
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="space-y-3">
              {exp.achievements.map((achievement, achIndex) => (
                <motion.div
                  key={achIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (achIndex * 0.05) }}
                  className="flex items-start space-x-3 p-3 rounded-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: achIndex * 0.2 }}
                    className="mt-1 text-lg"
                    style={{ color: currentTheme.colors.primary }}
                  >
                    •
                  </motion.span>
                  <span
                    className="text-slate-300 group-hover:text-slate-200 leading-relaxed"
                    style={MATERIAL3.typography.bodyMedium}
                  >
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Material 3 Contact Section Component
const ContactSection = ({ currentTheme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-6xl mx-auto"
  >
    <div className="text-center mb-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6 tracking-tight"
        style={{
          ...MATERIAL3.typography.displaySmall,
          backgroundImage: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Get In Touch
      </motion.h1>
      <p
        className="text-xl text-slate-400 max-w-2xl mx-auto"
        style={MATERIAL3.typography.headlineSmall}
      >
        Let's discuss opportunities and collaborations
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Information Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="relative overflow-hidden"
        style={{
          background: 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: MATERIAL3.borderRadius.large,
          boxShadow: MATERIAL3.elevation.level2
        }}
      >
        <div className="p-8">
          <h2
            className="text-2xl font-bold mb-8"
            style={{
              ...MATERIAL3.typography.headlineSmall,
              color: currentTheme.colors.primary
            }}
          >
            Contact Information
          </h2>

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
                transition={{ delay: 0.2 + (index * 0.1) }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <motion.span
                  className="text-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {contact.icon}
                </motion.span>
                <div className="flex-1">
                  <p
                    className="text-slate-400"
                    style={MATERIAL3.typography.bodySmall}
                  >
                    {contact.label}
                  </p>
                  <p
                    className="font-semibold text-white"
                    style={{
                      ...MATERIAL3.typography.bodyMedium,
                      color: currentTheme.colors.primary
                    }}
                  >
                    {contact.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Availability Status Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative overflow-hidden"
        style={{
          background: 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: MATERIAL3.borderRadius.large,
          boxShadow: MATERIAL3.elevation.level2
        }}
      >
        <div className="p-8">
          <h2
            className="text-2xl font-bold mb-8"
            style={{
              ...MATERIAL3.typography.headlineSmall,
              color: currentTheme.colors.primary
            }}
          >
            Availability Status
          </h2>

          <div className="text-center mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-6xl mb-4"
            >
              🟢
            </motion.div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{
                ...MATERIAL3.typography.headlineSmall,
                color: currentTheme.colors.primary
              }}
            >
              Open to Opportunities
            </h3>
            <p
              className="text-slate-300 leading-relaxed"
              style={MATERIAL3.typography.bodyMedium}
            >
              Actively seeking new challenges and career growth
            </p>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl border text-center relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.colors.primary}20, ${currentTheme.colors.secondary}15)`,
                border: `1px solid ${currentTheme.colors.primary}40`,
                boxShadow: MATERIAL3.elevation.level1
              }}
            >
              <p
                className="text-slate-300 mb-1"
                style={MATERIAL3.typography.bodySmall}
              >
                Target Package
              </p>
              <p
                className="text-3xl font-bold text-white"
                style={{
                  ...MATERIAL3.typography.displaySmall,
                  color: currentTheme.colors.primary
                }}
              >
                ₹15 LPA+
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl border text-center"
              style={{
                background: 'rgba(59, 130, 246, 0.2)',
                border: '1px solid rgba(59, 130, 246, 0.4)'
              }}
            >
              <p
                className="font-semibold mb-1"
                style={{
                  ...MATERIAL3.typography.bodySmall,
                  color: '#3b82f6'
                }}
              >
                Work Preferences
              </p>
              <p
                className="text-white font-medium"
                style={MATERIAL3.typography.bodyMedium}
              >
                Remote • Hybrid • On-site
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default ModernGUI;