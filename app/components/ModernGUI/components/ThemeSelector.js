"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MATERIAL3 } from '../constants';

const ThemeSelector = ({ 
  isVisible, 
  onClose, 
  ideTheme, 
  currentTheme, 
  availableThemes, 
  onThemeChange 
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="w-full max-w-sm sm:max-w-lg max-h-[85vh] sm:max-h-[80vh] overflow-hidden mx-4"
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
              className="flex items-center justify-between p-3 sm:p-6 border-b"
              style={{
                borderColor: ideTheme.border,
                backgroundColor: ideTheme.sidebar
              }}
            >
              <div>
                <h3
                  className="text-lg sm:text-2xl font-bold"
                  style={{
                    ...MATERIAL3.typography.headlineSmall,
                    color: ideTheme.text
                  }}
                >
                  Choose Theme
                </h3>
                <p
                  className="mt-1 text-xs sm:text-sm"
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
                onClick={onClose}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors touch-target touch-button"
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
              className="p-3 sm:p-6 max-h-80 sm:max-h-96 overflow-y-auto"
              style={{
                backgroundColor: ideTheme.background,
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
                {availableThemes.map((theme, index) => (
                  <motion.button
                    key={theme.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      onThemeChange(theme.key);
                      onClose();
                    }}
                    className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-200 relative overflow-hidden touch-target touch-button`}
                    style={{
                      background: currentTheme.key === theme.key
                        ? `linear-gradient(135deg, ${ideTheme.accent}20, ${ideTheme.text}15)`
                        : ideTheme.tabInactive,
                      border: currentTheme.key === theme.key
                        ? `1px solid ${ideTheme.accent}40`
                        : `1px solid ${ideTheme.border}`,
                      color: currentTheme.key === theme.key ? ideTheme.text : ideTheme.textSecondary
                    }}
                    onMouseEnter={(e) => {
                      if (currentTheme.key !== theme.key) {
                        e.target.style.backgroundColor = ideTheme.activeFile;
                        e.target.style.borderColor = ideTheme.accent;
                        e.target.style.color = ideTheme.text;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentTheme.key !== theme.key) {
                        e.target.style.backgroundColor = ideTheme.tabInactive;
                        e.target.style.borderColor = ideTheme.border;
                        e.target.style.color = ideTheme.textSecondary;
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div
                          className="font-semibold text-sm sm:text-base truncate"
                          style={{
                            ...MATERIAL3.typography.titleMedium,
                            color: currentTheme.key === theme.key
                              ? ideTheme.accent
                              : ideTheme.text
                          }}
                        >
                          {theme.name}
                        </div>
                        <div
                          className="mt-1 text-xs sm:text-sm truncate"
                          style={{
                            ...MATERIAL3.typography.bodySmall,
                            color: ideTheme.textSecondary
                          }}
                        >
                          {theme.description}
                        </div>
                      </div>
                      {currentTheme.key === theme.key && (
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
  );
};

export default ThemeSelector;