import React from "react";
import "./LongSelection.css";

const mockData = [
  {
    artist: "AC/DC",
    title: "Back In Black",
  },
  {
    artist: "AC/DC",
    title: "t.n.t",
  },
  {
    artist: "AC/DC",
    title: "big balls",
  },
  {
    artist: "AC/DC",
    title: "Dirty Deeds Done Dirt Cheap",
  },
  {
    artist: "ACTION BRONSON",
    title: "Actin Crazy",
  },
  {
    artist: "ACTION BRONSON",
    title: "baby blue",
  },
  {
    artist: "ACTION BRONSON",
    title: "Imported Goods",
  },
  {
    artist: "Adele",
    title: "Rolling in the Deep",
  },
  {
    artist: "Aerosmith",
    title: "I Don't Want To Miss a Thing",
  },
  {
    artist: "Al Green",
    title: "For the Good Times",
  },
  {
    artist: "alabama",
    title: "Dixieland Delight",
  },
];

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
