import React, { useState } from "react";
import style from "./header.module.css";
import NavLink from "./NavLink";
import LogoSrc from "../images/logo.svg";
import ReactHover, { Trigger, Hover } from "react-hover";
import { Link } from "gatsby";
import ExpandIcon from "./common/ExpandIcon";

const data = require("../data.json");

const HoverComponent = () => {
  const shopCategories = data.shopCategories;
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        backgroundColor: "white",
        border: "solid 1px #e6e6e6",
      }}
    >
      {shopCategories.map((category) => {
        return (
          <div key={category.name} className={style.hoverText}>
            <Link to={"/shop/" + category.slug} className={style.link}>
              {category.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

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
        <div className={style.headerTitle}>
          <NavLink path="/">Home</NavLink>
        </div>
        <div className={style.verticalDivider} />

        {/* <ReactHover options={{ followCursor: false, shiftX: 0, shiftY: 0 }}>
          <Trigger> */}
        <div className={style.headerTitle}>
          <NavLink path="/shop">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>Shop</div>
              <ExpandIcon />
            </div>
          </NavLink>
        </div>
        {/* </Trigger>
          <Hover>
            <HoverComponent />
          </Hover>
        </ReactHover> */}

        <div className={style.verticalDivider} />
        <div className={style.hidden} style={hiddenStyle}>
          show me
        </div>
        <div className={style.headerTitle}>
          <NavLink path="/about">About</NavLink>
        </div>
        <div className={style.verticalDivider} />
        <div className={style.headerTitle}>
          <NavLink path="/contact">Contact</NavLink>
        </div>
      </div>
      <div className={style.divider} />
    </div>
  );
};

export default Header;
