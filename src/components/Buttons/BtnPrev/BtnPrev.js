import React from 'react'

import './BtnPrev.css';
import '../Buttons.css';

function BtnPrev(props) {
  return (
    <div className="btn-prev-container btns">
      <button onClick={props.handleBtnPrevClick}>
        {props.title}
      </button>
    </div>
  )
}

export default BtnPrev
