"use client";

const StatusBar = ({ activeFile, ideTheme }) => {
  return (
    <div
      className="flex items-center justify-between px-2 sm:px-4 py-1 text-xs"
      style={{
        backgroundColor: ideTheme.sidebar,
        borderTop: `1px solid ${ideTheme.border}`,
        color: ideTheme.textSecondary
      }}
    >
      <div className="flex items-center space-x-2 sm:space-x-4">
        <span className="truncate">● {activeFile ? '1 file open' : 'No file open'}</span>
      </div>
      <div className="flex items-center space-x-1 sm:space-x-4">
        <span className="hidden sm:inline">Ln 1, Col 1</span>
        <span className="hidden md:inline">UTF-8</span>
        <span className="hidden lg:inline">JavaScript</span>
      </div>
    </div>
  );
};

export default StatusBar;