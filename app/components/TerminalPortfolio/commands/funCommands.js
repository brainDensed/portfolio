// Fun and entertainment commands
export const funCommands = {
    hack: () => ({
        output: [
            "🔐 INITIATING HACK SEQUENCE...",
            "",
            "[████████████████████████████████] 100%",
            "",
            "🚨 ACCESS GRANTED 🚨",
            "",
            "CLASSIFIED: SHIVAM'S SECRET ABILITIES",
            "══════════════════════════════════",
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
    }
};