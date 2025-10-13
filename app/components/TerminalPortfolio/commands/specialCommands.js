// Special interactive commands that trigger UI changes
export const createSpecialCommands = (setShowMatrix, setShowSkillTree, setShowCard) => ({
    skills: () => {
        setTimeout(() => {
            setShowSkillTree(true);
            window.dispatchEvent(new CustomEvent('skillTreeToggle', { detail: { active: true } }));
        }, 500);
        return {
            output: [
                "🎮 Loading Skill Tree Interface...",
                "",
                "████████████████████████████████ 100%",
                "",
                "🌟 Skill Tree Activated!",
                "Navigate through my technical abilities in RPG style.",
                "",
                "Loading interactive skill nodes..."
            ]
        };
    },

    matrix: () => {
        setTimeout(() => setShowMatrix(true), 1000);
        return {
            output: [
                "🔴 Entering Matrix Mode...",
                "",
                "Wake up, Neo...",
                "The Matrix has you...",
                "Follow the white rabbit...",
                "",
                "01001000 01100101 01101100 01101100 01101111",
                "01010111 01101111 01110010 01101100 01100100",
                "",
                "🔵 You take the blue pill - the story ends",
                "🔴 You take the red pill - you see how deep the rabbit hole goes",
                "",
                "Initializing matrix interface..."
            ]
        };
    },

    card: () => {
        setTimeout(() => setShowCard(true), 500);
        return {
            output: [
                "💳 Generating Holographic Business Card...",
                "",
                "████████████████████████████████ 100%",
                "",
                "✨ 3D Business Card Materialized!",
                "Click the card to flip and explore both sides.",
                "",
                "Rendering holographic interface..."
            ]
        };
    },

    gui: () => {
        // This command will be handled by the parent component
        window.dispatchEvent(new CustomEvent('switchToGUI'));
        return {
            output: [
                "🖼️  Switching to GUI Mode...",
                "",
                "████████████████████████████████ 100%",
                "",
                "✨ Modern Interface Activated!",
                "Use the floating button to return to terminal mode.",
                "",
                "Loading visual portfolio..."
            ]
        };
    }
});