"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MatrixRain from "../MatrixRain/MatrixRain";
import SkillTree from "../SkillTree/SkillTree";
import HolographicCard from "../HolographicCard/HolographicCard";
import { useTheme } from "../../contexts/ThemeContext";
import { createCommands } from "./commands/index.js";

const TerminalPortfolio = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [currentPath, setCurrentPath] = useState("~");
    const [showMatrix, setShowMatrix] = useState(false);
    const [showSkillTree, setShowSkillTree] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);
    const { changeTheme, getAvailableThemes, getCurrentThemeInfo } = useTheme();
    const [currentTime, setCurrentTime] = useState('');
    const [liveData, setLiveData] = useState({
        github: null,
        ethPrice: null,
        location: null,
        weather: null,
        totalCommits: null
    });
    const [isLoadingData, setIsLoadingData] = useState(true);

    // Create commands using the command factory
    const commands = createCommands(
        setShowMatrix,
        setShowSkillTree,
        setShowCard,
        changeTheme,
        getAvailableThemes,
        getCurrentThemeInfo
    );

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

    // Initialize current time on client side only to prevent hydration mismatch
    useEffect(() => {
        setCurrentTime(new Date().toLocaleTimeString());

        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Fetch live data
    useEffect(() => {
        const fetchLiveData = async () => {
            const newLiveData = {
                github: null,
                ethPrice: null,
                location: null,
                weather: null,
                totalCommits: null
            };

            try {
                // GitHub user data
                try {
                    const githubRes = await fetch('https://api.github.com/users/brainDensed');
                    if (githubRes.ok) {
                        newLiveData.github = await githubRes.json();
                    } else {
                        console.warn('GitHub API error:', githubRes.status);
                        newLiveData.github = { error: 'GitHub data unavailable' };
                    }
                } catch (error) {
                    console.warn('GitHub fetch error:', error);
                    newLiveData.github = { error: 'Unable to fetch GitHub data' };
                }

                // ETH price in INR
                try {
                    const ethRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
                    if (ethRes.ok) {
                        const ethData = await ethRes.json();
                        newLiveData.ethPrice = ethData.ethereum?.inr || null;
                    } else {
                        console.warn('CoinGecko API error:', ethRes.status);
                        newLiveData.ethPrice = null;
                    }
                } catch (error) {
                    console.warn('CoinGecko fetch error:', error);
                    newLiveData.ethPrice = null;
                }

                // IP and location
                try {
                    const locationRes = await fetch('https://ipapi.co/json/');
                    if (locationRes.ok) {
                        newLiveData.location = await locationRes.json();
                    } else {
                        console.warn('Location API error:', locationRes.status);
                        newLiveData.location = { error: 'Location data unavailable' };
                    }
                } catch (error) {
                    console.warn('Location fetch error:', error);
                    newLiveData.location = { error: 'Unable to detect location' };
                }

                // Weather data (only if location is available)
                if (newLiveData.location && !newLiveData.location.error) {
                    try {
                        const weatherRes = await fetch(`https://wttr.in/${newLiveData.location.city}?format=j1`);
                        if (weatherRes.ok) {
                            const weatherData = await weatherRes.json();
                            newLiveData.weather = weatherData.current_condition ? weatherData.current_condition[0] : null;
                        } else {
                            console.warn('Weather API error:', weatherRes.status);
                            newLiveData.weather = { error: 'Weather data unavailable' };
                        }
                    } catch (error) {
                        console.warn('Weather fetch error:', error);
                        newLiveData.weather = { error: 'Unable to fetch weather' };
                    }
                }

                // Coding time from GitHub events
                try {
                    const eventsRes = await fetch('https://api.github.com/users/brainDensed/events');
                    if (eventsRes.ok) {
                        const events = await eventsRes.json();

                        // Calculate today's coding time
                        const today = new Date().toISOString().split('T')[0];
                        const todayEvents = events.filter(event =>
                            event.type === 'PushEvent' &&
                            event.created_at.startsWith(today)
                        );
                        const totalCommits = todayEvents.reduce((sum, event) => sum + event.payload.commits.length, 0);
                        newLiveData.totalCommits = totalCommits > 0 ? `(${totalCommits} commits)` : '(No commits today)';
                    } else {
                        console.warn('GitHub events API error:', eventsRes.status);
                        newLiveData.totalCommits = '(Unable to fetch commits)';
                    }
                } catch (error) {
                    console.warn('GitHub events fetch error:', error);
                    newLiveData.totalCommits = '(Unable to fetch commits)';
                }

                setLiveData(newLiveData);
            } catch (error) {
                console.error('General error fetching live data:', error);
                setLiveData({
                    github: { error: 'Service temporarily unavailable' },
                    ethPrice: null,
                    location: { error: 'Service temporarily unavailable' },
                    weather: { error: 'Service temporarily unavailable' },
                    totalCommits: '(Service unavailable)'
                });
            } finally {
                setIsLoadingData(false);
            }
        };

        fetchLiveData();
    }, []);

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
                if (showSkillTree) {
                    setShowSkillTree(false);
                    window.dispatchEvent(new CustomEvent('skillTreeToggle', { detail: { active: false } }));
                }
                if (showMatrix) setShowMatrix(false);
                if (showCard) setShowCard(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [showSkillTree, showMatrix, showCard]);

    return (
        <>
            <MatrixRain isActive={showMatrix} onClose={() => setShowMatrix(false)} />
            <HolographicCard isVisible={showCard} onClose={() => setShowCard(false)} />
            {showSkillTree && (
                <div
                    className="fixed inset-0 z-40 bg-black/95 cursor-pointer"
                    onClick={(e) => {
                        // Close if clicking on the overlay background, not on the content
                        if (e.target === e.currentTarget) {
                            setShowSkillTree(false);
                            window.dispatchEvent(new CustomEvent('skillTreeToggle', { detail: { active: false } }));
                        }
                    }}
                >
                    <div
                        className="w-full h-full relative"
                        onClick={(e) => {
                            // Always close when clicking anywhere in the skill tree area
                            setShowSkillTree(false);
                            window.dispatchEvent(new CustomEvent('skillTreeToggle', { detail: { active: false } }));
                        }}
                    >
                        {/* Return instruction */}
                        <SkillTree
                            isGUI={false}
                            onClose={() => {
                                setShowSkillTree(false);
                                window.dispatchEvent(new CustomEvent('skillTreeToggle', { detail: { active: false } }));
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Page wrapper with padding; height constrained to viewport to avoid body scroll */}
            <div className="min-h-screen text-theme-primary font-mono">
                <div className="container-mobile p-6">
                    {/* Terminal Window */}
                    <div className="terminal-window border border-theme rounded-xl shadow-2xl overflow-hidden w-full max-w-5xl mx-auto h-[calc(100vh-3rem)] flex flex-col sm:rounded-xl sm:border sm:shadow-2xl">
                        {/* Terminal Header with gamified UI */}
                        <div className="bg-theme-surface px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-theme">
                            <div className="flex items-center gap-1 sm:gap-2">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="text-center flex-1">
                                <div className="text-theme-secondary text-xs sm:text-sm">Shivam's Interactive Terminal</div>
                                <div className="text-theme-accent text-xs hidden sm:block">Frontend + Web3</div>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-4">
                                <div className="text-theme-primary text-xs sm:text-sm time-display">{currentTime}</div>
                                {/* XP bar - hidden on mobile */}
                                <div className="hidden md:flex items-center gap-2 xp-bar">
                                    <span className="text-xs text-theme-secondary">LVL 75</span>
                                    <div className="w-20 sm:w-28 h-2 bg-gray-800 rounded overflow-hidden border border-theme">
                                        <div className="h-full bg-gradient-theme" style={{ width: '85%' }}></div>
                                    </div>
                                    <span className="text-xs text-theme-secondary">8,500 XP</span>
                                </div>
                            </div>
                        </div>

                        {/* Terminal Body is the only scrollable area */}
                        <div
                            ref={terminalRef}
                            className="flex-1 overflow-y-auto p-2 sm:p-4 pb-16 sm:pb-20 bg-theme-background select-text"
                            onClick={(e) => {
                                // Only focus input if clicking on empty space, not on selectable text
                                if (e.target === e.currentTarget) {
                                    inputRef.current?.focus();
                                }
                            }}
                        >
                            {/* Welcome Message */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="mb-2 sm:mb-4"
                            >
                                <pre className="text-theme-secondary text-xs sm:text-sm whitespace-pre-wrap overflow-x-auto">
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

${isLoadingData ? 'Loading live data...' : `
Initializing Shivam System...
Fetching live data...
-------------------------------------
Username: @${liveData.github?.login || (liveData.github?.error ? 'Service unavailable' : 'Loading GitHub info...')}
GitHub Repos: ${liveData.github?.public_repos ? liveData.github.public_repos : (liveData.github?.error ? 'Data unavailable' : 'Loading...')} | Followers: ${liveData.github?.followers ? liveData.github.followers : (liveData.github?.error ? 'Data unavailable' : 'Loading...')}
ETH: ₹${liveData.ethPrice ? liveData.ethPrice.toLocaleString('en-IN') : 'Price unavailable'} | Weather: ${liveData.location?.city && liveData.weather && !liveData.weather.error ? `${liveData.location.city} ${liveData.weather.weatherDesc?.[0]?.value || '☀️'} ${liveData.weather.temp_C}°C` : (liveData.weather?.error ? 'Weather unavailable' : 'Loading weather...')}
IP: ${liveData.location?.ip || (liveData.location?.error ? 'Detection failed' : 'Detecting location...')} | Location: ${liveData.location?.city && liveData.location?.country_name && !liveData.location.error ? `${liveData.location.city}, ${liveData.location.country_name}` : (liveData.location?.error ? 'Location unavailable' : 'Loading location...')}
Total Commits (Today): ${liveData.totalCommits || 'Loading commits...'}
-------------------------------------
`}
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
                                        className="mb-1 sm:mb-2"
                                    >
                                        <div className="flex items-center">
                                            <span className="text-theme-accent">shivam@portfolio</span>
                                            <span className="text-theme-secondary">:</span>
                                            <span className="text-theme-primary">{currentPath}</span>
                                            <span className="text-theme-secondary">$ </span>
                                            <span className="text-theme-primary">{entry.command}</span>
                                        </div>
                                        {entry.output && (
                                            <div className="ml-2 sm:ml-4 mt-1 whitespace-pre-wrap text-sm sm:text-base">
                                                {Array.isArray(entry.output)
                                                    ? entry.output.map((line, i) => (
                                                        <div key={i} className="text-theme-secondary break-words">{line}</div>
                                                    ))
                                                    : <div className="text-theme-secondary break-words">{entry.output}</div>
                                                }
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {/* Current Input Line */}
                            <div className="flex items-center text-sm sm:text-base">
                                <span className="text-theme-accent">shivam@portfolio</span>
                                <span className="text-theme-secondary">:</span>
                                <span className="text-theme-primary hidden sm:inline">{currentPath}</span>
                                <span className="text-theme-primary sm:hidden">~</span>
                                <span className="text-theme-secondary">$ </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="bg-transparent outline-none text-theme-primary flex-1 caret-theme-primary min-w-0"
                                    autoComplete="off"
                                    spellCheck="false"
                                    style={{ fontSize: 'inherit' }}
                                />
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="text-theme-primary ml-1"
                                >
                                    █
                                </motion.span>
                            </div>
                        </div>

                        {/* Bottom status bar */}
                        <div className="bg-theme-surface px-2 sm:px-4 py-1 sm:py-2 border-t border-theme text-xs text-theme-secondary flex items-center gap-1 sm:gap-4">
                            <span className="flex-1 truncate">Quest: Type 'help' for commands</span>
                            <span className="hidden sm:inline text-xs">↑↓ for history</span>
                            <span className="hidden md:inline text-xs">Ctrl+L to clear</span>
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
            setHistoryIndex(-1);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex + 1;
                if (newIndex < commandHistory.length) {
                    setHistoryIndex(newIndex);
                    setInput(commandHistory[commandHistory.length - 1 - newIndex]);
                }
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            // Auto-complete functionality
            const partial = input.trim();
            if (partial) {
                const commandNames = Object.keys(commands);
                const matches = commandNames.filter(cmd => cmd.startsWith(partial));
                if (matches.length === 1) {
                    setInput(matches[0]);
                } else if (matches.length > 1) {
                    // Show suggestions
                    const suggestionEntry = {
                        command: input,
                        output: `Possible completions: ${matches.join(', ')}`
                    };
                    setHistory(prev => [...prev, suggestionEntry]);
                }
            }
        } else if (e.ctrlKey && e.key === "c") {
            e.preventDefault();
            setInput("");
            setHistoryIndex(-1);
        } else if (e.ctrlKey && e.key === "l") {
            e.preventDefault();
            setHistory([]);
            setInput("");
            setHistoryIndex(-1);
        } else {
            // Reset history index when typing
            if (historyIndex !== -1) {
                setHistoryIndex(-1);
            }
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
                // Add successful command to history
                setCommandHistory(prev => {
                    const newHistory = [...prev];
                    if (newHistory[newHistory.length - 1] !== cmd) {
                        newHistory.push(cmd);
                    }
                    return newHistory;
                });
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
