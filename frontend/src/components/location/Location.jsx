import React from "react";
import "./location.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import Loc from "../../assets/location.jpeg";

const Location = () => {
  return (
    <section id="location">
      <br />
      <h5
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        Sunday
      </h5>
      <h2 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
        16 October 2022
      </h2>

      <div className="container location__container">
        <div
          className="location__akad"
          data-aos="flip-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <h3>Akad Nikah</h3>
          <div className="location__content">
            <article className="locations__details">
              <AiOutlineClockCircle />
              <div>
                <h4>At 08.00 - 10.00 WIB</h4>
              </div>
            </article>
          </div>
        </div>

        <div
          className="location__resepsi"
          data-aos="flip-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <h3>Resepsi Nikah</h3>
          <div className="location__content">
            <article className="locations__details">
              <AiOutlineClockCircle />
              <div>
                <h4>At 10.00 - 14.00 WIB</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
      <br />
      <div className="location__akad">
        <h3
          data-aos="zoom-in-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          Location
        </h3>
        <div
          className="location-img"
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <img src={Loc} alt="lokasi" />
        </div>
        <h2
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          Asstro Grill Garden
        </h2>
        <span
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          Jl. R.Ikik Wiradikarta No.4 Yudanegara, Kec. Cihideung, Kota.
          Tasikmalaya, Jawa Barat
        </span>
      </div>
    </section>
  );
};

export default Location;
