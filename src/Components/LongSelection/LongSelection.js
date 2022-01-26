import React from "react";
import "./LongSelection.css";

export default function LongSelection(props) {
  const { type, artist, title } = props;

  if (type && type === "artist") {
    return (
      <div className="long-selection-container">
        <div className="long-selection-text">{artist}</div>
      </div>
    );
  } else if (type && type === 'title') {
      return (
          <div className="long-selection-container title-container">
              <div className="song-title">{title}</div>
              <div className="long-selection-text song-artist">{artist}</div>
          </div>
      )
  }
}
