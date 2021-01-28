import React from "react";
import style from "./homeTitle.module.css";
import BannerSrc from "../images/banner.png";

const HomeTitle = () => {
  return (
    <div
      style={{
        fontFamily: "DancingScript",
        backgroundImage: `url(${BannerSrc})`,
      }}
      className={style.name}
    >
      Arthey Paper Designs
    </div>
  );
};

export default HomeTitle;
