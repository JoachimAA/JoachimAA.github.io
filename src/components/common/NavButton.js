import React from "react";
import { Link } from "gatsby";

const NavButton = ({ path, name }) => {
  return (
    <div>
      <Link to={path}>{name}</Link>
    </div>
  );
};

export default NavButton;
