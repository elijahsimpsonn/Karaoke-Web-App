import React, { useState, useEffect } from "react";
import Button from "../Components/Button/Button";
import Search from "../Components/Search/Search";
import LongSelection from "../Components/LongSelection/LongSelection";
import "./Dashboard.css";

export default function Dashboard() {
  // Mock data just to get something going on the frontend while I figure out the backend

  const [selectedBtn, setSelectedBtn] = useState("artist");
  const [searchValue, setSearchValue] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");

  const title = "Marshall Entertainment";
  const searchPlaceholder = `${
    selectedBtn === "artist"
      ? "Search by Artist Name..."
      : "Search by Song Title..."
  }`;
  const mockData = [
    {
      artist: "AC/DC",
      title: "Back In Black",
    },
    {
      artist: "ACTION BRONSON",
      title: "Action Crazy",
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

  const [filteredSongs, setFilteredSongs] = useState(mockData);

  const setNewSelectedArtist = (artist) => {
    setSelectedArtist(artist)
    console.log(selectedArtist)
  }

  const filterSongs = (event) => {
    const value = event.target.value;
    if (value !== "") {
      const results = mockData.filter((song) => {
        if (selectedBtn === "title") {
          return song.title.toLowerCase().includes(value.toLowerCase());
        } else return song.artist.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredSongs(results);
    } else {
      setFilteredSongs(mockData);
    }
    setSearchValue(value);
  };

  return (
    <div className="dashboard">
      <div className="title">{title}</div>
      <Button
        title="VIEW WEEKLY SCHEDULE"
        onClick={() => setSelectedBtn("schedule")}
        active={selectedBtn === "schedule"}
      />
      <hr className="line" />
      <div className="selection-buttons">
        <Button
          title="VIEW BY ARTIST"
          onClick={() => setSelectedBtn("artist")}
          active={selectedBtn === "artist"}
        />
        <Button
          title="VIEW BY TITLE"
          btnClass="title-btn"
          onClick={() => setSelectedBtn("title")}
          active={selectedBtn === "title"}
        />
      </div>
      {selectedBtn !== "schedule" && (
        <Search
          placeholder={searchPlaceholder}
          onChange={filterSongs}
          value={searchValue}
        />
      )}
      <div>
        {selectedBtn === "title" &&
          filteredSongs
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((song, index) => (
              <LongSelection
                key={index}
                type={selectedBtn}
                artist={song.artist}
                title={song.title}
              />
            ))}
        {selectedBtn === "artist" &&
          filteredSongs
            .sort((a, b) => a.artist.localeCompare(b.artist))
            .map((song, index) => (
              <LongSelection
                key={index}
                type={selectedBtn}
                artist={song.artist}
                onClick={() => setNewSelectedArtist(song.artist)}
                selected={song.artist === selectedArtist}
              />
            ))}
      </div>
    </div>
  );
}
