import React from "react";
import style from "./footer.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LogoSrc from "../images/logo.svg";
import { Link } from "gatsby";

const data = require("../data.json");

const Footer = () => {
  const shopCategories = data.shopCategories;
  return (
    <div style={{ fontFamily: "Montserrat" }} className={style.container}>
      <div className={style.categoriesContainer}>
        <div className={style.categoryContainer}>
          Shop
          <div className={style.categoryNamesContainer}>
            {shopCategories.map((category) => (
              <div className={style.categories} key={category.name}>
                <Link className={style.link} to={"/shop/" + category.slug}>
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={style.categoryContainer}>
          Information
          <div className={style.categoryNamesContainer}>
            <div className={style.categories}>
              <Link className={style.link} to={"/about"}>
                About
              </Link>
            </div>
            <div className={style.categories}>
              <Link className={style.link} to={"/contact"}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className={style.categoryContainer}>
          <div
            className={style.logo}
            style={{ backgroundImage: `url(${LogoSrc})` }}
          />
        </div>
      </div>
      <div className={style.socialContainer}>
        <div className={style.icon}>
          <InstagramIcon fontSize="large" />
        </div>
        <div className={style.icon}>
          <FacebookIcon fontSize="large" />
        </div>
        <div className={style.icon}>
          <MailOutlineIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
