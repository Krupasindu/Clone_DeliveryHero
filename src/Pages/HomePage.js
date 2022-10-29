import React from "react";
import NavBar from "../Component/NavBar/NavBar";
import VidComponent from "../Component/Body/VIdComponent";
import AboutCard from "../Component/Body/AboutCard";
import classes from "./Homepage.module.css";
import OtherSections from "../Component/Body/OtherSections";

function HomePage() {
  const cardvaluesobject = [
    {
      ID: 1,
      Header: "c. 70",
      SubHeader: "Countries",
      Content:
        "Delivery Hero is present in over 70 countries across four continents. We operate a wide range of local brands that are united behind our shared mission to always deliver an amazing experience - fast, easy, and to your door. ",
    },
    {
      ID: 2,
      Header: "€9.9b",
      SubHeader: "GMV",
      Content:
        "In the second quarter of 2022, Delivery Hero generated EUR 9.9 billion Gross Merchandise Value - that equals a year-on-year growth of 18%!",
    },
    {
      ID: 3,
      Header: "1,125",
      SubHeader: "Dmarts",
      Content:
        "Delivery Hero does not only connect customers with restaurants and shops they love. We also operate 1,125 Dmarts (small warehouses located in strategically relevant locations for delivery) across the globe by the end of Q2 2022.",
    },
  ];
  const Cardvalue = cardvaluesobject.map((item) => (
    <AboutCard
      Key={item.ID}
      ID={item.ID}
      Header={item.Header}
      SubHeader={item.SubHeader}
      Content={item.Content}
    />
  ));

  return (
    <div>
      <NavBar />
      <VidComponent />
      <div class={classes.aboutcarddiv}> {Cardvalue}</div>
      <OtherSections />
    </div>
  );
}

export default HomePage;
