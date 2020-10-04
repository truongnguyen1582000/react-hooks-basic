import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2); // template string
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

function useClock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
