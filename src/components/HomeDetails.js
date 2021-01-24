import React from "react";
import style from "./homeDetails.module.css";
import NavButton from "./common/NavButton";

const HomeDetails = () => {
  return (
    <div className={style.container}>
      <div>
        <div className={style.image}>picture box</div>
        <div className={style.imageText}>Get in touch</div>
      </div>
      <div>
        <div className={style.image}>picture box</div>
        <div className={style.imageText}>
          <NavButton to={"/about"} name={"About Lexie"} />
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
