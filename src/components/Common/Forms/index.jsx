import React from "react";
import cn from "classnames";

import "./index.sass";

export const Select = ({ items, rounded }) => {
  return (
    <select className={cn("select", { 'select__rounded': rounded })}>
      {items.map((i) => (
        <option value={i} key={i}>
          {i}
        </option>
      ))}
    </select>
  );
};
