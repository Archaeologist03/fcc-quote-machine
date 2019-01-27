import React from 'react';

import './BtnNext.css';
import '../Buttons.css';

function BtnNext(props) {
  return (
    <div className="btn-next-container btns">
      <button onClick={props.handleBtnNextClick}>{props.title}</button>
    </div>
  );
}

export default BtnNext;
