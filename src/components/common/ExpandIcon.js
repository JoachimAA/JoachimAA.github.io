import React from "react";

const ExpandIcon = () => {
  return (
    <div>
      <svg
        style={{
          stroke: "#000",
          strokeWidth: "1",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
        }}
        width="12"
        height="12"
      >
        <polyline points="0 0 6 7 12 0"></polyline>
      </svg>
    </div>
  );
};

export default ExpandIcon;
