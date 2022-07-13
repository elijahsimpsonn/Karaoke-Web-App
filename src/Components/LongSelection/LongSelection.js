import React from "react";
import { mockData } from "../../MockData/mock_files";
import "./LongSelection.css";

export default function LongSelection(props) {
  const { type, artist, title, selected, onClick } = props;

  if (type && type === "artist") {
    return (
      <>
        <div
          className={`long-selection-container ${selected ? "selected" : ""}`}
          onClick={onClick}
        >
          <div className="long-selection-text">{artist}</div>
        </div>
        {selected && (
          <div className="songlist-container">
            {mockData.map((obj) => {
              if (obj.artist === artist) {
                return <span className="songlist-song">{obj.title.toUpperCase()}</span>;
              }
            })}
          </div>
        )}
      </>
    );
  } else if (type && type === "title") {
    return (
      <div className="long-selection-container title-container">
        <div className="song-title">{title}</div>
        <div className="long-selection-text song-artist">{artist}</div>
      </div>
    );
  }
}
