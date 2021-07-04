import React, { useState } from "react";
import style from "./header.module.css";
import NavLink from "./NavLink";
import LogoSrc from "../images/logo.svg";
import Hamburger from "../images/hamburger.svg";
import { Link } from "gatsby";
import ExpandIcon from "./common/ExpandIcon";

const data = require("../data.json");

const SubMenu = () => {
  const shopCategories = data.shopCategories;
  return (
    <div className={style.submenu}>
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

const HamburgerMenu = () => {
  const shopCategories = data.shopCategories;
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <div className={style.hamburgerMenuContainer}>
      <div className={style.hamburgerDivider} />
      <div className={style.hamburgerTitle}>
        <NavLink path="/">Home</NavLink>
      </div>
      <div className={style.hamburgerDivider} />
      <div className={style.hamburgerTitle}>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            setShowSubMenu(!showSubMenu);
          }}
        >
          <div>Shop</div>
          <ExpandIcon />
        </div>
      </div>
      {showSubMenu ? (
        <div>
          {shopCategories.map((category) => {
            return (
              <div key={category.name}>
                <div className={style.hamburgerSubMenuDivider} />
                <div className={style.hamburgerSubMenu}>
                  <Link to={"/shop/" + category.slug} className={style.link}>
                    {category.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div />
      )}
      <div className={style.hamburgerDivider} />
      <div className={style.hamburgerTitle}>
        <NavLink path="/about">About</NavLink>
      </div>
      <div className={style.hamburgerDivider} />
      <div className={style.hamburgerTitle}>
        <NavLink path="/contact">Contact</NavLink>
      </div>
      <div className={style.hamburgerDivider} />
    </div>
  );
};

const Header = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  return (
    <div>
      <div className={style.headerContainer}>
        <div className={style.logoHamburgerContainer}>
          <div
            className={style.headerLogo}
            style={{ backgroundImage: `url(${LogoSrc})` }}
          />
          <div
            className={style.hamburger}
            style={{ backgroundImage: `url(${Hamburger})` }}
            onClick={() => {
              setHamburgerClicked(!hamburgerClicked);
            }}
          />
        </div>

        <div className={style.divider} />
        <div
          style={{ fontFamily: "Montserrat" }}
          className={style.navigationBar}
        >
          <div className={style.headerTitle}>
            <NavLink path="/">Home</NavLink>
          </div>
          <div className={style.verticalDivider} />

          <div className={style.menuitem}>
            <NavLink path="/shop">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>Shop</div>
                <ExpandIcon />
              </div>
            </NavLink>
            <SubMenu />
          </div>

          <div className={style.verticalDivider} />
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
      {hamburgerClicked ? <HamburgerMenu /> : <div />}
    </div>
  );
};

export default Header;
