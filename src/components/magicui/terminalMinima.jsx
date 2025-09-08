"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { PiCopy } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";

const SequenceContext = createContext(null);
const useSequence = () => useContext(SequenceContext);
const ItemIndexContext = createContext(null);
const useItemIndex = () => useContext(ItemIndexContext);
// 1. After your existing exports, add:
export const AnimatedLinkSpan = ({
  label, // e.g. "Local:"
  href,
  target = "_blank", // optional anchor props
  rel = "noopener noreferrer",
  children, // link text
  className, // wrapper classes
  labelClassName, // label styling
  linkClassName, // anchor styling
  delay, // forwarded to AnimatedSpan
  startOnView, // forwarded to AnimatedSpan
}) => {
  return (
    <AnimatedSpan
      delay={delay}
      startOnView={startOnView}
      className={cn("inline-flex items-baseline gap-x-2", className)}
    >
      {/* static label */}
      {label && (
        <span className={cn("text-gray-500", labelClassName)}>{label}</span>
      )}

      {/* clickable link */}
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn("text-blue-400 underline", linkClassName)}
      >
        {children}
      </a>
    </AnimatedSpan>
  );
};

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  startOnView = false,
  ...props
}) => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, {
    amount: 0.3,
    once: true,
  });

  const sequence = useSequence();
  const itemIndex = useItemIndex();
  const [hasStarted, setHasStarted] = useState(false);
  useEffect(() => {
    if (!sequence || itemIndex === null) return;
    if (!sequence.sequenceStarted) return;
    if (hasStarted) return;
    if (sequence.activeIndex === itemIndex) {
      setHasStarted(true);
    }
  }, [sequence?.activeIndex, sequence?.sequenceStarted, hasStarted, itemIndex]);

  const shouldAnimate = sequence ? hasStarted : startOnView ? isInView : true;

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: -5 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
      transition={{ duration: 0.3, delay: sequence ? 0 : delay / 1000 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      onAnimationComplete={() => {
        if (!sequence) return;
        if (itemIndex === null) return;
        sequence.completeItem(itemIndex);
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const TypingAnimation = ({
  children,
  className,
  duration,
  delay,
  as: Component = "span",
  startOnView = true,
  containerBefore = null,
  ...props
}) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:");
  }

  const MotionComponent = useMemo(
    () =>
      motion.create(Component, {
        forwardMotionProps: true,
      }),
    [Component]
  );

  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, {
    amount: 0.3,
    once: true,
  });

  const sequence = useSequence();
  const itemIndex = useItemIndex();

  useEffect(() => {
    if (sequence && itemIndex !== null) {
      if (!sequence.sequenceStarted) return;
      if (started) return;
      if (sequence.activeIndex === itemIndex) {
        setStarted(true);
      }
      return;
    }

    if (!startOnView) {
      const startTimeout = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(startTimeout);
    }

    if (!isInView) return;

    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [
    delay,
    startOnView,
    isInView,
    started,
    sequence?.activeIndex,
    sequence?.sequenceStarted,
    itemIndex,
  ]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
        if (sequence && itemIndex !== null) {
          sequence.completeItem(itemIndex);
        }
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <>
      {started && containerBefore}

      <MotionComponent
        ref={elementRef}
        className={cn("text-xs font-normal tracking-tight my-sc", className)}
        {...props}
      >
        {displayedText}
      </MotionComponent>
    </>
  );
};

export const Terminal = ({
  children,
  className,
  sequence = true,
  startOnView = true,
  loop, // 🔽 new prop
  loopDelay = 7500, // delay before restart
}) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(containerRef, {
    amount: 0.3,
    once: false, // allow re-trigger
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [iteration, setIteration] = useState(0); // 🔽 track reruns
  const sequenceHasStarted = sequence ? !startOnView || isInView : false;

  const totalItems = Children.count(children);

  const contextValue = useMemo(() => {
    if (!sequence) return null;
    return {
      completeItem: (index) => {
        setActiveIndex((current) => {
          if (index === current) {
            return current + 1;
          }
          return current;
        });
      },
      activeIndex,
      sequenceStarted: sequenceHasStarted,
    };
  }, [sequence, activeIndex, sequenceHasStarted]);

  const wrappedChildren = useMemo(() => {
    if (!sequence) return children;
    const array = Children.toArray(children);
    return array.map((child, index) => (
      <ItemIndexContext.Provider key={`${iteration}-${index}`} value={index}>
        {child}
      </ItemIndexContext.Provider>
    ));
  }, [children, sequence, iteration]);

  // 🔽 Auto-scroll smoothly
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [wrappedChildren, activeIndex]);

  // 🔄 Reset when done
  useEffect(() => {
    if (loop && activeIndex >= totalItems) {
      const timeout = setTimeout(() => {
        setActiveIndex(0);
        setIteration((i) => i + 1); // re-key children so animations restart
      }, loopDelay);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex, loop, loopDelay, totalItems]);

  const content = (
    <div
      ref={containerRef}
      className={cn(
        "z-0 h-[200px] w-full max-w-lg  bg-opacity-0 overflow-y-hidden opacity-70 text-[1px]",
        className
      )}
    >

      {/* scrollable output */}
      <pre
        ref={scrollRef}
        className="overflow-y-scroll my-hidden-scroll-container p-4 h-[calc(100%-5px)]"
      >
        <code className="grid gap-y-1">{wrappedChildren}</code>
      </pre>
    </div>
  );

  if (!sequence) return content;

  return (
    <SequenceContext.Provider value={contextValue}>
      {content}
    </SequenceContext.Provider>
  );
};
