import React, { useState } from "react";
import { HeaderFox } from "../HeaderFox/HeaderFox";
import lfcGif from "../../assets/main-gif.gif";
import "./Intro.scss";

export const Intro = () => {
  const [_, setPosition] = useState({ x: window.outerWidth, y: 350 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const boundingRect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - boundingRect.left;
    const y = event.clientY - boundingRect.top;
    setPosition({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setPosition({ x: window.outerWidth / 2, y: 350 });
      }}
      className="intro"
    >
      <div className="intro__gif-wrapper">
        <img alt="gif" src={lfcGif} className="lfc-gif"></img>
      </div>
      {/*<HeaderFox position={position}></HeaderFox>*/}
      <p className="intro__text">
        <span>
          JINNS club is a community of gambling genies in the NFT space,
          featuring a distinctive gaming experience. The collection strives to
          become a leader in its unique platform, focusing on long-term
          performance in the meta-universe. Also JINNS consists of many
          different attributes, which contributes to the exceptional possible
          combinations, of which, in turn, more than 500 thousand. The JINNS
          Club is a virtuous community that will grow the arts into something
          more.
        </span>
      </p>
    </div>
  );
};
