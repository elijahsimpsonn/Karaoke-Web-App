import React, { useState, useEffect } from "react";
import Button from "../Components/Button/Button";
import Search from "../Components/Search/Search";
import DateCard from "../Components/DateCard/DateCard";
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
  const mockSchudule = [
    {
      date: "July 10, 2022",
      place: "Marigold Bar",
      startTime: "21:00:00",
      endTime: "1:00:00",
      address: "2122 S Weinbach Ave, Evansville IN, 47714"
    },
    {
      date: "July 11, 2022",
      place: "Marigold Bar",
      startTime: "21:00:00",
      endTime: "1:00:00",
      address: "2122 S Weinbach Ave, Evansville IN, 47714"
    },
    {
      date: "July 12, 2022",
      place: "The Sportsden Bar and Grill",
      startTime: "21:00:00",
      endTime: "1:00:00",
      address: "701 N Weinbach Ave, Evansville IN, 47711"
    },
    {
      date: "July 13, 2022",
      place: "Marigold Bar",
      startTime: "21:00:00",
      endTime: "1:00:00",
      address: "2122 S Weinbach Ave, Evansville IN, 47714"
    },
    {
      date: "July 14, 2022",
      place: "Marigold Bar",
      startTime: "21:00:00",
      endTime: "1:00:00",
      address: "2122 S Weinbach Ave, Evansville IN, 47714"
    },
    {
      date: "July 15, 2022",
      place: "Marigold Bar",
      startTime: "21:00:00",
      endTime: "1:00:00",
      address: "2122 S Weinbach Ave, Evansville IN, 47714"
    },
  ]

  const [filteredSongs, setFilteredSongs] = useState(mockData);
  const [fliteredArtist, setFilteredArtist] = useState(artistList);

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
    setSelectedArtist("")
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
  };

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
        {selectedBtn === "schedule" &&
          mockSchudule.map((card, index) => ( 
            <DateCard 
              key={index}
              date={card.date}
              place={card.place}
              startTime={card.startTime}
              endTime={card.endTime}
              address={card.address}
            />
          ))
        }    
      </div>{" "}
    </div>
  );
}
