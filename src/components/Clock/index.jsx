import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useClock from "../../hooks/useClock";

function Clock(props) {
  const { timeString } = useClock();

  return <div style={{ fontSize: "42px" }}>{timeString}</div>;
}

export default Clock;
