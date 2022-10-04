import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Location from "../components/location/Location";
import Galery from "../components/galery/Galery";
import Testimonials from "../components/testimonials/Testimonials";
import Message from "../components/message/Message";
import Gift from "../components/gift/Gift";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const RootPages = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getGuestById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/v1/guests/${id}`
        );
        setName(response.data.name);
      } catch (err) {
        setMsg(err.response.data.msg);
      }
    };
    getGuestById();
  }, [id]);
  return (
    <div>
      <Header data={name} />
      <Nav />
      <Home />
      <About />
      <Location />
      <Galery />
      <Gift />
      <Message />
      <Footer />
    </div>
  );
};

export default RootPages;
