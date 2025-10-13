"use client";

const IDETabs = ({ openFiles, activeFile, onTabClick, onTabClose, ideTheme }) => {
  return (
    <div
      className="flex overflow-x-auto scrollbar-hide border-b tabs-mobile"
      style={{ backgroundColor: ideTheme.tabInactive, borderColor: ideTheme.border }}
    >
      {openFiles.map((file) => (
        <div
          key={file}
          onClick={() => onTabClick(file)}
          className={`flex items-center px-2 sm:px-3 py-1 sm:py-2 border-r cursor-pointer group relative flex-shrink-0 touch-target ${
            activeFile === file ? 'bg-gray-800' : 'hover:bg-gray-700'
          }`}
          style={{
            backgroundColor: activeFile === file ? ideTheme.tabActive : 'transparent',
            borderColor: ideTheme.border,
            minWidth: window.innerWidth < 640 ? '120px' : 'auto'
          }}
        >
          <span className="mr-1 sm:mr-2 text-xs">
            {file.endsWith('.md') ? '📄' : '📦'}
          </span>
          <span className={`text-xs sm:text-sm truncate ${activeFile === file ? 'text-white' : 'text-gray-300'}`}>
            {file.split('/').pop()}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTabClose(file);
            }}
            className="ml-1 sm:ml-2 opacity-0 group-hover:opacity-100 hover:bg-red-600 rounded-sm w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center text-xs touch-target"
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

export default IDETabs;