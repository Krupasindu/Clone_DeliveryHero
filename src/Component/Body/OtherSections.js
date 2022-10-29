import React from "react";
import classes from "./OtherSection.module.css";

function OtherSections() {
  const Valuesectiondata = [
    {
      text: "We always aim higher",
      image:
        "https://www.deliveryhero.com/wp-content/uploads/2021/04/delivery-hero-aiming-higher.svg",
      icon: "https://www.deliveryhero.com/wp-content/uploads/2020/10/we-always-aim-higher.png",
    },

    {
      text: "We are Heroes because we care",
      image:
        "https://www.deliveryhero.com/wp-content/uploads/2021/04/delivery-hero-we-care.svg",

      icon: "https://www.deliveryhero.com/wp-content/uploads/2020/10/we-care.png",
    },
    {
      text: "We deliver solutions",
      image:
        "https://www.deliveryhero.com/wp-content/uploads/2021/04/dh_wedeliversolutions_illustration.svg",
      icon: "https://www.deliveryhero.com/wp-content/uploads/2020/10/we-deliver-solutions.png",
    },
  ];

  return (
    <div class={classes.divOtherSection}>
      <div class={classes.divtellus}>
        <a href="https://deliveryhub.eu.qualtrics.com/jfe/form/SV_e38ghIo1TnwsbXM">
          <img
            src="https://www.deliveryhero.com/wp-content/uploads/2022/09/202204_Social-Media-Survey-Designs-05.png"
            alt="Our ecosystem: a mission to deliver anything"
          />
        </a>
      </div>
      <div class={classes.divaboutus}>
        <div class={classes.divaboutcard}>
          <h3>Our ecosystem: a mission to deliver anything</h3>
          <button>About us</button>
        </div>
      </div>

      <div class={classes.divwork}>
        <div class={classes.divworkleft}>
          <h3>Quick commerce, the next generation of delivery </h3>

          <a href="/about">How does it work?</a>
        </div>
        <div class={classes.divworkright}>
          <img
            alt=""
            src="https://www.deliveryhero.com/wp-content/uploads/2021/02/Home-page_quick-commerce_cropped-1.jpg"
          />
        </div>
      </div>
      {/* Value Section*/}
      <div class={classes.divvalues}>
        <div class={classes.valuecontents}>
          <h3>Our values</h3>
          <p>Our strong values connect and drive us forward every day</p>
          <h1>{Valuesectiondata[0].text}</h1>
        </div>
        <div class={classes.valueimage}>
          <img
            src="https://www.deliveryhero.com/wp-content/uploads/2021/04/delivery-hero-aiming-higher.svg"
            alt="Icon"
          ></img>
        </div>
      </div>
      <div class={classes.divvalueicon}>
        <img
          src="https://www.deliveryhero.com/wp-content/uploads/2020/10/we-always-aim-higher.png"
          class="swiper-pagination-bullet swiper-pagination-bullet-active"
          width="50"
          height="50"
          alt="slider navigation"
          tabindex="0"
        />
        <img
          src="https://www.deliveryhero.com/wp-content/uploads/2020/10/we-care.png"
          class="swiper-pagination-bullet"
          width="50"
          height="50"
          alt="slider navigation"
          tabindex="0"
        />
        <img
          src="https://www.deliveryhero.com/wp-content/uploads/2020/10/we-deliver-solutions.png"
          class="swiper-pagination-bullet"
          width="50"
          height="50"
          alt="slider navigation"
          tabindex="0"
        />
      </div>
    </div>
  );
}

export default OtherSections;
