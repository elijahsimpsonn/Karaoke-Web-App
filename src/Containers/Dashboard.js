import React, {useState} from "react";
import Button from "../Components/Button/Button";
import Search from "../Components/Search/Search";
import LongSelection from "../Components/LongSelection/LongSelection";
import "./Dashboard.css";

export default function Dashboard() {
  // Mock data just to get something going on the frontend while I figure out the backend

  const [selectedBtn, setSelectedBtn] = useState('artist')
  console.log(selectedBtn)

  const title = "Marshall Entertainment";
  const searchPlaceholder = "Search By Artist...";
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
      artist: 'Adele',
      title: '',
    },
    {
      artist: 'Aerosmith',
      title: '',
    },
    {
      artist: 'Al Green',
      title: '',
    },
    {
      artist: 'alabama',
      title: '',
    },
  ];

  return (
    <div className="dashboard">
      <div className="title">{title}</div>
      <Button title="VIEW WEEKLY SCHEDULE" onClick={() => setSelectedBtn('schedule')}/>
      <hr className="line" />
      <div className="selection-buttons">
        <Button title="VIEW BY ARTIST" onClick={() => setSelectedBtn('artist')}/>
        <Button title="VIEW BY TITLE" btnClass="title-btn" onClick={() => setSelectedBtn('title')} />
      </div>
      <Search placeholder={searchPlaceholder} />
      <div>
        {mockData.map((obj) => {
          return <LongSelection artist={obj.artist} />;
        })}
      </div>
    </div>
  );
}
