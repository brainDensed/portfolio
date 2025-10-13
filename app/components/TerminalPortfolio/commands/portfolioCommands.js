// Portfolio-related commands
export const portfolioCommands = {
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
            "                     └── Computer Science & Engineering",
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
            "💼 Preferred: Professional networking platforms",
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
    }
};