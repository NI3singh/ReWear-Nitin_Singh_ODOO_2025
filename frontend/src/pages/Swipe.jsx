import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {cards.length > 0 ? (
        <>
          {/* Left Arrow */}
          <motion.button
            className="absolute left-6 z-50 rounded-full p-3 bg-maroon-700 text-white shadow-lg border border-maroon-900 hover:bg-maroon-800 transition-all duration-200"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.15 }}
            onClick={() => cards[cards.length - 1].ref.current.swipe("left")}
          >
            <ArrowLeftIcon className="h-7 w-7" />
          </motion.button>
  
          {/* Right Arrow */}
          <motion.button
            className="absolute right-6 z-50 rounded-full p-3 bg-maroon-700 text-white shadow-lg border border-maroon-900 hover:bg-maroon-800 transition-all duration-200"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.15 }}
            onClick={() => cards[cards.length - 1].ref.current.swipe("right")}
          >
            <ArrowRightIcon className="h-7 w-7" />
          </motion.button>
  
          {/* Cards */}
          {cards.map((card, index) => (
            <Card
              key={card.id}
              {...card}
              cards={cards}
              setCards={setCards}
              index={index}
            />
          ))}
        </>
      ) : (
        <motion.div
          className="text-center text-maroon-800 font-bold text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🎉 You’ve seen all the sneakers!
        </motion.div>
      )}
    </div>
  );  
};

const Card = ({ id, url, title, description, cards, setCards, index }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-15, 15]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const isFront = index === cards.length - 1;
  const rotate = useTransform(rotateRaw, (r) =>
    isFront ? r : r + (index % 2 ? 5 : -5)
  );

  const ref = useRef({ swipe: () => {} });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 120) {
      setCards((prev) => prev.filter((c) => c.id !== id));
    }
  };

  // Expose swipe function
  ref.current.swipe = (direction) => {
    if (!isFront) return;
    const target = direction === "left" ? -500 : 500;
    animate(x, target, {
      duration: 0.3,
      onComplete: () => {
        setCards((prev) => prev.filter((c) => c.id !== id));
      },
    });
  };

  // Attach ref to card
  cardData[index].ref = ref;

  return (
    <motion.div
      className="absolute rounded-lg shadow-xl border-4 border-maroon overflow-hidden"
      style={{
        x,
        opacity,
        rotate,
        width: 500,
        height: 700,
        zIndex: index,
        cursor: isFront ? "grab" : "auto",
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
    >
      <img
        src={url}
        alt=""
        className="w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent w-full p-4 pointer-events-none">
        <h2 className="text-white text-5xl font-bold">{title}</h2>
        <br />
        <p className="text-white text-lg">{description}</p>
      </div>
    </motion.div>
  );
};

export default SwipeCards;

const cardData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Red Sneaker",
    description: "Bold and vibrant, perfect for a casual day out.",
    ref: React.createRef(),
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "White Sneaker",
    description: "Clean and classic, a must-have for any wardrobe.",
    ref: React.createRef(),
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Black Sneaker",
    description: "Sleek and stylish, ideal for urban adventures.",
    ref: React.createRef(),
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "High-Top Sneaker",
    description: "Retro vibes with modern comfort.",
    ref: React.createRef(),
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Blue Sneaker",
    description: "Cool tones for a standout look.",
    ref: React.createRef(),
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Patterned Sneaker",
    description: "Unique design for those who dare to be different.",
    ref: React.createRef(),
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Minimalist Sneaker",
    description: "Simple yet sophisticated, perfect for any occasion.",
    ref: React.createRef(),
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Vintage Sneaker",
    description: "Timeless style with a nostalgic twist.",
    ref: React.createRef(),
  },
];
