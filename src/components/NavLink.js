import * as React from "react";
import { Link } from "gatsby";
import styles from "./navlink.module.css";

const NavLink = ({ children, path }) => {
  return (
    <Link className={styles.link} to={path} activeClassName={styles.active}>
      {children}
    </Link>
  );
};

export default NavLink;
