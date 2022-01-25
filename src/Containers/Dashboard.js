import React from "react";
import Button from "../Components/Button/Button";
import './Dashboard.css'

export default function Dashboard() {
  // Mock data just to get something going on the frontend while I figure out the backend
  const title = "Marshall Entertainment";

  return (
    <div className="dashboard">
      <div className="title">{title}</div>
      <Button title="View Weekly Schedule" />
    </div>
  );
}
