import React from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
  AnimatedLinkSpan,
} from "@/components/magicui/terminal";
import { MdWindow } from "react-icons/md";
import TerminalHeader from "./TerminalHeader";

const TerminalSim = () => {
  return (
    <div className="w-[450px] ">
      <Terminal sequence>
        <TypingAnimation
          duration={250}
          delay={500}
          containerBefore={
            <TerminalHeader />
            //   <div className="inline-block mr-2 text-green-500">asdasd</div>
          }
        >
          &gt; npm install
        </TypingAnimation>
        <TypingAnimation
          duration={150}
          delay={100}
          containerBefore={
            <TerminalHeader />
            //   <div className="inline-block mr-2 text-green-500">asdasd</div>
          }
        >
          &gt; npm install -D tailwindcss postcss autoprefixer
        </TypingAnimation>
        <TypingAnimation
          duration={150}
          delay={100}
          containerBefore={
            <TerminalHeader />
            //   <div className="inline-block mr-2 text-green-500">asdasd</div>
          }
        >
          &gt; npx tailwindcss init -p
        </TypingAnimation>
        <AnimatedSpan className="text-green-500">
          ✔ TailwindCSS initialized.
        </AnimatedSpan>
        <TypingAnimation
          duration={150}
          delay={100}
          containerBefore={
            <TerminalHeader />
            //   <div className="inline-block mr-2 text-green-500">asdasd</div>
          }
        >
          &gt; npm run devv
        </TypingAnimation>
        <AnimatedSpan className="text-red-500">
        ❌ Command not found. Did you mean 'npm run dev'?
        </AnimatedSpan>
        <TypingAnimation
          duration={120}
          delay={200}
          containerBefore={
             <TerminalHeader err={true} />
            //   <div className="inline-block mr-2 text-green-500">asdasd</div>
          }
        >
          npm run dev
        </TypingAnimation>
        <AnimatedSpan className="">
          &gt; myportfolio-benryanrinconada@0.0.0 dev
        </AnimatedSpan>
        <AnimatedSpan className="">&gt; vite</AnimatedSpan>
        <AnimatedSpan className="">&gt; VITE v7.0.0  ready in 622 ms</AnimatedSpan>

        <AnimatedLinkSpan
          label="⤷ Local:"
          href="http://localhost:5173"
          delay={100}
          startOnView={true}
          className="mb-2"
          labelClassName="mr-1"
          linkClassName=""
        >
        localhost:5173
        </AnimatedLinkSpan>

        <AnimatedLinkSpan
          label="⤷ Web: "
          href="https://ben-ryan-rinconada.vercel.app"
          delay={300}
          startOnView={true}
        >
        ben-ryan-rinconada.vercel.app
        </AnimatedLinkSpan>
      </Terminal>
    </div>
  );
};

export default TerminalSim;
