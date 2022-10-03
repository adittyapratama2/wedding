import React from "react";
import { ReactComponent as Play } from "../../assets/play.svg";
import { ReactComponent as Pause } from "../../assets/pause.svg";

const AudioControls = ({ isPlaying, onPlayPauseClick }) => {
  return (
    <div className="player__up">
      {isPlaying ? (
        <button
          type="button"
          className="pause"
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <Pause />
        </button>
      ) : (
        <button
          type="button"
          className="play"
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <Play />
        </button>
      )}
    </div>
  );
};

export default AudioControls;
