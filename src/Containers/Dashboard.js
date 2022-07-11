import React, { useState, useEffect } from "react";
import Button from "../Components/Button/Button";
import Search from "../Components/Search/Search";
import LongSelection from "../Components/LongSelection/LongSelection";
import "./Dashboard.css";

export default function Dashboard() {
  // Mock data just to get something going on the frontend while I figure out the backend

  const [selectedBtn, setSelectedBtn] = useState("title");
  const [searchValue, setSearchValue] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");
  const [artistList, setArtistList] = useState([])

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

  const [filteredSongs, setFilteredSongs] = useState(mockData);
  const [fliteredArtist, setFilteredArtist] = useState(artistList);

  useEffect(() => {

  })

  const setNewSelectedArtist = (artist) => {
    setSelectedArtist(artist);
  };

  const filterSongs = (event) => {
    const value = event.target.value;
    if (value !== "") {
      if (selectedBtn === "title") {}
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

  const filterArtist = (event => {
    const value = event.target.value;
    if (value !== "") {
      const results = artistList.filter((artist) => {
        return artist.toLowerCase().includes(value.toLowerCase());
      })
      setFilteredArtist(results)
    } else {
      setFilteredArtist(artistList)
    }
    setSearchValue(value)
  })

  const removeDuplicateArtist = () => {
    const results = mockData
      .map((object) => object.artist)
      .filter((value, index, self) => self.indexOf(value) === index);
    setArtistList(results);
    console.log("artistList:", artistList)
  };

  console.log("filteredArtist:", fliteredArtist);
  console.log("filteredSongs:", filteredSongs);

  return (
    <div className="dashboard">
      <div className="title"> {title} </div>{" "}
      <Button
        title="VIEW WEEKLY SCHEDULE"
        onClick={() => setSelectedBtn("schedule")}
        active={selectedBtn === "schedule"}
      />{" "}
      <hr className="line" />
      <div className="selection-buttons">
        <Button
          title="VIEW BY ARTIST"
          onClick={() => {
            setFilteredArtist(artistList)
            setSelectedArtist("")
            setSearchValue("")
            removeDuplicateArtist();
            setSelectedBtn("artist");
          }}
          active={selectedBtn === "artist"}
        />{" "}
        <Button
          title="VIEW BY TITLE"
          btnClass="title-btn"
          onClick={() => {
            setSearchValue("")
            setSelectedBtn("title")
          }}
          active={selectedBtn === "title"}
        />{" "}
      </div>{" "}
      {selectedBtn !== "schedule" && (
        <Search
          placeholder={searchPlaceholder}
          onChange={selectedBtn === "title" ? filterSongs : filterArtist}
          value={searchValue}
        />
      )}{" "}
      <div>
        {" "}
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
            ))}{" "}
        {selectedBtn === "artist" &&
          fliteredArtist
            .sort((a, b) => a.localeCompare(b))
            .map((artist, index) => (
              <LongSelection
                key={index}
                type={selectedBtn}
                artist={artist}
                onClick={() => setNewSelectedArtist(artist)}
                selected={artist === selectedArtist}
              />
            ))}{" "}
      </div>{" "}
    </div>
  );
}
