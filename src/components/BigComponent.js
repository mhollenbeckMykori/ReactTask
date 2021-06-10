import React from "react";
import mykorilogo from "../assets/mykori_logo.png";

function BigComponent(props) {
  return (
    <div className="BigComponent">
      <h2>Welcome {props.name} to the mykori React task! :)</h2>
      <div>
        We are exited to meet you tomorrow! I hope you have a pleasant time
        solving these tasks!
      </div>
      <img className="logo" src={mykorilogo} alt={"logo"} />
    </div>
  );
}

export default BigComponent;
