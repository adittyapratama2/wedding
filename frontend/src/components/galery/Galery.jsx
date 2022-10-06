import React, { useState, useCallback } from "react";
import "./galery.css";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import IMG1 from "../../assets/images/gallery/gallery11.jpg";
import { photos } from "./photos";

const Galery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <section id="galery">
      <br />
      <h2
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        Our Gallery
      </h2>
      <div
        className="img__container"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="container1">
          <img src={IMG1} alt="Selected" className="selected" />
          <div className="imgContainer">
            <Gallery photos={photos} onClick={openLightbox} />
          </div>
        </div>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </section>
  );
};
const BasicRows = () => <Gallery photos={photos} />;

export default Galery;
