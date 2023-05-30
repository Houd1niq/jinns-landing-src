import React from "react";
import "./BlockTitle.scss";

export const BlockTitle: React.FC<{ value: string; id?: string }> = ({
  value,
  id,
}) => {
  return (
    <div id={id} className="block-title-wrapper">
      <div className="block-title-line"></div>
      <h2 className="block-title-text">{value}</h2>
      <div className="block-title-line"></div>
    </div>
  );
};
