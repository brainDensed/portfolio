"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./contexts/ThemeContext";
import TerminalPortfolio from "./components/TerminalPortfolio/TerminalPortfolio";
import ModernGUI from "./components/ModernGUI/ModernGUI";

export default function Home() {
  const [interfaceMode, setInterfaceMode] = useState("terminal"); // "terminal" or "gui"
  const [isSkillTreeActive, setIsSkillTreeActive] = useState(false);
  const { getCurrentThemeInfo } = useTheme();
  const currentTheme = getCurrentThemeInfo();

  useEffect(() => {
    // Listen for custom event from terminal to switch to GUI
    const handleSwitchToGUI = () => setInterfaceMode("gui");
    window.addEventListener('switchToGUI', handleSwitchToGUI);

    return () => window.removeEventListener('switchToGUI', handleSwitchToGUI);
  }, []);

  useEffect(() => {
    // Listen for custom event from GUI to indicate SkillTree is active
    const handleSkillTreeActive = (event) => setIsSkillTreeActive(event.detail.active);
    window.addEventListener('skillTreeToggle', handleSkillTreeActive);

    return () => window.removeEventListener('skillTreeToggle', handleSkillTreeActive);
  }, []);

  return (
    <div className="relative">
      {/* Interface Toggle Button - Hidden when SkillTree is active */}
      {!isSkillTreeActive && (
        <button
          onClick={() => setInterfaceMode(interfaceMode === "terminal" ? "gui" : "terminal")}
          className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 bg-black/80 backdrop-blur-md px-2 py-1 sm:px-4 sm:py-2 rounded-lg border transition-all duration-300 font-mono text-xs sm:text-sm touch-target touch-button"
          style={{
            color: currentTheme.colors.accent,
            borderColor: `${currentTheme.colors.accent}80`,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = `${currentTheme.colors.accent}33`;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          }}
        >
          <span className="sm:hidden">{interfaceMode === "terminal" ? "🖼️" : "💻"}</span>
          <span className="hidden sm:inline">{interfaceMode === "terminal" ? "🖼️ GUI Mode" : "💻 Terminal Mode"}</span>
        </button>
      )}

      {/* Render Selected Interface */}
      {interfaceMode === "terminal" ? <TerminalPortfolio /> : <ModernGUI />}
    </div>
  );
}
