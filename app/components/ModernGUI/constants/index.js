// IDE-style file system structure
export const FILE_SYSTEM = {
  portfolio: {
    type: 'folder',
    name: 'portfolio',
    expanded: true,
    children: {
      'README.md': {
        type: 'file',
        name: 'README.md',
        content: 'main'
      },
      src: {
        type: 'folder',
        name: 'src',
        expanded: true,
        children: {
          'about.md': {
            type: 'file',
            name: 'about.md',
            content: 'about'
          },
          'skills.md': {
            type: 'file',
            name: 'skills.md',
            content: 'skills'
          },
          'projects.md': {
            type: 'file',
            name: 'projects.md',
            content: 'projects'
          },
          'experience.md': {
            type: 'file',
            name: 'experience.md',
            content: 'experience'
          },
          'contact.md': {
            type: 'file',
            name: 'contact.md',
            content: 'contact'
          }
        }
      },
      'package.json': {
        type: 'file',
        name: 'package.json',
        content: 'package'
      }
    }
  }
};

// Material 3 Design System Constants
export const MATERIAL3 = {
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
    extraLarge: '28px'
  },
  elevation: {
    level1: '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 1px rgba(0, 0, 0, 0.1)',
    level2: '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 2px 6px 2px rgba(0, 0, 0, 0.1)',
    level3: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 3px rgba(0, 0, 0, 0.15)',
    level5: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 8px 16px 8px rgba(0, 0, 0, 0.15)'
  },
  typography: {
    displayLarge: { fontSize: '57px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.25px' },
    displaySmall: { fontSize: '45px', fontWeight: '400', lineHeight: '52px', letterSpacing: '0px' },
    headlineLarge: { fontSize: '32px', fontWeight: '400', lineHeight: '40px', letterSpacing: '0px' },
    headlineMedium: { fontSize: '28px', fontWeight: '400', lineHeight: '36px', letterSpacing: '0px' },
    headlineSmall: { fontSize: '24px', fontWeight: '400', lineHeight: '32px', letterSpacing: '0px' },
    titleLarge: { fontSize: '22px', fontWeight: '400', lineHeight: '28px', letterSpacing: '0px' },
    titleMedium: { fontSize: '16px', fontWeight: '500', lineHeight: '24px', letterSpacing: '0.15px' },
    titleSmall: { fontSize: '14px', fontWeight: '500', lineHeight: '20px', letterSpacing: '0.1px' },
    bodyLarge: { fontSize: '16px', fontWeight: '400', lineHeight: '24px', letterSpacing: '0.5px' },
    bodyMedium: { fontSize: '14px', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.25px' },
    bodySmall: { fontSize: '12px', fontWeight: '400', lineHeight: '16px', letterSpacing: '0.4px' },
    labelMedium: { fontSize: '12px', fontWeight: '500', lineHeight: '16px', letterSpacing: '0.5px' }
  }
};

// Dynamic IDE Theme Colors that sync with terminal theme
export const getIDETheme = (currentTheme) => ({
  background: currentTheme.colors.background,
  sidebar: currentTheme.colors.surface,
  activeFile: currentTheme.colors.surface,
  inactiveFile: currentTheme.colors.background,
  text: currentTheme.colors.text,
  textSecondary: currentTheme.colors.textSecondary,
  accent: currentTheme.colors.primary,
  border: currentTheme.colors.border,
  tabActive: currentTheme.colors.surface,
  tabInactive: currentTheme.colors.background,
  glow: currentTheme.colors.glow || currentTheme.colors.primary
});