import React from "react";
import classes from "./AboutBody.module.css";
import Button from "./Button";

function AboutBody(props) {
  return (
    <div class={classes.maindivaboutpage}>
      <div class={classes.divfisrt}>
        <div className="div-about-text"></div>
        <div className="div-about-story">
          <Button type="1" text="About" />
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
