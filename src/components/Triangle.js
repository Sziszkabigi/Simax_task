import React from "react";

const Triangle = ({ width = 0, height = 0, fill = "black" } = {}) => {
  return (
    <svg width={width} height={height}>
      <path
        fill={fill}
        d={`M 120 0 L ${width} ${height / 2.3} L 180  600 L 0 0`}
      />
    </svg>
  );
};

export default Triangle;
