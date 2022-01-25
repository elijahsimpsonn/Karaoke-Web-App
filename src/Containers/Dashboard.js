import React from "react";
import Button from "../Components/Button/Button";
import './Dashboard.css'

export default function Dashboard() {
  // Mock data just to get something going on the frontend while I figure out the backend
  const title = "Marshall Entertainment";

  return (
    <div className="dashboard">
      <div className="title">{title}</div>
      <Button title="VIEW WEEKLY SCHEDULE" />
      <hr className="line"/>
      <div className="selection-buttons">
          <Button title="VIEW BY ARTIST"/>
          <Button title="VIEW BY TITLE" btnClass="title-btn"/>
      </div>
    </div>
  );
}
