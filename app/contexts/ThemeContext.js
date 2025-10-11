"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('matrix');
  const [isLoading, setIsLoading] = useState(true);

  const themes = {
    matrix: {
      name: 'Matrix',
      description: 'Green terminal hacker aesthetic',
      colors: {
        primary: '#00ff00',
        secondary: '#00cc00',
        accent: '#00ff88',
        background: '#000000',
        surface: '#0a0a0a',
        text: '#00ff00',
        textSecondary: '#00cc00',
        border: '#00ff00',
        glow: '#00ff00'
      },
      effects: {
        glow: true,
        matrix: true,
        neon: true
      }
    },
    cyberpunk: {
      name: 'Cyberpunk',
      description: 'Neon pink and blue futuristic theme',
      colors: {
        primary: '#ff0080',
        secondary: '#00ffff',
        accent: '#ff4080',
        background: '#0a0a1a',
        surface: '#1a1a2e',
        text: '#ff0080',
        textSecondary: '#00ffff',
        border: '#ff0080',
        glow: '#ff0080'
      },
      effects: {
        glow: true,
        matrix: false,
        neon: true
      }
    },
    terminal: {
      name: 'Classic Terminal',
      description: 'Traditional amber terminal look',
      colors: {
        primary: '#ffaa00',
        secondary: '#ff8800',
        accent: '#ffcc00',
        background: '#000000',
        surface: '#0a0a0a',
        text: '#ffaa00',
        textSecondary: '#ff8800',
        border: '#ffaa00',
        glow: false
      },
      effects: {
        glow: false,
        matrix: false,
        neon: false
      }
    },
    ocean: {
      name: 'Ocean',
      description: 'Deep blue oceanic theme',
      colors: {
        primary: '#00aaff',
        secondary: '#0088cc',
        accent: '#00ccff',
        background: '#001122',
        surface: '#002244',
        text: '#00aaff',
        textSecondary: '#0088cc',
        border: '#00aaff',
        glow: '#00aaff'
      },
      effects: {
        glow: true,
        matrix: false,
        neon: true
      }
    },
    fire: {
      name: 'Fire',
      description: 'Red and orange flame theme',
      colors: {
        primary: '#ff4400',
        secondary: '#ff6600',
        accent: '#ff8800',
        background: '#1a0000',
        surface: '#2a0000',
        text: '#ff4400',
        textSecondary: '#ff6600',
        border: '#ff4400',
        glow: '#ff4400'
      },
      effects: {
        glow: true,
        matrix: false,
        neon: true
      }
    },
    purple: {
      name: 'Purple Haze',
      description: 'Mystical purple and violet theme',
      colors: {
        primary: '#aa00ff',
        secondary: '#8800cc',
        accent: '#cc00ff',
        background: '#1a0a2a',
        surface: '#2a1a3a',
        text: '#aa00ff',
        textSecondary: '#8800cc',
        border: '#aa00ff',
        glow: '#aa00ff'
      },
      effects: {
        glow: true,
        matrix: false,
        neon: true
      }
    },
    monochrome: {
      name: 'Monochrome',
      description: 'Clean black and white theme',
      colors: {
        primary: '#ffffff',
        secondary: '#cccccc',
        accent: '#ffffff',
        background: '#000000',
        surface: '#111111',
        text: '#ffffff',
        textSecondary: '#cccccc',
        border: '#ffffff',
        glow: false
      },
      effects: {
        glow: false,
        matrix: false,
        neon: false
      }
    }
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
    setIsLoading(false);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (isLoading) return;

    const theme = themes[currentTheme];
    const root = document.documentElement;
    
    // Apply CSS custom properties
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });

    // Apply theme class to body
    document.body.className = `theme-${currentTheme}`;
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme, isLoading]);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      return { success: true, theme: themes[themeName] };
    }
    return { success: false, error: 'Theme not found' };
  };

  const getAvailableThemes = () => {
    return Object.entries(themes).map(([key, theme]) => ({
      key,
      name: theme.name,
      description: theme.description
    }));
  };

  const getCurrentThemeInfo = () => {
    return {
      key: currentTheme,
      ...themes[currentTheme]
    };
  };

  const value = {
    currentTheme,
    themes,
    changeTheme,
    getAvailableThemes,
    getCurrentThemeInfo,
    isLoading
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
