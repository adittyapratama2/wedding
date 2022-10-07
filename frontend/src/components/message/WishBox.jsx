import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const WishBox = () => {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    const response = await axios.get(
      "https://backend.temira-adittya.my.id/api/v1/messages"
    );
    setMessage(response.data);
  };
  return (
    <div className="container wish-box__container">
      {messages.map((msg) => (
        <article
          className="wish-box"
          data-aos="fade-down"
          data-aos-duration="3000"
          key={msg.id}
        >
          <h5>{msg.nama} :</h5>
          <small>{msg.pesan}</small>
          <hr className="new1" />
        </article>
      ))}
    </div>
  );
};

export default WishBox;
