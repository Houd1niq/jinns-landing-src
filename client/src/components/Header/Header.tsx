import solana from "../../assets/images/socials/solana-icon.svg";
import discord from "../../assets/images/socials/discord-icon.svg";
import twitter from "../../assets/images/socials/twitter-icon.svg";
import { Menu } from "../Menu/Menu";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <ul className="header__socials">
        <li className="header__socials-items">
          <a href="#">
            <img src={solana} alt="solana" />
          </a>
        </li>
        <li className="header__socials-items ">
          <a href="https://discord.gg/VqfHN7EBXX">
            <img className="icon" src={discord} alt="discord" />
          </a>
        </li>
        <li className="header__socials-items">
          <a href="https://twitter.com/lfcfortune/status/1623195409504927746?s=21&t=_tS2GbGrvz5cwgAH7oBzdg">
            <img className="icon" src={twitter} alt="twitter" />
          </a>
        </li>
      </ul>
      <span className="header__line"></span>
      <div className="menu-wrapper">
        <Menu></Menu>
      </div>
    </header>
  );
};
