import React from "react";

const ExpandIcon = () => {
  return (
    <div style={{ margin: "5px 0 0 5px" }}>
      <svg
        style={{
          stroke: "#000",
          strokeWidth: "1",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
          display: "block",
        }}
        width="10"
        height="10"
      >
        <polyline points="0 0 5 6 10 0"></polyline>
      </svg>
    </div>
  );
};

export default ExpandIcon;
