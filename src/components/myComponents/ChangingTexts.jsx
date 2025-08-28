import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GraphemeSplitter from "grapheme-splitter";

export const ChangingTexts = () => {
  return (
    <div className="flex items-center justify-center mb-2 ">
      <BlockInTextCard
        examples={[
          "👩🏻‍💻  I Code",
          "💪🏽  I Lift",
          "🏍️  I Travel",
        ]}
      />
    </div>
  );
};

const BlockInTextCard = ({ examples }) => {
  return (
    <div>
      <Typewrite examples={examples} />
    </div>
  );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const splitter = new GraphemeSplitter();

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  const chars = splitter.splitGraphemes(examples[exampleIndex]);

  return (
    <p className="font-bold uppercase text-xl">
      <span className="ml-3">
        {chars.map((l, i) => (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-white"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};
