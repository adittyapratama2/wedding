import React from "react";
import "./about.css";
import Adit from "../../assets/_ZM_7070.jpg";

const About = () => {
  return (
    <section id="about">
      <br />
      <h5>The Beloved</h5>
      <h2>Groom & Bride</h2>

      <div className="container about__container">
        <div className="adittya">
          <div className="img-adit">
            <img src={Adit} alt="adit" />
          </div>

          <h3>Adittya Pratama</h3>
          <div className="adittya__content">
            <article className="adittya__details">
              <p>Son of</p>
              <h4>Drs.Asep Sutendi &</h4>
              <h4>Lilis Suryamah</h4>
            </article>
          </div>
        </div>

        <div className="adittya">
          <div className="img-adit">
            <img src={Adit} alt="adit" />
          </div>

          <h3>Adittya Pratama</h3>
          <div className="adittya__content">
            <article className="adittya__details">
              <p>Son of</p>
              <h4>Drs.Asep Sutendi &</h4>
              <h4>Lilis Suryamah</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
