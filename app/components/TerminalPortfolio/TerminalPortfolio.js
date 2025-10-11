"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MatrixRain from "../MatrixRain/MatrixRain";
import SkillTree from "../SkillTree/SkillTree";
import HolographicCard from "../HolographicCard/HolographicCard";
import { useTheme } from "../../contexts/ThemeContext";

const TerminalPortfolio = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [currentPath, setCurrentPath] = useState("~");
    const [showMatrix, setShowMatrix] = useState(false);
    const [showSkillTree, setShowSkillTree] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);
    const { currentTheme, changeTheme, getAvailableThemes, getCurrentThemeInfo } = useTheme();

    const commands = {
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
                "  easter        - ???",
                "  theme         - Change terminal theme",
                "  themes        - List available themes",
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
                "║ Targeting: ₹15 LPA+ Package                                        ║",
                "║                                                                    ║",
                "║ 2+ Years Frontend Development Experience                           ║",
                "║ Blockchain & DeFi Enthusiast                                       ║",
                "║ Building the future of decentralized web                           ║",
                "╚════════════════════════════════════════════════════════════════════╝"
            ]
        }),
        skills: () => {
            setTimeout(() => setShowSkillTree(true), 500);
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
        projects: () => ({
            output: [
                "📁 PROJECT DIRECTORY:",
                "",
                "├── 🏆 Theramine/",
                "│   ├── Track: Verbwire - Web3 Infrastructure",
                "│   ├── Tech: React, Solidity, Web3.js, Hardhat",
                "│   ├── Achievement: Award-winning project",
                "│   └── Impact: Secure chat on Web3 between therapist and user",
                "",
                "├── 🧬 Genoroot/",
                "│   ├── Tech: React, Redux, Tailwind, Firebase",
                "│   ├── Features: AI/ML hair analysis platform",
                "│   ├── Performance: 15% faster loading, 20% dev speed boost",
                "│   └── Duration: Oct 2024 - Mar 2025",
                "",
                "├── 🏥 Planetdoctor/",
                "│   ├── Tech: React, Google Maps API, Multilingual",
                "│   ├── Features: Location-based doctor discovery",
                "│   ├── Impact: 15% faster booking, Spanish/English support",
                "│   └── Duration: Sep 2024 - Dec 2024",
                "",
                "├── 🔐 AuthBase/",
                "│   ├── Tech: React, JWT, Redis, Docker, AWS",
                "│   ├── Features: Production-ready auth system",
                "│   ├── Security: JWT + Session-based authentication",
                "│   └── Duration: Apr 2025 - May 2025",
                "",
                "└── ⚕️ MaxLink-Health/",
                "    ├── Tech: React, IoT Integration, Real-time APIs",
                "    ├── Features: Health monitoring, Auto-invoicing",
                "    ├── Innovation: Time-based billing system",
                "    └── Duration: Dec 2023 - Apr 2024",
                "",
                "Type 'cat <project-name>' for detailed info"
            ]
        }),
        experience: () => ({
            output: [
                "💼 CAREER TIMELINE:",
                "",
                "Feb 2023 - Mar 2025  🏢 Junior Developer",
                "Dreamsoft4u Pvt. Ltd, Jaipur, Rajasthan",
                "                     └── Developed 5+ projects & reusable components",
                "                     └── Cut development time by 25%",
                "                     └── Mentored junior developers with pair programming",
                "                     └── Increased team efficiency by 30%",
                "                     └── Reduced data retrieval times by 60%",
                "                     └── Boosted Core Web Vitals by 10%",
                "",
                "Aug 2019 - Aug 2023  🎓 Bachelor of Technology",
                "JECRC University, Jaipur, Rajasthan",
                "                     └── Computer Science and Engineering",
                "                     └── Built strong foundation in algorithms & DS",
                "                     └── Specialized in web technologies",
                "",
                "🏆 ACHIEVEMENTS:",
                "• 2+ years professional frontend experience",
                "• Expertise in React ecosystem & Web3 technologies",
                "• Strong problem-solving skills in competitive programming"
            ]
        }),
        contact: () => ({
            output: [
                "📞 CONTACT INFORMATION:",
                "",
                "LinkedIn:  https://www.linkedin.com/in/shivam-nilay",
                "GitHub:    https://github.com/brainDensed",
                "HackerRank: https://www.hackerrank.com/profile/shivam_nilay46",
                "",
                "🕐 Timezone: IST (UTC+5:30)",
                "🌐 Availability: Remote • Hybrid • On-site",
                "   LinkedIn for professional networking",
                "🏆 Notable: Award winner"
            ]
        }),
        resume: () => {
            // Trigger resume download
            window.open('/Shivams_Resume.pdf', '_blank');
            return {
                output: [
                    "📄 Downloading resume...",
                    "✅ Resume downloaded successfully!",
                    "",
                    "📊 RESUME HIGHLIGHTS:",
                    "• 2+ years of professional frontend experience",
                    "• Expert in React, Next.js, and Web3 technologies",
                    "• 5+ production projects with measurable impact",
                    "• Strong foundation in blockchain and DeFi",
                    "• Proficient in Solidity, Hardhat, and smart contracts",
                    "• B.Tech in Computer Science from JECRC University"
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
        hack: () => ({
            output: [
                "🔐 INITIATING HACK SEQUENCE...",
                "",
                "[████████████████████████████████] 100%",
                "",
                "🚨 ACCESS GRANTED 🚨",
                "",
                "CLASSIFIED: SHIVAM'S SECRET ABILITIES",
                "══════════════��════════════════════",
                "• Can debug production issues in sleep",
                "• Writes code that actually works on first try",
                "• Understands CSS centering without Stack Overflow",
                "• Has never said 'it works on my machine'",
                "• Can explain React hooks to your grandmother",
                "• Deploys on Fridays without fear",
                "",
                "⚠️  WARNING: This developer is too powerful ⚠️"
            ]
        }),
        sudo: () => ({
            output: [
                "🔐 sudo: Authentication required",
                "",
                "This incident will be reported to the administrator.",
                "",
                "Just kidding! You already have all the access you need.",
                "I'm an open book - no secrets here! 😄"
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
        ping: async () => {
            const pingResults = [];
            const targetUrl = "https://api.github.com"; // Using GitHub API as a reliable endpoint
            const pingCount = 3;
            
            try {
                pingResults.push("PING api.github.com: 56 data bytes");
                
                let totalTime = 0;
                let successfulPings = 0;
                const times = [];
                
                for (let i = 0; i < pingCount; i++) {
                    const startTime = performance.now();
                    
                    try {
                        const response = await fetch(targetUrl, {
                            method: 'HEAD',
                            mode: 'no-cors',
                            cache: 'no-cache'
                        });
                        
                        const endTime = performance.now();
                        const pingTime = Math.round((endTime - startTime) * 10) / 10;
                        
                        times.push(pingTime);
                        totalTime += pingTime;
                        successfulPings++;
                        
                        pingResults.push(`64 bytes from api.github.com: icmp_seq=${i} time=${pingTime}ms`);
                    } catch (error) {
                        pingResults.push(`Request timeout for icmp_seq=${i}`);
                    }
                }
                
                if (successfulPings > 0) {
                    const avgTime = Math.round((totalTime / successfulPings) * 10) / 10;
                    const minTime = Math.min(...times);
                    const maxTime = Math.max(...times);
                    const stdDev = Math.round(Math.sqrt(times.reduce((acc, time) => acc + Math.pow(time - avgTime, 2), 0) / times.length) * 10) / 10;
                    
                    pingResults.push("");
                    pingResults.push("--- api.github.com ping statistics ---");
                    pingResults.push(`${pingCount} packets transmitted, ${successfulPings} packets received, ${Math.round(((pingCount - successfulPings) / pingCount) * 100)}% packet loss`);
                    pingResults.push(`round-trip min/avg/max/stddev = ${minTime}/${avgTime}/${maxTime}/${stdDev} ms`);
                    pingResults.push("");
                    pingResults.push("✅ Connection successful! Ready to collaborate.");
                } else {
                    pingResults.push("");
                    pingResults.push("❌ All ping attempts failed. Check your internet connection.");
                }
                
            } catch (error) {
                pingResults.push("");
                pingResults.push("❌ Network error: Unable to reach target host");
                pingResults.push("Check your internet connection and try again.");
            }
            
            return { output: pingResults };
        },
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
        }),
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
        web3: () => ({
            output: [
                "🌐 WEB3 EXPERTISE DASHBOARD:",
                "",
                "╔═══════════════════════════════════════════════════════════╗",
                "║                    BLOCKCHAIN MASTERY                     ║",
                "╠═══════════════════════════════════════════════════════════╣",
                "║ Smart Contracts:  ████████████████░░░░ 80%                ║",
                "║ Solidity:         ███████████████░░░░░ 75%                ║",
                "║ DeFi Protocols:   ██████████████░░░░░░ 70%                ║",
                "║ Web3.js/Ethers:   ████████████████░░░░ 80%                ║",
                "║ Hardhat/Truffle:  ███████████████░░░░░ 75%                ║",
                "║ NFT Development:  ██████████████░░░░░░ 70%                ║",
                "║ zk-Proofs:        ████████░░░░░░░░░░░░ 40%                ║",
                "╚═══════════════════════════════════════════════════════════╝",
                "",
                "🏆 ACHIEVEMENTS:",
                "• Smart Contract Development",
                "• DeFi Protocol Integration",
                "• NFT Marketplace Experience",
                "",
                "🎯 CURRENT FOCUS:",
                "• Advanced zk-Proof implementations",
                "• Layer 2 scaling solutions",
                "• Cross-chain interoperability"
            ]
        }),
        hackathon: () => ({
            output: [
                "🏆 HACKODHISHA 5.0 - VICTORY REPORT:",
                "",
                "╔═══════════════════════════════════════════════════════════╗",
                "║                    CHAMPIONSHIP DETAILS                   ║",
                "╠═══════════════════════════════════════════════════════════╣",
                "║ Event:        HackOdisha 5.0                              ║",
                "║ Track:        Verbwire - Web3 Infrastructure              ║",
                "║ Result:       Verbwire Track WINNER                       ║",
                "║ Achievement:  Top performer among 438 Projects            ║",
                "╚═══════════════════════════════════════════════════════════╝",
                "",
                "🚀 PROJECT HIGHLIGHTS:",
                "• Innovative Web3 infrastructure solution",
                "• Built with React, Solidity, and Hardhat",
                "• Integrated Verbwire APIs for blockchain functionality",
                "• Demonstrated scalable architecture",
                "• Impressed judges with technical innovation",
                "",
                "💡 TECHNICAL STACK:",
                "Frontend: React, TypeScript, Web3.js",
                "Backend: Solidity Smart Contracts",
                "Tools: Hardhat, Verbwire APIs",
                "Deployment: Testnet deployment with live demo",
                "",
                "🎯 IMPACT:",
                "• Proved expertise in Web3 development",
                "• Showcased ability to build under pressure",
                "• Demonstrated innovation in blockchain space",
                "• Established credibility in competitive environment"
            ]
        }),
        competitive: () => ({
            output: [
                "🎯 COMPETITIVE PROGRAMMING PROFILE:",
                "",
                "╔═══════════════════════════════════════════════════════════╗",
                "║                 ALGORITHMIC MASTERY                       ║",
                "╠═══════════════════════════════════════════════════════════╣",
                "║ HackerRank:       ⭐⭐⭐⭐ (4-star C++ rating)          ║",
                "║ Problem Solving:  Strong foundation in DSA                ║",
                "║ Languages:        C++, JavaScript, TypeScript             ║",
                "║ Specialization:   Algorithms & Data Structures            ║",
                "╚═══════════════════════════════════════════════════════════╝",
                "🏆 ACHIEVEMENTS:",
                "• Consistent problem solver on HackerRank",
                "• Strong grasp of time & space complexity",
                "• Applied algorithmic thinking to real projects",
                "• Optimized application performance using DSA concepts",
                "",
                "🎯 IMPACT ON DEVELOPMENT:",
                "• Reduced data retrieval times by 60% using optimized algorithms",
                "• Improved application performance through efficient data structures",
                "• Applied competitive programming skills to solve complex business problems"
            ]
        }),
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
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    // Konami Code Easter Egg
    useEffect(() => {
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
        let konamiIndex = 0;

        const handleKeyDown = (e) => {
            if (e.code === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    executeCommand('easter');
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }

            // ESC to close modals
            if (e.key === 'Escape') {
                setShowMatrix(false);
                setShowSkillTree(false);
                setShowCard(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);



    return (
        <>
            <MatrixRain isActive={showMatrix} onClose={() => setShowMatrix(false)} />
            <HolographicCard isVisible={showCard} onClose={() => setShowCard(false)} />
            {showSkillTree && (
                <div className="fixed inset-0 z-40 bg-black/95">
                    <SkillTree />
                </div>
            )}

            {/* Page wrapper with padding; height constrained to viewport to avoid body scroll */}
            <div className="min-h-screen text-theme-primary font-mono">
                <div className="container mx-auto p-6">
                    {/* Terminal Window */}
                    <div className="terminal-window border border-theme rounded-xl shadow-2xl overflow-hidden max-w-5xl mx-auto h-[calc(100vh-3rem)] flex flex-col">
                        {/* Terminal Header with gamified UI */}
                        <div className="bg-theme-surface px-4 py-3 flex items-center justify-between border-b border-theme">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="text-center">
                                <div className="text-theme-secondary text-sm">Shivam's Interactive Terminal</div>
                                <div className="text-theme-accent text-xs">Frontend + Web3</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="hidden md:block text-theme-primary text-sm">{new Date().toLocaleTimeString()}</div>
                                {/* XP bar */}
                                <div className="hidden sm:flex items-center gap-2">
                                    <span className="text-xs text-theme-secondary">LVL 75</span>
                                    <div className="w-28 h-2 bg-gray-800 rounded overflow-hidden border border-theme">
                                        <div className="h-full bg-gradient-to-r from-theme-primary to-theme-accent" style={{ width: '85%' }}></div>
                                    </div>
                                    <span className="text-xs text-theme-secondary">8,500 XP</span>
                                </div>
                            </div>
                        </div>

                        {/* Terminal Body is the only scrollable area */}
                        <div
                            ref={terminalRef}
                            className="flex-1 overflow-y-auto p-4 pb-20 bg-theme-background"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {/* Welcome Message */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="mb-4"
                            >
                                <pre className="text-theme-secondary text-xs">
                                    {`
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
                                                                        
      Frontend + Web3 Specialist
            Welcome to Shivam's Interactive Terminal
                 Type 'help' to get started
`}
                                </pre>
                            </motion.div>

                            {/* Command History */}
                            <AnimatePresence>
                                {history.map((entry, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-2"
                                    >
                                        <div className="flex items-center">
                                            <span className="text-theme-accent">shivam@portfolio</span>
                                            <span className="text-theme-secondary">:</span>
                                            <span className="text-theme-primary">{currentPath}</span>
                                            <span className="text-theme-secondary">$ </span>
                                            <span className="text-theme-primary">{entry.command}</span>
                                        </div>
                                        {entry.output && (
                                            <div className="ml-4 mt-1 whitespace-pre-wrap">
                                                {Array.isArray(entry.output)
                                                    ? entry.output.map((line, i) => (
                                                        <div key={i} className="text-theme-secondary">{line}</div>
                                                    ))
                                                    : <div className="text-theme-secondary">{entry.output}</div>
                                                }
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {/* Current Input Line */}
                            <div className="flex items-center">
                                <span className="text-theme-accent">shivam@portfolio</span>
                                <span className="text-theme-secondary">:</span>
                                <span className="text-theme-primary">{currentPath}</span>
                                <span className="text-theme-secondary">$ </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="bg-transparent outline-none text-theme-primary flex-1 caret-theme-primary"
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="text-theme-primary"
                                >
                                    █
                                </motion.span>
                            </div>
                        </div>

                        {/* Bottom status bar */}
                        <div className="bg-theme-surface px-4 py-2 border-t border-theme text-xs text-theme-secondary flex items-center gap-4">
                            <span>Quest: Type 'help' to list commands</span>
                            <span className="hidden sm:inline">Tip: Press ESC to close overlays</span>
                            <span className="hidden md:inline">Konami: ↑↑↓↓←→←→BA</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            executeCommand(input.trim());
            setInput("");
        } else if (e.key === "Tab") {
            e.preventDefault();
            // Auto-complete functionality could go here
        }
    }

    async function executeCommand(cmd) {
        const newEntry = { command: cmd };

        if (cmd === "") {
            setHistory(prev => [...prev, newEntry]);
            return;
        }

        if (cmd === "clear") {
            setHistory([]);
            return;
        }

        // Parse command and arguments
        const parts = cmd.trim().split(/\s+/);
        const commandName = parts[0];
        const args = parts.slice(1);

        if (commands[commandName]) {
            try {
                const result = await commands[commandName](args);
                newEntry.output = result.output;
            } catch (error) {
                newEntry.output = `Error executing command: ${error.message}`;
            }
        } else {
            newEntry.output = `Command not found: ${commandName}. Type 'help' for available commands.`;
        }

        setHistory(prev => [...prev, newEntry]);
    }
};

export default TerminalPortfolio;
