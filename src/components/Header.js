import React from "react";
import styles from "./header.module.css";
import NavLink from "./NavLink";

import "../css/typography.css";

export const Header = () => {
  return (
    <div
      style={{ fontFamily: "Montserrat" }}
      className={styles.headerContainer}
    >
      <div>
        <NavLink path="/">Home</NavLink>
      </div>
      <div>
        <NavLink path="/shop">Shop</NavLink>
      </div>
      <div>
        <NavLink path="/about">About</NavLink>
      </div>
      <div>
        <NavLink path="/contact">Contact</NavLink>
      </div>
    </div>
  );
};
