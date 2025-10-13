import { FILE_SYSTEM } from '../constants';

export const renderFileContent = (filePath) => {
  const getFileNode = (path) => {
    // Handle different path formats
    if (path === '/portfolio/README.md') {
      return FILE_SYSTEM.portfolio.children['README.md'];
    } else if (path.startsWith('/portfolio/src/')) {
      const fileName = path.split('/').pop();
      return FILE_SYSTEM.portfolio.children.src.children[fileName];
    } else if (path.startsWith('/portfolio/')) {
      const fileName = path.split('/').pop();
      return FILE_SYSTEM.portfolio.children[fileName];
    }
    return null;
  };

  const fileNode = getFileNode(filePath);

  switch (fileNode?.content) {
    case 'main':
      return `# SHIVAM.EXE - Portfolio

## 🚀 Frontend Developer | Web3 Specialist

> **Status**: Open to opportunities
> **Location**: Darbhanga, Bihar, India

### 🔥 Quick Stats
- **2+ Years Experience** - Professional frontend development
- **Award Winner** - HackOdisha 5.0 - Verbwire Track

### 🛠️ Tech Stack
- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Web3**: Solidity, Web3.js, Hardhat, Smart Contracts
- **Tools**: Git, Docker, Vercel, Firebase

### 📁 Project Structure
\`\`\`
portfolio/
├── README.md          # This overview
├── src/
│   ├── about.md       # Personal & professional info
│   ├── skills.md      # Technical skills & expertise
│   ├── projects.md    # Featured projects
│   ├── experience.md  # Work experience
│   └── contact.md     # Contact information
└── package.json       # Dependencies & scripts
\`\`\`

### 🎯 Current Focus
- Building modern, responsive web applications
- Exploring Web3 and blockchain technologies
- Seeking senior developer opportunities

---
*Last updated: ` + new Date().toLocaleDateString() + `*`;

    case 'about':
      return `# About Shivam

## 👨‍💻 Professional Profile

**Frontend Developer with 2+ years of experience** building modern web applications and exploring decentralized web technologies.

### 🎓 Education
- **B.Tech Computer Science & Engineering**
- **JECRC University** (2019-2023)
- Specialized in web technologies and algorithms

### 💼 Professional Summary
Passionate developer with expertise in React ecosystem and Web3 technologies. Currently seeking opportunities with high package to contribute to innovative projects and grow as a senior developer.

### 🌍 Location & Availability
- **Location**: Darbhanga, Bihar, India
- **Work Preferences**: Remote • Hybrid • On-site
- **Status**: Actively looking for new opportunities

### 🔗 Connect
- **LinkedIn**: /in/shivam-nilay
- **GitHub**: github.com/brainDensed

---
*Crafted with ❤️ using modern web technologies*`;

    case 'skills':
      return `# Technical Skills

## ⚡ Core Competencies

### 🎯 Expertise Levels
- **Expert (90-95%)**: React, Next.js, TypeScript, Performance Optimization
- **Advanced (85-90%)**: Web3, Solidity, Smart Contracts
- **Intermediate (70-85%)**: Node.js, Express, MongoDB

### 🛠️ Technology Stack

#### Frontend Development
- **React & Next.js** - Modern React development
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **State Management** - Redux, Zustand, Context API

#### Web3 & Blockchain
- **Solidity** - Smart contract development
- **Web3.js** - Blockchain integration
- **Hardhat** - Development environment
- **MetaMask** - Wallet integration

#### Tools & DevOps
- **Git** - Version control
- **Docker** - Containerization
- **Vercel** - Deployment platform
- **Firebase** - Backend services

### 📊 Skill Radar
\`\`\`
React & Next.js     ████████████████████ 95%
Web3 & Solidity     █████████████████  85%
TypeScript          ███████████████████  90%
Performance         █████████████████  88%
\`\`\`

---
*Continuously learning and adapting to new technologies*`;

    case 'projects':
      return `# Featured Projects

## 🚀 Project Portfolio

### 🏆 Award-Winning Projects

#### **Theramine** - *Web3 Therapy Platform*
> **Tech Stack**: React, Solidity, Web3.js, Hardhat
> **Achievement**: 🏆 HackOdisha 5.0 Winner (Verbwire Track)
> **Impact**: Secure Web3 chat between therapist and user

\`\`\`javascript
// Key Features
- Web3 authentication
- Encrypted messaging
- Smart contract integration
- Real-time communication
\`\`\`

#### **Genoroot** - *AI Hair Analysis Platform*
> **Duration**: Oct 2024 - Mar 2025
> **Tech Stack**: React, Redux, Tailwind, Firebase
> **Performance**: ⚡ 15% faster loading, 🚀 20% dev speed boost

#### **Planetdoctor** - *Location-based Doctor Discovery*
> **Duration**: Sep 2024 - Dec 2024
> **Features**: 🌍 Location-based search, 🌐 Multilingual support
> **Impact**: ⚡ 15% faster booking, 🇪🇸 Spanish/English support

#### **AuthBase** - *Production Authentication System*
> **Duration**: Apr 2025 - May 2025
> **Tech Stack**: React, JWT, Redis, Docker, AWS
> **Security**: 🔐 JWT + Session-based authentication

#### **MaxLink-Health** - *IoT Health Monitoring*
> **Duration**: Dec 2023 - Apr 2024
> **Innovation**: ⏰ Time-based billing system
> **Tech Stack**: React, IoT Integration, Real-time APIs

### 📈 Project Impact
- **5+ Major Projects** delivered
- **25% Development Time** reduction
- **30% Team Efficiency** improvement

---
*Each project demonstrates problem-solving and technical excellence*`;

    case 'experience':
      return `# Professional Experience

## 💼 Career Journey

### 🚀 Junior Developer
**Dreamsoft4u Pvt. Ltd** | Jaipur, Rajasthan
*Feb 2023 - Mar 2025*

#### 🎯 Key Achievements
- ✅ **Developed 5+ projects** & reusable components
- ⚡ **Cut development time by 25%** through optimization
- 👥 **Mentored junior developers** with pair programming
- 📈 **Increased team efficiency by 30%**

#### 🛠️ Technical Contributions
- Built responsive web applications
- Implemented modern React patterns
- Optimized performance and user experience
- Collaborated in Agile development teams

### 🎓 Computer Science & Engineering
**JECRC University** | Jaipur, Rajasthan
*Aug 2019 - Aug 2023*

#### 📚 Academic Foundation
- **Strong foundation** in algorithms & data structures
- **Specialized** in web technologies
- **Hands-on projects** in modern frameworks

### 🌟 Career Highlights
- **Consistent delivery** of high-quality code
- **Continuous learning** and skill development
- **Team collaboration** and mentorship
- **Problem-solving** approach to challenges

---
*Building a strong foundation for senior developer roles*`;

    case 'contact':
      return `# Contact Information

## 📞 Get In Touch

### 👤 Personal Details
- **Name**: Shivam
- **Role**: Frontend Developer | Web3 Specialist
- **Location**: Darbhanga, Bihar, India

### 🔗 Social Links
- **LinkedIn**: [/in/shivam-nilay](https://linkedin.com/in/shivam-nilay)
- **GitHub**: [github.com/brainDensed](https://github.com/brainDensed)

### 📍 Location & Preferences
- **Current Location**: Darbhanga, Bihar, India
- **Work Type**: Remote • Hybrid • On-site
- **Availability**: Open to opportunities

### 💰 Package Expectations
- **Experience Level**: Mid to Senior Developer
- **Notice Period**: Immediate to 30 days

### 🚀 Current Status
\`\`\`
🟢 Open to Opportunities
Actively seeking new challenges
Ready for senior roles
\`\`\`

### 📧 Contact Methods
- **LinkedIn DM**: Preferred for professional opportunities
- **Email**: Available upon request
- **GitHub**: Check out my code and contributions

---
*Looking forward to connecting and exploring opportunities!*`;

    case 'package':
      return `# Package Configuration

## 📦 Project Dependencies

\`\`\`json
{
  "name": "shivam-portfolio",
  "version": "1.0.0",
  "description": "Modern portfolio showcasing Web3 and frontend expertise",
  "main": "app/page.js",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^19.0.0",
    "next": "^15.1.3",
    "framer-motion": "^10.0.0",
    "tailwindcss": "^3.0.0"
  },
  "keywords": [
    "portfolio",
    "web3",
    "react",
    "nextjs",
    "frontend"
  ],
  "author": "Shivam",
  "license": "MIT"
}
\`\`\`

### 🛠️ Development Setup
\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

### 📁 Project Structure
\`\`\`
portfolio/
├── app/                 # Next.js app directory
│   ├── components/      # React components
│   ├── contexts/        # React contexts
│   └── globals.css      # Global styles
├── public/              # Static assets
└── lib/                 # Utility functions
\`\`\`

---
*Built with modern web technologies and best practices*`;

    default:
      return `# File Not Found

The requested file could not be loaded or does not exist.

### Available Files
- \`README.md\` - Project overview
- \`src/about.md\` - Personal information
- \`src/skills.md\` - Technical skills
- \`src/projects.md\` - Project portfolio
- \`src/experience.md\` - Work experience
- \`src/contact.md\` - Contact information
- \`package.json\` - Project configuration

---
*Navigate using the file explorer on the left*`;
  }
};