import React from "react";
import "./Button.css";

export default function Button(props) {
  const { btnClass, onClick, title, active } = props;
  const setClass =`button ${btnClass ? btnClass : ''} ${active ? 'active' : ''}`

  return (
    <div
      className={setClass}
      onClick={() => onClick && onClick()}
    >
      {title}
    </div>
  );
}
