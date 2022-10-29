import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <button class={props.type === "1" ? classes.btn1 : classes.btn2}>
        {props.text}
      </button>
    </div>
  );
}
export default Button;
