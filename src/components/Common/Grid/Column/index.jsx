import React from "react";
import cn from "classnames";

import "./index.sass";

export const Columns = ({ children, columns }) => {
  return (
    <div className="columns" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {children}
    </div>
  );
};
