import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div>
      <button className="button" onClick={props.buttonclicked}>{props.btnName}</button>
    </div>
  );
}
export default Button;
