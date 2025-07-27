import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import {motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";

const cardData = [
  {
    id: 1,
    url: "/images/MyGradImage.jpg",
    label: "Sunset Ride",
  },
  {
    id: 2,
    url: "/images/GymImage.jpg",
    label: "Sunset Ride",
  },
  {
    id: 3,
    url: "/images/TravelImage.jpg",
    label: "Sunset Ride",
  },
];

export default function InfiniteSwipe() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [exitingCardId, setExitingCardId] = useState(null);
  const len = cardData.length;

  const handleSwipe = (cardId) => {
    setExitingCardId(cardId); // mark card for exit
    setTimeout(() => {
      setExitingCardId(null); // clean up after exit
    }, 300);

    setCurrentIdx((prev) => (prev + 1) % len);
  };

  return (
    <div className="relative h-[400px] w-[450px] overflow-hidden">
      {cardData.map((card, idx) => {
        const stackIndex = (idx - currentIdx + len) % len;

        // Don't render the card if it's animating out
        if (card.id === exitingCardId && stackIndex !== 0) return null;

        return (
          <Card
            key={card.id}
            url={card.url}
            stackIndex={stackIndex}
            onSwipe={() => handleSwipe(card.id)}
            isFront={stackIndex === 0}
            label={card.label}
          />
        );
      })}
    </div>
  );
}

function Card({ url, stackIndex, onSwipe, isFront }) {
  const x = useMotionValue(0);
  const controls = useAnimation();

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const rotate = useTransform(rotateRaw, (r) => {
    const offset = isFront ? 0 : stackIndex % 2 ? 3 : -3;
    return `${r + offset}deg`;
  });
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const handleDragEnd = () => {
    const swipeThreshold = 70; // or even 80 for a quicker swipe

    if (Math.abs(x.get()) > swipeThreshold && isFront) {
      const direction = x.get() > 0 ? 1 : -1;
      controls
        .start({
          x: direction * 1000,
          opacity: 0,
          transition: { duration: 0.3 },
        })
        .then(() => {
          onSwipe(); // trigger next card
          x.set(0); // reset drag position
        });
    }
  };

  return (
    <motion.img
      src={url}
      alt=""
      className="absolute left-1/2 top-8 h-[340px] w-[280px] origin-bottom rounded-lg object-cover cursor-grab active:cursor-grabbing border-2 border-zinc-700 shadow-md shadow-gray-900"
      style={{
        x,
        rotate,
        opacity,
        translateX: "-50%",
        zIndex: 10 - stackIndex,
        boxShadow: isFront
          ? "0 20px 25px -5px rgba(0,0,0,0.5), 0 8px 10px -6px rgba(0,0,0,0.5)"
          : undefined,
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
      animate={controls}
    />
  );
}
