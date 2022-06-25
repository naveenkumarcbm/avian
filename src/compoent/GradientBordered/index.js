import React from "react";

const GradientBordered = ({ children }) => {
  return (
    <div className="gradient-container">
      <div className="gradient-wrap">
        <div className="gradient">{children}</div>
      </div>
    </div>
  );
};

export default GradientBordered;
