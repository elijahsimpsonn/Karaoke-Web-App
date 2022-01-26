import React from "react";
import Button from "../Components/Button/Button";
import Search from "../Components/Search/Search";
import LongSelection from "../Components/LongSelection/LongSelection";
import './Dashboard.css'

export default function Dashboard() {
  // Mock data just to get something going on the frontend while I figure out the backend
  const title = "Marshall Entertainment";
  const searchPlaceholder = "Search By Artist..."

  return (
    <div className="dashboard">
      <div className="title">{title}</div>
      <Button title="VIEW WEEKLY SCHEDULE" />
      <hr className="line"/>
      <div className="selection-buttons">
          <Button title="VIEW BY ARTIST"/>
          <Button title="VIEW BY TITLE" btnClass="title-btn"/>
      </div>
      <Search placeholder={searchPlaceholder}/>
      <div>
          <LongSelection artist="test"/>
      </div>
    </div>
  );
}
