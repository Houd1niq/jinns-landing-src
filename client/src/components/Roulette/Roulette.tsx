import React, { useState } from "react";
import "./Roulette.scss";
import shirt from "../../assets/images/collection/rubashka.png";
import nft1 from "../../assets/images/collection/nft1.png";
import nft2 from "../../assets/images/collection/nft2.png";
import nft3 from "../../assets/images/collection/nft3.png";
import nft4 from "../../assets/images/collection/nft4.png";
import nft5 from "../../assets/images/collection/nft5.png";
import { Button } from "../Button/Button";
import { ModalContext } from "../../pages/MainPage";

const ROULETTE_TIME = 8000;

type TUniqueItem = {
  img: string;
  isOpened: boolean;
  description?: string;
};

function firstUnique(uniqueItems: TUniqueItem[]) {
  for (let i = 0; i < uniqueItems.length; i++) {
    if (!uniqueItems[i].isOpened) {
      return uniqueItems[i];
    }
  }
  return uniqueItems[Math.floor(Math.random() * uniqueItems.length)];
}

function getRandomMargin() {
  const min = (-window.innerWidth * 0.2) / 2;
  const max = (window.innerWidth * 0.2) / 2;
  let randomMargin: number = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randomMargin > 180) randomMargin = 175;
  if (randomMargin < -180) randomMargin = -175;
  return `${randomMargin}px`;
}

export const Roulette = () => {
  const { isModalOpen, setIsModalOpen, setDescription, setImage } =
    React.useContext(ModalContext);

  const [uniqueItems, setUniqueItems] = useState<TUniqueItem[]>([
    {
      img: nft1,
      isOpened: false,
    },
    { img: nft2, isOpened: false },
    // {
    //   img: secretNft,
    //   isOpened: false,
    //   description:
    //     "A secret LFC collection created especially for owners of the @Pioneer role.  NFT Fox consists of more than 285 unique attributes in beautiful and graceful drawings. Expect more details soon.",
    // },
    { img: nft3, isOpened: false },
    { img: nft4, isOpened: false },
    { img: nft5, isOpened: false },
  ]);

  const [rouletteItems, setRouletteItems] = useState(
    Array(40).fill({ img: nft1, isOpened: false })
  );
  const [isSpinning, setIsSpinning] = useState(false);
  const container = React.useRef<HTMLDivElement>(null);

  function spin() {
    if (isSpinning) return;
    setIsSpinning(true);
    const pool: { img: string; isOpened: boolean }[] = [];
    const uniqueItem = firstUnique(uniqueItems);
    for (let i = 0; i < 40; i++) {
      if (i === 30) {
        pool.push(uniqueItem);
        continue;
      }
      const randomItem =
        uniqueItems[Math.floor(Math.random() * uniqueItems.length)];
      pool.push(randomItem);
    }
    setRouletteItems([]);
    if (container.current)
      container.current.className = container.current?.className.replace(
        " animate-scroll",
        ""
      );
    // container.current?.classList.remove("animate-scroll");
    setRouletteItems(pool);
    setTimeout(() => {
      if (container.current) container.current.className += " animate-scroll";
      container.current?.style.setProperty("margin-left", getRandomMargin());
    }, 100);

    setTimeout(() => {
      setIsSpinning(false);
      setUniqueItems(
        uniqueItems.map((item) => {
          if (item.img === uniqueItem.img) {
            return { ...item, isOpened: true };
          }
          return item;
        })
      );
      setRouletteItems((prevState) => {
        return prevState.map((item) => {
          if (item.img === uniqueItem.img) {
            return { ...item, isOpened: true };
          }
          return item;
        });
      });

      setTimeout(() => {
        console.log(uniqueItem);
        // if (uniqueItem.description) {
        //   setImage(uniqueItem.img);
        //   setDescription(uniqueItem.description);
        //   setIsModalOpen(true);
        // }
      }, 200);
    }, ROULETTE_TIME);
  }

  return (
    <div className="roulette">
      <div className="roulette-container">
        <span className="roulette-container__pointer"></span>
        <div className="roulette-container__inner" ref={container}>
          {rouletteItems.map((item, idx) => (
            <div
              data-testid={idx === 30 ? "unique-item" : ""}
              key={`${idx}${item.img}`}
              className={`roulette-container__item roulette-card ${
                item.isOpened ? "flip-card" : ""
              }`}
            >
              <div className="roulette-card__face roulette-card__face--front">
                <img
                  className="roulette__container__item--img"
                  src={shirt}
                  alt="shirt"
                />
              </div>
              <div className="roulette-card__face roulette-card__face--back">
                <img
                  className="roulette__container__item--img"
                  src={item.img}
                  alt="image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button className="roulette__button" onClick={spin}>
        ARY YOU WITH US?
      </Button>
    </div>
  );
};
