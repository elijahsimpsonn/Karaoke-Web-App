import React from 'react';
import './LongSelection.css'

export default function LongSelection(props) {
  return <div className='long-selection-container'>
      <div className='long-selection-text'>{props.artist}</div>
  </div>;
}
