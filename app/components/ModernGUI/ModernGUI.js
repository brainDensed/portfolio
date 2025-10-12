"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import SkillTree from "../SkillTree/SkillTree";
import HolographicCard from "../HolographicCard/HolographicCard";
import MatrixRain from "../MatrixRain/MatrixRain";

// IDE-style file system structure
const FILE_SYSTEM = {
  portfolio: {
    type: 'folder',
    name: 'portfolio',
    expanded: true,
    children: {
      'README.md': {
        type: 'file',
        name: 'README.md',
        content: 'main'
      },
      src: {
        type: 'folder',
        name: 'src',
        expanded: true,
        children: {
          'about.md': {
            type: 'file',
            name: 'about.md',
            content: 'about'
          },
          'skills.md': {
            type: 'file',
            name: 'skills.md',
            content: 'skills'
          },
          'projects.md': {
            type: 'file',
            name: 'projects.md',
            content: 'projects'
          },
          'experience.md': {
            type: 'file',
            name: 'experience.md',
            content: 'experience'
          },
          'contact.md': {
            type: 'file',
            name: 'contact.md',
            content: 'contact'
          }
        }
      },
      'package.json': {
        type: 'file',
        name: 'package.json',
        content: 'package'
      }
    }
  }
};

// Material 3 Design System Constants
const MATERIAL3 = {
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
    extraLarge: '28px'
  },
  elevation: {
    level1: '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 1px rgba(0, 0, 0, 0.1)',
    level2: '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 2px 6px 2px rgba(0, 0, 0, 0.1)',
    level3: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 3px rgba(0, 0, 0, 0.15)',
    level5: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 8px 16px 8px rgba(0, 0, 0, 0.15)'
  },
  typography: {
    displayLarge: { fontSize: '57px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.25px' },
    displaySmall: { fontSize: '45px', fontWeight: '400', lineHeight: '52px', letterSpacing: '0px' },
    headlineLarge: { fontSize: '32px', fontWeight: '400', lineHeight: '40px', letterSpacing: '0px' },
    headlineMedium: { fontSize: '28px', fontWeight: '400', lineHeight: '36px', letterSpacing: '0px' },
    headlineSmall: { fontSize: '24px', fontWeight: '400', lineHeight: '32px', letterSpacing: '0px' },
    titleLarge: { fontSize: '22px', fontWeight: '400', lineHeight: '28px', letterSpacing: '0px' },
    titleMedium: { fontSize: '16px', fontWeight: '500', lineHeight: '24px', letterSpacing: '0.15px' },
    titleSmall: { fontSize: '14px', fontWeight: '500', lineHeight: '20px', letterSpacing: '0.1px' },
    bodyLarge: { fontSize: '16px', fontWeight: '400', lineHeight: '24px', letterSpacing: '0.5px' },
    bodyMedium: { fontSize: '14px', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.25px' },
    bodySmall: { fontSize: '12px', fontWeight: '400', lineHeight: '16px', letterSpacing: '0.4px' },
    labelMedium: { fontSize: '12px', fontWeight: '500', lineHeight: '16px', letterSpacing: '0.5px' }
  }
};

// Dynamic IDE Theme Colors that sync with terminal theme
const getIDETheme = (currentTheme) => ({
  background: currentTheme.colors.background,
  sidebar: currentTheme.colors.surface,
  activeFile: currentTheme.colors.surface,
  inactiveFile: currentTheme.colors.background,
  text: currentTheme.colors.text,
  textSecondary: currentTheme.colors.textSecondary,
  accent: currentTheme.colors.primary,
  border: currentTheme.colors.border,
  tabActive: currentTheme.colors.surface,
  tabInactive: currentTheme.colors.background,
  glow: currentTheme.colors.glow || currentTheme.colors.primary
});

// File Explorer Component
const FileExplorer = ({ fileSystem, activeFile, onFileSelect, theme, ideTheme }) => {
  const renderFileTree = (node, path = '') => {
    if (node.type === 'file') {
      const fullPath = `${path}/${node.name}`;
      const isActive = activeFile === fullPath;

      return (
        <motion.div
          key={fullPath}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: 4 }}
          className="group cursor-pointer"
        >
          <div
            onClick={() => onFileSelect(fullPath)}
            className={`flex items-center px-2 py-1 text-sm hover:bg-gray-700 rounded transition-colors`}
            style={{
              backgroundColor: isActive ? ideTheme.accent : 'transparent',
              color: isActive ? ideTheme.activeFile : ideTheme.text,
              fontWeight: isActive ? 'bold' : 'normal'
            }}
          >
            <span
              className="mr-2"
              style={{ color: ideTheme.textSecondary }}
            >
              {node.name.endsWith('.md') ? '📄' : '📦'}
            </span>
            <span className="truncate">{node.name}</span>
          </div>
        </motion.div>
      );
    }

    if (node.type === 'folder') {
      return (
        <div key={path + '/' + node.name}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center px-2 py-1 text-sm cursor-pointer"
            style={{
              color: ideTheme.text,
              fontWeight: 'bold'
            }}
          >
            <span className="mr-2" style={{ color: ideTheme.textSecondary }}>📁</span>
            <span className="font-medium">{node.name}</span>
          </motion.div>
          <div className="ml-4">
            {Object.entries(node.children).map(([name, child]) =>
              renderFileTree(child, `${path}/${node.name}`)
            )}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className="w-64 h-full p-4 overflow-y-auto"
      style={{
        backgroundColor: ideTheme.sidebar,
        borderRight: `1px solid ${ideTheme.border}`,
        scrollbarWidth: 'thin',
        scrollbarColor: `${ideTheme.accent} ${ideTheme.sidebar}`
      }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: ${ideTheme.sidebar};
        }
        div::-webkit-scrollbar-thumb {
          background: ${ideTheme.accent};
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: ${ideTheme.textSecondary};
        }
      `}</style>
      <div className="mb-4">
        <h3 className="text-white font-bold text-sm uppercase tracking-wide">Explorer</h3>
      </div>
      {renderFileTree(fileSystem.portfolio)}
    </div>
  );
};

// IDE Tabs Component
const IDETabs = ({ openFiles, activeFile, onTabClick, onTabClose, ideTheme }) => {
  return (
    <div
      className="flex border-b"
      style={{ backgroundColor: ideTheme.tabInactive, borderColor: ideTheme.border }}
    >
      {openFiles.map((file) => (
        <div
          key={file}
          onClick={() => onTabClick(file)}
          className={`flex items-center px-3 py-2 border-r cursor-pointer group relative ${
            activeFile === file ? 'bg-gray-800' : 'hover:bg-gray-700'
          }`}
          style={{
            backgroundColor: activeFile === file ? ideTheme.tabActive : 'transparent',
            borderColor: ideTheme.border
          }}
        >
          <span className="mr-2 text-xs">
            {file.endsWith('.md') ? '📄' : '📦'}
          </span>
          <span className={`text-sm truncate ${activeFile === file ? 'text-white' : 'text-gray-300'}`}>
            {file.split('/').pop()}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTabClose(file);
            }}
            className="ml-2 opacity-0 group-hover:opacity-100 hover:bg-red-600 rounded-sm w-4 h-4 flex items-center justify-center text-xs"
          >
            ×
          </button>
          {activeFile === file && (
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ backgroundColor: ideTheme.accent }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

// IDE Status Bar Component
const StatusBar = ({ activeFile, theme, ideTheme }) => {
  return (
    <div
      className="flex items-center justify-between px-4 py-1 text-xs"
      style={{
        backgroundColor: ideTheme.sidebar,
        borderTop: `1px solid ${ideTheme.border}`,
        color: ideTheme.textSecondary
      }}
    >
      <div className="flex items-center space-x-4">
        <span>● {activeFile ? '1 file open' : 'No file open'}</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>Ln 1, Col 1</span>
        <span>UTF-8</span>
        <span>JavaScript</span>
      </div>
    </div>
  );
};

const ModernGUI = () => {
  const [fileSystem] = useState(FILE_SYSTEM);
  const [openFiles, setOpenFiles] = useState(['/portfolio/README.md']);
  const [activeFile, setActiveFile] = useState('/portfolio/README.md');
  const [showSkillTree, setShowSkillTree] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const { getCurrentThemeInfo, changeTheme, getAvailableThemes } = useTheme();
  const currentTheme = getCurrentThemeInfo();
  const ideTheme = getIDETheme(currentTheme);

  // Add state management improvements
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setIsInitialized(true);
  }, []);

  // Improved theme synchronization effect
  useEffect(() => {
    if (isInitialized) {
      // Force re-render when theme changes
      const handleThemeChange = () => {
        // This effect runs when theme changes to ensure proper synchronization
      };
      window.addEventListener('themeChanged', handleThemeChange);
      return () => window.removeEventListener('themeChanged', handleThemeChange);
    }
  }, [currentTheme, isInitialized]);

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

  // File handling functions
  const handleFileSelect = useCallback((filePath) => {
    if (!openFiles.includes(filePath)) {
      setOpenFiles(prev => [...prev, filePath]);
    }
    setActiveFile(filePath);
  }, [openFiles]);

  const handleTabClick = useCallback((filePath) => {
    setActiveFile(filePath);
  }, []);

  const handleTabClose = useCallback((filePath) => {
    setOpenFiles(prev => {
      const newOpenFiles = prev.filter(f => f !== filePath);
      // Update active file if the closed file was active
      if (activeFile === filePath) {
        setActiveFile(newOpenFiles.length > 0 ? newOpenFiles[0] : '/portfolio/README.md');
      }
      return newOpenFiles;
    });
  }, [activeFile]);

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

  // Content renderer for different file types
  const renderFileContent = (filePath) => {
    const getFileNode = (path) => {
      // Handle different path formats
      if (path === '/portfolio/README.md') {
        return fileSystem.portfolio.children['README.md'];
      } else if (path.startsWith('/portfolio/src/')) {
        const fileName = path.split('/').pop();
        return fileSystem.portfolio.children.src.children[fileName];
      } else if (path.startsWith('/portfolio/')) {
        const fileName = path.split('/').pop();
        return fileSystem.portfolio.children[fileName];
      }
      return null;
    };

    const fileNode = getFileNode(filePath);

    // Debug logging to help identify issues
    console.log('File path:', filePath, 'File node:', fileNode);

    switch (fileNode?.content) {
      case 'main':
        return `# SHIVAM.EXE - Portfolio

## 🚀 Frontend Developer | Web3 Specialist

> **Status**: Open to opportunities (₹15 LPA+)
> **Location**: Darbhanga, Bihar, India

### 🔥 Quick Stats
- **2+ Years Experience** - Professional frontend development
- **Award Winner** - HackOdisha 5.0 - Verbwire Track
- **Target Package** - ₹15 LPA+ for senior roles

### 🛠️ Tech Stack
- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Web3**: Solidity, Web3.js, Hardhat, Smart Contracts
- **Tools**: Git, Docker, Vercel, Firebase

### 📁 Project Structure
\`\`\`
portfolio/
├── README.md          # This overview
├── src/
│   ├── about.md       # Personal & professional info
│   ├── skills.md      # Technical skills & expertise
│   ├── projects.md    # Featured projects
│   ├── experience.md  # Work experience
│   └── contact.md     # Contact information
└── package.json       # Dependencies & scripts
\`\`\`

### 🎯 Current Focus
- Building modern, responsive web applications
- Exploring Web3 and blockchain technologies
- Seeking senior developer opportunities

---
*Last updated: ` + new Date().toLocaleDateString() + `*`;

      case 'about':
        return `# About Shivam

## 👨‍💻 Professional Profile

**Frontend Developer with 2+ years of experience** building modern web applications and exploring decentralized web technologies.

### 🎓 Education
- **B.Tech Computer Science & Engineering**
- **JECRC University** (2019-2023)
- Specialized in web technologies and algorithms

### 💼 Professional Summary
Passionate developer with expertise in React ecosystem and Web3 technologies. Currently seeking opportunities with **₹15 LPA+** package to contribute to innovative projects and grow as a senior developer.

### 🌍 Location & Availability
- **Location**: Darbhanga, Bihar, India
- **Work Preferences**: Remote • Hybrid • On-site
- **Status**: Actively looking for new opportunities

### 🔗 Connect
- **LinkedIn**: /in/shivam-nilay
- **GitHub**: github.com/brainDensed

---
*Crafted with ❤️ using modern web technologies*`;

      case 'skills':
        return `# Technical Skills

## ⚡ Core Competencies

### 🎯 Expertise Levels
- **Expert (90-95%)**: React, Next.js, TypeScript, Performance Optimization
- **Advanced (85-90%)**: Web3, Solidity, Smart Contracts
- **Intermediate (70-85%)**: Node.js, Express, MongoDB

### 🛠️ Technology Stack

#### Frontend Development
- **React & Next.js** - Modern React development
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **State Management** - Redux, Zustand, Context API

#### Web3 & Blockchain
- **Solidity** - Smart contract development
- **Web3.js** - Blockchain integration
- **Hardhat** - Development environment
- **MetaMask** - Wallet integration

#### Tools & DevOps
- **Git** - Version control
- **Docker** - Containerization
- **Vercel** - Deployment platform
- **Firebase** - Backend services

### 📊 Skill Radar
\`\`\`
React & Next.js     ████████████████████ 95%
Web3 & Solidity     █████████████████  85%
TypeScript          ███████████████████  90%
Performance         █████████████████  88%
\`\`\`

---
*Continuously learning and adapting to new technologies*`;

      case 'projects':
        return `# Featured Projects

## 🚀 Project Portfolio

### 🏆 Award-Winning Projects

#### **Theramine** - *Web3 Therapy Platform*
> **Tech Stack**: React, Solidity, Web3.js, Hardhat
> **Achievement**: 🏆 HackOdisha 5.0 Winner (Verbwire Track)
> **Impact**: Secure Web3 chat between therapist and user

\`\`\`javascript
// Key Features
- Web3 authentication
- Encrypted messaging
- Smart contract integration
- Real-time communication
\`\`\`

#### **Genoroot** - *AI Hair Analysis Platform*
> **Duration**: Oct 2024 - Mar 2025
> **Tech Stack**: React, Redux, Tailwind, Firebase
> **Performance**: ⚡ 15% faster loading, 🚀 20% dev speed boost

#### **Planetdoctor** - *Location-based Doctor Discovery*
> **Duration**: Sep 2024 - Dec 2024
> **Features**: 🌍 Location-based search, 🌐 Multilingual support
> **Impact**: ⚡ 15% faster booking, 🇪🇸 Spanish/English support

#### **AuthBase** - *Production Authentication System*
> **Duration**: Apr 2025 - May 2025
> **Tech Stack**: React, JWT, Redis, Docker, AWS
> **Security**: 🔐 JWT + Session-based authentication

#### **MaxLink-Health** - *IoT Health Monitoring*
> **Duration**: Dec 2023 - Apr 2024
> **Innovation**: ⏰ Time-based billing system
> **Tech Stack**: React, IoT Integration, Real-time APIs

### 📈 Project Impact
- **5+ Major Projects** delivered
- **25% Development Time** reduction
- **30% Team Efficiency** improvement

---
*Each project demonstrates problem-solving and technical excellence*`;

      case 'experience':
        return `# Professional Experience

## 💼 Career Journey

### 🚀 Junior Developer
**Dreamsoft4u Pvt. Ltd** | Jaipur, Rajasthan
*Feb 2023 - Mar 2025*

#### 🎯 Key Achievements
- ✅ **Developed 5+ projects** & reusable components
- ⚡ **Cut development time by 25%** through optimization
- 👥 **Mentored junior developers** with pair programming
- 📈 **Increased team efficiency by 30%**

#### 🛠️ Technical Contributions
- Built responsive web applications
- Implemented modern React patterns
- Optimized performance and user experience
- Collaborated in Agile development teams

### 🎓 Computer Science & Engineering
**JECRC University** | Jaipur, Rajasthan
*Aug 2019 - Aug 2023*

#### 📚 Academic Foundation
- **Strong foundation** in algorithms & data structures
- **Specialized** in web technologies
- **Hands-on projects** in modern frameworks

### 🌟 Career Highlights
- **Consistent delivery** of high-quality code
- **Continuous learning** and skill development
- **Team collaboration** and mentorship
- **Problem-solving** approach to challenges

---
*Building a strong foundation for senior developer roles*`;

      case 'contact':
        return `# Contact Information

## 📞 Get In Touch

### 👤 Personal Details
- **Name**: Shivam
- **Role**: Frontend Developer | Web3 Specialist
- **Location**: Darbhanga, Bihar, India

### 🔗 Social Links
- **LinkedIn**: [/in/shivam-nilay](https://linkedin.com/in/shivam-nilay)
- **GitHub**: [github.com/brainDensed](https://github.com/brainDensed)

### 📍 Location & Preferences
- **Current Location**: Darbhanga, Bihar, India
- **Work Type**: Remote • Hybrid • On-site
- **Availability**: Open to opportunities

### 💰 Package Expectations
- **Target Package**: ₹15 LPA+
- **Experience Level**: Mid to Senior Developer
- **Notice Period**: Immediate to 30 days

### 🚀 Current Status
\`\`\`
🟢 Open to Opportunities
Actively seeking new challenges
Ready for senior roles
\`\`\`

### 📧 Contact Methods
- **LinkedIn DM**: Preferred for professional opportunities
- **Email**: Available upon request
- **GitHub**: Check out my code and contributions

---
*Looking forward to connecting and exploring opportunities!*`;

      case 'package':
        return `# Package Configuration

## 📦 Project Dependencies

\`\`\`json
{
  "name": "shivam-portfolio",
  "version": "1.0.0",
  "description": "Modern portfolio showcasing Web3 and frontend expertise",
  "main": "app/page.js",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^19.0.0",
    "next": "^15.1.3",
    "framer-motion": "^10.0.0",
    "tailwindcss": "^3.0.0"
  },
  "keywords": [
    "portfolio",
    "web3",
    "react",
    "nextjs",
    "frontend"
  ],
  "author": "Shivam",
  "license": "MIT"
}
\`\`\`

### 🛠️ Development Setup
\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

### 📁 Project Structure
\`\`\`
portfolio/
├── app/                 # Next.js app directory
│   ├── components/      # React components
│   ├── contexts/        # React contexts
│   └── globals.css      # Global styles
├── public/              # Static assets
└── lib/                 # Utility functions
\`\`\`

---
*Built with modern web technologies and best practices*`;

      default:
        return `# File Not Found

The requested file could not be loaded or does not exist.

### Available Files
- \`README.md\` - Project overview
- \`src/about.md\` - Personal information
- \`src/skills.md\` - Technical skills
- \`src/projects.md\` - Project portfolio
- \`src/experience.md\` - Work experience
- \`src/contact.md\` - Contact information
- \`package.json\` - Project configuration

---
*Navigate using the file explorer on the left*`;
    }
  };

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

      {/* IDE-style Layout */}
      <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: ideTheme.background }}>
        {/* IDE Header - Centered and Clean */}
        <div
          className="flex items-center justify-center px-4 py-3 border-b relative"
          style={{
            backgroundColor: ideTheme.sidebar,
            borderColor: ideTheme.border,
            color: ideTheme.text
          }}
        >
          <div className="flex items-center">
            <span className="font-bold text-lg">SHIVAM.EXE - Portfolio IDE</span>
          </div>
        </div>

        {/* IDE Main Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* File Explorer Sidebar */}
          <FileExplorer
            fileSystem={fileSystem}
            activeFile={activeFile}
            onFileSelect={handleFileSelect}
            theme={currentTheme}
            ideTheme={ideTheme}
          />

          {/* Editor Area */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Tabs */}
            <IDETabs
              openFiles={openFiles}
              activeFile={activeFile}
              onTabClick={handleTabClick}
              onTabClose={handleTabClose}
              ideTheme={ideTheme}
            />

            {/* Editor Content */}
            <div
              className="flex-1 overflow-y-auto min-h-0 pl-10 pr-6 pt-6 pb-6"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: `${ideTheme.accent} ${ideTheme.background}`
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  width: 8px;
                }
                div::-webkit-scrollbar-track {
                  background: ${ideTheme.background};
                }
                div::-webkit-scrollbar-thumb {
                  background: ${ideTheme.accent};
                  border-radius: 4px;
                }
                div::-webkit-scrollbar-thumb:hover {
                  background: ${ideTheme.textSecondary};
                }
              `}</style>
              <motion.div
                key={activeFile}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <div
                  className="rounded-lg border shadow-lg"
                  style={{
                    backgroundColor: ideTheme.activeFile,
                    borderColor: ideTheme.border,
                    color: ideTheme.text,
                    fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <div className="prose prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed m-0 p-2">
                      <code className="text-current">{renderFileContent(activeFile)}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Status Bar */}
            <StatusBar activeFile={activeFile} theme={currentTheme} ideTheme={ideTheme} />
          </div>
        </div>

        {/* VS Code Style Activity Bar - Bottom Left */}
        <div
          className="fixed left-4 bottom-16 flex flex-col space-y-1 z-40"
          style={{ backgroundColor: 'transparent' }}
        >
          <button
            onClick={() => handleQuickAction('themes')}
            className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-700 transition-colors group"
            style={{ backgroundColor: ideTheme.sidebar }}
            title="Change Theme"
          >
            <span className="text-lg">🎨</span>
          </button>
          <button
            onClick={() => handleQuickAction('card')}
            className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-700 transition-colors group"
            style={{ backgroundColor: ideTheme.sidebar }}
            title="Business Card"
          >
            <span className="text-lg">💳</span>
          </button>
          <button
            onClick={() => handleQuickAction('skillTree')}
            className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-700 transition-colors group"
            style={{ backgroundColor: ideTheme.sidebar }}
            title="Skills Tree"
          >
            <span className="text-lg">🌳</span>
          </button>
          <button
            onClick={() => handleQuickAction('matrix')}
            className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-700 transition-colors group"
            style={{ backgroundColor: ideTheme.sidebar }}
            title="Matrix Mode"
          >
            <span className="text-lg">💻</span>
          </button>
        </div>

        {/* Theme Selector Modal */}
        <AnimatePresence>
          {showThemeSelector && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
              onClick={() => setShowThemeSelector(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                className="w-full max-w-lg max-h-[80vh] overflow-hidden"
                style={{
                  background: 'rgba(15, 23, 42, 0.98)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid ${ideTheme.border}`,
                  borderRadius: MATERIAL3.borderRadius.large,
                  boxShadow: MATERIAL3.elevation.level5
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="flex items-center justify-between p-6 border-b"
                  style={{
                    borderColor: ideTheme.border,
                    backgroundColor: ideTheme.sidebar
                  }}
                >
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{
                        ...MATERIAL3.typography.headlineSmall,
                        color: ideTheme.text
                      }}
                    >
                      Choose Theme
                    </h3>
                    <p
                      className="mt-1"
                      style={{
                        ...MATERIAL3.typography.bodySmall,
                        color: ideTheme.textSecondary
                      }}
                    >
                      Select your preferred color scheme
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowThemeSelector(false)}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: ideTheme.textSecondary
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.color = ideTheme.text;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.color = ideTheme.textSecondary;
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

                <div
                  className="p-6 max-h-96 overflow-y-auto"
                  style={{
                    backgroundColor: ideTheme.background,
                    // Custom scrollbar styling to match terminal
                    scrollbarWidth: 'thin',
                    scrollbarColor: `${ideTheme.accent} ${ideTheme.sidebar}`
                  }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      width: 8px;
                    }
                    div::-webkit-scrollbar-track {
                      background: ${ideTheme.sidebar};
                      border-radius: 4px;
                    }
                    div::-webkit-scrollbar-thumb {
                      background: ${ideTheme.accent};
                      border-radius: 4px;
                    }
                    div::-webkit-scrollbar-thumb:hover {
                      background: ${ideTheme.textSecondary};
                    }
                  `}</style>
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
                          // Force re-render of IDE theme
                          setTimeout(() => {
                            window.dispatchEvent(new CustomEvent('themeChanged'));
                          }, 100);
                        }}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-200 relative overflow-hidden`}
                        style={{
                          background: getCurrentThemeInfo().key === theme.key
                            ? `linear-gradient(135deg, ${ideTheme.accent}20, ${ideTheme.text}15)`
                            : ideTheme.tabInactive,
                          border: getCurrentThemeInfo().key === theme.key
                            ? `1px solid ${ideTheme.accent}40`
                            : `1px solid ${ideTheme.border}`,
                          color: getCurrentThemeInfo().key === theme.key ? ideTheme.text : ideTheme.textSecondary
                        }}
                        onMouseEnter={(e) => {
                          if (getCurrentThemeInfo().key !== theme.key) {
                            e.target.style.backgroundColor = ideTheme.activeFile;
                            e.target.style.borderColor = ideTheme.accent;
                            e.target.style.color = ideTheme.text;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (getCurrentThemeInfo().key !== theme.key) {
                            e.target.style.backgroundColor = ideTheme.tabInactive;
                            e.target.style.borderColor = ideTheme.border;
                            e.target.style.color = ideTheme.textSecondary;
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
                                  ? ideTheme.accent
                                  : ideTheme.text
                              }}
                            >
                              {theme.name}
                            </div>
                            <div
                              className="mt-1"
                              style={{
                                ...MATERIAL3.typography.bodySmall,
                                color: ideTheme.textSecondary
                              }}
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
                                backgroundColor: ideTheme.accent,
                                boxShadow: `0 0 0 2px ${ideTheme.accent}40`
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
      </div>
    </>
  );
};
export default ModernGUI;