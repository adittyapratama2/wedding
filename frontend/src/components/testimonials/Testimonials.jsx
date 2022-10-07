import React from "react";
import "./testimonials.css";
import { TbFaceMask, TbVaccine } from "react-icons/tb";
import { FaTemperatureHigh, FaHandsWash } from "react-icons/fa";
import { MdOutline6FtApart } from "react-icons/md";
import { GiLovers } from "react-icons/gi";

const Testimonials = () => {
  return (
    <section id="testimonial">
      <br />
      <h2 data-aos="zoom-in-up" data-aos-duration="2000">
        Health Protocol
      </h2>

      <div
        className="container health-protocol-container"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <p>
          It's important to us that everyone stays safe, please read carefully
          our Wedding Day Covid-19 Guidance before attending the event
        </p>
        <br />
        <div
          className="health-protocol-list"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <div className="protocol__content">
            <article
              className="protocol__details"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <TbFaceMask className="protocol__details-icon" />
              <h4>Must use masks during the event</h4>
            </article>
            <article
              className="protocol__details"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <FaTemperatureHigh className="protocol__details-icon" />
              <h4>Check temperature when entering the event room</h4>
            </article>
            <article
              className="protocol__details"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <FaHandsWash className="protocol__details-icon" />
              <h4>Wash hands and use Hand Sanitizer</h4>
            </article>
            <article
              className="protocol__details"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <MdOutline6FtApart className="protocol__details-icon" />
              <h4>Keeping each other apart when attending events</h4>
            </article>
            <article
              className="protocol__details"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <TbVaccine className="protocol__details-icon" />
              <h4>Minimum first dose of vaccine is required</h4>
            </article>
            <article
              className="protocol__details"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <GiLovers className="protocol__details-icon" />
              <h4>
                Check in using the "Peduli Lindungi" App before entering the
                venue
              </h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
