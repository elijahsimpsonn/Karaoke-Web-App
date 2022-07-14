import React from 'react'
import "./DateCard.css";


export default function DateCard(props) {
  const options = {weekday: "long"}

  let date = new Date(props.date)  
  let day = new Intl.DateTimeFormat('en-US', options).format(date)
  let dateNum = date.getDate()


  return (
    <div className='datecard-container'>
        <span className='date'>{day} ({dateNum})</span> 
        <hr className="datecard-line" />
        <div className='place-time-container'>
        <div className='place'>{props.place}</div>
        <div className='time'>{props.startTime} - {props.endTime}</div>
        </div>
        <div className='address'>{props.address}</div>
    </div>
  )
}