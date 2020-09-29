import React, { useState } from "react";

function ColorBox() {
  const [color, setColor] = useState("red");
  const [shape, setShape] = useState("square");
  return (
    <div className="ColorBox">
      <div
        style={{
          backgroundColor: color,
          width: "50px",
          height: "50px",
          borderRadius: shape == "circle" ? "50%" : 0,
        }}
        onClick={() => setColor(color == "red" ? "green" : "red")}
      ></div>
      <button onClick={() => setShape("circle")}>Change to circle</button>
      <button onClick={() => setShape("square")}>Change to Square</button>
    </div>
  );
}

export default ColorBox;
