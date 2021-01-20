import * as React from "react";
import { Link } from "gatsby";

const NavLink = ({ children, path }) => {
  return <Link to={path}>{children}</Link>;
};

export default NavLink;
