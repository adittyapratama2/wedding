import React from "react";
import { BsInstagram } from "react-icons/bs";

const Social = () => {
  return (
    <div className="about__social">
      <a
        href="https://www.instagram.com/pratamaaadittya/"
        className="about__social-icon"
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default Social;
