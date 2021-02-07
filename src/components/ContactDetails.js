import React from "react";
import style from "./contactDetails.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { SocialMediaLinks } from "../utils/helpers";
// import { useStaticQuery, graphql } from "gatsby";

const ContactDetails = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // );

  return (
    <div className={style.container}>
      <div className={style.message}>
        Please get in touch to discuss personalization or ideas that you would
        like me to design for you.
      </div>
      <div className={style.contactContainer}>
        <div className={style.icon}>
          <MailOutlineIcon />
        </div>
        <div className={style.contactInfo}>artheypaperdesigns@hotmail.com</div>
      </div>
      <a
        href={SocialMediaLinks.instagram}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <div className={style.contactContainer}>
          <div className={style.icon}>
            <InstagramIcon />
          </div>
          <div className={style.contactInfo}>@artheypaperdesigns</div>
        </div>
      </a>
      <a
        href={SocialMediaLinks.facebook}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <div className={style.contactContainer}>
          <div className={style.icon}>
            <FacebookIcon />
          </div>
          <div className={style.contactInfo}>ArtheyPaperDesigns</div>
        </div>
      </a>
    </div>
  );
};

export default ContactDetails;