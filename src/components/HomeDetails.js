import React from "react";
import style from "./homeDetails.module.css";
import NavButton from "./common/NavButton";
import MeSrc from "../images/me.png";
import LogoSrc from "../images/logo.svg";

const HomeDetails = () => {
  return (
    <div className={style.container}>
      <div>
        <div
          style={{ backgroundImage: `url(${LogoSrc})` }}
          className={style.image}
        />

        <div className={style.imageText}>Get in touch</div>
      </div>
      <div>
        <div
          style={{ backgroundImage: `url(${MeSrc})` }}
          className={style.image}
        />

        <div className={style.imageText}>
          <NavButton to={"/about"} name={"About Lexie"} />
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
