import React from "react";
import styles from "./header.module.css";
import NavLink from "./NavLink";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <NavLink path="/">Home</NavLink>
      </div>
      <div>
        <NavLink path="/about">About</NavLink>
      </div>
      <div>Header tab</div>
    </div>
  );
};
