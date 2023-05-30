import React from "react";
import "./Button.scss";

export const Button: React.FC<{
  children: React.ReactNode;
  onClick?: (...args: any[]) => void;
  className?: string;
}> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};
