import { ExpandingList } from "../ExpandingList/ExpandingList";
import React from "react";
import "./Menu.scss";

export const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuValue = (
    <>
      <li className="menu-item">
        <a href="#"> about project</a>
      </li>
      <li className="menu-item">
        <a href="#collection"> collection</a>
      </li>
      <li className="menu-item">
        <a href="#roadmap"> roadmap</a>
      </li>
      <li className="menu-item">
        <a href="#pre-register"> pre-register</a>
      </li>
      <li className="menu-item">
        <a
          href=""
          style={{ cursor: "no-drop" }}
          onClick={(e) => e.preventDefault()}
          className="menu-disabled-item"
        >
          {" "}
          service
        </a>
      </li>
    </>
  );

  return (
    <ExpandingList
      getIsOpen={setIsOpen}
      className="menu"
      headerValue={<p style={{ color: isOpen ? "#777777" : "" }}>more</p>}
      listValue={menuValue}
    ></ExpandingList>
  );
};
