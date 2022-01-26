import React from "react";
import "./Button.css";

export default function Button(props) {
  const {btnClass, onClick, title} = props
  return <div className={btnClass ? `button ${btnClass}` : 'button'} onClick={() => onClick && onClick()}>{title}</div>;
}
