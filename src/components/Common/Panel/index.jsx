import React from "react";
import cn from "classnames";

import "./index.sass";

const Panel = ({
  onClick,
  className,
  children,
  width,
  height,
  backgroundColor,
  color,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn("panel", className)}
      style={{ width, height, backgroundColor, color }}
    >
      {children}
    </div>
  );
};

export default Panel;
