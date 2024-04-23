import React, { useState, useEffect } from "react";
import Card from "./Card";
import { initalState } from "./data";

function Carousel() {
  const [cards, setCards] = useState(initalState);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        handleRightClick();
      }, 3000); // Change slide every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleLeftClick = () => {
    const nextIndex = (currentIndex - 1 + cards.length) % cards.length;
    setCurrentIndex(nextIndex);
    setIsRunning(false); // Pause the automatic sliding
  };

  const handleRightClick = () => {
    const nextIndex = (currentIndex + 1) % cards.length;
    setCurrentIndex(nextIndex);
    if (nextIndex === 2) {
      // Reset index to 0 if it reaches slide 2
      setCurrentIndex(0);
    }
    setIsRunning(true); // Resume automatic sliding
  };

  return (
    <>
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={handleLeftClick}
      >
        {"<"}
      </div>
      <Card prop={cards[currentIndex].text} />
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={handleRightClick}
      >
        {">"}
      </div>
    </>
  );
}

export default Carousel;
