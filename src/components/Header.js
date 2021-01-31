import React from "react";
import style from "./header.module.css";
import NavLink from "./NavLink";
import ReactHover, { Trigger, Hover } from "react-hover";
import { Link } from "gatsby";

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
          <div className={style.hoverText}>
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
  return (
    <div style={{ fontFamily: "Montserrat" }} className={style.headerContainer}>
      <div>
        <NavLink path="/">Home</NavLink>
      </div>
      <div>
        <ReactHover options={hoverOptions}>
          <Trigger type="trigger">
            <NavLink path="/shop">Shop</NavLink>
          </Trigger>
          <Hover type="hover">
            <HoverComponent />
          </Hover>
        </ReactHover>
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

export default Header;
