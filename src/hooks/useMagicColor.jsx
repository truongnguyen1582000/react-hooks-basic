import React, { useEffect, useRef, useState } from "react";

function getRandomColor(currentColor) {
  const COLOR_LIST = ["green", "blue", "purple", "orange", "black", "gray"];
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 6);
  }
  console.log(COLOR_LIST[newIndex]);
  return COLOR_LIST[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const newColor = getRandomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
