import React from "react";
import style from "./homeTitle.module.css";
import BannerSrc from "../images/banner.png";

const HomeTitle = ({ title }) => {
  return (
    <div
      style={{
        fontFamily: "DancingScript",
        backgroundImage: `url(${BannerSrc})`,
      }}
      className={style.name}
    >
      {title}
    </div>
  );
};

export default HomeTitle;
