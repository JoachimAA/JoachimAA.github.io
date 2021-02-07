import React, { useState } from "react";
import style from "./header.module.css";
import NavLink from "./NavLink";
import { Link } from "gatsby";
import LogoSrc from "../images/logo.svg";
import { LogoColours } from "../utils/helpers";

const data = require("../data.json");

// const HoverComponent = () => {
//   const shopCategories = data.shopCategories;
//   return (
//     <div
//       style={{
//         height: "200px",
//         width: "200px",
//         backgroundColor: "white",
//         border: "solid 1px #e6e6e6",
//       }}
//     >
//       {shopCategories.map((category) => {
//         return (
//           <div className={style.hoverText}>
//             <Link to={"/shop/" + category.slug} className={style.link}>
//               {category.name}
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const hoverOptions = {
  followCursor: false,
  shiftX: 0,
  shiftY: 0,
};

const Header = () => {
  const [hiddenStyle, setHiddenStyle] = useState({ display: "none" });
  return (
    <div className={style.headerContainer}>
      <div
        className={style.headerLogo}
        style={{ backgroundImage: `url(${LogoSrc})` }}
      />
      <div className={style.divider} />
      <div style={{ fontFamily: "Montserrat" }} className={style.navigationBar}>
        <div>
          <NavLink path="/">Home</NavLink>
        </div>
        <div className={style.verticalDivider} />
        <div
          className={style.shop}
          onMouseEnter={() => setHiddenStyle({ display: "block" })}
          onMouseLeave={() => setHiddenStyle({ display: "none" })}
        >
          <NavLink path="/shop">Shop</NavLink>
        </div>
        <div className={style.verticalDivider} />
        <div className={style.hidden} style={hiddenStyle}>
          show me
        </div>
        <div>
          <NavLink path="/about">About</NavLink>
        </div>
        <div className={style.verticalDivider} />
        <div>
          <NavLink path="/contact">Contact</NavLink>
        </div>
      </div>
      <div className={style.divider} />
    </div>
  );
};

export default Header;
