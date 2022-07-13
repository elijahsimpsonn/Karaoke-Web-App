import React, { useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import Search from "../../Components/Search/Search";
import DateCard from "../../Components/DateCard/DateCard";
import LongSelection from "../../Components/LongSelection/LongSelection";
import NoData from "../../Components/NoData/NoData";
import { mockData } from "../../MockData/mock_files";
import { mockSchedule } from "../../MockData/mock_schedule";
import "./Dashboard.css";

export default function Dashboard() {
  const [selectedBtn, setSelectedBtn] = useState("title");
  const [searchValue, setSearchValue] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");
  const [artistList, setArtistList] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState(mockData);
  const [fliteredArtist, setFilteredArtist] = useState(artistList);

  //runs removeDuplicateArtist on load of application
  useEffect(() => {
    removeDuplicateArtist();
  }, []);

  const searchPlaceholder = `${
    selectedBtn === "artist"
      ? "Search by Artist Name..."
      : "Search by Song Title..."
  }`;

  const setNewSelectedArtist = (artist) => {
    setSelectedArtist(artist);
  };

  const filterSongs = (event) => {
    const value = event.target.value;
    if (value !== "") {
      const results = mockData.filter((song) => {
        if (selectedBtn === "title") {
          return song.title.toLowerCase().includes(value.toLowerCase());
        }
      });
      setFilteredSongs(results);
    } else {
      setFilteredSongs(mockData);
    }
    setSearchValue(value);
  };

  const filterArtist = (event) => {
    const value = event.target.value;
    setSelectedArtist("");
    if (value !== "") {
      const results = artistList.filter((artist) => {
        return artist.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredArtist(results);
    } else {
      setFilteredArtist(artistList);
    }
    setSearchValue(value);
  };

  const removeDuplicateArtist = () => {
    console.log("running");
    const results = mockData
      .map((object) => object.artist)
      .filter((value, index, self) => self.indexOf(value) === index);
    setArtistList(results);
  };

  console.log(fliteredArtist)

  return (
    <div className="dashboard">
      <div className="title"> Marshall Entertainment </div>{" "}
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
            removeDuplicateArtist();
            setFilteredArtist(artistList);
            setSelectedArtist("");
            setSearchValue("");
            setSelectedBtn("artist");
          }}
          active={selectedBtn === "artist"}
        />{" "}
        <Button
          title="VIEW BY TITLE"
          btnClass="title-btn"
          onClick={() => {
            setSearchValue("");
            setSelectedBtn("title");
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
        {selectedBtn === "title" && filteredSongs &&
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
        {selectedBtn === "title" && filteredSongs.length === 0 &&
          <NoData />
        }    
        {selectedBtn === "artist" && fliteredArtist &&
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
        {selectedBtn === "artist" && fliteredArtist.length === 0 &&
          <NoData />
        }
        {selectedBtn === "schedule" &&
          mockSchedule.map((card, index) => (
            <DateCard
              key={index}
              date={card.date}
              place={card.place}
              startTime={card.startTime}
              endTime={card.endTime}
              address={card.address}
            />
          ))}
      </div>{" "}
    </div>
  );
}
