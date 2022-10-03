import React from "react";
import "./galery.css";
import IMG1 from "../../assets/images/gallery/gallery1.jpg";

const Galery = () => {
  return (
    <section id="galery">
      <br />
      <h2>Our Gallery</h2>
      <div className="container gallery__container">
        <img src={IMG1} alt="" className="img-container" />
      </div>
    </section>
  );
};

export default Galery;
