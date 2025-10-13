// Command registry - combines all command modules
import { basicCommands } from './basicCommands.js';
import { portfolioCommands } from './portfolioCommands.js';
import { createSpecialCommands } from './specialCommands.js';
import { funCommands } from './funCommands.js';
import { techCommands } from './techCommands.js';
import { createThemeCommands } from './themeCommands.js';

export const createCommands = (
    setShowMatrix,
    setShowSkillTree,
    setShowCard,
    changeTheme,
    getAvailableThemes,
    getCurrentThemeInfo
) => {
    const specialCommands = createSpecialCommands(setShowMatrix, setShowSkillTree, setShowCard);
    const themeCommands = createThemeCommands(changeTheme, getAvailableThemes, getCurrentThemeInfo);

    return {
        ...basicCommands,
        ...portfolioCommands,
        ...specialCommands,
        ...funCommands,
        ...techCommands,
        ...themeCommands
    };
};