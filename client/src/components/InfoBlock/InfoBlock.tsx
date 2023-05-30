import box from "../../assets/box.png";
import React from "react";
import "./InfoBlock.scss";

export const InfoBlock = () => {
  return (
    <>
      <hr />
      <div className="info-block">
        <ul className="info-block__list">
          <li className="info-block__item">Total supply: 777</li>
          <li className="info-block__item">Mint price: TBA</li>
          <li className="info-block__item">Mint date: TBA</li>
          <li className="info-block__item">Blockchain: Solana</li>
          {/*<li className="info-block__item">NFT Standard: Metaplex</li>*/}
        </ul>
        <img className="info-block__box" src={box} alt="" />
      </div>
      <hr />
    </>
  );
};
