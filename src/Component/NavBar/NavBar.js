import React, { useEffect, useState } from "react";
import "./NavBar.css";

import deliveryherologo2 from "./deliveryherologo2.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  const HeaderLogo = (
    <g transform="translate(-64 -15)" fill="none" fill-rule="evenodd">
      <path d="M0 0h1350v60H0z"></path>
      <path d="M0 0h1350v60H0z"></path>
      <g transform="translate(64 15)" fill="#d61f26">
        <path d="M32.18 13.383l-.021.012-3.754 1.531-.115.053-.915 4.18c-.061.143-.244.177-.367.058l-2.735-3.234-.013-.01-15.423 6.618a.103.103 0 01-.104-.176l13.333-9.98-1.687-3.852c-.084-.175.071-.362.277-.31h.002l4.086 1.006 3.172-2.823c.137-.107.323-.03.358.14l.31 4.241 3.658 2.141c.157.1.134.332-.062.405zM30.316 1.258C25.582-.6 20.376.795 17.164 4.365L4.63 17.793c-.169.181-.09.408.115.438l3.34.205c.267.017.3.247.166.404L.086 27.646c-.142.152.03.392.224.332l11.656-3.683c.246-.085.436.135.332.328l-1.56 2.756c-.08.157.071.372.267.358l16.804-3.743c4.015-.636 7.6-3.316 9.193-7.374 2.4-6.09-.598-12.967-6.686-15.362z"></path>
        <path d="M75.362 21.69h-3.829L74.53 7.658l4.176-1.535-3.343 15.565"></path>
        <path d="M67.138 13.653c-.917 0-1.444.759-1.658 1.638 1.813 0 2.362-.566 2.362-1.036 0-.33-.295-.602-.704-.602m-2.087 4.096c-.02.096-.04.274-.04.37 0 .625.428.84 1.562.84 1.013 0 2.456-.255 3.297-.546v2.868c-1.073.39-2.753.603-4.1.603-3.16 0-4.682-.859-4.682-3.725 0-2.814 1.307-7.201 6.344-7.201 3.198 0 4.153 1.445 4.153 2.968 0 1.97-1.696 3.647-6.534 3.823"></path>
        <path d="M82.316 10.455c-1.305 0-2.145-.839-2.145-1.99 0-1.503 1.054-2.341 2.359-2.341 1.328 0 2.148.838 2.148 1.97 0 1.522-1.034 2.361-2.362 2.361"></path>
        <path d="M79.63 11.31h3.94l-1.992 10.224h-3.98L79 14.354"></path>
        <path d="M94.925 11.31c-1.367 3.435-2.87 6.79-4.78 10.224h-4.88c-.623-3.24-.898-6.654-.818-10.224h3.981a47.373 47.373 0 00.036 4.994c.021.43.061.838.099 1.251h.022c.174-.413.368-.82.545-1.251.682-1.68 1.306-3.51 1.777-4.994h4.018"></path>
        <path d="M100.252 13.653c-.915 0-1.445.759-1.661 1.638 1.817 0 2.363-.566 2.363-1.036 0-.33-.29-.602-.702-.602m-2.086 4.096a2.33 2.33 0 00-.042.37c0 .625.431.84 1.561.84 1.016 0 2.46-.255 3.299-.546v2.868c-1.074.39-2.752.603-4.097.603-3.163 0-4.684-.859-4.684-3.725 0-2.814 1.306-7.201 6.341-7.201 3.2 0 4.155 1.445 4.155 2.968 0 1.97-1.694 3.647-6.533 3.823"></path>
        <path d="M112.351 14.92a4.396 4.396 0 00-.957-.12c-.879 0-1.581.88-1.895 2.5l-.816 4.235H104.7l1.993-10.224h2.987l.096 1.363c.916-1.13 1.64-1.716 2.752-1.716.506 0 .78.039.915.078l-1.091 3.883"></path>
        <path d="M124.799 11.31c-1.758 4.567-3.318 7.902-4.88 10.207-2.262 3.376-4.254 4.157-6.304 4.157-.605 0-1.247-.16-1.561-.314l.626-2.947h1.366c.683 0 .974-.275 1.424-.879-.761-2.75-1.133-6.594-1.094-10.224h4.002a44.95 44.95 0 00.039 4.936c.02.448.056.878.095 1.309h.02c.177-.413.37-.82.547-1.27a50.015 50.015 0 001.736-4.975h3.984"></path>
        <path d="M140.1 21.534h-4.2l.997-5.153h-3.553l-.997 5.153h-4.192l2.652-13.62h4.197l-.955 4.86h3.551l.957-4.86h4.193l-2.651 13.62"></path>
        <path d="M148.37 13.653c-.918 0-1.442.759-1.658 1.638 1.815 0 2.364-.566 2.364-1.036 0-.33-.296-.602-.706-.602m-2.088 4.096a2.32 2.32 0 00-.037.37c0 .625.43.84 1.559.84 1.016 0 2.46-.255 3.299-.546v2.868c-1.073.39-2.752.603-4.1.603-3.16 0-4.682-.859-4.682-3.725 0-2.814 1.307-7.201 6.342-7.201 3.2 0 4.158 1.445 4.158 2.968 0 1.97-1.7 3.647-6.539 3.823"></path>
        <path d="M160.467 14.92a4.333 4.333 0 00-.954-.12c-.877 0-1.581.88-1.893 2.5l-.82 4.235h-3.979l1.988-10.224h2.985l.1 1.363c.916-1.13 1.637-1.716 2.748-1.716.51 0 .782.039.92.078l-1.095 3.883"></path>
        <path d="M167.006 14.1c-1.6 0-2.03 2.44-2.03 3.533 0 .877.37 1.13 1.095 1.13 1.577 0 1.988-2.44 1.988-3.55 0-.858-.35-1.113-1.053-1.113m-1.485 7.784c-3.102 0-4.622-1.327-4.622-3.98 0-2.947 1.462-6.946 6.615-6.946 3.084 0 4.624 1.366 4.624 3.982 0 3.005-1.464 6.944-6.617 6.944"></path>
        <path d="M52.543 18.294h-.781l1.404-7.182h1.095c1.657 0 2.262.98 2.262 2.323 0 2.715-1.504 4.86-3.98 4.86m3.719-6.928l2.652-2.545c-1.035-.623-2.455-.908-4.227-.908h-5.073l-2.651 13.621h5.289c6.144 0 8.601-4.293 8.601-8.76 0-1.161-.25-2.09-.732-2.81l-3.86 1.402"></path>
      </g>
    </g>
  );
  const [mobileview, setMobileview] = useState(false);
  const [scrollclass, setScrollclass] = useState("navbar ");
  useEffect(() => {
    setScrollclass("navbar scroll");
  }, []);

  const hanmburgerhandler = () => {
    setMobileview(!mobileview);
  };
  return (
    <nav className={mobileview ? "navbar2" : scrollclass}>
      <div className={mobileview ? "divdeliverylogo2" : "divdeliverylogo"}>
        {mobileview ? (
          <img src={deliveryherologo2} alt="delivery hero" />
        ) : (
          <svg width="173" height="28" xmlns="http://www.w3.org/2000/svg">
            {HeaderLogo}
          </svg>
        )}
      </div>

      <button
        onClick={hanmburgerhandler}
        className={mobileview ? "btnHamburgur2" : "btnHamburgur"}
      >
        <span className={mobileview ? "bar1" : "bar"}> </span>
        <span className={mobileview ? "bar2" : "bar"}> </span>
      </button>
      <div className={mobileview ? "divlink2" : "divlink"}>
        <ul>
          <li>
            <NavLink
              activeClassName="active"
              to="/About"
              className={mobileview ? "menuitem2" : "menuitem"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/Blog"
              className={mobileview ? "menuitem2" : "menuitem"}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/NewsRoom"
              className={mobileview ? "menuitem2" : "menuitem"}
            >
              Newsroom
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/Sustainability"
              className={mobileview ? "menuitem2" : "menuitem"}
            >
              Sustainability
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/Diversity"
              className={mobileview ? "menuitem2" : "menuitem"}
            >
              Diversity & Inclusion
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/Career"
              className={mobileview ? "menuitem_arrow2" : "menuitem_arrow"}
            >
              Career
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/investor"
              className={mobileview ? "menuitem_arrow2" : "menuitem_arrow"}
            >
              Investor Relations
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/Contact"
              className={mobileview ? "menuitem2" : "menuitem"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div></div>
    </nav>
  );
}
export default NavBar;
