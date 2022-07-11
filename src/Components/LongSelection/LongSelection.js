import React from "react";
import "./LongSelection.css";

export default function LongSelection(props) {
  const {type, artist, title, selected, onClick} = props

  if (type && type === "artist") {
    return (
      <>
      <div className={`long-selection-container ${selected ? 'selected' : ''}`} onClick={onClick}>
        <div className="long-selection-text">{artist}</div>
      </div>
      {selected && (
        <div className="songlist-container">
          <span className="songlist-song">title 1</span>
          <span className="songlist-song">title 2</span>
          <span className="songlist-song">title 3</span>
          <span className="songlist-song">title 4</span>
          <span className="songlist-song">title 5</span>
        </div>
      )}
      </>
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
