import React from "react";
import style from "./aboutDetails.module.css";
import MeSrc from "../images/me.jpg";
import About1 from "../images/about/1.jpg";
import About2 from "../images/about/2.jpg";
import About3 from "../images/about/3.jpg";
import About4 from "../images/about/4.jpg";

const AboutDetails = () => {
  return (
    <div className={style.container}>
      <div className={style.mainTitle} style={{ fontFamily: "Brittany" }}>
        About
      </div>
      <div
        style={{ backgroundImage: `url(${MeSrc})` }}
        className={style.image}
      />
      <div className={style.textContainer}>Hello!</div>
      <div className={style.divider} />
      <div className={style.textContainer}>
        I am Lexie and I have created Arthey Paper Designs to create stationery
        for every occasion.
      </div>
      <div className={style.textContainer}>
        I have included some images, at the bottom of this page, of the
        stationary I designed for my own wedding in 2019, designing and creating
        these built my desire for creating this business.
      </div>
      <div className={style.divider} />
      <div className={style.textContainer}>
        I am passionate about creating unique designs perfect for each person
        and each occasion. Fonts, wording and colours on most of my products can
        all be changed so please get in touch if you’d like to discuss these
        options.
      </div>
      <div className={style.textContainer}>
        Seen a wedding invitation design of mine you love but want it for a
        birthday, baby shower or other occasion? I am more than happy to
        redesign the product and make it perfect for your occasion, or if you
        have an idea in mind that you would like to see come to life, just send
        me a message and we can design this together!
      </div>
      <div className={style.divider} />
      <div className={style.textContainer}>
        Please do not hesitate to message if you have any questions, I would
        love to hear from you!
      </div>
      <div
        style={{ fontFamily: "Brittany", fontSize: "30px", marginTop: "35px" }}
        className={style.textContainer}
      >
        Lexie x
      </div>
      <div className={style.bottomImagesContainer}>
        <div
          className={style.bottomImages}
          style={{
            width: "60%",
            backgroundImage: `url(${About1})`,
          }}
        />
        <div
          className={style.bottomImages}
          style={{ width: "40%", backgroundImage: `url(${About3})` }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <div
          className={style.bottomImages}
          style={{ backgroundImage: `url(${About4})`, width: "40%" }}
        />
        <div
          className={style.bottomImages}
          style={{ backgroundImage: `url(${About2})`, width: "60%" }}
        />
      </div>
    </div>
  );
};

export default AboutDetails;
