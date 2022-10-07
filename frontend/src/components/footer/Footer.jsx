import React from "react";
import "./footer.css";
import LOGO from "../../assets/images/logo-ta2.png";

const Footer = () => {
  return (
    <footer id="footer">
      <br />
      <p>See you on our big day!</p>
      <div className="img-container">
        <img src={LOGO} alt="t-a" />
      </div>
    </footer>
  );
};

export default Footer;
