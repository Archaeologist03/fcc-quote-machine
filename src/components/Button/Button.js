import React from 'react'

import './Button.css';

function Button(props) {
  return (
    <div className="button-container">
      <button onClick={props.handleButtonClick}>
        {props.title}
      </button>
    </div>
  )
}

export default Button
