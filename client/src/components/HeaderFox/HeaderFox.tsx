import foxHead from "../../assets/head.png";
import foxNose from "../../assets/nose.png";
import foxEyes from "../../assets/eyes.png";
import "./HeaderFox.scss";
import React from "react";

export const HeaderFox: React.FC<{
  position: { x: number; y: number };
}> = ({ position }) => {
  const eyesRef = React.useRef<HTMLImageElement>(null);
  const noseRef = React.useRef<HTMLImageElement>(null);

  return (
    <div className="fox-wrapper">
      <div className="header-fox">
        <img className="fox-head" src={foxHead} alt="head" />
        <img
          style={{
            left: (position.x - window.outerWidth / 2) / 60,
            top: (position.y - 350) / 60,
          }}
          ref={eyesRef}
          className="fox-eyes"
          src={foxEyes}
          alt="eyes"
        />
        <img
          style={{
            left: (position.x - window.outerWidth / 2) / 200,
            top: (position.y - 350) / 200,
          }}
          ref={noseRef}
          className="fox-nose"
          src={foxNose}
          alt="nose"
        />
      </div>
    </div>
  );
};
