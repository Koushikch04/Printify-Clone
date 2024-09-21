import React from "react";
import "./Triangle.css";

const Triangle = ({ color = "white", direction = "up" }) => {
  return (
    <div
      className={`triangle triangle-${direction}`}
      style={{ borderBottomColor: color }}
    ></div>
  );
};

export default Triangle;
