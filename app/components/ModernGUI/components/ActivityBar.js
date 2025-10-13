"use client";

const ActivityBar = ({ onQuickAction, ideTheme }) => {
  return (
    <div
      className="activity-bar-mobile"
      style={{ backgroundColor: 'transparent' }}
    >
      <button
        onClick={() => onQuickAction('themes')}
        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded hover:bg-gray-700 transition-colors group touch-target touch-button"
        style={{ backgroundColor: ideTheme.sidebar }}
        title="Change Theme"
      >
        <span className="text-sm sm:text-lg">🎨</span>
      </button>
      <button
        onClick={() => onQuickAction('card')}
        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded hover:bg-gray-700 transition-colors group touch-target touch-button"
        style={{ backgroundColor: ideTheme.sidebar }}
        title="Business Card"
      >
        <span className="text-sm sm:text-lg">💳</span>
      </button>
      <button
        onClick={() => onQuickAction('skillTree')}
        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded hover:bg-gray-700 transition-colors group touch-target touch-button"
        style={{ backgroundColor: ideTheme.sidebar }}
        title="Skills Tree"
      >
        <span className="text-sm sm:text-lg">🌳</span>
      </button>
      <button
        onClick={() => onQuickAction('matrix')}
        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded hover:bg-gray-700 transition-colors group touch-target touch-button"
        style={{ backgroundColor: ideTheme.sidebar }}
        title="Matrix Mode"
      >
        <span className="text-sm sm:text-lg">💻</span>
      </button>
    </div>
  );
};

export default ActivityBar;