import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Location from "./components/location/Location";
import Galery from "./components/galery/Galery";
import Testimonials from "./components/testimonials/Testimonials";
import Message from "./components/message/Message";
import Gift from "./components/gift/Gift";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Home />
      <About />
      <Location />
      <Galery />
      <Gift />
      <Message />
      <Footer />
    </>
  );
};

export default App;
