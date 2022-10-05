import React from "react";
import "./gift.css";
import { BsBank } from "react-icons/bs";

const Gift = () => {
  return (
    <section id="gift">
      <br />
      <h2>Send Gift</h2>
      <div className="container gift__content">
        <article className="gift">
          <div className="gift__head">
            <BsBank className="icon-size" />
            <h3>BCA</h3>
          </div>

          <ul className="gift__list">
            <li>
              <p>1233434345</p>
              <p>A/N Temira Mardagita</p>
            </li>
          </ul>
        </article>

        <article className="gift">
          <div className="gift__head">
            <BsBank className="icon-size" />
            <h3>BNI</h3>
          </div>
          <ul className="gift__list">
            <li>
              <p>1233434345</p>
              <p>A/N Temira Mardagita</p>
            </li>
          </ul>
        </article>

        <article className="gift">
          <div className="gift__head">
            <BsBank className="icon-size" />
            <h3>BRI</h3>
          </div>
          <ul className="gift__list">
            <li>
              <p>1233434345</p>
              <p>A/N Adittya Pratama</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Gift;
