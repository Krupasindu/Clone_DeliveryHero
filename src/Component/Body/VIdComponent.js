import React from "react";
import classes from "./VidComonenet.module.css";

function VidComponent() {
  return (
    <div class={classes.mainviddiv}>
      <video
        poster="https://www.deliveryhero.com/wp-content/uploads/2018/08/foodora-04-700x467.jpg"
        autoPlay
        muted
        loop
      >
        <source
          src="https://player.vimeo.com/external/562675904.hd.mp4?s=f6be9addf0f031ec4ed0bf827231aa7ed88a14a7&profile_id=174"
          type="video/mp4"
        />
      </video>
      <div class={classes.divpara}>
        <p class={classes.content}>
          Always delivering <br /> an amazing experience
        </p>
      </div>
    </div>
  );
}
export default VidComponent;
