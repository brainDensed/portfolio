export { default } from './ModernGUI';

// Export individual components for potential reuse
export { default as FileExplorer } from './components/FileExplorer';
export { default as IDETabs } from './components/IDETabs';
export { default as StatusBar } from './components/StatusBar';
export { default as ActivityBar } from './components/ActivityBar';
export { default as ThemeSelector } from './components/ThemeSelector';

// Export constants and utilities
export * from './constants';
export * from './utils/contentRenderer';