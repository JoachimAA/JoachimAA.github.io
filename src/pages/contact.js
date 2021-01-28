import * as React from "react";
import { Header } from "../components/Header.js";
import ContactDetails from "../components/ContactDetails.js";
import Footer from "../components/Footer";

// styles

// markup
const Contact = () => {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Header />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Contact;
