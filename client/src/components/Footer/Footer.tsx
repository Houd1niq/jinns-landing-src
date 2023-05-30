import solana from "../../assets/images/socials/solana-active-icon.svg";
import discord from "../../assets/images/socials/discord-icon.svg";
import twitter from "../../assets/images/socials/twitter-icon.svg";

import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          jinns club©️ 2021-2023 All rights reserved
        </p>
        <div className="footer__socials">
          <a href=" ">
            <img className="icon" src={solana} alt="solana" />
          </a>
          <a href="https://discord.gg/VqfHN7EBXX">
            <img className="icon" src={discord} alt="discord" />
          </a>
          <a href="https://twitter.com/lfcfortune/status/1623195409504927746?s=21&t=_tS2GbGrvz5cwgAH7oBzdg">
            <img className="icon" src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};
