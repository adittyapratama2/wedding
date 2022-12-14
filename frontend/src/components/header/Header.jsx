import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/profile.png";

const Header = (props) => {
  return (
    <header>
      <div className="container header__container">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h3>The Wedding Of</h3>
          <h1>Temira & Adittya</h1>
          <h5>Dear Mr./Mrs./Ms.</h5>
          <h2>{props.data}</h2>
          <br />
          <h5>You are cordially invited to our wedding</h5>
        </div>

        <CTA />

        <div
          className="me"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="700"
          data-aos-offset="0"
        >
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
