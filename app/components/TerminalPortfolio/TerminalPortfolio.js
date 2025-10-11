"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MatrixRain from "../MatrixRain/MatrixRain";
import SkillTree from "../SkillTree/SkillTree";
import HolographicCard from "../HolographicCard/HolographicCard";

const TerminalPortfolio = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [currentPath, setCurrentPath] = useState("~");
    const [showMatrix, setShowMatrix] = useState(false);
    const [showSkillTree, setShowSkillTree] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

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
                "  skilltree     - View RPG-style skill tree",
                "  sudo          - Execute with admin privileges",
                "  whoami        - Display current user info",
                "  ls            - List directory contents",
                "  cat           - Display file contents",
                "  ping          - Test network connectivity",
                "  card          - Generate holographic business card",
                "  web3          - Explore Web3 achievements",
                "  hackathon     - HackOdisha 5.0 victory details",
                "  competitive   - Competitive programming stats",
                "  easter        - ???",
                "",
                "Type any command to get started!"
            ]
        }),
        about: () => ({
            output: [
                "╔══════════════════════════════════════════════════════════════╗",
                "║                        SHIVAM.EXE                            ║",
                "╠══════════════════════════════════════════════════════════════╣",
                "║ Frontend Developer | Web3 Specialist                        ║",
                "║ Location: Darbhanga, Bihar, India                           ║",
                "║ Targeting: ₹15 LPA+ Package                                 ║",
                "║                                                              ║",
                "║ 🏆 HackOdisha 5.0 Winner - Verbwire Track                   ║",
                "║ 🚀 2+ Years Frontend Development Experience                  ║",
                "║ ⚡ Blockchain & DeFi Enthusiast                              ║",
                "║ 💡 Building the future of decentralized web                 ║",
                "╚══════════════════════════════════════════════════════════════╝"
            ]
        }),
        skills: () => ({
            output: [
                "🚀 TECHNICAL ARSENAL:",
                "",
                "Frontend:     ████████████████████ 95%  React, Next.js, TypeScript",
                "Web3:         ██████████████████   85%  Solidity, Hardhat, Web3.js",
                "Blockchain:   ███████████████      75%  Smart Contracts, DeFi, NFTs",
                "Styling:      ████████████████████ 90%  Tailwind, Material UI, Framer Motion",
                "Tools:        ██████████████████   80%  Git, Docker, Vercel, Firebase",
                "Languages:    ███████████████████  85%  JavaScript, TypeScript, C++, Go",
                "",
                "🎯 WEB3 SPECIALIZATIONS:",
                "• Smart Contract Development",
                "• DeFi Protocol Integration",
                "• NFT Marketplace Development",
                "• Blockchain Data Visualization",
                "• zk-Proofs & Layer 2 Solutions"
            ]
        }),
        projects: () => ({
            output: [
                "📁 PROJECT DIRECTORY:",
                "",
                "├── 🏆 Theramine-Winner/",
                "│   ├── Track: Verbwire - Web3 Infrastructure",
                "│   ├── Tech: React, Solidity, Web3.js, Hardhat",
                "│   ├── Achievement: HackOdisha 5.0 - Verbwire track Winner",
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
                "• HackOdisha 5.0 Winner - Verbwire Track",
                "• 2+ years professional frontend experience",
                "• Expertise in React ecosystem & Web3 technologies",
                "• Strong problem-solving skills in competitive programming"
            ]
        }),
        contact: () => ({
            output: [
                "📞 CONTACT INFORMATION:",
                "",
                "Email:     shivam.nilay46@gmail.com",
                "Phone:     +91 8789581642",
                "LinkedIn:  /in/shivam-nilay",
                "GitHub:    /shivam-nilay",
                "Portfolio: https://shivam-portfolio.dev",
                "HackerRank: /shivam-competitive",
                "",
                "� Loceation: Darbhanga, Bihar, India",
                "🕐 Timezone: IST (UTC+5:30)",
                "🌐 Availability: Remote • Hybrid • On-site",
                "",
                "💬 Preferred contact: Email for opportunities",
                "   LinkedIn for professional networking",
                "",
                "🏆 Notable: HackOdisha 5.0 Winner (Verbwire Track)"
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
                    "• HackOdisha 5.0 Winner - Verbwire Track",
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
                "═══════════════════════════════════",
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
                "• HackOdisha 5.0 Winner - Verbwire Track",
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
        ping: () => ({
            output: [
                "PING shivam.dev (192.168.1.100): 56 data bytes",
                "64 bytes from 192.168.1.100: icmp_seq=0 time=0.1ms",
                "64 bytes from 192.168.1.100: icmp_seq=1 time=0.1ms",
                "64 bytes from 192.168.1.100: icmp_seq=2 time=0.1ms",
                "",
                "--- shivam.dev ping statistics ---",
                "3 packets transmitted, 3 packets received, 0.0% packet loss",
                "round-trip min/avg/max/stddev = 0.1/0.1/0.1/0.0 ms",
                "",
                "✅ Connection successful! Ready to collaborate."
            ]
        }),
        skilltree: () => {
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
                "║ Smart Contracts:  ████████████████░░░░ 80%               ║",
                "║ Solidity:         ███████████████░░░░░ 75%               ║",
                "║ DeFi Protocols:   ██████████████░░░░░░ 70%               ║",
                "║ Web3.js/Ethers:   ████████████████░░░░ 80%               ║",
                "║ Hardhat/Truffle:  ███████████████░░░░░ 75%               ║",
                "║ NFT Development:  ██████████████░░░░░░ 70%               ║",
                "║ zk-Proofs:        ████████░░░░░░░░░░░░ 40%               ║",
                "╚═══════════════════════════════════════════════════════════╝",
                "",
                "🏆 ACHIEVEMENTS:",
                "• HackOdisha 5.0 Winner - Verbwire Track",
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
                "║ Event:        HackOdisha 5.0                             ║",
                "║ Track:        Verbwire - Web3 Infrastructure             ║",
                "║ Result:       🥇 FIRST PLACE WINNER                      ║",
                "║ Achievement:  Top performer among 500+ participants      ║",
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
                "║ HackerRank:       ⭐⭐⭐⭐⭐ (5-star rating)              ║",
                "║ Problem Solving:  Strong foundation in DSA               ║",
                "║ Languages:        C++, JavaScript, TypeScript            ║",
                "║ Specialization:   Algorithms & Data Structures           ║",
                "╚═══════════════════════════════════════════════════════════╝",
                "",
                "💪 CORE STRENGTHS:",
                "• Dynamic Programming",
                "• Graph Algorithms",
                "• Tree Traversals",
                "• Sorting & Searching",
                "• String Manipulation",
                "• Mathematical Problem Solving",
                "",
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
        })
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
                <div className="fixed inset-0 z-40 bg-black">
                    <SkillTree />
                    <button
                        onClick={() => setShowSkillTree(false)}
                        className="absolute top-4 right-4 text-green-400 hover:text-green-300 
                       bg-black/80 px-4 py-2 rounded border border-green-400"
                    >
                        Back to Terminal
                    </button>
                </div>
            )}
            <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-green-400">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-green-400 text-sm">shivam@portfolio:~$</div>
                    <div className="text-green-400 text-sm">
                        {new Date().toLocaleTimeString()}
                    </div>
                </div>
                {/* Terminal Body */}
                <div
                    ref={terminalRef}
                    className="h-screen overflow-y-auto p-4 pb-20"
                    onClick={() => inputRef.current?.focus()}
                >
                    {/* Welcome Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-4"
                    >
                        <pre className="text-green-300 text-xs">
                            {`
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
                                                                        
              🏆 HackOdisha 5.0 Winner - Verbwire Track | Frontend + Web3 Specialist
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
                                    <span className="text-blue-400">shivam@portfolio</span>
                                    <span className="text-white">:</span>
                                    <span className="text-yellow-400">{currentPath}</span>
                                    <span className="text-white">$ </span>
                                    <span className="text-green-400">{entry.command}</span>
                                </div>
                                {entry.output && (
                                    <div className="ml-4 mt-1 whitespace-pre-wrap">
                                        {Array.isArray(entry.output)
                                            ? entry.output.map((line, i) => (
                                                <div key={i} className="text-green-300">{line}</div>
                                            ))
                                            : <div className="text-green-300">{entry.output}</div>
                                        }
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Current Input Line */}
                    <div className="flex items-center">
                        <span className="text-blue-400">shivam@portfolio</span>
                        <span className="text-white">:</span>
                        <span className="text-yellow-400">{currentPath}</span>
                        <span className="text-white">$ </span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="bg-transparent outline-none text-green-400 flex-1 caret-green-400"
                            autoComplete="off"
                            spellCheck="false"
                        />
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="text-green-400"
                        >
                            █
                        </motion.span>
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

    function executeCommand(cmd) {
        const newEntry = { command: cmd };

        if (cmd === "") {
            setHistory(prev => [...prev, newEntry]);
            return;
        }

        if (cmd === "clear") {
            setHistory([]);
            return;
        }

        if (commands[cmd]) {
            const result = commands[cmd]();
            newEntry.output = result.output;
        } else {
            newEntry.output = `Command not found: ${cmd}. Type 'help' for available commands.`;
        }

        setHistory(prev => [...prev, newEntry]);
    }
};

export default TerminalPortfolio;