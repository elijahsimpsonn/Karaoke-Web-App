import React from "react";
import "./Search.css";

export default function Search(props) {
  return (
    <div className="search-container">
      <input type="text" className="search" placeholder={props.placeholder}></input>
    </div>
  );
}
