import React from "react";
import "./Button.css";

export default function Button(props) {
  return <div className={props.btnClass ? `button ${props.btnClass}` : 'button'}>{props.title}</div>;
}
