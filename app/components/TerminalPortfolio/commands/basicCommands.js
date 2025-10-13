// Basic terminal commands
export const basicCommands = {
    help: () => ({
        output: [
            "Available commands:",
            "  help          - Show this help message",
            "  about         - Learn about Shivam",
            "  skills        - View technical skills",
            "  projects      - Browse portfolio projects",
            "  experience    - Work experience timeline",
            "  contact       - Get contact information",
            "  resume        - Download resume",
            "  clear         - Clear terminal",
            "  matrix        - Enter the matrix mode",
            "  hack          - Try to hack the system",
            "  sudo          - Execute with admin privileges",
            "  whoami        - Display current user info",
            "  ls            - List directory contents",
            "  cat           - Display file contents",
            "  ping          - Test network connectivity",
            "  card          - Generate holographic business card",
            "  web3          - Explore Web3 achievements",
            "  hackathon     - Hackathon victory details",
            "  competitive   - Competitive programming stats",
            "  date          - Show current date and time",
            "  shortcuts     - Show keyboard shortcuts",
            "  easter        - ???",
            "  theme         - Change terminal theme",
            "  themes        - List available themes",
            "  gui           - Switch to modern GUI interface",
            "",
            "Keyboard shortcuts:",
            "  ↑/↓           - Navigate command history",
            "  Tab           - Auto-complete commands",
            "  Ctrl+C        - Clear current input",
            "  Ctrl+L        - Clear terminal screen",
            "  ESC           - Close overlays",
            "",
            "Type any command to get started!"
        ]
    }),

    about: () => ({
        output: [
            "╔════════════════════════════════════════════════════════════════════╗",
            "║                        SHIVAM.EXE                                  ║",
            "╠════════════════════════════════════════════════════════════════════╣",
            "║ Frontend Developer | Web3 Specialist                               ║",
            "║ Location: Darbhanga, Bihar, India                                  ║",
            "║ Targeting: high Package                                            ║",
            "║                                                                    ║",
            "║ 2+ Years Frontend Development Experience                           ║",
            "║ Blockchain & DeFi Enthusiast                                       ║",
            "║ Building the future of decentralized web                           ║",
            "╚════════════════════════════════════════════════════════════════════╝"
        ]
    }),

    shortcuts: () => ({
        output: [
            "⌨️  KEYBOARD SHORTCUTS:",
            "",
            "╔═══════════════════════════════════════════════════════════╗",
            "║                    TERMINAL NAVIGATION                    ║",
            "╠═══════════════════════════════════════════════════════════╣",
            "║ ↑ / ↓ Arrow Keys  - Navigate command history              ║",
            "║ Tab               - Auto-complete commands                ║",
            "║ Ctrl + C          - Clear current input line              ║",
            "║ Ctrl + L          - Clear terminal screen                 ║",
            "║ ESC               - Close overlays/modals                 ║",
            "║ Enter             - Execute command                       ║",
            "╚═══════════════════════════════════════════════════════════╝",
            "",
            "🎮 SPECIAL FEATURES:",
            "• Konami Code: ↑↑↓↓←→←→BA (unlocks easter egg)",
            "• Text Selection: Click and drag to select/copy text",
            "",
            "💡 PRO TIPS:",
            "• Use Tab for quick command completion",
            "• Arrow keys work just like a real terminal",
            "• Ctrl+L is faster than typing 'clear'",
            "• All text in the terminal is selectable and copyable"
        ]
    }),

    date: () => ({
        output: [
            `📅 ${new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}`,
            `🕐 ${new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZoneName: 'short'
            })}`,
            `🌍 UTC: ${new Date().toISOString().slice(0, 19).replace('T', ' ')}`
        ]
    }),

    whoami: () => ({
        output: [
            "👤 USER PROFILE:",
            "",
            "Name:        Shivam",
            "Role:        Frontend Developer | Web3 Specialist",
            "Level:       Intermediate+ (Lv. 75)",
            "XP:          8,500 points",
            "Reputation:  ⭐⭐⭐⭐⭐ (4.8/5.0)",
            "Status:      Available for hire",
            "Superpower:  Building the decentralized future",
            "",
            "🏆 ACHIEVEMENTS UNLOCKED:",
            "• Web3 Pioneer",
            "• React Specialist",
            "• Performance Optimizer",
            "• Blockchain Builder"
        ]
    }),

    ls: () => ({
        output: [
            "📁 DIRECTORY CONTENTS:",
            "",
            "drwxr-xr-x  skills/",
            "drwxr-xr-x  projects/",
            "drwxr-xr-x  experience/",
            "-rw-r--r--  resume.pdf",
            "-rw-r--r--  contact.txt",
            "-rw-r--r--  about.md",
            "-rwxr-xr-x  hire_me.sh",
            "",
            "Total: 7 items"
        ]
    }),

    easter: () => ({
        output: [
            "🥚 EASTER EGG FOUND!",
            "",
            "Congratulations! You found a hidden command.",
            "",
            "🎁 BONUS CONTENT UNLOCKED:",
            "• Secret developer stats revealed",
            "• Hidden project details accessible",
            "• Konami code compatibility enabled",
            "",
            "You're clearly someone who pays attention to details.",
            "That's exactly the kind of person I want to work with! 🚀"
        ]
    })
};