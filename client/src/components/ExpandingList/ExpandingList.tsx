import triangle from "../../assets/triangle.svg";
import grayTriangle from "../../assets/gray-triangle.svg";
import lockIcon from "../../assets/lock-icon.svg";
import React, { useEffect, useRef, useState } from "react";
import "./ExpandingList.scss";

export const ExpandingList: React.FC<{
  headerValue: React.ReactNode;
  className?: string;
  listValue: React.ReactNode;
  getIsOpen?: (isOpen: boolean) => void;
  duration?: number;
  isDisabled?: boolean;
}> = ({
  headerValue,
  className,
  listValue,
  getIsOpen,
  duration = 300,
  isDisabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ul = useRef<HTMLUListElement>(null);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    if (getIsOpen) getIsOpen(isOpen);

    if (ul.current) {
      ul.current.style.transition = `max-height ${duration}ms ease`;
      const height = ul.current.scrollHeight;
      ul.current.style.maxHeight = `${isOpen ? height : 0}px`;
    }
  }, [isOpen]);
  return (
    <div className={`expanding-list ${className ? className : ""}`}>
      <div
        className="expanding-list__header"
        onClick={() => {
          if (isBlocked || isDisabled) return;
          setIsOpen((prevState) => !prevState);
          setIsBlocked(true);
          setTimeout(() => {
            setIsBlocked(false);
          }, duration);
        }}
      >
        <div className={`expanding-list__title`}>{headerValue}</div>
        <div>
          {isDisabled && (
            <img
              className="expanding-list__icon"
              src={lockIcon}
              alt="lock-icon"
            />
          )}
          <img
            style={{ transform: isOpen ? "rotate(180deg)" : "" }}
            className="expanding-list__icon"
            alt="triangle-icon"
            src={isDisabled ? grayTriangle : triangle}
          />
        </div>
      </div>
      <ul ref={ul} className="expanding-list__ul">
        {listValue}
      </ul>
    </div>
  );
};
