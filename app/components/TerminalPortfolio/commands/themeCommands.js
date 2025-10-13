// Theme-related commands
export const createThemeCommands = (changeTheme, getAvailableThemes, getCurrentThemeInfo) => ({
    theme: (args) => {
        if (!args || args.length === 0) {
            const currentThemeInfo = getCurrentThemeInfo();
            return {
                output: [
                    "🎨 CURRENT THEME:",
                    "",
                    `Name: ${currentThemeInfo.name}`,
                    `Description: ${currentThemeInfo.description}`,
                    "",
                    "Usage: theme <theme-name>",
                    "Type 'themes' to see available options"
                ]
            };
        }
        
        const result = changeTheme(args[0]);
        if (result.success) {
            return {
                output: [
                    `🎨 Theme changed to: ${result.theme.name}`,
                    "",
                    `Description: ${result.theme.description}`,
                    "",
                    "✨ Theme applied successfully!",
                    "The terminal will now use the new color scheme."
                ]
            };
        } else {
            return {
                output: [
                    `❌ Error: Theme '${args[0]}' not found`,
                    "",
                    "Type 'themes' to see available options"
                ]
            };
        }
    },

    themes: () => {
        const availableThemes = getAvailableThemes();
        return {
            output: [
                "🎨 AVAILABLE THEMES:",
                "",
                ...availableThemes.map(theme =>
                    `  ${theme.key.padEnd(12)} - ${theme.name}: ${theme.description}`
                ),
                "",
                "Usage: theme <theme-name>",
                "Example: theme cyberpunk"
            ]
        };
    }
});