import React from "react";
import style from "./contactDetails.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
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
      <div className={style.contactContainer}>
        <div className={style.icon}>
          <InstagramIcon />
        </div>
        <div className={style.contactInfo}>@arthey-paper-designs</div>
      </div>
      <div className={style.contactContainer}>
        <div className={style.icon}>
          <FacebookIcon />
        </div>
        <div className={style.contactInfo}>Facebook:</div>
      </div>
    </div>
  );
};

export default ContactDetails;
