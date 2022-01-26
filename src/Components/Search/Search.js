import React from "react";
import "./Search.css";

export default function Search(props) {
  const {placeholder, onChange, value} = props

  return (
    <div className="search-container">
      <input type="text" value={value} className="search" placeholder={placeholder} onChange={(value) => onChange && onChange(value)}></input>
    </div>
  );
}
