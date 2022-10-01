import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/profile.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>The Wedding Of</h3>
        <h1>Temira & Adittya</h1>
        <h5>Dear Mr./Mrs./Ms.</h5>
        <h3>Nama Tamu</h3>
        <br />
        <h5>You are cordially invited to our wedding</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#home" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
