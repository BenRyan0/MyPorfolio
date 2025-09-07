import React from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

const TerminalSim = () => {
  return (
    <div className="w-[450px]">
      <Terminal>
        {/* Create Vite + React project */}
        <TypingAnimation>&gt; pnpm create vite@latest mern-app</TypingAnimation>
        <AnimatedSpan className="text-green-500">
          ✔ Project created successfully.
        </AnimatedSpan>

        {/* Move into project */}
        <TypingAnimation>&gt; cd mern-app</TypingAnimation>

        {/* Install dependencies */}
        <TypingAnimation>&gt; pnpm install</TypingAnimation>
        <AnimatedSpan className="text-green-500">
          ✔ Dependencies installed.
        </AnimatedSpan>

        {/* Install Tailwind */}
        <TypingAnimation>
          &gt; pnpm install -D tailwindcss postcss autoprefixer
        </TypingAnimation>
        <TypingAnimation>&gt; pnpx tailwindcss init -p</TypingAnimation>
        <AnimatedSpan className="text-green-500">
          ✔ TailwindCSS initialized.
        </AnimatedSpan>

        {/* Install backend (Express + MongoDB) */}
        <TypingAnimation>
          &gt; pnpm add express mongoose cors dotenv
        </TypingAnimation>
        <AnimatedSpan className="text-green-500">
          ✔ Backend dependencies installed.
        </AnimatedSpan>

        {/* Run dev server */}
        <TypingAnimation>&gt; pnpm run dev</TypingAnimation>
        <AnimatedSpan className="text-green-500">
          ✔ Vite dev server running at http://localhost:5173
        </AnimatedSpan>

        <TypingAnimation className="text-muted-foreground">
          MERN + TailwindCSS project setup completed 🎉
        </TypingAnimation>
      </Terminal>
    </div>
  );
};

export default TerminalSim;
