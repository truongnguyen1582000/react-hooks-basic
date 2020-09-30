import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["pink", "green", "red", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("BOX_COLOR") || "pink";
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("BOX_COLOR", newColor);
  }

  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: color }}
      onClick={() => handleBoxClick()}
    >
      Click to change color !
    </div>
  );
}

export default ColorBox;
