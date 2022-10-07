import React from "react";
import "./message.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import FormMsg from "./FormMsg";
import WishBox from "./WishBox";

const Message = () => {
  return (
    <section id="message">
      <br />
      <br />
      <h5 data-aos="zoom-in" data-aos-duration="2000">
        Get In Touch
      </h5>
      <h2 data-aos="fade-out" data-aos-duration="2000">
        Contact
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article
            className="contact__option"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>temira.adittya@gmail.com</h5>
            <a
              href="mailto:temira.adittya@gmail.com
"
              target="__blank"
            >
              Send a message
            </a>
          </article>
          <article
            className="contact__option"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <RiMessengerLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Temira Mardagita</h5>
            <a href="https://wa.me/6282214579230" target="__blank">
              Send a message
            </a>
          </article>
          <article
            className="contact__option"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Adittya Pratama</h5>
            <a href="https://wa.me/6281337754708" target="__blank">
              Send a message
            </a>
          </article>
        </div>
        <FormMsg />
      </div>
      <div className="container wedding__wish">
        <h2>Wedding Wishes</h2>
        <br />
        <WishBox />
      </div>
    </section>
  );
};

export default Message;
