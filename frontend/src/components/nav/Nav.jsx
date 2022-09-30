import React from "react";
import "./nav.css";
import { HiHome, HiCalendar, HiPhotograph } from "react-icons/hi";
import { RiServiceFill } from "react-icons/ri";
import { IoGiftSharp, IoChatboxEllipses } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <HiHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <RiServiceFill />
      </a>

      <a
        href="#location"
        onClick={() => setActiveNav("#location")}
        className={activeNav === "#location" ? "active" : ""}
      >
        <HiCalendar />
      </a>

      <a
        href="#galery"
        onClick={() => setActiveNav("#galery")}
        className={activeNav === "#galery" ? "active" : ""}
      >
        <HiPhotograph />
      </a>

      <a
        href="#gift"
        onClick={() => setActiveNav("#gift")}
        className={activeNav === "#gift" ? "active" : ""}
      >
        <IoGiftSharp />
      </a>

      <a
        href="#message"
        onClick={() => setActiveNav("#message")}
        className={activeNav === "#message" ? "active" : ""}
      >
        <IoChatboxEllipses />
      </a>
    </nav>
  );
};

export default Nav;
