import React from "react";
import style from "./homeTitle.module.css";
import BannerSrc from "../images/banner.png";

const HomeTitle = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BannerSrc})`,
      }}
      className={style.name}
    />
  );
};

export default HomeTitle;
