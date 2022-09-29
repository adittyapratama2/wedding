import React from "react";
import "./home.css";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container-fluid" id="home">
      <div className="intro">
        <h1 className="home__name">The Wedding Of</h1>
        <h3 className="home__education">Temira & Adittya</h3>
        <span className="home__education">Dear Mr./Mrs./Ms.</span>
        <h3 className="home__education">Nama Tamu</h3>
        <br />
        <span className="home__education">
          You are cordially invited to our wedding
        </span>
        <br />
        <a href="#about" className="btn">
          Open Invitaion
        </a>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
