import React from "react";
import style from "./homeDetails.module.css";
import MeSrc from "../images/me.png";
import LogoSrc from "../images/logo.svg";
import { Link } from "gatsby";

const HomeDetails = () => {
  return (
    <div className={style.container}>
      <Link to={"/contact"} className={style.link}>
        <div
          style={{ backgroundImage: `url(${LogoSrc})` }}
          className={style.image}
        />

        <div className={style.imageText}>Get in touch</div>
      </Link>
      <div>
        <Link to={"/about"} className={style.link}>
          <div
            style={{ backgroundImage: `url(${MeSrc})` }}
            className={style.image}
          />

          <div className={style.imageText}>About Lexie</div>
        </Link>
      </div>
    </div>
  );
};

export default HomeDetails;
