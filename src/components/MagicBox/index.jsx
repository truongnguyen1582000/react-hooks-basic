import React from "react";
import useMagicColor from "../../hooks/useMagicColor";
import "./style.scss";

function MagicBox(props) {
  const color = useMagicColor();
  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
