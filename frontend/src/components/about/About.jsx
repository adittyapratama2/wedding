import React from "react";
import "./about.css";
import Adit from "../../assets/_ZM_7070.jpg";
import Data from "./Data";
import Data2 from "./Data2";

const About = () => {
  return (
    <section id="about">
      <br />
      <h5 data-aos="fade-down" data-aos-duration="3000">
        The Beloved
      </h5>
      <h2 data-aos="fade-up" data-aos-duration="3000">
        Groom & Bride
      </h2>

      <div className="about__container container grid">
        <div className="about__content grid">
          <div
            className="about__img"
            data-aos="flip-left"
            data-aos-duration="3000"
          ></div>
          <Data />
        </div>
      </div>

      <div className="about__container container">
        <div className="about__content">
          <div
            className="about__img2"
            data-aos="flip-right"
            data-aos-duration="3000"
          ></div>
          <Data2 />
        </div>
      </div>
      <div
        className="divider div-transparent div-dot"
        data-aos="zoom-in-up"
        data-aos-duration="3000"
      ></div>
      <div
        className="about__container container"
        data-aos="flip-right"
        data-aos-duration="3000"
      >
        <div className="about__content">
          <h4>
            Together with the blessing of Allah Subhanahu wa Ta'ala, we joyfully
            invite you to share in our happiness as we unite in marriage on
          </h4>
        </div>
      </div>
    </section>
  );
};

export default About;
