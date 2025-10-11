"use client";

import { useState, useEffect } from "react";
import TerminalPortfolio from "./components/TerminalPortfolio/TerminalPortfolio";
import ModernGUI from "./components/ModernGUI/ModernGUI";

export default function Home() {
  const [interfaceMode, setInterfaceMode] = useState("terminal"); // "terminal" or "gui"
  const [isSkillTreeActive, setIsSkillTreeActive] = useState(false);

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
          className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-md text-green-400 px-4 py-2 rounded-lg border border-green-400/50 hover:bg-green-400/20 transition-all duration-300 font-mono text-sm"
        >
          {interfaceMode === "terminal" ? "🖼️ GUI Mode" : "💻 Terminal Mode"}
        </button>
      )}

      {/* Render Selected Interface */}
      {interfaceMode === "terminal" ? <TerminalPortfolio /> : <ModernGUI />}
    </div>
  );
}
