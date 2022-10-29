import React from "react";
import classes from "./AboutCard.module.css";

function AboutCard(props) {
  return (
    <div class={classes.aboutcardmaindiv}>
      {/* {" "} */}
      <h2>{props.Header}</h2>
      <h3>{props.SubHeader}</h3>
      <p>{props.Content}</p>
    </div>
  );
}

export default AboutCard;
