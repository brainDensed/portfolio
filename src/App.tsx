import React from "react";
import Particles from "./components/ui/particles";
import TextRevealByWord from "./components/ui/text-reveal";
import IconCloud from "./components/ui/icon-cloud";
import "./App.css";
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
      <div className="border-b-2 border-white">
        <Particles
          className="h-[100px]"
          quantity={500}
          color="#FFFFFF"
          refresh
        />
        <HyperText
          className="text-white text-6xl font-bold text-right mb-4" // Adjust margin as needed
          text="SHIVAM"
        />
      </div>
      {/* Skills Section */}
      <div className="z-10 flex flex-col min-h-64 items-center justify-center space-y-4 p-4 rounded-lg">
        {skills.map((skill, index) => (
          <TextRevealByWord key={index} text={skill} className="text-white" />
        ))}
      </div>

      {/* Icon Cloud Section */}
      <div className="relative flex items-center h-[300px] justify-center mt-8 rounded-lg bg-background p-10">
        {/* IconCloud positioned in the background */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <IconCloud iconSlugs={slugs} />
        </div>

        {/* Text content in the foreground */}
        <div className="relative text-white text-xl w-[60%] z-10">
          In my 2 years of experience I have gained expertise in React,
          JavaScript, Typescript and versioning tools. Apart from that, I have
          good knowledge of Data Structures and Algorithms.
        </div>
      </div>
    </>
  );
}

export default App;
