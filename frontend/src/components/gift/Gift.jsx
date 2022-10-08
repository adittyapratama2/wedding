import React from "react";
import "./gift.css";
import BCA from "../../assets/bank-bca.png";
import BNI from "../../assets/home.png";
import BRI from "../../assets/bank-bri.png";
import { BiCopyAlt } from "react-icons/bi";

const Gift = () => {
  return (
    <section id="gift">
      <h2 data-aos="zoom-in" data-aos-duration="2000">
        Wedding Gift
      </h2>
      <p className="text-p" data-aos="fade-out" data-aos-duration="2000">
        Your blessing and coming to our wedding are enough for us. However, if
        you want to give a gift we provide a digital envelope to make it easer
        for you. Thank you
      </p>
      <div className="container gift__content">
        <article className="gift" data-aos="fade-down" data-aos-duration="3000">
          <div className="gift__head">
            <img src={BCA} alt="bca"></img>
          </div>

          <ul className="gift__list">
            <li>
              <p id="p1">0541088368</p>
              <p>A/N Temira Mardagita</p>
              <button
                className="copy-btn"
                onClick={() => navigator.clipboard.writeText("0541088368")}
              >
                <BiCopyAlt />
                Copy
              </button>
            </li>
          </ul>
        </article>

        <article className="gift" data-aos="fade-down" data-aos-duration="3000">
          <div className="gift__head">
            <img src={BNI} alt="bni"></img>
          </div>
          <ul className="gift__list">
            <li>
              <p>Perum Baitul Jannah Blok S-2</p>
              <p>Jl.Ir.H.Juanda No.39, Bantarsari, Kec.Bungursari, Kota.Tasikmalaya 46151</p>
            </li>
          </ul>
        </article>

        <article className="gift" data-aos="fade-down" data-aos-duration="3000">
          <div className="gift__head">
            <img src={BRI} alt="bri"></img>
          </div>
          <ul className="gift__list">
            <li>
              <p>010001088279504</p>
              <p>A/N Adittya Pratama</p>
              <button
                className="copy-btn"
                onClick={() => navigator.clipboard.writeText("010001088279504")}
              >
                <BiCopyAlt />
                Copy
              </button>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Gift;
