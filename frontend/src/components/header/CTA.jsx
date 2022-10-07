import React from "react";
import sound from "../../assets/music/music-1.mp3";

const CTA = () => {
  function play() {
    const audio = new Audio(sound);
    audio.play();
  }
  return (
    <div className="cta" data-aos="fade-up-right" data-aos-duration="2000">
      <a href="#home" className="btn btn-primary" value="PLAY" onClick={play}>
        Open Invitation
      </a>
      <audio id="audio" src="../../assets/music/music-1.mp3"></audio>
    </div>
  );
};

export default CTA;
