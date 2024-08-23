import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="button-container">
      <button className="svas-button" onClick={props.buttonclicked}>
        {props.btnName}
      </button>
    </div>
  );
}
export default Button;
