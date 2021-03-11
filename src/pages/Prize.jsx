import React from "react";

import prize from "../temp/prize_bg2.png";
import prizeIcon from "../temp/prizes_icon.svg";

const Prize = () => {
  return (
    <>
      <div className='cuscont'>
        <img
          className='coverbgimg'
          src={prize}
          alt='Snow'
          style={{ width: "100%" }}
        />
        <div className='bottom-left'>Bottom Left</div>
        <div className='top-left'>Top Left</div>
        <div className='top-right'>Top Right</div>
        <div className='bottom-right'>Bottom Right</div>
        <div className='cuscent'>
          <img id='przicon' src={prizeIcon} alt='Snow' />
          <br />
          <br />
          <h4 id='prziconquote'>
            {" "}
            "Every nation has a message to deliver, a mission to fulfil, a
            destiny to reach.
          </h4>

          <i id='prziconquotelast'>-  Swami Vivekananda</i>
        </div>
      </div>
      <div style={{ margin: "50px" }}>To Be Announced.</div>
    </>
  );
};

export default Prize;
