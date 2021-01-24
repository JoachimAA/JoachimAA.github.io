import React from "react";
import style from "./contactDetails.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";

const ContactDetails = () => {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <div className={style.message}>
        Please get in touch to discuss personalization or ideas that you would
        like me to design for you
      </div>
      <div>Email: artheypaperdesigns@hotmail.com</div>
      <div style={{ display: "flex" }}>
        <div>
          <InstagramIcon />
        </div>
        <div>Instagram: @arthey-paper-designs</div>
      </div>
      <div>Facebook: </div>
    </div>
  );
};

export default ContactDetails;
