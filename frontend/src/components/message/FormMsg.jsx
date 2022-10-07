import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormMsg = () => {
  const [nama, setNama] = useState("");
  const [pax, setPax] = useState("");
  const [status, setStatus] = useState("");
  const [pesan, setPesan] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend.temira-adittya.my.id/api/v1/messages", {
        nama: nama,
        pax: pax,
        status: status,
        pesan: pesan,
      });
      navigate(0);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <form onSubmit={saveMessage} data-aos="fade-down" data-aos-duration="3000">
      <p>{msg}</p>
      <input
        type="text"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Your Full Name"
        required
      />
      <input
        type="number"
        value={pax}
        onChange={(e) => setPax(e.target.value)}
        placeholder="1-2 Pax"
        min="1"
        max="2"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        id=""
        required
      >
        <option>Attendance</option>
        <option value="hadir">Yes, I will attend</option>
        <option value="tidak hadir">Sorry, I can't attend</option>
      </select>
      <textarea
        value={pesan}
        onChange={(e) => setPesan(e.target.value)}
        rows="7"
        placeholder="Your Message"
        required
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};

export default FormMsg;
