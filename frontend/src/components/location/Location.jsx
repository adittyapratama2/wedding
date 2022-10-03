import React from "react";
import "./location.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import Loc from "../../assets/location.jpeg";

const Location = () => {
  return (
    <section id="location">
      <br />
      <h5>Minggu</h5>
      <h2>16 Oktober 2022</h2>

      <div className="container location__container">
        <div className="location__akad">
          <h3>Akad Nikah</h3>
          <div className="location__content">
            <article className="locations__details">
              <AiOutlineClockCircle />
              <div>
                <h4>Pukul 08.00 - 10.00 WIB</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="location__resepsi">
          <h3>Resepsi Nikah</h3>
          <div className="location__content">
            <article className="locations__details">
              <AiOutlineClockCircle />
              <div>
                <h4>Pukul 10.00 - 14.00 WIB</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
      <br />
      <div className="location__akad">
        <h3>Lokasi</h3>
        <div className="location-img">
          <img src={Loc} alt="lokasi" />
        </div>
        <h2>Asstro Grill Garden</h2>
        <span>
          Jl. R.Ikik Wiradikarta No.4 Yudanegara, Kec. Cihideung, Kota.
          Tasikmalaya, Jawa Barat
        </span>
      </div>
    </section>
  );
};

export default Location;
