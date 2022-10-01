import React from "react";
import "./home.css";
import ME from "../../assets/_ZM_7223.jpg";
import ME2 from "../../assets/profileme2.png";
import ME3 from "../../assets/profileme.png";

const Home = () => {
  return (
    <section id="home">
      <br />
      <h5>The Beloved</h5>
      <h2>Groom & Bride</h2>

      <br />
      <div className="container home__container">
        <div className="home__me">
          <div className="home__me-image">
            <img src={ME} alt="me-img" />
          </div>
        </div>

        <div className="home__content">
          <div className="home__cards">
            <article></article>
          </div>
          <p>
            <blockquote>
              “Once in awhile right in the middle of an ordinary life, love
              gives us fairy tale.”
            </blockquote>
            Unkown
          </p>
          <div className="home__me-image2">
            <img src={ME2} alt="me-img" />
          </div>
          <div className="home__me-image2">
            <img src={ME3} alt="me-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
