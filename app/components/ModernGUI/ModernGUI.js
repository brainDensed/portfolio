"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import SkillTree from "../SkillTree/SkillTree";
import HolographicCard from "../HolographicCard/HolographicCard";
import MatrixRain from "../MatrixRain/MatrixRain";

// Import separated components
import FileExplorer from "./components/FileExplorer";
import IDETabs from "./components/IDETabs";
import StatusBar from "./components/StatusBar";
import ActivityBar from "./components/ActivityBar";
import ThemeSelector from "./components/ThemeSelector";

// Import constants and utilities
import { FILE_SYSTEM, getIDETheme } from "./constants";
import { renderFileContent } from "./utils/contentRenderer";

const ModernGUI = () => {
  const [fileSystem] = useState(FILE_SYSTEM);
  const [openFiles, setOpenFiles] = useState(['/portfolio/README.md']);
  const [activeFile, setActiveFile] = useState('/portfolio/README.md');
  const [showSkillTree, setShowSkillTree] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [headerPaddingLeft, setHeaderPaddingLeft] = useState('60px');
  const { getCurrentThemeInfo, changeTheme, getAvailableThemes } = useTheme();
  const currentTheme = getCurrentThemeInfo();
  const ideTheme = getIDETheme(currentTheme);

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
     const handleResize = () => {
       const isMobile = window.innerWidth < 640;
       setHeaderPaddingLeft(isMobile ? '16px' : '20px');
       if (isMobile && isSidebarVisible) {
         // Keep it visible as overlay on mobile
       }
     };

     handleResize();
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, [isSidebarVisible]);

  useEffect(() => {
    if (isInitialized) {
      const handleThemeChange = () => {
        // This effect runs when theme changes to ensure proper synchronization
      };
      window.addEventListener('themeChanged', handleThemeChange);
      return () => window.removeEventListener('themeChanged', handleThemeChange);
    }
  }, [currentTheme, isInitialized]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        const wasSkillTreeOpen = showSkillTree;
        setShowCard(false);
        setShowSkillTree(false);
        setShowMatrix(false);
        setShowThemeSelector(false);

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
      if (activeFile === filePath) {
        setActiveFile(newOpenFiles.length > 0 ? newOpenFiles[0] : '/portfolio/README.md');
      }
      return newOpenFiles;
    });
  }, [activeFile]);

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

  const handleThemeChange = useCallback((themeKey) => {
    changeTheme(themeKey);
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('themeChanged'));
    }, 100);
  }, [changeTheme]);



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
          className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 border-b relative"
          style={{
            backgroundColor: ideTheme.sidebar,
            borderColor: ideTheme.border,
            color: ideTheme.text,
            paddingLeft: headerPaddingLeft
          }}
        >
          {/* Hamburger Button - Left */}
          <button
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors touch-target touch-button shadow-lg mr-1 sm:mr-2"
            style={{
              color: ideTheme.textSecondary,
              backgroundColor: ideTheme.sidebar,
              border: `1px solid ${ideTheme.border}`,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            title={isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isSidebarVisible ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          {/* Header Title - Center */}
          <span className="font-bold text-sm sm:text-lg flex-1 text-center">SHIVAM.EXE - Portfolio IDE</span>
        </div>

        {/* IDE Main Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Desktop File Explorer Sidebar */}
          <AnimatePresence mode="wait">
            {isSidebarVisible && window.innerWidth >= 640 && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 256, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="hidden sm:block"
              >
                <FileExplorer
                  fileSystem={fileSystem}
                  activeFile={activeFile}
                  onFileSelect={handleFileSelect}
                  ideTheme={ideTheme}
                  isVisible={isSidebarVisible}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Sidebar Overlay */}
          <AnimatePresence>
            {isSidebarVisible && window.innerWidth < 640 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="sm:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsSidebarVisible(false)}
              />
            )}
          </AnimatePresence>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {isSidebarVisible && window.innerWidth < 640 && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="sm:hidden fixed left-0 top-0 h-full z-50"
                style={{
                  width: '280px',
                  backgroundColor: ideTheme.sidebar,
                  borderRight: `1px solid ${ideTheme.border}`
                }}
              >
                <div className="p-4 h-full overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wide">Explorer</h3>
                    <button
                      onClick={() => setIsSidebarVisible(false)}
                      className="text-white hover:text-gray-300 touch-target"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                  <FileExplorer
                    fileSystem={fileSystem}
                    activeFile={activeFile}
                    onFileSelect={(filePath) => {
                      handleFileSelect(filePath);
                    }}
                    ideTheme={ideTheme}
                    isVisible={isSidebarVisible}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Editor Area */}
          <div className={`flex-1 flex flex-col min-h-0 ${!isSidebarVisible ? 'sm:ml-0' : ''}`}>
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
              className="flex-1 overflow-y-auto min-h-0 p-2 sm:pl-10 sm:pr-6 sm:pt-6 sm:pb-6"
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
            <StatusBar activeFile={activeFile} ideTheme={ideTheme} />
          </div>
        </div>

        {/* VS Code Style Activity Bar - Bottom Left */}
        <ActivityBar onQuickAction={handleQuickAction} ideTheme={ideTheme} />

        {/* Theme Selector Modal */}
        <ThemeSelector
          isVisible={showThemeSelector}
          onClose={() => setShowThemeSelector(false)}
          ideTheme={ideTheme}
          currentTheme={currentTheme}
          availableThemes={getAvailableThemes()}
          onThemeChange={handleThemeChange}
        />
      </div>
    </>
  );
};
export default ModernGUI;