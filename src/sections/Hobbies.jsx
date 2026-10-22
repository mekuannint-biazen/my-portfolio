import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Code from "../images/Coding.png";
import Exercise from "../images/Exercising.jpg";
import Football from "../images/Football.jpg";
import Hiking from "../images/Hikinggg.jpg";
import Reading from "../images/Reading.jpeg";
import VideoGames from "../images/VideoGames.jpg";

const hobbies = [
  {
    name: "Coding",
    image: Code,
    description:
      "Building modern web applications, experimenting with new technologies, and continuously improving my programming skills.",
  },
  {
    name: "Exercising",
    image: Exercise,
    description:
      "Staying physically active helps me stay focused, disciplined, and productive in both work and life.",
  },
  {
    name: "Football",
    image: Football,
    description:
      "Football has taught me teamwork, communication, and the importance of consistency.",
  },
  {
    name: "Hiking",
    image: Hiking,
    description:
      "Exploring nature helps me recharge, clear my mind, and discover new perspectives.",
  },
  {
    name: "Reading",
    image: Reading,
    description:
      "I enjoy reading books about technology, software engineering, and personal development.",
  },
  {
    name: "Video Games",
    image: VideoGames,
    description:
      "Gaming improves creativity, strategic thinking, and problem-solving while being a fun way to relax.",
  },
];

const Hobbies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hobbies.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hobbies"
      className="relative py-24 overflow-hidden bg-background"
    >
      {/* Background Image */}
      <motion.div
        key={currentIndex}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${hobbies[currentIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#1A566E]/80 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl px-6 mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-5">
            Hobbies 
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-white/80">
            Technology is my passion, but these activities help me stay
            creative, balanced, and continuously inspired.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="relative h-[500px] bg-cover bg-center flex items-end"
                style={{
                  backgroundImage: `url(${hobbies[currentIndex].image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E3D] via-[#0F2E3D]/20 to-transparent" />

                <div className="relative p-10">
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {hobbies[currentIndex].name}
                  </h3>

                  <p className="max-w-xl text-lg text-white/85 leading-relaxed">
                    {hobbies[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {hobbies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-10 h-3 bg-primary"
                  : "w-3 h-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;