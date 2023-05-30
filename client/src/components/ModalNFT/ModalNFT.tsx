import React, { useEffect } from "react";
import { ModalContext } from "../../pages/MainPage";
import "./ModalNFT.scss";
import close from "../../assets/close.svg";
import { Button } from "../Button/Button";

export const ModalNFT = () => {
  const { isModalOpen, setIsModalOpen, description, image } =
    React.useContext(ModalContext);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsModalOpen(false);
        }
      }}
      className="modal-container"
    >
      <div className="modal">
        <img className="modal__image" src={image} alt="nft" />
        <p className="modal__description">{description}</p>
        <span className="modal__close" onClick={() => setIsModalOpen(false)}>
          <img src={close} alt="close" />
        </span>
        <Button onClick={() => setIsModalOpen(false)} className="modal__button">
          CLOSE
        </Button>
      </div>
    </div>
  );
};
