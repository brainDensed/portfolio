import React from "react";
import Particles from "./components/ui/particles";
import TextRevealByWord from "./components/ui/text-reveal";
import IconCloud from "./components/ui/icon-cloud";
import './App.css'
import HyperText from "./components/ui/hyper-text";

function App() {
  const skills = [
    "I am Shivam, a passionate developer with 2 years of experience in React.js.",
    "I've completed 6 projects, and that number is only growing.",
    "I'm deeply interested in AI, ML, and trading, and I aim to stay updated in this industry.",
  ];

  const slugs = [
    "typescript",
    "javascript",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
  ];

  return (
    <>
      {/* Header Section */}
        <Particles className="h-[200px]" quantity={500} color="#FFFFFF" refresh />
        <HyperText
          className="text-white text-6xl font-bold text-right mb-4" // Adjust margin as needed
          text="SHIVAM"
        />
      {/* Skills Section */}
      <div className="z-10 flex flex-col min-h-64 items-center justify-center space-y-4 p-4 rounded-lg border bg-background md:shadow-xl">
        {skills.map((skill, index) => (
          <TextRevealByWord key={index} text={skill} className="text-white" />
        ))}
      </div>

      {/* Icon Cloud Section */}
      <div className="relative flex items-center justify-center mt-8 rounded-lg border bg-background p-10 shadow-lg">
        <IconCloud iconSlugs={slugs} />
      </div>
    </>
  );
}

export default App;
