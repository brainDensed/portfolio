"use client";

import { motion } from "framer-motion";

const FileExplorer = ({ fileSystem, activeFile, onFileSelect, ideTheme, isVisible = true }) => {
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
            className={`flex items-center px-2 py-1 text-xs sm:text-sm hover:bg-gray-700 rounded transition-colors touch-target`}
            style={{
              backgroundColor: isActive ? ideTheme.accent : 'transparent',
              color: isActive ? ideTheme.activeFile : ideTheme.text,
              fontWeight: isActive ? 'bold' : 'normal'
            }}
          >
            <span
              className="mr-1 sm:mr-2"
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
            className="flex items-center px-2 py-1 text-xs sm:text-sm cursor-pointer touch-target"
            style={{
              color: ideTheme.text,
              fontWeight: 'bold'
            }}
          >
            <span className="mr-1 sm:mr-2" style={{ color: ideTheme.textSecondary }}>📁</span>
            <span className="font-medium">{node.name}</span>
          </motion.div>
          <div className="ml-2 sm:ml-4">
            {Object.entries(node.children).map(([, child]) =>
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
      className={`${isVisible ? 'w-full sm:w-64' : 'w-0 sm:w-0'} h-full p-2 sm:p-4 overflow-y-auto transition-all duration-300`}
      style={{
        backgroundColor: ideTheme.sidebar,
        borderRight: isVisible && window.innerWidth >= 640 ? `1px solid ${ideTheme.border}` : 'none',
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
      <div className="mb-2 sm:mb-4 hidden sm:block">
        <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wide">Explorer</h3>
      </div>
      {renderFileTree(fileSystem.portfolio)}
    </div>
  );
};

export default FileExplorer;